// Based on: https://github.com/aws-cloudformation/cloudformation-cli/blob/master/src/rpdk/core/data/schema/provider.definition.schema.v1.json
export interface SchemaRecord {
    arn: string
    type: string
    time: string
    schema: Schema
}

export interface Schema extends SchemaDefinition {
    typeName: string
    primaryIdentifier: string[]
    definitions?: { [name: string]: SchemaDefinition }
    handlers?: any
    required?: string[]
    additionalIdentifiers?: string[]
    conditionalCreateOnlyProperties?: string[]
    createOnlyProperties?: string[]
    readOnlyProperties?: string[]
    writeOnlyProperties?: string[]
    oneOf?: SchemaDefinition[] 
}

export interface SchemaDefinition {
    additionalProperties: boolean | SchemaDefinition
    description?: string
    items?: SchemaDefinition
    maxLength?: number
    minLength?: number
    properties?: { [name: string]: SchemaDefinition }
    '$ref'?: string
    required?: string[]
    type?: TypeName | TypeName[]
    oneOf?: SchemaDefinition[]
}

export type TypeName = 'boolean' | 'number' | 'integer' | 'string' | 'object' | 'array' | 'null'

export class Context {
    parts: string[]
    readonly base: string[]

    constructor(base: string[]) {
        this.parts = base.slice()
        this.base = base.slice()
    }

    public push(part: string): Context {
        const c = new Context(this.base)
        c.parts = this.parts.slice()
        c.parts.push(part)
        return c
    }

    public create(part: string): Context {
        const c = new Context(this.base)
        c.parts.push(part)
        return c
    }

    public toString(): string {
        return this.parts.join("_")
    }
}