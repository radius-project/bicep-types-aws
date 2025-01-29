# AWS.GuardDuty @ default

## Resource AWS.GuardDuty/Detector@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GuardDuty/DetectorProperties](#awsguarddutydetectorproperties) (Required, Identifier): properties of the resource

## Resource AWS.GuardDuty/Filter@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GuardDuty/FilterProperties](#awsguarddutyfilterproperties) (Required, Identifier): properties of the resource

## Resource AWS.GuardDuty/IPSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GuardDuty/IPSetProperties](#awsguarddutyipsetproperties) (Required, Identifier): properties of the resource

## Resource AWS.GuardDuty/MalwareProtectionPlan@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GuardDuty/MalwareProtectionPlanProperties](#awsguarddutymalwareprotectionplanproperties) (Required, Identifier): properties of the resource

## Resource AWS.GuardDuty/Member@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GuardDuty/MemberProperties](#awsguarddutymemberproperties) (Required, Identifier): properties of the resource

## Resource AWS.GuardDuty/PublishingDestination@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GuardDuty/PublishingDestinationProperties](#awsguarddutypublishingdestinationproperties) (Required, Identifier): properties of the resource

## Resource AWS.GuardDuty/ThreatIntelSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GuardDuty/ThreatIntelSetProperties](#awsguarddutythreatintelsetproperties) (Required, Identifier): properties of the resource

