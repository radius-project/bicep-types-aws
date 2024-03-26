# AWS.GuardDuty @ default

## Resource AWS.GuardDuty/Detector@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GuardDuty/DetectorProperties](#awsguarddutydetectorproperties) (Required): properties of the resource

## Resource AWS.GuardDuty/Filter@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GuardDuty/FilterProperties](#awsguarddutyfilterproperties) (Required): properties of the resource

## Resource AWS.GuardDuty/IPSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GuardDuty/IPSetProperties](#awsguarddutyipsetproperties) (Required): properties of the resource

## Resource AWS.GuardDuty/Member@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GuardDuty/MemberProperties](#awsguarddutymemberproperties) (Required): properties of the resource

## Resource AWS.GuardDuty/ThreatIntelSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GuardDuty/ThreatIntelSetProperties](#awsguarddutythreatintelsetproperties) (Required): properties of the resource

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
* **DetectorId**: string (Identifier)
* **FindingCriteria**: [FindingCriteria](#findingcriteria) (Required)
* **Name**: string (Identifier)
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

## AWS.GuardDuty/MemberProperties
### Properties
* **DetectorId**: string (Identifier)
* **DisableEmailNotification**: bool (WriteOnly)
* **Email**: string (Required)
* **MemberId**: string (Identifier)
* **Message**: string (WriteOnly)
* **Status**: string

## AWS.GuardDuty/ThreatIntelSetProperties
### Properties
* **Activate**: bool (WriteOnly)
* **DetectorId**: string (Identifier)
* **Format**: string (Required)
* **Id**: string (ReadOnly, Identifier)
* **Location**: string (Required)
* **Name**: string
* **Tags**: [TagItem](#tagitem)[]

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

## CFNS3LogsConfiguration
### Properties
* **Enable**: bool (Required)

## CFNScanEc2InstanceWithFindingsConfiguration
### Properties
* **EbsVolumes**: bool

## Filter_Criterion
### Properties

## FindingCriteria
### Properties
* **Criterion**: [Filter_Criterion](#filtercriterion)

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

