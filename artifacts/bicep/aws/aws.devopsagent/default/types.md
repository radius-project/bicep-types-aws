# AWS.DevOpsAgent @ default

## Resource AWS.DevOpsAgent/AgentSpace@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DevOpsAgent/AgentSpaceProperties](#awsdevopsagentagentspaceproperties) (Required, Identifier): properties of the resource

## Resource AWS.DevOpsAgent/Asset@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DevOpsAgent/AssetProperties](#awsdevopsagentassetproperties) (Required, Identifier): properties of the resource

## Resource AWS.DevOpsAgent/Association@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DevOpsAgent/AssociationProperties](#awsdevopsagentassociationproperties) (Required, Identifier): properties of the resource

## Resource AWS.DevOpsAgent/PrivateConnection@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DevOpsAgent/PrivateConnectionProperties](#awsdevopsagentprivateconnectionproperties) (Required, Identifier): properties of the resource

## Resource AWS.DevOpsAgent/Service@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DevOpsAgent/ServiceProperties](#awsdevopsagentserviceproperties) (Required, Identifier): properties of the resource

## Resource AWS.DevOpsAgent/Trigger@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DevOpsAgent/TriggerProperties](#awsdevopsagenttriggerproperties) (Required, Identifier): properties of the resource

## AdditionalServiceDetails
### Properties

## Asset_Metadata
### Properties

## Asset_Metadata
### Properties

