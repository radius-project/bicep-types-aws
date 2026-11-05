import fs from "fs";
import os from "os";
import path from "path";
import { afterAll, describe, expect, test } from '@jest/globals';
import { BicepType, ObjectType, ObjectTypePropertyFlags, TypeBaseKind } from "bicep-types";
import { convertSchemaRecordToTypes } from "./convert";
import { applyRadius, defaultRadiusPaths, loadPreviousRadius, loadRadius, newClashes, RadiusInputs, readExtraProperties, readSchemas, renderClashReport } from "./radius";
import { Schema, SchemaRecord } from "./schemarecord";

const fixtureRoot = path.resolve('./testdata/radius')
const fixturePaths = { root: fixtureRoot, ...defaultRadiusPaths }

function awsRecord(type: string, properties: Schema['properties'] = { Id: { type: 'string' } as any }): SchemaRecord {
    return {
        arn: `arn:aws:cloudformation:us-west-2::type/resource/${type.replace(/::/g, '-')}`,
        type: type,
        time: '2026-10-01T00:00:00Z',
        schema: {
            typeName: type,
            properties: properties,
            primaryIdentifier: ['/properties/Id'],
            readOnlyProperties: ['/properties/Id'],
            additionalProperties: false,
        },
    }
}

const tempDirs: string[] = []

function tempDir(): string {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'radius-schemas-'))
    tempDirs.push(dir)
    return dir
}

afterAll(() => tempDirs.forEach(dir => fs.rmSync(dir, { recursive: true, force: true })))

function writeJson(file: string, value: unknown) {
    fs.mkdirSync(path.dirname(file), { recursive: true })
    fs.writeFileSync(file, typeof value === 'string' ? value : JSON.stringify(value))
}

function emptyInputs(): RadiusInputs {
    return { native: new Map(), handwritten: new Map(), extraProperties: {} }
}

describe('readSchemas', () => {
    test('reads schemas recursively, keyed by typeName, and skips metadata files', () => {
        const schemas = readSchemas(fixtureRoot, defaultRadiusPaths.handwrittenSchemas)

        expect([...schemas.keys()].sort()).toEqual(['AWS::IAM::AccountPasswordPolicy', 'AWS::S3::Object'])
        expect(schemas.get('AWS::IAM::AccountPasswordPolicy')!.file).toBe(path.join('pkg/aws/schemas/handwritten/iam/aws-s3-bucket.json'))
        expect(schemas.get('AWS::S3::Object')!.file).toBe(path.join('pkg/aws/schemas/handwritten/s3/aws-s3-object.json'))
        expect(schemas.get('AWS::S3::Object')!.schema.properties).toHaveProperty('Body')
    })

    test('a directory that does not exist has no schemas', () => {
        expect(readSchemas(fixtureRoot, 'pkg/aws/schemas/missing').size).toBe(0)
    })

    test('fails when two files have the same typeName', () => {
        const root = tempDir()
        writeJson(path.join(root, 'schemas/a/aws-s3-object.json'), { typeName: 'AWS::S3::Object' })
        writeJson(path.join(root, 'schemas/b/other.json'), { typeName: 'AWS::S3::Object' })

        expect(() => readSchemas(root, 'schemas')).toThrow(
            `type AWS::S3::Object has a schema in both ${path.join('schemas/a/aws-s3-object.json')} and ${path.join('schemas/b/other.json')}`)
    })

    test('fails on invalid JSON', () => {
        const root = tempDir()
        writeJson(path.join(root, 'schemas/aws-s3-object.json'), '{ "typeName": ')

        expect(() => readSchemas(root, 'schemas')).toThrow(`${path.join('schemas/aws-s3-object.json')} is not valid JSON`)
    })

    test.each([
        ['no typeName', { properties: {} }],
        ['a typeName with a path', { typeName: 'AWS::S3::../../Object' }],
        ['a typeName with two parts', { typeName: 'AWS::Object' }],
    ])('fails on a schema with %s', (_, schema) => {
        const root = tempDir()
        writeJson(path.join(root, 'schemas/aws-s3-object.json'), schema)

        expect(() => readSchemas(root, 'schemas')).toThrow(`${path.join('schemas/aws-s3-object.json')} has no valid typeName`)
    })

    test('fails on a file that is not a JSON object', () => {
        const root = tempDir()
        writeJson(path.join(root, 'schemas/aws-s3-object.json'), [])

        expect(() => readSchemas(root, 'schemas')).toThrow('is not a JSON object')
    })
})

