# AWS.OpenSearch @ default

## Resource AWS.OpenSearch/DataSource@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.OpenSearch/DataSourceProperties](#awsopensearchdatasourceproperties) (Required, Identifier): properties of the resource

## AWS.OpenSearch/DataSourceProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the data source.
* **DataSourceType**: [DataSourceType](#datasourcetype) (Required)
* **Description**: string: A description of the data source.
* **DomainName**: string (Required): The name of the OpenSearch Service domain.
* **Name**: string (Required): The name of the data source.
* **Status**: string (ReadOnly): The status of the data source.

## DataSourceType
### Properties
* **S3GlueDataCatalog**: [S3GlueDataCatalog](#s3gluedatacatalog)

## S3GlueDataCatalog
### Properties
* **RoleArn**: string (Required): The ARN of the IAM role that grants OpenSearch Service permission to access the Glue Data Catalog.

