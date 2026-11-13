import { Dictionary } from "lodash";
import isEqual from "lodash/isEqual";
import { boolean } from "yargs";
import { Context, SchemaDefinition, SchemaRecord } from "./schemarecord";
import { All, TypeBaseKind, TypeFactory, ObjectTypeProperty, ObjectTypePropertyFlags, ObjectType, ResourceType, ScopeType, BicepType, TypeReference } from "bicep-types";

export function convertSchemaRecordToTypes(records: SchemaRecord[]): BicepType[] {
    const factory = new TypeFactory()
    records.forEach(record => {
        visitSchemaRecord(factory, record)
    })

    return factory.types
}

function visitSchemaRecord(factory: TypeFactory, record: SchemaRecord): ResourceType {
    const parts = record.type.split('::')
    parts.splice(0, 2, `${parts[0]}.${parts[1]}`)
    const typeName = parts.join("/")

    const context = new Context(parts.slice(1), {})

    visitDefinitions(context, factory, record)

    factory.addStringLiteralType(`${typeName}Properties`)
    const properties = visitSchema(context, factory, record, `${typeName}Properties`, record.schema)

    // Because createOnlyProperties and readOnlyProperties can be nested, we need to traverse the type
    // graph after the types have all been built.
    //
    // A template references a read-only type with `existing` and sets its primary identifier, so the
    // identifier stays settable even though AWS lists it as read-only.
    const settable = isReadOnly(record) ? record.schema.primaryIdentifier ?? [] : []
    if (record.schema.readOnlyProperties) {
        record.schema.readOnlyProperties.filter(p => !settable.includes(p)).forEach(p => {
            const parts = p.split('/').filter(s => s.length > 0)
            parts.shift()

            let property: ObjectTypeProperty | undefined
            let current = factory.lookupType(properties) as ObjectType
            parts.forEach(part => {
                if (current.type !== TypeBaseKind.ObjectType) {
                    return;
                }
                if (!current.properties) {
                    console.warn(`could not resolve property ${p}`);
                    return;
                }

                property = current.properties[part];
                if (!property) {
                    console.warn(`could not resolve property ${p}`);
                    return;
                }

                current = factory.lookupType(property.type) as ObjectType;
            })

            if (property) {
                property.flags |= ObjectTypePropertyFlags.ReadOnly
            }
        })
    }
    if (record.schema.writeOnlyProperties) {
        record.schema.writeOnlyProperties.forEach(p => {
            const parts = p.split('/').filter(s => s.length > 0)
            parts.shift()

            let property: ObjectTypeProperty | undefined
            let current = factory.lookupType(properties) as ObjectType
            parts.forEach(part => {
                if (current.type !== TypeBaseKind.ObjectType) {
                    return;
                }
                if (!current.properties) {
                    console.warn(`could not resolve property ${p}`)
                    return
                }

                property = current.properties[part]
                if (!property) {
                    console.warn(`could not resolve property ${p}`)
                    return
                }

                current = factory.lookupType(property.type) as ObjectType
            })

            if (property) {
                property.flags |= ObjectTypePropertyFlags.WriteOnly
            }
        })
    }

    if (record.schema.oneOf) {
        // Handling the "oneOf" case where oneOf is present under the properties block
        convertOneOfPropertiesToUnion(context, factory, record, properties, typeName, false)
    }

    // properties is required if anything inside it is required
    let propertiesFlags = ObjectTypePropertyFlags.None
    const propertiesType = factory.lookupType(properties) as ObjectType
    Object.entries(propertiesType).forEach(([name, property]) => {
        Object.entries(propertiesType.properties).forEach(([_, property]) => {
            if ((property.flags & ObjectTypePropertyFlags.Required) != 0) {
                propertiesFlags |= ObjectTypePropertyFlags.Required
            }
        });
    })

    const body = factory.addObjectType(
        typeName,
        {
            name: {type: factory.addStringType(), flags: ObjectTypePropertyFlags.None, description: "the resource name"},
            alias: {type: factory.addStringType(), flags: ObjectTypePropertyFlags.Required | ObjectTypePropertyFlags.Identifier, description: "the resource alias"},
            properties: {type: properties, flags: propertiesFlags | ObjectTypePropertyFlags.Identifier, description: "properties of the resource"} as ObjectTypeProperty 
        },
        undefined)

    // Bicep treats no readable and no writable scopes as every scope. A
    // read-only type is readable but not writable, so Bicep allows it with
    // `existing` and warns about a declaration that would create it (BCP245).
    const readableScopes = isReadOnly(record) ? All : ScopeType.None
    const resourceType = factory.addResourceType(`${typeName}@default`, body, readableScopes, ScopeType.None)
    return factory.lookupType(resourceType) as ResourceType
}

// isReadOnly reports whether the record is a type that AWS creates on its own:
// its schema has a read handler but no create handler. Radius uses the same rule.
function isReadOnly(record: SchemaRecord): boolean {
    const handlers = record.schema.handlers ?? {}
    return 'read' in handlers && !('create' in handlers)
}