describe('readExtraProperties', () => {
    test('reads the MSK broker addresses', () => {
        const extra = readExtraProperties(path.resolve(fixtureRoot, defaultRadiusPaths.extraProperties))

        expect(Object.keys(extra).sort()).toEqual(['AWS::MSK::Cluster', 'AWS::MSK::ServerlessCluster'])
        expect(Object.keys(extra['AWS::MSK::Cluster'])).toHaveLength(14)
        expect(Object.keys(extra['AWS::MSK::ServerlessCluster']).sort()).toEqual(['BootstrapBrokerStringSaslIam', 'BootstrapBrokerStringSaslIamIpv6'])
        expect(extra['AWS::MSK::ServerlessCluster']['BootstrapBrokerStringSaslIam']).toEqual({ type: 'string', description: 'The SASL/IAM broker addresses.' })
    })

    test.each([
        ['not an object', [], 'must map each type name to its extra properties'],
        ['an invalid type name', { 'AWS::MSK': {} }, 'invalid type name "AWS::MSK"'],
        ['a type with no property map', { 'AWS::MSK::Cluster': 'x' }, 'must map AWS::MSK::Cluster to its properties'],
        ['an invalid property name', { 'AWS::MSK::Cluster': { 'Broker/String': { type: 'string' } } }, 'invalid property name "Broker/String" for AWS::MSK::Cluster'],
        ['a property with no schema', { 'AWS::MSK::Cluster': { BrokerString: 'string' } }, 'must give property BrokerString of AWS::MSK::Cluster a schema'],
        ['invalid JSON', '{', 'is not valid JSON'],
    ])('fails on %s', (_, content, message) => {
        const file = path.join(tempDir(), 'extra_properties.json')
        writeJson(file, content)

        expect(() => readExtraProperties(file)).toThrow(message)
    })
})

describe('loadRadius', () => {
    test('reads both schema directories and the extra properties', () => {
        const radius = loadRadius(fixturePaths)

        expect([...radius.native.keys()].sort()).toEqual(['AWS::CodeBuild::Project', 'AWS::DocDB::DBCluster'])
        expect([...radius.handwritten.keys()].sort()).toEqual(['AWS::IAM::AccountPasswordPolicy', 'AWS::S3::Object'])
        expect(Object.keys(radius.extraProperties).sort()).toEqual(['AWS::MSK::Cluster', 'AWS::MSK::ServerlessCluster'])
    })

    test('fails when the Radius checkout is missing', () => {
        const root = path.join(tempDir(), 'radius')

        expect(() => loadRadius({ ...fixturePaths, root })).toThrow('git submodule update --init radius')
    })

    test('fails when a type is in both schema directories', () => {
        const root = tempDir()
        writeJson(path.join(root, defaultRadiusPaths.extraProperties), {})
        writeJson(path.join(root, defaultRadiusPaths.nativeSchemas, 'aws-s3-object.json'), { typeName: 'AWS::S3::Object' })
        writeJson(path.join(root, defaultRadiusPaths.handwrittenSchemas, 'aws-s3-object.json'), { typeName: 'AWS::S3::Object' })

        expect(() => loadRadius({ ...fixturePaths, root })).toThrow('type AWS::S3::Object has a schema in both')
    })

    test('reads paths given in place of the defaults', () => {
        const root = tempDir()
        writeJson(path.join(root, 'native/aws-docdb-dbcluster.json'), { typeName: 'AWS::DocDB::DBCluster' })
        writeJson(path.join(root, 'extra.json'), { 'AWS::MSK::Cluster': { BrokerString: { type: 'string' } } })

        const radius = loadRadius({ root, nativeSchemas: 'native', handwrittenSchemas: 'handwritten', extraProperties: 'extra.json' })

        expect([...radius.native.keys()]).toEqual(['AWS::DocDB::DBCluster'])
        expect(radius.handwritten.size).toBe(0)
        expect(Object.keys(radius.extraProperties)).toEqual(['AWS::MSK::Cluster'])
    })
})

