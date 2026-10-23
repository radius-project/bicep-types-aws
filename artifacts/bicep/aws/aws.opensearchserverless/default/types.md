# AWS.OpenSearchServerless @ default

## Resource AWS.OpenSearchServerless/AccessPolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.OpenSearchServerless/AccessPolicyProperties](#awsopensearchserverlessaccesspolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.OpenSearchServerless/Collection@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.OpenSearchServerless/CollectionProperties](#awsopensearchserverlesscollectionproperties) (Required, Identifier): properties of the resource

## Resource AWS.OpenSearchServerless/CollectionGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.OpenSearchServerless/CollectionGroupProperties](#awsopensearchserverlesscollectiongroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.OpenSearchServerless/CollectionIndex@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.OpenSearchServerless/CollectionIndexProperties](#awsopensearchserverlesscollectionindexproperties) (Required, Identifier): properties of the resource

## Resource AWS.OpenSearchServerless/Index@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.OpenSearchServerless/IndexProperties](#awsopensearchserverlessindexproperties) (Required, Identifier): properties of the resource

## Resource AWS.OpenSearchServerless/LifecyclePolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.OpenSearchServerless/LifecyclePolicyProperties](#awsopensearchserverlesslifecyclepolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.OpenSearchServerless/SecurityConfig@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.OpenSearchServerless/SecurityConfigProperties](#awsopensearchserverlesssecurityconfigproperties) (Identifier): properties of the resource

## Resource AWS.OpenSearchServerless/SecurityPolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.OpenSearchServerless/SecurityPolicyProperties](#awsopensearchserverlesssecuritypolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.OpenSearchServerless/VpcEndpoint@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.OpenSearchServerless/VpcEndpointProperties](#awsopensearchserverlessvpcendpointproperties) (Required, Identifier): properties of the resource

## AWS.OpenSearchServerless/AccessPolicyProperties
### Properties
* **Description**: string: The description of the policy
* **Name**: string (Required, Identifier): The name of the policy
* **Policy**: string (Required): The JSON policy document that is the content for the policy
* **Type**: string (Required, Identifier)