function convertOneOfPropertiesToUnion(context: Context, factory: TypeFactory, record: SchemaRecord, properties: TypeReference, typeName: string, oneofInDefinitions: boolean) {
    let oneOfRecord: SchemaDefinition[] | undefined;
    if (oneofInDefinitions && record.schema.definitions) {
        oneOfRecord = record.schema.definitions[typeName].oneOf;
    } else {
        oneOfRecord = record.schema.oneOf
    }
    if (!oneOfRecord) {
        return
    }

    // Create a union of all the oneOf objects
    let allRequiredSet: string[][] = [];
    oneOfRecord.forEach((oneOfObj) => {
        if (oneOfObj.required) {
            allRequiredSet.push(oneOfObj.required)
        }
    })

    // compute the intersection of all the required properties
    let intersection = allRequiredSet[0];
    allRequiredSet.slice(1).forEach(currentArray => {
        intersection = arrayIntersection(intersection, currentArray);
    });


    for (const oneOfObj of oneOfRecord) {
        if (oneOfObj.required) {
            // Lookup each property in the intersection and if it is, mark it as required
            // Else clear the required flag on the property
            for (const [_, key] of oneOfObj.required.entries()) {
                let property: ObjectTypeProperty | undefined
                let current = factory.lookupType(properties) as ObjectType
                if (current.properties != undefined) {
                    property = current.properties[key] 
                }
                // Mark all other properties as not required
                if (property) {
                    if (intersection.includes(key)) {
                        property.flags |= ObjectTypePropertyFlags.Required;
                    } else {
                        property.flags &= ~ObjectTypePropertyFlags.Required;
                    }
                }
            }
        } else {
            // TODO: check cases for "allOf" and "anyOf"
            console.error("Found a new case of oneOf which is not handled!!")
        }
    }
}

function arrayIntersection(...arrays: string[][]): any[] {
    if (arrays.length === 0) {
        return [];
    }

    return arrays.reduce((accumulator, currentArray) => {
        return accumulator.filter(value => currentArray.includes(value));
    });
}

function visitDefinitions(context: Context, factory: TypeFactory, record: SchemaRecord) {
    if (!record.schema.definitions) {
        return
    }

    Object.entries(record.schema.definitions).forEach(([name]) => {
        // Predeclare types so we can support circular references
        const reference = factory.addObjectType(name, {})
        context.definitions[name] = {index: reference.index, TypeReference: reference}
    })

    Object.entries(record.schema.definitions).forEach(([name, schema]) => {
        visitSchema(context, factory, record, name, schema)
        // This is handling the case where oneOf is used to define a set of properties in an object
        if (schema.oneOf) {
            if (!schema.properties) {
                schema.properties = {}
            }

            // Merge all oneOf properties into the schema and move it one level up
            for (const oneOfObj of schema.oneOf) {
                if (oneOfObj.required) {
                    let typeName = context.definitions[name]
                    if (typeName) {
                        convertOneOfPropertiesToUnion(context, factory, record, typeName.TypeReference, name, true)
                    }
                    break
                }
                if (oneOfObj.properties) {
                    for (const [oneofName, oneofProperty] of Object.entries(oneOfObj.properties)) {
                        schema.properties[oneofName] = oneofProperty
                    }
                    // Delete oneOf from schema
                    delete schema["oneOf"]

                    // Visit the schema again to create the type
                    visitSchema(context, factory, record, name, schema)
                }
            }
        }
    })
}

