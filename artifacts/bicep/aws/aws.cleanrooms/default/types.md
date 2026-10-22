# AWS.CleanRooms @ default

## Resource AWS.CleanRooms/AnalysisTemplate@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRooms/AnalysisTemplateProperties](#awscleanroomsanalysistemplateproperties) (Required, Identifier): properties of the resource

## Resource AWS.CleanRooms/Collaboration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRooms/CollaborationProperties](#awscleanroomscollaborationproperties) (Required, Identifier): properties of the resource

## Resource AWS.CleanRooms/ConfiguredTable@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRooms/ConfiguredTableProperties](#awscleanroomsconfiguredtableproperties) (Required, Identifier): properties of the resource

## Resource AWS.CleanRooms/ConfiguredTableAssociation@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRooms/ConfiguredTableAssociationProperties](#awscleanroomsconfiguredtableassociationproperties) (Required, Identifier): properties of the resource

## Resource AWS.CleanRooms/IdMappingTable@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRooms/IdMappingTableProperties](#awscleanroomsidmappingtableproperties) (Required, Identifier): properties of the resource

## Resource AWS.CleanRooms/IdNamespaceAssociation@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRooms/IdNamespaceAssociationProperties](#awscleanroomsidnamespaceassociationproperties) (Required, Identifier): properties of the resource

## Resource AWS.CleanRooms/IntermediateTable@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRooms/IntermediateTableProperties](#awscleanroomsintermediatetableproperties) (Required, Identifier): properties of the resource

## Resource AWS.CleanRooms/Membership@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRooms/MembershipProperties](#awscleanroomsmembershipproperties) (Required, Identifier): properties of the resource

## Resource AWS.CleanRooms/PrivacyBudgetTemplate@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRooms/PrivacyBudgetTemplateProperties](#awscleanroomsprivacybudgettemplateproperties) (Required, Identifier): properties of the resource

## AnalysisParameter
### Properties
* **DefaultValue**: string
* **Name**: string (Required)
* **Type**: string (Required)

