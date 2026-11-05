# AWS.PI @ default

## Resource AWS.PI/PerfReports@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.PI/PerfReportsProperties](#awspiperfreportsproperties) (Required, Identifier): properties of the resource

## AWS.PI/PerfReportsProperties
### Properties
* **AnalysisReportId**: string (ReadOnly): A unique identifier for the analysis report.
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the performance analysis report.
* **CreateTime**: string (ReadOnly): The time the analysis report was created in ISO 8601 format.
* **EndTime**: string (Required): The end time defined for the analysis report in ISO 8601 format.
* **Identifier**: string (Required): An immutable, AWS Region-unique identifier for a data source. Performance Insights gathers metrics from this data source. To use an Amazon RDS instance as a data source, specify its DbiResourceId value.
* **ServiceType**: string (Required): The AWS service for which Performance Insights returns metrics. Valid values are RDS and DOCDB.
* **StartTime**: string (Required): The start time defined for the analysis report in ISO 8601 format.
* **Status**: string (ReadOnly): The status of the analysis report.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

