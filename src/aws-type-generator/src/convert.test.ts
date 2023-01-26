import fs from "fs";
import path from "path";
import { describe, expect, test } from '@jest/globals';
import { convertSchemaRecordToTypes } from './convert'
import { SchemaRecord } from "./schemarecord";
import { ArrayType, BuiltInType, BuiltInTypeKind, ObjectProperty, ObjectPropertyFlags, ObjectType, ResourceType, ScopeType, TypeBase, TypeReference } from "./lib/types";

describe('convert', () => {
    // test('AWS::Kinesis::Stream', () => {
    //     const file = fs.readFileSync(path.resolve('./testdata/AWS::Kinesis::Stream.json'), { encoding: 'utf8' });
    //     const schemaRecord: SchemaRecord = JSON.parse(file);
    //     const types = convertSchemaRecordToTypes([schemaRecord]);

    //     const resourceType = lookupResourceType(types, "AWS.Kinesis/Stream@default");
    //     expect(resourceType).toStrictEqual(new ResourceType(
    //         "AWS.Kinesis/Stream@default",
    //         ScopeType.Unknown,
    //         new TypeReference(lookupObjectTypeIndex(types, "AWS.Kinesis/Stream"))));

    //     const bodyType = lookupObjectType(types, "AWS.Kinesis/Stream");
    //     expect(bodyType).toStrictEqual(new ObjectType(
    //         "AWS.Kinesis/Stream",
    //         {
    //             "name": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectPropertyFlags.None,
    //                 "the resource name"),

    //             "properties": new ObjectProperty(
    //                 new TypeReference(lookupObjectTypeIndex(types, "AWS.Kinesis/StreamProperties")),
    //                 ObjectPropertyFlags.None,
    //                 "properties of the resource")
    //         }));

    //     const propertiesType = lookupObjectType(types, "AWS.Kinesis/StreamProperties");
    //     expect(propertiesType).toStrictEqual(new ObjectType(
    //         "AWS.Kinesis/StreamProperties",
    //         {
    //             "Arn": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectPropertyFlags.ReadOnly,
    //                 "The Amazon resource name (ARN) of the Kinesis stream"),
    //             "Name": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectPropertyFlags.Identifier,
    //                 "The name of the Kinesis stream."),
    //             "RetentionPeriodHours": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.Int)),
    //                 ObjectPropertyFlags.None,
    //                 "The number of hours for the data records that are stored in shards to remain accessible."),
    //             "ShardCount": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.Int)),
    //                 ObjectPropertyFlags.None,
    //                 "The number of shards that the stream uses. Required when StreamMode = PROVISIONED is passed."),
    //             "StreamEncryption": new ObjectProperty(
    //                 new TypeReference(lookupObjectTypeIndex(types, "StreamEncryption")),
    //                 ObjectPropertyFlags.None,
    //                 "When specified, enables or updates server-side encryption using an AWS KMS key for a specified stream."),
    //             "StreamModeDetails": new ObjectProperty(
    //                 new TypeReference(lookupObjectTypeIndex(types, "StreamModeDetails")),
    //                 ObjectPropertyFlags.None,
    //                 "The mode in which the stream is running."),
    //             "Tags": new ObjectProperty(
    //                 new TypeReference(lookupArrayTypeIndex(types, new TypeReference(lookupObjectTypeIndex(types, "Tag")))),
    //                 ObjectPropertyFlags.None,
    //                 "An arbitrary set of tags (key–value pairs) to associate with the Kinesis stream."),
    //         }));

    //     const streamEncryptionType = lookupObjectType(types, "StreamEncryption");
    //     expect(streamEncryptionType).toStrictEqual(new ObjectType(
    //         "StreamEncryption",
    //         {
    //             "EncryptionType": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectPropertyFlags.Required,
    //                 "The encryption type to use. The only valid value is KMS. "),
    //             "KeyId": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectPropertyFlags.Required,
    //                 "The GUID for the customer-managed AWS KMS key to use for encryption. This value can be a globally unique identifier, a fully specified Amazon Resource Name (ARN) to either an alias or a key, or an alias name prefixed by \"alias/\".You can also use a master key owned by Kinesis Data Streams by specifying the alias aws/kinesis."),
    //         }));

    //     const streamModeDetailsType = lookupObjectType(types, "StreamModeDetails");
    //     expect(streamModeDetailsType).toStrictEqual(new ObjectType(
    //         "StreamModeDetails",
    //         {
    //             "StreamMode": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectPropertyFlags.Required,
    //                 "The mode of the stream"),
    //         }));

    //     const tagType = lookupObjectType(types, "Tag");
    //     expect(tagType).toStrictEqual(new ObjectType(
    //         "Tag",
    //         {
    //             "Key": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectPropertyFlags.Required,
    //                 "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."),
    //             "Value": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectPropertyFlags.Required,
    //                 "The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."),
    //         }));
    // });

    // test('Regression for project-radius/radius#3688', () => {
    //     const file = fs.readFileSync(path.resolve('./testdata/AWS::MemoryDB::ACL.json'), { encoding: 'utf8' });
    //     const schemaRecord: SchemaRecord = JSON.parse(file);
    //     const types = convertSchemaRecordToTypes([schemaRecord]);

    //     const propertiesType = lookupObjectType(types, "AWS.MemoryDB/ACLProperties");
    //     expect(propertiesType).not.toBeUndefined();

    //     const aclNameProperty = propertiesType?.Properties["ACLName"]
    //     expect(aclNameProperty).not.toBeUndefined();
    //     expect(aclNameProperty?.Flags).toEqual(ObjectPropertyFlags.Required|ObjectPropertyFlags.Identifier);
    // });

    // test('Can convert string definitions properly (project-radius/radius#4823)', () => {
    //     const file = fs.readFileSync(path.resolve('./testdata/AWS::Redshift::EndpointAuthorization.json'), { encoding: 'utf8' });
    //     const schemaRecord: SchemaRecord = JSON.parse(file);
    //     const types = convertSchemaRecordToTypes([schemaRecord]);

    //     const propertiesType = lookupObjectType(types, "AWS.Redshift/EndpointAuthorizationProperties");
    //     expect(propertiesType).not.toBeUndefined();

    //     // In the CF resource type schema, 'Account' property
    //     // is of type 'AwsAccount', which is a string with some special
    //     // regex constraints. Here we assert that the type generator
    //     // converts this to a string type instead.
    //     const accountProperty = propertiesType?.Properties["Account"]
    //     expect(accountProperty).not.toBeUndefined();
    //     const accountPropertyType = accountProperty?.Type
    //     const stringPropertyType = new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String));
    //     expect(accountPropertyType).toStrictEqual(stringPropertyType)
    // });

    test('Can convert string definitions properly (project-radius/radius#4823)', () => {
        const file = fs.readFileSync(path.resolve('./testdata/AWS::Redshift::ScheduledAction.json'), { encoding: 'utf8' });
        const schemaRecord: SchemaRecord = JSON.parse(file);
        const types = convertSchemaRecordToTypes([schemaRecord]);

        const propertiesType = lookupObjectType(types, "AWS.Redshift/EndpointAuthorizationProperties");
        expect(propertiesType).not.toBeUndefined();

        // In the CF resource type schema, 'Account' property
        // is of type 'AwsAccount', which is a string with some special
        // regex constraints. Here we assert that the type generator
        // converts this to a string type instead.
        const accountProperty = propertiesType?.Properties["Account"]
        expect(accountProperty).not.toBeUndefined();
        const accountPropertyType = accountProperty?.Type
        const stringPropertyType = new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String));
        expect(accountPropertyType).toStrictEqual(stringPropertyType)
    });
});

function lookupBuiltInTypeIndex(types: TypeBase[], kind: BuiltInTypeKind): number {
    return types.findIndex(t => t instanceof BuiltInType && (t as BuiltInType).Kind === kind);
}

function lookupObjectType(types: TypeBase[], name: string): ObjectType | undefined {
    return types.find(t => t instanceof ObjectType && t.Name === name) as ObjectType;
}

function lookupObjectTypeIndex(types: TypeBase[], name: string): number {
    return types.findIndex(t => t instanceof ObjectType && t.Name === name);
}

function lookupArrayTypeIndex(types: TypeBase[], itemType: TypeReference): number {
    return types.findIndex(t => t instanceof ArrayType && (t as ArrayType).ItemType.Index === itemType.Index);
}

function lookupResourceType(types: TypeBase[], name: string): ResourceType | undefined {
    return types.find(t => t instanceof ResourceType && t.Name === name) as ResourceType;
}
