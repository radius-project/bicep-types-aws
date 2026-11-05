import yargs from 'yargs/yargs';
import path from "path";
import fs from "fs";
import { writeTypesJson } from "bicep-types";
import { writeMarkdown } from "bicep-types";
import { SchemaRecord } from "./schemarecord";
import { convertSchemaRecordToTypes } from "./convert";
import { applyRadius, defaultRadiusPaths, loadPreviousRadius, loadRadius, newClashes, RadiusPaths, renderClashReport } from "./radius";
import { logOut, ILogger, defaultLogger, findRecursive } from './utils';
import { writeFile, readFile } from 'fs/promises';
import { TypeFile, buildIndex, readTypesJson, writeIndexJson, writeIndexMarkdown, TypeSettings } from 'bicep-types'; 

const parser = yargs(process.argv.slice(2)).options({
    input: { type: 'string', demandOption: true },
    output: { type: 'string', demandOption: true },
    releaseVersion: { type: 'string', default: 'latest' },
    radius: { type: 'string', default: '../../radius', description: 'Radius checkout to read Radius-owned schemas from' },
    radiusNativeSchemas: { type: 'string', default: defaultRadiusPaths.nativeSchemas, description: 'schemas that replace AWS\'s, relative to --radius' },
    radiusHandwrittenSchemas: { type: 'string', default: defaultRadiusPaths.handwrittenSchemas, description: 'schemas of types with no CloudFormation type, relative to --radius' },
    radiusExtraProperties: { type: 'string', default: defaultRadiusPaths.extraProperties, description: 'extra read-only properties of each type, relative to --radius' },
    clashReport: { type: 'string', description: 'file to write a Markdown report to when AWS and Radius use the same type or property name' },
    previousInput: { type: 'string', description: 'previous AWS types. With --previous-radius, the clash report leaves out clashes both already have' },
    previousRadius: { type: 'string', description: 'previous Radius checkout. With --previous-input, the clash report leaves out clashes both already have' }
}).argv;

interface Args {
    input: string
    output: string
    releaseVersion: string
    radius: string
    radiusNativeSchemas: string
    radiusHandwrittenSchemas: string
    radiusExtraProperties: string
    clashReport?: string
    previousInput?: string
    previousRadius?: string
}

async function main() {
    const argv: Args = await parser

    try {
        argv.input = path.resolve(argv.input)
        argv.output = path.resolve(argv.output)

        console.info(`reading directory ${argv.input}`)
        const start = Date.now();

        const downloaded = readRecords(argv.input)

        const radiusPaths = (root: string): RadiusPaths => ({
            root: path.resolve(root),
            nativeSchemas: argv.radiusNativeSchemas,
            handwrittenSchemas: argv.radiusHandwrittenSchemas,
            extraProperties: argv.radiusExtraProperties,
        })
        console.info(`reading Radius schemas from ${path.resolve(argv.radius)}`)
        const applied = applyRadius(downloaded, loadRadius(radiusPaths(argv.radius)))

        applied.missingTypes.forEach(type => console.warn(`skipping the extra properties of ${type}, which is not in the extension`))

        if (applied.clashes.length > 0) {
            console.warn(`AWS and Radius use the same name for some types or properties:\n${renderClashReport(applied.clashes)}`)
        }
        if (argv.clashReport) {
            const clashes = newClashes(applied.clashes, {
                aws: argv.previousInput ? readRecords(path.resolve(argv.previousInput)) : undefined,
                radius: argv.previousRadius ? loadPreviousRadius(radiusPaths(argv.previousRadius)) : undefined,
            })
            const report = renderClashReport(clashes)
            const reportPath = path.resolve(argv.clashReport)
            if (report) {
                fs.writeFileSync(reportPath, report)
            } else {
                fs.rmSync(reportPath, { force: true })
            }
        }

        const inputs = applied.records.map(record => {
            const parts = record.type.split('::')
            return { namespace: `${parts[0]}.${parts[1]}`, record: record };
        })

        const groupedByNamespace = groupBy(inputs, d => d.namespace, d => d.record)
        const definitions = Object.entries(groupedByNamespace).map(([namespace, records]) => {
            return { namespace: namespace, apiVersion: 'default', types: convertSchemaRecordToTypes(records), };
        });

        console.info(`writing output to ${argv.output}`)

        Object.entries(definitions).forEach(([_, definition]) => {
            console.log(`writing ${definition.namespace}`)
            const outFolder = path.resolve(argv.output, `aws/${definition.namespace}/${definition.apiVersion}`.toLowerCase());
            fs.mkdirSync(outFolder, { recursive: true })

            // write types.json
            fs.writeFileSync(`${outFolder}/types.json`, writeTypesJson(definition.types))

            // writer types.md
            fs.writeFileSync(`${outFolder}/types.md`, writeMarkdown(definition.types, `${definition.namespace} @ ${definition.apiVersion}`))
        })

        await buildTypeIndex(defaultLogger, argv.output, argv.releaseVersion)

        console.info(`generator took ${Date.now() - start}ms`);
    } catch (err) {
        console.error("An error was encountered while handling a request:", err);
        throw err;
    }
}

function readRecords(directory: string): SchemaRecord[] {
    return fs.readdirSync(directory).filter(file => file.endsWith('.json')).map(file => {
        const rawdata = fs.readFileSync(path.resolve(directory, file), { encoding: 'utf8' });
        return JSON.parse(rawdata) as SchemaRecord;
    })
}

const groupBy = <T, K extends keyof any, V>(list: T[], getKey: (item: T) => K, getValue: (item: T) => V) =>
    list.reduce((previous, currentItem) => {
        const group = getKey(currentItem);
        if (!previous[group]) previous[group] = [];
        previous[group].push(getValue(currentItem));
        return previous;
    }, {} as Record<K, V[]>);

async function buildTypeIndex(logger: ILogger, baseDir: string, version: string) {
  const typesPaths = await findRecursive(baseDir, filePath => {
    return path.basename(filePath) === 'types.json';
  });

  const typeFiles: TypeFile[] = [];
  for (const typePath of typesPaths) {
    const content = await readFile(typePath, { encoding: 'utf8' });
    typeFiles.push({
      relativePath: path.relative(baseDir, typePath),
      types: readTypesJson(content),
    });
  }
  const indexContent = await buildIndex(typeFiles,  log => logOut(logger, log),  {name: "aws", version: version, isSingleton: false} as TypeSettings);

  await writeFile(`${baseDir}/index.json`, writeIndexJson(indexContent));
  await writeFile(`${baseDir}/index.md`, writeIndexMarkdown(indexContent));
}

main()