import fs from "fs";
import path from "path";
import { describe, expect, test } from '@jest/globals';
import { convertSchemaRecordToTypes } from './convert'
import { SchemaRecord } from "./schemarecord";
import { ArrayType, IntegerType, BuiltInTypeKind, ObjectTypePropertyFlags, ObjectType, ResourceType, ScopeType, BicepType, TypeReference, ResourceFlags, TypeBaseKind, StringType, BooleanType } from "bicep-types";

describe('convert', () => {
    // test('AWS::Kinesis::Stream', () => {
    //     const file = fs.readFileSync(path.resolve('./testdata/AWS::Kinesis::Stream.json'), { encoding: 'utf8' });

    //     const schemaRecord: SchemaRecord = JSON.parse(file);
    //     const types = convertSchemaRecordToTypes([schemaRecord]);

    //     const resourceType = lookupResourceType(types, "AWS.Kinesis/Stream@default");
    //     expect(resourceType).toStrictEqual({
    //         type: TypeBaseKind.ResourceType,
    //         name: "AWS.Kinesis/Stream@default",
    //         scopeType: ScopeType.Unknown,
    //         readOnlyScopes: undefined,
    //         body: new TypeReference(lookupObjectTypeIndex(types, "AWS.Kinesis/Stream")),
    //         flags: ResourceFlags.None,
    //         functions: undefined,
    //     });

    //     const bodyType = lookupObjectType(types, "AWS.Kinesis/Stream");
    //     expect(bodyType).toStrictEqual({
    //         type: TypeBaseKind.ObjectType,
    //         name: "AWS.Kinesis/Stream",
    //         properties: {
    //             "name": {
    //                 type: new TypeReference(lookupStringType(types)),
    //                 flags: ObjectTypePropertyFlags.None,
    //                 description: "the resource name"},

    //             "alias": {
    //                     type: new TypeReference(lookupStringType(types)),
    //                     flags: ObjectTypePropertyFlags.Required,
    //                     description: "the resource alias"},

    //             "properties": {
    //                 type: new TypeReference(lookupObjectTypeIndex(types, "AWS.Kinesis/StreamProperties")),
    //                 flags: ObjectTypePropertyFlags.None,
    //                 description: "properties of the resource"}
    //         },
    //         additionalProperties: undefined,
    //         sensitive: undefined,
    //     });

    //     const propertiesType = lookupObjectType(types, "AWS.Kinesis/StreamProperties");
    //     expect(propertiesType).toStrictEqual({
    //         type: TypeBaseKind.ObjectType,
    //         name: "AWS.Kinesis/StreamProperties",
    //         properties: {
    //             "Arn": {
    //                 type: new TypeReference(lookupStringType(types)),
    //                 flags: ObjectTypePropertyFlags.ReadOnly,
    //                 description: "The Amazon resource name (ARN) of the Kinesis stream"},
    //             "Name": {
    //                 type: new TypeReference(lookupStringType(types)),
    //                 flags: ObjectTypePropertyFlags.Identifier,
    //                 description: "The name of the Kinesis stream."},
    //             "RetentionPeriodHours": {
    //                 type: new TypeReference(lookupIntegerTypeIndex(types)),
    //                 flags: ObjectTypePropertyFlags.None,
    //                 description: "The number of hours for the data records that are stored in shards to remain accessible."},
    //             "ShardCount": {
    //                 type: new TypeReference(lookupIntegerTypeIndex(types)),
    //                 flags: ObjectTypePropertyFlags.None,
    //                 description: "The number of shards that the stream uses. Required when StreamMode = PROVISIONED is passed."},
    //             "StreamEncryption": {
    //                 type: new TypeReference(lookupObjectTypeIndex(types, "StreamEncryption")),
    //                 flags: ObjectTypePropertyFlags.None,
    //                 description: "When specified, enables or updates server-side encryption using an AWS KMS key for a specified stream."},
    //             "StreamModeDetails": {
    //                 type:  new TypeReference(lookupObjectTypeIndex(types, "StreamModeDetails")),
    //                 flags: ObjectTypePropertyFlags.None,
    //                 description: "The mode in which the stream is running."},
    //             "Tags": {
    //                 type: new TypeReference(lookupArrayTypeIndex(types, new TypeReference(lookupObjectTypeIndex(types, "Tag")))),
    //                 flags: ObjectTypePropertyFlags.None,
    //                 description: "An arbitrary set of tags (key–value pairs) to associate with the Kinesis stream."},
    //         },
    //         additionalProperties: undefined,
    //         sensitive: undefined});

    //     const streamEncryptionType = lookupObjectType(types, "StreamEncryption");
    //     expect(streamEncryptionType).toStrictEqual({
    //         type: TypeBaseKind.ObjectType,
    //         name: "StreamEncryption",
    //         properties: {
    //             "EncryptionType": {
    //                 type: new TypeReference(lookupStringType(types)),
    //                 flags: ObjectTypePropertyFlags.Required,
    //                 description: "The encryption type to use. The only valid value is KMS. "},
    //             "KeyId": {
    //                 type: new TypeReference(lookupStringType(types)),
    //                 flags: ObjectTypePropertyFlags.Required,
    //                 description: "The GUID for the customer-managed AWS KMS key to use for encryption. This value can be a globally unique identifier, a fully specified Amazon Resource Name (ARN) to either an alias or a key, or an alias name prefixed by \"alias/\".You can also use a master key owned by Kinesis Data Streams by specifying the alias aws/kinesis."},
    //         },
    //         additionalProperties: undefined,
    //         sensitive: undefined});

    //     const streamModeDetailsType = lookupObjectType(types, "StreamModeDetails");
    //     expect(streamModeDetailsType).toStrictEqual({
    //         type: TypeBaseKind.ObjectType,
    //         name: "StreamModeDetails",
    //         properties: {
    //             "StreamMode": {
    //                 type: new TypeReference(lookupStringType(types)),
    //                 flags: ObjectTypePropertyFlags.Required,
    //                 description: "The mode of the stream"},
    //         },
    //         additionalProperties: undefined,
    //         sensitive: undefined});

    //     const tagType = lookupObjectType(types, "Tag");
    //     expect(tagType).toStrictEqual({
    //         type: TypeBaseKind.ObjectType,
    //         name: "Tag",
    //         properties: {
    //             "Key": {
    //                 type: new TypeReference(lookupStringType(types)),
    //                 flags: ObjectTypePropertyFlags.Required,
    //                 description: "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."},
    //             "Value": {
    //                 type: new TypeReference(lookupStringType(types)),
    //                 flags: ObjectTypePropertyFlags.Required,
    //                 description: "The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."},
    //         },
    //         additionalProperties: undefined,
    //         sensitive: undefined});
    // });

    test('AWS::Redshift::ScheduledAction', () => {
        const file = fs.readFileSync(path.resolve('./testdata/AWS::Redshift::ScheduledAction.json'), { encoding: 'utf8' });

        const schemaRecord: SchemaRecord = JSON.parse(file);
        const types = convertSchemaRecordToTypes([schemaRecord]);

        const resourceType = lookupResourceType(types, "AWS.Redshift/ScheduledAction@default");
        expect(resourceType).toStrictEqual({
            type: TypeBaseKind.ResourceType,
            name: "AWS.Redshift/ScheduledAction@default",
            scopeType: ScopeType.Unknown,
            readOnlyScopes: undefined,
            body: new TypeReference(lookupObjectTypeIndex(types, "AWS.Redshift/ScheduledAction")),
            flags: ResourceFlags.None,
            functions: undefined,
        });

        const bodyType = lookupObjectType(types, "AWS.Redshift/ScheduledAction");
        expect(bodyType).toStrictEqual({
            type: TypeBaseKind.ObjectType,
            name: "AWS.Redshift/ScheduledAction",
            properties: {
                "name": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: "the resource name"},

                "alias": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.Required,
                    description: "the resource alias"},

                "properties": {
                    type: new TypeReference(lookupObjectTypeIndex(types, "AWS.Redshift/ScheduledActionProperties")),
                    flags: ObjectTypePropertyFlags.Required,
                    description: "properties of the resource"}
            },
            additionalProperties: undefined,
            sensitive: undefined});

        const propertiesType = lookupObjectType(types, "AWS.Redshift/ScheduledActionProperties");
        expect(propertiesType).toStrictEqual({
            type: TypeBaseKind.ObjectType,
            name: "AWS.Redshift/ScheduledActionProperties",
            properties: {
                "Enable": {
                    type: new TypeReference(lookupBooleanTypeIndex(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: "If true, the schedule is enabled. If false, the scheduled action does not trigger."},
                "EndTime": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: "The end time in UTC of the scheduled action. After this time, the scheduled action does not trigger."},
                "IamRole": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: "The IAM role to assume to run the target action."},
                "NextInvocations": {
                    type: new TypeReference(lookupArrayTypeIndex(types, new TypeReference(lookupStringType(types)))),
                    flags: ObjectTypePropertyFlags.ReadOnly,
                    description: "List of times when the scheduled action will run."},
                "Schedule": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: "The schedule in `at( )` or `cron( )` format."},
                "ScheduledActionDescription":{
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: "The description of the scheduled action."},
                "ScheduledActionName": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.Required | ObjectTypePropertyFlags.Identifier,
                    description: "The name of the scheduled action. The name must be unique within an account."},
                "StartTime": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: "The start time in UTC of the scheduled action. Before this time, the scheduled action does not trigger."},
                "State": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.ReadOnly,
                    description: "The state of the scheduled action."},
                "TargetAction": {
                    type: new TypeReference(lookupObjectTypeIndex(types, "ScheduledActionType")),
                    flags: ObjectTypePropertyFlags.None,
                    description: "A JSON format string of the Amazon Redshift API operation with input parameters."},
            },
            additionalProperties: undefined,
            sensitive: undefined});

        const scheduledActionType = lookupObjectType(types, "ScheduledActionType");
        expect(scheduledActionType).toStrictEqual({
            type: TypeBaseKind.ObjectType,
            name: "ScheduledActionType",
            properties: {
                "ResizeCluster": {
                    type: new TypeReference(lookupObjectTypeIndex(types, "ResizeClusterMessage")),
                    flags: ObjectTypePropertyFlags.None,
                    description: undefined},
                "PauseCluster": {
                    type: new TypeReference(lookupObjectTypeIndex(types, "PauseClusterMessage")),
                    flags: ObjectTypePropertyFlags.None,
                    description: undefined},
                "ResumeCluster": {
                    type: new TypeReference(lookupObjectTypeIndex(types, "ResumeClusterMessage")),
                    flags: ObjectTypePropertyFlags.None,
                    description: undefined},
        },
        additionalProperties: undefined,
        sensitive: undefined
    });
    });

    // test('AWS::Evidently::Experiment', () => {
    //     const file = fs.readFileSync(path.resolve('./testdata/AWS::Evidently::Experiment.json'), { encoding: 'utf8' });

    //     const schemaRecord: SchemaRecord = JSON.parse(file);
    //     const types = convertSchemaRecordToTypes([schemaRecord]);

    //     const resourceType = lookupResourceType(types, "AWS.Evidently/Experiment@default");
    //     expect(resourceType).toStrictEqual(new ResourceType(
    //         "AWS.Evidently/Experiment@default",
    //         ScopeType.Unknown,
    //         new TypeReference(lookupObjectTypeIndex(types, "AWS.Evidently/Experiment"))));

    //     const bodyType = lookupObjectType(types, "AWS.Evidently/Experiment");
    //     expect(bodyType).toStrictEqual(new ObjectType(
    //         name: "AWS.Evidently/Experiment",
    //         {
    //             "name": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectTypePropertyFlags.None,
    //                 "the resource name"),

    //             "alias": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectTypePropertyFlags.Required,
    //                 "the resource alias"),

    //             "properties": new ObjectProperty(
    //                 new TypeReference(lookupObjectTypeIndex(types, "AWS.Evidently/ExperimentProperties")),
    //                 ObjectTypePropertyFlags.Required,
    //                 "properties of the resource")
    //         }));

    //     const propertiesType = lookupObjectType(types, "AWS.Evidently/ExperimentProperties");

    //     expect(propertiesType).toStrictEqual(new ObjectType(
    //         name: "AWS.Evidently/ExperimentProperties",
    //         {
    //             "Arn": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectTypePropertyFlags.ReadOnly | ObjectTypePropertyFlags.Identifier,
    //                 undefined),
    //             "Description": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectTypePropertyFlags.None,
    //                 undefined),
    //             "MetricGoals": new ObjectProperty(
    //                 new TypeReference(lookupArrayTypeIndex(types, new TypeReference(lookupObjectTypeIndex(types, "MetricGoalObject")))),
    //                 ObjectTypePropertyFlags.Required,
    //                 undefined),
    //             "Name": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectTypePropertyFlags.Required,
    //                 undefined),
    //             "OnlineAbConfig": new ObjectProperty(
    //                 new TypeReference(lookupObjectTypeIndex(types, "OnlineAbConfigObject")),
    //                 ObjectTypePropertyFlags.Required,
    //                 undefined),
    //             "Project": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectTypePropertyFlags.Required,
    //                 undefined),
    //             "RandomizationSalt": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectTypePropertyFlags.None,
    //                 undefined),
    //             "RemoveSegment": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.Bool)),
    //                 ObjectTypePropertyFlags.None,
    //                 undefined),
    //             "RunningStatus": new ObjectProperty(
    //                 new TypeReference(lookupObjectTypeIndex(types, "RunningStatusObject")),
    //                 ObjectTypePropertyFlags.None,
    //                 "Start Experiment. Default is False"),
    //             "SamplingRate": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.Int)),
    //                 ObjectTypePropertyFlags.None,
    //                 undefined),
    //             "Segment": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectTypePropertyFlags.None,
    //                 undefined),
    //             "Tags": new ObjectProperty(
    //                 new TypeReference(lookupArrayTypeIndex(types, new TypeReference(lookupObjectTypeIndex(types, "Tag")))),
    //                 ObjectTypePropertyFlags.None,
    //                 "An array of key-value pairs to apply to this resource."),
    //             "Treatments": new ObjectProperty(
    //                 new TypeReference(lookupArrayTypeIndex(types, new TypeReference(lookupObjectTypeIndex(types, "TreatmentObject")))),
    //                 ObjectTypePropertyFlags.Required,
    //                 undefined),
    //         }));

    //     const runningStatusObject = lookupObjectType(types, "RunningStatusObject");
    //     expect(runningStatusObject).toStrictEqual(new ObjectType(
    //         "RunningStatusObject",
    //         {
    //             "Status": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectTypePropertyFlags.Required,
    //                 "Provide START or STOP action to apply on an experiment"),
    //             "AnalysisCompleteTime": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectTypePropertyFlags.None,
    //                 "Provide the analysis Completion time for an experiment"),
    //             "Reason": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectTypePropertyFlags.None,
    //                 "Reason is a required input for stopping the experiment"),
    //             "DesiredState": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectTypePropertyFlags.None,
    //                 "Provide CANCELLED or COMPLETED desired state when stopping an experiment"),
    //     }));
    // });

    // test('AWS::Route53RecoveryControl::SafetyRule', () => {
    //     const file = fs.readFileSync(path.resolve('./testdata/AWS::Route53RecoveryControl::SafetyRule.json'), { encoding: 'utf8' });

    //     const schemaRecord: SchemaRecord = JSON.parse(file);
    //     const types = convertSchemaRecordToTypes([schemaRecord]);

    //     const resourceType = lookupResourceType(types, "AWS.Route53RecoveryControl/SafetyRule@default");
    //     expect(resourceType).toStrictEqual(new ResourceType(
    //         "AWS.Route53RecoveryControl/SafetyRule@default",
    //         ScopeType.Unknown,
    //         new TypeReference(lookupObjectTypeIndex(types, "AWS.Route53RecoveryControl/SafetyRule"))));

    //     const bodyType = lookupObjectType(types, "AWS.Route53RecoveryControl/SafetyRule");
    //     expect(bodyType).toStrictEqual(new ObjectType(
    //         "AWS.Route53RecoveryControl/SafetyRule",
    //         {
    //             "name": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectTypePropertyFlags.None,
    //                 "the resource name"),

    //             "alias": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectTypePropertyFlags.Required,
    //                 "the resource alias"),

    //             "properties": new ObjectProperty(
    //                 new TypeReference(lookupObjectTypeIndex(types, "AWS.Route53RecoveryControl/SafetyRuleProperties")),
    //                 ObjectTypePropertyFlags.Required,
    //                 "properties of the resource")
    //         }));

    //     const propertiesType = lookupObjectType(types, "AWS.Route53RecoveryControl/SafetyRuleProperties");

    //     expect(propertiesType).toStrictEqual(new ObjectType(
    //         "AWS.Route53RecoveryControl/SafetyRuleProperties",
    //         {
    //             "AssertionRule": new ObjectProperty(
    //                 new TypeReference(lookupObjectTypeIndex(types, "AssertionRule")),
    //                 ObjectTypePropertyFlags.None,
    //                 undefined),
    //             "ControlPanelArn": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectTypePropertyFlags.Required,
    //                 "The Amazon Resource Name (ARN) of the control panel."),
    //             "GatingRule": new ObjectProperty(
    //                 new TypeReference(lookupObjectTypeIndex(types, "GatingRule")),
    //                 ObjectTypePropertyFlags.None,
    //                 undefined),
    //             "Name": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectTypePropertyFlags.Required,
    //                 undefined),
    //             "RuleConfig": new ObjectProperty(
    //                 new TypeReference(lookupObjectTypeIndex(types, "RuleConfig")),
    //                 ObjectTypePropertyFlags.Required,
    //                 undefined),
    //             "SafetyRuleArn": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectTypePropertyFlags.ReadOnly | ObjectTypePropertyFlags.Identifier,
    //                 "The Amazon Resource Name (ARN) of the safety rule."),
    //             "Status": new ObjectProperty(
    //                 new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
    //                 ObjectTypePropertyFlags.ReadOnly,
    //                 "The deployment status of the routing control. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION."),
    //             "Tags": new ObjectProperty(
    //                 new TypeReference(lookupArrayTypeIndex(types, new TypeReference(lookupObjectTypeIndex(types, "Tag")))),
    //                 ObjectTypePropertyFlags.WriteOnly,
    //                 "A collection of tags associated with a resource"),
    //         }));
    // });

    // test('Regression for radius-project/radius#3688', () => {
    //     const file = fs.readFileSync(path.resolve('./testdata/AWS::MemoryDB::ACL.json'), { encoding: 'utf8' });
    //     const schemaRecord: SchemaRecord = JSON.parse(file);
    //     const types = convertSchemaRecordToTypes([schemaRecord]);

    //     const propertiesType = lookupObjectType(types, "AWS.MemoryDB/ACLProperties");
    //     expect(propertiesType).not.toBeUndefined();

    //     const aclNameProperty = propertiesType?.properties["ACLName"]
    //     expect(aclNameProperty).not.toBeUndefined();
    //     expect(aclNameProperty?.flags).toEqual(ObjectTypePropertyFlags.Required|ObjectTypePropertyFlags.Identifier);
    // });

    // test('Can convert string definitions properly (radius-project/radius#4823)', () => {
    //     const file = fs.readFileSync(path.resolve('./testdata/AWS::Redshift::EndpointAuthorization.json'), { encoding: 'utf8' });
    //     const schemaRecord: SchemaRecord = JSON.parse(file);
    //     const types = convertSchemaRecordToTypes([schemaRecord]);

    //     const propertiesType = lookupObjectType(types, "AWS.Redshift/EndpointAuthorizationProperties");
    //     expect(propertiesType).not.toBeUndefined();

    //     // In the CF resource type schema, 'Account' property
    //     // is of type 'AwsAccount', which is a string with some special
    //     // regex constraints. Here we assert that the type generator
    //     // converts this to a string type instead.
    //     const accountProperty = propertiesType?.properties["Account"]
    //     expect(accountProperty).not.toBeUndefined();
    //     const accountPropertyType = accountProperty?.type
    //     const stringPropertyType = new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String));
    //     expect(accountPropertyType).toStrictEqual(stringPropertyType)
    // });
});

