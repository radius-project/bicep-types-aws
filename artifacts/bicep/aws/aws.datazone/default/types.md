# AWS.DataZone @ default

## Resource AWS.DataZone/Connection@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataZone/ConnectionProperties](#awsdatazoneconnectionproperties) (Required, Identifier): properties of the resource

## Resource AWS.DataZone/DataSource@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataZone/DataSourceProperties](#awsdatazonedatasourceproperties) (Required, Identifier): properties of the resource

## Resource AWS.DataZone/Domain@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataZone/DomainProperties](#awsdatazonedomainproperties) (Required, Identifier): properties of the resource

## Resource AWS.DataZone/DomainUnit@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataZone/DomainUnitProperties](#awsdatazonedomainunitproperties) (Required, Identifier): properties of the resource

## Resource AWS.DataZone/Environment@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataZone/EnvironmentProperties](#awsdatazoneenvironmentproperties) (Required, Identifier): properties of the resource

## Resource AWS.DataZone/EnvironmentActions@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataZone/EnvironmentActionsProperties](#awsdatazoneenvironmentactionsproperties) (Required, Identifier): properties of the resource

## Resource AWS.DataZone/EnvironmentBlueprintConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataZone/EnvironmentBlueprintConfigurationProperties](#awsdatazoneenvironmentblueprintconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.DataZone/EnvironmentProfile@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataZone/EnvironmentProfileProperties](#awsdatazoneenvironmentprofileproperties) (Required, Identifier): properties of the resource

## Resource AWS.DataZone/FormType@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataZone/FormTypeProperties](#awsdatazoneformtypeproperties) (Required, Identifier): properties of the resource

## Resource AWS.DataZone/GroupProfile@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataZone/GroupProfileProperties](#awsdatazonegroupprofileproperties) (Required, Identifier): properties of the resource

## Resource AWS.DataZone/Project@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataZone/ProjectProperties](#awsdatazoneprojectproperties) (Required, Identifier): properties of the resource

## Resource AWS.DataZone/ProjectMembership@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataZone/ProjectMembershipProperties](#awsdatazoneprojectmembershipproperties) (Required, Identifier): properties of the resource

## Resource AWS.DataZone/ProjectProfile@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataZone/ProjectProfileProperties](#awsdatazoneprojectprofileproperties) (Required, Identifier): properties of the resource

## Resource AWS.DataZone/SubscriptionTarget@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataZone/SubscriptionTargetProperties](#awsdatazonesubscriptiontargetproperties) (Required, Identifier): properties of the resource

## Resource AWS.DataZone/UserProfile@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataZone/UserProfileProperties](#awsdatazoneuserprofileproperties) (Required, Identifier): properties of the resource