describe('applyRadius', () => {
    const downloaded = () => [
        awsRecord('AWS::CodeBuild::Project', { Name: { type: 'string' } as any, Source: { type: 'object' } as any }),
        awsRecord('AWS::EC2::VPC'),
        awsRecord('AWS::MSK::Cluster'),
        awsRecord('AWS::MSK::ServerlessCluster', {
            Id: { type: 'string' } as any,
            BootstrapBrokerStringSaslIam: { type: 'integer', description: "AWS's own property" } as any,
        }),
    ]

    test('a native schema replaces the downloaded one, or adds the type', () => {
        const records = downloaded()
        const result = applyRadius(records, { ...loadRadius(fixturePaths), handwritten: new Map(), extraProperties: {} })

        expect(result.records.map(r => r.type)).toEqual([
            'AWS::CodeBuild::Project', 'AWS::EC2::VPC', 'AWS::MSK::Cluster', 'AWS::MSK::ServerlessCluster', 'AWS::DocDB::DBCluster'])
        const project = result.records[0]
        expect(project.schema.description).toBe("Radius's schema for a CodeBuild project.")
        expect(Object.keys(project.schema.properties!)).toEqual(['Name', 'Arn', 'ServiceRole'])
        expect(result.records[4].schema.writeOnlyProperties).toEqual(['/properties/MasterUserPassword'])
        expect(result.clashes).toEqual([])
        expect(records).toEqual(downloaded())
    })

    test('a hand-written schema adds the type', () => {
        const result = applyRadius(downloaded(), { ...emptyInputs(), handwritten: loadRadius(fixturePaths).handwritten })

        expect(result.records.map(r => r.type).slice(4)).toEqual(['AWS::IAM::AccountPasswordPolicy', 'AWS::S3::Object'])
        expect(result.records[5]).toEqual({ arn: '', type: 'AWS::S3::Object', time: '', schema: loadRadius(fixturePaths).handwritten.get('AWS::S3::Object')!.schema })
        expect(result.clashes).toEqual([])
    })

    test('when AWS publishes a hand-written type, the Radius schema is kept and the type is a clash', () => {
        const records = [...downloaded(), awsRecord('AWS::S3::Object')]
        const result = applyRadius(records, { ...emptyInputs(), handwritten: loadRadius(fixturePaths).handwritten })

        const object = result.records.filter(r => r.type === 'AWS::S3::Object')
        expect(object).toHaveLength(1)
        expect(object[0].schema.properties).toHaveProperty('Body')
        expect(object[0].arn).toBe('')
        expect(result.clashes).toEqual([{ type: 'AWS::S3::Object', file: path.join('pkg/aws/schemas/handwritten/s3/aws-s3-object.json') }])
    })

    test('adds the MSK extra properties as read-only', () => {
        const result = applyRadius(downloaded(), { ...emptyInputs(), extraProperties: loadRadius(fixturePaths).extraProperties })

        const cluster = result.records.find(r => r.type === 'AWS::MSK::Cluster')!
        expect(Object.keys(cluster.schema.properties!)).toHaveLength(15)
        expect(cluster.schema.properties!['BootstrapBrokerStringSaslIam']).toEqual({ type: 'string', description: 'The SASL/IAM broker addresses.' })
        expect(cluster.schema.readOnlyProperties).toEqual(['/properties/Id', ...Object.keys(loadRadius(fixturePaths).extraProperties['AWS::MSK::Cluster']).map(p => `/properties/${p}`)])
        expect(result.missingTypes).toEqual([])
    })

    test('skips an extra property when the type already has one with the same name', () => {
        const records = downloaded()
        const result = applyRadius(records, { ...emptyInputs(), extraProperties: loadRadius(fixturePaths).extraProperties })

        const serverless = result.records.find(r => r.type === 'AWS::MSK::ServerlessCluster')!
        expect(serverless.schema.properties!['BootstrapBrokerStringSaslIam']).toEqual({ type: 'integer', description: "AWS's own property" })
        expect(serverless.schema.properties!['BootstrapBrokerStringSaslIamIpv6']).toEqual({ type: 'string', description: 'The SASL/IAM broker addresses for IPv6 connectivity.' })
        expect(serverless.schema.readOnlyProperties).toEqual(['/properties/Id', '/properties/BootstrapBrokerStringSaslIamIpv6'])
        expect(result.clashes).toEqual([{ type: 'AWS::MSK::ServerlessCluster', property: 'BootstrapBrokerStringSaslIam' }])
        expect(records).toEqual(downloaded())
    })

    test('adds extra properties to a Radius schema', () => {
        const radius = loadRadius(fixturePaths)
        const result = applyRadius([], { ...radius, extraProperties: { 'AWS::DocDB::DBCluster': { Port: { type: 'string' } as any } } })

        const cluster = result.records.find(r => r.type === 'AWS::DocDB::DBCluster')!
        expect(cluster.schema.readOnlyProperties).toEqual(['/properties/Endpoint', '/properties/Port'])
        expect(radius.native.get('AWS::DocDB::DBCluster')!.schema.readOnlyProperties).toEqual(['/properties/Endpoint'])
    })

    test('adds extra properties to a schema with no properties', () => {
        const record = awsRecord('AWS::MSK::Cluster')
        delete record.schema.properties
        delete record.schema.readOnlyProperties

        const result = applyRadius([record], { ...emptyInputs(), extraProperties: { 'AWS::MSK::Cluster': { BrokerString: { type: 'string' } as any } } })

        expect(result.records[0].schema.properties).toEqual({ BrokerString: { type: 'string' } })
        expect(result.records[0].schema.readOnlyProperties).toEqual(['/properties/BrokerString'])
    })

    test('reports extra properties for a type that is not in the extension', () => {
        const result = applyRadius([awsRecord('AWS::MSK::Cluster')], { ...emptyInputs(), extraProperties: loadRadius(fixturePaths).extraProperties })

        expect(result.missingTypes).toEqual(['AWS::MSK::ServerlessCluster'])
        expect(result.clashes).toEqual([])
    })

    test('the Bicep type marks extra properties read-only', () => {
        const result = applyRadius(downloaded(), { ...emptyInputs(), extraProperties: loadRadius(fixturePaths).extraProperties })
        const types = convertSchemaRecordToTypes(result.records.filter(r => r.type === 'AWS::MSK::Cluster'))

        const properties = types.find(t => t.type === TypeBaseKind.ObjectType && (t as ObjectType).name === 'AWS.MSK/ClusterProperties') as ObjectType
        expect(properties.properties['BootstrapBrokerStringSaslIam'].flags).toBe(ObjectTypePropertyFlags.ReadOnly)
        expect(properties.properties['BootstrapBrokerStringSaslIam'].description).toBe('The SASL/IAM broker addresses.')
    })
})

