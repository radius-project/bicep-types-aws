# AWS.GuardDuty @ default

## Resource AWS.GuardDuty/Detector@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GuardDuty/DetectorProperties](#awsguarddutydetectorproperties) (Required): properties of the resource

## Resource AWS.GuardDuty/IPSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GuardDuty/IPSetProperties](#awsguarddutyipsetproperties) (Required): properties of the resource

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

## CFNDataSourceConfigurations
### Properties
* **Kubernetes**: [CFNKubernetesConfiguration](#cfnkubernetesconfiguration)
* **MalwareProtection**: [CFNMalwareProtectionConfiguration](#cfnmalwareprotectionconfiguration)
* **S3Logs**: [CFNS3LogsConfiguration](#cfns3logsconfiguration)

## CFNKubernetesConfiguration
### Properties
* **AuditLogs**: [CFNKubernetesAuditLogsConfiguration](#cfnkubernetesauditlogsconfiguration) (Required)

## CFNKubernetesAuditLogsConfiguration
### Properties
* **Enable**: bool (Required)

## CFNMalwareProtectionConfiguration
### Properties
* **ScanEc2InstanceWithFindings**: [CFNScanEc2InstanceWithFindingsConfiguration](#cfnscanec2instancewithfindingsconfiguration)

## CFNScanEc2InstanceWithFindingsConfiguration
### Properties
* **EbsVolumes**: bool

## CFNS3LogsConfiguration
### Properties
* **Enable**: bool (Required)

## CFNFeatureConfiguration
### Properties
* **AdditionalConfiguration**: [CFNFeatureAdditionalConfiguration](#cfnfeatureadditionalconfiguration)[]
* **Name**: string (Required)
* **Status**: string (Required)

## CFNFeatureAdditionalConfiguration
### Properties
* **Name**: string
* **Status**: string

## TagItem
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.GuardDuty/IPSetProperties
### Properties
* **Activate**: bool (WriteOnly)
* **DetectorId**: string (Identifier)
* **Format**: string (Required)
* **Id**: string (ReadOnly, Identifier)
* **Location**: string (Required)
* **Name**: string (Required)
* **Tags**: [TagItem](#tagitem)[]

## TagItem
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.GuardDuty/ThreatIntelSetProperties
### Properties
* **Activate**: bool (WriteOnly)
* **DetectorId**: string (Identifier)
* **Format**: string (Required)
* **Id**: string (ReadOnly, Identifier)
* **Location**: string (Required)
* **Name**: string (Required)
* **Tags**: [TagItem](#tagitem)[]

## TagItem
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