function visitSchema(context: Context, factory: TypeFactory, record: SchemaRecord, typeName: string | undefined, schema: SchemaDefinition): TypeReference {
    // Normalize the schema if $ref is set
    if (schema.$ref) {
        // Note: we don't handle references to external files/schemas (intentionally).
        const parts = schema.$ref.split('/')
        if (schema.$ref[0] !== '/') {
            parts.shift()
        }

        if (schema.$ref[0] !== 'definitions') {
            parts.shift()
        }

        let definition = record.schema.definitions?.[parts[0]];
        if (!definition) {
            // Note: Definitions are typically the only schema with circular references 
            // This is in the off case that definitions reference a property field instead of a circular definitions reference 
            definition = record.schema.properties?.[parts[0]]
            if(!definition) {
                throw new Error(`could not find definition ${schema.$ref} in ${context}`)
            }
        }

        if (!schema.additionalProperties && !schema.items && !schema.properties && !schema.required && !schema.type) {
            // Object type is already defined
            if (definition.type === 'object') {
                const existing = context.definitions[parts[0]]
                if (!existing) {
                    throw new Error(`type ${parts[0]} is missing`)
                }
                return existing.TypeReference
            }
        }

        // Replace the context to refer to the definition
        context = context.create(parts[0])

        const obj: any = {}
        Object.getOwnPropertyNames(definition).forEach(name => {
            if (definition !== undefined && name in definition) {
                obj[name] = (definition as any)[name]
            }
        })
        Object.getOwnPropertyNames(schema).forEach(name => {
            if (name in schema) {
                obj[name] = (schema as any)[name]
            }
        })

        schema = obj as SchemaDefinition
    }

    if (!schema.type) {
        schema.type = 'object'
    }

    const createType = function (type: string): TypeReference {
        if (type === 'boolean') {
            return factory.addBooleanType()
        } else if (type === 'number' || type === 'integer') {
            return factory.addIntegerType()
        } else if (type === 'string') {
            return factory.addStringType()
        } else if (type === 'null') {
            return factory.addNullType()
        } else if (type === 'array') {
            if (schema.items) {
                const itemType = visitSchema(context, factory, record, undefined, schema.items)
                return factory.addArrayType(itemType)
            }

            return factory.addArrayType(factory.addAnyType())
        } else if (type === 'object') {
            const properties: Dictionary<ObjectTypeProperty> = {}
            if (schema.properties) {
                Object.entries(schema.properties).forEach(([name, propertySchema], _) => {
                    const type = visitSchema(context.push(name), factory, record, undefined, propertySchema)

                    let flags = ObjectTypePropertyFlags.None
                    if (schema.required && schema.required.includes(name)) {
                        flags |= ObjectTypePropertyFlags.Required
                    }

                    let primaryIdentifiers = record.schema.primaryIdentifier
                    if (primaryIdentifiers && primaryIdentifiers.includes(`/properties/${name}`)) {
                        flags |= ObjectTypePropertyFlags.Identifier
                    }

                    properties[name] = {type: type, flags: flags, description: propertySchema.description}
                })
            }

            if (typeName) {
                const existing = context.definitions[typeName]
                if (existing) {
                    const type: ObjectType = {
                        type: TypeBaseKind.ObjectType,
                        name: typeName,
                        properties: properties,
                        additionalProperties: visitAdditionalProperties(context, factory, record, schema),
                        sensitive: undefined,
                    }
                    factory.types[existing.index]= type as ObjectType
                    return existing.TypeReference
                }
                return factory.addObjectType(
                    typeName,
                    properties,
                    visitAdditionalProperties(context, factory, record, schema))
            } else {
                return factory.addObjectType(
                    context.toString(),
                    properties,
                    visitAdditionalProperties(context, factory, record, schema))
            }
        } else {
            throw new Error(`unknown type ${type} ${context}`)
        }
    }

    if (typeof schema.type === 'string') {
        return createType(schema.type as string)
    } else if (schema.type instanceof Array) {
        const types = schema.type.map(createType)
        return factory.addUnionType(types)
    } else {
        throw new Error(`unknown type ${schema.type} ${context}`)
    }
}

// visitAdditionalProperties returns the type of the values an object accepts under
// keys other than its named properties, or undefined when it accepts none. Bicep
// can't match keys against a pattern, so each patternProperties value type is
// accepted under any key.
function visitAdditionalProperties(context: Context, factory: TypeFactory, record: SchemaRecord, schema: SchemaDefinition): TypeReference | undefined {
    const additional = schema.additionalProperties
    if (additional === true) {
        return factory.addAnyType()
    }
    if (additional !== undefined && additional !== null && additional !== false && typeof additional !== 'object') {
        throw new Error(`unhandled case for additionalProperties ${context}`)
    }

    const values = Object.values(schema.patternProperties ?? {})
    if (typeof additional === 'object' && additional !== null) {
        values.push(additional)
    }
    if (values.length === 0) {
        // JSON Schema accepts any key when additionalProperties is absent. An object
        // with no named properties is a map, such as tags, so it stays open. One with
        // named properties stays closed, so a misspelled property is still an error,
        // and so does one whose properties are in oneOf or anyOf alternatives.
        const hasProperties = Object.keys(schema.properties ?? {}).length > 0
        const composed = schema.oneOf !== undefined || schema.anyOf !== undefined
        return (additional === undefined || additional === null) && !hasProperties && !composed ? factory.addAnyType() : undefined
    }

    // A value that is one of several types, such as anyOf string, integer, or boolean,
    // adds each alternative.
    const alternatives = values.flatMap(value => !value.type && !value.$ref && (value.anyOf ?? value.oneOf) ? (value.anyOf ?? value.oneOf)! : [value])
    if (alternatives.some(value => !value.type && !value.$ref)) {
        // An alternative with no type would default to an object, so accept any value.
        return factory.addAnyType()
    }
    const distinct = alternatives.filter((value, i) => alternatives.findIndex(other => isEqual(other, value)) === i)
    const types = distinct.map((value, i) => visitSchema(
        context.create(i === 0 ? "additionalProperties" : `additionalProperties${i}`), factory, record, undefined, value))
    return types.length === 1 ? types[0] : factory.addUnionType(types)
}
