# AWS.ApplicationInsights @ default

## Resource AWS.ApplicationInsights/Application@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.ApplicationInsights/ApplicationProperties](#awsapplicationinsightsapplicationproperties): properties of the resource

## AWS.ApplicationInsights/ApplicationProperties
### Properties
* **ApplicationARN**: string (ReadOnly): The ARN of the ApplicationInsights application.
* **AutoConfigurationEnabled**: bool: If set to true, application will be configured with recommended monitoring configuration.
* **ComponentMonitoringSettings**: [ComponentMonitoringSetting](#componentmonitoringsetting)[]: The monitoring settings of the components.
* **CustomComponents**: [CustomComponent](#customcomponent)[]: The custom grouped components.
* **CWEMonitorEnabled**: bool: Indicates whether Application Insights can listen to CloudWatch events for the application resources.
* **GroupingType**: string: The grouping type of the application
* **LogPatternSets**: [LogPatternSet](#logpatternset)[]: The log pattern sets.
* **OpsCenterEnabled**: bool: When set to true, creates opsItems for any problems detected on an application.
* **OpsItemSNSTopicArn**: string: The SNS topic provided to Application Insights that is associated to the created opsItem.
* **ResourceGroupName**: string: The name of the resource group.
* **Tags**: [Tag](#tag)[]: The tags of Application Insights application.

## ComponentMonitoringSetting
### Properties
* **ComponentARN**: string: The ARN of the compnonent.
* **ComponentConfigurationMode**: string: The component monitoring configuration mode.
* **ComponentName**: string: The name of the component.
* **CustomComponentConfiguration**: [ComponentConfiguration](#componentconfiguration): The monitoring configuration of the component.
* **DefaultOverwriteComponentConfiguration**: [ComponentConfiguration](#componentconfiguration): The overwritten settings on default component monitoring configuration.
* **Tier**: string: The tier of the application component.

## ComponentConfiguration
### Properties
* **ConfigurationDetails**: [ConfigurationDetails](#configurationdetails): The configuration settings
* **SubComponentTypeConfigurations**: [SubComponentTypeConfiguration](#subcomponenttypeconfiguration)[]: Sub component configurations of the component.

## ConfigurationDetails
### Properties
* **AlarmMetrics**: [AlarmMetric](#alarmmetric)[]: A list of metrics to monitor for the component.
* **Alarms**: [Alarm](#alarm)[]: A list of alarms to monitor for the component.
* **HAClusterPrometheusExporter**: [HAClusterPrometheusExporter](#haclusterprometheusexporter): The HA cluster Prometheus Exporter settings.
* **HANAPrometheusExporter**: [HANAPrometheusExporter](#hanaprometheusexporter): The HANA DB Prometheus Exporter settings.
* **JMXPrometheusExporter**: [JMXPrometheusExporter](#jmxprometheusexporter): The JMX Prometheus Exporter settings.
* **Logs**: [Log](#log)[]: A list of logs to monitor for the component.
* **WindowsEvents**: [WindowsEvent](#windowsevent)[]: A list of Windows Events to log.

## AlarmMetric
### Properties
* **AlarmMetricName**: string: The name of the metric to be monitored for the component.

## Alarm
### Properties
* **AlarmName**: string: The name of the CloudWatch alarm to be monitored for the component.
* **Severity**: string: Indicates the degree of outage when the alarm goes off.

## HAClusterPrometheusExporter
### Properties
* **PrometheusPort**: string: Prometheus exporter port.

## HANAPrometheusExporter
### Properties
* **AgreeToInstallHANADBClient**: bool: A flag which indicates agreeing to install SAP HANA DB client.
* **HANAPort**: string: The HANA DB port.
* **HANASecretName**: string: The secret name which manages the HANA DB credentials e.g. {
  "username": "<>",
  "password": "<>"
}.
* **HANASID**: string: HANA DB SID.
* **PrometheusPort**: string: Prometheus exporter port.

## JMXPrometheusExporter
### Properties
* **HostPort**: string: Java agent host port
* **JMXURL**: string: JMX service URL.
* **PrometheusPort**: string: Prometheus exporter port.

## Log
### Properties
* **Encoding**: string: The type of encoding of the logs to be monitored.
* **LogGroupName**: string: The CloudWatch log group name to be associated to the monitored log.
* **LogPath**: string: The path of the logs to be monitored.
* **LogType**: string: The log type decides the log patterns against which Application Insights analyzes the log.
* **PatternSet**: string: The name of the log pattern set.

## WindowsEvent
### Properties
* **EventLevels**: [EventLevel](#eventlevel)[]: The levels of event to log. 
* **EventName**: string: The type of Windows Events to log.
* **LogGroupName**: string: The CloudWatch log group name to be associated to the monitored log.
* **PatternSet**: string: The name of the log pattern set.

## EventLevel
### Properties

## SubComponentTypeConfiguration
### Properties
* **SubComponentConfigurationDetails**: [SubComponentConfigurationDetails](#subcomponentconfigurationdetails): The configuration settings of sub components.
* **SubComponentType**: string: The sub component type.

## SubComponentConfigurationDetails
### Properties
* **AlarmMetrics**: [AlarmMetric](#alarmmetric)[]: A list of metrics to monitor for the component.
* **Logs**: [Log](#log)[]: A list of logs to monitor for the component.
* **WindowsEvents**: [WindowsEvent](#windowsevent)[]: A list of Windows Events to log.

## CustomComponent
### Properties
* **ComponentName**: string: The name of the component.
* **ResourceList**: string[]: The list of resource ARNs that belong to the component.

## LogPatternSet
### Properties
* **LogPatterns**: [LogPattern](#logpattern)[]: The log patterns of a set.
* **PatternSetName**: string: The name of the log pattern set.

## LogPattern
### Properties
* **Pattern**: string: The log pattern.
* **PatternName**: string: The name of the log pattern.
* **Rank**: int: Rank of the log pattern.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

