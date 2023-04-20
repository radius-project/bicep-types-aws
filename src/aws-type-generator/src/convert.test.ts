import fs from "fs";
import path from "path";
import { describe, expect, test } from '@jest/globals';
import { convertSchemaRecordToTypes } from './convert'
import { SchemaRecord } from "./schemarecord";
import { ArrayType, BuiltInType, BuiltInTypeKind, ObjectProperty, ObjectPropertyFlags, ObjectType, ResourceType, ScopeType, StringLiteralType, TypeBase, TypeReference } from "./lib/types";

describe('convert', () => {
    test('AWS::Kinesis::Stream', () => {
        const file = fs.readFileSync(path.resolve('./testdata/AWS::Kinesis::Stream.json'), { encoding: 'utf8' });

        const schemaRecord: SchemaRecord = JSON.parse(file);
        const types = convertSchemaRecordToTypes([schemaRecord]);

        const resourceType = lookupResourceType(types, "AWS.Kinesis/Stream@default");
        expect(resourceType).toStrictEqual(new ResourceType(
            "AWS.Kinesis/Stream@default",
            ScopeType.Unknown,
            new TypeReference(lookupObjectTypeIndex(types, "AWS.Kinesis/Stream"))));

        const bodyType = lookupObjectType(types, "AWS.Kinesis/Stream");
        expect(bodyType).toStrictEqual(new ObjectType(
            "AWS.Kinesis/Stream",
            {
                "name": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.None,
                    "the resource name"),

                "alias": new ObjectProperty(
                        new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                        ObjectPropertyFlags.Required,
                        "the resource alias"),

                "properties": new ObjectProperty(
                    new TypeReference(lookupObjectTypeIndex(types, "AWS.Kinesis/StreamProperties")),
                    ObjectPropertyFlags.None,
                    "properties of the resource")
            }));

        const propertiesType = lookupObjectType(types, "AWS.Kinesis/StreamProperties");
        expect(propertiesType).toStrictEqual(new ObjectType(
            "AWS.Kinesis/StreamProperties",
            {
                "Arn": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.ReadOnly,
                    "The Amazon resource name (ARN) of the Kinesis stream"),
                "Name": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.Identifier,
                    "The name of the Kinesis stream."),
                "RetentionPeriodHours": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.Int)),
                    ObjectPropertyFlags.None,
                    "The number of hours for the data records that are stored in shards to remain accessible."),
                "ShardCount": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.Int)),
                    ObjectPropertyFlags.None,
                    "The number of shards that the stream uses. Required when StreamMode = PROVISIONED is passed."),
                "StreamEncryption": new ObjectProperty(
                    new TypeReference(lookupObjectTypeIndex(types, "StreamEncryption")),
                    ObjectPropertyFlags.None,
                    "When specified, enables or updates server-side encryption using an AWS KMS key for a specified stream."),
                "StreamModeDetails": new ObjectProperty(
                    new TypeReference(lookupObjectTypeIndex(types, "StreamModeDetails")),
                    ObjectPropertyFlags.None,
                    "The mode in which the stream is running."),
                "Tags": new ObjectProperty(
                    new TypeReference(lookupArrayTypeIndex(types, new TypeReference(lookupObjectTypeIndex(types, "Tag")))),
                    ObjectPropertyFlags.None,
                    "An arbitrary set of tags (key–value pairs) to associate with the Kinesis stream."),
            }));

        const streamEncryptionType = lookupObjectType(types, "StreamEncryption");
        expect(streamEncryptionType).toStrictEqual(new ObjectType(
            "StreamEncryption",
            {
                "EncryptionType": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.Required,
                    "The encryption type to use. The only valid value is KMS. "),
                "KeyId": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.Required,
                    "The GUID for the customer-managed AWS KMS key to use for encryption. This value can be a globally unique identifier, a fully specified Amazon Resource Name (ARN) to either an alias or a key, or an alias name prefixed by \"alias/\".You can also use a master key owned by Kinesis Data Streams by specifying the alias aws/kinesis."),
            }));

        const streamModeDetailsType = lookupObjectType(types, "StreamModeDetails");
        expect(streamModeDetailsType).toStrictEqual(new ObjectType(
            "StreamModeDetails",
            {
                "StreamMode": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.Required,
                    "The mode of the stream"),
            }));

        const tagType = lookupObjectType(types, "Tag");
        expect(tagType).toStrictEqual(new ObjectType(
            "Tag",
            {
                "Key": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.Required,
                    "The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."),
                "Value": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.Required,
                    "The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -."),
            }));
    });

    test('AWS::Redshift::ScheduledAction', () => {
        const file = fs.readFileSync(path.resolve('./testdata/AWS::Redshift::ScheduledAction.json'), { encoding: 'utf8' });

        const schemaRecord: SchemaRecord = JSON.parse(file);
        const types = convertSchemaRecordToTypes([schemaRecord]);

        const resourceType = lookupResourceType(types, "AWS.Redshift/ScheduledAction@default");
        expect(resourceType).toStrictEqual(new ResourceType(
            "AWS.Redshift/ScheduledAction@default",
            ScopeType.Unknown,
            new TypeReference(lookupObjectTypeIndex(types, "AWS.Redshift/ScheduledAction"))));

        const bodyType = lookupObjectType(types, "AWS.Redshift/ScheduledAction");
        expect(bodyType).toStrictEqual(new ObjectType(
            "AWS.Redshift/ScheduledAction",
            {
                "name": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.None,
                    "the resource name"),

                "alias": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.Required,
                    "the resource alias"),

                "properties": new ObjectProperty(
                    new TypeReference(lookupObjectTypeIndex(types, "AWS.Redshift/ScheduledActionProperties")),
                    ObjectPropertyFlags.Required,
                    "properties of the resource")
            }));

        const propertiesType = lookupObjectType(types, "AWS.Redshift/ScheduledActionProperties");

        expect(propertiesType).toStrictEqual(new ObjectType(
            "AWS.Redshift/ScheduledActionProperties",
            {
                "Enable": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.Bool)),
                    ObjectPropertyFlags.None,
                    "If true, the schedule is enabled. If false, the scheduled action does not trigger."),
                "EndTime": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.None,
                    "The end time in UTC of the scheduled action. After this time, the scheduled action does not trigger."),
                "IamRole": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.None,
                    "The IAM role to assume to run the target action."),
                "NextInvocations": new ObjectProperty(
                    new TypeReference(lookupArrayTypeIndex(types, new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)))),
                    ObjectPropertyFlags.ReadOnly,
                    "List of times when the scheduled action will run."),
                "Schedule": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.None,
                    "The schedule in `at( )` or `cron( )` format."),
                "ScheduledActionDescription": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.None,
                    "The description of the scheduled action."),
                "ScheduledActionName": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.Required | ObjectPropertyFlags.Identifier,
                    "The name of the scheduled action. The name must be unique within an account."),
                "StartTime": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.None,
                    "The start time in UTC of the scheduled action. Before this time, the scheduled action does not trigger."),
                "State": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.ReadOnly,
                    "The state of the scheduled action."),
                "TargetAction": new ObjectProperty(
                    new TypeReference(lookupObjectTypeIndex(types, "ScheduledActionType")),
                    ObjectPropertyFlags.None,
                    "A JSON format string of the Amazon Redshift API operation with input parameters."),
            }));

        const scheduledActionType = lookupObjectType(types, "ScheduledActionType");
        expect(scheduledActionType).toStrictEqual(new ObjectType(
            "ScheduledActionType",
            {
                "ResizeCluster": new ObjectProperty(
                    new TypeReference(lookupObjectTypeIndex(types, "ResizeClusterMessage")),
                    ObjectPropertyFlags.None,
                    undefined),
                "PauseCluster": new ObjectProperty(
                    new TypeReference(lookupObjectTypeIndex(types, "PauseClusterMessage")),
                    ObjectPropertyFlags.None,
                    undefined),
                "ResumeCluster": new ObjectProperty(
                    new TypeReference(lookupObjectTypeIndex(types, "ResumeClusterMessage")),
                    ObjectPropertyFlags.None,
                    undefined),
        }));
    });

    test('AWS::Evidently::Experiment', () => {
        const file = fs.readFileSync(path.resolve('./testdata/AWS::Evidently::Experiment.json'), { encoding: 'utf8' });

        const schemaRecord: SchemaRecord = JSON.parse(file);
        const types = convertSchemaRecordToTypes([schemaRecord]);

        const resourceType = lookupResourceType(types, "AWS.Evidently/Experiment@default");
        expect(resourceType).toStrictEqual(new ResourceType(
            "AWS.Evidently/Experiment@default",
            ScopeType.Unknown,
            new TypeReference(lookupObjectTypeIndex(types, "AWS.Evidently/Experiment"))));

        const bodyType = lookupObjectType(types, "AWS.Evidently/Experiment");
        expect(bodyType).toStrictEqual(new ObjectType(
            "AWS.Evidently/Experiment",
            {
                "name": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.None,
                    "the resource name"),

                "alias": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.Required,
                    "the resource alias"),

                "properties": new ObjectProperty(
                    new TypeReference(lookupObjectTypeIndex(types, "AWS.Evidently/ExperimentProperties")),
                    ObjectPropertyFlags.Required,
                    "properties of the resource")
            }));

        const propertiesType = lookupObjectType(types, "AWS.Evidently/ExperimentProperties");

        expect(propertiesType).toStrictEqual(new ObjectType(
            "AWS.Evidently/ExperimentProperties",
            {
                "Arn": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.ReadOnly | ObjectPropertyFlags.Identifier,
                    undefined),
                "Description": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.None,
                    undefined),
                "MetricGoals": new ObjectProperty(
                    new TypeReference(lookupArrayTypeIndex(types, new TypeReference(lookupObjectTypeIndex(types, "MetricGoalObject")))),
                    ObjectPropertyFlags.Required,
                    undefined),
                "Name": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.Required,
                    undefined),
                "OnlineAbConfig": new ObjectProperty(
                    new TypeReference(lookupObjectTypeIndex(types, "OnlineAbConfigObject")),
                    ObjectPropertyFlags.Required,
                    undefined),
                "Project": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.Required,
                    undefined),
                "RandomizationSalt": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.None,
                    undefined),
                "RemoveSegment": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.Bool)),
                    ObjectPropertyFlags.None,
                    undefined),
                "RunningStatus": new ObjectProperty(
                    new TypeReference(lookupObjectTypeIndex(types, "RunningStatusObject")),
                    ObjectPropertyFlags.None,
                    "Start Experiment. Default is False"),
                "SamplingRate": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.Int)),
                    ObjectPropertyFlags.None,
                    undefined),
                "Segment": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.None,
                    undefined),
                "Tags": new ObjectProperty(
                    new TypeReference(lookupArrayTypeIndex(types, new TypeReference(lookupObjectTypeIndex(types, "Tag")))),
                    ObjectPropertyFlags.None,
                    "An array of key-value pairs to apply to this resource."),
                "Treatments": new ObjectProperty(
                    new TypeReference(lookupArrayTypeIndex(types, new TypeReference(lookupObjectTypeIndex(types, "TreatmentObject")))),
                    ObjectPropertyFlags.Required,
                    undefined),
            }));

        const runningStatusObject = lookupObjectType(types, "RunningStatusObject");
        expect(runningStatusObject).toStrictEqual(new ObjectType(
            "RunningStatusObject",
            {
                "Status": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.Required,
                    "Provide START or STOP action to apply on an experiment"),
                "AnalysisCompleteTime": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.None,
                    "Provide the analysis Completion time for an experiment"),
                "Reason": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.None,
                    "Reason is a required input for stopping the experiment"),
                "DesiredState": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.None,
                    "Provide CANCELLED or COMPLETED desired state when stopping an experiment"),
        }));
    });

    test('AWS::Route53RecoveryControl::SafetyRule', () => {
        const file = fs.readFileSync(path.resolve('./testdata/AWS::Route53RecoveryControl::SafetyRule.json'), { encoding: 'utf8' });

        const schemaRecord: SchemaRecord = JSON.parse(file);
        const types = convertSchemaRecordToTypes([schemaRecord]);

        const resourceType = lookupResourceType(types, "AWS.Route53RecoveryControl/SafetyRule@default");
        expect(resourceType).toStrictEqual(new ResourceType(
            "AWS.Route53RecoveryControl/SafetyRule@default",
            ScopeType.Unknown,
            new TypeReference(lookupObjectTypeIndex(types, "AWS.Route53RecoveryControl/SafetyRule"))));

        const bodyType = lookupObjectType(types, "AWS.Route53RecoveryControl/SafetyRule");
        expect(bodyType).toStrictEqual(new ObjectType(
            "AWS.Route53RecoveryControl/SafetyRule",
            {
                "name": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.None,
                    "the resource name"),

                "alias": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.Required,
                    "the resource alias"),

                "properties": new ObjectProperty(
                    new TypeReference(lookupObjectTypeIndex(types, "AWS.Route53RecoveryControl/SafetyRuleProperties")),
                    ObjectPropertyFlags.Required,
                    "properties of the resource")
            }));

        const propertiesType = lookupObjectType(types, "AWS.Route53RecoveryControl/SafetyRuleProperties");

        expect(propertiesType).toStrictEqual(new ObjectType(
            "AWS.Route53RecoveryControl/SafetyRuleProperties",
            {
                "AssertionRule": new ObjectProperty(
                    new TypeReference(lookupObjectTypeIndex(types, "AssertionRule")),
                    ObjectPropertyFlags.None,
                    undefined),
                "ControlPanelArn": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.Required,
                    "The Amazon Resource Name (ARN) of the control panel."),
                "GatingRule": new ObjectProperty(
                    new TypeReference(lookupObjectTypeIndex(types, "GatingRule")),
                    ObjectPropertyFlags.None,
                    undefined),
                "Name": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.Required,
                    undefined),
                "RuleConfig": new ObjectProperty(
                    new TypeReference(lookupObjectTypeIndex(types, "RuleConfig")),
                    ObjectPropertyFlags.Required,
                    undefined),
                "SafetyRuleArn": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.ReadOnly | ObjectPropertyFlags.Identifier,
                    "The Amazon Resource Name (ARN) of the safety rule."),
                "Status": new ObjectProperty(
                    new TypeReference(lookupBuiltInTypeIndex(types, BuiltInTypeKind.String)),
                    ObjectPropertyFlags.ReadOnly,
                    "The deployment status of the routing control. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION."),
                "Tags": new ObjectProperty(
                    new TypeReference(lookupArrayTypeIndex(types, new TypeReference(lookupObjectTypeIndex(types, "Tag")))),
                    ObjectPropertyFlags.WriteOnly,
                    "A collection of tags associated with a resource"),
            }));
    });

    test('Regression for project-radius/radius#3688', () => {
        const file = fs.readFileSync(path.resolve('./testdata/AWS::MemoryDB::ACL.json'), { encoding: 'utf8' });
        const schemaRecord: SchemaRecord = JSON.parse(file);
        const types = convertSchemaRecordToTypes([schemaRecord]);

        const propertiesType = lookupObjectType(types, "AWS.MemoryDB/ACLProperties");
        expect(propertiesType).not.toBeUndefined();

        const aclNameProperty = propertiesType?.Properties["ACLName"]
        expect(aclNameProperty).not.toBeUndefined();
        expect(aclNameProperty?.Flags).toEqual(ObjectPropertyFlags.Required|ObjectPropertyFlags.Identifier);
    });

    test('Can convert string definitions properly (project-radius/radius#4823)', () => {
        const file = fs.readFileSync(path.resolve('./testdata/AWS::Redshift::EndpointAuthorization.json'), { encoding: 'utf8' });
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
