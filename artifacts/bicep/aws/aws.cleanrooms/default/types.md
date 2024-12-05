# AWS.CleanRooms @ default

## Resource AWS.CleanRooms/AnalysisTemplate@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRooms/AnalysisTemplateProperties](#awscleanroomsanalysistemplateproperties) (Required, Identifier): properties of the resource

## Resource AWS.CleanRooms/Collaboration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRooms/CollaborationProperties](#awscleanroomscollaborationproperties) (Required, Identifier): properties of the resource

## Resource AWS.CleanRooms/ConfiguredTable@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRooms/ConfiguredTableProperties](#awscleanroomsconfiguredtableproperties) (Required, Identifier): properties of the resource

## Resource AWS.CleanRooms/ConfiguredTableAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRooms/ConfiguredTableAssociationProperties](#awscleanroomsconfiguredtableassociationproperties) (Required, Identifier): properties of the resource

## Resource AWS.CleanRooms/IdMappingTable@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRooms/IdMappingTableProperties](#awscleanroomsidmappingtableproperties) (Required, Identifier): properties of the resource

## Resource AWS.CleanRooms/IdNamespaceAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRooms/IdNamespaceAssociationProperties](#awscleanroomsidnamespaceassociationproperties) (Required, Identifier): properties of the resource

## Resource AWS.CleanRooms/Membership@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRooms/MembershipProperties](#awscleanroomsmembershipproperties) (Required, Identifier): properties of the resource

## Resource AWS.CleanRooms/PrivacyBudgetTemplate@default
* **Valid Scope(s)**: Unknown
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
* **Text**: string (Required)

## AWS.CleanRooms/AnalysisTemplateProperties
### Properties
* **AnalysisParameters**: [AnalysisParameter](#analysisparameter)[]: The member who can query can provide this placeholder for a literal data value in an analysis template
* **AnalysisTemplateIdentifier**: string (ReadOnly, Identifier)
* **Arn**: string (ReadOnly)
* **CollaborationArn**: string (ReadOnly)
* **CollaborationIdentifier**: string (ReadOnly)
* **Description**: string
* **Format**: string (Required)
* **MembershipArn**: string (ReadOnly)
* **MembershipIdentifier**: string (Required, Identifier)
* **Name**: string (Required)
* **Schema**: [AnalysisSchema](#analysisschema) (ReadOnly)
* **Source**: [AnalysisSource](#analysissource) (Required)
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this cleanrooms analysis template.

## AWS.CleanRooms/CollaborationProperties
### Properties
* **AnalyticsEngine**: string
* **Arn**: string (ReadOnly)
* **CollaborationIdentifier**: string (ReadOnly, Identifier)
* **CreatorDisplayName**: string (Required)
* **CreatorMemberAbilities**: string[] (Required)
* **CreatorPaymentConfiguration**: [PaymentConfiguration](#paymentconfiguration)
* **DataEncryptionMetadata**: [DataEncryptionMetadata](#dataencryptionmetadata)
* **Description**: string (Required)
* **Members**: [MemberSpecification](#memberspecification)[] (Required)
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

## AWS.CleanRooms/MembershipProperties
### Properties
* **Arn**: string (ReadOnly)
* **CollaborationArn**: string (ReadOnly)
* **CollaborationCreatorAccountId**: string (ReadOnly)
* **CollaborationIdentifier**: string (Required)
* **DefaultResultConfiguration**: [MembershipProtectedQueryResultConfiguration](#membershipprotectedqueryresultconfiguration)
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

## GlueTableReference
### Properties
* **DatabaseName**: string (Required)
* **TableName**: string (Required)

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

## MembershipPaymentConfiguration
### Properties
* **QueryCompute**: [MembershipQueryComputePaymentConfig](#membershipquerycomputepaymentconfig) (Required)

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

## MemberSpecification
### Properties
* **AccountId**: string (Required)
* **DisplayName**: string (Required)
* **MemberAbilities**: string[] (Required)
* **PaymentConfiguration**: [PaymentConfiguration](#paymentconfiguration)

## PaymentConfiguration
### Properties
* **QueryCompute**: [QueryComputePaymentConfig](#querycomputepaymentconfig) (Required)

## PrivacyBudgetTemplate_Parameters
### Properties
* **Epsilon**: int (Required)
* **UsersNoisePerQuery**: int (Required)

## ProtectedQueryS3OutputConfiguration
### Properties
* **Bucket**: string (Required)
* **KeyPrefix**: string
* **ResultFormat**: string (Required)
* **SingleFileOutput**: bool

## QueryComputePaymentConfig
### Properties
* **IsResponsible**: bool (Required)

## TableReference
### Properties
* **Glue**: [GlueTableReference](#gluetablereference) (Required)

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

