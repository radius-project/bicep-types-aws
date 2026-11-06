// -------------------------------------------------------------
// Copyright 2026 The Radius Authors.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//     http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ------------------------------------------------------------.

// Reads the AWS schemas Radius owns from a Radius checkout and applies them to the
// downloaded AWS types, so the Bicep extension matches what Radius serves.

import fs from "fs";
import path from "path";
import cloneDeep from "lodash/cloneDeep";
import { Schema, SchemaDefinition, SchemaRecord } from "./schemarecord";

export const defaultRadiusPaths = {
    nativeSchemas: "pkg/aws/schemas/native",
    handwrittenSchemas: "pkg/aws/schemas/handwritten",
    extraProperties: "pkg/aws/extraproperties/extra_properties.json",
}

export interface RadiusPaths {
    // The Radius checkout. Every other path is relative to it.
    root: string
    // Schemas of types that have a CloudFormation type, which replace AWS's.
    nativeSchemas: string
    // Schemas of types with no CloudFormation type.
    handwrittenSchemas: string
    // Extra read-only properties of each type.
    extraProperties: string
}

export interface RadiusSchema {
    schema: Schema
    // The file the schema came from, relative to the Radius checkout.
    file: string
}

export type ExtraProperties = { [type: string]: { [property: string]: SchemaDefinition } }

export interface RadiusInputs {
    native: Map<string, RadiusSchema>
    handwritten: Map<string, RadiusSchema>
    extraProperties: ExtraProperties
}

export interface Clash {
    type: string
    // Set when an extra property clashes. Unset when a hand-written type clashes.
    property?: string
    // Set when a hand-written type clashes.
    file?: string
}

export interface RadiusResult {
    records: SchemaRecord[]
    clashes: Clash[]
    // Types that have extra properties but are not in the extension.
    missingTypes: string[]
}

const typeNamePattern = /^[A-Za-z0-9]+::[A-Za-z0-9]+::[A-Za-z0-9]+$/
const propertyNamePattern = /^[A-Za-z0-9_]+$/
const metadataSuffix = ".metadata.json"

export function loadRadius(paths: RadiusPaths): RadiusInputs {
    const extraPropertiesPath = path.resolve(paths.root, paths.extraProperties)
    if (!fs.existsSync(extraPropertiesPath)) {
        throw new Error(`could not find ${extraPropertiesPath}. Check that the Radius checkout is at ${paths.root}; in this repository, run "git submodule update --init radius"`)
    }

    const native = readSchemas(paths.root, paths.nativeSchemas)
    const handwritten = readSchemas(paths.root, paths.handwrittenSchemas)
    for (const [type, entry] of handwritten) {
        const other = native.get(type)
        if (other) {
            throw new Error(`type ${type} has a schema in both ${other.file} and ${entry.file}`)
        }
    }

    return { native, handwritten, extraProperties: readExtraProperties(extraPropertiesPath) }
}

// loadPreviousRadius reads the Radius inputs from an earlier Radius commit. Unlike
// loadRadius, a missing extra properties file means there are none, because an older
// commit may not have one.
export function loadPreviousRadius(paths: RadiusPaths): RadiusInputs {
    const extraPropertiesPath = path.resolve(paths.root, paths.extraProperties)
    return {
        native: readSchemas(paths.root, paths.nativeSchemas),
        handwritten: readSchemas(paths.root, paths.handwrittenSchemas),
        extraProperties: fs.existsSync(extraPropertiesPath) ? readExtraProperties(extraPropertiesPath) : {},
    }
}

// readSchemas reads every schema file under the directory, keyed by each schema's
// typeName. A directory that does not exist has no schemas.
export function readSchemas(root: string, directory: string): Map<string, RadiusSchema> {
    const schemas = new Map<string, RadiusSchema>()
    const start = path.resolve(root, directory)
    if (!fs.existsSync(start)) {
        return schemas
    }

    for (const fullPath of findSchemaFiles(start)) {
        const file = path.relative(root, fullPath)
        let schema: Schema
        try {
            schema = JSON.parse(fs.readFileSync(fullPath, { encoding: "utf8" }))
        } catch (err) {
            throw new Error(`${file} is not valid JSON: ${(err as Error).message}`)
        }

        if (typeof schema !== "object" || schema === null || Array.isArray(schema)) {
            throw new Error(`${file} is not a JSON object`)
        }
        if (typeof schema.typeName !== "string" || !typeNamePattern.test(schema.typeName)) {
            throw new Error(`${file} has no valid typeName, such as "AWS::S3::Object"`)
        }

        const other = schemas.get(schema.typeName)
        if (other) {
            throw new Error(`type ${schema.typeName} has a schema in both ${other.file} and ${file}`)
        }
        schemas.set(schema.typeName, { schema, file })
    }

    return schemas
}

function findSchemaFiles(directory: string): string[] {
    const files: string[] = []
    const entries = fs.readdirSync(directory, { withFileTypes: true })
        .sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
    for (const entry of entries) {
        const fullPath = path.join(directory, entry.name)
        if (entry.isDirectory()) {
            files.push(...findSchemaFiles(fullPath))
        } else if (entry.isFile() && entry.name.endsWith(".json") && !entry.name.endsWith(metadataSuffix)) {
            files.push(fullPath)
        }
    }
    return files
}

