# AWS.LookoutMetrics @ default

## Resource AWS.LookoutMetrics/AnomalyDetector@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.LookoutMetrics/AnomalyDetectorProperties](#awslookoutmetricsanomalydetectorproperties) (Required): properties of the resource

## AWS.LookoutMetrics/AnomalyDetectorProperties
### Properties
* **AnomalyDetectorConfig**: [AnomalyDetectorConfig](#anomalydetectorconfig) (Required): Configuration options for the AnomalyDetector
* **AnomalyDetectorDescription**: string: A description for the AnomalyDetector.
* **AnomalyDetectorName**: string: Name for the Amazon Lookout for Metrics Anomaly Detector
* **Arn**: [Arn](#arn) (ReadOnly)
* **KmsKeyArn**: string: KMS key used to encrypt the AnomalyDetector data
* **MetricSetList**: [MetricSet](#metricset)[] (Required): List of metric sets for anomaly detection

## AnomalyDetectorConfig
### Properties
* **AnomalyDetectorFrequency**: [AnomalyDetectorFrequency](#anomalydetectorfrequency) (Required): Frequency of anomaly detection

## AnomalyDetectorFrequency
### Properties

## Arn
### Properties

## MetricSet
### Properties
* **DimensionList**: [ColumnName](#columnname)[]: Dimensions for this MetricSet.
* **MetricList**: [Metric](#metric)[] (Required): Metrics captured by this MetricSet.
* **MetricSetDescription**: string: A description for the MetricSet.
* **MetricSetFrequency**: string: A frequency period to aggregate the data
* **MetricSetName**: string (Required): The name of the MetricSet.
* **MetricSource**: [MetricSource](#metricsource) (Required)
* **Offset**: int: Offset, in seconds, between the frequency interval and the time at which the metrics are available.
* **TimestampColumn**: [TimestampColumn](#timestampcolumn)
* **Timezone**: string

## ColumnName
### Properties

## Metric
### Properties
* **AggregationFunction**: string (Required): Operator used to aggregate metric values
* **MetricName**: [ColumnName](#columnname) (Required)
* **Namespace**: string

## MetricSource
### Properties
* **AppFlowConfig**: [AppFlowConfig](#appflowconfig)
* **CloudwatchConfig**: [CloudwatchConfig](#cloudwatchconfig)
* **RDSSourceConfig**: [RDSSourceConfig](#rdssourceconfig)
* **RedshiftSourceConfig**: [RedshiftSourceConfig](#redshiftsourceconfig)
* **S3SourceConfig**: [S3SourceConfig](#s3sourceconfig)

## AppFlowConfig
### Properties
* **FlowName**: string (Required)
* **RoleArn**: [Arn](#arn) (Required)

## CloudwatchConfig
### Properties
* **RoleArn**: [Arn](#arn) (Required)

## RDSSourceConfig
### Properties
* **DatabaseHost**: [DatabaseHost](#databasehost) (Required)
* **DatabaseName**: string (Required)
* **DatabasePort**: [DatabasePort](#databaseport) (Required)
* **DBInstanceIdentifier**: string (Required)
* **RoleArn**: [Arn](#arn) (Required)
* **SecretManagerArn**: [SecretManagerArn](#secretmanagerarn) (Required)
* **TableName**: [TableName](#tablename) (Required)
* **VpcConfiguration**: [VpcConfiguration](#vpcconfiguration) (Required)

## DatabaseHost
### Properties

## DatabasePort
### Properties

## SecretManagerArn
### Properties

## TableName
### Properties

## VpcConfiguration
### Properties
* **SecurityGroupIdList**: [SecurityGroupIdList](#securitygroupidlist) (Required)
* **SubnetIdList**: [SubnetIdList](#subnetidlist) (Required)

## SecurityGroupIdList
### Properties

## SubnetIdList
### Properties

## RedshiftSourceConfig
### Properties
* **ClusterIdentifier**: string (Required)
* **DatabaseHost**: [DatabaseHost](#databasehost) (Required)
* **DatabaseName**: string (Required)
* **DatabasePort**: [DatabasePort](#databaseport) (Required)
* **RoleArn**: [Arn](#arn) (Required)
* **SecretManagerArn**: [SecretManagerArn](#secretmanagerarn) (Required)
* **TableName**: [TableName](#tablename) (Required)
* **VpcConfiguration**: [VpcConfiguration](#vpcconfiguration) (Required)

## S3SourceConfig
### Properties
* **FileFormatDescriptor**: [FileFormatDescriptor](#fileformatdescriptor) (Required)
* **HistoricalDataPathList**: string[]
* **RoleArn**: [Arn](#arn) (Required)
* **TemplatedPathList**: string[]

## FileFormatDescriptor
### Properties
* **CsvFormatDescriptor**: [CsvFormatDescriptor](#csvformatdescriptor)
* **JsonFormatDescriptor**: [JsonFormatDescriptor](#jsonformatdescriptor)

## CsvFormatDescriptor
### Properties
* **Charset**: [Charset](#charset)
* **ContainsHeader**: bool
* **Delimiter**: string
* **FileCompression**: string
* **HeaderList**: [ColumnName](#columnname)[]
* **QuoteSymbol**: string

## Charset
### Properties

## JsonFormatDescriptor
### Properties
* **Charset**: [Charset](#charset)
* **FileCompression**: string

## TimestampColumn
### Properties
* **ColumnFormat**: string: A timestamp format for the timestamps in the dataset
* **ColumnName**: [ColumnName](#columnname)