// function lookupBuiltInTypeIndex(types: BicepType[], kind: TypeBaseKind): number {
//     const val = TypeBaseKind[kind as keyof typeof TypeBaseKind]
//     return types.findIndex(t => (t as val) && t.kind === kind);
// }

function lookupObjectType(types: BicepType[], name: string): ObjectType | undefined {
    return types.find(t => (t as ObjectType).type === TypeBaseKind.ObjectType && (t as ObjectType).name === name) as ObjectType;
}

function lookupStringType(types: BicepType[]): number {
    return types.findIndex(t => (t as StringType).type === TypeBaseKind.StringType);
}

function lookupObjectTypeIndex(types: BicepType[], name: string): number {
    return types.findIndex(t => (t as ObjectType).type === TypeBaseKind.ObjectType && (t as ObjectType).name === name);
}

function lookupArrayTypeIndex(types: BicepType[], itemType: TypeReference): number {
    return types.findIndex(t => (t as ArrayType).type === TypeBaseKind.ArrayType && (t as ArrayType).itemType.index === itemType.index);
}

function lookupIntegerTypeIndex(types: BicepType[]): number {
    return types.findIndex(t => (t as IntegerType).type === TypeBaseKind.IntegerType);
}

function lookupBooleanTypeIndex(types: BicepType[]): number {
    return types.findIndex(t => (t as BooleanType).type === TypeBaseKind.BooleanType);
}

function lookupResourceType(types: BicepType[], name: string): ResourceType | undefined {
    return types.find(t => (t as ResourceType).type === TypeBaseKind.ResourceType && (t as ResourceType).name === name) as ResourceType;
}
