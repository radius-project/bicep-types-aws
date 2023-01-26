import { Dictionary } from "lodash";
import { boolean } from "yargs";
import { Context, SchemaDefinition, SchemaRecord } from "./schemarecord";
import { ArrayType, BuiltInTypeKind, ObjectProperty, ObjectPropertyFlags, ObjectType, ResourceType, ScopeType, TypeBase, TypeFactory, TypeReference, UnionType } from "./lib/types";

export function convertSchemaRecordToTypes(records: SchemaRecord[]): TypeBase[] {
    const factory = new TypeFactory()
    records.forEach(record => {
        visitSchemaRecord(factory, record)
    })
    return factory.getTypes()
}

function visitSchemaRecord(factory: TypeFactory, record: SchemaRecord): ResourceType {
    const parts = record.type.split('::')
    parts.splice(0, 2, `${parts[0]}.${parts[1]}`)
    const typeName = parts.join("/")

    const context = new Context(parts.slice(1))

    visitDefinitions(context, factory, record)

    factory.declareType(`${typeName}Properties`)
    const properties = visitSchema(context, factory, record, `${typeName}Properties`, record.schema)

    // Because createOnlyProperties and readOnlyProperties can be nested, we need to traverse the type
    // graph after the types have all been built.
    if (record.schema.readOnlyProperties) {
        record.schema.readOnlyProperties.forEach(p => {
            const parts = p.split('/').filter(s => s.length > 0)
            parts.shift()

            let property: ObjectProperty | undefined
            let current = factory.lookupType(properties) as ObjectType
            parts.forEach(part => {
                if (!current.Properties) {
                    console.warn(`could not resolve property ${p}`)
                    return
                }

                property = current.Properties[part]
                if (!property) {
                    console.warn(`could not resolve property ${p}`)
                    return
                }

                current = factory.lookupType(property.Type) as ObjectType
            })

            if (property) {
                property.Flags |= ObjectPropertyFlags.ReadOnly
            }
        })
    }
    if (record.schema.writeOnlyProperties) {
        record.schema.writeOnlyProperties.forEach(p => {
            const parts = p.split('/').filter(s => s.length > 0)
            parts.shift()

            let property: ObjectProperty | undefined
            let current = factory.lookupType(properties) as ObjectType
            parts.forEach(part => {
                if (!current.Properties) {
                    console.warn(`could not resolve property ${p}`)
                    return
                }

                property = current.Properties[part]
                if (!property) {
                    console.warn(`could not resolve property ${p}`)
                    return
                }

                current = factory.lookupType(property.Type) as ObjectType
            })

            if (property) {
                property.Flags |= ObjectPropertyFlags.WriteOnly
            }
        })
    }

    // properties is required if anything inside it is required
    let propertiesFlags = ObjectPropertyFlags.None
    const propertiesType = factory.lookupType<ObjectType>(properties)
    Object.entries(propertiesType.Properties).forEach(([name, property]) => {
        if ((property.Flags & ObjectPropertyFlags.Required) != 0) {
            propertiesFlags |= ObjectPropertyFlags.Required
        }
    })

    const body = factory.addType(new ObjectType(
        typeName,
        {
            name: new ObjectProperty(factory.lookupBuiltInType(BuiltInTypeKind.String), ObjectPropertyFlags.None, "the resource name"),
            properties: new ObjectProperty(properties, propertiesFlags, "properties of the resource")
        },
        undefined))

    const resourceType = new ResourceType(`${typeName}@default`, ScopeType.Unknown, body)
    factory.addType(resourceType)

    return resourceType
}

function visitDefinitions(context: Context, factory: TypeFactory, record: SchemaRecord) {
    if (!record.schema.definitions) {
        return
    }

    Object.entries(record.schema.definitions).forEach(([name, _]) => {
        // Predeclare types so we can support circular references
        factory.declareType(name)
    })

    Object.entries(record.schema.definitions).forEach(([name, schema]) => {
        visitSchema(context, factory, record, name, schema)
    })
}

