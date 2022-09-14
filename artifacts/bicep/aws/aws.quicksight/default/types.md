# AWS.QuickSight @ default

## Resource AWS.QuickSight/Analysis@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.QuickSight/AnalysisProperties](#awsquicksightanalysisproperties) (Required): properties of the resource

## Resource AWS.QuickSight/Dashboard@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.QuickSight/DashboardProperties](#awsquicksightdashboardproperties) (Required): properties of the resource

## Resource AWS.QuickSight/DataSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.QuickSight/DataSetProperties](#awsquicksightdatasetproperties): properties of the resource

## Resource AWS.QuickSight/DataSource@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.QuickSight/DataSourceProperties](#awsquicksightdatasourceproperties): properties of the resource

## Resource AWS.QuickSight/Template@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.QuickSight/TemplateProperties](#awsquicksighttemplateproperties) (Required): properties of the resource

## Resource AWS.QuickSight/Theme@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.QuickSight/ThemeProperties](#awsquicksightthemeproperties) (Required): properties of the resource

## AWS.QuickSight/AnalysisProperties
### Properties
* **AnalysisId**: string (Required)
* **Arn**: string (ReadOnly): <p>The Amazon Resource Name (ARN) of the analysis.</p>
* **AwsAccountId**: string (Required)
* **CreatedTime**: string (ReadOnly): <p>The time that the analysis was created.</p>
* **DataSetArns**: string[] (ReadOnly): <p>The ARNs of the datasets of the analysis.</p>
* **Errors**: [AnalysisError](#analysiserror)[]: <p>Errors associated with the analysis.</p>
* **LastUpdatedTime**: string (ReadOnly, WriteOnly): <p>The time that the analysis was last updated.</p>
* **Name**: string: <p>The descriptive name of the analysis.</p>
* **Parameters**: [Parameters](#parameters) (WriteOnly)
* **Permissions**: [ResourcePermission](#resourcepermission)[]: <p>A structure that describes the principals and the resource-level permissions on an
            analysis. You can use the <code>Permissions</code> structure to grant permissions by
            providing a list of AWS Identity and Access Management (IAM) action information for each
            principal listed by Amazon Resource Name (ARN). </p>

        <p>To specify no permissions, omit <code>Permissions</code>.</p>
* **Sheets**: [Sheet](#sheet)[] (ReadOnly, WriteOnly): <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
* **SourceEntity**: [AnalysisSourceEntity](#analysissourceentity) (Required, WriteOnly)
* **Status**: [ResourceStatus](#resourcestatus) (ReadOnly, WriteOnly)
* **Tags**: [Tag](#tag)[]: <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
            analysis.</p>
* **ThemeArn**: string: <p>The ARN of the theme of the analysis.</p>

## AnalysisError
### Properties
* **Message**: string: <p>The message associated with the analysis error.</p>
* **Type**: [AnalysisErrorType](#analysiserrortype)

## AnalysisErrorType
### Properties

## Parameters
### Properties
* **DateTimeParameters**: [DateTimeParameter](#datetimeparameter)[]: <p>Date-time parameters.</p>
* **DecimalParameters**: [DecimalParameter](#decimalparameter)[]: <p>Decimal parameters.</p>
* **IntegerParameters**: [IntegerParameter](#integerparameter)[]: <p>Integer parameters.</p>
* **StringParameters**: [StringParameter](#stringparameter)[]: <p>String parameters.</p>

## DateTimeParameter
### Properties
* **Name**: string (Required): <p>A display name for the date-time parameter.</p>
* **Values**: string[] (Required): <p>The values for the date-time parameter.</p>

## DecimalParameter
### Properties
* **Name**: string (Required): <p>A display name for the decimal parameter.</p>
* **Values**: int[] (Required): <p>The values for the decimal parameter.</p>

## IntegerParameter
### Properties
* **Name**: string (Required): <p>The name of the integer parameter.</p>
* **Values**: int[] (Required): <p>The values for the integer parameter.</p>

## StringParameter
### Properties
* **Name**: string (Required): <p>A display name for a string parameter.</p>
* **Values**: string[] (Required): <p>The values of a string parameter.</p>

## ResourcePermission
### Properties
* **Actions**: string[] (Required): <p>The IAM action to grant or revoke permissions on.</p>
* **Principal**: string (Required): <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
            following:</p>
        <ul>
            <li>
                <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
            </li>
            <li>
                <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
            </li>
            <li>
                <p>The ARN of an AWS account root: This is an IAM ARN rather than a QuickSight
                    ARN. Use this option only to share resources (templates) across AWS accounts.
                    (This is less common.) </p>
            </li>
         </ul>

## Sheet
### Properties
* **Name**: string: <p>The name of a sheet. This name is displayed on the sheet's tab in the QuickSight
            console.</p>
* **SheetId**: string: <p>The unique identifier associated with a sheet.</p>

## AnalysisSourceEntity
### Properties
* **SourceTemplate**: [AnalysisSourceTemplate](#analysissourcetemplate)

## AnalysisSourceTemplate
### Properties
* **Arn**: string (Required): <p>The Amazon Resource Name (ARN) of the source template of an analysis.</p>
* **DataSetReferences**: [DataSetReference](#datasetreference)[] (Required): <p>The dataset references of the source template of an analysis.</p>

## DataSetReference
### Properties
* **DataSetArn**: string (Required): <p>Dataset Amazon Resource Name (ARN).</p>
* **DataSetPlaceholder**: string (Required): <p>Dataset placeholder.</p>

## ResourceStatus
### Properties

## Tag
### Properties
* **Key**: string (Required): <p>Tag key.</p>
* **Value**: string (Required): <p>Tag value.</p>

## AWS.QuickSight/DashboardProperties
### Properties
* **Arn**: string (ReadOnly): <p>The Amazon Resource Name (ARN) of the resource.</p>
* **AwsAccountId**: string (Required)
* **CreatedTime**: string (ReadOnly, WriteOnly): <p>The time that this dataset was created.</p>
* **DashboardId**: string (Required)
* **DashboardPublishOptions**: [DashboardPublishOptions](#dashboardpublishoptions) (WriteOnly)
* **LastPublishedTime**: string (ReadOnly): <p>The last time that this dataset was published.</p>
* **LastUpdatedTime**: string (ReadOnly, WriteOnly): <p>The last time that this dataset was updated.</p>
* **Name**: string: <p>The display name of the dashboard.</p>
* **Parameters**: [Parameters](#parameters) (WriteOnly)
* **Permissions**: [ResourcePermission](#resourcepermission)[]: <p>A structure that contains the permissions of the dashboard. You can use this structure
            for granting permissions by providing a list of IAM action information for each
            principal ARN. </p>

        <p>To specify no permissions, omit the permissions list.</p>
* **SourceEntity**: [DashboardSourceEntity](#dashboardsourceentity) (Required, WriteOnly)
* **Tags**: [Tag](#tag)[]: <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the
            dashboard.</p>
* **ThemeArn**: string (WriteOnly): <p>The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. If
            you add a value for this field, it overrides the value that is used in the source
            entity. The theme ARN must exist in the same AWS account where you create the
            dashboard.</p>
* **Version**: [DashboardVersion](#dashboardversion) (ReadOnly, WriteOnly)
* **VersionDescription**: string (WriteOnly): <p>A description for the first version of the dashboard being created.</p>

## DashboardPublishOptions
### Properties
* **AdHocFilteringOption**: [AdHocFilteringOption](#adhocfilteringoption)
* **ExportToCSVOption**: [ExportToCSVOption](#exporttocsvoption)
* **SheetControlsOption**: [SheetControlsOption](#sheetcontrolsoption)

## AdHocFilteringOption
### Properties
* **AvailabilityStatus**: [DashboardBehavior](#dashboardbehavior)

## DashboardBehavior
### Properties

## ExportToCSVOption
### Properties
* **AvailabilityStatus**: [DashboardBehavior](#dashboardbehavior)

## SheetControlsOption
### Properties
* **VisibilityState**: [DashboardUIState](#dashboarduistate)

## DashboardUIState
### Properties

## Parameters
### Properties
* **DateTimeParameters**: [DateTimeParameter](#datetimeparameter)[]: <p>Date-time parameters.</p>
* **DecimalParameters**: [DecimalParameter](#decimalparameter)[]: <p>Decimal parameters.</p>
* **IntegerParameters**: [IntegerParameter](#integerparameter)[]: <p>Integer parameters.</p>
* **StringParameters**: [StringParameter](#stringparameter)[]: <p>String parameters.</p>

## DateTimeParameter
### Properties
* **Name**: string (Required): <p>A display name for the date-time parameter.</p>
* **Values**: string[] (Required): <p>The values for the date-time parameter.</p>

## DecimalParameter
### Properties
* **Name**: string (Required): <p>A display name for the decimal parameter.</p>
* **Values**: int[] (Required): <p>The values for the decimal parameter.</p>

## IntegerParameter
### Properties
* **Name**: string (Required): <p>The name of the integer parameter.</p>
* **Values**: int[] (Required): <p>The values for the integer parameter.</p>

## StringParameter
### Properties
* **Name**: string (Required): <p>A display name for a string parameter.</p>
* **Values**: string[] (Required): <p>The values of a string parameter.</p>

## ResourcePermission
### Properties
* **Actions**: string[] (Required): <p>The IAM action to grant or revoke permissions on.</p>
* **Principal**: string (Required): <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
            following:</p>
        <ul>
            <li>
                <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
            </li>
            <li>
                <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
            </li>
            <li>
                <p>The ARN of an AWS account root: This is an IAM ARN rather than a QuickSight
                    ARN. Use this option only to share resources (templates) across AWS accounts.
                    (This is less common.) </p>
            </li>
         </ul>

## DashboardSourceEntity
### Properties
* **SourceTemplate**: [DashboardSourceTemplate](#dashboardsourcetemplate)

## DashboardSourceTemplate
### Properties
* **Arn**: string (Required): <p>The Amazon Resource Name (ARN) of the resource.</p>
* **DataSetReferences**: [DataSetReference](#datasetreference)[] (Required): <p>Dataset references.</p>

## DataSetReference
### Properties
* **DataSetArn**: string (Required): <p>Dataset Amazon Resource Name (ARN).</p>
* **DataSetPlaceholder**: string (Required): <p>Dataset placeholder.</p>

## Tag
### Properties
* **Key**: string (Required): <p>Tag key.</p>
* **Value**: string (Required): <p>Tag value.</p>

## DashboardVersion
### Properties
* **Arn**: string: <p>The Amazon Resource Name (ARN) of the resource.</p>
* **CreatedTime**: string: <p>The time that this dashboard version was created.</p>
* **DataSetArns**: string[]: <p>The Amazon Resource Numbers (ARNs) for the datasets that are associated with this
            version of the dashboard.</p>
* **Description**: string: <p>Description.</p>
* **Errors**: [DashboardError](#dashboarderror)[]: <p>Errors associated with this dashboard version.</p>
* **Sheets**: [Sheet](#sheet)[]: <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
* **SourceEntityArn**: string: <p>Source entity ARN.</p>
* **Status**: [ResourceStatus](#resourcestatus)
* **ThemeArn**: string: <p>The ARN of the theme associated with a version of the dashboard.</p>
* **VersionNumber**: int: <p>Version number for this version of the dashboard.</p>

## DashboardError
### Properties
* **Message**: string: <p>Message.</p>
* **Type**: [DashboardErrorType](#dashboarderrortype)

## DashboardErrorType
### Properties

## Sheet
### Properties
* **Name**: string: <p>The name of a sheet. This name is displayed on the sheet's tab in the QuickSight
            console.</p>
* **SheetId**: string: <p>The unique identifier associated with a sheet.</p>

## ResourceStatus
### Properties

## AWS.QuickSight/DataSetProperties
### Properties
* **Arn**: string (ReadOnly): <p>The Amazon Resource Name (ARN) of the resource.</p>
* **AwsAccountId**: string
* **ColumnGroups**: [ColumnGroup](#columngroup)[]: <p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p>
* **ColumnLevelPermissionRules**: [ColumnLevelPermissionRule](#columnlevelpermissionrule)[]
* **ConsumedSpiceCapacityInBytes**: int (ReadOnly): <p>The amount of SPICE capacity used by this dataset. This is 0 if the dataset isn't
            imported into SPICE.</p>
* **CreatedTime**: string (ReadOnly): <p>The time that this dataset was created.</p>
* **DataSetId**: string
* **DataSetUsageConfiguration**: [DataSetUsageConfiguration](#datasetusageconfiguration)
* **FieldFolders**: [FieldFolderMap](#fieldfoldermap) (WriteOnly)
* **ImportMode**: [DataSetImportMode](#datasetimportmode)
* **IngestionWaitPolicy**: [IngestionWaitPolicy](#ingestionwaitpolicy) (WriteOnly)
* **LastUpdatedTime**: string (ReadOnly): <p>The last time that this dataset was updated.</p>
* **LogicalTableMap**: [LogicalTableMap](#logicaltablemap)
* **Name**: string: <p>The display name for the dataset.</p>
* **OutputColumns**: [OutputColumn](#outputcolumn)[] (ReadOnly): <p>The list of columns after all transforms. These columns are available in templates,
            analyses, and dashboards.</p>
* **Permissions**: [ResourcePermission](#resourcepermission)[]: <p>A list of resource permissions on the dataset.</p>
* **PhysicalTableMap**: [PhysicalTableMap](#physicaltablemap)
* **RowLevelPermissionDataSet**: [RowLevelPermissionDataSet](#rowlevelpermissiondataset)
* **Tags**: [Tag](#tag)[]: <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>

## ColumnGroup
### Properties
* **GeoSpatialColumnGroup**: [GeoSpatialColumnGroup](#geospatialcolumngroup)

## GeoSpatialColumnGroup
### Properties
* **Columns**: string[] (Required): <p>Columns in this hierarchy.</p>
* **CountryCode**: [GeoSpatialCountryCode](#geospatialcountrycode)
* **Name**: string (Required): <p>A display name for the hierarchy.</p>

## GeoSpatialCountryCode
### Properties

## ColumnLevelPermissionRule
### Properties
* **ColumnNames**: string[]
* **Principals**: string[]

## DataSetUsageConfiguration
### Properties
* **DisableUseAsDirectQuerySource**: bool
* **DisableUseAsImportedSource**: bool

## FieldFolderMap
### Properties

## DataSetImportMode
### Properties

## IngestionWaitPolicy
### Properties
* **IngestionWaitTimeInHours**: int: <p>The maximum time (in hours) to wait for Ingestion to complete. Default timeout is 36 hours.
 Applicable only when DataSetImportMode mode is set to SPICE and WaitForSpiceIngestion is set to true.</p>
* **WaitForSpiceIngestion**: bool: <p>Wait for SPICE ingestion to finish to mark dataset creation/update successful. Default (true).
  Applicable only when DataSetImportMode mode is set to SPICE.</p>

## LogicalTableMap
### Properties

## OutputColumn
### Properties
* **Description**: string: <p>A description for a column.</p>
* **Name**: string: <p>A display name for the dataset.</p>
* **Type**: [ColumnDataType](#columndatatype)

## ColumnDataType
### Properties

## ResourcePermission
### Properties
* **Actions**: string[] (Required): <p>The IAM action to grant or revoke permissions on.</p>
* **Principal**: string (Required): <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
            following:</p>
        <ul>
            <li>
                <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
            </li>
            <li>
                <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
            </li>
            <li>
                <p>The ARN of an AWS account root: This is an IAM ARN rather than a QuickSight
                    ARN. Use this option only to share resources (templates) across AWS accounts.
                    (This is less common.) </p>
            </li>
         </ul>

## PhysicalTableMap
### Properties

## RowLevelPermissionDataSet
### Properties
* **Arn**: string (Required): <p>The Amazon Resource Name (ARN) of the permission dataset.</p>
* **FormatVersion**: [RowLevelPermissionFormatVersion](#rowlevelpermissionformatversion)
* **Namespace**: string: <p>The namespace associated with the row-level permissions dataset.</p>
* **PermissionPolicy**: [RowLevelPermissionPolicy](#rowlevelpermissionpolicy) (Required)

## RowLevelPermissionFormatVersion
### Properties

## RowLevelPermissionPolicy
### Properties

## Tag
### Properties
* **Key**: string (Required): <p>Tag key.</p>
* **Value**: string (Required): <p>Tag value.</p>

## AWS.QuickSight/DataSourceProperties
### Properties
* **AlternateDataSourceParameters**: [DataSourceParameters](#datasourceparameters)[]: <p>A set of alternate data source parameters that you want to share for the credentials
            stored with this data source. The credentials are applied in tandem with the data source
            parameters when you copy a data source by using a create or update request. The API
            operation compares the <code>DataSourceParameters</code> structure that's in the request
            with the structures in the <code>AlternateDataSourceParameters</code> allow list. If the
            structures are an exact match, the request is allowed to use the credentials from this
            existing data source. If the <code>AlternateDataSourceParameters</code> list is null,
            the <code>Credentials</code> originally used with this <code>DataSourceParameters</code>
            are automatically allowed.</p>
* **Arn**: string (ReadOnly): <p>The Amazon Resource Name (ARN) of the data source.</p>
* **AwsAccountId**: string
* **CreatedTime**: string (ReadOnly): <p>The time that this data source was created.</p>
* **Credentials**: [DataSourceCredentials](#datasourcecredentials) (WriteOnly)
* **DataSourceId**: string
* **DataSourceParameters**: [DataSourceParameters](#datasourceparameters)
* **ErrorInfo**: [DataSourceErrorInfo](#datasourceerrorinfo)
* **LastUpdatedTime**: string (ReadOnly): <p>The last time that this data source was updated.</p>
* **Name**: string: <p>A display name for the data source.</p>
* **Permissions**: [ResourcePermission](#resourcepermission)[]: <p>A list of resource permissions on the data source.</p>
* **SslProperties**: [SslProperties](#sslproperties)
* **Status**: [ResourceStatus](#resourcestatus) (ReadOnly)
* **Tags**: [Tag](#tag)[]: <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the data source.</p>
* **Type**: [DataSourceType](#datasourcetype)
* **VpcConnectionProperties**: [VpcConnectionProperties](#vpcconnectionproperties)

## DataSourceParameters
### Properties
* **AmazonElasticsearchParameters**: [AmazonElasticsearchParameters](#amazonelasticsearchparameters)
* **AmazonOpenSearchParameters**: [AmazonOpenSearchParameters](#amazonopensearchparameters)
* **AthenaParameters**: [AthenaParameters](#athenaparameters)
* **AuroraParameters**: [AuroraParameters](#auroraparameters)
* **AuroraPostgreSqlParameters**: [AuroraPostgreSqlParameters](#aurorapostgresqlparameters)
* **MariaDbParameters**: [MariaDbParameters](#mariadbparameters)
* **MySqlParameters**: [MySqlParameters](#mysqlparameters)
* **OracleParameters**: [OracleParameters](#oracleparameters)
* **PostgreSqlParameters**: [PostgreSqlParameters](#postgresqlparameters)
* **PrestoParameters**: [PrestoParameters](#prestoparameters)
* **RdsParameters**: [RdsParameters](#rdsparameters)
* **RedshiftParameters**: [RedshiftParameters](#redshiftparameters)
* **S3Parameters**: [S3Parameters](#s3parameters)
* **SnowflakeParameters**: [SnowflakeParameters](#snowflakeparameters)
* **SparkParameters**: [SparkParameters](#sparkparameters)
* **SqlServerParameters**: [SqlServerParameters](#sqlserverparameters)
* **TeradataParameters**: [TeradataParameters](#teradataparameters)

## AmazonElasticsearchParameters
### Properties
* **Domain**: string (Required): <p>The Amazon Elasticsearch Service domain.</p>

## AmazonOpenSearchParameters
### Properties
* **Domain**: string (Required): <p>The Amazon OpenSearch Service domain.</p>

## AthenaParameters
### Properties
* **WorkGroup**: string: <p>The workgroup that Amazon Athena uses.</p>

## AuroraParameters
### Properties
* **Database**: string (Required): <p>Database.</p>
* **Host**: string (Required): <p>Host.</p>
* **Port**: int (Required): <p>Port.</p>

## AuroraPostgreSqlParameters
### Properties
* **Database**: string (Required): <p>Database.</p>
* **Host**: string (Required): <p>Host.</p>
* **Port**: int (Required): <p>Port.</p>

## MariaDbParameters
### Properties
* **Database**: string (Required): <p>Database.</p>
* **Host**: string (Required): <p>Host.</p>
* **Port**: int (Required): <p>Port.</p>

## MySqlParameters
### Properties
* **Database**: string (Required): <p>Database.</p>
* **Host**: string (Required): <p>Host.</p>
* **Port**: int (Required): <p>Port.</p>

## OracleParameters
### Properties
* **Database**: string (Required)
* **Host**: string (Required)
* **Port**: int (Required)

## PostgreSqlParameters
### Properties
* **Database**: string (Required): <p>Database.</p>
* **Host**: string (Required): <p>Host.</p>
* **Port**: int (Required): <p>Port.</p>

## PrestoParameters
### Properties
* **Catalog**: string (Required): <p>Catalog.</p>
* **Host**: string (Required): <p>Host.</p>
* **Port**: int (Required): <p>Port.</p>

## RdsParameters
### Properties
* **Database**: string (Required): <p>Database.</p>
* **InstanceId**: string (Required): <p>Instance ID.</p>

## RedshiftParameters
### Properties
* **ClusterId**: string: <p>Cluster ID. This field can be blank if the <code>Host</code> and <code>Port</code> are
            provided.</p>
* **Database**: string (Required): <p>Database.</p>
* **Host**: string: <p>Host. This field can be blank if <code>ClusterId</code> is provided.</p>
* **Port**: int: <p>Port. This field can be blank if the <code>ClusterId</code> is provided.</p>

## S3Parameters
### Properties
* **ManifestFileLocation**: [ManifestFileLocation](#manifestfilelocation) (Required)

## ManifestFileLocation
### Properties
* **Bucket**: string (Required): <p>Amazon S3 bucket.</p>
* **Key**: string (Required): <p>Amazon S3 key that identifies an object.</p>

## SnowflakeParameters
### Properties
* **Database**: string (Required): <p>Database.</p>
* **Host**: string (Required): <p>Host.</p>
* **Warehouse**: string (Required): <p>Warehouse.</p>

## SparkParameters
### Properties
* **Host**: string (Required): <p>Host.</p>
* **Port**: int (Required): <p>Port.</p>

## SqlServerParameters
### Properties
* **Database**: string (Required): <p>Database.</p>
* **Host**: string (Required): <p>Host.</p>
* **Port**: int (Required): <p>Port.</p>

## TeradataParameters
### Properties
* **Database**: string (Required): <p>Database.</p>
* **Host**: string (Required): <p>Host.</p>
* **Port**: int (Required): <p>Port.</p>

## DataSourceCredentials
### Properties
* **CopySourceArn**: string: <p>The Amazon Resource Name (ARN) of a data source that has the credential pair that you
            want to use. When <code>CopySourceArn</code> is not null, the credential pair from the
            data source in the ARN is used as the credentials for the
            <code>DataSourceCredentials</code> structure.</p>
* **CredentialPair**: [CredentialPair](#credentialpair)

## CredentialPair
### Properties
* **AlternateDataSourceParameters**: [DataSourceParameters](#datasourceparameters)[]: <p>A set of alternate data source parameters that you want to share for these
            credentials. The credentials are applied in tandem with the data source parameters when
            you copy a data source by using a create or update request. The API operation compares
            the <code>DataSourceParameters</code> structure that's in the request with the
            structures in the <code>AlternateDataSourceParameters</code> allow list. If the
            structures are an exact match, the request is allowed to use the new data source with
            the existing credentials. If the <code>AlternateDataSourceParameters</code> list is
            null, the <code>DataSourceParameters</code> originally used with these
                <code>Credentials</code> is automatically allowed.</p>
* **Password**: string (Required): <p>Password.</p>
* **Username**: string (Required): <p>User name.</p>

## DataSourceErrorInfo
### Properties
* **Message**: string: <p>Error message.</p>
* **Type**: [DataSourceErrorInfoType](#datasourceerrorinfotype)

## DataSourceErrorInfoType
### Properties

## ResourcePermission
### Properties
* **Actions**: string[] (Required): <p>The IAM action to grant or revoke permissions on.</p>
* **Principal**: string (Required): <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
            following:</p>
        <ul>
            <li>
                <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
            </li>
            <li>
                <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
            </li>
            <li>
                <p>The ARN of an AWS account root: This is an IAM ARN rather than a QuickSight
                    ARN. Use this option only to share resources (templates) across AWS accounts.
                    (This is less common.) </p>
            </li>
         </ul>

## SslProperties
### Properties
* **DisableSsl**: bool: <p>A Boolean option to control whether SSL should be disabled.</p>

## ResourceStatus
### Properties

## Tag
### Properties
* **Key**: string (Required): <p>Tag key.</p>
* **Value**: string (Required): <p>Tag value.</p>

## DataSourceType
### Properties

## VpcConnectionProperties
### Properties
* **VpcConnectionArn**: string (Required): <p>The Amazon Resource Name (ARN) for the VPC connection.</p>

## AWS.QuickSight/TemplateProperties
### Properties
* **Arn**: string (ReadOnly): <p>The Amazon Resource Name (ARN) of the template.</p>
* **AwsAccountId**: string (Required)
* **CreatedTime**: string (ReadOnly, WriteOnly): <p>Time when this was created.</p>
* **LastUpdatedTime**: string (ReadOnly, WriteOnly): <p>Time when this was last updated.</p>
* **Name**: string: <p>A display name for the template.</p>
* **Permissions**: [ResourcePermission](#resourcepermission)[]: <p>A list of resource permissions to be set on the template. </p>
* **SourceEntity**: [TemplateSourceEntity](#templatesourceentity) (Required, WriteOnly)
* **Tags**: [Tag](#tag)[]: <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>
* **TemplateId**: string (Required)
* **Version**: [TemplateVersion](#templateversion) (ReadOnly, WriteOnly)
* **VersionDescription**: string (WriteOnly): <p>A description of the current template version being created. This API operation creates the
			first version of the template. Every time <code>UpdateTemplate</code> is called, a new
			version is created. Each version of the template maintains a description of the version
			in the <code>VersionDescription</code> field.</p>

## ResourcePermission
### Properties
* **Actions**: string[] (Required): <p>The IAM action to grant or revoke permissions on.</p>
* **Principal**: string (Required): <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
            following:</p>
        <ul>
            <li>
                <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
            </li>
            <li>
                <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
            </li>
            <li>
                <p>The ARN of an AWS account root: This is an IAM ARN rather than a QuickSight
                    ARN. Use this option only to share resources (templates) across AWS accounts.
                    (This is less common.) </p>
            </li>
         </ul>

## TemplateSourceEntity
### Properties
* **SourceAnalysis**: [TemplateSourceAnalysis](#templatesourceanalysis)
* **SourceTemplate**: [TemplateSourceTemplate](#templatesourcetemplate)

## TemplateSourceAnalysis
### Properties
* **Arn**: string (Required): <p>The Amazon Resource Name (ARN) of the resource.</p>
* **DataSetReferences**: [DataSetReference](#datasetreference)[] (Required): <p>A structure containing information about the dataset references used as placeholders
            in the template.</p>

## DataSetReference
### Properties
* **DataSetArn**: string (Required): <p>Dataset Amazon Resource Name (ARN).</p>
* **DataSetPlaceholder**: string (Required): <p>Dataset placeholder.</p>

## TemplateSourceTemplate
### Properties
* **Arn**: string (Required): <p>The Amazon Resource Name (ARN) of the resource.</p>

## Tag
### Properties
* **Key**: string (Required): <p>Tag key.</p>
* **Value**: string (Required): <p>Tag value.</p>

## TemplateVersion
### Properties
* **CreatedTime**: string: <p>The time that this template version was created.</p>
* **DataSetConfigurations**: [DataSetConfiguration](#datasetconfiguration)[]: <p>Schema of the dataset identified by the placeholder. Any dashboard created from this
            template should be bound to new datasets matching the same schema described through this
            API operation.</p>
* **Description**: string: <p>The description of the template.</p>
* **Errors**: [TemplateError](#templateerror)[]: <p>Errors associated with this template version.</p>
* **Sheets**: [Sheet](#sheet)[]: <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
* **SourceEntityArn**: string: <p>The Amazon Resource Name (ARN) of an analysis or template that was used to create this
            template.</p>
* **Status**: [ResourceStatus](#resourcestatus)
* **ThemeArn**: string: <p>The ARN of the theme associated with this version of the template.</p>
* **VersionNumber**: int: <p>The version number of the template version.</p>

## DataSetConfiguration
### Properties
* **ColumnGroupSchemaList**: [ColumnGroupSchema](#columngroupschema)[]: <p>A structure containing the list of column group schemas.</p>
* **DataSetSchema**: [DataSetSchema](#datasetschema)
* **Placeholder**: string: <p>Placeholder.</p>

## ColumnGroupSchema
### Properties
* **ColumnGroupColumnSchemaList**: [ColumnGroupColumnSchema](#columngroupcolumnschema)[]: <p>A structure containing the list of schemas for column group columns.</p>
* **Name**: string: <p>The name of the column group schema.</p>

## ColumnGroupColumnSchema
### Properties
* **Name**: string: <p>The name of the column group's column schema.</p>

## DataSetSchema
### Properties
* **ColumnSchemaList**: [ColumnSchema](#columnschema)[]: <p>A structure containing the list of column schemas.</p>

## ColumnSchema
### Properties
* **DataType**: string: <p>The data type of the column schema.</p>
* **GeographicRole**: string: <p>The geographic role of the column schema.</p>
* **Name**: string: <p>The name of the column schema.</p>

## TemplateError
### Properties
* **Message**: string: <p>Description of the error type.</p>
* **Type**: [TemplateErrorType](#templateerrortype)

## TemplateErrorType
### Properties

## Sheet
### Properties
* **Name**: string: <p>The name of a sheet. This name is displayed on the sheet's tab in the QuickSight
            console.</p>
* **SheetId**: string: <p>The unique identifier associated with a sheet.</p>

## ResourceStatus
### Properties

## AWS.QuickSight/ThemeProperties
### Properties
* **Arn**: string (ReadOnly): <p>The Amazon Resource Name (ARN) of the theme.</p>
* **AwsAccountId**: string (Required)
* **BaseThemeId**: string (WriteOnly): <p>The ID of the theme that a custom theme will inherit from. All themes inherit from one of
			the starting themes defined by Amazon QuickSight. For a list of the starting themes, use
				<code>ListThemes</code> or choose <b>Themes</b> from
			within a QuickSight analysis. </p>
* **Configuration**: [ThemeConfiguration](#themeconfiguration) (WriteOnly)
* **CreatedTime**: string (ReadOnly): <p>The date and time that the theme was created.</p>
* **LastUpdatedTime**: string (ReadOnly): <p>The date and time that the theme was last updated.</p>
* **Name**: string: <p>A display name for the theme.</p>
* **Permissions**: [ResourcePermission](#resourcepermission)[]: <p>A valid grouping of resource permissions to apply to the new theme.
			</p>
* **Tags**: [Tag](#tag)[]: <p>A map of the key-value pairs for the resource tag or tags that you want to add to the
			resource.</p>
* **ThemeId**: string (Required)
* **Type**: [ThemeType](#themetype) (ReadOnly)
* **Version**: [ThemeVersion](#themeversion) (ReadOnly)
* **VersionDescription**: string (WriteOnly): <p>A description of the first version of the theme that you're creating. Every time
				<code>UpdateTheme</code> is called, a new version is created. Each version of the
			theme has a description of the version in the <code>VersionDescription</code>
			field.</p>

## ThemeConfiguration
### Properties
* **DataColorPalette**: [DataColorPalette](#datacolorpalette)
* **Sheet**: [SheetStyle](#sheetstyle)
* **Typography**: [Typography](#typography)
* **UIColorPalette**: [UIColorPalette](#uicolorpalette)

## DataColorPalette
### Properties
* **Colors**: string[]: <p>The hexadecimal codes for the colors.</p>
* **EmptyFillColor**: string: <p>The hexadecimal code of a color that applies to charts where a lack of data is
            highlighted.</p>
* **MinMaxGradient**: string[]: <p>The minimum and maximum hexadecimal codes that describe a color gradient. </p>

## SheetStyle
### Properties
* **Tile**: [TileStyle](#tilestyle)
* **TileLayout**: [TileLayoutStyle](#tilelayoutstyle)

## TileStyle
### Properties
* **Border**: [BorderStyle](#borderstyle)

## BorderStyle
### Properties
* **Show**: bool: <p>The option to enable display of borders for visuals.</p>

## TileLayoutStyle
### Properties
* **Gutter**: [GutterStyle](#gutterstyle)
* **Margin**: [MarginStyle](#marginstyle)

## GutterStyle
### Properties
* **Show**: bool: <p>This Boolean value controls whether to display a gutter space between sheet tiles.
        </p>

## MarginStyle
### Properties
* **Show**: bool: <p>This Boolean value controls whether to display sheet margins.</p>

## Typography
### Properties
* **FontFamilies**: [Font](#font)[]

## Font
### Properties
* **FontFamily**: string

## UIColorPalette
### Properties
* **Accent**: string: <p>This color is that applies to selected states and buttons.</p>
* **AccentForeground**: string: <p>The foreground color that applies to any text or other elements that appear over the
            accent color.</p>
* **Danger**: string: <p>The color that applies to error messages.</p>
* **DangerForeground**: string: <p>The foreground color that applies to any text or other elements that appear over the
            error color.</p>
* **Dimension**: string: <p>The color that applies to the names of fields that are identified as
            dimensions.</p>
* **DimensionForeground**: string: <p>The foreground color that applies to any text or other elements that appear over the
            dimension color.</p>
* **Measure**: string: <p>The color that applies to the names of fields that are identified as measures.</p>
* **MeasureForeground**: string: <p>The foreground color that applies to any text or other elements that appear over the
            measure color.</p>
* **PrimaryBackground**: string: <p>The background color that applies to visuals and other high emphasis UI.</p>
* **PrimaryForeground**: string: <p>The color of text and other foreground elements that appear over the primary
            background regions, such as grid lines, borders, table banding, icons, and so on.</p>
* **SecondaryBackground**: string: <p>The background color that applies to the sheet background and sheet controls.</p>
* **SecondaryForeground**: string: <p>The foreground color that applies to any sheet title, sheet control text, or UI that
            appears over the secondary background.</p>
* **Success**: string: <p>The color that applies to success messages, for example the check mark for a
            successful download.</p>
* **SuccessForeground**: string: <p>The foreground color that applies to any text or other elements that appear over the
            success color.</p>
* **Warning**: string: <p>This color that applies to warning and informational messages.</p>
* **WarningForeground**: string: <p>The foreground color that applies to any text or other elements that appear over the
            warning color.</p>

## ResourcePermission
### Properties
* **Actions**: string[] (Required): <p>The IAM action to grant or revoke permissions on.</p>
* **Principal**: string (Required): <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
            following:</p>
        <ul>
            <li>
                <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
            </li>
            <li>
                <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
            </li>
            <li>
                <p>The ARN of an AWS account root: This is an IAM ARN rather than a QuickSight
                    ARN. Use this option only to share resources (templates) across AWS accounts.
                    (This is less common.) </p>
            </li>
         </ul>

## Tag
### Properties
* **Key**: string (Required): <p>Tag key.</p>
* **Value**: string (Required): <p>Tag value.</p>

## ThemeType
### Properties

## ThemeVersion
### Properties
* **Arn**: string: <p>The Amazon Resource Name (ARN) of the resource.</p>
* **BaseThemeId**: string: <p>The Amazon QuickSight-defined ID of the theme that a custom theme inherits from. All
            themes initially inherit from a default QuickSight theme.</p>
* **Configuration**: [ThemeConfiguration](#themeconfiguration)
* **CreatedTime**: string: <p>The date and time that this theme version was created.</p>
* **Description**: string: <p>The description of the theme.</p>
* **Errors**: [ThemeError](#themeerror)[]: <p>Errors associated with the theme.</p>
* **Status**: [ResourceStatus](#resourcestatus)
* **VersionNumber**: int: <p>The version number of the theme.</p>

## ThemeError
### Properties
* **Message**: string: <p>The error message.</p>
* **Type**: [ThemeErrorType](#themeerrortype)

## ThemeErrorType
### Properties

## ResourceStatus
### Properties