## AnalysisRule
### Properties
* **Policy**: [ConfiguredTableAnalysisRulePolicy](#configuredtableanalysisrulepolicy) (Required)
* **Type**: string (Required)

## AnalysisSchema
### Properties
* **ReferencedTables**: string[] (Required)

## AnalysisSource
### Properties

## AnalysisSourceMetadata
### Properties

## AWS.CleanRooms/AnalysisTemplateProperties
### Properties
* **AnalysisParameters**: [AnalysisParameter](#analysisparameter)[]: The member who can query can provide this placeholder for a literal data value in an analysis template
* **AnalysisTemplateIdentifier**: string (ReadOnly, Identifier)
* **Arn**: string (ReadOnly)
* **CollaborationArn**: string (ReadOnly)
* **CollaborationIdentifier**: string (ReadOnly)
* **Description**: string
* **ErrorMessageConfiguration**: [ErrorMessageConfiguration](#errormessageconfiguration)
* **Format**: string (Required)
* **MembershipArn**: string (ReadOnly)
* **MembershipIdentifier**: string (Required, Identifier)
* **Name**: string (Required)
* **Schema**: [AnalysisSchema](#analysisschema)
* **Source**: [AnalysisSource](#analysissource) (Required)
* **SourceMetadata**: [AnalysisSourceMetadata](#analysissourcemetadata)
* **SyntheticDataParameters**: [SyntheticDataParameters](#syntheticdataparameters)
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this cleanrooms analysis template.

## AWS.CleanRooms/CollaborationProperties
### Properties
* **AllowedResultRegions**: string[]
* **AnalyticsEngine**: string
* **Arn**: string (ReadOnly)
* **AutoApprovedChangeTypes**: string[]
* **CollaborationIdentifier**: string (ReadOnly, Identifier)
* **CreatorDisplayName**: string (Required)
* **CreatorMemberAbilities**: string[]
* **CreatorMLMemberAbilities**: [MLMemberAbilities](#mlmemberabilities)
* **CreatorPaymentConfiguration**: [PaymentConfiguration](#paymentconfiguration)
* **DataEncryptionMetadata**: [DataEncryptionMetadata](#dataencryptionmetadata)
* **Description**: string (Required)
* **IsMetricsEnabled**: bool
* **JobLogStatus**: string
* **Members**: [MemberSpecification](#memberspecification)[]
* **Name**: string (Required)
* **QueryLogStatus**: string (Required)
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.

## AWS.CleanRooms/ConfiguredTableAssociationProperties
### Properties
* **Arn**: string (ReadOnly)
* **ConfiguredTableAssociationAnalysisRules**: [ConfiguredTableAssociationAnalysisRule](#configuredtableassociationanalysisrule)[]
* **ConfiguredTableAssociationIdentifier**: string (ReadOnly, Identifier)
* **ConfiguredTableIdentifier**: string (Required)
* **Description**: string
* **MembershipIdentifier**: string (Required, Identifier)
* **Name**: string (Required)
* **RoleArn**: string (Required)
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.

## AWS.CleanRooms/ConfiguredTableProperties
### Properties
* **AllowedColumns**: string[] (Required)
* **AnalysisMethod**: string (Required)
* **AnalysisRules**: [AnalysisRule](#analysisrule)[]
* **Arn**: string (ReadOnly)
* **ConfiguredTableIdentifier**: string (ReadOnly, Identifier)
* **Description**: string
* **Name**: string (Required)
* **SelectedAnalysisMethods**: string[]
* **TableReference**: [TableReference](#tablereference) (Required)
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.

## AWS.CleanRooms/IdMappingTableProperties
### Properties
* **Arn**: string (ReadOnly)
* **CollaborationArn**: string (ReadOnly)
* **CollaborationIdentifier**: string (ReadOnly)
* **Description**: string
* **IdMappingTableIdentifier**: string (ReadOnly, Identifier)
* **InputReferenceConfig**: [IdMappingTableInputReferenceConfig](#idmappingtableinputreferenceconfig) (Required)
* **InputReferenceProperties**: [IdMappingTableInputReferenceProperties](#idmappingtableinputreferenceproperties) (ReadOnly)
* **KmsKeyArn**: string
* **MembershipArn**: string (ReadOnly)
* **MembershipIdentifier**: string (Required, Identifier)
* **Name**: string (Required)
* **Tags**: [Tag](#tag)[]

## AWS.CleanRooms/IdNamespaceAssociationProperties
### Properties
* **Arn**: string (ReadOnly)
* **CollaborationArn**: string (ReadOnly)
* **CollaborationIdentifier**: string (ReadOnly)
* **Description**: string
* **IdMappingConfig**: [IdMappingConfig](#idmappingconfig)
* **IdNamespaceAssociationIdentifier**: string (ReadOnly, Identifier)
* **InputReferenceConfig**: [IdNamespaceAssociationInputReferenceConfig](#idnamespaceassociationinputreferenceconfig) (Required)
* **InputReferenceProperties**: [IdNamespaceAssociationInputReferenceProperties](#idnamespaceassociationinputreferenceproperties) (ReadOnly)
* **MembershipArn**: string (ReadOnly)
* **MembershipIdentifier**: string (Required, Identifier)
* **Name**: string (Required)
* **Tags**: [Tag](#tag)[]

## AWS.CleanRooms/IntermediateTableProperties
### Properties
* **AnalysisRules**: [IntermediateTableAnalysisRule](#intermediatetableanalysisrule)[]
* **Arn**: string (ReadOnly)
* **CollaborationArn**: string (ReadOnly)
* **CollaborationIdentifier**: string (ReadOnly)
* **Description**: string
* **IntermediateTableIdentifier**: string (ReadOnly, Identifier)
* **KmsKeyArn**: string
* **MembershipArn**: string (ReadOnly)
* **MembershipIdentifier**: string (Required, Identifier)
* **Name**: string (Required)
* **PopulationAnalysisConfiguration**: [PopulationAnalysisConfiguration](#populationanalysisconfiguration) (Required)
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]

## AWS.CleanRooms/MembershipProperties
### Properties
* **Arn**: string (ReadOnly)
* **CollaborationArn**: string (ReadOnly)
* **CollaborationCreatorAccountId**: string (ReadOnly)
* **CollaborationIdentifier**: string (Required)
* **DefaultJobResultConfiguration**: [MembershipProtectedJobResultConfiguration](#membershipprotectedjobresultconfiguration)
* **DefaultResultConfiguration**: [MembershipProtectedQueryResultConfiguration](#membershipprotectedqueryresultconfiguration)
* **IsMetricsEnabled**: bool
* **JobLogStatus**: string
* **MembershipIdentifier**: string (ReadOnly, Identifier)
* **PaymentConfiguration**: [MembershipPaymentConfiguration](#membershippaymentconfiguration)
* **QueryLogStatus**: string (Required)
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this cleanrooms membership.

## AWS.CleanRooms/PrivacyBudgetTemplateProperties
### Properties
* **Arn**: string (ReadOnly)
* **AutoRefresh**: string (Required)
* **CollaborationArn**: string (ReadOnly)
* **CollaborationIdentifier**: string (ReadOnly)
* **MembershipArn**: string (ReadOnly)
* **MembershipIdentifier**: string (Required, Identifier)
* **Parameters**: [PrivacyBudgetTemplate_Parameters](#privacybudgettemplateparameters) (Required)
* **PrivacyBudgetTemplateIdentifier**: string (ReadOnly, Identifier)
* **PrivacyBudgetType**: string (Required)
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this cleanrooms privacy budget template.

## BudgetParameter
### Properties
* **AutoRefresh**: string
* **Budget**: int (Required)
* **Type**: string (Required)

## ConfiguredTable_ConfiguredTableAnalysisRulePolicyV1
### Properties

## ConfiguredTableAnalysisRulePolicy
### Properties
* **V1**: [ConfiguredTable_ConfiguredTableAnalysisRulePolicyV1](#configuredtableconfiguredtableanalysisrulepolicyv1) (Required)

## ConfiguredTableAssociation_ConfiguredTableAssociationAnalysisRulePolicyV1
### Properties

## ConfiguredTableAssociationAnalysisRule
### Properties
* **Policy**: [ConfiguredTableAssociationAnalysisRulePolicy](#configuredtableassociationanalysisrulepolicy) (Required)
* **Type**: string (Required)

## ConfiguredTableAssociationAnalysisRulePolicy
### Properties
* **V1**: [ConfiguredTableAssociation_ConfiguredTableAssociationAnalysisRulePolicyV1](#configuredtableassociationconfiguredtableassociationanalysisrulepolicyv1) (Required)

## DataEncryptionMetadata
### Properties
* **AllowCleartext**: bool (Required)
* **AllowDuplicates**: bool (Required)
* **AllowJoinsOnColumnsWithDifferentNames**: bool (Required)
* **PreserveNulls**: bool (Required)

## Document
### Properties

## ErrorMessageConfiguration
### Properties
* **Type**: string (Required)

## IdMappingConfig
### Properties
* **AllowUseAsDimensionColumn**: bool (Required)

## IdMappingTableInputReferenceConfig
### Properties
* **InputReferenceArn**: string (Required)
* **ManageResourcePolicies**: bool (Required)

## IdMappingTableInputReferenceProperties
### Properties
* **IdMappingTableInputSource**: [IdMappingTableInputSource](#idmappingtableinputsource)[] (Required)

## IdMappingTableInputSource
### Properties
* **IdNamespaceAssociationId**: string (Required)
* **Type**: string (Required)

## IdNamespaceAssociationInputReferenceConfig
### Properties
* **InputReferenceArn**: string (Required)
* **ManageResourcePolicies**: bool (Required)

## IdNamespaceAssociationInputReferenceProperties
### Properties
* **IdMappingWorkflowsSupported**: [Document](#document)[]
* **IdNamespaceType**: string

## IntermediateTable_IntermediateTableAnalysisRulePolicyV1
### Properties

## IntermediateTableAnalysisRule
### Properties
* **Policy**: [IntermediateTableAnalysisRulePolicy](#intermediatetableanalysisrulepolicy) (Required)
* **Type**: string (Required)

## IntermediateTableAnalysisRulePolicy
### Properties
* **V1**: [IntermediateTable_IntermediateTableAnalysisRulePolicyV1](#intermediatetableintermediatetableanalysisrulepolicyv1) (Required)

## JobComputePaymentConfig
### Properties
* **IsResponsible**: bool (Required)

## MembershipJobComputePaymentConfig
### Properties
* **IsResponsible**: bool (Required)

## MembershipMLPaymentConfig
### Properties
* **ModelInference**: [MembershipModelInferencePaymentConfig](#membershipmodelinferencepaymentconfig)
* **ModelTraining**: [MembershipModelTrainingPaymentConfig](#membershipmodeltrainingpaymentconfig)
* **SyntheticDataGeneration**: [MembershipSyntheticDataGenerationPaymentConfig](#membershipsyntheticdatagenerationpaymentconfig)

## MembershipModelInferencePaymentConfig
### Properties
* **IsResponsible**: bool (Required)

## MembershipModelTrainingPaymentConfig
### Properties
* **IsResponsible**: bool (Required)

## MembershipPaymentConfiguration
### Properties
* **JobCompute**: [MembershipJobComputePaymentConfig](#membershipjobcomputepaymentconfig)
* **MachineLearning**: [MembershipMLPaymentConfig](#membershipmlpaymentconfig)
* **QueryCompute**: [MembershipQueryComputePaymentConfig](#membershipquerycomputepaymentconfig) (Required)

## MembershipProtectedJobOutputConfiguration
### Properties
* **S3**: [ProtectedJobS3OutputConfigurationInput](#protectedjobs3outputconfigurationinput) (Required)

## MembershipProtectedJobResultConfiguration
### Properties
* **OutputConfiguration**: [MembershipProtectedJobOutputConfiguration](#membershipprotectedjoboutputconfiguration) (Required)
* **RoleArn**: string (Required)

## MembershipProtectedQueryOutputConfiguration
### Properties
* **S3**: [ProtectedQueryS3OutputConfiguration](#protectedquerys3outputconfiguration) (Required)

## MembershipProtectedQueryResultConfiguration
### Properties
* **OutputConfiguration**: [MembershipProtectedQueryOutputConfiguration](#membershipprotectedqueryoutputconfiguration) (Required)
* **RoleArn**: string

## MembershipQueryComputePaymentConfig
### Properties
* **IsResponsible**: bool (Required)

## MembershipSyntheticDataGenerationPaymentConfig
### Properties
* **IsResponsible**: bool (Required)

## MemberSpecification
### Properties
* **AccountId**: string (Required)
* **DisplayName**: string (Required)
* **MemberAbilities**: string[]
* **MLMemberAbilities**: [MLMemberAbilities](#mlmemberabilities)
* **PaymentConfiguration**: [PaymentConfiguration](#paymentconfiguration)

## MLMemberAbilities
### Properties
* **CustomMLMemberAbilities**: string[] (Required)

## MLPaymentConfig
### Properties
* **ModelInference**: [ModelInferencePaymentConfig](#modelinferencepaymentconfig)
* **ModelTraining**: [ModelTrainingPaymentConfig](#modeltrainingpaymentconfig)
* **SyntheticDataGeneration**: [SyntheticDataGenerationPaymentConfig](#syntheticdatagenerationpaymentconfig)

## ModelInferencePaymentConfig
### Properties
* **IsResponsible**: bool (Required)

## ModelTrainingPaymentConfig
### Properties
* **IsResponsible**: bool (Required)

## PaymentConfiguration
### Properties
* **JobCompute**: [JobComputePaymentConfig](#jobcomputepaymentconfig)
* **MachineLearning**: [MLPaymentConfig](#mlpaymentconfig)
* **QueryCompute**: [QueryComputePaymentConfig](#querycomputepaymentconfig) (Required)

## PopulationAnalysisConfiguration
### Properties
* **SqlParameters**: [PopulationAnalysisSqlParameters](#populationanalysissqlparameters)

## PopulationAnalysisSqlParameters
### Properties
* **AnalysisTemplateArn**: string
* **QueryString**: string

## PrivacyBudgetTemplate_Parameters
### Properties
* **BudgetParameters**: [BudgetParameter](#budgetparameter)[]
* **Epsilon**: int
* **ResourceArn**: string
* **UsersNoisePerQuery**: int

## ProtectedJobS3OutputConfigurationInput
### Properties
* **Bucket**: string (Required)
* **KeyPrefix**: string

## ProtectedQueryS3OutputConfiguration
### Properties
* **Bucket**: string (Required)
* **KeyPrefix**: string
* **ResultFormat**: string (Required)
* **SingleFileOutput**: bool

## QueryComputePaymentConfig
### Properties
* **IsResponsible**: bool (Required)

## SyntheticDataGenerationPaymentConfig
### Properties
* **IsResponsible**: bool (Required)

## SyntheticDataParameters
### Properties

## TableReference
### Properties

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

