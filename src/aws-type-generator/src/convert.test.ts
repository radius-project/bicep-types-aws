import fs from "fs";
import path from "path";
import { describe, expect, test } from '@jest/globals';
import { convertSchemaRecordToTypes } from './convert'
import { SchemaRecord } from "./schemarecord";
import { ArrayType, IntegerType, ObjectTypePropertyFlags, ObjectType, ResourceType, ScopeType, BicepType, TypeReference, ResourceFlags, TypeBaseKind, StringType, BooleanType, ObjectTypeProperty } from "bicep-types";

describe('convert', () => {
    test('AWS::Kinesis::Stream', () => {
        const file = fs.readFileSync(path.resolve('./testdata/AWS::Kinesis::Stream.json'), { encoding: 'utf8' });

        const schemaRecord: SchemaRecord = JSON.parse(file);
        const types = convertSchemaRecordToTypes([schemaRecord]);

        const resourceType = lookupResourceType(types, "AWS.Kinesis/Stream@default");
        expect(resourceType).toStrictEqual({
            type: TypeBaseKind.ResourceType,
            name: "AWS.Kinesis/Stream@default",
            scopeType: ScopeType.Unknown,
            readOnlyScopes: undefined,
            body: new TypeReference(lookupObjectTypeIndex(types, "AWS.Kinesis/Stream")),
            flags: ResourceFlags.None,
            functions: undefined,
        });

        const bodyType = lookupObjectType(types, "AWS.Kinesis/Stream");
        expect(bodyType).toStrictEqual({
            type: TypeBaseKind.ObjectType,
            name: "AWS.Kinesis/Stream",
            properties: {
                "name": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: "the resource name"} as ObjectTypeProperty,

                "alias": {
                        type: new TypeReference(lookupStringType(types)),
                        flags: ObjectTypePropertyFlags.Required | ObjectTypePropertyFlags.Identifier,
                        description: "the resource alias"} as ObjectTypeProperty,

                "properties": {
                    type: new TypeReference(lookupObjectTypeIndex(types, "AWS.Kinesis/StreamProperties")),
                    flags: ObjectTypePropertyFlags.None | ObjectTypePropertyFlags.Identifier,
                    description: "properties of the resource"} as ObjectTypeProperty
            },
            additionalProperties: undefined,
            sensitive: undefined,
        });

        const propertiesType = lookupObjectType(types, "AWS.Kinesis/StreamProperties");
        expect(propertiesType).toStrictEqual({
            type: TypeBaseKind.ObjectType,
            name: "AWS.Kinesis/StreamProperties",
            properties: {
                "Arn": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.ReadOnly,
                    description: "The Amazon resource name (ARN) of the Kinesis stream"} as ObjectTypeProperty,
                "Name": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.Identifier,
                    description: "The name of the Kinesis stream."} as ObjectTypeProperty,
                "RetentionPeriodHours": {
                    type: new TypeReference(lookupIntegerTypeIndex(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: "The number of hours for the data records that are stored in shards to remain accessible."} as ObjectTypeProperty,
                "ShardCount": {
                    type: new TypeReference(lookupIntegerTypeIndex(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: "The number of shards that the stream uses. Required when StreamMode = PROVISIONED is passed."} as ObjectTypeProperty,
                "StreamEncryption": {
                    type: new TypeReference(lookupObjectTypeIndex(types, "StreamEncryption")),
                    flags: ObjectTypePropertyFlags.None,
                    description: "When specified, enables or updates server-side encryption using an AWS KMS key for a specified stream."} as ObjectTypeProperty,
                "StreamModeDetails": {
                    type:  new TypeReference(lookupObjectTypeIndex(types, "StreamModeDetails")),
                    flags: ObjectTypePropertyFlags.None,
                    description: "The mode in which the stream is running."} as ObjectTypeProperty,
                "Tags": {
                    type: new TypeReference(lookupArrayTypeIndex(types, new TypeReference(lookupObjectTypeIndex(types, "Tag")))),
                    flags: ObjectTypePropertyFlags.None,
                    description: "An arbitrary set of tags (key–value pairs) to associate with the Kinesis stream."} as ObjectTypeProperty,
            },
            additionalProperties: undefined,
            sensitive: undefined});

        const streamEncryptionType = lookupObjectType(types, "StreamEncryption");
        expect(streamEncryptionType).toStrictEqual({
            type: TypeBaseKind.ObjectType,
            name: "StreamEncryption",
            properties: {
                "EncryptionType": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.Required,
                    description: "The encryption type to use. The only valid value is KMS. "},
                "KeyId": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.Required,
                    description: "The GUID for the customer-managed AWS KMS key to use for encryption. This value can be a globally unique identifier, a fully specified Amazon Resource Name (ARN) to either an alias or a key, or an alias name prefixed by \"alias/\".You can also use a master key owned by Kinesis Data Streams by specifying the alias aws/kinesis."},
            },
            additionalProperties: undefined,
            sensitive: undefined});

        const streamModeDetailsType = lookupObjectType(types, "StreamModeDetails");
        expect(streamModeDetailsType).toStrictEqual({
            type: TypeBaseKind.ObjectType,
            name: "StreamModeDetails",
            properties: {
                "StreamMode": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.Required,
                    description: "The mode of the stream"} as ObjectTypeProperty,
            },
            additionalProperties: undefined,
            sensitive: undefined});

        const tagType = lookupObjectType(types, "Tag");
        expect(tagType).toStrictEqual({
            type: TypeBaseKind.ObjectType,
            name: "Tag",
            properties: {
                "Key": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.Required,
                    description: "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."} as ObjectTypeProperty,
                "Value": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.Required,
                    description: "The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."} as ObjectTypeProperty,
            },
            additionalProperties: undefined,
            sensitive: undefined});
    });

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
                    description: "the resource name"} as ObjectTypeProperty,

                "alias": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.Required | ObjectTypePropertyFlags.Identifier,
                    description: "the resource alias"} as ObjectTypeProperty,

                "properties": {
                    type: new TypeReference(lookupObjectTypeIndex(types, "AWS.Redshift/ScheduledActionProperties")),
                    flags: ObjectTypePropertyFlags.Required | ObjectTypePropertyFlags.Identifier,
                    description: "properties of the resource"} as ObjectTypeProperty
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
                    description: "If true, the schedule is enabled. If false, the scheduled action does not trigger."} as ObjectTypeProperty,
                "EndTime": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: "The end time in UTC of the scheduled action. After this time, the scheduled action does not trigger."} as ObjectTypeProperty,
                "IamRole": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: "The IAM role to assume to run the target action."} as ObjectTypeProperty,
                "NextInvocations": {
                    type: new TypeReference(lookupArrayTypeIndex(types, new TypeReference(lookupStringType(types)))),
                    flags: ObjectTypePropertyFlags.ReadOnly,
                    description: "List of times when the scheduled action will run."} as ObjectTypeProperty,
                "Schedule": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: "The schedule in `at( )` or `cron( )` format."} as ObjectTypeProperty,
                "ScheduledActionDescription":{
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: "The description of the scheduled action."} as ObjectTypeProperty,
                "ScheduledActionName": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.Required | ObjectTypePropertyFlags.Identifier,
                    description: "The name of the scheduled action. The name must be unique within an account."} as ObjectTypeProperty,
                "StartTime": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: "The start time in UTC of the scheduled action. Before this time, the scheduled action does not trigger."} as ObjectTypeProperty,
                "State": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.ReadOnly,
                    description: "The state of the scheduled action."} as ObjectTypeProperty,
                "TargetAction": {
                    type: new TypeReference(lookupObjectTypeIndex(types, "ScheduledActionType")),
                    flags: ObjectTypePropertyFlags.None,
                    description: "A JSON format string of the Amazon Redshift API operation with input parameters."} as ObjectTypeProperty,
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
                    description: undefined} as ObjectTypeProperty,
                "PauseCluster": {
                    type: new TypeReference(lookupObjectTypeIndex(types, "PauseClusterMessage")),
                    flags: ObjectTypePropertyFlags.None,
                    description: undefined} as ObjectTypeProperty,
                "ResumeCluster": {
                    type: new TypeReference(lookupObjectTypeIndex(types, "ResumeClusterMessage")),
                    flags: ObjectTypePropertyFlags.None,
                    description: undefined} as ObjectTypeProperty,
        },
        additionalProperties: undefined,
        sensitive: undefined
    });
    });

    test('AWS::Evidently::Experiment', () => {
        const file = fs.readFileSync(path.resolve('./testdata/AWS::Evidently::Experiment.json'), { encoding: 'utf8' });

        const schemaRecord: SchemaRecord = JSON.parse(file);
        const types = convertSchemaRecordToTypes([schemaRecord]);

        const resourceType = lookupResourceType(types, "AWS.Evidently/Experiment@default");
        expect(resourceType).toStrictEqual({
            type: TypeBaseKind.ResourceType,
            name: "AWS.Evidently/Experiment@default",
            scopeType: ScopeType.Unknown,
            readOnlyScopes: undefined,
            body: new TypeReference(lookupObjectTypeIndex(types, "AWS.Evidently/Experiment")),
            flags: ResourceFlags.None,
            functions: undefined,
        });

        const bodyType = lookupObjectType(types, "AWS.Evidently/Experiment");
        expect(bodyType).toStrictEqual({
            type: TypeBaseKind.ObjectType,
            name: "AWS.Evidently/Experiment",
            properties: {
                "name": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: "the resource name"} as ObjectTypeProperty,

                "alias": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.Required | ObjectTypePropertyFlags.Identifier,
                    description: "the resource alias"} as ObjectTypeProperty,

                "properties": {
                    type: new TypeReference(lookupObjectTypeIndex(types, "AWS.Evidently/ExperimentProperties")),
                    flags: ObjectTypePropertyFlags.Required | ObjectTypePropertyFlags.Identifier,
                    description: "properties of the resource"} as ObjectTypeProperty
            },
            additionalProperties: undefined,
            sensitive: undefined,
        });

        const propertiesType = lookupObjectType(types, "AWS.Evidently/ExperimentProperties");

        expect(propertiesType).toStrictEqual({
            type: TypeBaseKind.ObjectType,
            name: "AWS.Evidently/ExperimentProperties",
            properties: {
                "Arn": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.ReadOnly | ObjectTypePropertyFlags.Identifier,
                    description: undefined} as ObjectTypeProperty,
                "Description": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: undefined} as ObjectTypeProperty,
                "MetricGoals": {
                    type: new TypeReference(lookupArrayTypeIndex(types, new TypeReference(lookupObjectTypeIndex(types, "MetricGoalObject")))),
                    flags: ObjectTypePropertyFlags.Required,
                    description: undefined} as ObjectTypeProperty,
                "Name": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.Required,
                    description: undefined} as ObjectTypeProperty,
                "OnlineAbConfig": {
                    type: new TypeReference(lookupObjectTypeIndex(types, "OnlineAbConfigObject")),
                    flags: ObjectTypePropertyFlags.Required,
                    description: undefined} as ObjectTypeProperty,
                "Project": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.Required,
                    description: undefined} as ObjectTypeProperty,
                "RandomizationSalt": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: undefined} as ObjectTypeProperty,
                "RemoveSegment": {
                    type: new TypeReference(lookupBooleanTypeIndex(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: undefined} as ObjectTypeProperty,
                "RunningStatus": {
                    type: new TypeReference(lookupObjectTypeIndex(types, "RunningStatusObject")),
                    flags: ObjectTypePropertyFlags.None,
                    description: "Start Experiment. Default is False"} as ObjectTypeProperty,
                "SamplingRate": {
                    type: new TypeReference(lookupIntegerTypeIndex(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: undefined} as ObjectTypeProperty,
                "Segment": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: undefined} as ObjectTypeProperty,
                "Tags": {
                    type: new TypeReference(lookupArrayTypeIndex(types, new TypeReference(lookupObjectTypeIndex(types, "Tag")))),
                    flags: ObjectTypePropertyFlags.None,
                    description: "An array of key-value pairs to apply to this resource."} as ObjectTypeProperty,
                "Treatments": {
                    type: new TypeReference(lookupArrayTypeIndex(types, new TypeReference(lookupObjectTypeIndex(types, "TreatmentObject")))),
                    flags: ObjectTypePropertyFlags.Required,
                    description: undefined} as ObjectTypeProperty,
            },
            additionalProperties: undefined,
            sensitive: undefined
        });

        const runningStatusObject = lookupObjectType(types, "RunningStatusObject");
        expect(runningStatusObject).toStrictEqual({
            type: TypeBaseKind.ObjectType,
            name: "RunningStatusObject",
            properties: {
                "Status": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.Required,
                    description: "Provide START or STOP action to apply on an experiment"} as ObjectTypeProperty,
                "AnalysisCompleteTime": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: "Provide the analysis Completion time for an experiment"} as ObjectTypeProperty,
                "Reason": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: "Reason is a required input for stopping the experiment"} as ObjectTypeProperty,
                "DesiredState": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: "Provide CANCELLED or COMPLETED desired state when stopping an experiment"} as ObjectTypeProperty,
        },
        additionalProperties: undefined,
        sensitive: undefined
    });
    });

    test('AWS::Route53RecoveryControl::SafetyRule', () => {
        const file = fs.readFileSync(path.resolve('./testdata/AWS::Route53RecoveryControl::SafetyRule.json'), { encoding: 'utf8' });

        const schemaRecord: SchemaRecord = JSON.parse(file);
        const types = convertSchemaRecordToTypes([schemaRecord]);

        const resourceType = lookupResourceType(types, "AWS.Route53RecoveryControl/SafetyRule@default");
        expect(resourceType).toStrictEqual({
            type: TypeBaseKind.ResourceType,
            name: "AWS.Route53RecoveryControl/SafetyRule@default",
            scopeType: ScopeType.Unknown,
            readOnlyScopes: undefined,
            body: new TypeReference(lookupObjectTypeIndex(types, "AWS.Route53RecoveryControl/SafetyRule")),
            flags: ResourceFlags.None,
            functions: undefined,
        });

        const bodyType = lookupObjectType(types, "AWS.Route53RecoveryControl/SafetyRule");
        expect(bodyType).toStrictEqual({
            type: TypeBaseKind.ObjectType,
            name: "AWS.Route53RecoveryControl/SafetyRule",
            properties: {
                "name": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: "the resource name"} as ObjectTypeProperty,

                "alias": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.Required | ObjectTypePropertyFlags.Identifier,
                    description: "the resource alias"} as ObjectTypeProperty,

                "properties": {
                    type: new TypeReference(lookupObjectTypeIndex(types, "AWS.Route53RecoveryControl/SafetyRuleProperties")),
                    flags: ObjectTypePropertyFlags.Required | ObjectTypePropertyFlags.Identifier,
                    description: "properties of the resource"} as ObjectTypeProperty
            },
            additionalProperties: undefined,
            sensitive: undefined,
        });

        const propertiesType = lookupObjectType(types, "AWS.Route53RecoveryControl/SafetyRuleProperties");

        expect(propertiesType).toStrictEqual({
            type: TypeBaseKind.ObjectType,
            name: "AWS.Route53RecoveryControl/SafetyRuleProperties",
            properties: {
                "AssertionRule": {
                    type: new TypeReference(lookupObjectTypeIndex(types, "AssertionRule")),
                    flags: ObjectTypePropertyFlags.None,
                    description: undefined} as ObjectTypeProperty,
                "ControlPanelArn":{
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.Required,
                    description: "The Amazon Resource Name (ARN) of the control panel."} as ObjectTypeProperty,
                "GatingRule": {
                    type: new TypeReference(lookupObjectTypeIndex(types, "GatingRule")),
                    flags: ObjectTypePropertyFlags.None,
                    description: undefined} as ObjectTypeProperty,
                "Name": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.Required,
                    description: undefined} as ObjectTypeProperty,
                "RuleConfig": {
                    type: new TypeReference(lookupObjectTypeIndex(types, "RuleConfig")),
                    flags: ObjectTypePropertyFlags.Required,
                    description: undefined} as ObjectTypeProperty,
                "SafetyRuleArn": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.ReadOnly | ObjectTypePropertyFlags.Identifier,
                    description: "The Amazon Resource Name (ARN) of the safety rule."} as ObjectTypeProperty,
                "Status": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.ReadOnly,
                    description: "The deployment status of the routing control. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION."} as ObjectTypeProperty,
                "Tags": {
                    type: new TypeReference(lookupArrayTypeIndex(types, new TypeReference(lookupObjectTypeIndex(types, "Tag")))),
                    flags: ObjectTypePropertyFlags.WriteOnly,
                    description: "A collection of tags associated with a resource"} as ObjectTypeProperty,
            },
            additionalProperties: undefined,
            sensitive: undefined
        });
    });

    test('Regression for radius-project/radius#3688', () => {
        const file = fs.readFileSync(path.resolve('./testdata/AWS::MemoryDB::ACL.json'), { encoding: 'utf8' });
        const schemaRecord: SchemaRecord = JSON.parse(file);
        const types = convertSchemaRecordToTypes([schemaRecord]);

        const propertiesType = lookupObjectType(types, "AWS.MemoryDB/ACLProperties");
        expect(propertiesType).not.toBeUndefined();

        const aclNameProperty = propertiesType?.properties["ACLName"]
        expect(aclNameProperty).not.toBeUndefined();
        expect(aclNameProperty?.flags).toEqual(ObjectTypePropertyFlags.Required|ObjectTypePropertyFlags.Identifier);
    });

    test('Can convert string definitions properly (radius-project/radius#4823)', () => {
        const file = fs.readFileSync(path.resolve('./testdata/AWS::Redshift::EndpointAuthorization.json'), { encoding: 'utf8' });
        const schemaRecord: SchemaRecord = JSON.parse(file);
        const types = convertSchemaRecordToTypes([schemaRecord]);

        const propertiesType = lookupObjectType(types, "AWS.Redshift/EndpointAuthorizationProperties");
        expect(propertiesType).not.toBeUndefined();

        // In the CF resource type schema, 'Account' property
        // is of type 'AwsAccount', which is a string with some special
        // regex constraints. Here we assert that the type generator
        // converts this to a string type instead.
        const accountProperty = propertiesType?.properties["Account"]
        expect(accountProperty).not.toBeUndefined();
        const accountPropertyType = accountProperty?.type
        const stringPropertyType = new TypeReference(lookupStringType(types));
        expect(accountPropertyType).toStrictEqual(stringPropertyType)
    });

    test('Definition can reference property', () => {
        const file = fs.readFileSync(path.resolve('./testdata/AWS::OpenSearchService::Application.json'), { encoding: 'utf8' });

        const schemaRecord: SchemaRecord = JSON.parse(file);
        const types = convertSchemaRecordToTypes([schemaRecord]);

        const resourceType = lookupResourceType(types, "AWS.OpenSearchService/Application@default");
        expect(resourceType).not.toBeUndefined();

        // DataSourceArn references a property so we ensure that it's populated correctly
        const dataSourceype = lookupObjectType(types, "DataSource");
        expect(dataSourceype).toStrictEqual({
            type: TypeBaseKind.ObjectType,
            name: "DataSource",
            properties: {
                "DataSourceArn": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.Required,
                    description: "The ARN of the data source."} as ObjectTypeProperty,
                "DataSourceDescription": {
                    type: new TypeReference(lookupStringType(types)),
                    flags: ObjectTypePropertyFlags.None,
                    description: "Description of the data source."} as ObjectTypeProperty,    
            },
            additionalProperties: undefined,
            sensitive: undefined});
    });
});

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