## AWS.DataZone/ConnectionProperties
### Properties
* **AwsLocation**: [AwsLocation](#awslocation) (WriteOnly)
* **Configurations**: [ConnectionConfiguration](#connectionconfiguration)[] (WriteOnly): The configurations of the connection.
* **ConnectionId**: string (ReadOnly, Identifier): The ID of the connection.
* **Description**: string: The description of the connection.
* **DomainId**: string (ReadOnly, Identifier): The ID of the domain in which the connection is created.
* **DomainIdentifier**: string (Required, WriteOnly): The identifier of the domain in which the connection is created.
* **DomainUnitId**: string (ReadOnly): The ID of the domain unit in which the connection is created.
* **EnableTrustedIdentityPropagation**: bool (WriteOnly): Specifies whether the trusted identity propagation is enabled
* **EnvironmentId**: string (ReadOnly): The ID of the environment in which the connection is created.
* **EnvironmentIdentifier**: string (WriteOnly): The identifier of the environment in which the connection is created.
* **EnvironmentUserRole**: string (ReadOnly): The role of the user in the environment.
* **Name**: string (Required): The name of the connection.
* **ProjectId**: string (ReadOnly): The ID of the project in which the connection is created.
* **ProjectIdentifier**: string (WriteOnly): The identifier of the project in which the connection should be created. If 
* **Props**: [ConnectionPropertiesInput](#connectionpropertiesinput) (WriteOnly)
* **Scope**: string (WriteOnly): The scope of the connection.
* **Type**: string (ReadOnly)

## AWS.DataZone/DataSourceProperties
### Properties
* **AssetFormsInput**: [FormInput](#forminput)[] (WriteOnly): The metadata forms that are to be attached to the assets that this data source works with.
* **Configuration**: [DataSourceConfigurationInput](#datasourceconfigurationinput) (WriteOnly): Configuration of the data source. It can be set to either glueRunConfiguration or redshiftRunConfiguration.
* **ConnectionId**: string (ReadOnly): The unique identifier of a connection used to fetch relevant parameters from connection during Datasource run
* **ConnectionIdentifier**: string (WriteOnly): The unique identifier of a connection used to fetch relevant parameters from connection during Datasource run
* **CreatedAt**: string (ReadOnly): The timestamp of when the data source was created.
* **Description**: string: The description of the data source.
* **DomainId**: string (ReadOnly, Identifier): The ID of the Amazon DataZone domain where the data source is created.
* **DomainIdentifier**: string (Required, WriteOnly): The ID of the Amazon DataZone domain where the data source is created.
* **EnableSetting**: string: Specifies whether the data source is enabled.
* **EnvironmentId**: string (ReadOnly): The unique identifier of the Amazon DataZone environment to which the data source publishes assets.
* **EnvironmentIdentifier**: string (WriteOnly): The unique identifier of the Amazon DataZone environment to which the data source publishes assets.
* **Id**: string (ReadOnly, Identifier): The unique identifier of the data source.
* **LastRunAssetCount**: int (ReadOnly): The number of assets created by the data source during its last run.
* **LastRunAt**: string (ReadOnly): The timestamp that specifies when the data source was last run.
* **LastRunStatus**: string (ReadOnly): The status of the last run of this data source.
* **Name**: string (Required): The name of the data source.
* **ProjectId**: string (ReadOnly): The ID of the Amazon DataZone project to which the data source is added.
* **ProjectIdentifier**: string (Required, WriteOnly): The identifier of the Amazon DataZone project in which you want to add the data source.
* **PublishOnImport**: bool: Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog.
* **Recommendation**: [RecommendationConfiguration](#recommendationconfiguration): Specifies whether the business name generation is to be enabled for this data source.
* **Schedule**: [ScheduleConfiguration](#scheduleconfiguration): The schedule of the data source runs.
* **Status**: string (ReadOnly): The status of the data source.
* **Type**: string (Required): The type of the data source.
* **UpdatedAt**: string (ReadOnly): The timestamp of when this data source was updated.

## AWS.DataZone/DomainProperties
### Properties
* **Arn**: string (ReadOnly): The ARN of the Amazon DataZone domain.
* **CreatedAt**: string (ReadOnly): The timestamp of when the Amazon DataZone domain was last updated.
* **Description**: string: The description of the Amazon DataZone domain.
* **DomainExecutionRole**: string: The domain execution role that is created when an Amazon DataZone domain is created. The domain execution role is created in the AWS account that houses the Amazon DataZone domain.
* **DomainVersion**: string: The version of the domain.
* **Id**: string (ReadOnly, Identifier): The id of the Amazon DataZone domain.
* **KmsKeyIdentifier**: string: The identifier of the AWS Key Management Service (KMS) key that is used to encrypt the Amazon DataZone domain, metadata, and reporting data.
* **LastUpdatedAt**: string (ReadOnly): The timestamp of when the Amazon DataZone domain was last updated.
* **ManagedAccountId**: string (ReadOnly): The identifier of the AWS account that manages the domain.
* **Name**: string (Required): The name of the Amazon DataZone domain.
* **PortalUrl**: string (ReadOnly): The URL of the data portal for this Amazon DataZone domain.
* **RootDomainUnitId**: string (ReadOnly): The ID of the root domain in Amazon Datazone.
* **ServiceRole**: string (WriteOnly): The service role of the domain that is created.
* **SingleSignOn**: [SingleSignOn](#singlesignon): The single-sign on configuration of the Amazon DataZone domain.
* **Status**: string (ReadOnly): The status of the Amazon DataZone domain.
* **Tags**: [Tag](#tag)[]: The tags specified for the Amazon DataZone domain.

## AWS.DataZone/DomainUnitProperties
### Properties
* **CreatedAt**: string (ReadOnly): The timestamp at which the domain unit was created.
* **Description**: string: The description of the domain unit.
* **DomainId**: string (ReadOnly, Identifier): The ID of the domain where the domain unit was created.
* **DomainIdentifier**: string (Required): The ID of the domain where you want to create a domain unit.
* **Id**: string (ReadOnly, Identifier): The ID of the domain unit.
* **Identifier**: string (ReadOnly): The identifier of the domain unit that you want to get.
* **LastUpdatedAt**: string (ReadOnly): The timestamp at which the domain unit was last updated.
* **Name**: string (Required): The name of the domain unit.
* **ParentDomainUnitId**: string (ReadOnly): The ID of the parent domain unit.
* **ParentDomainUnitIdentifier**: string (Required): The ID of the parent domain unit.

## AWS.DataZone/EnvironmentActionsProperties
### Properties
* **Description**: string: The description of the Amazon DataZone environment action.
* **DomainId**: string (ReadOnly, Identifier): The identifier of the Amazon DataZone domain in which the environment is created.
* **DomainIdentifier**: string (WriteOnly): The identifier of the Amazon DataZone domain in which the environment would be created.
* **EnvironmentId**: string (ReadOnly, Identifier): The identifier of the Amazon DataZone environment in which the action is taking place
* **EnvironmentIdentifier**: string (WriteOnly): The identifier of the Amazon DataZone environment in which the action is taking place
* **Id**: string (ReadOnly, Identifier): The ID of the Amazon DataZone environment action.
* **Identifier**: string (WriteOnly): The ID of the Amazon DataZone environment action.
* **Name**: string (Required): The name of the environment action.
* **Parameters**: [AwsConsoleLinkParameters](#awsconsolelinkparameters): The parameters of the environment action.

## AWS.DataZone/EnvironmentBlueprintConfigurationProperties
### Properties
* **CreatedAt**: string (ReadOnly)
* **DomainId**: string (ReadOnly, Identifier)
* **DomainIdentifier**: string (Required, WriteOnly)
* **EnabledRegions**: string[] (Required)
* **EnvironmentBlueprintId**: string (ReadOnly, Identifier)
* **EnvironmentBlueprintIdentifier**: string (Required, WriteOnly)
* **EnvironmentRolePermissionBoundary**: string (WriteOnly)
* **GlobalParameters**: [EnvironmentBlueprintConfiguration_GlobalParameters](#environmentblueprintconfigurationglobalparameters) (WriteOnly): Region-agnostic environment blueprint parameters.
* **ManageAccessRoleArn**: string
* **ProvisioningConfigurations**: [ProvisioningConfiguration](#provisioningconfiguration)[] (WriteOnly)
* **ProvisioningRoleArn**: string
* **RegionalParameters**: [RegionalParameter](#regionalparameter)[]
* **UpdatedAt**: string (ReadOnly)

## AWS.DataZone/EnvironmentProfileProperties
### Properties
* **AwsAccountId**: string (Required): The AWS account in which the Amazon DataZone environment is created.
* **AwsAccountRegion**: string (Required): The AWS region in which this environment profile is created.
* **CreatedAt**: string (ReadOnly): The timestamp of when this environment profile was created.
* **CreatedBy**: string (ReadOnly): The Amazon DataZone user who created this environment profile.
* **Description**: string: The description of this Amazon DataZone environment profile.
* **DomainId**: string (ReadOnly, Identifier): The ID of the Amazon DataZone domain in which this environment profile is created.
* **DomainIdentifier**: string (Required, WriteOnly): The ID of the Amazon DataZone domain in which this environment profile is created.
* **EnvironmentBlueprintId**: string (ReadOnly): The ID of the blueprint with which this environment profile is created.
* **EnvironmentBlueprintIdentifier**: string (Required, WriteOnly): The ID of the blueprint with which this environment profile is created.
* **Id**: string (ReadOnly, Identifier): The ID of this Amazon DataZone environment profile.
* **Name**: string (Required): The name of this Amazon DataZone environment profile.
* **ProjectId**: string (ReadOnly): The identifier of the project in which to create the environment profile.
* **ProjectIdentifier**: string (Required, WriteOnly): The identifier of the project in which to create the environment profile.
* **UpdatedAt**: string (ReadOnly): The timestamp of when this environment profile was updated.
* **UserParameters**: [EnvironmentParameter](#environmentparameter)[]: The user parameters of this Amazon DataZone environment profile.

## AWS.DataZone/EnvironmentProperties
### Properties
* **AwsAccountId**: string (ReadOnly): The AWS account in which the Amazon DataZone environment is created.
* **AwsAccountRegion**: string (ReadOnly): The AWS region in which the Amazon DataZone environment is created.
* **CreatedAt**: string (ReadOnly): The timestamp of when the environment was created.
* **CreatedBy**: string (ReadOnly): The Amazon DataZone user who created the environment.
* **DeploymentOrder**: int (WriteOnly): The deployment order for the environment.
* **Description**: string: The description of the Amazon DataZone environment.
* **DomainId**: string (ReadOnly, Identifier): The identifier of the Amazon DataZone domain in which the environment is created.
* **DomainIdentifier**: string (Required, WriteOnly): The identifier of the Amazon DataZone domain in which the environment would be created.
* **EnvironmentAccountIdentifier**: string (WriteOnly): The AWS account in which the Amazon DataZone environment is created.
* **EnvironmentAccountRegion**: string (WriteOnly): The AWS region in which the Amazon DataZone environment is created.
* **EnvironmentBlueprintId**: string (ReadOnly): The ID of the blueprint with which the Amazon DataZone environment was created.
* **EnvironmentBlueprintIdentifier**: string (WriteOnly): The identifier of the environment blueprint.
* **EnvironmentConfigurationId**: string (WriteOnly): The identifier of the environment configuration.
* **EnvironmentProfileId**: string (ReadOnly): The ID of the environment profile with which the Amazon DataZone environment was created.
* **EnvironmentProfileIdentifier**: string (WriteOnly): The ID of the environment profile with which the Amazon DataZone environment would be created.
* **EnvironmentRoleArn**: string (WriteOnly): Environment role arn for custom aws environment permissions
* **GlossaryTerms**: string[]: The glossary terms that can be used in the Amazon DataZone environment.
* **Id**: string (ReadOnly, Identifier): The ID of the Amazon DataZone environment.
* **Name**: string (Required): The name of the environment.
* **ProjectId**: string (ReadOnly): The ID of the Amazon DataZone project in which the environment is created.
* **ProjectIdentifier**: string (Required, WriteOnly): The ID of the Amazon DataZone project in which the environment would be created.
* **Provider**: string (ReadOnly): The provider of the Amazon DataZone environment.
* **Status**: string (ReadOnly): The status of the Amazon DataZone environment.
* **UpdatedAt**: string (ReadOnly): The timestamp of when the environment was updated.
* **UserParameters**: [EnvironmentParameter](#environmentparameter)[]: The user parameters of the Amazon DataZone environment.

## AWS.DataZone/FormTypeProperties
### Properties
* **CreatedAt**: string (ReadOnly): The timestamp of when this Amazon DataZone metadata form type was created.
* **CreatedBy**: string (ReadOnly): The user who created this Amazon DataZone metadata form type.
* **Description**: string: The description of this Amazon DataZone metadata form type.
* **DomainId**: string (ReadOnly): The ID of the Amazon DataZone domain in which this metadata form type is created.
* **DomainIdentifier**: string (Required, Identifier): The ID of the Amazon DataZone domain in which this metadata form type is created.
* **FormTypeIdentifier**: string (ReadOnly, Identifier): The ID of this Amazon DataZone metadata form type.
* **Model**: [FormType_Model](#formtypemodel) (Required): The model of this Amazon DataZone metadata form type.
* **Name**: string (Required): The name of this Amazon DataZone metadata form type.
* **OwningProjectId**: string (ReadOnly): The ID of the project that owns this Amazon DataZone metadata form type.
* **OwningProjectIdentifier**: string (Required): The ID of the Amazon DataZone project that owns this metadata form type.
* **Revision**: string (ReadOnly): The revision of this Amazon DataZone metadata form type.
* **Status**: string: The status of this Amazon DataZone metadata form type.

## AWS.DataZone/GroupProfileProperties
### Properties
* **DomainId**: string (ReadOnly, Identifier): The identifier of the Amazon DataZone domain in which the group profile is created.
* **DomainIdentifier**: string (Required, WriteOnly): The identifier of the Amazon DataZone domain in which the group profile would be created.
* **GroupIdentifier**: string (WriteOnly): The ID of the group.
* **GroupName**: string (ReadOnly): The group-name of the Group Profile.
* **GroupType**: string (WriteOnly)
* **Id**: string (ReadOnly, Identifier): The ID of the Amazon DataZone group profile.
* **RolePrincipalArn**: string (WriteOnly): The ARN of the role principal for the group profile.
* **RolePrincipalId**: string (ReadOnly): The ID of the role principal for the group profile.
* **Status**: string

## AWS.DataZone/ProjectMembershipProperties
### Properties
* **Designation**: string (Required, WriteOnly)
* **DomainIdentifier**: string (Required, Identifier)
* **Member**: [Member](#member) (Required, WriteOnly)
* **MemberIdentifier**: string (ReadOnly, Identifier)
* **MemberIdentifierType**: string (ReadOnly, Identifier)
* **ProjectIdentifier**: string (Required, Identifier)

## AWS.DataZone/ProjectProfileProperties
### Properties
* **AllowCustomProjectResourceTags**: bool
* **CreatedAt**: string (ReadOnly)
* **CreatedBy**: string (ReadOnly)
* **Description**: string
* **DomainId**: string (ReadOnly)
* **DomainIdentifier**: string (Identifier)
* **DomainUnitId**: string (ReadOnly)
* **DomainUnitIdentifier**: string (WriteOnly)
* **EnvironmentConfigurations**: [EnvironmentConfiguration](#environmentconfiguration)[] (ReadOnly)
* **Id**: string (ReadOnly)
* **Identifier**: string (ReadOnly, Identifier)
* **LastUpdatedAt**: string (ReadOnly)
* **Name**: string (Required)
* **ProjectResourceTags**: [ResourceTagParameter](#resourcetagparameter)[]
* **ProjectResourceTagsDescription**: string
* **Status**: string
* **UseDefaultConfigurations**: bool (WriteOnly)

## AWS.DataZone/ProjectProperties
### Properties
* **CreatedAt**: string (ReadOnly): The timestamp of when the project was created.
* **CreatedBy**: string (ReadOnly): The Amazon DataZone user who created the project.
* **Description**: string: The description of the Amazon DataZone project.
* **DomainId**: string (ReadOnly, Identifier): The identifier of the Amazon DataZone domain in which the project was created.
* **DomainIdentifier**: string (Required, WriteOnly): The ID of the Amazon DataZone domain in which this project is created.
* **DomainUnitId**: string: The ID of the domain unit.
* **GlossaryTerms**: string[]: The glossary terms that can be used in this Amazon DataZone project.
* **Id**: string (ReadOnly, Identifier): The ID of the Amazon DataZone project.
* **LastUpdatedAt**: string (ReadOnly): The timestamp of when the project was last updated.
* **MembershipAssignments**: [ProjectMembershipAssignment](#projectmembershipassignment)[] (WriteOnly): The project membership assignments.
* **Name**: string (Required): The name of the Amazon DataZone project.
* **ProjectCategory**: string: The project category.
* **ProjectExecutionRole**: string (WriteOnly): The project execution role ARN.
* **ProjectProfileId**: string (WriteOnly): The project profile ID.
* **ProjectProfileVersion**: string (WriteOnly): The project profile version to which the project should be updated. You can only specify the following string for this parameter: latest.
* **ProjectStatus**: string (ReadOnly): The status of the project.
* **ResourceTags**: [ResourceTag](#resourcetag)[]: The resource tags of the project.
* **UserParameters**: [EnvironmentConfigurationUserParameter](#environmentconfigurationuserparameter)[] (WriteOnly): The user parameters of the project.

## AWS.DataZone/SubscriptionTargetProperties
### Properties
* **ApplicableAssetTypes**: string[] (Required): The asset types that can be included in the subscription target.
* **AuthorizedPrincipals**: string[] (Required): The authorized principals of the subscription target.
* **CreatedAt**: string (ReadOnly): The timestamp of when the subscription target was created.
* **CreatedBy**: string (ReadOnly): The Amazon DataZone user who created the subscription target.
* **DomainId**: string (ReadOnly, Identifier): The ID of the Amazon DataZone domain in which subscription target is created.
* **DomainIdentifier**: string (Required, WriteOnly): The ID of the Amazon DataZone domain in which subscription target would be created.
* **EnvironmentId**: string (ReadOnly, Identifier): The ID of the environment in which subscription target is created.
* **EnvironmentIdentifier**: string (Required, WriteOnly): The ID of the environment in which subscription target would be created.
* **Id**: string (ReadOnly, Identifier): The ID of the subscription target.
* **ManageAccessRole**: string: The manage access role that is used to create the subscription target.
* **Name**: string (Required): The name of the subscription target.
* **ProjectId**: string (ReadOnly): The identifier of the project specified in the subscription target.
* **Provider**: string: The provider of the subscription target.
* **SubscriptionTargetConfig**: [SubscriptionTargetForm](#subscriptiontargetform)[] (Required): The configuration of the subscription target.
* **Type**: string (Required): The type of the subscription target.
* **UpdatedAt**: string (ReadOnly): The timestamp of when the subscription target was updated.
* **UpdatedBy**: string (ReadOnly): The Amazon DataZone user who updated the subscription target.

## AWS.DataZone/UserProfileProperties
### Properties
* **Details**: [UserProfileDetails](#userprofiledetails) (ReadOnly)
* **DomainId**: string (ReadOnly, Identifier): The identifier of the Amazon DataZone domain in which the user profile is created.
* **DomainIdentifier**: string (Required, WriteOnly): The identifier of the Amazon DataZone domain in which the user profile would be created.
* **Id**: string (ReadOnly, Identifier): The ID of the Amazon DataZone user profile.
* **SessionName**: string (WriteOnly): The session name of the user profile.
* **Status**: string
* **Type**: string (ReadOnly)
* **UserIdentifier**: string (Required, WriteOnly): The ID of the user.
* **UserType**: string (WriteOnly)

## AwsAccount
### Properties
* **AwsAccountId**: string (Required)

## AwsConsoleLinkParameters
### Properties
* **Uri**: string

## AwsLocation
### Properties
* **AccessRole**: string
* **AwsAccountId**: string
* **AwsRegion**: string
* **IamConnectionId**: string

## ConnectionConfiguration
### Properties
* **Classification**: string: The classification of the connection configuration.
* **Properties**: [PropertyMap](#propertymap)

## ConnectionPropertiesInput
### Properties

## DataSource_RedshiftStorage
### Properties

## DataSourceConfigurationInput
### Properties
* **GlueRunConfiguration**: [GlueRunConfigurationInput](#gluerunconfigurationinput)
* **RedshiftRunConfiguration**: [RedshiftRunConfigurationInput](#redshiftrunconfigurationinput)
* **SageMakerRunConfiguration**: [SageMakerRunConfigurationInput](#sagemakerrunconfigurationinput)

## EnvironmentBlueprintConfiguration_GlobalParameters
### Properties

## EnvironmentConfiguration
### Properties
* **AwsAccount**: [AwsAccount](#awsaccount)
* **AwsRegion**: [Region](#region) (Required)
* **ConfigurationParameters**: [EnvironmentConfigurationParametersDetails](#environmentconfigurationparametersdetails)
* **DeploymentMode**: string
* **DeploymentOrder**: int
* **Description**: string
* **EnvironmentBlueprintId**: string (Required)
* **EnvironmentConfigurationId**: string
* **Name**: string (Required)

## EnvironmentConfigurationParameter
### Properties
* **IsEditable**: bool
* **Name**: string
* **Value**: string

## EnvironmentConfigurationParametersDetails
### Properties
* **ParameterOverrides**: [EnvironmentConfigurationParameter](#environmentconfigurationparameter)[]
* **ResolvedParameters**: [EnvironmentConfigurationParameter](#environmentconfigurationparameter)[]
* **SsmPath**: string

## EnvironmentConfigurationUserParameter
### Properties
* **EnvironmentConfigurationName**: string
* **EnvironmentId**: string
* **EnvironmentParameters**: [EnvironmentParameter](#environmentparameter)[]

## EnvironmentParameter
### Properties
* **Name**: string: The name of an environment parameter.
* **Value**: string: The value of an environment parameter.

## EnvironmentParameter
### Properties
* **Name**: string: The name of an environment profile parameter.
* **Value**: string: The value of an environment profile parameter.

## EnvironmentParameter
### Properties
* **Name**: string
* **Value**: string

## FilterExpression
### Properties
* **Expression**: string (Required)
* **Type**: string (Required)

## FormInput
### Properties
* **Content**: string: The content of the metadata form.
* **FormName**: string (Required): The name of the metadata form.
* **TypeIdentifier**: string: The ID of the metadata form type.
* **TypeRevision**: string: The revision of the metadata form type.

## FormType_Model
### Properties
* **Smithy**: string

## GlueRunConfigurationInput
### Properties
* **AutoImportDataQualityResult**: bool: Specifies whether to automatically import data quality metrics as part of the data source run.
* **CatalogName**: string: The catalog name in the AWS Glue run configuration.
* **DataAccessRole**: string: The data access role included in the configuration details of the AWS Glue data source.
* **RelationalFilterConfigurations**: [RelationalFilterConfiguration](#relationalfilterconfiguration)[] (Required): The relational filter configurations included in the configuration details of the AWS Glue data source.

## Member
### Properties
* **GroupIdentifier**: string
* **UserIdentifier**: string

## Member
### Properties

## Parameter
### Properties

## ProjectMembershipAssignment
### Properties
* **Designation**: string (Required)
* **Member**: [Member](#member) (Required)

## PropertyMap
### Properties

## ProvisioningConfiguration
### Properties

## RecommendationConfiguration
### Properties
* **EnableBusinessNameGeneration**: bool: Specifies whether automatic business name generation is to be enabled or not as part of the recommendation configuration.

## RedshiftCredentialConfiguration
### Properties
* **SecretManagerArn**: string (Required): The ARN of a secret manager for an Amazon Redshift cluster.

## RedshiftRunConfigurationInput
### Properties
* **DataAccessRole**: string: The data access role included in the configuration details of the Amazon Redshift data source.
* **RedshiftCredentialConfiguration**: [RedshiftCredentialConfiguration](#redshiftcredentialconfiguration): The details of the credentials required to access an Amazon Redshift cluster.
* **RedshiftStorage**: [DataSource_RedshiftStorage](#datasourceredshiftstorage): The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run.
* **RelationalFilterConfigurations**: [RelationalFilterConfiguration](#relationalfilterconfiguration)[] (Required)

## Region
### Properties
* **RegionName**: string (Required)

## RegionalParameter
### Properties
* **Parameters**: [Parameter](#parameter)
* **Region**: string

## RelationalFilterConfiguration
### Properties
* **DatabaseName**: string (Required): The database name specified in the relational filter configuration for the data source.
* **FilterExpressions**: [FilterExpression](#filterexpression)[]: The filter expressions specified in the relational filter configuration for the data source.
* **SchemaName**: string: The schema name specified in the relational filter configuration for the data source.

## ResourceTag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## ResourceTagParameter
### Properties
* **IsValueEditable**: bool (Required)
* **Key**: string (Required)
* **Value**: string (Required)

## SageMakerRunConfigurationInput
### Properties
* **TrackingAssets**: [TrackingAssets](#trackingassets) (Required): The tracking assets of the Amazon SageMaker run.

## ScheduleConfiguration
### Properties
* **Schedule**: string: The schedule of the data source runs.
* **Timezone**: string: The timezone of the data source run.

## SingleSignOn
### Properties
* **IdcInstanceArn**: string
* **Type**: string
* **UserAssignment**: string

## SubscriptionTargetForm
### Properties
* **Content**: string (Required): The content of the subscription target configuration.
* **FormName**: string (Required): The form name included in the subscription target configuration.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## TrackingAssets
### Properties

## UserProfileDetails
### Properties