## AWS.OpenSearchServerless/CollectionGroupProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the collection group.
* **CapacityLimits**: [CapacityLimits](#capacitylimits)
* **Description**: string: The description of the collection group.
* **Generation**: string: The generation of Amazon OpenSearch Serverless for the collection group. Valid values are CLASSIC and NEXTGEN.
* **Id**: string (ReadOnly, Identifier): The unique identifier of the collection group.
* **Name**: string (Required): The name of the collection group.
* **StandbyReplicas**: string (Required): Indicates whether standby replicas are used for the collection group.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.OpenSearchServerless/CollectionIndexProperties
### Properties
* **Id**: string (Required, Identifier): The identifier of the collection
* **IndexName**: string (Required, Identifier): The name of the collection index
* **IndexSchema**: string: The Mappings for the collection index

## AWS.OpenSearchServerless/CollectionProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the collection.
* **CollectionEndpoint**: string (ReadOnly): The endpoint for the collection.
* **CollectionGroupName**: string: The name of the collection group to associate with the collection.
* **DashboardEndpoint**: string (ReadOnly): The OpenSearch Dashboards endpoint for the collection.
* **DeletionProtection**: string
* **Description**: string: The description of the collection
* **EncryptionConfig**: [EncryptionConfig](#encryptionconfig) (WriteOnly)
* **FipsEndpoints**: [FipsEndpoints](#fipsendpoints) (ReadOnly)
* **Id**: string (ReadOnly, Identifier): The identifier of the collection
* **KmsKeyArn**: string (ReadOnly): Key Management Service key used to encrypt the collection.
* **Name**: string (Required): The name of the collection.

The name must meet the following criteria:
Unique to your account and AWS Region
Starts with a lowercase letter
Contains only lowercase letters a-z, the numbers 0-9 and the hyphen (-)
Contains between 3 and 64 characters

* **StandbyReplicas**: string
* **Tags**: [Tag](#tag)[] (WriteOnly): List of tags to be added to the resource
* **Type**: string
* **VectorOptions**: [VectorOptions](#vectoroptions)

## AWS.OpenSearchServerless/IndexProperties
### Properties
* **CollectionEndpoint**: string (Required, Identifier): The endpoint for the collection.
* **IndexName**: string (Required, Identifier): The name of the OpenSearch Serverless index.
* **Mappings**: [Index_Mappings](#indexmappings): Index Mappings
* **Settings**: [IndexSettings](#indexsettings): Index settings
* **Uuid**: string (ReadOnly): The unique identifier for the index.

## AWS.OpenSearchServerless/LifecyclePolicyProperties
### Properties
* **Description**: string: The description of the policy
* **Name**: string (Required, Identifier): The name of the policy
* **Policy**: string (Required): The JSON policy document that is the content for the policy
* **Type**: string (Required, Identifier)

## AWS.OpenSearchServerless/SecurityConfigProperties
### Properties
* **Description**: string: Security config description
* **IamFederationOptions**: [IamFederationConfigOptions](#iamfederationconfigoptions)
* **IamIdentityCenterOptions**: [IamIdentityCenterConfigOptions](#iamidentitycenterconfigoptions)
* **Id**: string (ReadOnly, Identifier): The identifier of the security config
* **Name**: string (WriteOnly): The friendly name of the security config
* **SamlOptions**: [SamlConfigOptions](#samlconfigoptions)
* **Type**: string

## AWS.OpenSearchServerless/SecurityPolicyProperties
### Properties
* **Description**: string: The description of the policy
* **Name**: string (Required, Identifier): The name of the policy
* **Policy**: string (Required): The JSON policy document that is the content for the policy
* **Type**: string (Required, Identifier)

## AWS.OpenSearchServerless/VpcEndpointProperties
### Properties
* **Id**: string (ReadOnly, Identifier): The identifier of the VPC Endpoint
* **Name**: string (Required): The name of the VPC Endpoint
* **SecurityGroupIds**: string[]: The ID of one or more security groups to associate with the endpoint network interface
* **SubnetIds**: string[] (Required): The ID of one or more subnets in which to create an endpoint network interface
* **VpcId**: string (Required): The ID of the VPC in which the endpoint will be used.

## CapacityLimits
### Properties
* **MaxIndexingCapacityInOcu**: int: The maximum indexing capacity for collections in the group.
* **MaxSearchCapacityInOcu**: int: The maximum search capacity for collections in the group.
* **MinIndexingCapacityInOcu**: int: The minimum indexing capacity for collections in the group.
* **MinSearchCapacityInOcu**: int: The minimum search capacity for collections in the group.

## EncryptionConfig
### Properties
* **AWSOwnedKey**: bool: Indicates whether to use an AWS owned key for encryption.
* **KmsKeyArn**: string: Key Management Service key used to encrypt the collection.

## FipsEndpoints
### Properties
* **CollectionEndpoint**: string
* **DashboardEndpoint**: string

## IamFederationConfigOptions
### Properties
* **GroupAttribute**: string: Group attribute for this IAM federation integration
* **UserAttribute**: string: User attribute for this IAM federation integration

## IamIdentityCenterConfigOptions
### Properties
* **ApplicationArn**: string (ReadOnly)
* **ApplicationDescription**: string (ReadOnly): The description of the IAM Identity Center application used to integrate with OpenSearch Serverless
* **ApplicationName**: string (ReadOnly): The name of the IAM Identity Center application used to integrate with OpenSearch Serverless
* **GroupAttribute**: string
* **InstanceArn**: string (Required)
* **UserAttribute**: string

## Index_Analysis
### Properties
* **Analyzer**: [Index_Analysis_Analyzer](#indexanalysisanalyzer): Custom analyzer definitions

## Index_Analysis_Analyzer
### Properties

## Index_Index
### Properties
* **Knn**: bool: Enable/disable k-nearest neighbor search capability
* **KnnAlgoParamEfSearch**: int (WriteOnly): Size of the dynamic list for the nearest neighbors
* **RefreshInterval**: string (WriteOnly): How often to perform refresh operation (e.g. '1s', '5s')

## Index_Mappings
### Properties
* **Properties**: [Index_Mappings_Properties](#indexmappingsproperties): Defines the fields within the mapping, including their types and configurations

## Index_Mappings_Properties
### Properties

## IndexSettings
### Properties
* **Analysis**: [Index_Analysis](#indexanalysis): Custom analysis configuration including analyzers, tokenizers, and filters
* **Index**: [Index_Index](#indexindex)

## SamlConfigOptions
### Properties
* **GroupAttribute**: string: Group attribute for this saml integration
* **Metadata**: string (Required): The XML saml provider metadata document that you want to use
* **OpenSearchServerlessEntityId**: string: Custom entity id attribute to override default entity id for this saml integration
* **SessionTimeout**: int: Defines the session timeout in minutes
* **UserAttribute**: string: Custom attribute for this saml integration

## Tag
### Properties
* **Key**: string (Required): The key in the key-value pair
* **Value**: string (Required): The value in the key-value pair

## Tag
### Properties
* **Key**: string (Required): The key in the key-value pair
* **Value**: string (Required): The value in the key-value pair

## VectorOptions
### Properties
* **ServerlessVectorAcceleration**: string

