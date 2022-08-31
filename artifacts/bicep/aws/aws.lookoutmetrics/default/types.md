# AWS.LookoutMetrics @ default

## Resource AWS.LookoutMetrics/AnomalyDetector@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.LookoutMetrics/AnomalyDetectorProperties](#awslookoutmetricsanomalydetectorproperties): properties of the resource

## AWS.LookoutMetrics/AnomalyDetectorProperties
### Properties
* **AnomalyDetectorConfig**: [AnomalyDetectorConfig](#anomalydetectorconfig): Configuration options for the AnomalyDetector
* **AnomalyDetectorDescription**: string: A description for the AnomalyDetector.
* **AnomalyDetectorName**: string: Name for the Amazon Lookout for Metrics Anomaly Detector
* **Arn**: [Arn](#arn) (ReadOnly)
* **KmsKeyArn**: string: KMS key used to encrypt the AnomalyDetector data
* **MetricSetList**: [MetricSet](#metricset)[]: List of metric sets for anomaly detection

## AnomalyDetectorConfig
### Properties
* **AnomalyDetectorFrequency**: [AnomalyDetectorFrequency](#anomalydetectorfrequency): Frequency of anomaly detection

## AnomalyDetectorFrequency
### Properties

## Arn
### Properties

## MetricSet
### Properties
* **DimensionList**: [ColumnName](#columnname)[]: Dimensions for this MetricSet.
* **MetricList**: [Metric](#metric)[]: Metrics captured by this MetricSet.
* **MetricSetDescription**: string: A description for the MetricSet.
* **MetricSetFrequency**: string: A frequency period to aggregate the data
* **MetricSetName**: string: The name of the MetricSet.
* **MetricSource**: [MetricSource](#metricsource)
* **Offset**: int: Offset, in seconds, between the frequency interval and the time at which the metrics are available.
* **TimestampColumn**: [TimestampColumn](#timestampcolumn)
* **Timezone**: string

## ColumnName
### Properties

## Metric
### Properties
* **AggregationFunction**: string: Operator used to aggregate metric values
* **MetricName**: [ColumnName](#columnname)
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
* **FlowName**: string
* **RoleArn**: [Arn](#arn)

## CloudwatchConfig
### Properties
* **RoleArn**: [Arn](#arn)

## RDSSourceConfig
### Properties
* **DatabaseHost**: [DatabaseHost](#databasehost)
* **DatabaseName**: string
* **DatabasePort**: [DatabasePort](#databaseport)
* **DBInstanceIdentifier**: string
* **RoleArn**: [Arn](#arn)
* **SecretManagerArn**: [SecretManagerArn](#secretmanagerarn)
* **TableName**: [TableName](#tablename)
* **VpcConfiguration**: [VpcConfiguration](#vpcconfiguration)

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
* **SecurityGroupIdList**: [SecurityGroupIdList](#securitygroupidlist)
* **SubnetIdList**: [SubnetIdList](#subnetidlist)

## SecurityGroupIdList
### Properties

## SubnetIdList
### Properties

## RedshiftSourceConfig
### Properties
* **ClusterIdentifier**: string
* **DatabaseHost**: [DatabaseHost](#databasehost)
* **DatabaseName**: string
* **DatabasePort**: [DatabasePort](#databaseport)
* **RoleArn**: [Arn](#arn)
* **SecretManagerArn**: [SecretManagerArn](#secretmanagerarn)
* **TableName**: [TableName](#tablename)
* **VpcConfiguration**: [VpcConfiguration](#vpcconfiguration)

## S3SourceConfig
### Properties
* **FileFormatDescriptor**: [FileFormatDescriptor](#fileformatdescriptor)
* **HistoricalDataPathList**: string[]
* **RoleArn**: [Arn](#arn)
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