function visitSchema(context: Context, factory: TypeFactory, record: SchemaRecord, typeName: string | undefined, schema: SchemaDefinition): TypeReference {
    // Normalize the schema if $ref is set
    if (typeName === 'ScheduledActionType') {
        console.log('test')
    }
    if (schema.$ref) {
        // Note: we don't handle references to external files/schemas (intentionally).
        const parts = schema.$ref.split('/')
        if (schema.$ref[0] !== '/') {
            parts.shift()
        }

        if (schema.$ref[0] !== 'definitions') {
            parts.shift()
        }

        const definition = record.schema.definitions?.[parts[0]];
        if (!definition) {
            throw new Error(`could not find definition ${schema.$ref} in ${context}`)
        }

        if (!schema.additionalProperties && !schema.items && !schema.properties && !schema.required && !schema.type) {
            // Object type is already defined
            if (definition.type === 'object') {
                const reference = factory.getNamedType(parts[0])
                if (!reference) {
                    throw new Error(`type ${parts[0]} is missing`)
                }

                return reference
            }
        }

        // Replace the context to refer to the definition
        context = context.create(parts[0])

        const obj: any = {}
        Object.getOwnPropertyNames(definition).forEach(name => {
            if (name in definition) {
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

    const createType = function(type: string): TypeReference {
        if (type === 'boolean') {
            return factory.lookupBuiltInType(BuiltInTypeKind.Bool)
        } else if (type === 'number' || type === 'integer') {
            return factory.lookupBuiltInType(BuiltInTypeKind.Int)
        } else if (type === 'string') {
            return factory.lookupBuiltInType(BuiltInTypeKind.String)
        } else if (type === 'null') {
            return factory.lookupBuiltInType(BuiltInTypeKind.Null)
        } else if (type === 'array') {
            if (schema.items) {
                const itemType = visitSchema(context, factory, record, undefined, schema.items)
                return factory.addType(new ArrayType(itemType))
            }

            return factory.addType(new ArrayType(factory.lookupBuiltInType(BuiltInTypeKind.Any)))
        } else if (type === 'object') {
            const properties: Dictionary<ObjectProperty> = {}
            if (schema.properties) {
                Object.entries(schema.properties).forEach(([name, propertySchema], _) => {
                    const type = visitSchema(context.push(name), factory, record, undefined, propertySchema)

                    let flags = ObjectPropertyFlags.None
                    if (schema.required && schema.required.includes(name)) {
                        flags |= ObjectPropertyFlags.Required
                    }

                    let primaryIdentifiers = record.schema.primaryIdentifier
                    if (primaryIdentifiers && primaryIdentifiers.includes(`/properties/${name}`)) {
                        flags |= ObjectPropertyFlags.Identifier
                    }
                    
                    properties[name] = new ObjectProperty(type, flags, propertySchema.description)
                })
            }
            if (schema.oneOf) {
                console.log('test');
                Object.entries(schema.oneOf).forEach(([name, propertySchema], _) => {
                    
                })
            }

            if (typeName) {
                return factory.defineType(typeName, new ObjectType(
                    typeName,
                    properties,
                    visitAdditionalProperties(context, factory, record, schema)))
            } else {
                return factory.addType(new ObjectType(
                    context.toString(),
                    properties,
                    visitAdditionalProperties(context, factory, record, schema)))
            }
        } else {
            throw new Error(`unknown type ${type} ${context}`)
        }
    }

    if (typeof schema.type === 'string') {
        return createType(schema.type as string)
    } else if (schema.type instanceof Array) {
        const types = schema.type.map(createType)
        return factory.addType(new UnionType(types))
    } else {
        throw new Error(`unknown type ${schema.type} ${context}`)
    }
}

function visitAdditionalProperties(context: Context, factory: TypeFactory, record: SchemaRecord, schema: SchemaDefinition): TypeReference | undefined {
    if (schema.additionalProperties instanceof boolean && schema.additionalProperties) {
        return factory.lookupBuiltInType(BuiltInTypeKind.Any)
    } else if (schema.additionalProperties instanceof boolean) {
        return undefined
    } else if (schema.additionalProperties instanceof Object) {
        return visitSchema(context.create("additionalProperties"), factory, record, undefined, schema.additionalProperties as SchemaDefinition)
    } else if (!schema.additionalProperties) {
        return undefined
    } else {
        throw new Error(`unhandled case for additionalProperties ${context}`)
    }
}