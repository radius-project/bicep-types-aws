# AWS.CleanRooms @ default

## Resource AWS.CleanRooms/AnalysisTemplate@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRooms/AnalysisTemplateProperties](#awscleanroomsanalysistemplateproperties) (Required): properties of the resource

## Resource AWS.CleanRooms/Collaboration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRooms/CollaborationProperties](#awscleanroomscollaborationproperties) (Required): properties of the resource

## Resource AWS.CleanRooms/ConfiguredTable@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRooms/ConfiguredTableProperties](#awscleanroomsconfiguredtableproperties) (Required): properties of the resource

## Resource AWS.CleanRooms/ConfiguredTableAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRooms/ConfiguredTableAssociationProperties](#awscleanroomsconfiguredtableassociationproperties) (Required): properties of the resource

## Resource AWS.CleanRooms/Membership@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRooms/MembershipProperties](#awscleanroomsmembershipproperties) (Required): properties of the resource

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

## AnalysisParameter
### Properties
* **DefaultValue**: string
* **Name**: string (Required)
* **Type**: string (Required)

## AnalysisSchema
### Properties
* **ReferencedTables**: string[] (Required)

## AnalysisSource
### Properties
* **Text**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.CleanRooms/CollaborationProperties
### Properties
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

## PaymentConfiguration
### Properties
* **QueryCompute**: [QueryComputePaymentConfig](#querycomputepaymentconfig) (Required)

## QueryComputePaymentConfig
### Properties
* **IsResponsible**: bool (Required)

## DataEncryptionMetadata
### Properties
* **AllowCleartext**: bool (Required)
* **AllowDuplicates**: bool (Required)
* **AllowJoinsOnColumnsWithDifferentNames**: bool (Required)
* **PreserveNulls**: bool (Required)

## MemberSpecification
### Properties
* **AccountId**: string (Required)
* **DisplayName**: string (Required)
* **MemberAbilities**: string[] (Required)
* **PaymentConfiguration**: [PaymentConfiguration](#paymentconfiguration)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

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

## AnalysisRule
### Properties
* **Policy**: [ConfiguredTableAnalysisRulePolicy](#configuredtableanalysisrulepolicy) (Required)
* **Type**: string (Required)

## ConfiguredTableAnalysisRulePolicy
### Properties
* **V1**: [ConfiguredTable_ConfiguredTableAnalysisRulePolicyV1](#configuredtableconfiguredtableanalysisrulepolicyv1) (Required)

## ConfiguredTable_ConfiguredTableAnalysisRulePolicyV1
### Properties

## TableReference
### Properties
* **Glue**: [GlueTableReference](#gluetablereference) (Required)

## GlueTableReference
### Properties
* **DatabaseName**: string (Required)
* **TableName**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.CleanRooms/ConfiguredTableAssociationProperties
### Properties
* **Arn**: string (ReadOnly)
* **ConfiguredTableAssociationIdentifier**: string (ReadOnly, Identifier)
* **ConfiguredTableIdentifier**: string (Required)
* **Description**: string
* **MembershipIdentifier**: string (Required, Identifier)
* **Name**: string (Required)
* **RoleArn**: string (Required)
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

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

## MembershipProtectedQueryResultConfiguration
### Properties
* **OutputConfiguration**: [MembershipProtectedQueryOutputConfiguration](#membershipprotectedqueryoutputconfiguration) (Required)
* **RoleArn**: string

## MembershipProtectedQueryOutputConfiguration
### Properties
* **S3**: [ProtectedQueryS3OutputConfiguration](#protectedquerys3outputconfiguration) (Required)

## ProtectedQueryS3OutputConfiguration
### Properties
* **Bucket**: string (Required)
* **KeyPrefix**: string
* **ResultFormat**: string (Required)

## MembershipPaymentConfiguration
### Properties
* **QueryCompute**: [MembershipQueryComputePaymentConfig](#membershipquerycomputepaymentconfig) (Required)

## MembershipQueryComputePaymentConfig
### Properties
* **IsResponsible**: bool (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

