import { BicepType, TypeReference, AnyType, NullType, BooleanType, TypeBaseKind, ScopeType, ObjectTypeProperty, FunctionParameter, ResourceFlags, ResourceTypeFunction } from "bicep-types";

export class TypeFactory {
  types: BicepType[];
  typeToTypeReference: Map<BicepType, TypeReference> = new Map();
  private readonly stringTypeCache: Map<string, TypeReference> = new Map();
  private readonly integerTypeCache: Map<string, TypeReference> = new Map();
  private readonly anyType: AnyType = {type: TypeBaseKind.AnyType};
  private readonly nullType: NullType = {type: TypeBaseKind.NullType};
  private readonly booleanType: BooleanType = {type: TypeBaseKind.BooleanType};

  constructor() {
    this.types = [];
  }

  public addType(type: BicepType): TypeReference {
    const preexisting = this.typeToTypeReference.get(type);
    if (preexisting !== undefined)
    {
      return preexisting;
    }

    const index = this.types.length;
    const reference = new TypeReference(index);
    this.types[index] = type;
    this.typeToTypeReference.set(type, reference);

    return reference;
  }

  public lookupType(reference: TypeReference): BicepType {
    return this.types[reference.index];
  }

  public addUnionType(elements: TypeReference[]) {
    return this.addType({
      type: TypeBaseKind.UnionType,
      elements: elements,
    });
  }

  public addStringLiteralType(value: string) {
    return this.addType({
      type: TypeBaseKind.StringLiteralType,
      value: value,
    });
  }

  public addStringType(sensitive?: true, minLength?: number, maxLength?: number, pattern?: string): TypeReference {
    const cacheKey = `secure:${sensitive}|minLength:${minLength}|maxLength:${maxLength}|pattern:${pattern}`;
    const preexisting = this.stringTypeCache.get(cacheKey);
    if (preexisting !== undefined) {
      return preexisting;
    }

    const added = this.addType({
      type: TypeBaseKind.StringType,
      sensitive: sensitive,
      minLength: minLength,
      maxLength: maxLength,
      pattern: pattern,
    });
    this.stringTypeCache.set(cacheKey, added);
    return added;
  }

  public addIntegerType(minValue?: number, maxValue?: number): TypeReference {
    const cacheKey = `minValue:${minValue}|maxValue:${maxValue}`;
    const preexisting = this.integerTypeCache.get(cacheKey);
    if (preexisting !== undefined)
    {
      return preexisting;
    }

    const added = this.addType({
      type: TypeBaseKind.IntegerType,
      minValue: minValue,
      maxValue: maxValue,
    });
    this.integerTypeCache.set(cacheKey, added);
    return added;
  }

  public addAnyType(): TypeReference {
    return this.addType(this.anyType);
  }

  public addNullType(): TypeReference {
    return this.addType(this.nullType);
  }

  public addBooleanType(): TypeReference {
    return this.addType(this.booleanType);
  }

  public addResourceType(name: string, scopeType: ScopeType, readOnlyScopes: ScopeType | undefined, body: TypeReference, flags: ResourceFlags, functions?: Record<string, ResourceTypeFunction>) {
    return this.addType({
      type: TypeBaseKind.ResourceType,
      name: name,
      scopeType: scopeType,
      readOnlyScopes: readOnlyScopes,
      body: body,
      flags: flags,
      functions,
    });
  }

  public addResourceFunctionType(name: string, resourceType: string, apiVersion: string, output: TypeReference, input?: TypeReference) {
    return this.addType({
      type: TypeBaseKind.ResourceFunctionType,
      name: name,
      resourceType: resourceType,
      apiVersion: apiVersion,
      output: output,
      input: input,
    });
  }

  public addObjectType(name: string, properties: Record<string, ObjectTypeProperty>, additionalProperties?: TypeReference, sensitive?: boolean) {
    return this.addType({
      type: TypeBaseKind.ObjectType,
      name: name,
      properties: properties,
      additionalProperties: additionalProperties,
      sensitive: sensitive,
    });
  }

  public addDiscriminatedObjectType(name: string, discriminator: string, baseProperties: Record<string, ObjectTypeProperty>, elements: Record<string, TypeReference>) {
    return this.addType({
      type: TypeBaseKind.DiscriminatedObjectType,
      name: name,
      discriminator: discriminator,
      baseProperties: baseProperties,
      elements: elements,
    });
  }

  public addArrayType(itemType: TypeReference, minLength?: number, maxLength?: number) {
    return this.addType({
      type: TypeBaseKind.ArrayType,
      itemType: itemType,
      minLength: minLength,
      maxLength: maxLength,
    });
  }

  public addFunctionType(parameters: FunctionParameter[], output: TypeReference) {
    return this.addType({
      type: TypeBaseKind.FunctionType,
      parameters,
      output,
    });
  }
}