export function readExtraProperties(file: string): ExtraProperties {
    let parsed: unknown
    try {
        parsed = JSON.parse(fs.readFileSync(file, { encoding: "utf8" }))
    } catch (err) {
        throw new Error(`${file} is not valid JSON: ${(err as Error).message}`)
    }

    if (!isObject(parsed)) {
        throw new Error(`${file} must map each type name to its extra properties`)
    }
    for (const [type, properties] of Object.entries(parsed)) {
        if (!typeNamePattern.test(type)) {
            throw new Error(`${file} has an invalid type name "${type}"`)
        }
        if (!isObject(properties)) {
            throw new Error(`${file} must map ${type} to its properties`)
        }
        for (const [name, definition] of Object.entries(properties)) {
            if (!propertyNamePattern.test(name)) {
                throw new Error(`${file} has an invalid property name "${name}" for ${type}`)
            }
            if (!isObject(definition)) {
                throw new Error(`${file} must give property ${name} of ${type} a schema`)
            }
        }
    }

    return parsed as ExtraProperties
}

function isObject(value: unknown): value is { [key: string]: unknown } {
    return typeof value === "object" && value !== null && !Array.isArray(value)
}

// applyRadius returns the records with Radius's schemas and extra properties applied:
//   - A native schema replaces AWS's schema for the same type, or adds the type.
//   - A hand-written schema adds the type. If AWS also has the type, Radius's schema
//     is kept and the type is reported as a clash.
//   - Each extra property is added as read-only. If the schema already has a property
//     with the same name, the extra property is skipped and reported as a clash.
// The input records are not changed.
export function applyRadius(records: SchemaRecord[], radius: RadiusInputs): RadiusResult {
    const clashes: Clash[] = []
    const result = records.map(record => {
        const native = radius.native.get(record.type)
        if (native) {
            return radiusRecord(native.schema)
        }

        const handwritten = radius.handwritten.get(record.type)
        if (handwritten) {
            clashes.push({ type: record.type, file: handwritten.file })
            return radiusRecord(handwritten.schema)
        }

        return record
    })

    const present = new Set(records.map(r => r.type))
    const added = [...radius.native.values(), ...radius.handwritten.values()]
        .filter(entry => !present.has(entry.schema.typeName))
        .map(entry => radiusRecord(entry.schema))
        .sort((a, b) => a.type < b.type ? -1 : a.type > b.type ? 1 : 0)
    result.push(...added)

    const missingTypes: string[] = []
    for (const [type, properties] of Object.entries(radius.extraProperties)) {
        const index = result.findIndex(r => r.type === type)
        if (index === -1) {
            missingTypes.push(type)
            continue
        }

        const record = cloneDeep(result[index])
        record.schema.properties = record.schema.properties ?? {}
        record.schema.readOnlyProperties = record.schema.readOnlyProperties ?? []
        for (const [name, definition] of Object.entries(properties)) {
            if (hasOwn(record.schema.properties, name)) {
                clashes.push({ type, property: name })
                continue
            }
            record.schema.properties[name] = cloneDeep(definition)
            record.schema.readOnlyProperties.push(`/properties/${name}`)
        }
        result[index] = record
    }

    return { records: result, clashes, missingTypes }
}

export interface PreviousInputs {
    // The AWS types the checked-in types were generated from.
    aws: SchemaRecord[]
    // The Radius inputs the checked-in types were generated from.
    radius: RadiusInputs
}

// newClashes returns the clashes where either side is new, compared with the inputs
// the checked-in types were generated from. A clash both sides already had is left
// out, so a clash a person reviewed is not reported again.
//   - A type clash is new if AWS's previous types or Radius's previous hand-written
//     schemas don't have the type.
//   - A property clash is new if the type's previous schema, before extra properties
//     were added, or Radius's previous extra properties don't have the property. The
//     previous schema is AWS's or Radius's, whichever the extension used.
export function newClashes(clashes: Clash[], previous: PreviousInputs): Clash[] {
    const previousAws = new Set(previous.aws.map(r => r.type))
    const previousSchemas = new Map(
        applyRadius(previous.aws, { ...previous.radius, extraProperties: {} }).records.map(r => [r.type, r.schema]))

    return clashes.filter(clash => {
        if (clash.property === undefined) {
            return !previousAws.has(clash.type) || !previous.radius.handwritten.has(clash.type)
        }
        return !hasOwn(previousSchemas.get(clash.type)?.properties ?? {}, clash.property) ||
            !hasOwn(previous.radius.extraProperties[clash.type] ?? {}, clash.property)
    })
}

function hasOwn(value: object, key: string): boolean {
    return Object.prototype.hasOwnProperty.call(value, key)
}

function radiusRecord(schema: Schema): SchemaRecord {
    return { arn: "", type: schema.typeName, time: "", schema: cloneDeep(schema) }
}

// renderClashReport returns a Markdown report for the clash issue, or an empty
// string when there are no clashes.
export function renderClashReport(clashes: Clash[]): string {
    const types = clashes.filter(c => c.property === undefined)
    const properties = clashes.filter(c => c.property !== undefined)
    if (clashes.length === 0) {
        return ""
    }

    const lines: string[] = []
    if (types.length > 0) {
        lines.push(
            "## Types",
            "",
            "AWS publishes these types, and Radius also provides them with a hand-written schema. The extension keeps the Radius schema. Compare the two schemas, and remove the Radius schema and handler only if Cloud Control can create the type in every region Radius supports and it behaves the same.",
            "",
            "| Type | Radius schema |",
            "| ---- | ------------- |",
            ...types.map(c => `| \`${c.type}\` | \`${c.file}\` |`),
            "")
    }
    if (properties.length > 0) {
        lines.push(
            "## Extra properties",
            "",
            "These types have a property with the same name as one of Radius's extra read-only properties. The extension keeps the type's own property and skips the extra one. Compare the two, then rename or remove the extra property in Radius.",
            "",
            "| Type | Property |",
            "| ---- | -------- |",
            ...properties.map(c => `| \`${c.type}\` | \`${c.property}\` |`),
            "")
    }

    return lines.join("\n")
}