describe('loadPreviousRadius', () => {
    test('reads the same inputs as loadRadius', () => {
        expect(loadPreviousRadius(fixturePaths)).toEqual(loadRadius(fixturePaths))
    })

    test('a commit with no extra properties file has none', () => {
        const root = tempDir()
        writeJson(path.join(root, defaultRadiusPaths.handwrittenSchemas, 'aws-s3-object.json'), { typeName: 'AWS::S3::Object' })

        const radius = loadPreviousRadius({ ...fixturePaths, root })

        expect([...radius.handwritten.keys()]).toEqual(['AWS::S3::Object'])
        expect(radius.native.size).toBe(0)
        expect(radius.extraProperties).toEqual({})
    })
})

describe('newClashes', () => {
    const typeClash = { type: 'AWS::S3::Object', file: 'pkg/aws/schemas/handwritten/aws-s3-object.json' }
    const propertyClash = { type: 'AWS::MSK::Cluster', property: 'BootstrapBrokerString' }
    const clashes = [typeClash, propertyClash]

    // AWS types that already had both clashing names.
    const awsHadBoth = () => [
        awsRecord('AWS::S3::Object'),
        awsRecord('AWS::MSK::Cluster', { Id: { type: 'string' } as any, BootstrapBrokerString: { type: 'string' } as any }),
    ]

    // Radius inputs that already had both clashing names.
    const radiusHadBoth = (): RadiusInputs => ({
        native: new Map(),
        handwritten: loadRadius(fixturePaths).handwritten,
        extraProperties: { 'AWS::MSK::Cluster': { BootstrapBrokerString: { type: 'string' } as any } },
    })

    test('with no previous inputs, every clash is new', () => {
        expect(newClashes(clashes, {})).toEqual(clashes)
    })

    test('leaves out a clash both sides already had', () => {
        expect(newClashes(clashes, { aws: awsHadBoth(), radius: radiusHadBoth() })).toEqual([])
    })

    test('reports a type or property AWS newly publishes', () => {
        expect(newClashes(clashes, { aws: [], radius: radiusHadBoth() })).toEqual(clashes)
        expect(newClashes(clashes, { aws: [awsRecord('AWS::MSK::Cluster')], radius: radiusHadBoth() })).toEqual(clashes)
        expect(newClashes(clashes, { aws: awsHadBoth().slice(0, 1), radius: radiusHadBoth() })).toEqual([propertyClash])
    })

    test('reports a hand-written schema Radius newly adds for a type AWS already publishes', () => {
        const radius = { ...radiusHadBoth(), handwritten: new Map() }

        expect(newClashes(clashes, { aws: awsHadBoth(), radius })).toEqual([typeClash])
    })

    test('reports a type that moved from the native to the hand-written schemas', () => {
        const radius = { ...radiusHadBoth(), native: radiusHadBoth().handwritten, handwritten: new Map() }

        expect(newClashes(clashes, { aws: awsHadBoth(), radius })).toEqual([typeClash])
    })

    test('reports an extra property Radius newly adds with a name AWS already uses', () => {
        expect(newClashes(clashes, { aws: awsHadBoth(), radius: { ...radiusHadBoth(), extraProperties: {} } })).toEqual([propertyClash])
        expect(newClashes(clashes, { aws: awsHadBoth(), radius: { ...radiusHadBoth(), extraProperties: { 'AWS::MSK::Cluster': {} } } })).toEqual([propertyClash])
    })

    test('with only one side given, compares only that side', () => {
        expect(newClashes(clashes, { aws: awsHadBoth() })).toEqual([])
        expect(newClashes(clashes, { aws: [] })).toEqual(clashes)
        expect(newClashes(clashes, { radius: radiusHadBoth() })).toEqual([])
        expect(newClashes(clashes, { radius: emptyInputs() })).toEqual(clashes)
    })

    test('treats a previous AWS type with no properties as having none', () => {
        const previous = awsRecord('AWS::MSK::Cluster')
        delete previous.schema.properties

        expect(newClashes([propertyClash], { aws: [previous], radius: radiusHadBoth() })).toEqual([propertyClash])
    })

    test('reports a Radius schema newly added in the fixture checkout', () => {
        const before = tempDir()
        writeJson(path.join(before, defaultRadiusPaths.extraProperties), {})
        const records = [awsRecord('AWS::S3::Object')]

        const clashes = applyRadius(records, loadRadius(fixturePaths)).clashes

        expect(clashes).toEqual([{ type: 'AWS::S3::Object', file: path.join('pkg/aws/schemas/handwritten/s3/aws-s3-object.json') }])
        expect(newClashes(clashes, { aws: records, radius: loadPreviousRadius({ ...fixturePaths, root: before }) })).toEqual(clashes)
        expect(newClashes(clashes, { aws: records, radius: loadPreviousRadius(fixturePaths) })).toEqual([])
    })
})