## AssetFile
### Properties
* **ContentBytes**: string: Base64-encoded binary contents of the file. Mutually exclusive with ContentText (max 6 MiB).
* **ContentText**: string: UTF-8 text contents of the file. Mutually exclusive with ContentBytes (max 1.5 MiB).
* **Metadata**: [Asset_Metadata](#assetmetadata): Per-file metadata document. Values may be strings, numbers, booleans, or lists of any of those (validated server-side).
* **Path**: string (Required): Path of this file within the asset bundle.

## AWS.DevOpsAgent/AgentSpaceProperties
### Properties
* **AgentSpaceId**: string (ReadOnly, Identifier): The unique identifier of the AgentSpace
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the AgentSpace.
* **CreatedAt**: string (ReadOnly): The timestamp when the resource was created.
* **Description**: string: The description of the AgentSpace.
* **KmsKeyArn**: string: The ARN of the KMS key to use for encryption.
* **Locale**: string: The locale for the AgentSpace, which determines the language used in agent responses.
* **Name**: string (Required): The name of the AgentSpace.
* **OperatorApp**: [OperatorApp](#operatorapp)
* **Preferences**: [Preferences](#preferences)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **UpdatedAt**: string (ReadOnly): The timestamp when the resource was last updated.

## AWS.DevOpsAgent/AssetProperties
### Properties
* **AgentSpaceId**: string (Required, Identifier): The unique identifier of the parent Agent Space. The asset is created as a child of this agent space.
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the asset. Nested under the parent Agent Space: arn:<partition>:aidevops:<region>:<account-id>:agentspace/<agentspace-id>/asset/<asset-id>.
* **AssetId**: string (ReadOnly, Identifier): The unique identifier of the asset (assigned by the service on Create).
* **AssetType**: string (Required): The type of asset. The Asset API treats this as an open string; call ListAssetTypes for the current authoritative set of supported types. As of launch, customer-creatable types include skill, agents_md, and attachment.
* **CreatedAt**: string (ReadOnly): The timestamp when the asset was created.
* **Files**: [AssetFile](#assetfile)[] (WriteOnly): Inline file list. Mutually exclusive with Zip; enforced by the handler at Create/Update time. Write-only: not repopulated by Read.
* **Metadata**: [Asset_Metadata](#assetmetadata): Asset metadata document. Required and optional keys depend on AssetType. Values may be strings, numbers, booleans, or lists of any of those - validated server-side; see the public Asset API docs for the per-type metadata schema.
* **UpdatedAt**: string (ReadOnly): The timestamp when the asset was last updated.
* **Version**: int (ReadOnly): The current asset version. Server-managed; bumps on every successful Update (including no-op updates). This is the drift signal for change detection.
* **Zip**: string (WriteOnly): Base64-encoded zip bundle containing all files for the asset. Mutually exclusive with Files; enforced by the handler at Create/Update time. Write-only: not repopulated by Read. Server treats a zip as 'replace all files' (max 6 MiB).

## AWS.DevOpsAgent/AssociationProperties
### Properties
* **AgentSpaceId**: string (Required, Identifier): The unique identifier of the AgentSpace
* **AssociationId**: string (ReadOnly, Identifier): The unique identifier of the association
* **Configuration**: [ServiceConfiguration](#serviceconfiguration) (Required): The configuration that directs how AgentSpace interacts with the given service
* **CreatedAt**: string (ReadOnly): The timestamp when the association was created
* **LinkedAssociationIds**: string[] (WriteOnly): Set of linked association IDs for parent-child relationships
* **ServiceId**: string (Required): The identifier for the associated service
* **UpdatedAt**: string (ReadOnly): The timestamp when the association was last updated

## AWS.DevOpsAgent/PrivateConnectionProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the Private Connection.
* **Certificate**: string (WriteOnly): Certificate for the Private Connection.
* **CertificateExpiryTime**: string (ReadOnly): The expiry time of the certificate associated with the Private Connection.
* **ConnectionConfiguration**: [ConnectionConfiguration](#connectionconfiguration) (Required): The connection configuration for the Private Connection.
* **Name**: string (Required, Identifier): Unique name for this Private Connection within the account.
* **Status**: string (ReadOnly): The status of the Private Connection.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.DevOpsAgent/ServiceProperties
### Properties
* **AccessibleResources**: [Service_AccessibleResources](#serviceaccessibleresources)[] (ReadOnly): List of accessible resources for this service
* **AdditionalServiceDetails**: [AdditionalServiceDetails](#additionalservicedetails) (ReadOnly): Additional details specific to the service type
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the Service.
* **ExchangeUrlPrivateConnectionName**: string (WriteOnly): The name of the private connection to use for OAuth token exchange requests only. Cannot be specified when PrivateConnectionName is provided.
* **KmsKeyArn**: string: The ARN of the KMS key to use for encryption.
* **Name**: string: The display name for the service registration.
* **PrivateConnectionName**: string: The name of the private connection to use for VPC connectivity.
* **ServiceDetails**: [ServiceDetails](#servicedetails) (WriteOnly): Service-specific configuration details for create operation
* **ServiceId**: string (ReadOnly, Identifier): The unique identifier of the service
* **ServiceType**: string (Required): The type of service being registered
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TargetUrlPrivateConnectionName**: string (WriteOnly): The name of the private connection to use for API calls (target URL) only. Cannot be specified when PrivateConnectionName is provided.

## AWS.DevOpsAgent/TriggerProperties
### Properties
* **Action**: [Trigger_Action](#triggeraction) (Required): The action to perform when the trigger fires. A JSON object containing actionType and task.
* **AgentSpaceId**: string (Required, Identifier): The unique identifier of the parent Agent Space.
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the trigger. Nested under the parent Agent Space: arn:<partition>:aidevops:<region>:<account-id>:agentspace/<agentspace-id>/trigger/<trigger-id>.
* **Condition**: [Condition](#condition) (Required)
* **CreatedAt**: string (ReadOnly): The timestamp when the trigger was created.
* **Status**: string: The status of the trigger. Active triggers fire on schedule; Inactive triggers are paused.
* **TriggerId**: string (ReadOnly, Identifier): The unique identifier of the trigger (assigned by the service on Create).
* **Type**: string (Required): The type of trigger.
* **UpdatedAt**: string (ReadOnly): The timestamp when the trigger was last updated.

## Condition
### Properties
* **Schedule**: [Schedule](#schedule) (Required)

## ConnectionConfiguration
### Properties

## IamAuthConfiguration
### Properties
* **CreatedAt**: string (ReadOnly)
* **OperatorAppRoleArn**: string (Required)
* **UpdatedAt**: string (ReadOnly)

## IdcAuthConfiguration
### Properties
* **CreatedAt**: string (ReadOnly)
* **IdcApplicationArn**: string (ReadOnly)
* **IdcInstanceArn**: string (Required)
* **OperatorAppRoleArn**: string (Required)
* **UpdatedAt**: string (ReadOnly)

## IdpAuthConfiguration
### Properties
* **ClientId**: string (Required): The OIDC client identifier for the external identity provider application.
* **ClientSecret**: string (Required, WriteOnly): The OIDC client secret for the external identity provider application. Use a Secrets Manager dynamic reference to avoid storing the secret in the template.
* **CreatedAt**: string (ReadOnly)
* **IssuerUrl**: string (Required): The OIDC issuer URL for the external identity provider.
* **OperatorAppRoleArn**: string (Required): The IAM role that Operator App users assume to access DevOps Agent APIs.
* **Provider**: string (Required): The external identity provider type.
* **UpdatedAt**: string (ReadOnly)
* **UserIdClaim**: string (ReadOnly): The identity claim used to identify users. This value is selected by the service for the configured provider.

## OperatorApp
### Properties
* **Iam**: [IamAuthConfiguration](#iamauthconfiguration)
* **Idc**: [IdcAuthConfiguration](#idcauthconfiguration)
* **Idp**: [IdpAuthConfiguration](#idpauthconfiguration)

## Preferences
### Properties
* **ElevatedActionsEnabled**: bool: Indicates whether elevated directed actions are permitted in this AgentSpace. Defaults to false when not set.

## Schedule
### Properties
* **Expression**: string (Required): A cron or rate expression that defines when the trigger fires.

## Service_AccessibleResources
### Properties

## ServiceConfiguration
### Properties

## ServiceDetails
### Properties

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Trigger_Action
### Properties