## AWS.GuardDuty/DetectorProperties
### Properties
* **DataSources**: [CFNDataSourceConfigurations](#cfndatasourceconfigurations)
* **Enable**: bool (Required)
* **Features**: [CFNFeatureConfiguration](#cfnfeatureconfiguration)[]
* **FindingPublishingFrequency**: string
* **Id**: string (ReadOnly, Identifier)
* **Tags**: [TagItem](#tagitem)[]

## AWS.GuardDuty/FilterProperties
### Properties
* **Action**: string
* **Description**: string
* **DetectorId**: string (Required, Identifier)
* **FindingCriteria**: [FindingCriteria](#findingcriteria) (Required)
* **Name**: string (Required, Identifier)
* **Rank**: int
* **Tags**: [TagItem](#tagitem)[]

## AWS.GuardDuty/IPSetProperties
### Properties
* **Activate**: bool (WriteOnly)
* **DetectorId**: string (Identifier)
* **Format**: string (Required)
* **Id**: string (ReadOnly, Identifier)
* **Location**: string (Required)
* **Name**: string
* **Tags**: [TagItem](#tagitem)[]

## AWS.GuardDuty/MalwareProtectionPlanProperties
### Properties
* **Actions**: [CFNActions](#cfnactions): Specifies the action that is to be applied to the Malware Protection plan resource.
* **Arn**: string (ReadOnly): Amazon Resource Name (ARN) of the protected resource.
* **CreatedAt**: string (ReadOnly): The timestamp when the Malware Protection plan resource was created.
* **MalwareProtectionPlanId**: string (ReadOnly, Identifier): A unique identifier associated with Malware Protection plan resource.
* **ProtectedResource**: [CFNProtectedResource](#cfnprotectedresource) (Required): Information about the protected resource. Presently, S3Bucket is the only supported protected resource.
* **Role**: string (Required): IAM role that includes the permissions required to scan and (optionally) add tags to the associated protected resource.
* **Status**: string (ReadOnly): Status of the Malware Protection plan resource.
* **StatusReasons**: [CFNStatusReasons](#cfnstatusreasons)[] (ReadOnly): Status details associated with the Malware Protection plan resource status.
* **Tags**: [TagItem](#tagitem)[]: The tags to be added to the created Malware Protection plan resource. Each tag consists of a key and an optional value, both of which you need to specify.

## AWS.GuardDuty/MemberProperties
### Properties
* **DetectorId**: string (Identifier)
* **DisableEmailNotification**: bool (WriteOnly)
* **Email**: string (Required)
* **MemberId**: string (Identifier)
* **Message**: string (WriteOnly)
* **Status**: string

## AWS.GuardDuty/PublishingDestinationProperties
### Properties
* **DestinationProperties**: [PublishingDestination_CFNDestinationProperties](#publishingdestinationcfndestinationproperties) (Required)
* **DestinationType**: string (Required): The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported.
* **DetectorId**: string (Required, Identifier): The ID of the GuardDuty detector associated with the publishing destination.
* **Id**: string (ReadOnly, Identifier): The ID of the publishing destination.
* **PublishingFailureStartTimestamp**: string (ReadOnly): The time, in epoch millisecond format, at which GuardDuty was first unable to publish findings to the destination.
* **Status**: string (ReadOnly): The status of the publishing destination.
* **Tags**: [TagItem](#tagitem)[]

## AWS.GuardDuty/ThreatIntelSetProperties
### Properties
* **Activate**: bool (WriteOnly)
* **DetectorId**: string (Identifier)
* **Format**: string (Required)
* **Id**: string (ReadOnly, Identifier)
* **Location**: string (Required)
* **Name**: string
* **Tags**: [TagItem](#tagitem)[]

## CFNActions
### Properties
* **Tagging**: [CFNTagging](#cfntagging): Contains information about tagging status of the Malware Protection plan resource.

## CFNDataSourceConfigurations
### Properties
* **Kubernetes**: [CFNKubernetesConfiguration](#cfnkubernetesconfiguration)
* **MalwareProtection**: [CFNMalwareProtectionConfiguration](#cfnmalwareprotectionconfiguration)
* **S3Logs**: [CFNS3LogsConfiguration](#cfns3logsconfiguration)

## CFNFeatureAdditionalConfiguration
### Properties
* **Name**: string
* **Status**: string

## CFNFeatureConfiguration
### Properties
* **AdditionalConfiguration**: [CFNFeatureAdditionalConfiguration](#cfnfeatureadditionalconfiguration)[]
* **Name**: string (Required)
* **Status**: string (Required)

## CFNKubernetesAuditLogsConfiguration
### Properties
* **Enable**: bool (Required)

## CFNKubernetesConfiguration
### Properties
* **AuditLogs**: [CFNKubernetesAuditLogsConfiguration](#cfnkubernetesauditlogsconfiguration) (Required)

## CFNMalwareProtectionConfiguration
### Properties
* **ScanEc2InstanceWithFindings**: [CFNScanEc2InstanceWithFindingsConfiguration](#cfnscanec2instancewithfindingsconfiguration)

## CFNProtectedResource
### Properties
* **S3Bucket**: [MalwareProtectionPlan_S3Bucket](#malwareprotectionplans3bucket) (Required): Information about the protected S3 bucket resource.

## CFNS3LogsConfiguration
### Properties
* **Enable**: bool (Required)

## CFNScanEc2InstanceWithFindingsConfiguration
### Properties
* **EbsVolumes**: bool

## CFNStatusReasons
### Properties
* **Code**: string: The status code of the Malware Protection plan.
* **Message**: string: Issue message that specifies the reason.

## CFNTagging
### Properties
* **Status**: string: Indicates whether or not you chose GuardDuty to add a predefined tag to the scanned S3 object.

## Filter_Criterion
### Properties

## FindingCriteria
### Properties
* **Criterion**: [Filter_Criterion](#filtercriterion)

## MalwareProtectionPlan_S3Bucket
### Properties
* **BucketName**: string: Name of the S3 bucket.
* **ObjectPrefixes**: string[]: Information about the specified object prefixes. The S3 object will be scanned only if it belongs to any of the specified object prefixes.

## PublishingDestination_CFNDestinationProperties
### Properties
* **DestinationArn**: string: The ARN of the resource to publish to.
* **KmsKeyArn**: string: The ARN of the KMS key to use for encryption.

## TagItem
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TagItem
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TagItem
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TagItem
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TagItem
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TagItem
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

