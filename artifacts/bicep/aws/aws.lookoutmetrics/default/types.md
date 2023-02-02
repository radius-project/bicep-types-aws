# AWS.LookoutMetrics @ default

## Resource AWS.LookoutMetrics/AnomalyDetector@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.LookoutMetrics/AnomalyDetectorProperties](#awslookoutmetricsanomalydetectorproperties) (Required): properties of the resource

## AWS.LookoutMetrics/AnomalyDetectorProperties
### Properties
* **AnomalyDetectorConfig**: [AnomalyDetectorConfig](#anomalydetectorconfig) (Required): Configuration options for the AnomalyDetector
* **AnomalyDetectorDescription**: string: A description for the AnomalyDetector.
* **AnomalyDetectorName**: string: Name for the Amazon Lookout for Metrics Anomaly Detector
* **Arn**: string (ReadOnly, Identifier)
* **KmsKeyArn**: string: KMS key used to encrypt the AnomalyDetector data
* **MetricSetList**: [MetricSet](#metricset)[] (Required): List of metric sets for anomaly detection

## AnomalyDetectorConfig
### Properties
* **AnomalyDetectorFrequency**: string (Required): Frequency of anomaly detection

## MetricSet
### Properties
* **DimensionList**: string[]: Dimensions for this MetricSet.
* **MetricList**: [Metric](#metric)[] (Required): Metrics captured by this MetricSet.
* **MetricSetDescription**: string: A description for the MetricSet.
* **MetricSetFrequency**: string: A frequency period to aggregate the data
* **MetricSetName**: string (Required): The name of the MetricSet.
* **MetricSource**: [MetricSource](#metricsource) (Required)
* **Offset**: int: Offset, in seconds, between the frequency interval and the time at which the metrics are available.
* **TimestampColumn**: [TimestampColumn](#timestampcolumn)
* **Timezone**: string

## Metric
### Properties
* **AggregationFunction**: string (Required): Operator used to aggregate metric values
* **MetricName**: string (Required)
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
* **RoleArn**: string (Required)

## CloudwatchConfig
### Properties
* **RoleArn**: string (Required)

## RDSSourceConfig
### Properties
* **DatabaseHost**: string (Required)
* **DatabaseName**: string (Required)
* **DatabasePort**: int (Required)
* **DBInstanceIdentifier**: string (Required)
* **RoleArn**: string (Required)
* **SecretManagerArn**: string (Required)
* **TableName**: string (Required)
* **VpcConfiguration**: [VpcConfiguration](#vpcconfiguration) (Required)

## VpcConfiguration
### Properties
* **SecurityGroupIdList**: string[] (Required)
* **SubnetIdList**: string[] (Required)

## RedshiftSourceConfig
### Properties
* **ClusterIdentifier**: string (Required)
* **DatabaseHost**: string (Required)
* **DatabaseName**: string (Required)
* **DatabasePort**: int (Required)
* **RoleArn**: string (Required)
* **SecretManagerArn**: string (Required)
* **TableName**: string (Required)
* **VpcConfiguration**: [VpcConfiguration](#vpcconfiguration) (Required)

## S3SourceConfig
### Properties
* **FileFormatDescriptor**: [FileFormatDescriptor](#fileformatdescriptor) (Required)
* **HistoricalDataPathList**: string[]
* **RoleArn**: string (Required)
* **TemplatedPathList**: string[]

## FileFormatDescriptor
### Properties
* **CsvFormatDescriptor**: [CsvFormatDescriptor](#csvformatdescriptor)
* **JsonFormatDescriptor**: [JsonFormatDescriptor](#jsonformatdescriptor)

## CsvFormatDescriptor
### Properties
* **Charset**: string
* **ContainsHeader**: bool
* **Delimiter**: string
* **FileCompression**: string
* **HeaderList**: string[]
* **QuoteSymbol**: string

## JsonFormatDescriptor
### Properties
* **Charset**: string
* **FileCompression**: string

## TimestampColumn
### Properties
* **ColumnFormat**: string: A timestamp format for the timestamps in the dataset
* **ColumnName**: string