describe('renderClashReport', () => {
    test('is empty when nothing clashes', () => {
        expect(renderClashReport([])).toBe('')
    })

    test('lists type and property clashes', () => {
        expect(renderClashReport([
            { type: 'AWS::S3::Object', file: 'pkg/aws/schemas/handwritten/aws-s3-object.json' },
            { type: 'AWS::MSK::Cluster', property: 'BootstrapBrokerString' },
        ])).toBe([
            '## Types',
            '',
            'AWS publishes these types, and Radius also provides them with a hand-written schema. The extension keeps the Radius schema. Compare the two schemas, and remove the Radius schema and handler only if Cloud Control can create the type in every region Radius supports and it behaves the same.',
            '',
            '| Type | Radius schema |',
            '| ---- | ------------- |',
            '| `AWS::S3::Object` | `pkg/aws/schemas/handwritten/aws-s3-object.json` |',
            '',
            '## Extra properties',
            '',
            "These types have a property with the same name as one of Radius's extra read-only properties. The extension keeps the type's own property and skips the extra one. Compare the two, then rename or remove the extra property in Radius.",
            '',
            '| Type | Property |',
            '| ---- | -------- |',
            '| `AWS::MSK::Cluster` | `BootstrapBrokerString` |',
            '',
        ].join('\n'))
    })

    test('leaves out a section with no clashes', () => {
        const report = renderClashReport([{ type: 'AWS::MSK::Cluster', property: 'BootstrapBrokerString' }])

        expect(report).not.toContain('## Types')
        expect(report.startsWith('## Extra properties')).toBe(true)
    })

    test('a second run gives the same report', () => {
        const radius = loadRadius(fixturePaths)
        const records = [awsRecord('AWS::S3::Object'), awsRecord('AWS::MSK::Cluster', { Id: { type: 'string' } as any, BootstrapBrokerString: { type: 'string' } as any })]

        expect(renderClashReport(applyRadius(records, radius).clashes)).toBe(renderClashReport(applyRadius(records, radius).clashes))
    })
})
