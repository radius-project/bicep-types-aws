# AWS.QuickSight @ default

## Resource AWS.QuickSight/Analysis@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QuickSight/AnalysisProperties](#awsquicksightanalysisproperties) (Required, Identifier): properties of the resource

## Resource AWS.QuickSight/CustomPermissions@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QuickSight/CustomPermissionsProperties](#awsquicksightcustompermissionsproperties) (Required, Identifier): properties of the resource

## Resource AWS.QuickSight/Dashboard@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QuickSight/DashboardProperties](#awsquicksightdashboardproperties) (Required, Identifier): properties of the resource

## Resource AWS.QuickSight/DataSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QuickSight/DataSetProperties](#awsquicksightdatasetproperties) (Identifier): properties of the resource

## Resource AWS.QuickSight/DataSource@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QuickSight/DataSourceProperties](#awsquicksightdatasourceproperties) (Required, Identifier): properties of the resource

## Resource AWS.QuickSight/Folder@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QuickSight/FolderProperties](#awsquicksightfolderproperties) (Identifier): properties of the resource

## Resource AWS.QuickSight/RefreshSchedule@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QuickSight/RefreshScheduleProperties](#awsquicksightrefreshscheduleproperties) (Identifier): properties of the resource

## Resource AWS.QuickSight/Template@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QuickSight/TemplateProperties](#awsquicksighttemplateproperties) (Required, Identifier): properties of the resource

## Resource AWS.QuickSight/Theme@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QuickSight/ThemeProperties](#awsquicksightthemeproperties) (Required, Identifier): properties of the resource

## Resource AWS.QuickSight/Topic@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QuickSight/TopicProperties](#awsquicksighttopicproperties) (Identifier): properties of the resource

## Resource AWS.QuickSight/VPCConnection@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QuickSight/VPCConnectionProperties](#awsquicksightvpcconnectionproperties) (Identifier): properties of the resource

## AdHocFilteringOption
### Properties
* **AvailabilityStatus**: string

## AggregationFunction
### Properties
* **AttributeAggregationFunction**: [AttributeAggregationFunction](#attributeaggregationfunction)
* **CategoricalAggregationFunction**: string
* **DateAggregationFunction**: string
* **NumericalAggregationFunction**: [NumericalAggregationFunction](#numericalaggregationfunction)

## AggregationFunction
### Properties
* **AttributeAggregationFunction**: [AttributeAggregationFunction](#attributeaggregationfunction)
* **CategoricalAggregationFunction**: string
* **DateAggregationFunction**: string
* **NumericalAggregationFunction**: [NumericalAggregationFunction](#numericalaggregationfunction)

## AggregationFunction
### Properties
* **AttributeAggregationFunction**: [AttributeAggregationFunction](#attributeaggregationfunction)
* **CategoricalAggregationFunction**: string
* **DateAggregationFunction**: string
* **NumericalAggregationFunction**: [NumericalAggregationFunction](#numericalaggregationfunction)

## AggregationFunctionParameters
### Properties

## AggregationSortConfiguration
### Properties
* **AggregationFunction**: [AggregationFunction](#aggregationfunction)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **SortDirection**: string (Required)

## AggregationSortConfiguration
### Properties
* **AggregationFunction**: [AggregationFunction](#aggregationfunction)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **SortDirection**: string (Required)

## AggregationSortConfiguration
### Properties
* **AggregationFunction**: [AggregationFunction](#aggregationfunction)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **SortDirection**: string (Required)

## AllSheetsFilterScopeConfiguration
### Properties

## AllSheetsFilterScopeConfiguration
### Properties

## AllSheetsFilterScopeConfiguration
### Properties

## AmazonElasticsearchParameters
### Properties
* **Domain**: string (Required): <p>The OpenSearch domain.</p>

## AmazonOpenSearchParameters
### Properties
* **Domain**: string (Required): <p>The OpenSearch domain.</p>

## Analysis_AvailabilityStatus
### Properties

## Analysis_Interactions
### Properties

## Analysis_Interactions
### Properties

## AnalysisDefaults
### Properties
* **DefaultNewSheetConfiguration**: [DefaultNewSheetConfiguration](#defaultnewsheetconfiguration) (Required)

## AnalysisDefaults
### Properties
* **DefaultNewSheetConfiguration**: [DefaultNewSheetConfiguration](#defaultnewsheetconfiguration) (Required)

## AnalysisDefaults
### Properties
* **DefaultNewSheetConfiguration**: [DefaultNewSheetConfiguration](#defaultnewsheetconfiguration) (Required)

## AnalysisDefinition
### Properties
* **AnalysisDefaults**: [AnalysisDefaults](#analysisdefaults)
* **CalculatedFields**: [CalculatedField](#calculatedfield)[]
* **ColumnConfigurations**: [ColumnConfiguration](#columnconfiguration)[]
* **DataSetIdentifierDeclarations**: [DataSetIdentifierDeclaration](#datasetidentifierdeclaration)[] (Required)
* **FilterGroups**: [FilterGroup](#filtergroup)[]
* **Options**: [AssetOptions](#assetoptions)
* **ParameterDeclarations**: [ParameterDeclaration](#parameterdeclaration)[]
* **QueryExecutionOptions**: [QueryExecutionOptions](#queryexecutionoptions)
* **Sheets**: [SheetDefinition](#sheetdefinition)[]
* **StaticFiles**: [StaticFile](#staticfile)[]

## AnalysisError
### Properties
* **Message**: string: <p>The message associated with the analysis error.</p>
* **Type**: string
* **ViolatedEntities**: [Entity](#entity)[]: <p>Lists the violated entities that caused the analysis error</p>

## AnalysisSourceEntity
### Properties
* **SourceTemplate**: [AnalysisSourceTemplate](#analysissourcetemplate)

## AnalysisSourceTemplate
### Properties
* **Arn**: string (Required): <p>The Amazon Resource Name (ARN) of the source template of an analysis.</p>
* **DataSetReferences**: [DataSetReference](#datasetreference)[] (Required): <p>The dataset references of the source template of an analysis.</p>

## AnchorDateConfiguration
### Properties
* **AnchorOption**: string
* **ParameterName**: string

## AnchorDateConfiguration
### Properties
* **AnchorOption**: string
* **ParameterName**: string

## AnchorDateConfiguration
### Properties
* **AnchorOption**: string
* **ParameterName**: string

## ArcAxisConfiguration
### Properties
* **Range**: [ArcAxisDisplayRange](#arcaxisdisplayrange)
* **ReserveRange**: int

## ArcAxisConfiguration
### Properties
* **Range**: [ArcAxisDisplayRange](#arcaxisdisplayrange)
* **ReserveRange**: int

## ArcAxisConfiguration
### Properties
* **Range**: [ArcAxisDisplayRange](#arcaxisdisplayrange)
* **ReserveRange**: int

## ArcAxisDisplayRange
### Properties
* **Max**: int
* **Min**: int

## ArcAxisDisplayRange
### Properties
* **Max**: int
* **Min**: int

## ArcAxisDisplayRange
### Properties
* **Max**: int
* **Min**: int

## ArcConfiguration
### Properties
* **ArcAngle**: int
* **ArcThickness**: string

## ArcConfiguration
### Properties
* **ArcAngle**: int
* **ArcThickness**: string

## ArcConfiguration
### Properties
* **ArcAngle**: int
* **ArcThickness**: string

## ArcOptions
### Properties
* **ArcThickness**: string

## ArcOptions
### Properties
* **ArcThickness**: string

## ArcOptions
### Properties
* **ArcThickness**: string

## AssetOptions
### Properties
* **Timezone**: string
* **WeekStart**: string

## AssetOptions
### Properties
* **Timezone**: string
* **WeekStart**: string

## AssetOptions
### Properties
* **Timezone**: string
* **WeekStart**: string

## AthenaParameters
### Properties
* **RoleArn**: string: <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific Athena data source. For example, say an account administrator has turned off all Athena access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow Athena access for the single Athena data source that is specified in the structure, even if the account-wide role forbidding Athena access is still active.</p>
* **WorkGroup**: string: <p>The workgroup that Amazon Athena uses.</p>

## AttributeAggregationFunction
### Properties
* **SimpleAttributeAggregation**: string
* **ValueForMultipleValues**: string

## AttributeAggregationFunction
### Properties
* **SimpleAttributeAggregation**: string
* **ValueForMultipleValues**: string

## AttributeAggregationFunction
### Properties
* **SimpleAttributeAggregation**: string
* **ValueForMultipleValues**: string

## AuroraParameters
### Properties
* **Database**: string (Required): <p>Database.</p>
* **Host**: string (Required): <p>Host.</p>
* **Port**: int (Required): <p>Port.</p>

## AuroraPostgreSqlParameters
### Properties
* **Database**: string (Required): <p>The Amazon Aurora PostgreSQL database to connect to.</p>
* **Host**: string (Required): <p>The Amazon Aurora PostgreSQL-Compatible host to connect to.</p>
* **Port**: int (Required): <p>The port that Amazon Aurora PostgreSQL is listening on.</p>

## AWS.QuickSight/AnalysisProperties
### Properties
* **AnalysisId**: string (Required, Identifier)
* **Arn**: string (ReadOnly): <p>The Amazon Resource Name (ARN) of the analysis.</p>
* **AwsAccountId**: string (Required, Identifier)
* **CreatedTime**: string (ReadOnly): <p>The time that the analysis was created.</p>
* **DataSetArns**: string[] (ReadOnly): <p>The ARNs of the datasets of the analysis.</p>
* **Definition**: [AnalysisDefinition](#analysisdefinition) (WriteOnly)
* **Errors**: [AnalysisError](#analysiserror)[]: <p>Errors associated with the analysis.</p>
* **FolderArns**: string[] (WriteOnly)
* **LastUpdatedTime**: string (ReadOnly): <p>The time that the analysis was last updated.</p>
* **Name**: string (Required): <p>The descriptive name of the analysis.</p>
* **Parameters**: [Parameters](#parameters) (WriteOnly)
* **Permissions**: [ResourcePermission](#resourcepermission)[]
* **Sheets**: [Sheet](#sheet)[]: <p>A list of the associated sheets with the unique identifier and name of each sheet.</p>
* **SourceEntity**: [AnalysisSourceEntity](#analysissourceentity) (WriteOnly)
* **Status**: string (WriteOnly)
* **Tags**: [Tag](#tag)[]
* **ThemeArn**: string: <p>The ARN of the theme of the analysis.</p>
* **ValidationStrategy**: [ValidationStrategy](#validationstrategy) (WriteOnly)

## AWS.QuickSight/CustomPermissionsProperties
### Properties
* **Arn**: string (ReadOnly)
* **AwsAccountId**: string (Required, Identifier)
* **Capabilities**: [Capabilities](#capabilities)
* **CustomPermissionsName**: string (Required, Identifier)
* **Tags**: [Tag](#tag)[]

## AWS.QuickSight/DashboardProperties
### Properties
* **Arn**: string (ReadOnly): <p>The Amazon Resource Name (ARN) of the resource.</p>
* **AwsAccountId**: string (Required, Identifier)
* **CreatedTime**: string (ReadOnly): <p>The time that this dashboard was created.</p>
* **DashboardId**: string (Required, Identifier)
* **DashboardPublishOptions**: [DashboardPublishOptions](#dashboardpublishoptions) (WriteOnly)
* **Definition**: [DashboardVersionDefinition](#dashboardversiondefinition) (WriteOnly)
* **FolderArns**: string[] (WriteOnly)
* **LastPublishedTime**: string (ReadOnly): <p>The last time that this dashboard was published.</p>
* **LastUpdatedTime**: string (ReadOnly): <p>The last time that this dashboard was updated.</p>
* **LinkEntities**: string[]
* **LinkSharingConfiguration**: [LinkSharingConfiguration](#linksharingconfiguration) (WriteOnly)
* **Name**: string (Required)
* **Parameters**: [Parameters](#parameters) (WriteOnly)
* **Permissions**: [ResourcePermission](#resourcepermission)[]
* **SourceEntity**: [DashboardSourceEntity](#dashboardsourceentity) (WriteOnly)
* **Tags**: [Tag](#tag)[]
* **ThemeArn**: string (WriteOnly)
* **ValidationStrategy**: [ValidationStrategy](#validationstrategy) (WriteOnly)
* **Version**: [DashboardVersion](#dashboardversion) (ReadOnly)
* **VersionDescription**: string (WriteOnly)

## AWS.QuickSight/DataSetProperties
### Properties
* **Arn**: string (ReadOnly): <p>The Amazon Resource Name (ARN) of the resource.</p>
* **AwsAccountId**: string (Identifier)
* **ColumnGroups**: [ColumnGroup](#columngroup)[]: <p>Groupings of columns that work together in certain Amazon QuickSight features. Currently, only geospatial hierarchy is supported.</p>
* **ColumnLevelPermissionRules**: [ColumnLevelPermissionRule](#columnlevelpermissionrule)[]: <p>A set of one or more definitions of a <code>
               <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ColumnLevelPermissionRule.html">ColumnLevelPermissionRule</a>
            </code>.</p>
* **ConsumedSpiceCapacityInBytes**: int (ReadOnly): <p>The amount of SPICE capacity used by this dataset. This is 0 if the dataset isn't
            imported into SPICE.</p>
* **CreatedTime**: string (ReadOnly): <p>The time that this dataset was created.</p>
* **DataSetId**: string (Identifier)
* **DatasetParameters**: [DatasetParameter](#datasetparameter)[]: <p>The parameter declarations of the dataset.</p>
* **DataSetRefreshProperties**: [DataSetRefreshProperties](#datasetrefreshproperties)
* **DataSetUsageConfiguration**: [DataSetUsageConfiguration](#datasetusageconfiguration)
* **FieldFolders**: [FieldFolderMap](#fieldfoldermap) (WriteOnly)
* **FolderArns**: string[] (WriteOnly): <p>When you create the dataset, Amazon QuickSight adds the dataset to these folders.</p>
* **ImportMode**: string
* **IngestionWaitPolicy**: [IngestionWaitPolicy](#ingestionwaitpolicy) (WriteOnly)
* **LastUpdatedTime**: string (ReadOnly): <p>The last time that this dataset was updated.</p>
* **LogicalTableMap**: [LogicalTableMap](#logicaltablemap)
* **Name**: string: <p>The display name for the dataset.</p>
* **OutputColumns**: [OutputColumn](#outputcolumn)[] (ReadOnly): <p>The list of columns after all transforms. These columns are available in templates,
            analyses, and dashboards.</p>
* **PerformanceConfiguration**: [PerformanceConfiguration](#performanceconfiguration)
* **Permissions**: [ResourcePermission](#resourcepermission)[]: <p>A list of resource permissions on the dataset.</p>
* **PhysicalTableMap**: [PhysicalTableMap](#physicaltablemap)
* **RowLevelPermissionDataSet**: [RowLevelPermissionDataSet](#rowlevelpermissiondataset)
* **RowLevelPermissionTagConfiguration**: [RowLevelPermissionTagConfiguration](#rowlevelpermissiontagconfiguration)
* **Tags**: [Tag](#tag)[]: <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>

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
* **AwsAccountId**: string (Identifier)
* **CreatedTime**: string (ReadOnly): <p>The time that this data source was created.</p>
* **Credentials**: [DataSourceCredentials](#datasourcecredentials) (WriteOnly)
* **DataSourceId**: string (Identifier)
* **DataSourceParameters**: [DataSourceParameters](#datasourceparameters)
* **ErrorInfo**: [DataSourceErrorInfo](#datasourceerrorinfo)
* **FolderArns**: string[] (WriteOnly)
* **LastUpdatedTime**: string (ReadOnly): <p>The last time that this data source was updated.</p>
* **Name**: string (Required)
* **Permissions**: [ResourcePermission](#resourcepermission)[]
* **SslProperties**: [SslProperties](#sslproperties)
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]
* **Type**: string (Required)
* **VpcConnectionProperties**: [VpcConnectionProperties](#vpcconnectionproperties)

## AWS.QuickSight/FolderProperties
### Properties
* **Arn**: string (ReadOnly): <p>The Amazon Resource Name (ARN) for the folder.</p>
* **AwsAccountId**: string (Identifier)
* **CreatedTime**: string (ReadOnly): <p>The time that the folder was created.</p>
* **FolderId**: string (Identifier)
* **FolderType**: string
* **LastUpdatedTime**: string (ReadOnly): <p>The time that the folder was last updated.</p>
* **Name**: string
* **ParentFolderArn**: string (WriteOnly)
* **Permissions**: [ResourcePermission](#resourcepermission)[]
* **SharingModel**: string
* **Tags**: [Tag](#tag)[]

## AWS.QuickSight/RefreshScheduleProperties
### Properties
* **Arn**: string (ReadOnly): <p>The Amazon Resource Name (ARN) of the data source.</p>
* **AwsAccountId**: string (Identifier)
* **DataSetId**: string (Identifier)
* **Schedule**: [RefreshScheduleMap](#refreshschedulemap)

## AWS.QuickSight/TemplateProperties
### Properties
* **Arn**: string (ReadOnly): <p>The Amazon Resource Name (ARN) of the template.</p>
* **AwsAccountId**: string (Required, Identifier)
* **CreatedTime**: string (ReadOnly): <p>Time when this was created.</p>
* **Definition**: [TemplateVersionDefinition](#templateversiondefinition) (WriteOnly)
* **LastUpdatedTime**: string (ReadOnly): <p>Time when this was last updated.</p>
* **Name**: string
* **Permissions**: [ResourcePermission](#resourcepermission)[]
* **SourceEntity**: [TemplateSourceEntity](#templatesourceentity) (WriteOnly)
* **Tags**: [Tag](#tag)[]
* **TemplateId**: string (Required, Identifier)
* **ValidationStrategy**: [ValidationStrategy](#validationstrategy) (WriteOnly)
* **Version**: [TemplateVersion](#templateversion) (ReadOnly)
* **VersionDescription**: string (WriteOnly)

## AWS.QuickSight/ThemeProperties
### Properties
* **Arn**: string (ReadOnly): <p>The Amazon Resource Name (ARN) of the theme.</p>
* **AwsAccountId**: string (Required, Identifier)
* **BaseThemeId**: string (Required, WriteOnly)
* **Configuration**: [ThemeConfiguration](#themeconfiguration) (Required, WriteOnly)
* **CreatedTime**: string (ReadOnly): <p>The date and time that the theme was created.</p>
* **LastUpdatedTime**: string (ReadOnly): <p>The date and time that the theme was last updated.</p>
* **Name**: string (Required)
* **Permissions**: [ResourcePermission](#resourcepermission)[]
* **Tags**: [Tag](#tag)[]
* **ThemeId**: string (Required, Identifier)
* **Type**: string (ReadOnly)
* **Version**: [ThemeVersion](#themeversion) (ReadOnly)
* **VersionDescription**: string (WriteOnly)

## AWS.QuickSight/TopicProperties
### Properties
* **Arn**: string (ReadOnly)
* **AwsAccountId**: string (Identifier)
* **DataSets**: [DatasetMetadata](#datasetmetadata)[]
* **Description**: string
* **Name**: string
* **TopicId**: string (Identifier)
* **UserExperienceVersion**: string

## AWS.QuickSight/VPCConnectionProperties
### Properties
* **Arn**: string (ReadOnly): <p>The Amazon Resource Name (ARN) of the VPC connection.</p>
* **AvailabilityStatus**: string
* **AwsAccountId**: string (Identifier)
* **CreatedTime**: string (ReadOnly): <p>The time that the VPC connection was created.</p>
* **DnsResolvers**: string[]
* **LastUpdatedTime**: string (ReadOnly): <p>The time that the VPC connection was last updated.</p>
* **Name**: string
* **NetworkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): <p>A list of network interfaces.</p>
* **RoleArn**: string
* **SecurityGroupIds**: string[]
* **Status**: string (ReadOnly)
* **SubnetIds**: string[] (WriteOnly)
* **Tags**: [Tag](#tag)[]
* **VPCConnectionId**: string (Identifier)
* **VPCId**: string (ReadOnly): <p>The Amazon EC2 VPC ID associated with the VPC connection.</p>

## AxisDataOptions
### Properties
* **DateAxisOptions**: [DateAxisOptions](#dateaxisoptions)
* **NumericAxisOptions**: [NumericAxisOptions](#numericaxisoptions)

## AxisDataOptions
### Properties
* **DateAxisOptions**: [DateAxisOptions](#dateaxisoptions)
* **NumericAxisOptions**: [NumericAxisOptions](#numericaxisoptions)

## AxisDataOptions
### Properties
* **DateAxisOptions**: [DateAxisOptions](#dateaxisoptions)
* **NumericAxisOptions**: [NumericAxisOptions](#numericaxisoptions)

## AxisDisplayDataDrivenRange
### Properties

## AxisDisplayDataDrivenRange
### Properties

## AxisDisplayDataDrivenRange
### Properties

## AxisDisplayMinMaxRange
### Properties
* **Maximum**: int
* **Minimum**: int

## AxisDisplayMinMaxRange
### Properties
* **Maximum**: int
* **Minimum**: int

## AxisDisplayMinMaxRange
### Properties
* **Maximum**: int
* **Minimum**: int

## AxisDisplayOptions
### Properties
* **AxisLineVisibility**: string
* **AxisOffset**: string: String based length that is composed of value and unit in px
* **DataOptions**: [AxisDataOptions](#axisdataoptions)
* **GridLineVisibility**: string
* **ScrollbarOptions**: [ScrollBarOptions](#scrollbaroptions)
* **TickLabelOptions**: [AxisTickLabelOptions](#axisticklabeloptions)

## AxisDisplayOptions
### Properties
* **AxisLineVisibility**: string
* **AxisOffset**: string: String based length that is composed of value and unit in px
* **DataOptions**: [AxisDataOptions](#axisdataoptions)
* **GridLineVisibility**: string
* **ScrollbarOptions**: [ScrollBarOptions](#scrollbaroptions)
* **TickLabelOptions**: [AxisTickLabelOptions](#axisticklabeloptions)

## AxisDisplayOptions
### Properties
* **AxisLineVisibility**: [Template_AxisLineVisibility](#templateaxislinevisibility)
* **AxisOffset**: string: String based length that is composed of value and unit in px
* **DataOptions**: [AxisDataOptions](#axisdataoptions)
* **GridLineVisibility**: [Template_GridLineVisibility](#templategridlinevisibility)
* **ScrollbarOptions**: [ScrollBarOptions](#scrollbaroptions)
* **TickLabelOptions**: [AxisTickLabelOptions](#axisticklabeloptions)

## AxisDisplayRange
### Properties
* **DataDriven**: [AxisDisplayDataDrivenRange](#axisdisplaydatadrivenrange)
* **MinMax**: [AxisDisplayMinMaxRange](#axisdisplayminmaxrange)

## AxisDisplayRange
### Properties
* **DataDriven**: [AxisDisplayDataDrivenRange](#axisdisplaydatadrivenrange)
* **MinMax**: [AxisDisplayMinMaxRange](#axisdisplayminmaxrange)

## AxisDisplayRange
### Properties
* **DataDriven**: [AxisDisplayDataDrivenRange](#axisdisplaydatadrivenrange)
* **MinMax**: [AxisDisplayMinMaxRange](#axisdisplayminmaxrange)

## AxisLabelOptions
### Properties
* **ApplyTo**: [AxisLabelReferenceOptions](#axislabelreferenceoptions)
* **CustomLabel**: string
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)

## AxisLabelOptions
### Properties
* **ApplyTo**: [AxisLabelReferenceOptions](#axislabelreferenceoptions)
* **CustomLabel**: string
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)

## AxisLabelOptions
### Properties
* **ApplyTo**: [AxisLabelReferenceOptions](#axislabelreferenceoptions)
* **CustomLabel**: string
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)

## AxisLabelReferenceOptions
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)

## AxisLabelReferenceOptions
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)

## AxisLabelReferenceOptions
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)

## AxisLinearScale
### Properties
* **StepCount**: int
* **StepSize**: int

## AxisLinearScale
### Properties
* **StepCount**: int
* **StepSize**: int

## AxisLinearScale
### Properties
* **StepCount**: int
* **StepSize**: int

## AxisLogarithmicScale
### Properties
* **Base**: int

## AxisLogarithmicScale
### Properties
* **Base**: int

## AxisLogarithmicScale
### Properties
* **Base**: int

## AxisScale
### Properties
* **Linear**: [AxisLinearScale](#axislinearscale)
* **Logarithmic**: [AxisLogarithmicScale](#axislogarithmicscale)

## AxisScale
### Properties
* **Linear**: [AxisLinearScale](#axislinearscale)
* **Logarithmic**: [AxisLogarithmicScale](#axislogarithmicscale)

## AxisScale
### Properties
* **Linear**: [AxisLinearScale](#axislinearscale)
* **Logarithmic**: [AxisLogarithmicScale](#axislogarithmicscale)

## AxisTickLabelOptions
### Properties
* **LabelOptions**: [LabelOptions](#labeloptions)
* **RotationAngle**: int

## AxisTickLabelOptions
### Properties
* **LabelOptions**: [LabelOptions](#labeloptions)
* **RotationAngle**: int

## AxisTickLabelOptions
### Properties
* **LabelOptions**: [LabelOptions](#labeloptions)
* **RotationAngle**: int

## BarChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Colors**: [DimensionField](#dimensionfield)[]
* **SmallMultiples**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## BarChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Colors**: [DimensionField](#dimensionfield)[]
* **SmallMultiples**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## BarChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Colors**: [DimensionField](#dimensionfield)[]
* **SmallMultiples**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## BarChartConfiguration
### Properties
* **BarsArrangement**: string
* **CategoryAxis**: [AxisDisplayOptions](#axisdisplayoptions)
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ColorLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ContributionAnalysisDefaults**: [ContributionAnalysisDefault](#contributionanalysisdefault)[]
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [BarChartFieldWells](#barchartfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **Orientation**: string
* **ReferenceLines**: [ReferenceLine](#referenceline)[]
* **SmallMultiplesOptions**: [SmallMultiplesOptions](#smallmultiplesoptions)
* **SortConfiguration**: [BarChartSortConfiguration](#barchartsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **ValueAxis**: [AxisDisplayOptions](#axisdisplayoptions)
* **ValueLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **VisualPalette**: [VisualPalette](#visualpalette)

## BarChartConfiguration
### Properties
* **BarsArrangement**: string
* **CategoryAxis**: [AxisDisplayOptions](#axisdisplayoptions)
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ColorLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ContributionAnalysisDefaults**: [ContributionAnalysisDefault](#contributionanalysisdefault)[]
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [BarChartFieldWells](#barchartfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **Orientation**: string
* **ReferenceLines**: [ReferenceLine](#referenceline)[]
* **SmallMultiplesOptions**: [SmallMultiplesOptions](#smallmultiplesoptions)
* **SortConfiguration**: [BarChartSortConfiguration](#barchartsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **ValueAxis**: [AxisDisplayOptions](#axisdisplayoptions)
* **ValueLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **VisualPalette**: [VisualPalette](#visualpalette)

## BarChartConfiguration
### Properties
* **BarsArrangement**: string
* **CategoryAxis**: [AxisDisplayOptions](#axisdisplayoptions)
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ColorLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ContributionAnalysisDefaults**: [ContributionAnalysisDefault](#contributionanalysisdefault)[]
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [BarChartFieldWells](#barchartfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **Orientation**: string
* **ReferenceLines**: [ReferenceLine](#referenceline)[]
* **SmallMultiplesOptions**: [SmallMultiplesOptions](#smallmultiplesoptions)
* **SortConfiguration**: [BarChartSortConfiguration](#barchartsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **ValueAxis**: [AxisDisplayOptions](#axisdisplayoptions)
* **ValueLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **VisualPalette**: [VisualPalette](#visualpalette)

## BarChartFieldWells
### Properties
* **BarChartAggregatedFieldWells**: [BarChartAggregatedFieldWells](#barchartaggregatedfieldwells)

## BarChartFieldWells
### Properties
* **BarChartAggregatedFieldWells**: [BarChartAggregatedFieldWells](#barchartaggregatedfieldwells)

## BarChartFieldWells
### Properties
* **BarChartAggregatedFieldWells**: [BarChartAggregatedFieldWells](#barchartaggregatedfieldwells)

## BarChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **ColorSort**: [FieldSortOptions](#fieldsortoptions)[]
* **SmallMultiplesLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SmallMultiplesSort**: [FieldSortOptions](#fieldsortoptions)[]

## BarChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **ColorSort**: [FieldSortOptions](#fieldsortoptions)[]
* **SmallMultiplesLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SmallMultiplesSort**: [FieldSortOptions](#fieldsortoptions)[]

## BarChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **ColorSort**: [FieldSortOptions](#fieldsortoptions)[]
* **SmallMultiplesLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SmallMultiplesSort**: [FieldSortOptions](#fieldsortoptions)[]

## BarChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [BarChartConfiguration](#barchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## BarChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [BarChartConfiguration](#barchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## BarChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [BarChartConfiguration](#barchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## BinCountOptions
### Properties
* **Value**: int

## BinCountOptions
### Properties
* **Value**: int

## BinCountOptions
### Properties
* **Value**: int

## BinWidthOptions
### Properties
* **BinCountLimit**: int
* **Value**: int

## BinWidthOptions
### Properties
* **BinCountLimit**: int
* **Value**: int

## BinWidthOptions
### Properties
* **BinCountLimit**: int
* **Value**: int

## BodySectionConfiguration
### Properties
* **Content**: [BodySectionContent](#bodysectioncontent) (Required)
* **PageBreakConfiguration**: [SectionPageBreakConfiguration](#sectionpagebreakconfiguration)
* **SectionId**: string (Required)
* **Style**: [SectionStyle](#sectionstyle)

## BodySectionConfiguration
### Properties
* **Content**: [BodySectionContent](#bodysectioncontent) (Required)
* **PageBreakConfiguration**: [SectionPageBreakConfiguration](#sectionpagebreakconfiguration)
* **SectionId**: string (Required)
* **Style**: [SectionStyle](#sectionstyle)

## BodySectionConfiguration
### Properties
* **Content**: [BodySectionContent](#bodysectioncontent) (Required)
* **PageBreakConfiguration**: [SectionPageBreakConfiguration](#sectionpagebreakconfiguration)
* **SectionId**: string (Required)
* **Style**: [SectionStyle](#sectionstyle)

## BodySectionContent
### Properties
* **Layout**: [SectionLayoutConfiguration](#sectionlayoutconfiguration)

## BodySectionContent
### Properties
* **Layout**: [SectionLayoutConfiguration](#sectionlayoutconfiguration)

## BodySectionContent
### Properties
* **Layout**: [SectionLayoutConfiguration](#sectionlayoutconfiguration)

## BorderStyle
### Properties
* **Show**: bool: <p>The option to enable display of borders for visuals.</p>

## BoxPlotAggregatedFieldWells
### Properties
* **GroupBy**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## BoxPlotAggregatedFieldWells
### Properties
* **GroupBy**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## BoxPlotAggregatedFieldWells
### Properties
* **GroupBy**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## BoxPlotChartConfiguration
### Properties
* **BoxPlotOptions**: [BoxPlotOptions](#boxplotoptions)
* **CategoryAxis**: [AxisDisplayOptions](#axisdisplayoptions)
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **FieldWells**: [BoxPlotFieldWells](#boxplotfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **PrimaryYAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **PrimaryYAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ReferenceLines**: [ReferenceLine](#referenceline)[]
* **SortConfiguration**: [BoxPlotSortConfiguration](#boxplotsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **VisualPalette**: [VisualPalette](#visualpalette)

## BoxPlotChartConfiguration
### Properties
* **BoxPlotOptions**: [BoxPlotOptions](#boxplotoptions)
* **CategoryAxis**: [AxisDisplayOptions](#axisdisplayoptions)
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **FieldWells**: [BoxPlotFieldWells](#boxplotfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **PrimaryYAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **PrimaryYAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ReferenceLines**: [ReferenceLine](#referenceline)[]
* **SortConfiguration**: [BoxPlotSortConfiguration](#boxplotsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **VisualPalette**: [VisualPalette](#visualpalette)

## BoxPlotChartConfiguration
### Properties
* **BoxPlotOptions**: [BoxPlotOptions](#boxplotoptions)
* **CategoryAxis**: [AxisDisplayOptions](#axisdisplayoptions)
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **FieldWells**: [BoxPlotFieldWells](#boxplotfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **PrimaryYAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **PrimaryYAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ReferenceLines**: [ReferenceLine](#referenceline)[]
* **SortConfiguration**: [BoxPlotSortConfiguration](#boxplotsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **VisualPalette**: [VisualPalette](#visualpalette)

## BoxPlotFieldWells
### Properties
* **BoxPlotAggregatedFieldWells**: [BoxPlotAggregatedFieldWells](#boxplotaggregatedfieldwells)

## BoxPlotFieldWells
### Properties
* **BoxPlotAggregatedFieldWells**: [BoxPlotAggregatedFieldWells](#boxplotaggregatedfieldwells)

## BoxPlotFieldWells
### Properties
* **BoxPlotAggregatedFieldWells**: [BoxPlotAggregatedFieldWells](#boxplotaggregatedfieldwells)

## BoxPlotOptions
### Properties
* **AllDataPointsVisibility**: string
* **OutlierVisibility**: string
* **StyleOptions**: [BoxPlotStyleOptions](#boxplotstyleoptions)

## BoxPlotOptions
### Properties
* **AllDataPointsVisibility**: string
* **OutlierVisibility**: string
* **StyleOptions**: [BoxPlotStyleOptions](#boxplotstyleoptions)

## BoxPlotOptions
### Properties
* **AllDataPointsVisibility**: [Template_AllDataPointsVisibility](#templatealldatapointsvisibility)
* **OutlierVisibility**: [Template_OutlierVisibility](#templateoutliervisibility)
* **StyleOptions**: [BoxPlotStyleOptions](#boxplotstyleoptions)

## BoxPlotSortConfiguration
### Properties
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **PaginationConfiguration**: [PaginationConfiguration](#paginationconfiguration)

## BoxPlotSortConfiguration
### Properties
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **PaginationConfiguration**: [PaginationConfiguration](#paginationconfiguration)

## BoxPlotSortConfiguration
### Properties
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **PaginationConfiguration**: [PaginationConfiguration](#paginationconfiguration)

## BoxPlotStyleOptions
### Properties
* **FillStyle**: string

## BoxPlotStyleOptions
### Properties
* **FillStyle**: string

## BoxPlotStyleOptions
### Properties
* **FillStyle**: string

## BoxPlotVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [BoxPlotChartConfiguration](#boxplotchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## BoxPlotVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [BoxPlotChartConfiguration](#boxplotchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## BoxPlotVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [BoxPlotChartConfiguration](#boxplotchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## CalculatedField
### Properties
* **DataSetIdentifier**: string (Required)
* **Expression**: string (Required)
* **Name**: string (Required)

## CalculatedField
### Properties
* **DataSetIdentifier**: string (Required)
* **Expression**: string (Required)
* **Name**: string (Required)

## CalculatedField
### Properties
* **DataSetIdentifier**: string (Required)
* **Expression**: string (Required)
* **Name**: string (Required)

## CalculatedMeasureField
### Properties
* **Expression**: string (Required)
* **FieldId**: string (Required)

## CalculatedMeasureField
### Properties
* **Expression**: string (Required)
* **FieldId**: string (Required)

## CalculatedMeasureField
### Properties
* **Expression**: string (Required)
* **FieldId**: string (Required)

## Capabilities
### Properties
* **AddOrRunAnomalyDetectionForAnalyses**: string
* **CreateAndUpdateDashboardEmailReports**: string
* **CreateAndUpdateDatasets**: string
* **CreateAndUpdateDataSources**: string
* **CreateAndUpdateThemes**: string
* **CreateAndUpdateThresholdAlerts**: string
* **CreateSharedFolders**: string
* **CreateSPICEDataset**: string
* **ExportToCsv**: string
* **ExportToExcel**: string
* **RenameSharedFolders**: string
* **ShareAnalyses**: string
* **ShareDashboards**: string
* **ShareDatasets**: string
* **ShareDataSources**: string
* **SubscribeDashboardEmailReports**: string
* **ViewAccountSPICECapacity**: string

## CascadingControlConfiguration
### Properties
* **SourceControls**: [CascadingControlSource](#cascadingcontrolsource)[]

## CascadingControlConfiguration
### Properties
* **SourceControls**: [CascadingControlSource](#cascadingcontrolsource)[]

## CascadingControlConfiguration
### Properties
* **SourceControls**: [CascadingControlSource](#cascadingcontrolsource)[]

## CascadingControlSource
### Properties
* **ColumnToMatch**: [ColumnIdentifier](#columnidentifier)
* **SourceSheetControlId**: string

## CascadingControlSource
### Properties
* **ColumnToMatch**: [ColumnIdentifier](#columnidentifier)
* **SourceSheetControlId**: string

## CascadingControlSource
### Properties
* **ColumnToMatch**: [ColumnIdentifier](#columnidentifier)
* **SourceSheetControlId**: string

## CategoricalDimensionField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [StringFormatConfiguration](#stringformatconfiguration)
* **HierarchyId**: string

## CategoricalDimensionField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [StringFormatConfiguration](#stringformatconfiguration)
* **HierarchyId**: string

## CategoricalDimensionField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [StringFormatConfiguration](#stringformatconfiguration)
* **HierarchyId**: string

## CategoricalMeasureField
### Properties
* **AggregationFunction**: string
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [StringFormatConfiguration](#stringformatconfiguration)

## CategoricalMeasureField
### Properties
* **AggregationFunction**: string
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [StringFormatConfiguration](#stringformatconfiguration)

## CategoricalMeasureField
### Properties
* **AggregationFunction**: string
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [StringFormatConfiguration](#stringformatconfiguration)

## CategoryDrillDownFilter
### Properties
* **CategoryValues**: string[] (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)

## CategoryDrillDownFilter
### Properties
* **CategoryValues**: string[] (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)

## CategoryDrillDownFilter
### Properties
* **CategoryValues**: string[] (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)

## CategoryFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **Configuration**: [CategoryFilterConfiguration](#categoryfilterconfiguration) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)
* **FilterId**: string (Required)

## CategoryFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **Configuration**: [CategoryFilterConfiguration](#categoryfilterconfiguration) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)
* **FilterId**: string (Required)

## CategoryFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **Configuration**: [CategoryFilterConfiguration](#categoryfilterconfiguration) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)
* **FilterId**: string (Required)

## CategoryFilterConfiguration
### Properties
* **CustomFilterConfiguration**: [CustomFilterConfiguration](#customfilterconfiguration)
* **CustomFilterListConfiguration**: [CustomFilterListConfiguration](#customfilterlistconfiguration)
* **FilterListConfiguration**: [FilterListConfiguration](#filterlistconfiguration)

## CategoryFilterConfiguration
### Properties
* **CustomFilterConfiguration**: [CustomFilterConfiguration](#customfilterconfiguration)
* **CustomFilterListConfiguration**: [CustomFilterListConfiguration](#customfilterlistconfiguration)
* **FilterListConfiguration**: [FilterListConfiguration](#filterlistconfiguration)

## CategoryFilterConfiguration
### Properties
* **CustomFilterConfiguration**: [CustomFilterConfiguration](#customfilterconfiguration)
* **CustomFilterListConfiguration**: [CustomFilterListConfiguration](#customfilterlistconfiguration)
* **FilterListConfiguration**: [FilterListConfiguration](#filterlistconfiguration)

## CategoryInnerFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **Configuration**: [CategoryFilterConfiguration](#categoryfilterconfiguration) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)

## CategoryInnerFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **Configuration**: [CategoryFilterConfiguration](#categoryfilterconfiguration) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)

## CategoryInnerFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **Configuration**: [CategoryFilterConfiguration](#categoryfilterconfiguration) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)

## CellValueSynonym
### Properties
* **CellValue**: string
* **Synonyms**: string[]

## ChartAxisLabelOptions
### Properties
* **AxisLabelOptions**: [AxisLabelOptions](#axislabeloptions)[]
* **SortIconVisibility**: string
* **Visibility**: string

## ChartAxisLabelOptions
### Properties
* **AxisLabelOptions**: [AxisLabelOptions](#axislabeloptions)[]
* **SortIconVisibility**: string
* **Visibility**: string

## ChartAxisLabelOptions
### Properties
* **AxisLabelOptions**: [AxisLabelOptions](#axislabeloptions)[]
* **SortIconVisibility**: [Template_SortIconVisibility](#templatesorticonvisibility)
* **Visibility**: [Template_Visibility](#templatevisibility)

## ClusterMarker
### Properties
* **SimpleClusterMarker**: [SimpleClusterMarker](#simpleclustermarker)

## ClusterMarker
### Properties
* **SimpleClusterMarker**: [SimpleClusterMarker](#simpleclustermarker)

## ClusterMarker
### Properties
* **SimpleClusterMarker**: [SimpleClusterMarker](#simpleclustermarker)

## ClusterMarkerConfiguration
### Properties
* **ClusterMarker**: [ClusterMarker](#clustermarker)

## ClusterMarkerConfiguration
### Properties
* **ClusterMarker**: [ClusterMarker](#clustermarker)

## ClusterMarkerConfiguration
### Properties
* **ClusterMarker**: [ClusterMarker](#clustermarker)

## CollectiveConstant
### Properties
* **ValueList**: string[]

## ColorScale
### Properties
* **ColorFillType**: string (Required)
* **Colors**: [DataColor](#datacolor)[] (Required)
* **NullValueColor**: [DataColor](#datacolor)

## ColorScale
### Properties
* **ColorFillType**: string (Required)
* **Colors**: [DataColor](#datacolor)[] (Required)
* **NullValueColor**: [DataColor](#datacolor)

## ColorScale
### Properties
* **ColorFillType**: string (Required)
* **Colors**: [DataColor](#datacolor)[] (Required)
* **NullValueColor**: [DataColor](#datacolor)

## ColorsConfiguration
### Properties
* **CustomColors**: [CustomColor](#customcolor)[]

## ColorsConfiguration
### Properties
* **CustomColors**: [CustomColor](#customcolor)[]

## ColorsConfiguration
### Properties
* **CustomColors**: [CustomColor](#customcolor)[]

## ColumnConfiguration
### Properties
* **ColorsConfiguration**: [ColorsConfiguration](#colorsconfiguration)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FormatConfiguration**: [FormatConfiguration](#formatconfiguration)
* **Role**: string

## ColumnConfiguration
### Properties
* **ColorsConfiguration**: [ColorsConfiguration](#colorsconfiguration)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FormatConfiguration**: [FormatConfiguration](#formatconfiguration)
* **Role**: string

## ColumnConfiguration
### Properties
* **ColorsConfiguration**: [ColorsConfiguration](#colorsconfiguration)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FormatConfiguration**: [FormatConfiguration](#formatconfiguration)
* **Role**: string

## ColumnGroup
### Properties
* **GeoSpatialColumnGroup**: [GeoSpatialColumnGroup](#geospatialcolumngroup)

## ColumnGroupColumnSchema
### Properties
* **Name**: string: <p>The name of the column group's column schema.</p>

## ColumnGroupSchema
### Properties
* **ColumnGroupColumnSchemaList**: [ColumnGroupColumnSchema](#columngroupcolumnschema)[]: <p>A structure containing the list of schemas for column group columns.</p>
* **Name**: string: <p>The name of the column group schema.</p>

## ColumnHierarchy
### Properties
* **DateTimeHierarchy**: [DateTimeHierarchy](#datetimehierarchy)
* **ExplicitHierarchy**: [ExplicitHierarchy](#explicithierarchy)
* **PredefinedHierarchy**: [PredefinedHierarchy](#predefinedhierarchy)

## ColumnHierarchy
### Properties
* **DateTimeHierarchy**: [DateTimeHierarchy](#datetimehierarchy)
* **ExplicitHierarchy**: [ExplicitHierarchy](#explicithierarchy)
* **PredefinedHierarchy**: [PredefinedHierarchy](#predefinedhierarchy)

## ColumnHierarchy
### Properties
* **DateTimeHierarchy**: [DateTimeHierarchy](#datetimehierarchy)
* **ExplicitHierarchy**: [ExplicitHierarchy](#explicithierarchy)
* **PredefinedHierarchy**: [PredefinedHierarchy](#predefinedhierarchy)

## ColumnIdentifier
### Properties
* **ColumnName**: string (Required)
* **DataSetIdentifier**: string (Required)

## ColumnIdentifier
### Properties
* **ColumnName**: string (Required)
* **DataSetIdentifier**: string (Required)

## ColumnIdentifier
### Properties
* **ColumnName**: string (Required)
* **DataSetIdentifier**: string (Required)

## ColumnLevelPermissionRule
### Properties
* **ColumnNames**: string[]: <p>An array of column names.</p>
* **Principals**: string[]: <p>An array of Amazon Resource Names (ARNs) for Amazon QuickSight users or groups.</p>

## ColumnSchema
### Properties
* **DataType**: string: <p>The data type of the column schema.</p>
* **GeographicRole**: string: <p>The geographic role of the column schema.</p>
* **Name**: string: <p>The name of the column schema.</p>

## ColumnSort
### Properties
* **AggregationFunction**: [AggregationFunction](#aggregationfunction)
* **Direction**: string (Required)
* **SortBy**: [ColumnIdentifier](#columnidentifier) (Required)

## ColumnSort
### Properties
* **AggregationFunction**: [AggregationFunction](#aggregationfunction)
* **Direction**: string (Required)
* **SortBy**: [ColumnIdentifier](#columnidentifier) (Required)

## ColumnSort
### Properties
* **AggregationFunction**: [AggregationFunction](#aggregationfunction)
* **Direction**: string (Required)
* **SortBy**: [ColumnIdentifier](#columnidentifier) (Required)

## ColumnTooltipItem
### Properties
* **Aggregation**: [AggregationFunction](#aggregationfunction)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **Label**: string
* **TooltipTarget**: string
* **Visibility**: string

## ColumnTooltipItem
### Properties
* **Aggregation**: [AggregationFunction](#aggregationfunction)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **Label**: string
* **TooltipTarget**: string
* **Visibility**: string

## ColumnTooltipItem
### Properties
* **Aggregation**: [AggregationFunction](#aggregationfunction)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **Label**: string
* **TooltipTarget**: string
* **Visibility**: [Template_Visibility](#templatevisibility)

## ComboChartAggregatedFieldWells
### Properties
* **BarValues**: [MeasureField](#measurefield)[]
* **Category**: [DimensionField](#dimensionfield)[]
* **Colors**: [DimensionField](#dimensionfield)[]
* **LineValues**: [MeasureField](#measurefield)[]

## ComboChartAggregatedFieldWells
### Properties
* **BarValues**: [MeasureField](#measurefield)[]
* **Category**: [DimensionField](#dimensionfield)[]
* **Colors**: [DimensionField](#dimensionfield)[]
* **LineValues**: [MeasureField](#measurefield)[]

## ComboChartAggregatedFieldWells
### Properties
* **BarValues**: [MeasureField](#measurefield)[]
* **Category**: [DimensionField](#dimensionfield)[]
* **Colors**: [DimensionField](#dimensionfield)[]
* **LineValues**: [MeasureField](#measurefield)[]

## ComboChartConfiguration
### Properties
* **BarDataLabels**: [DataLabelOptions](#datalabeloptions)
* **BarsArrangement**: string
* **CategoryAxis**: [AxisDisplayOptions](#axisdisplayoptions)
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ColorLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **FieldWells**: [ComboChartFieldWells](#combochartfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **LineDataLabels**: [DataLabelOptions](#datalabeloptions)
* **PrimaryYAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **PrimaryYAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ReferenceLines**: [ReferenceLine](#referenceline)[]
* **SecondaryYAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **SecondaryYAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **SingleAxisOptions**: [SingleAxisOptions](#singleaxisoptions)
* **SortConfiguration**: [ComboChartSortConfiguration](#combochartsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **VisualPalette**: [VisualPalette](#visualpalette)

## ComboChartConfiguration
### Properties
* **BarDataLabels**: [DataLabelOptions](#datalabeloptions)
* **BarsArrangement**: string
* **CategoryAxis**: [AxisDisplayOptions](#axisdisplayoptions)
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ColorLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **FieldWells**: [ComboChartFieldWells](#combochartfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **LineDataLabels**: [DataLabelOptions](#datalabeloptions)
* **PrimaryYAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **PrimaryYAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ReferenceLines**: [ReferenceLine](#referenceline)[]
* **SecondaryYAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **SecondaryYAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **SingleAxisOptions**: [SingleAxisOptions](#singleaxisoptions)
* **SortConfiguration**: [ComboChartSortConfiguration](#combochartsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **VisualPalette**: [VisualPalette](#visualpalette)

## ComboChartConfiguration
### Properties
* **BarDataLabels**: [DataLabelOptions](#datalabeloptions)
* **BarsArrangement**: string
* **CategoryAxis**: [AxisDisplayOptions](#axisdisplayoptions)
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ColorLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **FieldWells**: [ComboChartFieldWells](#combochartfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **LineDataLabels**: [DataLabelOptions](#datalabeloptions)
* **PrimaryYAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **PrimaryYAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ReferenceLines**: [ReferenceLine](#referenceline)[]
* **SecondaryYAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **SecondaryYAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **SingleAxisOptions**: [SingleAxisOptions](#singleaxisoptions)
* **SortConfiguration**: [ComboChartSortConfiguration](#combochartsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **VisualPalette**: [VisualPalette](#visualpalette)

## ComboChartFieldWells
### Properties
* **ComboChartAggregatedFieldWells**: [ComboChartAggregatedFieldWells](#combochartaggregatedfieldwells)

## ComboChartFieldWells
### Properties
* **ComboChartAggregatedFieldWells**: [ComboChartAggregatedFieldWells](#combochartaggregatedfieldwells)

## ComboChartFieldWells
### Properties
* **ComboChartAggregatedFieldWells**: [ComboChartAggregatedFieldWells](#combochartaggregatedfieldwells)

## ComboChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **ColorSort**: [FieldSortOptions](#fieldsortoptions)[]

## ComboChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **ColorSort**: [FieldSortOptions](#fieldsortoptions)[]

## ComboChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **ColorSort**: [FieldSortOptions](#fieldsortoptions)[]

## ComboChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [ComboChartConfiguration](#combochartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## ComboChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [ComboChartConfiguration](#combochartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## ComboChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [ComboChartConfiguration](#combochartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## ComparativeOrder
### Properties
* **SpecifedOrder**: string[]
* **TreatUndefinedSpecifiedValues**: string
* **UseOrdering**: string

## ComparisonConfiguration
### Properties
* **ComparisonFormat**: [ComparisonFormatConfiguration](#comparisonformatconfiguration)
* **ComparisonMethod**: string

## ComparisonConfiguration
### Properties
* **ComparisonFormat**: [ComparisonFormatConfiguration](#comparisonformatconfiguration)
* **ComparisonMethod**: string

## ComparisonConfiguration
### Properties
* **ComparisonFormat**: [ComparisonFormatConfiguration](#comparisonformatconfiguration)
* **ComparisonMethod**: string

## ComparisonFormatConfiguration
### Properties
* **NumberDisplayFormatConfiguration**: [NumberDisplayFormatConfiguration](#numberdisplayformatconfiguration)
* **PercentageDisplayFormatConfiguration**: [PercentageDisplayFormatConfiguration](#percentagedisplayformatconfiguration)

## ComparisonFormatConfiguration
### Properties
* **NumberDisplayFormatConfiguration**: [NumberDisplayFormatConfiguration](#numberdisplayformatconfiguration)
* **PercentageDisplayFormatConfiguration**: [PercentageDisplayFormatConfiguration](#percentagedisplayformatconfiguration)

## ComparisonFormatConfiguration
### Properties
* **NumberDisplayFormatConfiguration**: [NumberDisplayFormatConfiguration](#numberdisplayformatconfiguration)
* **PercentageDisplayFormatConfiguration**: [PercentageDisplayFormatConfiguration](#percentagedisplayformatconfiguration)

## Computation
### Properties
* **Forecast**: [ForecastComputation](#forecastcomputation)
* **GrowthRate**: [GrowthRateComputation](#growthratecomputation)
* **MaximumMinimum**: [MaximumMinimumComputation](#maximumminimumcomputation)
* **MetricComparison**: [MetricComparisonComputation](#metriccomparisoncomputation)
* **PeriodOverPeriod**: [PeriodOverPeriodComputation](#periodoverperiodcomputation)
* **PeriodToDate**: [PeriodToDateComputation](#periodtodatecomputation)
* **TopBottomMovers**: [TopBottomMoversComputation](#topbottommoverscomputation)
* **TopBottomRanked**: [TopBottomRankedComputation](#topbottomrankedcomputation)
* **TotalAggregation**: [TotalAggregationComputation](#totalaggregationcomputation)
* **UniqueValues**: [UniqueValuesComputation](#uniquevaluescomputation)

## Computation
### Properties
* **Forecast**: [ForecastComputation](#forecastcomputation)
* **GrowthRate**: [GrowthRateComputation](#growthratecomputation)
* **MaximumMinimum**: [MaximumMinimumComputation](#maximumminimumcomputation)
* **MetricComparison**: [MetricComparisonComputation](#metriccomparisoncomputation)
* **PeriodOverPeriod**: [PeriodOverPeriodComputation](#periodoverperiodcomputation)
* **PeriodToDate**: [PeriodToDateComputation](#periodtodatecomputation)
* **TopBottomMovers**: [TopBottomMoversComputation](#topbottommoverscomputation)
* **TopBottomRanked**: [TopBottomRankedComputation](#topbottomrankedcomputation)
* **TotalAggregation**: [TotalAggregationComputation](#totalaggregationcomputation)
* **UniqueValues**: [UniqueValuesComputation](#uniquevaluescomputation)

## Computation
### Properties
* **Forecast**: [ForecastComputation](#forecastcomputation)
* **GrowthRate**: [GrowthRateComputation](#growthratecomputation)
* **MaximumMinimum**: [MaximumMinimumComputation](#maximumminimumcomputation)
* **MetricComparison**: [MetricComparisonComputation](#metriccomparisoncomputation)
* **PeriodOverPeriod**: [PeriodOverPeriodComputation](#periodoverperiodcomputation)
* **PeriodToDate**: [PeriodToDateComputation](#periodtodatecomputation)
* **TopBottomMovers**: [TopBottomMoversComputation](#topbottommoverscomputation)
* **TopBottomRanked**: [TopBottomRankedComputation](#topbottomrankedcomputation)
* **TotalAggregation**: [TotalAggregationComputation](#totalaggregationcomputation)
* **UniqueValues**: [UniqueValuesComputation](#uniquevaluescomputation)

## ConditionalFormattingColor
### Properties
* **Gradient**: [ConditionalFormattingGradientColor](#conditionalformattinggradientcolor)
* **Solid**: [ConditionalFormattingSolidColor](#conditionalformattingsolidcolor)

## ConditionalFormattingColor
### Properties
* **Gradient**: [ConditionalFormattingGradientColor](#conditionalformattinggradientcolor)
* **Solid**: [ConditionalFormattingSolidColor](#conditionalformattingsolidcolor)

## ConditionalFormattingColor
### Properties
* **Gradient**: [ConditionalFormattingGradientColor](#conditionalformattinggradientcolor)
* **Solid**: [ConditionalFormattingSolidColor](#conditionalformattingsolidcolor)

## ConditionalFormattingCustomIconCondition
### Properties
* **Color**: string
* **DisplayConfiguration**: [ConditionalFormattingIconDisplayConfiguration](#conditionalformattingicondisplayconfiguration)
* **Expression**: string (Required)
* **IconOptions**: [ConditionalFormattingCustomIconOptions](#conditionalformattingcustomiconoptions) (Required)

## ConditionalFormattingCustomIconCondition
### Properties
* **Color**: string
* **DisplayConfiguration**: [ConditionalFormattingIconDisplayConfiguration](#conditionalformattingicondisplayconfiguration)
* **Expression**: string (Required)
* **IconOptions**: [ConditionalFormattingCustomIconOptions](#conditionalformattingcustomiconoptions) (Required)

## ConditionalFormattingCustomIconCondition
### Properties
* **Color**: string
* **DisplayConfiguration**: [ConditionalFormattingIconDisplayConfiguration](#conditionalformattingicondisplayconfiguration)
* **Expression**: string (Required)
* **IconOptions**: [ConditionalFormattingCustomIconOptions](#conditionalformattingcustomiconoptions) (Required)

## ConditionalFormattingCustomIconOptions
### Properties
* **Icon**: string
* **UnicodeIcon**: string

## ConditionalFormattingCustomIconOptions
### Properties
* **Icon**: string
* **UnicodeIcon**: string

## ConditionalFormattingCustomIconOptions
### Properties
* **Icon**: string
* **UnicodeIcon**: string

## ConditionalFormattingGradientColor
### Properties
* **Color**: [GradientColor](#gradientcolor) (Required)
* **Expression**: string (Required)

## ConditionalFormattingGradientColor
### Properties
* **Color**: [GradientColor](#gradientcolor) (Required)
* **Expression**: string (Required)

## ConditionalFormattingGradientColor
### Properties
* **Color**: [GradientColor](#gradientcolor) (Required)
* **Expression**: string (Required)

## ConditionalFormattingIcon
### Properties
* **CustomCondition**: [ConditionalFormattingCustomIconCondition](#conditionalformattingcustomiconcondition)
* **IconSet**: [ConditionalFormattingIconSet](#conditionalformattingiconset)

## ConditionalFormattingIcon
### Properties
* **CustomCondition**: [ConditionalFormattingCustomIconCondition](#conditionalformattingcustomiconcondition)
* **IconSet**: [ConditionalFormattingIconSet](#conditionalformattingiconset)

## ConditionalFormattingIcon
### Properties
* **CustomCondition**: [ConditionalFormattingCustomIconCondition](#conditionalformattingcustomiconcondition)
* **IconSet**: [ConditionalFormattingIconSet](#conditionalformattingiconset)

## ConditionalFormattingIconDisplayConfiguration
### Properties
* **IconDisplayOption**: string

## ConditionalFormattingIconDisplayConfiguration
### Properties
* **IconDisplayOption**: string

## ConditionalFormattingIconDisplayConfiguration
### Properties
* **IconDisplayOption**: string

## ConditionalFormattingIconSet
### Properties
* **Expression**: string (Required)
* **IconSetType**: string

## ConditionalFormattingIconSet
### Properties
* **Expression**: string (Required)
* **IconSetType**: string

## ConditionalFormattingIconSet
### Properties
* **Expression**: string (Required)
* **IconSetType**: string

## ConditionalFormattingSolidColor
### Properties
* **Color**: string
* **Expression**: string (Required)

## ConditionalFormattingSolidColor
### Properties
* **Color**: string
* **Expression**: string (Required)

## ConditionalFormattingSolidColor
### Properties
* **Color**: string
* **Expression**: string (Required)

## ContributionAnalysisDefault
### Properties
* **ContributorDimensions**: [ColumnIdentifier](#columnidentifier)[] (Required)
* **MeasureFieldId**: string (Required)

## ContributionAnalysisDefault
### Properties
* **ContributorDimensions**: [ColumnIdentifier](#columnidentifier)[] (Required)
* **MeasureFieldId**: string (Required)

## ContributionAnalysisDefault
### Properties
* **ContributorDimensions**: [ColumnIdentifier](#columnidentifier)[] (Required)
* **MeasureFieldId**: string (Required)

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

## CurrencyDisplayFormatConfiguration
### Properties
* **DecimalPlacesConfiguration**: [DecimalPlacesConfiguration](#decimalplacesconfiguration)
* **NegativeValueConfiguration**: [NegativeValueConfiguration](#negativevalueconfiguration)
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **NumberScale**: string
* **Prefix**: string
* **SeparatorConfiguration**: [NumericSeparatorConfiguration](#numericseparatorconfiguration)
* **Suffix**: string
* **Symbol**: string

## CurrencyDisplayFormatConfiguration
### Properties
* **DecimalPlacesConfiguration**: [DecimalPlacesConfiguration](#decimalplacesconfiguration)
* **NegativeValueConfiguration**: [NegativeValueConfiguration](#negativevalueconfiguration)
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **NumberScale**: string
* **Prefix**: string
* **SeparatorConfiguration**: [NumericSeparatorConfiguration](#numericseparatorconfiguration)
* **Suffix**: string
* **Symbol**: string

## CurrencyDisplayFormatConfiguration
### Properties
* **DecimalPlacesConfiguration**: [DecimalPlacesConfiguration](#decimalplacesconfiguration)
* **NegativeValueConfiguration**: [NegativeValueConfiguration](#negativevalueconfiguration)
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **NumberScale**: string
* **Prefix**: string
* **SeparatorConfiguration**: [NumericSeparatorConfiguration](#numericseparatorconfiguration)
* **Suffix**: string
* **Symbol**: string

## CustomActionFilterOperation
### Properties
* **SelectedFieldsConfiguration**: [FilterOperationSelectedFieldsConfiguration](#filteroperationselectedfieldsconfiguration) (Required)
* **TargetVisualsConfiguration**: [FilterOperationTargetVisualsConfiguration](#filteroperationtargetvisualsconfiguration) (Required)

## CustomActionFilterOperation
### Properties
* **SelectedFieldsConfiguration**: [FilterOperationSelectedFieldsConfiguration](#filteroperationselectedfieldsconfiguration) (Required)
* **TargetVisualsConfiguration**: [FilterOperationTargetVisualsConfiguration](#filteroperationtargetvisualsconfiguration) (Required)

## CustomActionFilterOperation
### Properties
* **SelectedFieldsConfiguration**: [FilterOperationSelectedFieldsConfiguration](#filteroperationselectedfieldsconfiguration) (Required)
* **TargetVisualsConfiguration**: [FilterOperationTargetVisualsConfiguration](#filteroperationtargetvisualsconfiguration) (Required)

## CustomActionNavigationOperation
### Properties
* **LocalNavigationConfiguration**: [LocalNavigationConfiguration](#localnavigationconfiguration)

## CustomActionNavigationOperation
### Properties
* **LocalNavigationConfiguration**: [LocalNavigationConfiguration](#localnavigationconfiguration)

## CustomActionNavigationOperation
### Properties
* **LocalNavigationConfiguration**: [LocalNavigationConfiguration](#localnavigationconfiguration)

## CustomActionSetParametersOperation
### Properties
* **ParameterValueConfigurations**: [SetParameterValueConfiguration](#setparametervalueconfiguration)[] (Required)

## CustomActionSetParametersOperation
### Properties
* **ParameterValueConfigurations**: [SetParameterValueConfiguration](#setparametervalueconfiguration)[] (Required)

## CustomActionSetParametersOperation
### Properties
* **ParameterValueConfigurations**: [SetParameterValueConfiguration](#setparametervalueconfiguration)[] (Required)

## CustomActionURLOperation
### Properties
* **URLTarget**: string (Required)
* **URLTemplate**: string (Required)

## CustomActionURLOperation
### Properties
* **URLTarget**: string (Required)
* **URLTemplate**: string (Required)

## CustomActionURLOperation
### Properties
* **URLTarget**: string (Required)
* **URLTemplate**: string (Required)

## CustomColor
### Properties
* **Color**: string (Required)
* **FieldValue**: string
* **SpecialValue**: string

## CustomColor
### Properties
* **Color**: string (Required)
* **FieldValue**: string
* **SpecialValue**: string

## CustomColor
### Properties
* **Color**: string (Required)
* **FieldValue**: string
* **SpecialValue**: string

## CustomContentConfiguration
### Properties
* **ContentType**: string
* **ContentUrl**: string
* **ImageScaling**: string

## CustomContentConfiguration
### Properties
* **ContentType**: string
* **ContentUrl**: string
* **ImageScaling**: string

## CustomContentConfiguration
### Properties
* **ContentType**: string
* **ContentUrl**: string
* **ImageScaling**: string

## CustomContentVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [CustomContentConfiguration](#customcontentconfiguration)
* **DataSetIdentifier**: string (Required)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## CustomContentVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [CustomContentConfiguration](#customcontentconfiguration)
* **DataSetIdentifier**: string (Required)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## CustomContentVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [CustomContentConfiguration](#customcontentconfiguration)
* **DataSetIdentifier**: string (Required)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## CustomFilterConfiguration
### Properties
* **CategoryValue**: string
* **MatchOperator**: string (Required)
* **NullOption**: string (Required)
* **ParameterName**: string
* **SelectAllOptions**: string

## CustomFilterConfiguration
### Properties
* **CategoryValue**: string
* **MatchOperator**: string (Required)
* **NullOption**: string (Required)
* **ParameterName**: string
* **SelectAllOptions**: string

## CustomFilterConfiguration
### Properties
* **CategoryValue**: string
* **MatchOperator**: string (Required)
* **NullOption**: string (Required)
* **ParameterName**: string
* **SelectAllOptions**: string

## CustomFilterListConfiguration
### Properties
* **CategoryValues**: string[]
* **MatchOperator**: string (Required)
* **NullOption**: string (Required)
* **SelectAllOptions**: string

## CustomFilterListConfiguration
### Properties
* **CategoryValues**: string[]
* **MatchOperator**: string (Required)
* **NullOption**: string (Required)
* **SelectAllOptions**: string

## CustomFilterListConfiguration
### Properties
* **CategoryValues**: string[]
* **MatchOperator**: string (Required)
* **NullOption**: string (Required)
* **SelectAllOptions**: string

## CustomNarrativeOptions
### Properties
* **Narrative**: string (Required)

## CustomNarrativeOptions
### Properties
* **Narrative**: string (Required)

## CustomNarrativeOptions
### Properties
* **Narrative**: string (Required)

## CustomParameterValues
### Properties
* **DateTimeValues**: string[]
* **DecimalValues**: int[]
* **IntegerValues**: int[]
* **StringValues**: string[]

## CustomParameterValues
### Properties
* **DateTimeValues**: string[]
* **DecimalValues**: int[]
* **IntegerValues**: int[]
* **StringValues**: string[]

## CustomParameterValues
### Properties
* **DateTimeValues**: string[]
* **DecimalValues**: int[]
* **IntegerValues**: int[]
* **StringValues**: string[]

## CustomValuesConfiguration
### Properties
* **CustomValues**: [CustomParameterValues](#customparametervalues) (Required)
* **IncludeNullValue**: bool

## CustomValuesConfiguration
### Properties
* **CustomValues**: [CustomParameterValues](#customparametervalues) (Required)
* **IncludeNullValue**: bool

## CustomValuesConfiguration
### Properties
* **CustomValues**: [CustomParameterValues](#customparametervalues) (Required)
* **IncludeNullValue**: bool

## Dashboard_Interactions
### Properties

## Dashboard_Interactions
### Properties

## Dashboard_VisualMenuOption
### Properties

## DashboardError
### Properties
* **Message**: string: <p>Message.</p>
* **Type**: string
* **ViolatedEntities**: [Entity](#entity)[]: <p>Lists the violated entities that caused the dashboard error.</p>

## DashboardPublishOptions
### Properties
* **AdHocFilteringOption**: [AdHocFilteringOption](#adhocfilteringoption)
* **DataPointDrillUpDownOption**: [DataPointDrillUpDownOption](#datapointdrillupdownoption)
* **DataPointMenuLabelOption**: [DataPointMenuLabelOption](#datapointmenulabeloption)
* **DataPointTooltipOption**: [DataPointTooltipOption](#datapointtooltipoption)
* **ExportToCSVOption**: [ExportToCSVOption](#exporttocsvoption)
* **ExportWithHiddenFieldsOption**: [ExportWithHiddenFieldsOption](#exportwithhiddenfieldsoption)
* **SheetControlsOption**: [SheetControlsOption](#sheetcontrolsoption)
* **SheetLayoutElementMaximizationOption**: [SheetLayoutElementMaximizationOption](#sheetlayoutelementmaximizationoption)
* **VisualAxisSortOption**: [VisualAxisSortOption](#visualaxissortoption)
* **VisualMenuOption**: [Dashboard_VisualMenuOption](#dashboardvisualmenuoption)
* **VisualPublishOptions**: [DashboardVisualPublishOptions](#dashboardvisualpublishoptions)

## DashboardSourceEntity
### Properties
* **SourceTemplate**: [DashboardSourceTemplate](#dashboardsourcetemplate)

## DashboardSourceTemplate
### Properties
* **Arn**: string (Required): <p>The Amazon Resource Name (ARN) of the resource.</p>
* **DataSetReferences**: [DataSetReference](#datasetreference)[] (Required): <p>Dataset references.</p>

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
* **Status**: string
* **ThemeArn**: string: <p>The ARN of the theme associated with a version of the dashboard.</p>
* **VersionNumber**: int: <p>Version number for this version of the dashboard.</p>

## DashboardVersionDefinition
### Properties
* **AnalysisDefaults**: [AnalysisDefaults](#analysisdefaults)
* **CalculatedFields**: [CalculatedField](#calculatedfield)[]
* **ColumnConfigurations**: [ColumnConfiguration](#columnconfiguration)[]
* **DataSetIdentifierDeclarations**: [DataSetIdentifierDeclaration](#datasetidentifierdeclaration)[] (Required)
* **FilterGroups**: [FilterGroup](#filtergroup)[]
* **Options**: [AssetOptions](#assetoptions)
* **ParameterDeclarations**: [ParameterDeclaration](#parameterdeclaration)[]
* **Sheets**: [SheetDefinition](#sheetdefinition)[]
* **StaticFiles**: [StaticFile](#staticfile)[]

## DashboardVisualPublishOptions
### Properties
* **ExportHiddenFieldsOption**: [ExportHiddenFieldsOption](#exporthiddenfieldsoption)

## DataAggregation
### Properties
* **DatasetRowDateGranularity**: string
* **DefaultDateColumnName**: string

## DataBarsOptions
### Properties
* **FieldId**: string (Required)
* **NegativeColor**: string
* **PositiveColor**: string

## DataBarsOptions
### Properties
* **FieldId**: string (Required)
* **NegativeColor**: string
* **PositiveColor**: string

## DataBarsOptions
### Properties
* **FieldId**: string (Required)
* **NegativeColor**: string
* **PositiveColor**: string

## DatabricksParameters
### Properties
* **Host**: string (Required): <p>The host name of the Databricks data source.</p>
* **Port**: int (Required): <p>The port for the Databricks data source.</p>
* **SqlEndpointPath**: string (Required): <p>The HTTP path of the Databricks data source.</p>

## DataColor
### Properties
* **Color**: string
* **DataValue**: int

## DataColor
### Properties
* **Color**: string
* **DataValue**: int

## DataColor
### Properties
* **Color**: string
* **DataValue**: int

## DataColorPalette
### Properties
* **Colors**: string[]: <p>The hexadecimal codes for the colors.</p>
* **EmptyFillColor**: string: <p>The hexadecimal code of a color that applies to charts where a lack of data is
            highlighted.</p>
* **MinMaxGradient**: string[]: <p>The minimum and maximum hexadecimal codes that describe a color gradient. </p>

## DataFieldSeriesItem
### Properties
* **AxisBinding**: string (Required)
* **FieldId**: string (Required)
* **FieldValue**: string
* **Settings**: [LineChartSeriesSettings](#linechartseriessettings)

## DataFieldSeriesItem
### Properties
* **AxisBinding**: string (Required)
* **FieldId**: string (Required)
* **FieldValue**: string
* **Settings**: [LineChartSeriesSettings](#linechartseriessettings)

## DataFieldSeriesItem
### Properties
* **AxisBinding**: string (Required)
* **FieldId**: string (Required)
* **FieldValue**: string
* **Settings**: [LineChartSeriesSettings](#linechartseriessettings)

## DataLabelOptions
### Properties
* **CategoryLabelVisibility**: string
* **DataLabelTypes**: [DataLabelType](#datalabeltype)[]
* **LabelColor**: string
* **LabelContent**: string
* **LabelFontConfiguration**: [FontConfiguration](#fontconfiguration)
* **MeasureLabelVisibility**: string
* **Overlap**: string
* **Position**: string
* **TotalsVisibility**: string
* **Visibility**: string

## DataLabelOptions
### Properties
* **CategoryLabelVisibility**: string
* **DataLabelTypes**: [DataLabelType](#datalabeltype)[]
* **LabelColor**: string
* **LabelContent**: string
* **LabelFontConfiguration**: [FontConfiguration](#fontconfiguration)
* **MeasureLabelVisibility**: string
* **Overlap**: string
* **Position**: string
* **TotalsVisibility**: string
* **Visibility**: string

## DataLabelOptions
### Properties
* **CategoryLabelVisibility**: [Template_CategoryLabelVisibility](#templatecategorylabelvisibility)
* **DataLabelTypes**: [DataLabelType](#datalabeltype)[]
* **LabelColor**: string
* **LabelContent**: string
* **LabelFontConfiguration**: [FontConfiguration](#fontconfiguration)
* **MeasureLabelVisibility**: [Template_MeasureLabelVisibility](#templatemeasurelabelvisibility)
* **Overlap**: string
* **Position**: string
* **TotalsVisibility**: [Template_TotalsVisibility](#templatetotalsvisibility)
* **Visibility**: [Template_Visibility](#templatevisibility)

## DataLabelType
### Properties
* **DataPathLabelType**: [DataPathLabelType](#datapathlabeltype)
* **FieldLabelType**: [FieldLabelType](#fieldlabeltype)
* **MaximumLabelType**: [MaximumLabelType](#maximumlabeltype)
* **MinimumLabelType**: [MinimumLabelType](#minimumlabeltype)
* **RangeEndsLabelType**: [RangeEndsLabelType](#rangeendslabeltype)

## DataLabelType
### Properties
* **DataPathLabelType**: [DataPathLabelType](#datapathlabeltype)
* **FieldLabelType**: [FieldLabelType](#fieldlabeltype)
* **MaximumLabelType**: [MaximumLabelType](#maximumlabeltype)
* **MinimumLabelType**: [MinimumLabelType](#minimumlabeltype)
* **RangeEndsLabelType**: [RangeEndsLabelType](#rangeendslabeltype)

## DataLabelType
### Properties
* **DataPathLabelType**: [DataPathLabelType](#datapathlabeltype)
* **FieldLabelType**: [FieldLabelType](#fieldlabeltype)
* **MaximumLabelType**: [MaximumLabelType](#maximumlabeltype)
* **MinimumLabelType**: [MinimumLabelType](#minimumlabeltype)
* **RangeEndsLabelType**: [RangeEndsLabelType](#rangeendslabeltype)

## DataPathColor
### Properties
* **Color**: string (Required)
* **Element**: [DataPathValue](#datapathvalue) (Required)
* **TimeGranularity**: string

## DataPathColor
### Properties
* **Color**: string (Required)
* **Element**: [DataPathValue](#datapathvalue) (Required)
* **TimeGranularity**: string

## DataPathColor
### Properties
* **Color**: string (Required)
* **Element**: [DataPathValue](#datapathvalue) (Required)
* **TimeGranularity**: string

## DataPathLabelType
### Properties
* **FieldId**: string
* **FieldValue**: string
* **Visibility**: string

## DataPathLabelType
### Properties
* **FieldId**: string
* **FieldValue**: string
* **Visibility**: string

## DataPathLabelType
### Properties
* **FieldId**: string
* **FieldValue**: string
* **Visibility**: [Template_Visibility](#templatevisibility)

## DataPathSort
### Properties
* **Direction**: string (Required)
* **SortPaths**: [DataPathValue](#datapathvalue)[] (Required)

## DataPathSort
### Properties
* **Direction**: string (Required)
* **SortPaths**: [DataPathValue](#datapathvalue)[] (Required)

## DataPathSort
### Properties
* **Direction**: string (Required)
* **SortPaths**: [DataPathValue](#datapathvalue)[] (Required)

## DataPathType
### Properties
* **PivotTableDataPathType**: string

## DataPathType
### Properties
* **PivotTableDataPathType**: string

## DataPathType
### Properties
* **PivotTableDataPathType**: string

## DataPathValue
### Properties
* **DataPathType**: [DataPathType](#datapathtype)
* **FieldId**: string
* **FieldValue**: string

## DataPathValue
### Properties
* **DataPathType**: [DataPathType](#datapathtype)
* **FieldId**: string
* **FieldValue**: string

## DataPathValue
### Properties
* **DataPathType**: [DataPathType](#datapathtype)
* **FieldId**: string
* **FieldValue**: string

## DataPointDrillUpDownOption
### Properties
* **AvailabilityStatus**: string

## DataPointMenuLabelOption
### Properties
* **AvailabilityStatus**: string

## DataPointTooltipOption
### Properties
* **AvailabilityStatus**: string

## DataSetConfiguration
### Properties
* **ColumnGroupSchemaList**: [ColumnGroupSchema](#columngroupschema)[]: <p>A structure containing the list of column group schemas.</p>
* **DataSetSchema**: [DataSetSchema](#datasetschema)
* **Placeholder**: string: <p>Placeholder.</p>

## DataSetIdentifierDeclaration
### Properties
* **DataSetArn**: string (Required)
* **Identifier**: string (Required)

## DataSetIdentifierDeclaration
### Properties
* **DataSetArn**: string (Required)
* **Identifier**: string (Required)

## DatasetMetadata
### Properties
* **CalculatedFields**: [TopicCalculatedField](#topiccalculatedfield)[]
* **Columns**: [TopicColumn](#topiccolumn)[]
* **DataAggregation**: [DataAggregation](#dataaggregation)
* **DatasetArn**: string (Required)
* **DatasetDescription**: string
* **DatasetName**: string
* **Filters**: [TopicFilter](#topicfilter)[]
* **NamedEntities**: [TopicNamedEntity](#topicnamedentity)[]

## DatasetParameter
### Properties
* **DateTimeDatasetParameter**: [DateTimeDatasetParameter](#datetimedatasetparameter)
* **DecimalDatasetParameter**: [DecimalDatasetParameter](#decimaldatasetparameter)
* **IntegerDatasetParameter**: [IntegerDatasetParameter](#integerdatasetparameter)
* **StringDatasetParameter**: [StringDatasetParameter](#stringdatasetparameter)

## DataSetReference
### Properties
* **DataSetArn**: string (Required): <p>Dataset Amazon Resource Name (ARN).</p>
* **DataSetPlaceholder**: string (Required): <p>Dataset placeholder.</p>

## DataSetReference
### Properties
* **DataSetArn**: string (Required): <p>Dataset Amazon Resource Name (ARN).</p>
* **DataSetPlaceholder**: string (Required): <p>Dataset placeholder.</p>

## DataSetReference
### Properties
* **DataSetArn**: string (Required): <p>Dataset Amazon Resource Name (ARN).</p>
* **DataSetPlaceholder**: string (Required): <p>Dataset placeholder.</p>

## DataSetRefreshProperties
### Properties
* **RefreshConfiguration**: [RefreshConfiguration](#refreshconfiguration)

## DataSetSchema
### Properties
* **ColumnSchemaList**: [ColumnSchema](#columnschema)[]: <p>A structure containing the list of column schemas.</p>

## DataSetUsageConfiguration
### Properties
* **DisableUseAsDirectQuerySource**: bool: <p>An option that controls whether a child dataset of a direct query can use this dataset as a source.</p>
* **DisableUseAsImportedSource**: bool: <p>An option that controls whether a child dataset that's stored in QuickSight can use this dataset as a source.</p>

## DataSourceCredentials
### Properties
* **CopySourceArn**: string: <p>The Amazon Resource Name (ARN) of a data source that has the credential pair that you
            want to use. When <code>CopySourceArn</code> is not null, the credential pair from the
            data source in the ARN is used as the credentials for the
            <code>DataSourceCredentials</code> structure.</p>
* **CredentialPair**: [CredentialPair](#credentialpair)
* **SecretArn**: string: <p>The Amazon Resource Name (ARN) of the secret associated with the data source in Amazon Secrets Manager.</p>

## DataSourceErrorInfo
### Properties
* **Message**: string: <p>Error message.</p>
* **Type**: string

## DataSourceParameters
### Properties
* **AmazonElasticsearchParameters**: [AmazonElasticsearchParameters](#amazonelasticsearchparameters)
* **AmazonOpenSearchParameters**: [AmazonOpenSearchParameters](#amazonopensearchparameters)
* **AthenaParameters**: [AthenaParameters](#athenaparameters)
* **AuroraParameters**: [AuroraParameters](#auroraparameters)
* **AuroraPostgreSqlParameters**: [AuroraPostgreSqlParameters](#aurorapostgresqlparameters)
* **DatabricksParameters**: [DatabricksParameters](#databricksparameters)
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
* **StarburstParameters**: [StarburstParameters](#starburstparameters)
* **TeradataParameters**: [TeradataParameters](#teradataparameters)
* **TrinoParameters**: [TrinoParameters](#trinoparameters)

## DateAxisOptions
### Properties
* **MissingDateVisibility**: string

## DateAxisOptions
### Properties
* **MissingDateVisibility**: string

## DateAxisOptions
### Properties
* **MissingDateVisibility**: [Template_MissingDateVisibility](#templatemissingdatevisibility)

## DateDimensionField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DateGranularity**: string
* **FieldId**: string (Required)
* **FormatConfiguration**: [DateTimeFormatConfiguration](#datetimeformatconfiguration)
* **HierarchyId**: string

## DateDimensionField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DateGranularity**: string
* **FieldId**: string (Required)
* **FormatConfiguration**: [DateTimeFormatConfiguration](#datetimeformatconfiguration)
* **HierarchyId**: string

## DateDimensionField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DateGranularity**: string
* **FieldId**: string (Required)
* **FormatConfiguration**: [DateTimeFormatConfiguration](#datetimeformatconfiguration)
* **HierarchyId**: string

## DateMeasureField
### Properties
* **AggregationFunction**: string
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [DateTimeFormatConfiguration](#datetimeformatconfiguration)

## DateMeasureField
### Properties
* **AggregationFunction**: string
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [DateTimeFormatConfiguration](#datetimeformatconfiguration)

## DateMeasureField
### Properties
* **AggregationFunction**: string
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [DateTimeFormatConfiguration](#datetimeformatconfiguration)

## DateTimeDatasetParameter
### Properties
* **DefaultValues**: [DateTimeDatasetParameterDefaultValues](#datetimedatasetparameterdefaultvalues)
* **Id**: string (Required): <p>An identifier for the parameter that is created in the dataset.</p>
* **Name**: string (Required): <p>The name of the date time parameter that is created in the dataset.</p>
* **TimeGranularity**: string
* **ValueType**: string (Required)

## DateTimeDatasetParameterDefaultValues
### Properties
* **StaticValues**: string[]: <p>A list of static default values for a given date time parameter.</p>

## DateTimeDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **RollingDate**: [RollingDateConfiguration](#rollingdateconfiguration)
* **StaticValues**: string[]

## DateTimeDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **RollingDate**: [RollingDateConfiguration](#rollingdateconfiguration)
* **StaticValues**: string[]

## DateTimeDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **RollingDate**: [RollingDateConfiguration](#rollingdateconfiguration)
* **StaticValues**: string[]

## DateTimeFormatConfiguration
### Properties
* **DateTimeFormat**: string
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **NumericFormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)

## DateTimeFormatConfiguration
### Properties
* **DateTimeFormat**: string
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **NumericFormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)

## DateTimeFormatConfiguration
### Properties
* **DateTimeFormat**: string
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **NumericFormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)

## DateTimeHierarchy
### Properties
* **DrillDownFilters**: [DrillDownFilter](#drilldownfilter)[]
* **HierarchyId**: string (Required)

## DateTimeHierarchy
### Properties
* **DrillDownFilters**: [DrillDownFilter](#drilldownfilter)[]
* **HierarchyId**: string (Required)

## DateTimeHierarchy
### Properties
* **DrillDownFilters**: [DrillDownFilter](#drilldownfilter)[]
* **HierarchyId**: string (Required)

## DateTimeParameter
### Properties
* **Name**: string (Required): <p>A display name for the date-time parameter.</p>
* **Values**: string[] (Required): <p>The values for the date-time parameter.</p>

## DateTimeParameter
### Properties
* **Name**: string (Required): <p>A display name for the date-time parameter.</p>
* **Values**: string[] (Required): <p>The values for the date-time parameter.</p>

## DateTimeParameterDeclaration
### Properties
* **DefaultValues**: [DateTimeDefaultValues](#datetimedefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **TimeGranularity**: string
* **ValueWhenUnset**: [DateTimeValueWhenUnsetConfiguration](#datetimevaluewhenunsetconfiguration)

## DateTimeParameterDeclaration
### Properties
* **DefaultValues**: [DateTimeDefaultValues](#datetimedefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **TimeGranularity**: string
* **ValueWhenUnset**: [DateTimeValueWhenUnsetConfiguration](#datetimevaluewhenunsetconfiguration)

## DateTimeParameterDeclaration
### Properties
* **DefaultValues**: [DateTimeDefaultValues](#datetimedefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **TimeGranularity**: string
* **ValueWhenUnset**: [DateTimeValueWhenUnsetConfiguration](#datetimevaluewhenunsetconfiguration)

## DateTimePickerControlDisplayOptions
### Properties
* **DateTimeFormat**: string
* **InfoIconLabelOptions**: [SheetControlInfoIconLabelOptions](#sheetcontrolinfoiconlabeloptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## DateTimePickerControlDisplayOptions
### Properties
* **DateTimeFormat**: string
* **InfoIconLabelOptions**: [SheetControlInfoIconLabelOptions](#sheetcontrolinfoiconlabeloptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## DateTimePickerControlDisplayOptions
### Properties
* **DateTimeFormat**: string
* **InfoIconLabelOptions**: [SheetControlInfoIconLabelOptions](#sheetcontrolinfoiconlabeloptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## DateTimeValueWhenUnsetConfiguration
### Properties
* **CustomValue**: string
* **ValueWhenUnsetOption**: string

## DateTimeValueWhenUnsetConfiguration
### Properties
* **CustomValue**: string
* **ValueWhenUnsetOption**: string

## DateTimeValueWhenUnsetConfiguration
### Properties
* **CustomValue**: string
* **ValueWhenUnsetOption**: string

## DecimalDatasetParameter
### Properties
* **DefaultValues**: [DecimalDatasetParameterDefaultValues](#decimaldatasetparameterdefaultvalues)
* **Id**: string (Required): <p>An identifier for the decimal parameter created in the dataset.</p>
* **Name**: string (Required): <p>The name of the decimal parameter that is created in the dataset.</p>
* **ValueType**: string (Required)

## DecimalDatasetParameterDefaultValues
### Properties
* **StaticValues**: int[]: <p>A list of static default values for a given decimal parameter.</p>

## DecimalDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **StaticValues**: int[]

## DecimalDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **StaticValues**: int[]

## DecimalDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **StaticValues**: int[]

## DecimalParameter
### Properties
* **Name**: string (Required): <p>A display name for the decimal parameter.</p>
* **Values**: int[] (Required): <p>The values for the decimal parameter.</p>

## DecimalParameter
### Properties
* **Name**: string (Required): <p>A display name for the decimal parameter.</p>
* **Values**: int[] (Required): <p>The values for the decimal parameter.</p>

## DecimalParameterDeclaration
### Properties
* **DefaultValues**: [DecimalDefaultValues](#decimaldefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **ParameterValueType**: string (Required)
* **ValueWhenUnset**: [DecimalValueWhenUnsetConfiguration](#decimalvaluewhenunsetconfiguration)

## DecimalParameterDeclaration
### Properties
* **DefaultValues**: [DecimalDefaultValues](#decimaldefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **ParameterValueType**: string (Required)
* **ValueWhenUnset**: [DecimalValueWhenUnsetConfiguration](#decimalvaluewhenunsetconfiguration)

## DecimalParameterDeclaration
### Properties
* **DefaultValues**: [DecimalDefaultValues](#decimaldefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **ParameterValueType**: string (Required)
* **ValueWhenUnset**: [DecimalValueWhenUnsetConfiguration](#decimalvaluewhenunsetconfiguration)

## DecimalPlacesConfiguration
### Properties
* **DecimalPlaces**: int (Required)

## DecimalPlacesConfiguration
### Properties
* **DecimalPlaces**: int (Required)

## DecimalPlacesConfiguration
### Properties
* **DecimalPlaces**: int (Required)

## DecimalValueWhenUnsetConfiguration
### Properties
* **CustomValue**: int
* **ValueWhenUnsetOption**: string

## DecimalValueWhenUnsetConfiguration
### Properties
* **CustomValue**: int
* **ValueWhenUnsetOption**: string

## DecimalValueWhenUnsetConfiguration
### Properties
* **CustomValue**: int
* **ValueWhenUnsetOption**: string

## DefaultDateTimePickerControlOptions
### Properties
* **CommitMode**: string
* **DisplayOptions**: [DateTimePickerControlDisplayOptions](#datetimepickercontroldisplayoptions)
* **Type**: string

## DefaultDateTimePickerControlOptions
### Properties
* **CommitMode**: string
* **DisplayOptions**: [DateTimePickerControlDisplayOptions](#datetimepickercontroldisplayoptions)
* **Type**: string

## DefaultDateTimePickerControlOptions
### Properties
* **CommitMode**: string
* **DisplayOptions**: [DateTimePickerControlDisplayOptions](#datetimepickercontroldisplayoptions)
* **Type**: string

## DefaultFilterControlConfiguration
### Properties
* **ControlOptions**: [DefaultFilterControlOptions](#defaultfiltercontroloptions) (Required)
* **Title**: string (Required)

## DefaultFilterControlConfiguration
### Properties
* **ControlOptions**: [DefaultFilterControlOptions](#defaultfiltercontroloptions) (Required)
* **Title**: string (Required)

## DefaultFilterControlConfiguration
### Properties
* **ControlOptions**: [DefaultFilterControlOptions](#defaultfiltercontroloptions) (Required)
* **Title**: string (Required)

## DefaultFilterControlOptions
### Properties
* **DefaultDateTimePickerOptions**: [DefaultDateTimePickerControlOptions](#defaultdatetimepickercontroloptions)
* **DefaultDropdownOptions**: [DefaultFilterDropDownControlOptions](#defaultfilterdropdowncontroloptions)
* **DefaultListOptions**: [DefaultFilterListControlOptions](#defaultfilterlistcontroloptions)
* **DefaultRelativeDateTimeOptions**: [DefaultRelativeDateTimeControlOptions](#defaultrelativedatetimecontroloptions)
* **DefaultSliderOptions**: [DefaultSliderControlOptions](#defaultslidercontroloptions)
* **DefaultTextAreaOptions**: [DefaultTextAreaControlOptions](#defaulttextareacontroloptions)
* **DefaultTextFieldOptions**: [DefaultTextFieldControlOptions](#defaulttextfieldcontroloptions)

## DefaultFilterControlOptions
### Properties
* **DefaultDateTimePickerOptions**: [DefaultDateTimePickerControlOptions](#defaultdatetimepickercontroloptions)
* **DefaultDropdownOptions**: [DefaultFilterDropDownControlOptions](#defaultfilterdropdowncontroloptions)
* **DefaultListOptions**: [DefaultFilterListControlOptions](#defaultfilterlistcontroloptions)
* **DefaultRelativeDateTimeOptions**: [DefaultRelativeDateTimeControlOptions](#defaultrelativedatetimecontroloptions)
* **DefaultSliderOptions**: [DefaultSliderControlOptions](#defaultslidercontroloptions)
* **DefaultTextAreaOptions**: [DefaultTextAreaControlOptions](#defaulttextareacontroloptions)
* **DefaultTextFieldOptions**: [DefaultTextFieldControlOptions](#defaulttextfieldcontroloptions)

## DefaultFilterControlOptions
### Properties
* **DefaultDateTimePickerOptions**: [DefaultDateTimePickerControlOptions](#defaultdatetimepickercontroloptions)
* **DefaultDropdownOptions**: [DefaultFilterDropDownControlOptions](#defaultfilterdropdowncontroloptions)
* **DefaultListOptions**: [DefaultFilterListControlOptions](#defaultfilterlistcontroloptions)
* **DefaultRelativeDateTimeOptions**: [DefaultRelativeDateTimeControlOptions](#defaultrelativedatetimecontroloptions)
* **DefaultSliderOptions**: [DefaultSliderControlOptions](#defaultslidercontroloptions)
* **DefaultTextAreaOptions**: [DefaultTextAreaControlOptions](#defaulttextareacontroloptions)
* **DefaultTextFieldOptions**: [DefaultTextFieldControlOptions](#defaulttextfieldcontroloptions)

## DefaultFilterDropDownControlOptions
### Properties
* **CommitMode**: string
* **DisplayOptions**: [DropDownControlDisplayOptions](#dropdowncontroldisplayoptions)
* **SelectableValues**: [FilterSelectableValues](#filterselectablevalues)
* **Type**: string

## DefaultFilterDropDownControlOptions
### Properties
* **CommitMode**: string
* **DisplayOptions**: [DropDownControlDisplayOptions](#dropdowncontroldisplayoptions)
* **SelectableValues**: [FilterSelectableValues](#filterselectablevalues)
* **Type**: string

## DefaultFilterDropDownControlOptions
### Properties
* **CommitMode**: string
* **DisplayOptions**: [DropDownControlDisplayOptions](#dropdowncontroldisplayoptions)
* **SelectableValues**: [FilterSelectableValues](#filterselectablevalues)
* **Type**: string

## DefaultFilterListControlOptions
### Properties
* **DisplayOptions**: [ListControlDisplayOptions](#listcontroldisplayoptions)
* **SelectableValues**: [FilterSelectableValues](#filterselectablevalues)
* **Type**: string

## DefaultFilterListControlOptions
### Properties
* **DisplayOptions**: [ListControlDisplayOptions](#listcontroldisplayoptions)
* **SelectableValues**: [FilterSelectableValues](#filterselectablevalues)
* **Type**: string

## DefaultFilterListControlOptions
### Properties
* **DisplayOptions**: [ListControlDisplayOptions](#listcontroldisplayoptions)
* **SelectableValues**: [FilterSelectableValues](#filterselectablevalues)
* **Type**: string

## DefaultFormatting
### Properties
* **DisplayFormat**: string
* **DisplayFormatOptions**: [DisplayFormatOptions](#displayformatoptions)

## DefaultFreeFormLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [FreeFormLayoutCanvasSizeOptions](#freeformlayoutcanvassizeoptions) (Required)

## DefaultFreeFormLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [FreeFormLayoutCanvasSizeOptions](#freeformlayoutcanvassizeoptions) (Required)

## DefaultFreeFormLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [FreeFormLayoutCanvasSizeOptions](#freeformlayoutcanvassizeoptions) (Required)

## DefaultGridLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [GridLayoutCanvasSizeOptions](#gridlayoutcanvassizeoptions) (Required)

## DefaultGridLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [GridLayoutCanvasSizeOptions](#gridlayoutcanvassizeoptions) (Required)

## DefaultGridLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [GridLayoutCanvasSizeOptions](#gridlayoutcanvassizeoptions) (Required)

## DefaultInteractiveLayoutConfiguration
### Properties
* **FreeForm**: [DefaultFreeFormLayoutConfiguration](#defaultfreeformlayoutconfiguration)
* **Grid**: [DefaultGridLayoutConfiguration](#defaultgridlayoutconfiguration)

## DefaultInteractiveLayoutConfiguration
### Properties
* **FreeForm**: [DefaultFreeFormLayoutConfiguration](#defaultfreeformlayoutconfiguration)
* **Grid**: [DefaultGridLayoutConfiguration](#defaultgridlayoutconfiguration)

## DefaultInteractiveLayoutConfiguration
### Properties
* **FreeForm**: [DefaultFreeFormLayoutConfiguration](#defaultfreeformlayoutconfiguration)
* **Grid**: [DefaultGridLayoutConfiguration](#defaultgridlayoutconfiguration)

## DefaultNewSheetConfiguration
### Properties
* **InteractiveLayoutConfiguration**: [DefaultInteractiveLayoutConfiguration](#defaultinteractivelayoutconfiguration)
* **PaginatedLayoutConfiguration**: [DefaultPaginatedLayoutConfiguration](#defaultpaginatedlayoutconfiguration)
* **SheetContentType**: string

## DefaultNewSheetConfiguration
### Properties
* **InteractiveLayoutConfiguration**: [DefaultInteractiveLayoutConfiguration](#defaultinteractivelayoutconfiguration)
* **PaginatedLayoutConfiguration**: [DefaultPaginatedLayoutConfiguration](#defaultpaginatedlayoutconfiguration)
* **SheetContentType**: string

## DefaultNewSheetConfiguration
### Properties
* **InteractiveLayoutConfiguration**: [DefaultInteractiveLayoutConfiguration](#defaultinteractivelayoutconfiguration)
* **PaginatedLayoutConfiguration**: [DefaultPaginatedLayoutConfiguration](#defaultpaginatedlayoutconfiguration)
* **SheetContentType**: string

## DefaultPaginatedLayoutConfiguration
### Properties
* **SectionBased**: [DefaultSectionBasedLayoutConfiguration](#defaultsectionbasedlayoutconfiguration)

## DefaultPaginatedLayoutConfiguration
### Properties
* **SectionBased**: [DefaultSectionBasedLayoutConfiguration](#defaultsectionbasedlayoutconfiguration)

## DefaultPaginatedLayoutConfiguration
### Properties
* **SectionBased**: [DefaultSectionBasedLayoutConfiguration](#defaultsectionbasedlayoutconfiguration)

## DefaultRelativeDateTimeControlOptions
### Properties
* **CommitMode**: string
* **DisplayOptions**: [RelativeDateTimeControlDisplayOptions](#relativedatetimecontroldisplayoptions)

## DefaultRelativeDateTimeControlOptions
### Properties
* **CommitMode**: string
* **DisplayOptions**: [RelativeDateTimeControlDisplayOptions](#relativedatetimecontroldisplayoptions)

## DefaultRelativeDateTimeControlOptions
### Properties
* **CommitMode**: string
* **DisplayOptions**: [RelativeDateTimeControlDisplayOptions](#relativedatetimecontroldisplayoptions)

## DefaultSectionBasedLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [SectionBasedLayoutCanvasSizeOptions](#sectionbasedlayoutcanvassizeoptions) (Required)

## DefaultSectionBasedLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [SectionBasedLayoutCanvasSizeOptions](#sectionbasedlayoutcanvassizeoptions) (Required)

## DefaultSectionBasedLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [SectionBasedLayoutCanvasSizeOptions](#sectionbasedlayoutcanvassizeoptions) (Required)

## DefaultSliderControlOptions
### Properties
* **DisplayOptions**: [SliderControlDisplayOptions](#slidercontroldisplayoptions)
* **MaximumValue**: int (Required)
* **MinimumValue**: int (Required)
* **StepSize**: int (Required)
* **Type**: string

## DefaultSliderControlOptions
### Properties
* **DisplayOptions**: [SliderControlDisplayOptions](#slidercontroldisplayoptions)
* **MaximumValue**: int (Required)
* **MinimumValue**: int (Required)
* **StepSize**: int (Required)
* **Type**: string

## DefaultSliderControlOptions
### Properties
* **DisplayOptions**: [SliderControlDisplayOptions](#slidercontroldisplayoptions)
* **MaximumValue**: int (Required)
* **MinimumValue**: int (Required)
* **StepSize**: int (Required)
* **Type**: string

## DefaultTextAreaControlOptions
### Properties
* **Delimiter**: string
* **DisplayOptions**: [TextAreaControlDisplayOptions](#textareacontroldisplayoptions)

## DefaultTextAreaControlOptions
### Properties
* **Delimiter**: string
* **DisplayOptions**: [TextAreaControlDisplayOptions](#textareacontroldisplayoptions)

## DefaultTextAreaControlOptions
### Properties
* **Delimiter**: string
* **DisplayOptions**: [TextAreaControlDisplayOptions](#textareacontroldisplayoptions)

## DefaultTextFieldControlOptions
### Properties
* **DisplayOptions**: [TextFieldControlDisplayOptions](#textfieldcontroldisplayoptions)

## DefaultTextFieldControlOptions
### Properties
* **DisplayOptions**: [TextFieldControlDisplayOptions](#textfieldcontroldisplayoptions)

## DefaultTextFieldControlOptions
### Properties
* **DisplayOptions**: [TextFieldControlDisplayOptions](#textfieldcontroldisplayoptions)

## DestinationParameterValueConfiguration
### Properties
* **CustomValuesConfiguration**: [CustomValuesConfiguration](#customvaluesconfiguration)
* **SelectAllValueOptions**: string
* **SourceColumn**: [ColumnIdentifier](#columnidentifier)
* **SourceField**: string
* **SourceParameterName**: string

## DestinationParameterValueConfiguration
### Properties
* **CustomValuesConfiguration**: [CustomValuesConfiguration](#customvaluesconfiguration)
* **SelectAllValueOptions**: string
* **SourceColumn**: [ColumnIdentifier](#columnidentifier)
* **SourceField**: string
* **SourceParameterName**: string

## DestinationParameterValueConfiguration
### Properties
* **CustomValuesConfiguration**: [CustomValuesConfiguration](#customvaluesconfiguration)
* **SelectAllValueOptions**: string
* **SourceColumn**: [ColumnIdentifier](#columnidentifier)
* **SourceField**: string
* **SourceParameterName**: string

## DimensionField
### Properties
* **CategoricalDimensionField**: [CategoricalDimensionField](#categoricaldimensionfield)
* **DateDimensionField**: [DateDimensionField](#datedimensionfield)
* **NumericalDimensionField**: [NumericalDimensionField](#numericaldimensionfield)

## DimensionField
### Properties
* **CategoricalDimensionField**: [CategoricalDimensionField](#categoricaldimensionfield)
* **DateDimensionField**: [DateDimensionField](#datedimensionfield)
* **NumericalDimensionField**: [NumericalDimensionField](#numericaldimensionfield)

## DimensionField
### Properties
* **CategoricalDimensionField**: [CategoricalDimensionField](#categoricaldimensionfield)
* **DateDimensionField**: [DateDimensionField](#datedimensionfield)
* **NumericalDimensionField**: [NumericalDimensionField](#numericaldimensionfield)

## DisplayFormatOptions
### Properties
* **BlankCellFormat**: string
* **CurrencySymbol**: string
* **DateFormat**: string
* **DecimalSeparator**: string
* **FractionDigits**: int
* **GroupingSeparator**: string
* **NegativeFormat**: [NegativeFormat](#negativeformat)
* **Prefix**: string
* **Suffix**: string
* **UnitScaler**: string
* **UseBlankCellFormat**: bool
* **UseGrouping**: bool

## DonutCenterOptions
### Properties
* **LabelVisibility**: string

## DonutCenterOptions
### Properties
* **LabelVisibility**: string

## DonutCenterOptions
### Properties
* **LabelVisibility**: [Template_LabelVisibility](#templatelabelvisibility)

## DonutOptions
### Properties
* **ArcOptions**: [ArcOptions](#arcoptions)
* **DonutCenterOptions**: [DonutCenterOptions](#donutcenteroptions)

## DonutOptions
### Properties
* **ArcOptions**: [ArcOptions](#arcoptions)
* **DonutCenterOptions**: [DonutCenterOptions](#donutcenteroptions)

## DonutOptions
### Properties
* **ArcOptions**: [ArcOptions](#arcoptions)
* **DonutCenterOptions**: [DonutCenterOptions](#donutcenteroptions)

## DrillDownFilter
### Properties
* **CategoryFilter**: [CategoryDrillDownFilter](#categorydrilldownfilter)
* **NumericEqualityFilter**: [NumericEqualityDrillDownFilter](#numericequalitydrilldownfilter)
* **TimeRangeFilter**: [TimeRangeDrillDownFilter](#timerangedrilldownfilter)

## DrillDownFilter
### Properties
* **CategoryFilter**: [CategoryDrillDownFilter](#categorydrilldownfilter)
* **NumericEqualityFilter**: [NumericEqualityDrillDownFilter](#numericequalitydrilldownfilter)
* **TimeRangeFilter**: [TimeRangeDrillDownFilter](#timerangedrilldownfilter)

## DrillDownFilter
### Properties
* **CategoryFilter**: [CategoryDrillDownFilter](#categorydrilldownfilter)
* **NumericEqualityFilter**: [NumericEqualityDrillDownFilter](#numericequalitydrilldownfilter)
* **TimeRangeFilter**: [TimeRangeDrillDownFilter](#timerangedrilldownfilter)

## DropDownControlDisplayOptions
### Properties
* **InfoIconLabelOptions**: [SheetControlInfoIconLabelOptions](#sheetcontrolinfoiconlabeloptions)
* **SelectAllOptions**: [ListControlSelectAllOptions](#listcontrolselectalloptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## DropDownControlDisplayOptions
### Properties
* **InfoIconLabelOptions**: [SheetControlInfoIconLabelOptions](#sheetcontrolinfoiconlabeloptions)
* **SelectAllOptions**: [ListControlSelectAllOptions](#listcontrolselectalloptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## DropDownControlDisplayOptions
### Properties
* **InfoIconLabelOptions**: [SheetControlInfoIconLabelOptions](#sheetcontrolinfoiconlabeloptions)
* **SelectAllOptions**: [ListControlSelectAllOptions](#listcontrolselectalloptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## DynamicDefaultValue
### Properties
* **DefaultValueColumn**: [ColumnIdentifier](#columnidentifier) (Required)
* **GroupNameColumn**: [ColumnIdentifier](#columnidentifier)
* **UserNameColumn**: [ColumnIdentifier](#columnidentifier)

## DynamicDefaultValue
### Properties
* **DefaultValueColumn**: [ColumnIdentifier](#columnidentifier) (Required)
* **GroupNameColumn**: [ColumnIdentifier](#columnidentifier)
* **UserNameColumn**: [ColumnIdentifier](#columnidentifier)

## DynamicDefaultValue
### Properties
* **DefaultValueColumn**: [ColumnIdentifier](#columnidentifier) (Required)
* **GroupNameColumn**: [ColumnIdentifier](#columnidentifier)
* **UserNameColumn**: [ColumnIdentifier](#columnidentifier)

## EmptyVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **DataSetIdentifier**: string (Required)
* **VisualId**: string (Required)

## EmptyVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **DataSetIdentifier**: string (Required)
* **VisualId**: string (Required)

## EmptyVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **DataSetIdentifier**: string (Required)
* **VisualId**: string (Required)

## Entity
### Properties
* **Path**: string

## Entity
### Properties
* **Path**: string

## Entity
### Properties
* **Path**: string

## ExcludePeriodConfiguration
### Properties
* **Amount**: int (Required)
* **Granularity**: string (Required)
* **Status**: string

## ExcludePeriodConfiguration
### Properties
* **Amount**: int (Required)
* **Granularity**: string (Required)
* **Status**: string

## ExcludePeriodConfiguration
### Properties
* **Amount**: int (Required)
* **Granularity**: string (Required)
* **Status**: string

## ExplicitHierarchy
### Properties
* **Columns**: [ColumnIdentifier](#columnidentifier)[] (Required)
* **DrillDownFilters**: [DrillDownFilter](#drilldownfilter)[]
* **HierarchyId**: string (Required)

## ExplicitHierarchy
### Properties
* **Columns**: [ColumnIdentifier](#columnidentifier)[] (Required)
* **DrillDownFilters**: [DrillDownFilter](#drilldownfilter)[]
* **HierarchyId**: string (Required)

## ExplicitHierarchy
### Properties
* **Columns**: [ColumnIdentifier](#columnidentifier)[] (Required)
* **DrillDownFilters**: [DrillDownFilter](#drilldownfilter)[]
* **HierarchyId**: string (Required)

## ExportHiddenFieldsOption
### Properties
* **AvailabilityStatus**: string

## ExportToCSVOption
### Properties
* **AvailabilityStatus**: string

## ExportWithHiddenFieldsOption
### Properties
* **AvailabilityStatus**: string

## FieldBasedTooltip
### Properties
* **AggregationVisibility**: string
* **TooltipFields**: [TooltipItem](#tooltipitem)[]
* **TooltipTitleType**: string

## FieldBasedTooltip
### Properties
* **AggregationVisibility**: string
* **TooltipFields**: [TooltipItem](#tooltipitem)[]
* **TooltipTitleType**: string

## FieldBasedTooltip
### Properties
* **AggregationVisibility**: [Template_AggregationVisibility](#templateaggregationvisibility)
* **TooltipFields**: [TooltipItem](#tooltipitem)[]
* **TooltipTitleType**: string

## FieldFolderMap
### Properties

## FieldLabelType
### Properties
* **FieldId**: string
* **Visibility**: string

## FieldLabelType
### Properties
* **FieldId**: string
* **Visibility**: string

## FieldLabelType
### Properties
* **FieldId**: string
* **Visibility**: [Template_Visibility](#templatevisibility)

## FieldSeriesItem
### Properties
* **AxisBinding**: string (Required)
* **FieldId**: string (Required)
* **Settings**: [LineChartSeriesSettings](#linechartseriessettings)

## FieldSeriesItem
### Properties
* **AxisBinding**: string (Required)
* **FieldId**: string (Required)
* **Settings**: [LineChartSeriesSettings](#linechartseriessettings)

## FieldSeriesItem
### Properties
* **AxisBinding**: string (Required)
* **FieldId**: string (Required)
* **Settings**: [LineChartSeriesSettings](#linechartseriessettings)

## FieldSort
### Properties
* **Direction**: string (Required)
* **FieldId**: string (Required)

## FieldSort
### Properties
* **Direction**: string (Required)
* **FieldId**: string (Required)

## FieldSort
### Properties
* **Direction**: string (Required)
* **FieldId**: string (Required)

## FieldSortOptions
### Properties
* **ColumnSort**: [ColumnSort](#columnsort)
* **FieldSort**: [FieldSort](#fieldsort)

## FieldSortOptions
### Properties
* **ColumnSort**: [ColumnSort](#columnsort)
* **FieldSort**: [FieldSort](#fieldsort)

## FieldSortOptions
### Properties
* **ColumnSort**: [ColumnSort](#columnsort)
* **FieldSort**: [FieldSort](#fieldsort)

## FieldTooltipItem
### Properties
* **FieldId**: string (Required)
* **Label**: string
* **TooltipTarget**: string
* **Visibility**: string

## FieldTooltipItem
### Properties
* **FieldId**: string (Required)
* **Label**: string
* **TooltipTarget**: string
* **Visibility**: string

## FieldTooltipItem
### Properties
* **FieldId**: string (Required)
* **Label**: string
* **TooltipTarget**: string
* **Visibility**: [Template_Visibility](#templatevisibility)

## FilledMapAggregatedFieldWells
### Properties
* **Geospatial**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## FilledMapAggregatedFieldWells
### Properties
* **Geospatial**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## FilledMapAggregatedFieldWells
### Properties
* **Geospatial**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## FilledMapConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [FilledMapConditionalFormattingOption](#filledmapconditionalformattingoption)[] (Required)

## FilledMapConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [FilledMapConditionalFormattingOption](#filledmapconditionalformattingoption)[] (Required)

## FilledMapConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [FilledMapConditionalFormattingOption](#filledmapconditionalformattingoption)[] (Required)

## FilledMapConditionalFormattingOption
### Properties
* **Shape**: [FilledMapShapeConditionalFormatting](#filledmapshapeconditionalformatting) (Required)

## FilledMapConditionalFormattingOption
### Properties
* **Shape**: [FilledMapShapeConditionalFormatting](#filledmapshapeconditionalformatting) (Required)

## FilledMapConditionalFormattingOption
### Properties
* **Shape**: [FilledMapShapeConditionalFormatting](#filledmapshapeconditionalformatting) (Required)

## FilledMapConfiguration
### Properties
* **FieldWells**: [FilledMapFieldWells](#filledmapfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **MapStyleOptions**: [GeospatialMapStyleOptions](#geospatialmapstyleoptions)
* **SortConfiguration**: [FilledMapSortConfiguration](#filledmapsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **WindowOptions**: [GeospatialWindowOptions](#geospatialwindowoptions)

## FilledMapConfiguration
### Properties
* **FieldWells**: [FilledMapFieldWells](#filledmapfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **MapStyleOptions**: [GeospatialMapStyleOptions](#geospatialmapstyleoptions)
* **SortConfiguration**: [FilledMapSortConfiguration](#filledmapsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **WindowOptions**: [GeospatialWindowOptions](#geospatialwindowoptions)

## FilledMapConfiguration
### Properties
* **FieldWells**: [FilledMapFieldWells](#filledmapfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **MapStyleOptions**: [GeospatialMapStyleOptions](#geospatialmapstyleoptions)
* **SortConfiguration**: [FilledMapSortConfiguration](#filledmapsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **WindowOptions**: [GeospatialWindowOptions](#geospatialwindowoptions)

## FilledMapFieldWells
### Properties
* **FilledMapAggregatedFieldWells**: [FilledMapAggregatedFieldWells](#filledmapaggregatedfieldwells)

## FilledMapFieldWells
### Properties
* **FilledMapAggregatedFieldWells**: [FilledMapAggregatedFieldWells](#filledmapaggregatedfieldwells)

## FilledMapFieldWells
### Properties
* **FilledMapAggregatedFieldWells**: [FilledMapAggregatedFieldWells](#filledmapaggregatedfieldwells)

## FilledMapShapeConditionalFormatting
### Properties
* **FieldId**: string (Required)
* **Format**: [ShapeConditionalFormat](#shapeconditionalformat)

## FilledMapShapeConditionalFormatting
### Properties
* **FieldId**: string (Required)
* **Format**: [ShapeConditionalFormat](#shapeconditionalformat)

## FilledMapShapeConditionalFormatting
### Properties
* **FieldId**: string (Required)
* **Format**: [ShapeConditionalFormat](#shapeconditionalformat)

## FilledMapSortConfiguration
### Properties
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## FilledMapSortConfiguration
### Properties
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## FilledMapSortConfiguration
### Properties
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## FilledMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [FilledMapConfiguration](#filledmapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **ConditionalFormatting**: [FilledMapConditionalFormatting](#filledmapconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## FilledMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [FilledMapConfiguration](#filledmapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **ConditionalFormatting**: [FilledMapConditionalFormatting](#filledmapconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## FilledMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [FilledMapConfiguration](#filledmapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **ConditionalFormatting**: [FilledMapConditionalFormatting](#filledmapconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## Filter
### Properties
* **CategoryFilter**: [CategoryFilter](#categoryfilter)
* **NestedFilter**: [NestedFilter](#nestedfilter)
* **NumericEqualityFilter**: [NumericEqualityFilter](#numericequalityfilter)
* **NumericRangeFilter**: [NumericRangeFilter](#numericrangefilter)
* **RelativeDatesFilter**: [RelativeDatesFilter](#relativedatesfilter)
* **TimeEqualityFilter**: [TimeEqualityFilter](#timeequalityfilter)
* **TimeRangeFilter**: [TimeRangeFilter](#timerangefilter)
* **TopBottomFilter**: [TopBottomFilter](#topbottomfilter)

## Filter
### Properties
* **CategoryFilter**: [CategoryFilter](#categoryfilter)
* **NestedFilter**: [NestedFilter](#nestedfilter)
* **NumericEqualityFilter**: [NumericEqualityFilter](#numericequalityfilter)
* **NumericRangeFilter**: [NumericRangeFilter](#numericrangefilter)
* **RelativeDatesFilter**: [RelativeDatesFilter](#relativedatesfilter)
* **TimeEqualityFilter**: [TimeEqualityFilter](#timeequalityfilter)
* **TimeRangeFilter**: [TimeRangeFilter](#timerangefilter)
* **TopBottomFilter**: [TopBottomFilter](#topbottomfilter)

## Filter
### Properties
* **CategoryFilter**: [CategoryFilter](#categoryfilter)
* **NestedFilter**: [NestedFilter](#nestedfilter)
* **NumericEqualityFilter**: [NumericEqualityFilter](#numericequalityfilter)
* **NumericRangeFilter**: [NumericRangeFilter](#numericrangefilter)
* **RelativeDatesFilter**: [RelativeDatesFilter](#relativedatesfilter)
* **TimeEqualityFilter**: [TimeEqualityFilter](#timeequalityfilter)
* **TimeRangeFilter**: [TimeRangeFilter](#timerangefilter)
* **TopBottomFilter**: [TopBottomFilter](#topbottomfilter)

## FilterControl
### Properties
* **CrossSheet**: [FilterCrossSheetControl](#filtercrosssheetcontrol)
* **DateTimePicker**: [FilterDateTimePickerControl](#filterdatetimepickercontrol)
* **Dropdown**: [FilterDropDownControl](#filterdropdowncontrol)
* **List**: [FilterListControl](#filterlistcontrol)
* **RelativeDateTime**: [FilterRelativeDateTimeControl](#filterrelativedatetimecontrol)
* **Slider**: [FilterSliderControl](#filterslidercontrol)
* **TextArea**: [FilterTextAreaControl](#filtertextareacontrol)
* **TextField**: [FilterTextFieldControl](#filtertextfieldcontrol)

## FilterControl
### Properties
* **CrossSheet**: [FilterCrossSheetControl](#filtercrosssheetcontrol)
* **DateTimePicker**: [FilterDateTimePickerControl](#filterdatetimepickercontrol)
* **Dropdown**: [FilterDropDownControl](#filterdropdowncontrol)
* **List**: [FilterListControl](#filterlistcontrol)
* **RelativeDateTime**: [FilterRelativeDateTimeControl](#filterrelativedatetimecontrol)
* **Slider**: [FilterSliderControl](#filterslidercontrol)
* **TextArea**: [FilterTextAreaControl](#filtertextareacontrol)
* **TextField**: [FilterTextFieldControl](#filtertextfieldcontrol)

## FilterControl
### Properties
* **CrossSheet**: [FilterCrossSheetControl](#filtercrosssheetcontrol)
* **DateTimePicker**: [FilterDateTimePickerControl](#filterdatetimepickercontrol)
* **Dropdown**: [FilterDropDownControl](#filterdropdowncontrol)
* **List**: [FilterListControl](#filterlistcontrol)
* **RelativeDateTime**: [FilterRelativeDateTimeControl](#filterrelativedatetimecontrol)
* **Slider**: [FilterSliderControl](#filterslidercontrol)
* **TextArea**: [FilterTextAreaControl](#filtertextareacontrol)
* **TextField**: [FilterTextFieldControl](#filtertextfieldcontrol)

## FilterCrossSheetControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)

## FilterCrossSheetControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)

## FilterCrossSheetControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)

## FilterDateTimePickerControl
### Properties
* **CommitMode**: string
* **DisplayOptions**: [DateTimePickerControlDisplayOptions](#datetimepickercontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)
* **Type**: string

## FilterDateTimePickerControl
### Properties
* **CommitMode**: string
* **DisplayOptions**: [DateTimePickerControlDisplayOptions](#datetimepickercontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)
* **Type**: string

## FilterDateTimePickerControl
### Properties
* **CommitMode**: string
* **DisplayOptions**: [DateTimePickerControlDisplayOptions](#datetimepickercontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)
* **Type**: string

## FilterDropDownControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **CommitMode**: string
* **DisplayOptions**: [DropDownControlDisplayOptions](#dropdowncontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SelectableValues**: [FilterSelectableValues](#filterselectablevalues)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)
* **Type**: string

## FilterDropDownControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **CommitMode**: string
* **DisplayOptions**: [DropDownControlDisplayOptions](#dropdowncontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SelectableValues**: [FilterSelectableValues](#filterselectablevalues)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)
* **Type**: string

## FilterDropDownControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **CommitMode**: string
* **DisplayOptions**: [DropDownControlDisplayOptions](#dropdowncontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SelectableValues**: [FilterSelectableValues](#filterselectablevalues)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)
* **Type**: string

## FilterGroup
### Properties
* **CrossDataset**: string (Required)
* **FilterGroupId**: string (Required)
* **Filters**: [Filter](#filter)[] (Required)
* **ScopeConfiguration**: [FilterScopeConfiguration](#filterscopeconfiguration) (Required)
* **Status**: string

## FilterGroup
### Properties
* **CrossDataset**: string (Required)
* **FilterGroupId**: string (Required)
* **Filters**: [Filter](#filter)[] (Required)
* **ScopeConfiguration**: [FilterScopeConfiguration](#filterscopeconfiguration) (Required)
* **Status**: string

## FilterGroup
### Properties
* **CrossDataset**: string (Required)
* **FilterGroupId**: string (Required)
* **Filters**: [Filter](#filter)[] (Required)
* **ScopeConfiguration**: [FilterScopeConfiguration](#filterscopeconfiguration) (Required)
* **Status**: string

## FilterListConfiguration
### Properties
* **CategoryValues**: string[]
* **MatchOperator**: string (Required)
* **NullOption**: string
* **SelectAllOptions**: string

## FilterListConfiguration
### Properties
* **CategoryValues**: string[]
* **MatchOperator**: string (Required)
* **NullOption**: string
* **SelectAllOptions**: string

## FilterListConfiguration
### Properties
* **CategoryValues**: string[]
* **MatchOperator**: string (Required)
* **NullOption**: string
* **SelectAllOptions**: string

## FilterListControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **DisplayOptions**: [ListControlDisplayOptions](#listcontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SelectableValues**: [FilterSelectableValues](#filterselectablevalues)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)
* **Type**: string

## FilterListControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **DisplayOptions**: [ListControlDisplayOptions](#listcontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SelectableValues**: [FilterSelectableValues](#filterselectablevalues)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)
* **Type**: string

## FilterListControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **DisplayOptions**: [ListControlDisplayOptions](#listcontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SelectableValues**: [FilterSelectableValues](#filterselectablevalues)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)
* **Type**: string

## FilterOperationSelectedFieldsConfiguration
### Properties
* **SelectedColumns**: [ColumnIdentifier](#columnidentifier)[]: <p>The selected columns of a dataset.</p>
* **SelectedFieldOptions**: string
* **SelectedFields**: string[]

## FilterOperationSelectedFieldsConfiguration
### Properties
* **SelectedColumns**: [ColumnIdentifier](#columnidentifier)[]: <p>The selected columns of a dataset.</p>
* **SelectedFieldOptions**: string
* **SelectedFields**: string[]

## FilterOperationSelectedFieldsConfiguration
### Properties
* **SelectedColumns**: [ColumnIdentifier](#columnidentifier)[]: <p>The selected columns of a dataset.</p>
* **SelectedFieldOptions**: string
* **SelectedFields**: string[]

## FilterOperationTargetVisualsConfiguration
### Properties
* **SameSheetTargetVisualConfiguration**: [SameSheetTargetVisualConfiguration](#samesheettargetvisualconfiguration)

## FilterOperationTargetVisualsConfiguration
### Properties
* **SameSheetTargetVisualConfiguration**: [SameSheetTargetVisualConfiguration](#samesheettargetvisualconfiguration)

## FilterOperationTargetVisualsConfiguration
### Properties
* **SameSheetTargetVisualConfiguration**: [SameSheetTargetVisualConfiguration](#samesheettargetvisualconfiguration)

## FilterRelativeDateTimeControl
### Properties
* **CommitMode**: string
* **DisplayOptions**: [RelativeDateTimeControlDisplayOptions](#relativedatetimecontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)

## FilterRelativeDateTimeControl
### Properties
* **CommitMode**: string
* **DisplayOptions**: [RelativeDateTimeControlDisplayOptions](#relativedatetimecontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)

## FilterRelativeDateTimeControl
### Properties
* **CommitMode**: string
* **DisplayOptions**: [RelativeDateTimeControlDisplayOptions](#relativedatetimecontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)

## FilterScopeConfiguration
### Properties
* **AllSheets**: [AllSheetsFilterScopeConfiguration](#allsheetsfilterscopeconfiguration)
* **SelectedSheets**: [SelectedSheetsFilterScopeConfiguration](#selectedsheetsfilterscopeconfiguration)

## FilterScopeConfiguration
### Properties
* **AllSheets**: [AllSheetsFilterScopeConfiguration](#allsheetsfilterscopeconfiguration)
* **SelectedSheets**: [SelectedSheetsFilterScopeConfiguration](#selectedsheetsfilterscopeconfiguration)

## FilterScopeConfiguration
### Properties
* **AllSheets**: [AllSheetsFilterScopeConfiguration](#allsheetsfilterscopeconfiguration)
* **SelectedSheets**: [SelectedSheetsFilterScopeConfiguration](#selectedsheetsfilterscopeconfiguration)

## FilterSelectableValues
### Properties
* **Values**: string[]

## FilterSelectableValues
### Properties
* **Values**: string[]

## FilterSelectableValues
### Properties
* **Values**: string[]

## FilterSliderControl
### Properties
* **DisplayOptions**: [SliderControlDisplayOptions](#slidercontroldisplayoptions)
* **FilterControlId**: string (Required)
* **MaximumValue**: int (Required)
* **MinimumValue**: int (Required)
* **SourceFilterId**: string (Required)
* **StepSize**: int (Required)
* **Title**: string (Required)
* **Type**: string

## FilterSliderControl
### Properties
* **DisplayOptions**: [SliderControlDisplayOptions](#slidercontroldisplayoptions)
* **FilterControlId**: string (Required)
* **MaximumValue**: int (Required)
* **MinimumValue**: int (Required)
* **SourceFilterId**: string (Required)
* **StepSize**: int (Required)
* **Title**: string (Required)
* **Type**: string

## FilterSliderControl
### Properties
* **DisplayOptions**: [SliderControlDisplayOptions](#slidercontroldisplayoptions)
* **FilterControlId**: string (Required)
* **MaximumValue**: int (Required)
* **MinimumValue**: int (Required)
* **SourceFilterId**: string (Required)
* **StepSize**: int (Required)
* **Title**: string (Required)
* **Type**: string

## FilterTextAreaControl
### Properties
* **Delimiter**: string
* **DisplayOptions**: [TextAreaControlDisplayOptions](#textareacontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)

## FilterTextAreaControl
### Properties
* **Delimiter**: string
* **DisplayOptions**: [TextAreaControlDisplayOptions](#textareacontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)

## FilterTextAreaControl
### Properties
* **Delimiter**: string
* **DisplayOptions**: [TextAreaControlDisplayOptions](#textareacontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)

## FilterTextFieldControl
### Properties
* **DisplayOptions**: [TextFieldControlDisplayOptions](#textfieldcontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)

## FilterTextFieldControl
### Properties
* **DisplayOptions**: [TextFieldControlDisplayOptions](#textfieldcontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)

## FilterTextFieldControl
### Properties
* **DisplayOptions**: [TextFieldControlDisplayOptions](#textfieldcontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)

## Font
### Properties
* **FontFamily**: string

## FontConfiguration
### Properties
* **FontColor**: string
* **FontDecoration**: string
* **FontSize**: [FontSize](#fontsize)
* **FontStyle**: string
* **FontWeight**: [FontWeight](#fontweight)

## FontConfiguration
### Properties
* **FontColor**: string
* **FontDecoration**: string
* **FontSize**: [FontSize](#fontsize)
* **FontStyle**: string
* **FontWeight**: [FontWeight](#fontweight)

## FontConfiguration
### Properties
* **FontColor**: string
* **FontDecoration**: string
* **FontSize**: [FontSize](#fontsize)
* **FontStyle**: string
* **FontWeight**: [FontWeight](#fontweight)

## FontSize
### Properties
* **Absolute**: string: String based length that is composed of value and unit in px
* **Relative**: string

## FontSize
### Properties
* **Absolute**: string: String based length that is composed of value and unit in px
* **Relative**: string

## FontSize
### Properties
* **Relative**: string

## FontWeight
### Properties
* **Name**: string

## FontWeight
### Properties
* **Name**: string

## FontWeight
### Properties
* **Name**: string

## ForecastComputation
### Properties
* **ComputationId**: string (Required)
* **CustomSeasonalityValue**: int
* **LowerBoundary**: int
* **Name**: string
* **PeriodsBackward**: int
* **PeriodsForward**: int
* **PredictionInterval**: int
* **Seasonality**: string
* **Time**: [DimensionField](#dimensionfield)
* **UpperBoundary**: int
* **Value**: [MeasureField](#measurefield)

## ForecastComputation
### Properties
* **ComputationId**: string (Required)
* **CustomSeasonalityValue**: int
* **LowerBoundary**: int
* **Name**: string
* **PeriodsBackward**: int
* **PeriodsForward**: int
* **PredictionInterval**: int
* **Seasonality**: string
* **Time**: [DimensionField](#dimensionfield)
* **UpperBoundary**: int
* **Value**: [MeasureField](#measurefield)

## ForecastComputation
### Properties
* **ComputationId**: string (Required)
* **CustomSeasonalityValue**: int
* **LowerBoundary**: int
* **Name**: string
* **PeriodsBackward**: int
* **PeriodsForward**: int
* **PredictionInterval**: int
* **Seasonality**: string
* **Time**: [DimensionField](#dimensionfield)
* **UpperBoundary**: int
* **Value**: [MeasureField](#measurefield)

## ForecastConfiguration
### Properties
* **ForecastProperties**: [TimeBasedForecastProperties](#timebasedforecastproperties)
* **Scenario**: [ForecastScenario](#forecastscenario)

## ForecastConfiguration
### Properties
* **ForecastProperties**: [TimeBasedForecastProperties](#timebasedforecastproperties)
* **Scenario**: [ForecastScenario](#forecastscenario)

## ForecastConfiguration
### Properties
* **ForecastProperties**: [TimeBasedForecastProperties](#timebasedforecastproperties)
* **Scenario**: [ForecastScenario](#forecastscenario)

## ForecastScenario
### Properties
* **WhatIfPointScenario**: [WhatIfPointScenario](#whatifpointscenario)
* **WhatIfRangeScenario**: [WhatIfRangeScenario](#whatifrangescenario)

## ForecastScenario
### Properties
* **WhatIfPointScenario**: [WhatIfPointScenario](#whatifpointscenario)
* **WhatIfRangeScenario**: [WhatIfRangeScenario](#whatifrangescenario)

## ForecastScenario
### Properties
* **WhatIfPointScenario**: [WhatIfPointScenario](#whatifpointscenario)
* **WhatIfRangeScenario**: [WhatIfRangeScenario](#whatifrangescenario)

## FormatConfiguration
### Properties
* **DateTimeFormatConfiguration**: [DateTimeFormatConfiguration](#datetimeformatconfiguration)
* **NumberFormatConfiguration**: [NumberFormatConfiguration](#numberformatconfiguration)
* **StringFormatConfiguration**: [StringFormatConfiguration](#stringformatconfiguration)

## FormatConfiguration
### Properties
* **DateTimeFormatConfiguration**: [DateTimeFormatConfiguration](#datetimeformatconfiguration)
* **NumberFormatConfiguration**: [NumberFormatConfiguration](#numberformatconfiguration)
* **StringFormatConfiguration**: [StringFormatConfiguration](#stringformatconfiguration)

## FormatConfiguration
### Properties
* **DateTimeFormatConfiguration**: [DateTimeFormatConfiguration](#datetimeformatconfiguration)
* **NumberFormatConfiguration**: [NumberFormatConfiguration](#numberformatconfiguration)
* **StringFormatConfiguration**: [StringFormatConfiguration](#stringformatconfiguration)

## FreeFormLayoutCanvasSizeOptions
### Properties
* **ScreenCanvasSizeOptions**: [FreeFormLayoutScreenCanvasSizeOptions](#freeformlayoutscreencanvassizeoptions)

## FreeFormLayoutCanvasSizeOptions
### Properties
* **ScreenCanvasSizeOptions**: [FreeFormLayoutScreenCanvasSizeOptions](#freeformlayoutscreencanvassizeoptions)

## FreeFormLayoutCanvasSizeOptions
### Properties
* **ScreenCanvasSizeOptions**: [FreeFormLayoutScreenCanvasSizeOptions](#freeformlayoutscreencanvassizeoptions)

## FreeFormLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [FreeFormLayoutCanvasSizeOptions](#freeformlayoutcanvassizeoptions)
* **Elements**: [FreeFormLayoutElement](#freeformlayoutelement)[] (Required)

## FreeFormLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [FreeFormLayoutCanvasSizeOptions](#freeformlayoutcanvassizeoptions)
* **Elements**: [FreeFormLayoutElement](#freeformlayoutelement)[] (Required)

## FreeFormLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [FreeFormLayoutCanvasSizeOptions](#freeformlayoutcanvassizeoptions)
* **Elements**: [FreeFormLayoutElement](#freeformlayoutelement)[] (Required)

## FreeFormLayoutElement
### Properties
* **BackgroundStyle**: [FreeFormLayoutElementBackgroundStyle](#freeformlayoutelementbackgroundstyle)
* **BorderStyle**: [FreeFormLayoutElementBorderStyle](#freeformlayoutelementborderstyle)
* **ElementId**: string (Required)
* **ElementType**: string (Required)
* **Height**: string (Required): String based length that is composed of value and unit in px
* **LoadingAnimation**: [LoadingAnimation](#loadinganimation)
* **RenderingRules**: [SheetElementRenderingRule](#sheetelementrenderingrule)[]
* **SelectedBorderStyle**: [FreeFormLayoutElementBorderStyle](#freeformlayoutelementborderstyle)
* **Visibility**: string
* **Width**: string (Required): String based length that is composed of value and unit in px
* **XAxisLocation**: string (Required): String based length that is composed of value and unit in px
* **YAxisLocation**: string (Required): String based length that is composed of value and unit in px with Integer.MAX_VALUE as maximum value

## FreeFormLayoutElement
### Properties
* **BackgroundStyle**: [FreeFormLayoutElementBackgroundStyle](#freeformlayoutelementbackgroundstyle)
* **BorderStyle**: [FreeFormLayoutElementBorderStyle](#freeformlayoutelementborderstyle)
* **ElementId**: string (Required)
* **ElementType**: string (Required)
* **Height**: string (Required): String based length that is composed of value and unit in px
* **LoadingAnimation**: [LoadingAnimation](#loadinganimation)
* **RenderingRules**: [SheetElementRenderingRule](#sheetelementrenderingrule)[]
* **SelectedBorderStyle**: [FreeFormLayoutElementBorderStyle](#freeformlayoutelementborderstyle)
* **Visibility**: string
* **Width**: string (Required): String based length that is composed of value and unit in px
* **XAxisLocation**: string (Required): String based length that is composed of value and unit in px
* **YAxisLocation**: string (Required): String based length that is composed of value and unit in px with Integer.MAX_VALUE as maximum value

## FreeFormLayoutElement
### Properties
* **BackgroundStyle**: [FreeFormLayoutElementBackgroundStyle](#freeformlayoutelementbackgroundstyle)
* **BorderStyle**: [FreeFormLayoutElementBorderStyle](#freeformlayoutelementborderstyle)
* **ElementId**: string (Required)
* **ElementType**: string (Required)
* **Height**: string (Required): String based length that is composed of value and unit in px
* **LoadingAnimation**: [LoadingAnimation](#loadinganimation)
* **RenderingRules**: [SheetElementRenderingRule](#sheetelementrenderingrule)[]
* **SelectedBorderStyle**: [FreeFormLayoutElementBorderStyle](#freeformlayoutelementborderstyle)
* **Visibility**: [Template_Visibility](#templatevisibility)
* **Width**: string (Required): String based length that is composed of value and unit in px
* **XAxisLocation**: string (Required): String based length that is composed of value and unit in px
* **YAxisLocation**: string (Required): String based length that is composed of value and unit in px with Integer.MAX_VALUE as maximum value

## FreeFormLayoutElementBackgroundStyle
### Properties
* **Color**: string
* **Visibility**: string

## FreeFormLayoutElementBackgroundStyle
### Properties
* **Color**: string
* **Visibility**: string

## FreeFormLayoutElementBackgroundStyle
### Properties
* **Color**: string
* **Visibility**: [Template_Visibility](#templatevisibility)

## FreeFormLayoutElementBorderStyle
### Properties
* **Color**: string
* **Visibility**: string

## FreeFormLayoutElementBorderStyle
### Properties
* **Color**: string
* **Visibility**: string

## FreeFormLayoutElementBorderStyle
### Properties
* **Color**: string
* **Visibility**: [Template_Visibility](#templatevisibility)

## FreeFormLayoutScreenCanvasSizeOptions
### Properties
* **OptimizedViewPortWidth**: string (Required): String based length that is composed of value and unit in px

## FreeFormLayoutScreenCanvasSizeOptions
### Properties
* **OptimizedViewPortWidth**: string (Required): String based length that is composed of value and unit in px

## FreeFormLayoutScreenCanvasSizeOptions
### Properties
* **OptimizedViewPortWidth**: string (Required): String based length that is composed of value and unit in px

## FreeFormSectionLayoutConfiguration
### Properties
* **Elements**: [FreeFormLayoutElement](#freeformlayoutelement)[] (Required)

## FreeFormSectionLayoutConfiguration
### Properties
* **Elements**: [FreeFormLayoutElement](#freeformlayoutelement)[] (Required)

## FreeFormSectionLayoutConfiguration
### Properties
* **Elements**: [FreeFormLayoutElement](#freeformlayoutelement)[] (Required)

## FunnelChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## FunnelChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## FunnelChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## FunnelChartConfiguration
### Properties
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **DataLabelOptions**: [FunnelChartDataLabelOptions](#funnelchartdatalabeloptions)
* **FieldWells**: [FunnelChartFieldWells](#funnelchartfieldwells)
* **SortConfiguration**: [FunnelChartSortConfiguration](#funnelchartsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **ValueLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **VisualPalette**: [VisualPalette](#visualpalette)

## FunnelChartConfiguration
### Properties
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **DataLabelOptions**: [FunnelChartDataLabelOptions](#funnelchartdatalabeloptions)
* **FieldWells**: [FunnelChartFieldWells](#funnelchartfieldwells)
* **SortConfiguration**: [FunnelChartSortConfiguration](#funnelchartsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **ValueLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **VisualPalette**: [VisualPalette](#visualpalette)

## FunnelChartConfiguration
### Properties
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **DataLabelOptions**: [FunnelChartDataLabelOptions](#funnelchartdatalabeloptions)
* **FieldWells**: [FunnelChartFieldWells](#funnelchartfieldwells)
* **SortConfiguration**: [FunnelChartSortConfiguration](#funnelchartsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **ValueLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **VisualPalette**: [VisualPalette](#visualpalette)

## FunnelChartDataLabelOptions
### Properties
* **CategoryLabelVisibility**: string
* **LabelColor**: string
* **LabelFontConfiguration**: [FontConfiguration](#fontconfiguration)
* **MeasureDataLabelStyle**: string
* **MeasureLabelVisibility**: string
* **Position**: string
* **Visibility**: string

## FunnelChartDataLabelOptions
### Properties
* **CategoryLabelVisibility**: string
* **LabelColor**: string
* **LabelFontConfiguration**: [FontConfiguration](#fontconfiguration)
* **MeasureDataLabelStyle**: string
* **MeasureLabelVisibility**: string
* **Position**: string
* **Visibility**: string

## FunnelChartDataLabelOptions
### Properties
* **CategoryLabelVisibility**: [Template_CategoryLabelVisibility](#templatecategorylabelvisibility)
* **LabelColor**: string
* **LabelFontConfiguration**: [FontConfiguration](#fontconfiguration)
* **MeasureDataLabelStyle**: string
* **MeasureLabelVisibility**: [Template_MeasureLabelVisibility](#templatemeasurelabelvisibility)
* **Position**: string
* **Visibility**: [Template_Visibility](#templatevisibility)

## FunnelChartFieldWells
### Properties
* **FunnelChartAggregatedFieldWells**: [FunnelChartAggregatedFieldWells](#funnelchartaggregatedfieldwells)

## FunnelChartFieldWells
### Properties
* **FunnelChartAggregatedFieldWells**: [FunnelChartAggregatedFieldWells](#funnelchartaggregatedfieldwells)

## FunnelChartFieldWells
### Properties
* **FunnelChartAggregatedFieldWells**: [FunnelChartAggregatedFieldWells](#funnelchartaggregatedfieldwells)

## FunnelChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## FunnelChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## FunnelChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## FunnelChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [FunnelChartConfiguration](#funnelchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## FunnelChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [FunnelChartConfiguration](#funnelchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## FunnelChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [FunnelChartConfiguration](#funnelchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## GaugeChartArcConditionalFormatting
### Properties
* **ForegroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## GaugeChartArcConditionalFormatting
### Properties
* **ForegroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## GaugeChartArcConditionalFormatting
### Properties
* **ForegroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## GaugeChartConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [GaugeChartConditionalFormattingOption](#gaugechartconditionalformattingoption)[]

## GaugeChartConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [GaugeChartConditionalFormattingOption](#gaugechartconditionalformattingoption)[]

## GaugeChartConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [GaugeChartConditionalFormattingOption](#gaugechartconditionalformattingoption)[]

## GaugeChartConditionalFormattingOption
### Properties
* **Arc**: [GaugeChartArcConditionalFormatting](#gaugechartarcconditionalformatting)
* **PrimaryValue**: [GaugeChartPrimaryValueConditionalFormatting](#gaugechartprimaryvalueconditionalformatting)

## GaugeChartConditionalFormattingOption
### Properties
* **Arc**: [GaugeChartArcConditionalFormatting](#gaugechartarcconditionalformatting)
* **PrimaryValue**: [GaugeChartPrimaryValueConditionalFormatting](#gaugechartprimaryvalueconditionalformatting)

## GaugeChartConditionalFormattingOption
### Properties
* **Arc**: [GaugeChartArcConditionalFormatting](#gaugechartarcconditionalformatting)
* **PrimaryValue**: [GaugeChartPrimaryValueConditionalFormatting](#gaugechartprimaryvalueconditionalformatting)

## GaugeChartConfiguration
### Properties
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [GaugeChartFieldWells](#gaugechartfieldwells)
* **GaugeChartOptions**: [GaugeChartOptions](#gaugechartoptions)
* **TooltipOptions**: [TooltipOptions](#tooltipoptions)
* **VisualPalette**: [VisualPalette](#visualpalette)

## GaugeChartConfiguration
### Properties
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [GaugeChartFieldWells](#gaugechartfieldwells)
* **GaugeChartOptions**: [GaugeChartOptions](#gaugechartoptions)
* **TooltipOptions**: [TooltipOptions](#tooltipoptions)
* **VisualPalette**: [VisualPalette](#visualpalette)

## GaugeChartConfiguration
### Properties
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [GaugeChartFieldWells](#gaugechartfieldwells)
* **GaugeChartOptions**: [GaugeChartOptions](#gaugechartoptions)
* **TooltipOptions**: [TooltipOptions](#tooltipoptions)
* **VisualPalette**: [VisualPalette](#visualpalette)

## GaugeChartFieldWells
### Properties
* **TargetValues**: [MeasureField](#measurefield)[]
* **Values**: [MeasureField](#measurefield)[]

## GaugeChartFieldWells
### Properties
* **TargetValues**: [MeasureField](#measurefield)[]
* **Values**: [MeasureField](#measurefield)[]

## GaugeChartFieldWells
### Properties
* **TargetValues**: [MeasureField](#measurefield)[]
* **Values**: [MeasureField](#measurefield)[]

## GaugeChartOptions
### Properties
* **Arc**: [ArcConfiguration](#arcconfiguration)
* **ArcAxis**: [ArcAxisConfiguration](#arcaxisconfiguration)
* **Comparison**: [ComparisonConfiguration](#comparisonconfiguration)
* **PrimaryValueDisplayType**: string
* **PrimaryValueFontConfiguration**: [FontConfiguration](#fontconfiguration)

## GaugeChartOptions
### Properties
* **Arc**: [ArcConfiguration](#arcconfiguration)
* **ArcAxis**: [ArcAxisConfiguration](#arcaxisconfiguration)
* **Comparison**: [ComparisonConfiguration](#comparisonconfiguration)
* **PrimaryValueDisplayType**: string
* **PrimaryValueFontConfiguration**: [FontConfiguration](#fontconfiguration)

## GaugeChartOptions
### Properties
* **Arc**: [ArcConfiguration](#arcconfiguration)
* **ArcAxis**: [ArcAxisConfiguration](#arcaxisconfiguration)
* **Comparison**: [ComparisonConfiguration](#comparisonconfiguration)
* **PrimaryValueDisplayType**: string
* **PrimaryValueFontConfiguration**: [FontConfiguration](#fontconfiguration)

## GaugeChartPrimaryValueConditionalFormatting
### Properties
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## GaugeChartPrimaryValueConditionalFormatting
### Properties
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## GaugeChartPrimaryValueConditionalFormatting
### Properties
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## GaugeChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [GaugeChartConfiguration](#gaugechartconfiguration)
* **ConditionalFormatting**: [GaugeChartConditionalFormatting](#gaugechartconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## GaugeChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [GaugeChartConfiguration](#gaugechartconfiguration)
* **ConditionalFormatting**: [GaugeChartConditionalFormatting](#gaugechartconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## GaugeChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [GaugeChartConfiguration](#gaugechartconfiguration)
* **ConditionalFormatting**: [GaugeChartConditionalFormatting](#gaugechartconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## GeospatialCategoricalColor
### Properties
* **CategoryDataColors**: [GeospatialCategoricalDataColor](#geospatialcategoricaldatacolor)[] (Required)
* **DefaultOpacity**: int
* **NullDataSettings**: [GeospatialNullDataSettings](#geospatialnulldatasettings)
* **NullDataVisibility**: string

## GeospatialCategoricalColor
### Properties
* **CategoryDataColors**: [GeospatialCategoricalDataColor](#geospatialcategoricaldatacolor)[] (Required)
* **DefaultOpacity**: int
* **NullDataSettings**: [GeospatialNullDataSettings](#geospatialnulldatasettings)
* **NullDataVisibility**: string

## GeospatialCategoricalDataColor
### Properties
* **Color**: string (Required)
* **DataValue**: string (Required)

## GeospatialCategoricalDataColor
### Properties
* **Color**: string (Required)
* **DataValue**: string (Required)

## GeospatialCircleRadius
### Properties
* **Radius**: int

## GeospatialCircleRadius
### Properties
* **Radius**: int

## GeospatialCircleSymbolStyle
### Properties
* **CircleRadius**: [GeospatialCircleRadius](#geospatialcircleradius)
* **FillColor**: [GeospatialColor](#geospatialcolor)
* **StrokeColor**: [GeospatialColor](#geospatialcolor)
* **StrokeWidth**: [GeospatialLineWidth](#geospatiallinewidth)

## GeospatialCircleSymbolStyle
### Properties
* **CircleRadius**: [GeospatialCircleRadius](#geospatialcircleradius)
* **FillColor**: [GeospatialColor](#geospatialcolor)
* **StrokeColor**: [GeospatialColor](#geospatialcolor)
* **StrokeWidth**: [GeospatialLineWidth](#geospatiallinewidth)

## GeospatialColor
### Properties
* **Categorical**: [GeospatialCategoricalColor](#geospatialcategoricalcolor)
* **Gradient**: [GeospatialGradientColor](#geospatialgradientcolor)
* **Solid**: [GeospatialSolidColor](#geospatialsolidcolor)

## GeospatialColor
### Properties
* **Categorical**: [GeospatialCategoricalColor](#geospatialcategoricalcolor)
* **Gradient**: [GeospatialGradientColor](#geospatialgradientcolor)
* **Solid**: [GeospatialSolidColor](#geospatialsolidcolor)

## GeoSpatialColumnGroup
### Properties
* **Columns**: string[] (Required): <p>Columns in this hierarchy.</p>
* **CountryCode**: string
* **Name**: string (Required): <p>A display name for the hierarchy.</p>

## GeospatialCoordinateBounds
### Properties
* **East**: int (Required)
* **North**: int (Required)
* **South**: int (Required)
* **West**: int (Required)

## GeospatialCoordinateBounds
### Properties
* **East**: int (Required)
* **North**: int (Required)
* **South**: int (Required)
* **West**: int (Required)

## GeospatialCoordinateBounds
### Properties
* **East**: int (Required)
* **North**: int (Required)
* **South**: int (Required)
* **West**: int (Required)

## GeospatialDataSourceItem
### Properties
* **StaticFileDataSource**: [GeospatialStaticFileSource](#geospatialstaticfilesource)

## GeospatialDataSourceItem
### Properties
* **StaticFileDataSource**: [GeospatialStaticFileSource](#geospatialstaticfilesource)

## GeospatialGradientColor
### Properties
* **DefaultOpacity**: int
* **NullDataSettings**: [GeospatialNullDataSettings](#geospatialnulldatasettings)
* **NullDataVisibility**: string
* **StepColors**: [GeospatialGradientStepColor](#geospatialgradientstepcolor)[] (Required)

## GeospatialGradientColor
### Properties
* **DefaultOpacity**: int
* **NullDataSettings**: [GeospatialNullDataSettings](#geospatialnulldatasettings)
* **NullDataVisibility**: string
* **StepColors**: [GeospatialGradientStepColor](#geospatialgradientstepcolor)[] (Required)

## GeospatialGradientStepColor
### Properties
* **Color**: string (Required)
* **DataValue**: int (Required)

## GeospatialGradientStepColor
### Properties
* **Color**: string (Required)
* **DataValue**: int (Required)

## GeospatialHeatmapColorScale
### Properties
* **Colors**: [GeospatialHeatmapDataColor](#geospatialheatmapdatacolor)[]

## GeospatialHeatmapColorScale
### Properties
* **Colors**: [GeospatialHeatmapDataColor](#geospatialheatmapdatacolor)[]

## GeospatialHeatmapColorScale
### Properties
* **Colors**: [GeospatialHeatmapDataColor](#geospatialheatmapdatacolor)[]

## GeospatialHeatmapConfiguration
### Properties
* **HeatmapColor**: [GeospatialHeatmapColorScale](#geospatialheatmapcolorscale)

## GeospatialHeatmapConfiguration
### Properties
* **HeatmapColor**: [GeospatialHeatmapColorScale](#geospatialheatmapcolorscale)

## GeospatialHeatmapConfiguration
### Properties
* **HeatmapColor**: [GeospatialHeatmapColorScale](#geospatialheatmapcolorscale)

## GeospatialHeatmapDataColor
### Properties
* **Color**: string (Required)

## GeospatialHeatmapDataColor
### Properties
* **Color**: string (Required)

## GeospatialHeatmapDataColor
### Properties
* **Color**: string (Required)

## GeospatialLayerColorField
### Properties
* **ColorDimensionsFields**: [DimensionField](#dimensionfield)[]
* **ColorValuesFields**: [MeasureField](#measurefield)[]

## GeospatialLayerColorField
### Properties
* **ColorDimensionsFields**: [DimensionField](#dimensionfield)[]
* **ColorValuesFields**: [MeasureField](#measurefield)[]

## GeospatialLayerDefinition
### Properties
* **LineLayer**: [GeospatialLineLayer](#geospatiallinelayer)
* **PointLayer**: [GeospatialPointLayer](#geospatialpointlayer)
* **PolygonLayer**: [GeospatialPolygonLayer](#geospatialpolygonlayer)

## GeospatialLayerDefinition
### Properties
* **LineLayer**: [GeospatialLineLayer](#geospatiallinelayer)
* **PointLayer**: [GeospatialPointLayer](#geospatialpointlayer)
* **PolygonLayer**: [GeospatialPolygonLayer](#geospatialpolygonlayer)

## GeospatialLayerItem
### Properties
* **Actions**: [LayerCustomAction](#layercustomaction)[]
* **DataSource**: [GeospatialDataSourceItem](#geospatialdatasourceitem)
* **JoinDefinition**: [GeospatialLayerJoinDefinition](#geospatiallayerjoindefinition)
* **Label**: string
* **LayerDefinition**: [GeospatialLayerDefinition](#geospatiallayerdefinition)
* **LayerId**: string (Required)
* **LayerType**: string
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **Visibility**: string

## GeospatialLayerItem
### Properties
* **Actions**: [LayerCustomAction](#layercustomaction)[]
* **DataSource**: [GeospatialDataSourceItem](#geospatialdatasourceitem)
* **JoinDefinition**: [GeospatialLayerJoinDefinition](#geospatiallayerjoindefinition)
* **Label**: string
* **LayerDefinition**: [GeospatialLayerDefinition](#geospatiallayerdefinition)
* **LayerId**: string (Required)
* **LayerType**: string
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **Visibility**: string

## GeospatialLayerJoinDefinition
### Properties
* **ColorField**: [GeospatialLayerColorField](#geospatiallayercolorfield)
* **DatasetKeyField**: [UnaggregatedField](#unaggregatedfield)
* **ShapeKeyField**: string

## GeospatialLayerJoinDefinition
### Properties
* **ColorField**: [GeospatialLayerColorField](#geospatiallayercolorfield)
* **DatasetKeyField**: [UnaggregatedField](#unaggregatedfield)
* **ShapeKeyField**: string

## GeospatialLayerMapConfiguration
### Properties
* **Interactions**: [Analysis_Interactions](#analysisinteractions)
* **Legend**: [LegendOptions](#legendoptions)
* **MapLayers**: [GeospatialLayerItem](#geospatiallayeritem)[]
* **MapState**: [GeospatialMapState](#geospatialmapstate)
* **MapStyle**: [GeospatialMapStyle](#geospatialmapstyle)

## GeospatialLayerMapConfiguration
### Properties
* **Interactions**: [Dashboard_Interactions](#dashboardinteractions)
* **Legend**: [LegendOptions](#legendoptions)
* **MapLayers**: [GeospatialLayerItem](#geospatiallayeritem)[]
* **MapState**: [GeospatialMapState](#geospatialmapstate)
* **MapStyle**: [GeospatialMapStyle](#geospatialmapstyle)

## GeospatialLineLayer
### Properties
* **Style**: [GeospatialLineStyle](#geospatiallinestyle) (Required)

## GeospatialLineLayer
### Properties
* **Style**: [GeospatialLineStyle](#geospatiallinestyle) (Required)

## GeospatialLineStyle
### Properties
* **LineSymbolStyle**: [GeospatialLineSymbolStyle](#geospatiallinesymbolstyle)

## GeospatialLineStyle
### Properties
* **LineSymbolStyle**: [GeospatialLineSymbolStyle](#geospatiallinesymbolstyle)

## GeospatialLineSymbolStyle
### Properties
* **FillColor**: [GeospatialColor](#geospatialcolor)
* **LineWidth**: [GeospatialLineWidth](#geospatiallinewidth)

## GeospatialLineSymbolStyle
### Properties
* **FillColor**: [GeospatialColor](#geospatialcolor)
* **LineWidth**: [GeospatialLineWidth](#geospatiallinewidth)

## GeospatialLineWidth
### Properties
* **LineWidth**: int

## GeospatialLineWidth
### Properties
* **LineWidth**: int

## GeospatialMapAggregatedFieldWells
### Properties
* **Colors**: [DimensionField](#dimensionfield)[]
* **Geospatial**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## GeospatialMapAggregatedFieldWells
### Properties
* **Colors**: [DimensionField](#dimensionfield)[]
* **Geospatial**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## GeospatialMapAggregatedFieldWells
### Properties
* **Colors**: [DimensionField](#dimensionfield)[]
* **Geospatial**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## GeospatialMapConfiguration
### Properties
* **FieldWells**: [GeospatialMapFieldWells](#geospatialmapfieldwells)
* **Interactions**: [Analysis_Interactions](#analysisinteractions)
* **Legend**: [LegendOptions](#legendoptions)
* **MapStyleOptions**: [GeospatialMapStyleOptions](#geospatialmapstyleoptions)
* **PointStyleOptions**: [GeospatialPointStyleOptions](#geospatialpointstyleoptions)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **VisualPalette**: [VisualPalette](#visualpalette)
* **WindowOptions**: [GeospatialWindowOptions](#geospatialwindowoptions)

## GeospatialMapConfiguration
### Properties
* **FieldWells**: [GeospatialMapFieldWells](#geospatialmapfieldwells)
* **Interactions**: [Dashboard_Interactions](#dashboardinteractions)
* **Legend**: [LegendOptions](#legendoptions)
* **MapStyleOptions**: [GeospatialMapStyleOptions](#geospatialmapstyleoptions)
* **PointStyleOptions**: [GeospatialPointStyleOptions](#geospatialpointstyleoptions)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **VisualPalette**: [VisualPalette](#visualpalette)
* **WindowOptions**: [GeospatialWindowOptions](#geospatialwindowoptions)

## GeospatialMapConfiguration
### Properties
* **FieldWells**: [GeospatialMapFieldWells](#geospatialmapfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **MapStyleOptions**: [GeospatialMapStyleOptions](#geospatialmapstyleoptions)
* **PointStyleOptions**: [GeospatialPointStyleOptions](#geospatialpointstyleoptions)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **VisualPalette**: [VisualPalette](#visualpalette)
* **WindowOptions**: [GeospatialWindowOptions](#geospatialwindowoptions)

## GeospatialMapFieldWells
### Properties
* **GeospatialMapAggregatedFieldWells**: [GeospatialMapAggregatedFieldWells](#geospatialmapaggregatedfieldwells)

## GeospatialMapFieldWells
### Properties
* **GeospatialMapAggregatedFieldWells**: [GeospatialMapAggregatedFieldWells](#geospatialmapaggregatedfieldwells)

## GeospatialMapFieldWells
### Properties
* **GeospatialMapAggregatedFieldWells**: [GeospatialMapAggregatedFieldWells](#geospatialmapaggregatedfieldwells)

## GeospatialMapState
### Properties
* **Bounds**: [GeospatialCoordinateBounds](#geospatialcoordinatebounds)
* **MapNavigation**: string

## GeospatialMapState
### Properties
* **Bounds**: [GeospatialCoordinateBounds](#geospatialcoordinatebounds)
* **MapNavigation**: string

## GeospatialMapStyle
### Properties
* **BackgroundColor**: string
* **BaseMapStyle**: string
* **BaseMapVisibility**: string

## GeospatialMapStyle
### Properties
* **BackgroundColor**: string
* **BaseMapStyle**: string
* **BaseMapVisibility**: string

## GeospatialMapStyleOptions
### Properties
* **BaseMapStyle**: string

## GeospatialMapStyleOptions
### Properties
* **BaseMapStyle**: string

## GeospatialMapStyleOptions
### Properties
* **BaseMapStyle**: string

## GeospatialMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [GeospatialMapConfiguration](#geospatialmapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## GeospatialMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [GeospatialMapConfiguration](#geospatialmapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## GeospatialMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [GeospatialMapConfiguration](#geospatialmapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## GeospatialNullDataSettings
### Properties
* **SymbolStyle**: [GeospatialNullSymbolStyle](#geospatialnullsymbolstyle) (Required)

## GeospatialNullDataSettings
### Properties
* **SymbolStyle**: [GeospatialNullSymbolStyle](#geospatialnullsymbolstyle) (Required)

## GeospatialNullSymbolStyle
### Properties
* **FillColor**: string
* **StrokeColor**: string
* **StrokeWidth**: int

## GeospatialNullSymbolStyle
### Properties
* **FillColor**: string
* **StrokeColor**: string
* **StrokeWidth**: int

## GeospatialPointLayer
### Properties
* **Style**: [GeospatialPointStyle](#geospatialpointstyle) (Required)

## GeospatialPointLayer
### Properties
* **Style**: [GeospatialPointStyle](#geospatialpointstyle) (Required)

## GeospatialPointStyle
### Properties
* **CircleSymbolStyle**: [GeospatialCircleSymbolStyle](#geospatialcirclesymbolstyle)

## GeospatialPointStyle
### Properties
* **CircleSymbolStyle**: [GeospatialCircleSymbolStyle](#geospatialcirclesymbolstyle)

## GeospatialPointStyleOptions
### Properties
* **ClusterMarkerConfiguration**: [ClusterMarkerConfiguration](#clustermarkerconfiguration)
* **HeatmapConfiguration**: [GeospatialHeatmapConfiguration](#geospatialheatmapconfiguration)
* **SelectedPointStyle**: string

## GeospatialPointStyleOptions
### Properties
* **ClusterMarkerConfiguration**: [ClusterMarkerConfiguration](#clustermarkerconfiguration)
* **HeatmapConfiguration**: [GeospatialHeatmapConfiguration](#geospatialheatmapconfiguration)
* **SelectedPointStyle**: string

## GeospatialPointStyleOptions
### Properties
* **ClusterMarkerConfiguration**: [ClusterMarkerConfiguration](#clustermarkerconfiguration)
* **HeatmapConfiguration**: [GeospatialHeatmapConfiguration](#geospatialheatmapconfiguration)
* **SelectedPointStyle**: string

## GeospatialPolygonLayer
### Properties
* **Style**: [GeospatialPolygonStyle](#geospatialpolygonstyle) (Required)

## GeospatialPolygonLayer
### Properties
* **Style**: [GeospatialPolygonStyle](#geospatialpolygonstyle) (Required)

## GeospatialPolygonStyle
### Properties
* **PolygonSymbolStyle**: [GeospatialPolygonSymbolStyle](#geospatialpolygonsymbolstyle)

## GeospatialPolygonStyle
### Properties
* **PolygonSymbolStyle**: [GeospatialPolygonSymbolStyle](#geospatialpolygonsymbolstyle)

## GeospatialPolygonSymbolStyle
### Properties
* **FillColor**: [GeospatialColor](#geospatialcolor)
* **StrokeColor**: [GeospatialColor](#geospatialcolor)
* **StrokeWidth**: [GeospatialLineWidth](#geospatiallinewidth)

## GeospatialPolygonSymbolStyle
### Properties
* **FillColor**: [GeospatialColor](#geospatialcolor)
* **StrokeColor**: [GeospatialColor](#geospatialcolor)
* **StrokeWidth**: [GeospatialLineWidth](#geospatiallinewidth)

## GeospatialSolidColor
### Properties
* **Color**: string (Required)
* **State**: string

## GeospatialSolidColor
### Properties
* **Color**: string (Required)
* **State**: string

## GeospatialStaticFileSource
### Properties
* **StaticFileId**: string (Required)

## GeospatialStaticFileSource
### Properties
* **StaticFileId**: string (Required)

## GeospatialWindowOptions
### Properties
* **Bounds**: [GeospatialCoordinateBounds](#geospatialcoordinatebounds)
* **MapZoomMode**: string

## GeospatialWindowOptions
### Properties
* **Bounds**: [GeospatialCoordinateBounds](#geospatialcoordinatebounds)
* **MapZoomMode**: string

## GeospatialWindowOptions
### Properties
* **Bounds**: [GeospatialCoordinateBounds](#geospatialcoordinatebounds)
* **MapZoomMode**: string

## GlobalTableBorderOptions
### Properties
* **SideSpecificBorder**: [TableSideBorderOptions](#tablesideborderoptions)
* **UniformBorder**: [TableBorderOptions](#tableborderoptions)

## GlobalTableBorderOptions
### Properties
* **SideSpecificBorder**: [TableSideBorderOptions](#tablesideborderoptions)
* **UniformBorder**: [TableBorderOptions](#tableborderoptions)

## GlobalTableBorderOptions
### Properties
* **SideSpecificBorder**: [TableSideBorderOptions](#tablesideborderoptions)
* **UniformBorder**: [TableBorderOptions](#tableborderoptions)

## GradientColor
### Properties
* **Stops**: [GradientStop](#gradientstop)[]

## GradientColor
### Properties
* **Stops**: [GradientStop](#gradientstop)[]

## GradientColor
### Properties
* **Stops**: [GradientStop](#gradientstop)[]

## GradientStop
### Properties
* **Color**: string
* **DataValue**: int
* **GradientOffset**: int (Required)

## GradientStop
### Properties
* **Color**: string
* **DataValue**: int
* **GradientOffset**: int (Required)

## GradientStop
### Properties
* **Color**: string
* **DataValue**: int
* **GradientOffset**: int (Required)

## GridLayoutCanvasSizeOptions
### Properties
* **ScreenCanvasSizeOptions**: [GridLayoutScreenCanvasSizeOptions](#gridlayoutscreencanvassizeoptions)

## GridLayoutCanvasSizeOptions
### Properties
* **ScreenCanvasSizeOptions**: [GridLayoutScreenCanvasSizeOptions](#gridlayoutscreencanvassizeoptions)

## GridLayoutCanvasSizeOptions
### Properties
* **ScreenCanvasSizeOptions**: [GridLayoutScreenCanvasSizeOptions](#gridlayoutscreencanvassizeoptions)

## GridLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [GridLayoutCanvasSizeOptions](#gridlayoutcanvassizeoptions)
* **Elements**: [GridLayoutElement](#gridlayoutelement)[] (Required)

## GridLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [GridLayoutCanvasSizeOptions](#gridlayoutcanvassizeoptions)
* **Elements**: [GridLayoutElement](#gridlayoutelement)[] (Required)

## GridLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [GridLayoutCanvasSizeOptions](#gridlayoutcanvassizeoptions)
* **Elements**: [GridLayoutElement](#gridlayoutelement)[] (Required)

## GridLayoutElement
### Properties
* **ColumnIndex**: int
* **ColumnSpan**: int (Required)
* **ElementId**: string (Required)
* **ElementType**: string (Required)
* **RowIndex**: int
* **RowSpan**: int (Required)

## GridLayoutElement
### Properties
* **ColumnIndex**: int
* **ColumnSpan**: int (Required)
* **ElementId**: string (Required)
* **ElementType**: string (Required)
* **RowIndex**: int
* **RowSpan**: int (Required)

## GridLayoutElement
### Properties
* **ColumnIndex**: int
* **ColumnSpan**: int (Required)
* **ElementId**: string (Required)
* **ElementType**: string (Required)
* **RowIndex**: int
* **RowSpan**: int (Required)

## GridLayoutScreenCanvasSizeOptions
### Properties
* **OptimizedViewPortWidth**: string: String based length that is composed of value and unit in px
* **ResizeOption**: string (Required)

## GridLayoutScreenCanvasSizeOptions
### Properties
* **OptimizedViewPortWidth**: string: String based length that is composed of value and unit in px
* **ResizeOption**: string (Required)

## GridLayoutScreenCanvasSizeOptions
### Properties
* **OptimizedViewPortWidth**: string: String based length that is composed of value and unit in px
* **ResizeOption**: string (Required)

## GrowthRateComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **PeriodSize**: int
* **Time**: [DimensionField](#dimensionfield)
* **Value**: [MeasureField](#measurefield)

## GrowthRateComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **PeriodSize**: int
* **Time**: [DimensionField](#dimensionfield)
* **Value**: [MeasureField](#measurefield)

## GrowthRateComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **PeriodSize**: int
* **Time**: [DimensionField](#dimensionfield)
* **Value**: [MeasureField](#measurefield)

## GutterStyle
### Properties
* **Show**: bool: <p>This Boolean value controls whether to display a gutter space between sheet tiles.
        </p>

## HeaderFooterSectionConfiguration
### Properties
* **Layout**: [SectionLayoutConfiguration](#sectionlayoutconfiguration) (Required)
* **SectionId**: string (Required)
* **Style**: [SectionStyle](#sectionstyle)

## HeaderFooterSectionConfiguration
### Properties
* **Layout**: [SectionLayoutConfiguration](#sectionlayoutconfiguration) (Required)
* **SectionId**: string (Required)
* **Style**: [SectionStyle](#sectionstyle)

## HeaderFooterSectionConfiguration
### Properties
* **Layout**: [SectionLayoutConfiguration](#sectionlayoutconfiguration) (Required)
* **SectionId**: string (Required)
* **Style**: [SectionStyle](#sectionstyle)

## HeatMapAggregatedFieldWells
### Properties
* **Columns**: [DimensionField](#dimensionfield)[]
* **Rows**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## HeatMapAggregatedFieldWells
### Properties
* **Columns**: [DimensionField](#dimensionfield)[]
* **Rows**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## HeatMapAggregatedFieldWells
### Properties
* **Columns**: [DimensionField](#dimensionfield)[]
* **Rows**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## HeatMapConfiguration
### Properties
* **ColorScale**: [ColorScale](#colorscale)
* **ColumnLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [HeatMapFieldWells](#heatmapfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **RowLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **SortConfiguration**: [HeatMapSortConfiguration](#heatmapsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)

## HeatMapConfiguration
### Properties
* **ColorScale**: [ColorScale](#colorscale)
* **ColumnLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [HeatMapFieldWells](#heatmapfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **RowLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **SortConfiguration**: [HeatMapSortConfiguration](#heatmapsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)

## HeatMapConfiguration
### Properties
* **ColorScale**: [ColorScale](#colorscale)
* **ColumnLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [HeatMapFieldWells](#heatmapfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **RowLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **SortConfiguration**: [HeatMapSortConfiguration](#heatmapsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)

## HeatMapFieldWells
### Properties
* **HeatMapAggregatedFieldWells**: [HeatMapAggregatedFieldWells](#heatmapaggregatedfieldwells)

## HeatMapFieldWells
### Properties
* **HeatMapAggregatedFieldWells**: [HeatMapAggregatedFieldWells](#heatmapaggregatedfieldwells)

## HeatMapFieldWells
### Properties
* **HeatMapAggregatedFieldWells**: [HeatMapAggregatedFieldWells](#heatmapaggregatedfieldwells)

## HeatMapSortConfiguration
### Properties
* **HeatMapColumnItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **HeatMapColumnSort**: [FieldSortOptions](#fieldsortoptions)[]
* **HeatMapRowItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **HeatMapRowSort**: [FieldSortOptions](#fieldsortoptions)[]

## HeatMapSortConfiguration
### Properties
* **HeatMapColumnItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **HeatMapColumnSort**: [FieldSortOptions](#fieldsortoptions)[]
* **HeatMapRowItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **HeatMapRowSort**: [FieldSortOptions](#fieldsortoptions)[]

## HeatMapSortConfiguration
### Properties
* **HeatMapColumnItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **HeatMapColumnSort**: [FieldSortOptions](#fieldsortoptions)[]
* **HeatMapRowItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **HeatMapRowSort**: [FieldSortOptions](#fieldsortoptions)[]

## HeatMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [HeatMapConfiguration](#heatmapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## HeatMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [HeatMapConfiguration](#heatmapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## HeatMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [HeatMapConfiguration](#heatmapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## HistogramAggregatedFieldWells
### Properties
* **Values**: [MeasureField](#measurefield)[]

## HistogramAggregatedFieldWells
### Properties
* **Values**: [MeasureField](#measurefield)[]

## HistogramAggregatedFieldWells
### Properties
* **Values**: [MeasureField](#measurefield)[]

## HistogramBinOptions
### Properties
* **BinCount**: [BinCountOptions](#bincountoptions)
* **BinWidth**: [BinWidthOptions](#binwidthoptions)
* **SelectedBinType**: string
* **StartValue**: int

## HistogramBinOptions
### Properties
* **BinCount**: [BinCountOptions](#bincountoptions)
* **BinWidth**: [BinWidthOptions](#binwidthoptions)
* **SelectedBinType**: string
* **StartValue**: int

## HistogramBinOptions
### Properties
* **BinCount**: [BinCountOptions](#bincountoptions)
* **BinWidth**: [BinWidthOptions](#binwidthoptions)
* **SelectedBinType**: string
* **StartValue**: int

## HistogramConfiguration
### Properties
* **BinOptions**: [HistogramBinOptions](#histogrambinoptions)
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [HistogramFieldWells](#histogramfieldwells)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **VisualPalette**: [VisualPalette](#visualpalette)
* **XAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **XAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **YAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)

## HistogramConfiguration
### Properties
* **BinOptions**: [HistogramBinOptions](#histogrambinoptions)
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [HistogramFieldWells](#histogramfieldwells)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **VisualPalette**: [VisualPalette](#visualpalette)
* **XAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **XAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **YAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)

## HistogramConfiguration
### Properties
* **BinOptions**: [HistogramBinOptions](#histogrambinoptions)
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [HistogramFieldWells](#histogramfieldwells)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **VisualPalette**: [VisualPalette](#visualpalette)
* **XAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **XAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **YAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)

## HistogramFieldWells
### Properties
* **HistogramAggregatedFieldWells**: [HistogramAggregatedFieldWells](#histogramaggregatedfieldwells)

## HistogramFieldWells
### Properties
* **HistogramAggregatedFieldWells**: [HistogramAggregatedFieldWells](#histogramaggregatedfieldwells)

## HistogramFieldWells
### Properties
* **HistogramAggregatedFieldWells**: [HistogramAggregatedFieldWells](#histogramaggregatedfieldwells)

## HistogramVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [HistogramConfiguration](#histogramconfiguration)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## HistogramVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [HistogramConfiguration](#histogramconfiguration)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## HistogramVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [HistogramConfiguration](#histogramconfiguration)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## IdentityCenterConfiguration
### Properties
* **EnableIdentityPropagation**: bool: <p>A Boolean option that controls whether Trusted Identity Propagation should be used.</p>

## ImageCustomAction
### Properties
* **ActionOperations**: [ImageCustomActionOperation](#imagecustomactionoperation)[] (Required)
* **CustomActionId**: string (Required)
* **Name**: string (Required)
* **Status**: string
* **Trigger**: string (Required)

## ImageCustomAction
### Properties
* **ActionOperations**: [ImageCustomActionOperation](#imagecustomactionoperation)[] (Required)
* **CustomActionId**: string (Required)
* **Name**: string (Required)
* **Status**: string
* **Trigger**: string (Required)

## ImageCustomAction
### Properties
* **ActionOperations**: [ImageCustomActionOperation](#imagecustomactionoperation)[] (Required)
* **CustomActionId**: string (Required)
* **Name**: string (Required)
* **Status**: string
* **Trigger**: string (Required)

## ImageCustomActionOperation
### Properties
* **NavigationOperation**: [CustomActionNavigationOperation](#customactionnavigationoperation)
* **SetParametersOperation**: [CustomActionSetParametersOperation](#customactionsetparametersoperation)
* **URLOperation**: [CustomActionURLOperation](#customactionurloperation)

## ImageCustomActionOperation
### Properties
* **NavigationOperation**: [CustomActionNavigationOperation](#customactionnavigationoperation)
* **SetParametersOperation**: [CustomActionSetParametersOperation](#customactionsetparametersoperation)
* **URLOperation**: [CustomActionURLOperation](#customactionurloperation)

## ImageCustomActionOperation
### Properties
* **NavigationOperation**: [CustomActionNavigationOperation](#customactionnavigationoperation)
* **SetParametersOperation**: [CustomActionSetParametersOperation](#customactionsetparametersoperation)
* **URLOperation**: [CustomActionURLOperation](#customactionurloperation)

## ImageInteractionOptions
### Properties
* **ImageMenuOption**: [ImageMenuOption](#imagemenuoption)

## ImageInteractionOptions
### Properties
* **ImageMenuOption**: [ImageMenuOption](#imagemenuoption)

## ImageInteractionOptions
### Properties
* **ImageMenuOption**: [ImageMenuOption](#imagemenuoption)

## ImageMenuOption
### Properties
* **AvailabilityStatus**: [Analysis_AvailabilityStatus](#analysisavailabilitystatus)

## ImageMenuOption
### Properties
* **AvailabilityStatus**: string

## ImageMenuOption
### Properties
* **AvailabilityStatus**: [Template_AvailabilityStatus](#templateavailabilitystatus)

## ImageStaticFile
### Properties
* **Source**: [StaticFileSource](#staticfilesource)
* **StaticFileId**: string (Required)

## ImageStaticFile
### Properties
* **Source**: [StaticFileSource](#staticfilesource)
* **StaticFileId**: string (Required)

## IncrementalRefresh
### Properties
* **LookbackWindow**: [LookbackWindow](#lookbackwindow) (Required)

## IngestionWaitPolicy
### Properties
* **IngestionWaitTimeInHours**: int: <p>The maximum time (in hours) to wait for Ingestion to complete. Default timeout is 36 hours.
 Applicable only when DataSetImportMode mode is set to SPICE and WaitForSpiceIngestion is set to true.</p>
* **WaitForSpiceIngestion**: bool: <p>Wait for SPICE ingestion to finish to mark dataset creation/update successful. Default (true).
  Applicable only when DataSetImportMode mode is set to SPICE.</p>

## InnerFilter
### Properties
* **CategoryInnerFilter**: [CategoryInnerFilter](#categoryinnerfilter)

## InnerFilter
### Properties
* **CategoryInnerFilter**: [CategoryInnerFilter](#categoryinnerfilter)

## InnerFilter
### Properties
* **CategoryInnerFilter**: [CategoryInnerFilter](#categoryinnerfilter)

## InsightConfiguration
### Properties
* **Computations**: [Computation](#computation)[]
* **CustomNarrative**: [CustomNarrativeOptions](#customnarrativeoptions)

## InsightConfiguration
### Properties
* **Computations**: [Computation](#computation)[]
* **CustomNarrative**: [CustomNarrativeOptions](#customnarrativeoptions)

## InsightConfiguration
### Properties
* **Computations**: [Computation](#computation)[]
* **CustomNarrative**: [CustomNarrativeOptions](#customnarrativeoptions)

## InsightVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **DataSetIdentifier**: string (Required)
* **InsightConfiguration**: [InsightConfiguration](#insightconfiguration)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## InsightVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **DataSetIdentifier**: string (Required)
* **InsightConfiguration**: [InsightConfiguration](#insightconfiguration)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## InsightVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **DataSetIdentifier**: string (Required)
* **InsightConfiguration**: [InsightConfiguration](#insightconfiguration)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## IntegerDatasetParameter
### Properties
* **DefaultValues**: [IntegerDatasetParameterDefaultValues](#integerdatasetparameterdefaultvalues)
* **Id**: string (Required): <p>An identifier for the integer parameter created in the dataset.</p>
* **Name**: string (Required): <p>The name of the integer parameter that is created in the dataset.</p>
* **ValueType**: string (Required)

## IntegerDatasetParameterDefaultValues
### Properties
* **StaticValues**: int[]: <p>A list of static default values for a given integer parameter.</p>

## IntegerDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **StaticValues**: int[]

## IntegerDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **StaticValues**: int[]

## IntegerDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **StaticValues**: int[]

## IntegerParameter
### Properties
* **Name**: string (Required): <p>The name of the integer parameter.</p>
* **Values**: int[] (Required): <p>The values for the integer parameter.</p>

## IntegerParameter
### Properties
* **Name**: string (Required): <p>The name of the integer parameter.</p>
* **Values**: int[] (Required): <p>The values for the integer parameter.</p>

## IntegerParameterDeclaration
### Properties
* **DefaultValues**: [IntegerDefaultValues](#integerdefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **ParameterValueType**: string (Required)
* **ValueWhenUnset**: [IntegerValueWhenUnsetConfiguration](#integervaluewhenunsetconfiguration)

## IntegerParameterDeclaration
### Properties
* **DefaultValues**: [IntegerDefaultValues](#integerdefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **ParameterValueType**: string (Required)
* **ValueWhenUnset**: [IntegerValueWhenUnsetConfiguration](#integervaluewhenunsetconfiguration)

## IntegerParameterDeclaration
### Properties
* **DefaultValues**: [IntegerDefaultValues](#integerdefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **ParameterValueType**: string (Required)
* **ValueWhenUnset**: [IntegerValueWhenUnsetConfiguration](#integervaluewhenunsetconfiguration)

## IntegerValueWhenUnsetConfiguration
### Properties
* **CustomValue**: int
* **ValueWhenUnsetOption**: string

## IntegerValueWhenUnsetConfiguration
### Properties
* **CustomValue**: int
* **ValueWhenUnsetOption**: string

## IntegerValueWhenUnsetConfiguration
### Properties
* **CustomValue**: int
* **ValueWhenUnsetOption**: string

## ItemsLimitConfiguration
### Properties
* **ItemsLimit**: int
* **OtherCategories**: string

## ItemsLimitConfiguration
### Properties
* **ItemsLimit**: int
* **OtherCategories**: string

## ItemsLimitConfiguration
### Properties
* **ItemsLimit**: int
* **OtherCategories**: string

## KPIActualValueConditionalFormatting
### Properties
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## KPIActualValueConditionalFormatting
### Properties
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## KPIActualValueConditionalFormatting
### Properties
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## KPIComparisonValueConditionalFormatting
### Properties
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## KPIComparisonValueConditionalFormatting
### Properties
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## KPIComparisonValueConditionalFormatting
### Properties
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## KPIConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [KPIConditionalFormattingOption](#kpiconditionalformattingoption)[]

## KPIConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [KPIConditionalFormattingOption](#kpiconditionalformattingoption)[]

## KPIConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [KPIConditionalFormattingOption](#kpiconditionalformattingoption)[]

## KPIConditionalFormattingOption
### Properties
* **ActualValue**: [KPIActualValueConditionalFormatting](#kpiactualvalueconditionalformatting)
* **ComparisonValue**: [KPIComparisonValueConditionalFormatting](#kpicomparisonvalueconditionalformatting)
* **PrimaryValue**: [KPIPrimaryValueConditionalFormatting](#kpiprimaryvalueconditionalformatting)
* **ProgressBar**: [KPIProgressBarConditionalFormatting](#kpiprogressbarconditionalformatting)

## KPIConditionalFormattingOption
### Properties
* **ActualValue**: [KPIActualValueConditionalFormatting](#kpiactualvalueconditionalformatting)
* **ComparisonValue**: [KPIComparisonValueConditionalFormatting](#kpicomparisonvalueconditionalformatting)
* **PrimaryValue**: [KPIPrimaryValueConditionalFormatting](#kpiprimaryvalueconditionalformatting)
* **ProgressBar**: [KPIProgressBarConditionalFormatting](#kpiprogressbarconditionalformatting)

## KPIConditionalFormattingOption
### Properties
* **ActualValue**: [KPIActualValueConditionalFormatting](#kpiactualvalueconditionalformatting)
* **ComparisonValue**: [KPIComparisonValueConditionalFormatting](#kpicomparisonvalueconditionalformatting)
* **PrimaryValue**: [KPIPrimaryValueConditionalFormatting](#kpiprimaryvalueconditionalformatting)
* **ProgressBar**: [KPIProgressBarConditionalFormatting](#kpiprogressbarconditionalformatting)

## KPIConfiguration
### Properties
* **FieldWells**: [KPIFieldWells](#kpifieldwells)
* **KPIOptions**: [KPIOptions](#kpioptions)
* **SortConfiguration**: [KPISortConfiguration](#kpisortconfiguration)

## KPIConfiguration
### Properties
* **FieldWells**: [KPIFieldWells](#kpifieldwells)
* **KPIOptions**: [KPIOptions](#kpioptions)
* **SortConfiguration**: [KPISortConfiguration](#kpisortconfiguration)

## KPIConfiguration
### Properties
* **FieldWells**: [KPIFieldWells](#kpifieldwells)
* **KPIOptions**: [KPIOptions](#kpioptions)
* **SortConfiguration**: [KPISortConfiguration](#kpisortconfiguration)

## KPIFieldWells
### Properties
* **TargetValues**: [MeasureField](#measurefield)[]
* **TrendGroups**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## KPIFieldWells
### Properties
* **TargetValues**: [MeasureField](#measurefield)[]
* **TrendGroups**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## KPIFieldWells
### Properties
* **TargetValues**: [MeasureField](#measurefield)[]
* **TrendGroups**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## KPIOptions
### Properties
* **Comparison**: [ComparisonConfiguration](#comparisonconfiguration)
* **PrimaryValueDisplayType**: string
* **PrimaryValueFontConfiguration**: [FontConfiguration](#fontconfiguration)
* **ProgressBar**: [ProgressBarOptions](#progressbaroptions)
* **SecondaryValue**: [SecondaryValueOptions](#secondaryvalueoptions)
* **SecondaryValueFontConfiguration**: [FontConfiguration](#fontconfiguration)
* **Sparkline**: [KPISparklineOptions](#kpisparklineoptions)
* **TrendArrows**: [TrendArrowOptions](#trendarrowoptions)
* **VisualLayoutOptions**: [KPIVisualLayoutOptions](#kpivisuallayoutoptions)

## KPIOptions
### Properties
* **Comparison**: [ComparisonConfiguration](#comparisonconfiguration)
* **PrimaryValueDisplayType**: string
* **PrimaryValueFontConfiguration**: [FontConfiguration](#fontconfiguration)
* **ProgressBar**: [ProgressBarOptions](#progressbaroptions)
* **SecondaryValue**: [SecondaryValueOptions](#secondaryvalueoptions)
* **SecondaryValueFontConfiguration**: [FontConfiguration](#fontconfiguration)
* **Sparkline**: [KPISparklineOptions](#kpisparklineoptions)
* **TrendArrows**: [TrendArrowOptions](#trendarrowoptions)
* **VisualLayoutOptions**: [KPIVisualLayoutOptions](#kpivisuallayoutoptions)

## KPIOptions
### Properties
* **Comparison**: [ComparisonConfiguration](#comparisonconfiguration)
* **PrimaryValueDisplayType**: string
* **PrimaryValueFontConfiguration**: [FontConfiguration](#fontconfiguration)
* **ProgressBar**: [ProgressBarOptions](#progressbaroptions)
* **SecondaryValue**: [SecondaryValueOptions](#secondaryvalueoptions)
* **SecondaryValueFontConfiguration**: [FontConfiguration](#fontconfiguration)
* **Sparkline**: [KPISparklineOptions](#kpisparklineoptions)
* **TrendArrows**: [TrendArrowOptions](#trendarrowoptions)
* **VisualLayoutOptions**: [KPIVisualLayoutOptions](#kpivisuallayoutoptions)

## KPIPrimaryValueConditionalFormatting
### Properties
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## KPIPrimaryValueConditionalFormatting
### Properties
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## KPIPrimaryValueConditionalFormatting
### Properties
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## KPIProgressBarConditionalFormatting
### Properties
* **ForegroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## KPIProgressBarConditionalFormatting
### Properties
* **ForegroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## KPIProgressBarConditionalFormatting
### Properties
* **ForegroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## KPISortConfiguration
### Properties
* **TrendGroupSort**: [FieldSortOptions](#fieldsortoptions)[]

## KPISortConfiguration
### Properties
* **TrendGroupSort**: [FieldSortOptions](#fieldsortoptions)[]

## KPISortConfiguration
### Properties
* **TrendGroupSort**: [FieldSortOptions](#fieldsortoptions)[]

## KPISparklineOptions
### Properties
* **Color**: string
* **TooltipVisibility**: string
* **Type**: string (Required)
* **Visibility**: string

## KPISparklineOptions
### Properties
* **Color**: string
* **TooltipVisibility**: string
* **Type**: string (Required)
* **Visibility**: string

## KPISparklineOptions
### Properties
* **Color**: string
* **TooltipVisibility**: [Template_TooltipVisibility](#templatetooltipvisibility)
* **Type**: string (Required)
* **Visibility**: [Template_Visibility](#templatevisibility)

## KPIVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [KPIConfiguration](#kpiconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **ConditionalFormatting**: [KPIConditionalFormatting](#kpiconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## KPIVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [KPIConfiguration](#kpiconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **ConditionalFormatting**: [KPIConditionalFormatting](#kpiconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## KPIVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [KPIConfiguration](#kpiconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **ConditionalFormatting**: [KPIConditionalFormatting](#kpiconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## KPIVisualLayoutOptions
### Properties
* **StandardLayout**: [KPIVisualStandardLayout](#kpivisualstandardlayout)

## KPIVisualLayoutOptions
### Properties
* **StandardLayout**: [KPIVisualStandardLayout](#kpivisualstandardlayout)

## KPIVisualLayoutOptions
### Properties
* **StandardLayout**: [KPIVisualStandardLayout](#kpivisualstandardlayout)

## KPIVisualStandardLayout
### Properties
* **Type**: string (Required)

## KPIVisualStandardLayout
### Properties
* **Type**: string (Required)

## KPIVisualStandardLayout
### Properties
* **Type**: string (Required)

## LabelOptions
### Properties
* **CustomLabel**: string
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)
* **Visibility**: string

## LabelOptions
### Properties
* **CustomLabel**: string
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)
* **Visibility**: string

## LabelOptions
### Properties
* **CustomLabel**: string
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)
* **Visibility**: [Template_Visibility](#templatevisibility)

## LayerCustomAction
### Properties
* **ActionOperations**: [LayerCustomActionOperation](#layercustomactionoperation)[] (Required)
* **CustomActionId**: string (Required)
* **Name**: string (Required)
* **Status**: string
* **Trigger**: string (Required)

## LayerCustomAction
### Properties
* **ActionOperations**: [LayerCustomActionOperation](#layercustomactionoperation)[] (Required)
* **CustomActionId**: string (Required)
* **Name**: string (Required)
* **Status**: string
* **Trigger**: string (Required)

## LayerCustomActionOperation
### Properties
* **FilterOperation**: [CustomActionFilterOperation](#customactionfilteroperation)
* **NavigationOperation**: [CustomActionNavigationOperation](#customactionnavigationoperation)
* **SetParametersOperation**: [CustomActionSetParametersOperation](#customactionsetparametersoperation)
* **URLOperation**: [CustomActionURLOperation](#customactionurloperation)

## LayerCustomActionOperation
### Properties
* **FilterOperation**: [CustomActionFilterOperation](#customactionfilteroperation)
* **NavigationOperation**: [CustomActionNavigationOperation](#customactionnavigationoperation)
* **SetParametersOperation**: [CustomActionSetParametersOperation](#customactionsetparametersoperation)
* **URLOperation**: [CustomActionURLOperation](#customactionurloperation)

## LayerMapVisual
### Properties
* **ChartConfiguration**: [GeospatialLayerMapConfiguration](#geospatiallayermapconfiguration)
* **DataSetIdentifier**: string (Required)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## LayerMapVisual
### Properties
* **ChartConfiguration**: [GeospatialLayerMapConfiguration](#geospatiallayermapconfiguration)
* **DataSetIdentifier**: string (Required)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## Layout
### Properties
* **Configuration**: [LayoutConfiguration](#layoutconfiguration) (Required)

## Layout
### Properties
* **Configuration**: [LayoutConfiguration](#layoutconfiguration) (Required)

## Layout
### Properties
* **Configuration**: [LayoutConfiguration](#layoutconfiguration) (Required)

## LayoutConfiguration
### Properties
* **FreeFormLayout**: [FreeFormLayoutConfiguration](#freeformlayoutconfiguration)
* **GridLayout**: [GridLayoutConfiguration](#gridlayoutconfiguration)
* **SectionBasedLayout**: [SectionBasedLayoutConfiguration](#sectionbasedlayoutconfiguration)

## LayoutConfiguration
### Properties
* **FreeFormLayout**: [FreeFormLayoutConfiguration](#freeformlayoutconfiguration)
* **GridLayout**: [GridLayoutConfiguration](#gridlayoutconfiguration)
* **SectionBasedLayout**: [SectionBasedLayoutConfiguration](#sectionbasedlayoutconfiguration)

## LayoutConfiguration
### Properties
* **FreeFormLayout**: [FreeFormLayoutConfiguration](#freeformlayoutconfiguration)
* **GridLayout**: [GridLayoutConfiguration](#gridlayoutconfiguration)
* **SectionBasedLayout**: [SectionBasedLayoutConfiguration](#sectionbasedlayoutconfiguration)

## LegendOptions
### Properties
* **Height**: string: String based length that is composed of value and unit in px
* **Position**: string
* **Title**: [LabelOptions](#labeloptions)
* **ValueFontConfiguration**: [FontConfiguration](#fontconfiguration)
* **Visibility**: string
* **Width**: string: String based length that is composed of value and unit in px

## LegendOptions
### Properties
* **Height**: string: String based length that is composed of value and unit in px
* **Position**: string
* **Title**: [LabelOptions](#labeloptions)
* **ValueFontConfiguration**: [FontConfiguration](#fontconfiguration)
* **Visibility**: string
* **Width**: string: String based length that is composed of value and unit in px

## LegendOptions
### Properties
* **Height**: string: String based length that is composed of value and unit in px
* **Position**: string
* **Title**: [LabelOptions](#labeloptions)
* **ValueFontConfiguration**: [FontConfiguration](#fontconfiguration)
* **Visibility**: [Template_Visibility](#templatevisibility)
* **Width**: string: String based length that is composed of value and unit in px

## LineChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Colors**: [DimensionField](#dimensionfield)[]
* **SmallMultiples**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## LineChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Colors**: [DimensionField](#dimensionfield)[]
* **SmallMultiples**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## LineChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Colors**: [DimensionField](#dimensionfield)[]
* **SmallMultiples**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## LineChartConfiguration
### Properties
* **ContributionAnalysisDefaults**: [ContributionAnalysisDefault](#contributionanalysisdefault)[]
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **DefaultSeriesSettings**: [LineChartDefaultSeriesSettings](#linechartdefaultseriessettings)
* **FieldWells**: [LineChartFieldWells](#linechartfieldwells)
* **ForecastConfigurations**: [ForecastConfiguration](#forecastconfiguration)[]
* **Legend**: [LegendOptions](#legendoptions)
* **PrimaryYAxisDisplayOptions**: [LineSeriesAxisDisplayOptions](#lineseriesaxisdisplayoptions)
* **PrimaryYAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ReferenceLines**: [ReferenceLine](#referenceline)[]
* **SecondaryYAxisDisplayOptions**: [LineSeriesAxisDisplayOptions](#lineseriesaxisdisplayoptions)
* **SecondaryYAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **Series**: [SeriesItem](#seriesitem)[]
* **SingleAxisOptions**: [SingleAxisOptions](#singleaxisoptions)
* **SmallMultiplesOptions**: [SmallMultiplesOptions](#smallmultiplesoptions)
* **SortConfiguration**: [LineChartSortConfiguration](#linechartsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **Type**: string
* **VisualPalette**: [VisualPalette](#visualpalette)
* **XAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **XAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)

## LineChartConfiguration
### Properties
* **ContributionAnalysisDefaults**: [ContributionAnalysisDefault](#contributionanalysisdefault)[]
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **DefaultSeriesSettings**: [LineChartDefaultSeriesSettings](#linechartdefaultseriessettings)
* **FieldWells**: [LineChartFieldWells](#linechartfieldwells)
* **ForecastConfigurations**: [ForecastConfiguration](#forecastconfiguration)[]
* **Legend**: [LegendOptions](#legendoptions)
* **PrimaryYAxisDisplayOptions**: [LineSeriesAxisDisplayOptions](#lineseriesaxisdisplayoptions)
* **PrimaryYAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ReferenceLines**: [ReferenceLine](#referenceline)[]
* **SecondaryYAxisDisplayOptions**: [LineSeriesAxisDisplayOptions](#lineseriesaxisdisplayoptions)
* **SecondaryYAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **Series**: [SeriesItem](#seriesitem)[]
* **SingleAxisOptions**: [SingleAxisOptions](#singleaxisoptions)
* **SmallMultiplesOptions**: [SmallMultiplesOptions](#smallmultiplesoptions)
* **SortConfiguration**: [LineChartSortConfiguration](#linechartsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **Type**: string
* **VisualPalette**: [VisualPalette](#visualpalette)
* **XAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **XAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)

## LineChartConfiguration
### Properties
* **ContributionAnalysisDefaults**: [ContributionAnalysisDefault](#contributionanalysisdefault)[]
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **DefaultSeriesSettings**: [LineChartDefaultSeriesSettings](#linechartdefaultseriessettings)
* **FieldWells**: [LineChartFieldWells](#linechartfieldwells)
* **ForecastConfigurations**: [ForecastConfiguration](#forecastconfiguration)[]
* **Legend**: [LegendOptions](#legendoptions)
* **PrimaryYAxisDisplayOptions**: [LineSeriesAxisDisplayOptions](#lineseriesaxisdisplayoptions)
* **PrimaryYAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ReferenceLines**: [ReferenceLine](#referenceline)[]
* **SecondaryYAxisDisplayOptions**: [LineSeriesAxisDisplayOptions](#lineseriesaxisdisplayoptions)
* **SecondaryYAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **Series**: [SeriesItem](#seriesitem)[]
* **SingleAxisOptions**: [SingleAxisOptions](#singleaxisoptions)
* **SmallMultiplesOptions**: [SmallMultiplesOptions](#smallmultiplesoptions)
* **SortConfiguration**: [LineChartSortConfiguration](#linechartsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **Type**: string
* **VisualPalette**: [VisualPalette](#visualpalette)
* **XAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **XAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)

## LineChartDefaultSeriesSettings
### Properties
* **AxisBinding**: string
* **LineStyleSettings**: [LineChartLineStyleSettings](#linechartlinestylesettings)
* **MarkerStyleSettings**: [LineChartMarkerStyleSettings](#linechartmarkerstylesettings)

## LineChartDefaultSeriesSettings
### Properties
* **AxisBinding**: string
* **LineStyleSettings**: [LineChartLineStyleSettings](#linechartlinestylesettings)
* **MarkerStyleSettings**: [LineChartMarkerStyleSettings](#linechartmarkerstylesettings)

## LineChartDefaultSeriesSettings
### Properties
* **AxisBinding**: string
* **LineStyleSettings**: [LineChartLineStyleSettings](#linechartlinestylesettings)
* **MarkerStyleSettings**: [LineChartMarkerStyleSettings](#linechartmarkerstylesettings)

## LineChartFieldWells
### Properties
* **LineChartAggregatedFieldWells**: [LineChartAggregatedFieldWells](#linechartaggregatedfieldwells)

## LineChartFieldWells
### Properties
* **LineChartAggregatedFieldWells**: [LineChartAggregatedFieldWells](#linechartaggregatedfieldwells)

## LineChartFieldWells
### Properties
* **LineChartAggregatedFieldWells**: [LineChartAggregatedFieldWells](#linechartaggregatedfieldwells)

## LineChartLineStyleSettings
### Properties
* **LineInterpolation**: string
* **LineStyle**: string
* **LineVisibility**: string
* **LineWidth**: string: String based length that is composed of value and unit in px

## LineChartLineStyleSettings
### Properties
* **LineInterpolation**: string
* **LineStyle**: string
* **LineVisibility**: string
* **LineWidth**: string: String based length that is composed of value and unit in px

## LineChartLineStyleSettings
### Properties
* **LineInterpolation**: string
* **LineStyle**: string
* **LineVisibility**: [Template_LineVisibility](#templatelinevisibility)
* **LineWidth**: string: String based length that is composed of value and unit in px

## LineChartMarkerStyleSettings
### Properties
* **MarkerColor**: string
* **MarkerShape**: string
* **MarkerSize**: string: String based length that is composed of value and unit in px
* **MarkerVisibility**: string

## LineChartMarkerStyleSettings
### Properties
* **MarkerColor**: string
* **MarkerShape**: string
* **MarkerSize**: string: String based length that is composed of value and unit in px
* **MarkerVisibility**: string

## LineChartMarkerStyleSettings
### Properties
* **MarkerColor**: string
* **MarkerShape**: string
* **MarkerSize**: string: String based length that is composed of value and unit in px
* **MarkerVisibility**: [Template_MarkerVisibility](#templatemarkervisibility)

## LineChartSeriesSettings
### Properties
* **LineStyleSettings**: [LineChartLineStyleSettings](#linechartlinestylesettings)
* **MarkerStyleSettings**: [LineChartMarkerStyleSettings](#linechartmarkerstylesettings)

## LineChartSeriesSettings
### Properties
* **LineStyleSettings**: [LineChartLineStyleSettings](#linechartlinestylesettings)
* **MarkerStyleSettings**: [LineChartMarkerStyleSettings](#linechartmarkerstylesettings)

## LineChartSeriesSettings
### Properties
* **LineStyleSettings**: [LineChartLineStyleSettings](#linechartlinestylesettings)
* **MarkerStyleSettings**: [LineChartMarkerStyleSettings](#linechartmarkerstylesettings)

## LineChartSortConfiguration
### Properties
* **CategoryItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SmallMultiplesLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SmallMultiplesSort**: [FieldSortOptions](#fieldsortoptions)[]

## LineChartSortConfiguration
### Properties
* **CategoryItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SmallMultiplesLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SmallMultiplesSort**: [FieldSortOptions](#fieldsortoptions)[]

## LineChartSortConfiguration
### Properties
* **CategoryItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SmallMultiplesLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SmallMultiplesSort**: [FieldSortOptions](#fieldsortoptions)[]

## LineChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [LineChartConfiguration](#linechartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## LineChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [LineChartConfiguration](#linechartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## LineChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [LineChartConfiguration](#linechartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## LineSeriesAxisDisplayOptions
### Properties
* **AxisOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **MissingDataConfigurations**: [MissingDataConfiguration](#missingdataconfiguration)[]

## LineSeriesAxisDisplayOptions
### Properties
* **AxisOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **MissingDataConfigurations**: [MissingDataConfiguration](#missingdataconfiguration)[]

## LineSeriesAxisDisplayOptions
### Properties
* **AxisOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **MissingDataConfigurations**: [MissingDataConfiguration](#missingdataconfiguration)[]

## LinkSharingConfiguration
### Properties
* **Permissions**: [ResourcePermission](#resourcepermission)[]

## ListControlDisplayOptions
### Properties
* **InfoIconLabelOptions**: [SheetControlInfoIconLabelOptions](#sheetcontrolinfoiconlabeloptions)
* **SearchOptions**: [ListControlSearchOptions](#listcontrolsearchoptions)
* **SelectAllOptions**: [ListControlSelectAllOptions](#listcontrolselectalloptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## ListControlDisplayOptions
### Properties
* **InfoIconLabelOptions**: [SheetControlInfoIconLabelOptions](#sheetcontrolinfoiconlabeloptions)
* **SearchOptions**: [ListControlSearchOptions](#listcontrolsearchoptions)
* **SelectAllOptions**: [ListControlSelectAllOptions](#listcontrolselectalloptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## ListControlDisplayOptions
### Properties
* **InfoIconLabelOptions**: [SheetControlInfoIconLabelOptions](#sheetcontrolinfoiconlabeloptions)
* **SearchOptions**: [ListControlSearchOptions](#listcontrolsearchoptions)
* **SelectAllOptions**: [ListControlSelectAllOptions](#listcontrolselectalloptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## ListControlSearchOptions
### Properties
* **Visibility**: string

## ListControlSearchOptions
### Properties
* **Visibility**: string

## ListControlSearchOptions
### Properties
* **Visibility**: [Template_Visibility](#templatevisibility)

## ListControlSelectAllOptions
### Properties
* **Visibility**: string

## ListControlSelectAllOptions
### Properties
* **Visibility**: string

## ListControlSelectAllOptions
### Properties
* **Visibility**: [Template_Visibility](#templatevisibility)

## LoadingAnimation
### Properties
* **Visibility**: string

## LoadingAnimation
### Properties
* **Visibility**: string

## LoadingAnimation
### Properties
* **Visibility**: [Template_Visibility](#templatevisibility)

## LocalNavigationConfiguration
### Properties
* **TargetSheetId**: string (Required)

## LocalNavigationConfiguration
### Properties
* **TargetSheetId**: string (Required)

## LocalNavigationConfiguration
### Properties
* **TargetSheetId**: string (Required)

## LogicalTableMap
### Properties

## LongFormatText
### Properties
* **PlainText**: string
* **RichText**: string

## LongFormatText
### Properties
* **PlainText**: string
* **RichText**: string

## LongFormatText
### Properties
* **PlainText**: string
* **RichText**: string

## LookbackWindow
### Properties
* **ColumnName**: string (Required): <p>The name of the lookback window column.</p>
* **Size**: int (Required): <p>The lookback window column size.</p>
* **SizeUnit**: string (Required)

## ManifestFileLocation
### Properties
* **Bucket**: string (Required): <p>Amazon S3 bucket.</p>
* **Key**: string (Required): <p>Amazon S3 key that identifies an object.</p>

## MappedDataSetParameter
### Properties
* **DataSetIdentifier**: string (Required)
* **DataSetParameterName**: string (Required)

## MappedDataSetParameter
### Properties
* **DataSetIdentifier**: string (Required)
* **DataSetParameterName**: string (Required)

## MappedDataSetParameter
### Properties
* **DataSetIdentifier**: string (Required)
* **DataSetParameterName**: string (Required)

## MarginStyle
### Properties
* **Show**: bool: <p>This Boolean value controls whether to display sheet margins.</p>

## MariaDbParameters
### Properties
* **Database**: string (Required): <p>Database.</p>
* **Host**: string (Required): <p>Host.</p>
* **Port**: int (Required): <p>Port.</p>

## MaximumLabelType
### Properties
* **Visibility**: string

## MaximumLabelType
### Properties
* **Visibility**: string

## MaximumLabelType
### Properties
* **Visibility**: [Template_Visibility](#templatevisibility)

## MaximumMinimumComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **Time**: [DimensionField](#dimensionfield)
* **Type**: string (Required)
* **Value**: [MeasureField](#measurefield)

## MaximumMinimumComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **Time**: [DimensionField](#dimensionfield)
* **Type**: string (Required)
* **Value**: [MeasureField](#measurefield)

## MaximumMinimumComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **Time**: [DimensionField](#dimensionfield)
* **Type**: string (Required)
* **Value**: [MeasureField](#measurefield)

## MeasureField
### Properties
* **CalculatedMeasureField**: [CalculatedMeasureField](#calculatedmeasurefield)
* **CategoricalMeasureField**: [CategoricalMeasureField](#categoricalmeasurefield)
* **DateMeasureField**: [DateMeasureField](#datemeasurefield)
* **NumericalMeasureField**: [NumericalMeasureField](#numericalmeasurefield)

## MeasureField
### Properties
* **CalculatedMeasureField**: [CalculatedMeasureField](#calculatedmeasurefield)
* **CategoricalMeasureField**: [CategoricalMeasureField](#categoricalmeasurefield)
* **DateMeasureField**: [DateMeasureField](#datemeasurefield)
* **NumericalMeasureField**: [NumericalMeasureField](#numericalmeasurefield)

## MeasureField
### Properties
* **CalculatedMeasureField**: [CalculatedMeasureField](#calculatedmeasurefield)
* **CategoricalMeasureField**: [CategoricalMeasureField](#categoricalmeasurefield)
* **DateMeasureField**: [DateMeasureField](#datemeasurefield)
* **NumericalMeasureField**: [NumericalMeasureField](#numericalmeasurefield)

## MetricComparisonComputation
### Properties
* **ComputationId**: string (Required)
* **FromValue**: [MeasureField](#measurefield)
* **Name**: string
* **TargetValue**: [MeasureField](#measurefield)
* **Time**: [DimensionField](#dimensionfield)

## MetricComparisonComputation
### Properties
* **ComputationId**: string (Required)
* **FromValue**: [MeasureField](#measurefield)
* **Name**: string
* **TargetValue**: [MeasureField](#measurefield)
* **Time**: [DimensionField](#dimensionfield)

## MetricComparisonComputation
### Properties
* **ComputationId**: string (Required)
* **FromValue**: [MeasureField](#measurefield)
* **Name**: string
* **TargetValue**: [MeasureField](#measurefield)
* **Time**: [DimensionField](#dimensionfield)

## MinimumLabelType
### Properties
* **Visibility**: string

## MinimumLabelType
### Properties
* **Visibility**: string

## MinimumLabelType
### Properties
* **Visibility**: [Template_Visibility](#templatevisibility)

## MissingDataConfiguration
### Properties
* **TreatmentOption**: string

## MissingDataConfiguration
### Properties
* **TreatmentOption**: string

## MissingDataConfiguration
### Properties
* **TreatmentOption**: string

## MySqlParameters
### Properties
* **Database**: string (Required): <p>Database.</p>
* **Host**: string (Required): <p>Host.</p>
* **Port**: int (Required): <p>Port.</p>

## NamedEntityDefinition
### Properties
* **FieldName**: string
* **Metric**: [NamedEntityDefinitionMetric](#namedentitydefinitionmetric)
* **PropertyName**: string
* **PropertyRole**: string
* **PropertyUsage**: string

## NamedEntityDefinitionMetric
### Properties
* **Aggregation**: string
* **AggregationFunctionParameters**: [AggregationFunctionParameters](#aggregationfunctionparameters)

## NegativeFormat
### Properties
* **Prefix**: string
* **Suffix**: string

## NegativeValueConfiguration
### Properties
* **DisplayMode**: string (Required)

## NegativeValueConfiguration
### Properties
* **DisplayMode**: string (Required)

## NegativeValueConfiguration
### Properties
* **DisplayMode**: string (Required)

## NestedFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FilterId**: string (Required)
* **IncludeInnerSet**: bool (Required)
* **InnerFilter**: [InnerFilter](#innerfilter) (Required)

## NestedFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FilterId**: string (Required)
* **IncludeInnerSet**: bool (Required)
* **InnerFilter**: [InnerFilter](#innerfilter) (Required)

## NestedFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FilterId**: string (Required)
* **IncludeInnerSet**: bool (Required)
* **InnerFilter**: [InnerFilter](#innerfilter) (Required)

## NetworkInterface
### Properties
* **AvailabilityZone**: string: <p>The availability zone that the network interface resides in.</p>
* **ErrorMessage**: string: <p>An error message.</p>
* **NetworkInterfaceId**: string: <p>The network interface ID.</p>
* **Status**: string
* **SubnetId**: string: <p>The subnet ID associated with the network interface.</p>

## NullValueFormatConfiguration
### Properties
* **NullString**: string (Required)

## NullValueFormatConfiguration
### Properties
* **NullString**: string (Required)

## NullValueFormatConfiguration
### Properties
* **NullString**: string (Required)

## NumberDisplayFormatConfiguration
### Properties
* **DecimalPlacesConfiguration**: [DecimalPlacesConfiguration](#decimalplacesconfiguration)
* **NegativeValueConfiguration**: [NegativeValueConfiguration](#negativevalueconfiguration)
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **NumberScale**: string
* **Prefix**: string
* **SeparatorConfiguration**: [NumericSeparatorConfiguration](#numericseparatorconfiguration)
* **Suffix**: string

## NumberDisplayFormatConfiguration
### Properties
* **DecimalPlacesConfiguration**: [DecimalPlacesConfiguration](#decimalplacesconfiguration)
* **NegativeValueConfiguration**: [NegativeValueConfiguration](#negativevalueconfiguration)
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **NumberScale**: string
* **Prefix**: string
* **SeparatorConfiguration**: [NumericSeparatorConfiguration](#numericseparatorconfiguration)
* **Suffix**: string

## NumberDisplayFormatConfiguration
### Properties
* **DecimalPlacesConfiguration**: [DecimalPlacesConfiguration](#decimalplacesconfiguration)
* **NegativeValueConfiguration**: [NegativeValueConfiguration](#negativevalueconfiguration)
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **NumberScale**: string
* **Prefix**: string
* **SeparatorConfiguration**: [NumericSeparatorConfiguration](#numericseparatorconfiguration)
* **Suffix**: string

## NumberFormatConfiguration
### Properties
* **FormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)

## NumberFormatConfiguration
### Properties
* **FormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)

## NumberFormatConfiguration
### Properties
* **FormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)

## NumericalAggregationFunction
### Properties
* **PercentileAggregation**: [PercentileAggregation](#percentileaggregation)
* **SimpleNumericalAggregation**: string

## NumericalAggregationFunction
### Properties
* **PercentileAggregation**: [PercentileAggregation](#percentileaggregation)
* **SimpleNumericalAggregation**: string

## NumericalAggregationFunction
### Properties
* **PercentileAggregation**: [PercentileAggregation](#percentileaggregation)
* **SimpleNumericalAggregation**: string

## NumericalDimensionField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [NumberFormatConfiguration](#numberformatconfiguration)
* **HierarchyId**: string

## NumericalDimensionField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [NumberFormatConfiguration](#numberformatconfiguration)
* **HierarchyId**: string

## NumericalDimensionField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [NumberFormatConfiguration](#numberformatconfiguration)
* **HierarchyId**: string

## NumericalMeasureField
### Properties
* **AggregationFunction**: [NumericalAggregationFunction](#numericalaggregationfunction)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [NumberFormatConfiguration](#numberformatconfiguration)

## NumericalMeasureField
### Properties
* **AggregationFunction**: [NumericalAggregationFunction](#numericalaggregationfunction)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [NumberFormatConfiguration](#numberformatconfiguration)

## NumericalMeasureField
### Properties
* **AggregationFunction**: [NumericalAggregationFunction](#numericalaggregationfunction)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [NumberFormatConfiguration](#numberformatconfiguration)

## NumericAxisOptions
### Properties
* **Range**: [AxisDisplayRange](#axisdisplayrange)
* **Scale**: [AxisScale](#axisscale)

## NumericAxisOptions
### Properties
* **Range**: [AxisDisplayRange](#axisdisplayrange)
* **Scale**: [AxisScale](#axisscale)

## NumericAxisOptions
### Properties
* **Range**: [AxisDisplayRange](#axisdisplayrange)
* **Scale**: [AxisScale](#axisscale)

## NumericEqualityDrillDownFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **Value**: int (Required)

## NumericEqualityDrillDownFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **Value**: int (Required)

## NumericEqualityDrillDownFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **Value**: int (Required)

## NumericEqualityFilter
### Properties
* **AggregationFunction**: [AggregationFunction](#aggregationfunction)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)
* **FilterId**: string (Required)
* **MatchOperator**: string (Required)
* **NullOption**: string (Required)
* **ParameterName**: string
* **SelectAllOptions**: string
* **Value**: int

## NumericEqualityFilter
### Properties
* **AggregationFunction**: [AggregationFunction](#aggregationfunction)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)
* **FilterId**: string (Required)
* **MatchOperator**: string (Required)
* **NullOption**: string (Required)
* **ParameterName**: string
* **SelectAllOptions**: string
* **Value**: int

## NumericEqualityFilter
### Properties
* **AggregationFunction**: [AggregationFunction](#aggregationfunction)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)
* **FilterId**: string (Required)
* **MatchOperator**: string (Required)
* **NullOption**: string (Required)
* **ParameterName**: string
* **SelectAllOptions**: string
* **Value**: int

## NumericFormatConfiguration
### Properties
* **CurrencyDisplayFormatConfiguration**: [CurrencyDisplayFormatConfiguration](#currencydisplayformatconfiguration)
* **NumberDisplayFormatConfiguration**: [NumberDisplayFormatConfiguration](#numberdisplayformatconfiguration)
* **PercentageDisplayFormatConfiguration**: [PercentageDisplayFormatConfiguration](#percentagedisplayformatconfiguration)

## NumericFormatConfiguration
### Properties
* **CurrencyDisplayFormatConfiguration**: [CurrencyDisplayFormatConfiguration](#currencydisplayformatconfiguration)
* **NumberDisplayFormatConfiguration**: [NumberDisplayFormatConfiguration](#numberdisplayformatconfiguration)
* **PercentageDisplayFormatConfiguration**: [PercentageDisplayFormatConfiguration](#percentagedisplayformatconfiguration)

## NumericFormatConfiguration
### Properties
* **CurrencyDisplayFormatConfiguration**: [CurrencyDisplayFormatConfiguration](#currencydisplayformatconfiguration)
* **NumberDisplayFormatConfiguration**: [NumberDisplayFormatConfiguration](#numberdisplayformatconfiguration)
* **PercentageDisplayFormatConfiguration**: [PercentageDisplayFormatConfiguration](#percentagedisplayformatconfiguration)

## NumericRangeFilter
### Properties
* **AggregationFunction**: [AggregationFunction](#aggregationfunction)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)
* **FilterId**: string (Required)
* **IncludeMaximum**: bool
* **IncludeMinimum**: bool
* **NullOption**: string (Required)
* **RangeMaximum**: [NumericRangeFilterValue](#numericrangefiltervalue)
* **RangeMinimum**: [NumericRangeFilterValue](#numericrangefiltervalue)
* **SelectAllOptions**: string

## NumericRangeFilter
### Properties
* **AggregationFunction**: [AggregationFunction](#aggregationfunction)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)
* **FilterId**: string (Required)
* **IncludeMaximum**: bool
* **IncludeMinimum**: bool
* **NullOption**: string (Required)
* **RangeMaximum**: [NumericRangeFilterValue](#numericrangefiltervalue)
* **RangeMinimum**: [NumericRangeFilterValue](#numericrangefiltervalue)
* **SelectAllOptions**: string

## NumericRangeFilter
### Properties
* **AggregationFunction**: [AggregationFunction](#aggregationfunction)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)
* **FilterId**: string (Required)
* **IncludeMaximum**: bool
* **IncludeMinimum**: bool
* **NullOption**: string (Required)
* **RangeMaximum**: [NumericRangeFilterValue](#numericrangefiltervalue)
* **RangeMinimum**: [NumericRangeFilterValue](#numericrangefiltervalue)
* **SelectAllOptions**: string

## NumericRangeFilterValue
### Properties
* **Parameter**: string
* **StaticValue**: int

## NumericRangeFilterValue
### Properties
* **Parameter**: string
* **StaticValue**: int

## NumericRangeFilterValue
### Properties
* **Parameter**: string
* **StaticValue**: int

## NumericSeparatorConfiguration
### Properties
* **DecimalSeparator**: string
* **ThousandsSeparator**: [ThousandSeparatorOptions](#thousandseparatoroptions)

## NumericSeparatorConfiguration
### Properties
* **DecimalSeparator**: string
* **ThousandsSeparator**: [ThousandSeparatorOptions](#thousandseparatoroptions)

## NumericSeparatorConfiguration
### Properties
* **DecimalSeparator**: string
* **ThousandsSeparator**: [ThousandSeparatorOptions](#thousandseparatoroptions)

## OAuthParameters
### Properties
* **IdentityProviderResourceUri**: string
* **IdentityProviderVpcConnectionProperties**: [VpcConnectionProperties](#vpcconnectionproperties)
* **OAuthScope**: string
* **TokenProviderUrl**: string (Required)

## OracleParameters
### Properties
* **Database**: string (Required): <p>The database.</p>
* **Host**: string (Required): <p>An Oracle host.</p>
* **Port**: int (Required): <p>The port.</p>

## OutputColumn
### Properties
* **Description**: string: <p>A description for a column.</p>
* **Name**: string: <p>The display name of the column..</p>
* **SubType**: string
* **Type**: string

## PaginationConfiguration
### Properties
* **PageNumber**: int (Required)
* **PageSize**: int (Required)

## PaginationConfiguration
### Properties
* **PageNumber**: int (Required)
* **PageSize**: int (Required)

## PaginationConfiguration
### Properties
* **PageNumber**: int (Required)
* **PageSize**: int (Required)

## PanelConfiguration
### Properties
* **BackgroundColor**: string
* **BackgroundVisibility**: string
* **BorderColor**: string
* **BorderStyle**: string
* **BorderThickness**: string: String based length that is composed of value and unit in px
* **BorderVisibility**: string
* **GutterSpacing**: string: String based length that is composed of value and unit in px
* **GutterVisibility**: string
* **Title**: [PanelTitleOptions](#paneltitleoptions)

## PanelConfiguration
### Properties
* **BackgroundColor**: string
* **BackgroundVisibility**: string
* **BorderColor**: string
* **BorderStyle**: string
* **BorderThickness**: string: String based length that is composed of value and unit in px
* **BorderVisibility**: string
* **GutterSpacing**: string: String based length that is composed of value and unit in px
* **GutterVisibility**: string
* **Title**: [PanelTitleOptions](#paneltitleoptions)

## PanelConfiguration
### Properties
* **BackgroundColor**: string
* **BackgroundVisibility**: [Template_BackgroundVisibility](#templatebackgroundvisibility)
* **BorderColor**: string
* **BorderStyle**: string
* **BorderThickness**: string: String based length that is composed of value and unit in px
* **BorderVisibility**: [Template_BorderVisibility](#templatebordervisibility)
* **GutterSpacing**: string: String based length that is composed of value and unit in px
* **GutterVisibility**: [Template_GutterVisibility](#templateguttervisibility)
* **Title**: [PanelTitleOptions](#paneltitleoptions)

## PanelTitleOptions
### Properties
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)
* **HorizontalTextAlignment**: string
* **Visibility**: string

## PanelTitleOptions
### Properties
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)
* **HorizontalTextAlignment**: string
* **Visibility**: string

## PanelTitleOptions
### Properties
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)
* **HorizontalTextAlignment**: string
* **Visibility**: [Template_Visibility](#templatevisibility)

## ParameterControl
### Properties
* **DateTimePicker**: [ParameterDateTimePickerControl](#parameterdatetimepickercontrol)
* **Dropdown**: [ParameterDropDownControl](#parameterdropdowncontrol)
* **List**: [ParameterListControl](#parameterlistcontrol)
* **Slider**: [ParameterSliderControl](#parameterslidercontrol)
* **TextArea**: [ParameterTextAreaControl](#parametertextareacontrol)
* **TextField**: [ParameterTextFieldControl](#parametertextfieldcontrol)

## ParameterControl
### Properties
* **DateTimePicker**: [ParameterDateTimePickerControl](#parameterdatetimepickercontrol)
* **Dropdown**: [ParameterDropDownControl](#parameterdropdowncontrol)
* **List**: [ParameterListControl](#parameterlistcontrol)
* **Slider**: [ParameterSliderControl](#parameterslidercontrol)
* **TextArea**: [ParameterTextAreaControl](#parametertextareacontrol)
* **TextField**: [ParameterTextFieldControl](#parametertextfieldcontrol)

## ParameterControl
### Properties
* **DateTimePicker**: [ParameterDateTimePickerControl](#parameterdatetimepickercontrol)
* **Dropdown**: [ParameterDropDownControl](#parameterdropdowncontrol)
* **List**: [ParameterListControl](#parameterlistcontrol)
* **Slider**: [ParameterSliderControl](#parameterslidercontrol)
* **TextArea**: [ParameterTextAreaControl](#parametertextareacontrol)
* **TextField**: [ParameterTextFieldControl](#parametertextfieldcontrol)

## ParameterDateTimePickerControl
### Properties
* **DisplayOptions**: [DateTimePickerControlDisplayOptions](#datetimepickercontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)

## ParameterDateTimePickerControl
### Properties
* **DisplayOptions**: [DateTimePickerControlDisplayOptions](#datetimepickercontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)

## ParameterDateTimePickerControl
### Properties
* **DisplayOptions**: [DateTimePickerControlDisplayOptions](#datetimepickercontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)

## ParameterDeclaration
### Properties
* **DateTimeParameterDeclaration**: [DateTimeParameterDeclaration](#datetimeparameterdeclaration)
* **DecimalParameterDeclaration**: [DecimalParameterDeclaration](#decimalparameterdeclaration)
* **IntegerParameterDeclaration**: [IntegerParameterDeclaration](#integerparameterdeclaration)
* **StringParameterDeclaration**: [StringParameterDeclaration](#stringparameterdeclaration)

## ParameterDeclaration
### Properties
* **DateTimeParameterDeclaration**: [DateTimeParameterDeclaration](#datetimeparameterdeclaration)
* **DecimalParameterDeclaration**: [DecimalParameterDeclaration](#decimalparameterdeclaration)
* **IntegerParameterDeclaration**: [IntegerParameterDeclaration](#integerparameterdeclaration)
* **StringParameterDeclaration**: [StringParameterDeclaration](#stringparameterdeclaration)

## ParameterDeclaration
### Properties
* **DateTimeParameterDeclaration**: [DateTimeParameterDeclaration](#datetimeparameterdeclaration)
* **DecimalParameterDeclaration**: [DecimalParameterDeclaration](#decimalparameterdeclaration)
* **IntegerParameterDeclaration**: [IntegerParameterDeclaration](#integerparameterdeclaration)
* **StringParameterDeclaration**: [StringParameterDeclaration](#stringparameterdeclaration)

## ParameterDropDownControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **CommitMode**: string
* **DisplayOptions**: [DropDownControlDisplayOptions](#dropdowncontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SelectableValues**: [ParameterSelectableValues](#parameterselectablevalues)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)
* **Type**: string

## ParameterDropDownControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **CommitMode**: string
* **DisplayOptions**: [DropDownControlDisplayOptions](#dropdowncontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SelectableValues**: [ParameterSelectableValues](#parameterselectablevalues)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)
* **Type**: string

## ParameterDropDownControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **CommitMode**: string
* **DisplayOptions**: [DropDownControlDisplayOptions](#dropdowncontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SelectableValues**: [ParameterSelectableValues](#parameterselectablevalues)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)
* **Type**: string

## ParameterListControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **DisplayOptions**: [ListControlDisplayOptions](#listcontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SelectableValues**: [ParameterSelectableValues](#parameterselectablevalues)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)
* **Type**: string

## ParameterListControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **DisplayOptions**: [ListControlDisplayOptions](#listcontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SelectableValues**: [ParameterSelectableValues](#parameterselectablevalues)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)
* **Type**: string

## ParameterListControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **DisplayOptions**: [ListControlDisplayOptions](#listcontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SelectableValues**: [ParameterSelectableValues](#parameterselectablevalues)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)
* **Type**: string

## Parameters
### Properties
* **DateTimeParameters**: [DateTimeParameter](#datetimeparameter)[]: <p>The parameters that have a data type of date-time.</p>
* **DecimalParameters**: [DecimalParameter](#decimalparameter)[]: <p>The parameters that have a data type of decimal.</p>
* **IntegerParameters**: [IntegerParameter](#integerparameter)[]: <p>The parameters that have a data type of integer.</p>
* **StringParameters**: [StringParameter](#stringparameter)[]: <p>The parameters that have a data type of string.</p>

## Parameters
### Properties
* **DateTimeParameters**: [DateTimeParameter](#datetimeparameter)[]: <p>The parameters that have a data type of date-time.</p>
* **DecimalParameters**: [DecimalParameter](#decimalparameter)[]: <p>The parameters that have a data type of decimal.</p>
* **IntegerParameters**: [IntegerParameter](#integerparameter)[]: <p>The parameters that have a data type of integer.</p>
* **StringParameters**: [StringParameter](#stringparameter)[]: <p>The parameters that have a data type of string.</p>

## ParameterSelectableValues
### Properties
* **LinkToDataSetColumn**: [ColumnIdentifier](#columnidentifier)
* **Values**: string[]

## ParameterSelectableValues
### Properties
* **LinkToDataSetColumn**: [ColumnIdentifier](#columnidentifier)
* **Values**: string[]

## ParameterSelectableValues
### Properties
* **LinkToDataSetColumn**: [ColumnIdentifier](#columnidentifier)
* **Values**: string[]

## ParameterSliderControl
### Properties
* **DisplayOptions**: [SliderControlDisplayOptions](#slidercontroldisplayoptions)
* **MaximumValue**: int (Required)
* **MinimumValue**: int (Required)
* **ParameterControlId**: string (Required)
* **SourceParameterName**: string (Required)
* **StepSize**: int (Required)
* **Title**: string (Required)

## ParameterSliderControl
### Properties
* **DisplayOptions**: [SliderControlDisplayOptions](#slidercontroldisplayoptions)
* **MaximumValue**: int (Required)
* **MinimumValue**: int (Required)
* **ParameterControlId**: string (Required)
* **SourceParameterName**: string (Required)
* **StepSize**: int (Required)
* **Title**: string (Required)

## ParameterSliderControl
### Properties
* **DisplayOptions**: [SliderControlDisplayOptions](#slidercontroldisplayoptions)
* **MaximumValue**: int (Required)
* **MinimumValue**: int (Required)
* **ParameterControlId**: string (Required)
* **SourceParameterName**: string (Required)
* **StepSize**: int (Required)
* **Title**: string (Required)

## ParameterTextAreaControl
### Properties
* **Delimiter**: string
* **DisplayOptions**: [TextAreaControlDisplayOptions](#textareacontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)

## ParameterTextAreaControl
### Properties
* **Delimiter**: string
* **DisplayOptions**: [TextAreaControlDisplayOptions](#textareacontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)

## ParameterTextAreaControl
### Properties
* **Delimiter**: string
* **DisplayOptions**: [TextAreaControlDisplayOptions](#textareacontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)

## ParameterTextFieldControl
### Properties
* **DisplayOptions**: [TextFieldControlDisplayOptions](#textfieldcontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)

## ParameterTextFieldControl
### Properties
* **DisplayOptions**: [TextFieldControlDisplayOptions](#textfieldcontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)

## ParameterTextFieldControl
### Properties
* **DisplayOptions**: [TextFieldControlDisplayOptions](#textfieldcontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)

## PercentageDisplayFormatConfiguration
### Properties
* **DecimalPlacesConfiguration**: [DecimalPlacesConfiguration](#decimalplacesconfiguration)
* **NegativeValueConfiguration**: [NegativeValueConfiguration](#negativevalueconfiguration)
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **Prefix**: string
* **SeparatorConfiguration**: [NumericSeparatorConfiguration](#numericseparatorconfiguration)
* **Suffix**: string

## PercentageDisplayFormatConfiguration
### Properties
* **DecimalPlacesConfiguration**: [DecimalPlacesConfiguration](#decimalplacesconfiguration)
* **NegativeValueConfiguration**: [NegativeValueConfiguration](#negativevalueconfiguration)
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **Prefix**: string
* **SeparatorConfiguration**: [NumericSeparatorConfiguration](#numericseparatorconfiguration)
* **Suffix**: string

## PercentageDisplayFormatConfiguration
### Properties
* **DecimalPlacesConfiguration**: [DecimalPlacesConfiguration](#decimalplacesconfiguration)
* **NegativeValueConfiguration**: [NegativeValueConfiguration](#negativevalueconfiguration)
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **Prefix**: string
* **SeparatorConfiguration**: [NumericSeparatorConfiguration](#numericseparatorconfiguration)
* **Suffix**: string

## PercentileAggregation
### Properties
* **PercentileValue**: int

## PercentileAggregation
### Properties
* **PercentileValue**: int

## PercentileAggregation
### Properties
* **PercentileValue**: int

## PercentVisibleRange
### Properties
* **From**: int
* **To**: int

## PercentVisibleRange
### Properties
* **From**: int
* **To**: int

## PercentVisibleRange
### Properties
* **From**: int
* **To**: int

## PerformanceConfiguration
### Properties
* **UniqueKeys**: [UniqueKey](#uniquekey)[]

## PeriodOverPeriodComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **Time**: [DimensionField](#dimensionfield)
* **Value**: [MeasureField](#measurefield)

## PeriodOverPeriodComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **Time**: [DimensionField](#dimensionfield)
* **Value**: [MeasureField](#measurefield)

## PeriodOverPeriodComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **Time**: [DimensionField](#dimensionfield)
* **Value**: [MeasureField](#measurefield)

## PeriodToDateComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **PeriodTimeGranularity**: string
* **Time**: [DimensionField](#dimensionfield)
* **Value**: [MeasureField](#measurefield)

## PeriodToDateComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **PeriodTimeGranularity**: string
* **Time**: [DimensionField](#dimensionfield)
* **Value**: [MeasureField](#measurefield)

## PeriodToDateComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **PeriodTimeGranularity**: string
* **Time**: [DimensionField](#dimensionfield)
* **Value**: [MeasureField](#measurefield)

## PhysicalTableMap
### Properties

## PieChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **SmallMultiples**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## PieChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **SmallMultiples**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## PieChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **SmallMultiples**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## PieChartConfiguration
### Properties
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ContributionAnalysisDefaults**: [ContributionAnalysisDefault](#contributionanalysisdefault)[]
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **DonutOptions**: [DonutOptions](#donutoptions)
* **FieldWells**: [PieChartFieldWells](#piechartfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **SmallMultiplesOptions**: [SmallMultiplesOptions](#smallmultiplesoptions)
* **SortConfiguration**: [PieChartSortConfiguration](#piechartsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **ValueLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **VisualPalette**: [VisualPalette](#visualpalette)

## PieChartConfiguration
### Properties
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ContributionAnalysisDefaults**: [ContributionAnalysisDefault](#contributionanalysisdefault)[]
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **DonutOptions**: [DonutOptions](#donutoptions)
* **FieldWells**: [PieChartFieldWells](#piechartfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **SmallMultiplesOptions**: [SmallMultiplesOptions](#smallmultiplesoptions)
* **SortConfiguration**: [PieChartSortConfiguration](#piechartsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **ValueLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **VisualPalette**: [VisualPalette](#visualpalette)

## PieChartConfiguration
### Properties
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ContributionAnalysisDefaults**: [ContributionAnalysisDefault](#contributionanalysisdefault)[]
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **DonutOptions**: [DonutOptions](#donutoptions)
* **FieldWells**: [PieChartFieldWells](#piechartfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **SmallMultiplesOptions**: [SmallMultiplesOptions](#smallmultiplesoptions)
* **SortConfiguration**: [PieChartSortConfiguration](#piechartsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **ValueLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **VisualPalette**: [VisualPalette](#visualpalette)

## PieChartFieldWells
### Properties
* **PieChartAggregatedFieldWells**: [PieChartAggregatedFieldWells](#piechartaggregatedfieldwells)

## PieChartFieldWells
### Properties
* **PieChartAggregatedFieldWells**: [PieChartAggregatedFieldWells](#piechartaggregatedfieldwells)

## PieChartFieldWells
### Properties
* **PieChartAggregatedFieldWells**: [PieChartAggregatedFieldWells](#piechartaggregatedfieldwells)

## PieChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **SmallMultiplesLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SmallMultiplesSort**: [FieldSortOptions](#fieldsortoptions)[]

## PieChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **SmallMultiplesLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SmallMultiplesSort**: [FieldSortOptions](#fieldsortoptions)[]

## PieChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **SmallMultiplesLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SmallMultiplesSort**: [FieldSortOptions](#fieldsortoptions)[]

## PieChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [PieChartConfiguration](#piechartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## PieChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [PieChartConfiguration](#piechartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## PieChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [PieChartConfiguration](#piechartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## PivotFieldSortOptions
### Properties
* **FieldId**: string (Required)
* **SortBy**: [PivotTableSortBy](#pivottablesortby) (Required)

## PivotFieldSortOptions
### Properties
* **FieldId**: string (Required)
* **SortBy**: [PivotTableSortBy](#pivottablesortby) (Required)

## PivotFieldSortOptions
### Properties
* **FieldId**: string (Required)
* **SortBy**: [PivotTableSortBy](#pivottablesortby) (Required)

## PivotTableAggregatedFieldWells
### Properties
* **Columns**: [DimensionField](#dimensionfield)[]
* **Rows**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## PivotTableAggregatedFieldWells
### Properties
* **Columns**: [DimensionField](#dimensionfield)[]
* **Rows**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## PivotTableAggregatedFieldWells
### Properties
* **Columns**: [DimensionField](#dimensionfield)[]
* **Rows**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## PivotTableCellConditionalFormatting
### Properties
* **FieldId**: string (Required)
* **Scope**: [PivotTableConditionalFormattingScope](#pivottableconditionalformattingscope)
* **Scopes**: [PivotTableConditionalFormattingScope](#pivottableconditionalformattingscope)[]
* **TextFormat**: [TextConditionalFormat](#textconditionalformat)

## PivotTableCellConditionalFormatting
### Properties
* **FieldId**: string (Required)
* **Scope**: [PivotTableConditionalFormattingScope](#pivottableconditionalformattingscope)
* **Scopes**: [PivotTableConditionalFormattingScope](#pivottableconditionalformattingscope)[]
* **TextFormat**: [TextConditionalFormat](#textconditionalformat)

## PivotTableCellConditionalFormatting
### Properties
* **FieldId**: string (Required)
* **Scope**: [PivotTableConditionalFormattingScope](#pivottableconditionalformattingscope)
* **Scopes**: [PivotTableConditionalFormattingScope](#pivottableconditionalformattingscope)[]
* **TextFormat**: [TextConditionalFormat](#textconditionalformat)

## PivotTableConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [PivotTableConditionalFormattingOption](#pivottableconditionalformattingoption)[]

## PivotTableConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [PivotTableConditionalFormattingOption](#pivottableconditionalformattingoption)[]

## PivotTableConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [PivotTableConditionalFormattingOption](#pivottableconditionalformattingoption)[]

## PivotTableConditionalFormattingOption
### Properties
* **Cell**: [PivotTableCellConditionalFormatting](#pivottablecellconditionalformatting)

## PivotTableConditionalFormattingOption
### Properties
* **Cell**: [PivotTableCellConditionalFormatting](#pivottablecellconditionalformatting)

## PivotTableConditionalFormattingOption
### Properties
* **Cell**: [PivotTableCellConditionalFormatting](#pivottablecellconditionalformatting)

## PivotTableConditionalFormattingScope
### Properties
* **Role**: string

## PivotTableConditionalFormattingScope
### Properties
* **Role**: string

## PivotTableConditionalFormattingScope
### Properties
* **Role**: string

## PivotTableConfiguration
### Properties
* **FieldOptions**: [PivotTableFieldOptions](#pivottablefieldoptions)
* **FieldWells**: [PivotTableFieldWells](#pivottablefieldwells)
* **PaginatedReportOptions**: [PivotTablePaginatedReportOptions](#pivottablepaginatedreportoptions)
* **SortConfiguration**: [PivotTableSortConfiguration](#pivottablesortconfiguration)
* **TableOptions**: [PivotTableOptions](#pivottableoptions)
* **TotalOptions**: [PivotTableTotalOptions](#pivottabletotaloptions)

## PivotTableConfiguration
### Properties
* **FieldOptions**: [PivotTableFieldOptions](#pivottablefieldoptions)
* **FieldWells**: [PivotTableFieldWells](#pivottablefieldwells)
* **PaginatedReportOptions**: [PivotTablePaginatedReportOptions](#pivottablepaginatedreportoptions)
* **SortConfiguration**: [PivotTableSortConfiguration](#pivottablesortconfiguration)
* **TableOptions**: [PivotTableOptions](#pivottableoptions)
* **TotalOptions**: [PivotTableTotalOptions](#pivottabletotaloptions)

## PivotTableConfiguration
### Properties
* **FieldOptions**: [PivotTableFieldOptions](#pivottablefieldoptions)
* **FieldWells**: [PivotTableFieldWells](#pivottablefieldwells)
* **PaginatedReportOptions**: [PivotTablePaginatedReportOptions](#pivottablepaginatedreportoptions)
* **SortConfiguration**: [PivotTableSortConfiguration](#pivottablesortconfiguration)
* **TableOptions**: [PivotTableOptions](#pivottableoptions)
* **TotalOptions**: [PivotTableTotalOptions](#pivottabletotaloptions)

## PivotTableDataPathOption
### Properties
* **DataPathList**: [DataPathValue](#datapathvalue)[] (Required)
* **Width**: string: String based length that is composed of value and unit in px

## PivotTableDataPathOption
### Properties
* **DataPathList**: [DataPathValue](#datapathvalue)[] (Required)
* **Width**: string: String based length that is composed of value and unit in px

## PivotTableDataPathOption
### Properties
* **DataPathList**: [DataPathValue](#datapathvalue)[] (Required)
* **Width**: string: String based length that is composed of value and unit in px

## PivotTableFieldCollapseStateOption
### Properties
* **State**: string
* **Target**: [PivotTableFieldCollapseStateTarget](#pivottablefieldcollapsestatetarget) (Required)

## PivotTableFieldCollapseStateOption
### Properties
* **State**: string
* **Target**: [PivotTableFieldCollapseStateTarget](#pivottablefieldcollapsestatetarget) (Required)

## PivotTableFieldCollapseStateOption
### Properties
* **State**: string
* **Target**: [PivotTableFieldCollapseStateTarget](#pivottablefieldcollapsestatetarget) (Required)

## PivotTableFieldCollapseStateTarget
### Properties
* **FieldDataPathValues**: [DataPathValue](#datapathvalue)[]
* **FieldId**: string

## PivotTableFieldCollapseStateTarget
### Properties
* **FieldDataPathValues**: [DataPathValue](#datapathvalue)[]
* **FieldId**: string

## PivotTableFieldCollapseStateTarget
### Properties
* **FieldDataPathValues**: [DataPathValue](#datapathvalue)[]
* **FieldId**: string

## PivotTableFieldOption
### Properties
* **CustomLabel**: string
* **FieldId**: string (Required)
* **Visibility**: string

## PivotTableFieldOption
### Properties
* **CustomLabel**: string
* **FieldId**: string (Required)
* **Visibility**: string

## PivotTableFieldOption
### Properties
* **CustomLabel**: string
* **FieldId**: string (Required)
* **Visibility**: [Template_Visibility](#templatevisibility)

## PivotTableFieldOptions
### Properties
* **CollapseStateOptions**: [PivotTableFieldCollapseStateOption](#pivottablefieldcollapsestateoption)[]
* **DataPathOptions**: [PivotTableDataPathOption](#pivottabledatapathoption)[]
* **SelectedFieldOptions**: [PivotTableFieldOption](#pivottablefieldoption)[]

## PivotTableFieldOptions
### Properties
* **CollapseStateOptions**: [PivotTableFieldCollapseStateOption](#pivottablefieldcollapsestateoption)[]
* **DataPathOptions**: [PivotTableDataPathOption](#pivottabledatapathoption)[]
* **SelectedFieldOptions**: [PivotTableFieldOption](#pivottablefieldoption)[]

## PivotTableFieldOptions
### Properties
* **CollapseStateOptions**: [PivotTableFieldCollapseStateOption](#pivottablefieldcollapsestateoption)[]
* **DataPathOptions**: [PivotTableDataPathOption](#pivottabledatapathoption)[]
* **SelectedFieldOptions**: [PivotTableFieldOption](#pivottablefieldoption)[]

## PivotTableFieldSubtotalOptions
### Properties
* **FieldId**: string

## PivotTableFieldSubtotalOptions
### Properties
* **FieldId**: string

## PivotTableFieldSubtotalOptions
### Properties
* **FieldId**: string

## PivotTableFieldWells
### Properties
* **PivotTableAggregatedFieldWells**: [PivotTableAggregatedFieldWells](#pivottableaggregatedfieldwells)

## PivotTableFieldWells
### Properties
* **PivotTableAggregatedFieldWells**: [PivotTableAggregatedFieldWells](#pivottableaggregatedfieldwells)

## PivotTableFieldWells
### Properties
* **PivotTableAggregatedFieldWells**: [PivotTableAggregatedFieldWells](#pivottableaggregatedfieldwells)

## PivotTableOptions
### Properties
* **CellStyle**: [TableCellStyle](#tablecellstyle)
* **CollapsedRowDimensionsVisibility**: string
* **ColumnHeaderStyle**: [TableCellStyle](#tablecellstyle)
* **ColumnNamesVisibility**: string
* **DefaultCellWidth**: string: String based length that is composed of value and unit in px
* **MetricPlacement**: string
* **RowAlternateColorOptions**: [RowAlternateColorOptions](#rowalternatecoloroptions)
* **RowFieldNamesStyle**: [TableCellStyle](#tablecellstyle)
* **RowHeaderStyle**: [TableCellStyle](#tablecellstyle)
* **RowsLabelOptions**: [PivotTableRowsLabelOptions](#pivottablerowslabeloptions)
* **RowsLayout**: string
* **SingleMetricVisibility**: string
* **ToggleButtonsVisibility**: string

## PivotTableOptions
### Properties
* **CellStyle**: [TableCellStyle](#tablecellstyle)
* **CollapsedRowDimensionsVisibility**: string
* **ColumnHeaderStyle**: [TableCellStyle](#tablecellstyle)
* **ColumnNamesVisibility**: string
* **DefaultCellWidth**: string: String based length that is composed of value and unit in px
* **MetricPlacement**: string
* **RowAlternateColorOptions**: [RowAlternateColorOptions](#rowalternatecoloroptions)
* **RowFieldNamesStyle**: [TableCellStyle](#tablecellstyle)
* **RowHeaderStyle**: [TableCellStyle](#tablecellstyle)
* **RowsLabelOptions**: [PivotTableRowsLabelOptions](#pivottablerowslabeloptions)
* **RowsLayout**: string
* **SingleMetricVisibility**: string
* **ToggleButtonsVisibility**: string

## PivotTableOptions
### Properties
* **CellStyle**: [TableCellStyle](#tablecellstyle)
* **CollapsedRowDimensionsVisibility**: [Template_CollapsedRowDimensionsVisibility](#templatecollapsedrowdimensionsvisibility)
* **ColumnHeaderStyle**: [TableCellStyle](#tablecellstyle)
* **ColumnNamesVisibility**: [Template_ColumnNamesVisibility](#templatecolumnnamesvisibility)
* **DefaultCellWidth**: string: String based length that is composed of value and unit in px
* **MetricPlacement**: string
* **RowAlternateColorOptions**: [RowAlternateColorOptions](#rowalternatecoloroptions)
* **RowFieldNamesStyle**: [TableCellStyle](#tablecellstyle)
* **RowHeaderStyle**: [TableCellStyle](#tablecellstyle)
* **RowsLabelOptions**: [PivotTableRowsLabelOptions](#pivottablerowslabeloptions)
* **RowsLayout**: string
* **SingleMetricVisibility**: [Template_SingleMetricVisibility](#templatesinglemetricvisibility)
* **ToggleButtonsVisibility**: [Template_ToggleButtonsVisibility](#templatetogglebuttonsvisibility)

## PivotTablePaginatedReportOptions
### Properties
* **OverflowColumnHeaderVisibility**: string
* **VerticalOverflowVisibility**: string

## PivotTablePaginatedReportOptions
### Properties
* **OverflowColumnHeaderVisibility**: string
* **VerticalOverflowVisibility**: string

## PivotTablePaginatedReportOptions
### Properties
* **OverflowColumnHeaderVisibility**: [Template_OverflowColumnHeaderVisibility](#templateoverflowcolumnheadervisibility)
* **VerticalOverflowVisibility**: [Template_VerticalOverflowVisibility](#templateverticaloverflowvisibility)

## PivotTableRowsLabelOptions
### Properties
* **CustomLabel**: string
* **Visibility**: string

## PivotTableRowsLabelOptions
### Properties
* **CustomLabel**: string
* **Visibility**: string

## PivotTableRowsLabelOptions
### Properties
* **CustomLabel**: string
* **Visibility**: [Template_Visibility](#templatevisibility)

## PivotTableSortBy
### Properties
* **Column**: [ColumnSort](#columnsort)
* **DataPath**: [DataPathSort](#datapathsort)
* **Field**: [FieldSort](#fieldsort)

## PivotTableSortBy
### Properties
* **Column**: [ColumnSort](#columnsort)
* **DataPath**: [DataPathSort](#datapathsort)
* **Field**: [FieldSort](#fieldsort)

## PivotTableSortBy
### Properties
* **Column**: [ColumnSort](#columnsort)
* **DataPath**: [DataPathSort](#datapathsort)
* **Field**: [FieldSort](#fieldsort)

## PivotTableSortConfiguration
### Properties
* **FieldSortOptions**: [PivotFieldSortOptions](#pivotfieldsortoptions)[]

## PivotTableSortConfiguration
### Properties
* **FieldSortOptions**: [PivotFieldSortOptions](#pivotfieldsortoptions)[]

## PivotTableSortConfiguration
### Properties
* **FieldSortOptions**: [PivotFieldSortOptions](#pivotfieldsortoptions)[]

## PivotTableTotalOptions
### Properties
* **ColumnSubtotalOptions**: [SubtotalOptions](#subtotaloptions)
* **ColumnTotalOptions**: [PivotTotalOptions](#pivottotaloptions)
* **RowSubtotalOptions**: [SubtotalOptions](#subtotaloptions)
* **RowTotalOptions**: [PivotTotalOptions](#pivottotaloptions)

## PivotTableTotalOptions
### Properties
* **ColumnSubtotalOptions**: [SubtotalOptions](#subtotaloptions)
* **ColumnTotalOptions**: [PivotTotalOptions](#pivottotaloptions)
* **RowSubtotalOptions**: [SubtotalOptions](#subtotaloptions)
* **RowTotalOptions**: [PivotTotalOptions](#pivottotaloptions)

## PivotTableTotalOptions
### Properties
* **ColumnSubtotalOptions**: [SubtotalOptions](#subtotaloptions)
* **ColumnTotalOptions**: [PivotTotalOptions](#pivottotaloptions)
* **RowSubtotalOptions**: [SubtotalOptions](#subtotaloptions)
* **RowTotalOptions**: [PivotTotalOptions](#pivottotaloptions)

## PivotTableVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [PivotTableConfiguration](#pivottableconfiguration)
* **ConditionalFormatting**: [PivotTableConditionalFormatting](#pivottableconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## PivotTableVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [PivotTableConfiguration](#pivottableconfiguration)
* **ConditionalFormatting**: [PivotTableConditionalFormatting](#pivottableconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## PivotTableVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [PivotTableConfiguration](#pivottableconfiguration)
* **ConditionalFormatting**: [PivotTableConditionalFormatting](#pivottableconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## PivotTotalOptions
### Properties
* **CustomLabel**: string
* **MetricHeaderCellStyle**: [TableCellStyle](#tablecellstyle)
* **Placement**: string
* **ScrollStatus**: string
* **TotalAggregationOptions**: [TotalAggregationOption](#totalaggregationoption)[]
* **TotalCellStyle**: [TableCellStyle](#tablecellstyle)
* **TotalsVisibility**: string
* **ValueCellStyle**: [TableCellStyle](#tablecellstyle)

## PivotTotalOptions
### Properties
* **CustomLabel**: string
* **MetricHeaderCellStyle**: [TableCellStyle](#tablecellstyle)
* **Placement**: string
* **ScrollStatus**: string
* **TotalAggregationOptions**: [TotalAggregationOption](#totalaggregationoption)[]
* **TotalCellStyle**: [TableCellStyle](#tablecellstyle)
* **TotalsVisibility**: string
* **ValueCellStyle**: [TableCellStyle](#tablecellstyle)

## PivotTotalOptions
### Properties
* **CustomLabel**: string
* **MetricHeaderCellStyle**: [TableCellStyle](#tablecellstyle)
* **Placement**: string
* **ScrollStatus**: string
* **TotalAggregationOptions**: [TotalAggregationOption](#totalaggregationoption)[]
* **TotalCellStyle**: [TableCellStyle](#tablecellstyle)
* **TotalsVisibility**: [Template_TotalsVisibility](#templatetotalsvisibility)
* **ValueCellStyle**: [TableCellStyle](#tablecellstyle)

## PluginVisual
### Properties
* **ChartConfiguration**: [PluginVisualConfiguration](#pluginvisualconfiguration)
* **PluginArn**: string (Required)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## PluginVisual
### Properties
* **ChartConfiguration**: [PluginVisualConfiguration](#pluginvisualconfiguration)
* **PluginArn**: string (Required)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## PluginVisual
### Properties
* **ChartConfiguration**: [PluginVisualConfiguration](#pluginvisualconfiguration)
* **PluginArn**: string (Required)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## PluginVisualConfiguration
### Properties
* **FieldWells**: [PluginVisualFieldWell](#pluginvisualfieldwell)[]
* **SortConfiguration**: [PluginVisualSortConfiguration](#pluginvisualsortconfiguration)
* **VisualOptions**: [PluginVisualOptions](#pluginvisualoptions)

## PluginVisualConfiguration
### Properties
* **FieldWells**: [PluginVisualFieldWell](#pluginvisualfieldwell)[]
* **SortConfiguration**: [PluginVisualSortConfiguration](#pluginvisualsortconfiguration)
* **VisualOptions**: [PluginVisualOptions](#pluginvisualoptions)

## PluginVisualConfiguration
### Properties
* **FieldWells**: [PluginVisualFieldWell](#pluginvisualfieldwell)[]
* **SortConfiguration**: [PluginVisualSortConfiguration](#pluginvisualsortconfiguration)
* **VisualOptions**: [PluginVisualOptions](#pluginvisualoptions)

## PluginVisualFieldWell
### Properties
* **AxisName**: string
* **Dimensions**: [DimensionField](#dimensionfield)[]
* **Measures**: [MeasureField](#measurefield)[]
* **Unaggregated**: [UnaggregatedField](#unaggregatedfield)[]

## PluginVisualFieldWell
### Properties
* **AxisName**: string
* **Dimensions**: [DimensionField](#dimensionfield)[]
* **Measures**: [MeasureField](#measurefield)[]
* **Unaggregated**: [UnaggregatedField](#unaggregatedfield)[]

## PluginVisualFieldWell
### Properties
* **AxisName**: string
* **Dimensions**: [DimensionField](#dimensionfield)[]
* **Measures**: [MeasureField](#measurefield)[]
* **Unaggregated**: [UnaggregatedField](#unaggregatedfield)[]

## PluginVisualItemsLimitConfiguration
### Properties
* **ItemsLimit**: int

## PluginVisualItemsLimitConfiguration
### Properties
* **ItemsLimit**: int

## PluginVisualItemsLimitConfiguration
### Properties
* **ItemsLimit**: int

## PluginVisualOptions
### Properties
* **VisualProperties**: [PluginVisualProperty](#pluginvisualproperty)[]

## PluginVisualOptions
### Properties
* **VisualProperties**: [PluginVisualProperty](#pluginvisualproperty)[]

## PluginVisualOptions
### Properties
* **VisualProperties**: [PluginVisualProperty](#pluginvisualproperty)[]

## PluginVisualProperty
### Properties
* **Name**: string
* **Value**: string

## PluginVisualProperty
### Properties
* **Name**: string
* **Value**: string

## PluginVisualProperty
### Properties
* **Name**: string
* **Value**: string

## PluginVisualSortConfiguration
### Properties
* **PluginVisualTableQuerySort**: [PluginVisualTableQuerySort](#pluginvisualtablequerysort)

## PluginVisualSortConfiguration
### Properties
* **PluginVisualTableQuerySort**: [PluginVisualTableQuerySort](#pluginvisualtablequerysort)

## PluginVisualSortConfiguration
### Properties
* **PluginVisualTableQuerySort**: [PluginVisualTableQuerySort](#pluginvisualtablequerysort)

## PluginVisualTableQuerySort
### Properties
* **ItemsLimitConfiguration**: [PluginVisualItemsLimitConfiguration](#pluginvisualitemslimitconfiguration)
* **RowSort**: [FieldSortOptions](#fieldsortoptions)[]

## PluginVisualTableQuerySort
### Properties
* **ItemsLimitConfiguration**: [PluginVisualItemsLimitConfiguration](#pluginvisualitemslimitconfiguration)
* **RowSort**: [FieldSortOptions](#fieldsortoptions)[]

## PluginVisualTableQuerySort
### Properties
* **ItemsLimitConfiguration**: [PluginVisualItemsLimitConfiguration](#pluginvisualitemslimitconfiguration)
* **RowSort**: [FieldSortOptions](#fieldsortoptions)[]

## PostgreSqlParameters
### Properties
* **Database**: string (Required): <p>Database.</p>
* **Host**: string (Required): <p>Host.</p>
* **Port**: int (Required): <p>Port.</p>

## PredefinedHierarchy
### Properties
* **Columns**: [ColumnIdentifier](#columnidentifier)[] (Required)
* **DrillDownFilters**: [DrillDownFilter](#drilldownfilter)[]
* **HierarchyId**: string (Required)

## PredefinedHierarchy
### Properties
* **Columns**: [ColumnIdentifier](#columnidentifier)[] (Required)
* **DrillDownFilters**: [DrillDownFilter](#drilldownfilter)[]
* **HierarchyId**: string (Required)

## PredefinedHierarchy
### Properties
* **Columns**: [ColumnIdentifier](#columnidentifier)[] (Required)
* **DrillDownFilters**: [DrillDownFilter](#drilldownfilter)[]
* **HierarchyId**: string (Required)

## PrestoParameters
### Properties
* **Catalog**: string (Required): <p>Catalog.</p>
* **Host**: string (Required): <p>Host.</p>
* **Port**: int (Required): <p>Port.</p>

## ProgressBarOptions
### Properties
* **Visibility**: string

## ProgressBarOptions
### Properties
* **Visibility**: string

## ProgressBarOptions
### Properties
* **Visibility**: [Template_Visibility](#templatevisibility)

## QueryExecutionOptions
### Properties
* **QueryExecutionMode**: string

## QueryExecutionOptions
### Properties
* **QueryExecutionMode**: string

## RadarChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Color**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## RadarChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Color**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## RadarChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Color**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## RadarChartAreaStyleSettings
### Properties
* **Visibility**: string

## RadarChartAreaStyleSettings
### Properties
* **Visibility**: string

## RadarChartAreaStyleSettings
### Properties
* **Visibility**: [Template_Visibility](#templatevisibility)

## RadarChartConfiguration
### Properties
* **AlternateBandColorsVisibility**: string
* **AlternateBandEvenColor**: string
* **AlternateBandOddColor**: string
* **AxesRangeScale**: string
* **BaseSeriesSettings**: [RadarChartSeriesSettings](#radarchartseriessettings)
* **CategoryAxis**: [AxisDisplayOptions](#axisdisplayoptions)
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ColorAxis**: [AxisDisplayOptions](#axisdisplayoptions)
* **ColorLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **FieldWells**: [RadarChartFieldWells](#radarchartfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **Shape**: string
* **SortConfiguration**: [RadarChartSortConfiguration](#radarchartsortconfiguration)
* **StartAngle**: int
* **VisualPalette**: [VisualPalette](#visualpalette)

## RadarChartConfiguration
### Properties
* **AlternateBandColorsVisibility**: string
* **AlternateBandEvenColor**: string
* **AlternateBandOddColor**: string
* **AxesRangeScale**: string
* **BaseSeriesSettings**: [RadarChartSeriesSettings](#radarchartseriessettings)
* **CategoryAxis**: [AxisDisplayOptions](#axisdisplayoptions)
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ColorAxis**: [AxisDisplayOptions](#axisdisplayoptions)
* **ColorLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **FieldWells**: [RadarChartFieldWells](#radarchartfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **Shape**: string
* **SortConfiguration**: [RadarChartSortConfiguration](#radarchartsortconfiguration)
* **StartAngle**: int
* **VisualPalette**: [VisualPalette](#visualpalette)

## RadarChartConfiguration
### Properties
* **AlternateBandColorsVisibility**: [Template_AlternateBandColorsVisibility](#templatealternatebandcolorsvisibility)
* **AlternateBandEvenColor**: string
* **AlternateBandOddColor**: string
* **AxesRangeScale**: string
* **BaseSeriesSettings**: [RadarChartSeriesSettings](#radarchartseriessettings)
* **CategoryAxis**: [AxisDisplayOptions](#axisdisplayoptions)
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ColorAxis**: [AxisDisplayOptions](#axisdisplayoptions)
* **ColorLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **FieldWells**: [RadarChartFieldWells](#radarchartfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **Shape**: string
* **SortConfiguration**: [RadarChartSortConfiguration](#radarchartsortconfiguration)
* **StartAngle**: int
* **VisualPalette**: [VisualPalette](#visualpalette)

## RadarChartFieldWells
### Properties
* **RadarChartAggregatedFieldWells**: [RadarChartAggregatedFieldWells](#radarchartaggregatedfieldwells)

## RadarChartFieldWells
### Properties
* **RadarChartAggregatedFieldWells**: [RadarChartAggregatedFieldWells](#radarchartaggregatedfieldwells)

## RadarChartFieldWells
### Properties
* **RadarChartAggregatedFieldWells**: [RadarChartAggregatedFieldWells](#radarchartaggregatedfieldwells)

## RadarChartSeriesSettings
### Properties
* **AreaStyleSettings**: [RadarChartAreaStyleSettings](#radarchartareastylesettings)

## RadarChartSeriesSettings
### Properties
* **AreaStyleSettings**: [RadarChartAreaStyleSettings](#radarchartareastylesettings)

## RadarChartSeriesSettings
### Properties
* **AreaStyleSettings**: [RadarChartAreaStyleSettings](#radarchartareastylesettings)

## RadarChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **ColorSort**: [FieldSortOptions](#fieldsortoptions)[]

## RadarChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **ColorSort**: [FieldSortOptions](#fieldsortoptions)[]

## RadarChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **ColorSort**: [FieldSortOptions](#fieldsortoptions)[]

## RadarChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [RadarChartConfiguration](#radarchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## RadarChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [RadarChartConfiguration](#radarchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## RadarChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [RadarChartConfiguration](#radarchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## RangeConstant
### Properties
* **Maximum**: string
* **Minimum**: string

## RangeEndsLabelType
### Properties
* **Visibility**: string

## RangeEndsLabelType
### Properties
* **Visibility**: string

## RangeEndsLabelType
### Properties
* **Visibility**: [Template_Visibility](#templatevisibility)

## RdsParameters
### Properties
* **Database**: string (Required): <p>Database.</p>
* **InstanceId**: string (Required): <p>Instance ID.</p>

## RedshiftIAMParameters
### Properties
* **AutoCreateDatabaseUser**: bool: <p>Automatically creates a database user. If your database doesn't have a <code>DatabaseUser</code>, set this parameter to <code>True</code>. If there is no <code>DatabaseUser</code>, Amazon QuickSight can't connect to your cluster. The <code>RoleArn</code> that you use for this operation must grant access to <code>redshift:CreateClusterUser</code> to successfully create the user.</p>
* **DatabaseGroups**: string[]: <p>A list of groups whose permissions will be granted to Amazon QuickSight to access the cluster. These permissions are combined with the permissions granted to Amazon QuickSight by the <code>DatabaseUser</code>. If you choose to include this parameter, the <code>RoleArn</code> must grant access to <code>redshift:JoinGroup</code>.</p>
* **DatabaseUser**: string: <p>The user whose permissions and group memberships will be used by Amazon QuickSight to access the cluster. If this user already exists in your database, Amazon QuickSight is granted the same permissions that the user has. If the user doesn't exist, set the value of <code>AutoCreateDatabaseUser</code> to <code>True</code> to create a new user with PUBLIC permissions.</p>
* **RoleArn**: string (Required): <p>Use the <code>RoleArn</code> structure to allow Amazon QuickSight to call <code>redshift:GetClusterCredentials</code> on your cluster. The calling principal must have <code>iam:PassRole</code> access to pass the role to Amazon QuickSight. The role's trust policy must allow the Amazon QuickSight service principal to assume the role.</p>

## RedshiftParameters
### Properties
* **ClusterId**: string: <p>Cluster ID. This field can be blank if the <code>Host</code> and <code>Port</code> are
            provided.</p>
* **Database**: string (Required): <p>Database.</p>
* **Host**: string: <p>Host. This field can be blank if <code>ClusterId</code> is provided.</p>
* **IAMParameters**: [RedshiftIAMParameters](#redshiftiamparameters)
* **IdentityCenterConfiguration**: [IdentityCenterConfiguration](#identitycenterconfiguration)
* **Port**: int: <p>Port. This field can be blank if the <code>ClusterId</code> is provided.</p>

## ReferenceLine
### Properties
* **DataConfiguration**: [ReferenceLineDataConfiguration](#referencelinedataconfiguration) (Required)
* **LabelConfiguration**: [ReferenceLineLabelConfiguration](#referencelinelabelconfiguration)
* **Status**: string
* **StyleConfiguration**: [ReferenceLineStyleConfiguration](#referencelinestyleconfiguration)

## ReferenceLine
### Properties
* **DataConfiguration**: [ReferenceLineDataConfiguration](#referencelinedataconfiguration) (Required)
* **LabelConfiguration**: [ReferenceLineLabelConfiguration](#referencelinelabelconfiguration)
* **Status**: string
* **StyleConfiguration**: [ReferenceLineStyleConfiguration](#referencelinestyleconfiguration)

## ReferenceLine
### Properties
* **DataConfiguration**: [ReferenceLineDataConfiguration](#referencelinedataconfiguration) (Required)
* **LabelConfiguration**: [ReferenceLineLabelConfiguration](#referencelinelabelconfiguration)
* **Status**: string
* **StyleConfiguration**: [ReferenceLineStyleConfiguration](#referencelinestyleconfiguration)

## ReferenceLineCustomLabelConfiguration
### Properties
* **CustomLabel**: string (Required)

## ReferenceLineCustomLabelConfiguration
### Properties
* **CustomLabel**: string (Required)

## ReferenceLineCustomLabelConfiguration
### Properties
* **CustomLabel**: string (Required)

## ReferenceLineDataConfiguration
### Properties
* **AxisBinding**: string
* **DynamicConfiguration**: [ReferenceLineDynamicDataConfiguration](#referencelinedynamicdataconfiguration)
* **SeriesType**: string
* **StaticConfiguration**: [ReferenceLineStaticDataConfiguration](#referencelinestaticdataconfiguration)

## ReferenceLineDataConfiguration
### Properties
* **AxisBinding**: string
* **DynamicConfiguration**: [ReferenceLineDynamicDataConfiguration](#referencelinedynamicdataconfiguration)
* **SeriesType**: string
* **StaticConfiguration**: [ReferenceLineStaticDataConfiguration](#referencelinestaticdataconfiguration)

## ReferenceLineDataConfiguration
### Properties
* **AxisBinding**: string
* **DynamicConfiguration**: [ReferenceLineDynamicDataConfiguration](#referencelinedynamicdataconfiguration)
* **SeriesType**: string
* **StaticConfiguration**: [ReferenceLineStaticDataConfiguration](#referencelinestaticdataconfiguration)

## ReferenceLineDynamicDataConfiguration
### Properties
* **Calculation**: [NumericalAggregationFunction](#numericalaggregationfunction) (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **MeasureAggregationFunction**: [AggregationFunction](#aggregationfunction)

## ReferenceLineDynamicDataConfiguration
### Properties
* **Calculation**: [NumericalAggregationFunction](#numericalaggregationfunction) (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **MeasureAggregationFunction**: [AggregationFunction](#aggregationfunction)

## ReferenceLineDynamicDataConfiguration
### Properties
* **Calculation**: [NumericalAggregationFunction](#numericalaggregationfunction) (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **MeasureAggregationFunction**: [AggregationFunction](#aggregationfunction)

## ReferenceLineLabelConfiguration
### Properties
* **CustomLabelConfiguration**: [ReferenceLineCustomLabelConfiguration](#referencelinecustomlabelconfiguration)
* **FontColor**: string
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)
* **HorizontalPosition**: string
* **ValueLabelConfiguration**: [ReferenceLineValueLabelConfiguration](#referencelinevaluelabelconfiguration)
* **VerticalPosition**: string

## ReferenceLineLabelConfiguration
### Properties
* **CustomLabelConfiguration**: [ReferenceLineCustomLabelConfiguration](#referencelinecustomlabelconfiguration)
* **FontColor**: string
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)
* **HorizontalPosition**: string
* **ValueLabelConfiguration**: [ReferenceLineValueLabelConfiguration](#referencelinevaluelabelconfiguration)
* **VerticalPosition**: string

## ReferenceLineLabelConfiguration
### Properties
* **CustomLabelConfiguration**: [ReferenceLineCustomLabelConfiguration](#referencelinecustomlabelconfiguration)
* **FontColor**: string
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)
* **HorizontalPosition**: string
* **ValueLabelConfiguration**: [ReferenceLineValueLabelConfiguration](#referencelinevaluelabelconfiguration)
* **VerticalPosition**: string

## ReferenceLineStaticDataConfiguration
### Properties
* **Value**: int (Required)

## ReferenceLineStaticDataConfiguration
### Properties
* **Value**: int (Required)

## ReferenceLineStaticDataConfiguration
### Properties
* **Value**: int (Required)

## ReferenceLineStyleConfiguration
### Properties
* **Color**: string
* **Pattern**: string

## ReferenceLineStyleConfiguration
### Properties
* **Color**: string
* **Pattern**: string

## ReferenceLineStyleConfiguration
### Properties
* **Color**: string
* **Pattern**: string

## ReferenceLineValueLabelConfiguration
### Properties
* **FormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)
* **RelativePosition**: string

## ReferenceLineValueLabelConfiguration
### Properties
* **FormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)
* **RelativePosition**: string

## ReferenceLineValueLabelConfiguration
### Properties
* **FormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)
* **RelativePosition**: string

## RefreshConfiguration
### Properties
* **IncrementalRefresh**: [IncrementalRefresh](#incrementalrefresh) (Required)

## RefreshSchedule_ScheduleFrequency
### Properties
* **Interval**: string
* **RefreshOnDay**: [RefreshSchedule_ScheduleFrequency_RefreshOnDay](#refreshscheduleschedulefrequencyrefreshonday): <p>The day scheduled for refresh.</p>
* **TimeOfTheDay**: string: <p>The time of the day for scheduled refresh.</p>
* **TimeZone**: string: <p>The timezone for scheduled refresh.</p>

## RefreshSchedule_ScheduleFrequency_RefreshOnDay
### Properties
* **DayOfMonth**: string: <p>The Day Of Month for scheduled refresh.</p>
* **DayOfWeek**: string

## RefreshScheduleMap
### Properties
* **RefreshType**: string
* **ScheduleFrequency**: [RefreshSchedule_ScheduleFrequency](#refreshscheduleschedulefrequency): <p>Information about the schedule frequency.</p>
* **ScheduleId**: string: <p>An unique identifier for the refresh schedule.</p>
* **StartAfterDateTime**: string: <p>The date time after which refresh is to be scheduled</p>

## RelativeDatesFilter
### Properties
* **AnchorDateConfiguration**: [AnchorDateConfiguration](#anchordateconfiguration) (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)
* **ExcludePeriodConfiguration**: [ExcludePeriodConfiguration](#excludeperiodconfiguration)
* **FilterId**: string (Required)
* **MinimumGranularity**: string
* **NullOption**: string (Required)
* **ParameterName**: string
* **RelativeDateType**: string (Required)
* **RelativeDateValue**: int
* **TimeGranularity**: string (Required)

## RelativeDatesFilter
### Properties
* **AnchorDateConfiguration**: [AnchorDateConfiguration](#anchordateconfiguration) (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)
* **ExcludePeriodConfiguration**: [ExcludePeriodConfiguration](#excludeperiodconfiguration)
* **FilterId**: string (Required)
* **MinimumGranularity**: string
* **NullOption**: string (Required)
* **ParameterName**: string
* **RelativeDateType**: string (Required)
* **RelativeDateValue**: int
* **TimeGranularity**: string (Required)

## RelativeDatesFilter
### Properties
* **AnchorDateConfiguration**: [AnchorDateConfiguration](#anchordateconfiguration) (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)
* **ExcludePeriodConfiguration**: [ExcludePeriodConfiguration](#excludeperiodconfiguration)
* **FilterId**: string (Required)
* **MinimumGranularity**: string
* **NullOption**: string (Required)
* **ParameterName**: string
* **RelativeDateType**: string (Required)
* **RelativeDateValue**: int
* **TimeGranularity**: string (Required)

## RelativeDateTimeControlDisplayOptions
### Properties
* **DateTimeFormat**: string
* **InfoIconLabelOptions**: [SheetControlInfoIconLabelOptions](#sheetcontrolinfoiconlabeloptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## RelativeDateTimeControlDisplayOptions
### Properties
* **DateTimeFormat**: string
* **InfoIconLabelOptions**: [SheetControlInfoIconLabelOptions](#sheetcontrolinfoiconlabeloptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## RelativeDateTimeControlDisplayOptions
### Properties
* **DateTimeFormat**: string
* **InfoIconLabelOptions**: [SheetControlInfoIconLabelOptions](#sheetcontrolinfoiconlabeloptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

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
               <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
                    ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
                    (This is less common.) </p>
            </li>
         </ul>

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
               <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
                    ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
                    (This is less common.) </p>
            </li>
         </ul>

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
               <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
                    ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
                    (This is less common.) </p>
            </li>
         </ul>

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
               <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
                    ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
                    (This is less common.) </p>
            </li>
         </ul>
* **Resource**: string

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
               <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
                    ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
                    (This is less common.) </p>
            </li>
         </ul>

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
               <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
                    ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
                    (This is less common.) </p>
            </li>
         </ul>

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
               <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
                    ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
                    (This is less common.) </p>
            </li>
         </ul>

## RollingDateConfiguration
### Properties
* **DataSetIdentifier**: string
* **Expression**: string (Required)

## RollingDateConfiguration
### Properties
* **DataSetIdentifier**: string
* **Expression**: string (Required)

## RollingDateConfiguration
### Properties
* **DataSetIdentifier**: string
* **Expression**: string (Required)

## RowAlternateColorOptions
### Properties
* **RowAlternateColors**: string[]
* **Status**: string
* **UsePrimaryBackgroundColor**: string

## RowAlternateColorOptions
### Properties
* **RowAlternateColors**: string[]
* **Status**: string
* **UsePrimaryBackgroundColor**: string

## RowAlternateColorOptions
### Properties
* **RowAlternateColors**: string[]
* **Status**: string
* **UsePrimaryBackgroundColor**: string

## RowLevelPermissionDataSet
### Properties
* **Arn**: string (Required): <p>The Amazon Resource Name (ARN) of the dataset that contains permissions for RLS.</p>
* **FormatVersion**: string
* **Namespace**: string: <p>The namespace associated with the dataset that contains permissions for RLS.</p>
* **PermissionPolicy**: string (Required)
* **Status**: string

## RowLevelPermissionTagConfiguration
### Properties
* **Status**: string
* **TagRuleConfigurations**: string[][]: <p>A list of tag configuration rules to apply to a dataset. All tag configurations have the OR condition. Tags within each tile will be joined (AND). At least one rule in this structure must have all tag values assigned to it to apply Row-level security (RLS) to the dataset.</p>
* **TagRules**: [RowLevelPermissionTagRule](#rowlevelpermissiontagrule)[] (Required): <p>A set of rules associated with row-level security, such as the tag names and columns that they are assigned to.</p>

## RowLevelPermissionTagRule
### Properties
* **ColumnName**: string (Required): <p>The column name that a tag key is assigned to.</p>
* **MatchAllValue**: string: <p>A string that you want to use to filter by all the values in a column in the dataset and don’t want to list the values one by one. For example, you can use an asterisk as your match all value.</p>
* **TagKey**: string (Required): <p>The unique key for a tag.</p>
* **TagMultiValueDelimiter**: string: <p>A string that you want to use to delimit the values when you pass the values at run time. For example, you can delimit the values with a comma.</p>

## S3Parameters
### Properties
* **ManifestFileLocation**: [ManifestFileLocation](#manifestfilelocation) (Required)
* **RoleArn**: string: <p>Use the <code>RoleArn</code> structure to override an account-wide role for a specific S3 data source. For example, say an account administrator has turned off all S3 access with an account-wide role. The administrator can then use <code>RoleArn</code> to bypass the account-wide role and allow S3 access for the single S3 data source that is specified in the structure, even if the account-wide role forbidding S3 access is still active.</p>

## SameSheetTargetVisualConfiguration
### Properties
* **TargetVisualOptions**: string
* **TargetVisuals**: string[]

## SameSheetTargetVisualConfiguration
### Properties
* **TargetVisualOptions**: string
* **TargetVisuals**: string[]

## SameSheetTargetVisualConfiguration
### Properties
* **TargetVisualOptions**: string
* **TargetVisuals**: string[]

## SankeyDiagramAggregatedFieldWells
### Properties
* **Destination**: [DimensionField](#dimensionfield)[]
* **Source**: [DimensionField](#dimensionfield)[]
* **Weight**: [MeasureField](#measurefield)[]

## SankeyDiagramAggregatedFieldWells
### Properties
* **Destination**: [DimensionField](#dimensionfield)[]
* **Source**: [DimensionField](#dimensionfield)[]
* **Weight**: [MeasureField](#measurefield)[]

## SankeyDiagramAggregatedFieldWells
### Properties
* **Destination**: [DimensionField](#dimensionfield)[]
* **Source**: [DimensionField](#dimensionfield)[]
* **Weight**: [MeasureField](#measurefield)[]

## SankeyDiagramChartConfiguration
### Properties
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [SankeyDiagramFieldWells](#sankeydiagramfieldwells)
* **SortConfiguration**: [SankeyDiagramSortConfiguration](#sankeydiagramsortconfiguration)

## SankeyDiagramChartConfiguration
### Properties
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [SankeyDiagramFieldWells](#sankeydiagramfieldwells)
* **SortConfiguration**: [SankeyDiagramSortConfiguration](#sankeydiagramsortconfiguration)

## SankeyDiagramChartConfiguration
### Properties
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [SankeyDiagramFieldWells](#sankeydiagramfieldwells)
* **SortConfiguration**: [SankeyDiagramSortConfiguration](#sankeydiagramsortconfiguration)

## SankeyDiagramFieldWells
### Properties
* **SankeyDiagramAggregatedFieldWells**: [SankeyDiagramAggregatedFieldWells](#sankeydiagramaggregatedfieldwells)

## SankeyDiagramFieldWells
### Properties
* **SankeyDiagramAggregatedFieldWells**: [SankeyDiagramAggregatedFieldWells](#sankeydiagramaggregatedfieldwells)

## SankeyDiagramFieldWells
### Properties
* **SankeyDiagramAggregatedFieldWells**: [SankeyDiagramAggregatedFieldWells](#sankeydiagramaggregatedfieldwells)

## SankeyDiagramSortConfiguration
### Properties
* **DestinationItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SourceItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **WeightSort**: [FieldSortOptions](#fieldsortoptions)[]

## SankeyDiagramSortConfiguration
### Properties
* **DestinationItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SourceItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **WeightSort**: [FieldSortOptions](#fieldsortoptions)[]

## SankeyDiagramSortConfiguration
### Properties
* **DestinationItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SourceItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **WeightSort**: [FieldSortOptions](#fieldsortoptions)[]

## SankeyDiagramVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [SankeyDiagramChartConfiguration](#sankeydiagramchartconfiguration)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## SankeyDiagramVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [SankeyDiagramChartConfiguration](#sankeydiagramchartconfiguration)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## SankeyDiagramVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [SankeyDiagramChartConfiguration](#sankeydiagramchartconfiguration)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## ScatterPlotCategoricallyAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Label**: [DimensionField](#dimensionfield)[]
* **Size**: [MeasureField](#measurefield)[]
* **XAxis**: [MeasureField](#measurefield)[]
* **YAxis**: [MeasureField](#measurefield)[]

## ScatterPlotCategoricallyAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Label**: [DimensionField](#dimensionfield)[]
* **Size**: [MeasureField](#measurefield)[]
* **XAxis**: [MeasureField](#measurefield)[]
* **YAxis**: [MeasureField](#measurefield)[]

## ScatterPlotCategoricallyAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Label**: [DimensionField](#dimensionfield)[]
* **Size**: [MeasureField](#measurefield)[]
* **XAxis**: [MeasureField](#measurefield)[]
* **YAxis**: [MeasureField](#measurefield)[]

## ScatterPlotConfiguration
### Properties
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [ScatterPlotFieldWells](#scatterplotfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **VisualPalette**: [VisualPalette](#visualpalette)
* **XAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **XAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **YAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **YAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)

## ScatterPlotConfiguration
### Properties
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [ScatterPlotFieldWells](#scatterplotfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **VisualPalette**: [VisualPalette](#visualpalette)
* **XAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **XAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **YAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **YAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)

## ScatterPlotConfiguration
### Properties
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [ScatterPlotFieldWells](#scatterplotfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **VisualPalette**: [VisualPalette](#visualpalette)
* **XAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **XAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **YAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **YAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)

## ScatterPlotFieldWells
### Properties
* **ScatterPlotCategoricallyAggregatedFieldWells**: [ScatterPlotCategoricallyAggregatedFieldWells](#scatterplotcategoricallyaggregatedfieldwells)
* **ScatterPlotUnaggregatedFieldWells**: [ScatterPlotUnaggregatedFieldWells](#scatterplotunaggregatedfieldwells)

## ScatterPlotFieldWells
### Properties
* **ScatterPlotCategoricallyAggregatedFieldWells**: [ScatterPlotCategoricallyAggregatedFieldWells](#scatterplotcategoricallyaggregatedfieldwells)
* **ScatterPlotUnaggregatedFieldWells**: [ScatterPlotUnaggregatedFieldWells](#scatterplotunaggregatedfieldwells)

## ScatterPlotFieldWells
### Properties
* **ScatterPlotCategoricallyAggregatedFieldWells**: [ScatterPlotCategoricallyAggregatedFieldWells](#scatterplotcategoricallyaggregatedfieldwells)
* **ScatterPlotUnaggregatedFieldWells**: [ScatterPlotUnaggregatedFieldWells](#scatterplotunaggregatedfieldwells)

## ScatterPlotUnaggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Label**: [DimensionField](#dimensionfield)[]
* **Size**: [MeasureField](#measurefield)[]
* **XAxis**: [DimensionField](#dimensionfield)[]
* **YAxis**: [DimensionField](#dimensionfield)[]

## ScatterPlotUnaggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Label**: [DimensionField](#dimensionfield)[]
* **Size**: [MeasureField](#measurefield)[]
* **XAxis**: [DimensionField](#dimensionfield)[]
* **YAxis**: [DimensionField](#dimensionfield)[]

## ScatterPlotUnaggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Label**: [DimensionField](#dimensionfield)[]
* **Size**: [MeasureField](#measurefield)[]
* **XAxis**: [DimensionField](#dimensionfield)[]
* **YAxis**: [DimensionField](#dimensionfield)[]

## ScatterPlotVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [ScatterPlotConfiguration](#scatterplotconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## ScatterPlotVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [ScatterPlotConfiguration](#scatterplotconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## ScatterPlotVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [ScatterPlotConfiguration](#scatterplotconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## ScrollBarOptions
### Properties
* **Visibility**: string
* **VisibleRange**: [VisibleRangeOptions](#visiblerangeoptions)

## ScrollBarOptions
### Properties
* **Visibility**: string
* **VisibleRange**: [VisibleRangeOptions](#visiblerangeoptions)

## ScrollBarOptions
### Properties
* **Visibility**: [Template_Visibility](#templatevisibility)
* **VisibleRange**: [VisibleRangeOptions](#visiblerangeoptions)

## SecondaryValueOptions
### Properties
* **Visibility**: string

## SecondaryValueOptions
### Properties
* **Visibility**: string

## SecondaryValueOptions
### Properties
* **Visibility**: [Template_Visibility](#templatevisibility)

## SectionAfterPageBreak
### Properties
* **Status**: string

## SectionAfterPageBreak
### Properties
* **Status**: string

## SectionAfterPageBreak
### Properties
* **Status**: string

## SectionBasedLayoutCanvasSizeOptions
### Properties
* **PaperCanvasSizeOptions**: [SectionBasedLayoutPaperCanvasSizeOptions](#sectionbasedlayoutpapercanvassizeoptions)

## SectionBasedLayoutCanvasSizeOptions
### Properties
* **PaperCanvasSizeOptions**: [SectionBasedLayoutPaperCanvasSizeOptions](#sectionbasedlayoutpapercanvassizeoptions)

## SectionBasedLayoutCanvasSizeOptions
### Properties
* **PaperCanvasSizeOptions**: [SectionBasedLayoutPaperCanvasSizeOptions](#sectionbasedlayoutpapercanvassizeoptions)

## SectionBasedLayoutConfiguration
### Properties
* **BodySections**: [BodySectionConfiguration](#bodysectionconfiguration)[] (Required)
* **CanvasSizeOptions**: [SectionBasedLayoutCanvasSizeOptions](#sectionbasedlayoutcanvassizeoptions) (Required)
* **FooterSections**: [HeaderFooterSectionConfiguration](#headerfootersectionconfiguration)[] (Required)
* **HeaderSections**: [HeaderFooterSectionConfiguration](#headerfootersectionconfiguration)[] (Required)

## SectionBasedLayoutConfiguration
### Properties
* **BodySections**: [BodySectionConfiguration](#bodysectionconfiguration)[] (Required)
* **CanvasSizeOptions**: [SectionBasedLayoutCanvasSizeOptions](#sectionbasedlayoutcanvassizeoptions) (Required)
* **FooterSections**: [HeaderFooterSectionConfiguration](#headerfootersectionconfiguration)[] (Required)
* **HeaderSections**: [HeaderFooterSectionConfiguration](#headerfootersectionconfiguration)[] (Required)

## SectionBasedLayoutConfiguration
### Properties
* **BodySections**: [BodySectionConfiguration](#bodysectionconfiguration)[] (Required)
* **CanvasSizeOptions**: [SectionBasedLayoutCanvasSizeOptions](#sectionbasedlayoutcanvassizeoptions) (Required)
* **FooterSections**: [HeaderFooterSectionConfiguration](#headerfootersectionconfiguration)[] (Required)
* **HeaderSections**: [HeaderFooterSectionConfiguration](#headerfootersectionconfiguration)[] (Required)

## SectionBasedLayoutPaperCanvasSizeOptions
### Properties
* **PaperMargin**: [Spacing](#spacing)
* **PaperOrientation**: string
* **PaperSize**: string

## SectionBasedLayoutPaperCanvasSizeOptions
### Properties
* **PaperMargin**: [Spacing](#spacing)
* **PaperOrientation**: string
* **PaperSize**: string

## SectionBasedLayoutPaperCanvasSizeOptions
### Properties
* **PaperMargin**: [Spacing](#spacing)
* **PaperOrientation**: string
* **PaperSize**: string

## SectionLayoutConfiguration
### Properties
* **FreeFormLayout**: [FreeFormSectionLayoutConfiguration](#freeformsectionlayoutconfiguration) (Required)

## SectionLayoutConfiguration
### Properties
* **FreeFormLayout**: [FreeFormSectionLayoutConfiguration](#freeformsectionlayoutconfiguration) (Required)

## SectionLayoutConfiguration
### Properties
* **FreeFormLayout**: [FreeFormSectionLayoutConfiguration](#freeformsectionlayoutconfiguration) (Required)

## SectionPageBreakConfiguration
### Properties
* **After**: [SectionAfterPageBreak](#sectionafterpagebreak)

## SectionPageBreakConfiguration
### Properties
* **After**: [SectionAfterPageBreak](#sectionafterpagebreak)

## SectionPageBreakConfiguration
### Properties
* **After**: [SectionAfterPageBreak](#sectionafterpagebreak)

## SectionStyle
### Properties
* **Height**: string: String based length that is composed of value and unit in px
* **Padding**: [Spacing](#spacing)

## SectionStyle
### Properties
* **Height**: string: String based length that is composed of value and unit in px
* **Padding**: [Spacing](#spacing)

## SectionStyle
### Properties
* **Height**: string: String based length that is composed of value and unit in px
* **Padding**: [Spacing](#spacing)

## SelectedSheetsFilterScopeConfiguration
### Properties
* **SheetVisualScopingConfigurations**: [SheetVisualScopingConfiguration](#sheetvisualscopingconfiguration)[]

## SelectedSheetsFilterScopeConfiguration
### Properties
* **SheetVisualScopingConfigurations**: [SheetVisualScopingConfiguration](#sheetvisualscopingconfiguration)[]

## SelectedSheetsFilterScopeConfiguration
### Properties
* **SheetVisualScopingConfigurations**: [SheetVisualScopingConfiguration](#sheetvisualscopingconfiguration)[]

## SemanticEntityType
### Properties
* **SubTypeName**: string
* **TypeName**: string
* **TypeParameters**: [TypeParameters](#typeparameters)

## SemanticType
### Properties
* **FalseyCellValue**: string
* **FalseyCellValueSynonyms**: string[]
* **SubTypeName**: string
* **TruthyCellValue**: string
* **TruthyCellValueSynonyms**: string[]
* **TypeName**: string
* **TypeParameters**: [TypeParameters](#typeparameters)

## SeriesItem
### Properties
* **DataFieldSeriesItem**: [DataFieldSeriesItem](#datafieldseriesitem)
* **FieldSeriesItem**: [FieldSeriesItem](#fieldseriesitem)

## SeriesItem
### Properties
* **DataFieldSeriesItem**: [DataFieldSeriesItem](#datafieldseriesitem)
* **FieldSeriesItem**: [FieldSeriesItem](#fieldseriesitem)

## SeriesItem
### Properties
* **DataFieldSeriesItem**: [DataFieldSeriesItem](#datafieldseriesitem)
* **FieldSeriesItem**: [FieldSeriesItem](#fieldseriesitem)

## SetParameterValueConfiguration
### Properties
* **DestinationParameterName**: string (Required)
* **Value**: [DestinationParameterValueConfiguration](#destinationparametervalueconfiguration) (Required)

## SetParameterValueConfiguration
### Properties
* **DestinationParameterName**: string (Required)
* **Value**: [DestinationParameterValueConfiguration](#destinationparametervalueconfiguration) (Required)

## SetParameterValueConfiguration
### Properties
* **DestinationParameterName**: string (Required)
* **Value**: [DestinationParameterValueConfiguration](#destinationparametervalueconfiguration) (Required)

## ShapeConditionalFormat
### Properties
* **BackgroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor) (Required)

## ShapeConditionalFormat
### Properties
* **BackgroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor) (Required)

## ShapeConditionalFormat
### Properties
* **BackgroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor) (Required)

## Sheet
### Properties
* **Images**: [SheetImage](#sheetimage)[]
* **Name**: string: <p>The name of a sheet. This name is displayed on the sheet's tab in the Amazon QuickSight
            console.</p>
* **SheetId**: string: <p>The unique identifier associated with a sheet.</p>

## Sheet
### Properties
* **Images**: [SheetImage](#sheetimage)[]
* **Name**: string: <p>The name of a sheet. This name is displayed on the sheet's tab in the Amazon QuickSight
            console.</p>
* **SheetId**: string: <p>The unique identifier associated with a sheet.</p>

## Sheet
### Properties
* **Images**: [SheetImage](#sheetimage)[]
* **Name**: string: <p>The name of a sheet. This name is displayed on the sheet's tab in the Amazon QuickSight
            console.</p>
* **SheetId**: string: <p>The unique identifier associated with a sheet.</p>

## SheetControlInfoIconLabelOptions
### Properties
* **InfoIconText**: string
* **Visibility**: string

## SheetControlInfoIconLabelOptions
### Properties
* **InfoIconText**: string
* **Visibility**: string

## SheetControlInfoIconLabelOptions
### Properties
* **InfoIconText**: string
* **Visibility**: [Template_Visibility](#templatevisibility)

## SheetControlLayout
### Properties
* **Configuration**: [SheetControlLayoutConfiguration](#sheetcontrollayoutconfiguration) (Required)

## SheetControlLayout
### Properties
* **Configuration**: [SheetControlLayoutConfiguration](#sheetcontrollayoutconfiguration) (Required)

## SheetControlLayout
### Properties
* **Configuration**: [SheetControlLayoutConfiguration](#sheetcontrollayoutconfiguration) (Required)

## SheetControlLayoutConfiguration
### Properties
* **GridLayout**: [GridLayoutConfiguration](#gridlayoutconfiguration)

## SheetControlLayoutConfiguration
### Properties
* **GridLayout**: [GridLayoutConfiguration](#gridlayoutconfiguration)

## SheetControlLayoutConfiguration
### Properties
* **GridLayout**: [GridLayoutConfiguration](#gridlayoutconfiguration)

## SheetControlsOption
### Properties
* **VisibilityState**: string

## SheetDefinition
### Properties
* **ContentType**: string
* **Description**: string
* **FilterControls**: [FilterControl](#filtercontrol)[]
* **Images**: [SheetImage](#sheetimage)[]
* **Layouts**: [Layout](#layout)[]
* **Name**: string
* **ParameterControls**: [ParameterControl](#parametercontrol)[]
* **SheetControlLayouts**: [SheetControlLayout](#sheetcontrollayout)[]
* **SheetId**: string (Required)
* **TextBoxes**: [SheetTextBox](#sheettextbox)[]
* **Title**: string
* **Visuals**: [Visual](#visual)[]

## SheetDefinition
### Properties
* **ContentType**: string
* **Description**: string
* **FilterControls**: [FilterControl](#filtercontrol)[]
* **Images**: [SheetImage](#sheetimage)[]
* **Layouts**: [Layout](#layout)[]
* **Name**: string
* **ParameterControls**: [ParameterControl](#parametercontrol)[]
* **SheetControlLayouts**: [SheetControlLayout](#sheetcontrollayout)[]
* **SheetId**: string (Required)
* **TextBoxes**: [SheetTextBox](#sheettextbox)[]
* **Title**: string
* **Visuals**: [Visual](#visual)[]

## SheetDefinition
### Properties
* **ContentType**: string
* **Description**: string
* **FilterControls**: [FilterControl](#filtercontrol)[]
* **Images**: [SheetImage](#sheetimage)[]
* **Layouts**: [Layout](#layout)[]
* **Name**: string
* **ParameterControls**: [ParameterControl](#parametercontrol)[]
* **SheetControlLayouts**: [SheetControlLayout](#sheetcontrollayout)[]
* **SheetId**: string (Required)
* **TextBoxes**: [SheetTextBox](#sheettextbox)[]
* **Title**: string
* **Visuals**: [Visual](#visual)[]

## SheetElementConfigurationOverrides
### Properties
* **Visibility**: string

## SheetElementConfigurationOverrides
### Properties
* **Visibility**: string

## SheetElementConfigurationOverrides
### Properties
* **Visibility**: [Template_Visibility](#templatevisibility)

## SheetElementRenderingRule
### Properties
* **ConfigurationOverrides**: [SheetElementConfigurationOverrides](#sheetelementconfigurationoverrides) (Required)
* **Expression**: string (Required)

## SheetElementRenderingRule
### Properties
* **ConfigurationOverrides**: [SheetElementConfigurationOverrides](#sheetelementconfigurationoverrides) (Required)
* **Expression**: string (Required)

## SheetElementRenderingRule
### Properties
* **ConfigurationOverrides**: [SheetElementConfigurationOverrides](#sheetelementconfigurationoverrides) (Required)
* **Expression**: string (Required)

## SheetImage
### Properties
* **Actions**: [ImageCustomAction](#imagecustomaction)[]
* **ImageContentAltText**: string
* **Interactions**: [ImageInteractionOptions](#imageinteractionoptions)
* **Scaling**: [SheetImageScalingConfiguration](#sheetimagescalingconfiguration)
* **SheetImageId**: string (Required)
* **Source**: [SheetImageSource](#sheetimagesource) (Required)
* **Tooltip**: [SheetImageTooltipConfiguration](#sheetimagetooltipconfiguration)

## SheetImage
### Properties
* **Actions**: [ImageCustomAction](#imagecustomaction)[]
* **ImageContentAltText**: string
* **Interactions**: [ImageInteractionOptions](#imageinteractionoptions)
* **Scaling**: [SheetImageScalingConfiguration](#sheetimagescalingconfiguration)
* **SheetImageId**: string (Required)
* **Source**: [SheetImageSource](#sheetimagesource) (Required)
* **Tooltip**: [SheetImageTooltipConfiguration](#sheetimagetooltipconfiguration)

## SheetImage
### Properties
* **Actions**: [ImageCustomAction](#imagecustomaction)[]
* **ImageContentAltText**: string
* **Interactions**: [ImageInteractionOptions](#imageinteractionoptions)
* **Scaling**: [SheetImageScalingConfiguration](#sheetimagescalingconfiguration)
* **SheetImageId**: string (Required)
* **Source**: [SheetImageSource](#sheetimagesource) (Required)
* **Tooltip**: [SheetImageTooltipConfiguration](#sheetimagetooltipconfiguration)

## SheetImageScalingConfiguration
### Properties
* **ScalingType**: string

## SheetImageScalingConfiguration
### Properties
* **ScalingType**: string

## SheetImageScalingConfiguration
### Properties
* **ScalingType**: string

## SheetImageSource
### Properties
* **SheetImageStaticFileSource**: [SheetImageStaticFileSource](#sheetimagestaticfilesource)

## SheetImageSource
### Properties
* **SheetImageStaticFileSource**: [SheetImageStaticFileSource](#sheetimagestaticfilesource)

## SheetImageSource
### Properties
* **SheetImageStaticFileSource**: [SheetImageStaticFileSource](#sheetimagestaticfilesource)

## SheetImageStaticFileSource
### Properties
* **StaticFileId**: string (Required)

## SheetImageStaticFileSource
### Properties
* **StaticFileId**: string (Required)

## SheetImageStaticFileSource
### Properties
* **StaticFileId**: string (Required)

## SheetImageTooltipConfiguration
### Properties
* **TooltipText**: [SheetImageTooltipText](#sheetimagetooltiptext)
* **Visibility**: string

## SheetImageTooltipConfiguration
### Properties
* **TooltipText**: [SheetImageTooltipText](#sheetimagetooltiptext)
* **Visibility**: string

## SheetImageTooltipConfiguration
### Properties
* **TooltipText**: [SheetImageTooltipText](#sheetimagetooltiptext)
* **Visibility**: [Template_Visibility](#templatevisibility)

## SheetImageTooltipText
### Properties
* **PlainText**: string

## SheetImageTooltipText
### Properties
* **PlainText**: string

## SheetImageTooltipText
### Properties
* **PlainText**: string

## SheetLayoutElementMaximizationOption
### Properties
* **AvailabilityStatus**: string

## SheetStyle
### Properties
* **Tile**: [TileStyle](#tilestyle)
* **TileLayout**: [TileLayoutStyle](#tilelayoutstyle)

## SheetTextBox
### Properties
* **Content**: string
* **SheetTextBoxId**: string (Required)

## SheetTextBox
### Properties
* **Content**: string
* **SheetTextBoxId**: string (Required)

## SheetTextBox
### Properties
* **Content**: string
* **SheetTextBoxId**: string (Required)

## SheetVisualScopingConfiguration
### Properties
* **Scope**: string (Required)
* **SheetId**: string (Required)
* **VisualIds**: string[]

## SheetVisualScopingConfiguration
### Properties
* **Scope**: string (Required)
* **SheetId**: string (Required)
* **VisualIds**: string[]

## SheetVisualScopingConfiguration
### Properties
* **Scope**: string (Required)
* **SheetId**: string (Required)
* **VisualIds**: string[]

## ShortFormatText
### Properties
* **PlainText**: string
* **RichText**: string

## ShortFormatText
### Properties
* **PlainText**: string
* **RichText**: string

## ShortFormatText
### Properties
* **PlainText**: string
* **RichText**: string

## SimpleClusterMarker
### Properties
* **Color**: string

## SimpleClusterMarker
### Properties
* **Color**: string

## SimpleClusterMarker
### Properties
* **Color**: string

## SingleAxisOptions
### Properties
* **YAxisOptions**: [YAxisOptions](#yaxisoptions)

## SingleAxisOptions
### Properties
* **YAxisOptions**: [YAxisOptions](#yaxisoptions)

## SingleAxisOptions
### Properties
* **YAxisOptions**: [YAxisOptions](#yaxisoptions)

## SliderControlDisplayOptions
### Properties
* **InfoIconLabelOptions**: [SheetControlInfoIconLabelOptions](#sheetcontrolinfoiconlabeloptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## SliderControlDisplayOptions
### Properties
* **InfoIconLabelOptions**: [SheetControlInfoIconLabelOptions](#sheetcontrolinfoiconlabeloptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## SliderControlDisplayOptions
### Properties
* **InfoIconLabelOptions**: [SheetControlInfoIconLabelOptions](#sheetcontrolinfoiconlabeloptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## SmallMultiplesAxisProperties
### Properties
* **Placement**: string
* **Scale**: string

## SmallMultiplesAxisProperties
### Properties
* **Placement**: string
* **Scale**: string

## SmallMultiplesAxisProperties
### Properties
* **Placement**: string
* **Scale**: string

## SmallMultiplesOptions
### Properties
* **MaxVisibleColumns**: int
* **MaxVisibleRows**: int
* **PanelConfiguration**: [PanelConfiguration](#panelconfiguration)
* **XAxis**: [SmallMultiplesAxisProperties](#smallmultiplesaxisproperties)
* **YAxis**: [SmallMultiplesAxisProperties](#smallmultiplesaxisproperties)

## SmallMultiplesOptions
### Properties
* **MaxVisibleColumns**: int
* **MaxVisibleRows**: int
* **PanelConfiguration**: [PanelConfiguration](#panelconfiguration)
* **XAxis**: [SmallMultiplesAxisProperties](#smallmultiplesaxisproperties)
* **YAxis**: [SmallMultiplesAxisProperties](#smallmultiplesaxisproperties)

## SmallMultiplesOptions
### Properties
* **MaxVisibleColumns**: int
* **MaxVisibleRows**: int
* **PanelConfiguration**: [PanelConfiguration](#panelconfiguration)
* **XAxis**: [SmallMultiplesAxisProperties](#smallmultiplesaxisproperties)
* **YAxis**: [SmallMultiplesAxisProperties](#smallmultiplesaxisproperties)

## SnowflakeParameters
### Properties
* **AuthenticationType**: string
* **Database**: string (Required): <p>Database.</p>
* **DatabaseAccessControlRole**: string
* **Host**: string (Required): <p>Host.</p>
* **OAuthParameters**: [OAuthParameters](#oauthparameters)
* **Warehouse**: string (Required): <p>Warehouse.</p>

## Spacing
### Properties
* **Bottom**: string: String based length that is composed of value and unit
* **Left**: string: String based length that is composed of value and unit
* **Right**: string: String based length that is composed of value and unit
* **Top**: string: String based length that is composed of value and unit

## Spacing
### Properties
* **Bottom**: string: String based length that is composed of value and unit
* **Left**: string: String based length that is composed of value and unit
* **Right**: string: String based length that is composed of value and unit
* **Top**: string: String based length that is composed of value and unit

## Spacing
### Properties
* **Bottom**: string: String based length that is composed of value and unit
* **Left**: string: String based length that is composed of value and unit
* **Right**: string: String based length that is composed of value and unit
* **Top**: string: String based length that is composed of value and unit

## SparkParameters
### Properties
* **Host**: string (Required): <p>Host.</p>
* **Port**: int (Required): <p>Port.</p>

## SpatialStaticFile
### Properties
* **Source**: [StaticFileSource](#staticfilesource)
* **StaticFileId**: string (Required)

## SpatialStaticFile
### Properties
* **Source**: [StaticFileSource](#staticfilesource)
* **StaticFileId**: string (Required)

## SqlServerParameters
### Properties
* **Database**: string (Required): <p>Database.</p>
* **Host**: string (Required): <p>Host.</p>
* **Port**: int (Required): <p>Port.</p>

## SslProperties
### Properties
* **DisableSsl**: bool: <p>A Boolean option to control whether SSL should be disabled.</p>

## StarburstParameters
### Properties
* **AuthenticationType**: string
* **Catalog**: string (Required): <p>The catalog name for the Starburst data source.</p>
* **DatabaseAccessControlRole**: string
* **Host**: string (Required): <p>The host name of the Starburst data source.</p>
* **OAuthParameters**: [OAuthParameters](#oauthparameters)
* **Port**: int (Required): <p>The port for the Starburst data source.</p>
* **ProductType**: string

## StaticFile
### Properties
* **ImageStaticFile**: [ImageStaticFile](#imagestaticfile)
* **SpatialStaticFile**: [SpatialStaticFile](#spatialstaticfile)

## StaticFile
### Properties
* **ImageStaticFile**: [ImageStaticFile](#imagestaticfile)
* **SpatialStaticFile**: [SpatialStaticFile](#spatialstaticfile)

## StaticFileS3SourceOptions
### Properties
* **BucketName**: string (Required)
* **ObjectKey**: string (Required)
* **Region**: string (Required)

## StaticFileS3SourceOptions
### Properties
* **BucketName**: string (Required)
* **ObjectKey**: string (Required)
* **Region**: string (Required)

## StaticFileSource
### Properties
* **S3Options**: [StaticFileS3SourceOptions](#staticfiles3sourceoptions)
* **UrlOptions**: [StaticFileUrlSourceOptions](#staticfileurlsourceoptions)

## StaticFileSource
### Properties
* **S3Options**: [StaticFileS3SourceOptions](#staticfiles3sourceoptions)
* **UrlOptions**: [StaticFileUrlSourceOptions](#staticfileurlsourceoptions)

## StaticFileUrlSourceOptions
### Properties
* **Url**: string (Required)

## StaticFileUrlSourceOptions
### Properties
* **Url**: string (Required)

## StringDatasetParameter
### Properties
* **DefaultValues**: [StringDatasetParameterDefaultValues](#stringdatasetparameterdefaultvalues)
* **Id**: string (Required): <p>An identifier for the string parameter that is created in the dataset.</p>
* **Name**: string (Required): <p>The name of the string parameter that is created in the dataset.</p>
* **ValueType**: string (Required)

## StringDatasetParameterDefaultValues
### Properties
* **StaticValues**: string[]: <p>A list of static default values for a given string parameter.</p>

## StringDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **StaticValues**: string[]

## StringDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **StaticValues**: string[]

## StringDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **StaticValues**: string[]

## StringFormatConfiguration
### Properties
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **NumericFormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)

## StringFormatConfiguration
### Properties
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **NumericFormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)

## StringFormatConfiguration
### Properties
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **NumericFormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)

## StringParameter
### Properties
* **Name**: string (Required): <p>A display name for a string parameter.</p>
* **Values**: string[] (Required): <p>The values of a string parameter.</p>

## StringParameter
### Properties
* **Name**: string (Required): <p>A display name for a string parameter.</p>
* **Values**: string[] (Required): <p>The values of a string parameter.</p>

## StringParameterDeclaration
### Properties
* **DefaultValues**: [StringDefaultValues](#stringdefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **ParameterValueType**: string (Required)
* **ValueWhenUnset**: [StringValueWhenUnsetConfiguration](#stringvaluewhenunsetconfiguration)

## StringParameterDeclaration
### Properties
* **DefaultValues**: [StringDefaultValues](#stringdefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **ParameterValueType**: string (Required)
* **ValueWhenUnset**: [StringValueWhenUnsetConfiguration](#stringvaluewhenunsetconfiguration)

## StringParameterDeclaration
### Properties
* **DefaultValues**: [StringDefaultValues](#stringdefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **ParameterValueType**: string (Required)
* **ValueWhenUnset**: [StringValueWhenUnsetConfiguration](#stringvaluewhenunsetconfiguration)

## StringValueWhenUnsetConfiguration
### Properties
* **CustomValue**: string
* **ValueWhenUnsetOption**: string

## StringValueWhenUnsetConfiguration
### Properties
* **CustomValue**: string
* **ValueWhenUnsetOption**: string

## StringValueWhenUnsetConfiguration
### Properties
* **CustomValue**: string
* **ValueWhenUnsetOption**: string

## SubtotalOptions
### Properties
* **CustomLabel**: string
* **FieldLevel**: string
* **FieldLevelOptions**: [PivotTableFieldSubtotalOptions](#pivottablefieldsubtotaloptions)[]
* **MetricHeaderCellStyle**: [TableCellStyle](#tablecellstyle)
* **StyleTargets**: [TableStyleTarget](#tablestyletarget)[]
* **TotalCellStyle**: [TableCellStyle](#tablecellstyle)
* **TotalsVisibility**: string
* **ValueCellStyle**: [TableCellStyle](#tablecellstyle)

## SubtotalOptions
### Properties
* **CustomLabel**: string
* **FieldLevel**: string
* **FieldLevelOptions**: [PivotTableFieldSubtotalOptions](#pivottablefieldsubtotaloptions)[]
* **MetricHeaderCellStyle**: [TableCellStyle](#tablecellstyle)
* **StyleTargets**: [TableStyleTarget](#tablestyletarget)[]
* **TotalCellStyle**: [TableCellStyle](#tablecellstyle)
* **TotalsVisibility**: string
* **ValueCellStyle**: [TableCellStyle](#tablecellstyle)

## SubtotalOptions
### Properties
* **CustomLabel**: string
* **FieldLevel**: string
* **FieldLevelOptions**: [PivotTableFieldSubtotalOptions](#pivottablefieldsubtotaloptions)[]
* **MetricHeaderCellStyle**: [TableCellStyle](#tablecellstyle)
* **StyleTargets**: [TableStyleTarget](#tablestyletarget)[]
* **TotalCellStyle**: [TableCellStyle](#tablecellstyle)
* **TotalsVisibility**: [Template_TotalsVisibility](#templatetotalsvisibility)
* **ValueCellStyle**: [TableCellStyle](#tablecellstyle)

## TableAggregatedFieldWells
### Properties
* **GroupBy**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## TableAggregatedFieldWells
### Properties
* **GroupBy**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## TableAggregatedFieldWells
### Properties
* **GroupBy**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## TableBorderOptions
### Properties
* **Color**: string
* **Style**: string
* **Thickness**: int

## TableBorderOptions
### Properties
* **Color**: string
* **Style**: string
* **Thickness**: int

## TableBorderOptions
### Properties
* **Color**: string
* **Style**: string
* **Thickness**: int

## TableCellConditionalFormatting
### Properties
* **FieldId**: string (Required)
* **TextFormat**: [TextConditionalFormat](#textconditionalformat)

## TableCellConditionalFormatting
### Properties
* **FieldId**: string (Required)
* **TextFormat**: [TextConditionalFormat](#textconditionalformat)

## TableCellConditionalFormatting
### Properties
* **FieldId**: string (Required)
* **TextFormat**: [TextConditionalFormat](#textconditionalformat)

## TableCellImageSizingConfiguration
### Properties
* **TableCellImageScalingConfiguration**: string

## TableCellImageSizingConfiguration
### Properties
* **TableCellImageScalingConfiguration**: string

## TableCellImageSizingConfiguration
### Properties
* **TableCellImageScalingConfiguration**: string

## TableCellStyle
### Properties
* **BackgroundColor**: string
* **Border**: [GlobalTableBorderOptions](#globaltableborderoptions)
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)
* **Height**: int
* **HorizontalTextAlignment**: string
* **TextWrap**: string
* **VerticalTextAlignment**: string
* **Visibility**: string

## TableCellStyle
### Properties
* **BackgroundColor**: string
* **Border**: [GlobalTableBorderOptions](#globaltableborderoptions)
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)
* **Height**: int
* **HorizontalTextAlignment**: string
* **TextWrap**: string
* **VerticalTextAlignment**: string
* **Visibility**: string

## TableCellStyle
### Properties
* **BackgroundColor**: string
* **Border**: [GlobalTableBorderOptions](#globaltableborderoptions)
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)
* **Height**: int
* **HorizontalTextAlignment**: string
* **TextWrap**: string
* **VerticalTextAlignment**: string
* **Visibility**: [Template_Visibility](#templatevisibility)

## TableConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [TableConditionalFormattingOption](#tableconditionalformattingoption)[]

## TableConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [TableConditionalFormattingOption](#tableconditionalformattingoption)[]

## TableConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [TableConditionalFormattingOption](#tableconditionalformattingoption)[]

## TableConditionalFormattingOption
### Properties
* **Cell**: [TableCellConditionalFormatting](#tablecellconditionalformatting)
* **Row**: [TableRowConditionalFormatting](#tablerowconditionalformatting)

## TableConditionalFormattingOption
### Properties
* **Cell**: [TableCellConditionalFormatting](#tablecellconditionalformatting)
* **Row**: [TableRowConditionalFormatting](#tablerowconditionalformatting)

## TableConditionalFormattingOption
### Properties
* **Cell**: [TableCellConditionalFormatting](#tablecellconditionalformatting)
* **Row**: [TableRowConditionalFormatting](#tablerowconditionalformatting)

## TableConfiguration
### Properties
* **FieldOptions**: [TableFieldOptions](#tablefieldoptions)
* **FieldWells**: [TableFieldWells](#tablefieldwells)
* **PaginatedReportOptions**: [TablePaginatedReportOptions](#tablepaginatedreportoptions)
* **SortConfiguration**: [TableSortConfiguration](#tablesortconfiguration)
* **TableInlineVisualizations**: [TableInlineVisualization](#tableinlinevisualization)[]
* **TableOptions**: [TableOptions](#tableoptions)
* **TotalOptions**: [TotalOptions](#totaloptions)

## TableConfiguration
### Properties
* **FieldOptions**: [TableFieldOptions](#tablefieldoptions)
* **FieldWells**: [TableFieldWells](#tablefieldwells)
* **PaginatedReportOptions**: [TablePaginatedReportOptions](#tablepaginatedreportoptions)
* **SortConfiguration**: [TableSortConfiguration](#tablesortconfiguration)
* **TableInlineVisualizations**: [TableInlineVisualization](#tableinlinevisualization)[]
* **TableOptions**: [TableOptions](#tableoptions)
* **TotalOptions**: [TotalOptions](#totaloptions)

## TableConfiguration
### Properties
* **FieldOptions**: [TableFieldOptions](#tablefieldoptions)
* **FieldWells**: [TableFieldWells](#tablefieldwells)
* **PaginatedReportOptions**: [TablePaginatedReportOptions](#tablepaginatedreportoptions)
* **SortConfiguration**: [TableSortConfiguration](#tablesortconfiguration)
* **TableInlineVisualizations**: [TableInlineVisualization](#tableinlinevisualization)[]
* **TableOptions**: [TableOptions](#tableoptions)
* **TotalOptions**: [TotalOptions](#totaloptions)

## TableFieldCustomIconContent
### Properties
* **Icon**: string

## TableFieldCustomIconContent
### Properties
* **Icon**: string

## TableFieldCustomIconContent
### Properties
* **Icon**: string

## TableFieldCustomTextContent
### Properties
* **FontConfiguration**: [FontConfiguration](#fontconfiguration) (Required)
* **Value**: string

## TableFieldCustomTextContent
### Properties
* **FontConfiguration**: [FontConfiguration](#fontconfiguration) (Required)
* **Value**: string

## TableFieldCustomTextContent
### Properties
* **FontConfiguration**: [FontConfiguration](#fontconfiguration) (Required)
* **Value**: string

## TableFieldImageConfiguration
### Properties
* **SizingOptions**: [TableCellImageSizingConfiguration](#tablecellimagesizingconfiguration)

## TableFieldImageConfiguration
### Properties
* **SizingOptions**: [TableCellImageSizingConfiguration](#tablecellimagesizingconfiguration)

## TableFieldImageConfiguration
### Properties
* **SizingOptions**: [TableCellImageSizingConfiguration](#tablecellimagesizingconfiguration)

## TableFieldLinkConfiguration
### Properties
* **Content**: [TableFieldLinkContentConfiguration](#tablefieldlinkcontentconfiguration) (Required)
* **Target**: string (Required)

## TableFieldLinkConfiguration
### Properties
* **Content**: [TableFieldLinkContentConfiguration](#tablefieldlinkcontentconfiguration) (Required)
* **Target**: string (Required)

## TableFieldLinkConfiguration
### Properties
* **Content**: [TableFieldLinkContentConfiguration](#tablefieldlinkcontentconfiguration) (Required)
* **Target**: string (Required)

## TableFieldLinkContentConfiguration
### Properties
* **CustomIconContent**: [TableFieldCustomIconContent](#tablefieldcustomiconcontent)
* **CustomTextContent**: [TableFieldCustomTextContent](#tablefieldcustomtextcontent)

## TableFieldLinkContentConfiguration
### Properties
* **CustomIconContent**: [TableFieldCustomIconContent](#tablefieldcustomiconcontent)
* **CustomTextContent**: [TableFieldCustomTextContent](#tablefieldcustomtextcontent)

## TableFieldLinkContentConfiguration
### Properties
* **CustomIconContent**: [TableFieldCustomIconContent](#tablefieldcustomiconcontent)
* **CustomTextContent**: [TableFieldCustomTextContent](#tablefieldcustomtextcontent)

## TableFieldOption
### Properties
* **CustomLabel**: string
* **FieldId**: string (Required)
* **URLStyling**: [TableFieldURLConfiguration](#tablefieldurlconfiguration)
* **Visibility**: string
* **Width**: string: String based length that is composed of value and unit in px

## TableFieldOption
### Properties
* **CustomLabel**: string
* **FieldId**: string (Required)
* **URLStyling**: [TableFieldURLConfiguration](#tablefieldurlconfiguration)
* **Visibility**: string
* **Width**: string: String based length that is composed of value and unit in px

## TableFieldOption
### Properties
* **CustomLabel**: string
* **FieldId**: string (Required)
* **URLStyling**: [TableFieldURLConfiguration](#tablefieldurlconfiguration)
* **Visibility**: [Template_Visibility](#templatevisibility)
* **Width**: string: String based length that is composed of value and unit in px

## TableFieldOptions
### Properties
* **Order**: string[]
* **PinnedFieldOptions**: [TablePinnedFieldOptions](#tablepinnedfieldoptions)
* **SelectedFieldOptions**: [TableFieldOption](#tablefieldoption)[]

## TableFieldOptions
### Properties
* **Order**: string[]
* **PinnedFieldOptions**: [TablePinnedFieldOptions](#tablepinnedfieldoptions)
* **SelectedFieldOptions**: [TableFieldOption](#tablefieldoption)[]

## TableFieldOptions
### Properties
* **Order**: string[]
* **PinnedFieldOptions**: [TablePinnedFieldOptions](#tablepinnedfieldoptions)
* **SelectedFieldOptions**: [TableFieldOption](#tablefieldoption)[]

## TableFieldURLConfiguration
### Properties
* **ImageConfiguration**: [TableFieldImageConfiguration](#tablefieldimageconfiguration)
* **LinkConfiguration**: [TableFieldLinkConfiguration](#tablefieldlinkconfiguration)

## TableFieldURLConfiguration
### Properties
* **ImageConfiguration**: [TableFieldImageConfiguration](#tablefieldimageconfiguration)
* **LinkConfiguration**: [TableFieldLinkConfiguration](#tablefieldlinkconfiguration)

## TableFieldURLConfiguration
### Properties
* **ImageConfiguration**: [TableFieldImageConfiguration](#tablefieldimageconfiguration)
* **LinkConfiguration**: [TableFieldLinkConfiguration](#tablefieldlinkconfiguration)

## TableFieldWells
### Properties
* **TableAggregatedFieldWells**: [TableAggregatedFieldWells](#tableaggregatedfieldwells)
* **TableUnaggregatedFieldWells**: [TableUnaggregatedFieldWells](#tableunaggregatedfieldwells)

## TableFieldWells
### Properties
* **TableAggregatedFieldWells**: [TableAggregatedFieldWells](#tableaggregatedfieldwells)
* **TableUnaggregatedFieldWells**: [TableUnaggregatedFieldWells](#tableunaggregatedfieldwells)

## TableFieldWells
### Properties
* **TableAggregatedFieldWells**: [TableAggregatedFieldWells](#tableaggregatedfieldwells)
* **TableUnaggregatedFieldWells**: [TableUnaggregatedFieldWells](#tableunaggregatedfieldwells)

## TableInlineVisualization
### Properties
* **DataBars**: [DataBarsOptions](#databarsoptions)

## TableInlineVisualization
### Properties
* **DataBars**: [DataBarsOptions](#databarsoptions)

## TableInlineVisualization
### Properties
* **DataBars**: [DataBarsOptions](#databarsoptions)

## TableOptions
### Properties
* **CellStyle**: [TableCellStyle](#tablecellstyle)
* **HeaderStyle**: [TableCellStyle](#tablecellstyle)
* **Orientation**: string
* **RowAlternateColorOptions**: [RowAlternateColorOptions](#rowalternatecoloroptions)

## TableOptions
### Properties
* **CellStyle**: [TableCellStyle](#tablecellstyle)
* **HeaderStyle**: [TableCellStyle](#tablecellstyle)
* **Orientation**: string
* **RowAlternateColorOptions**: [RowAlternateColorOptions](#rowalternatecoloroptions)

## TableOptions
### Properties
* **CellStyle**: [TableCellStyle](#tablecellstyle)
* **HeaderStyle**: [TableCellStyle](#tablecellstyle)
* **Orientation**: string
* **RowAlternateColorOptions**: [RowAlternateColorOptions](#rowalternatecoloroptions)

## TablePaginatedReportOptions
### Properties
* **OverflowColumnHeaderVisibility**: string
* **VerticalOverflowVisibility**: string

## TablePaginatedReportOptions
### Properties
* **OverflowColumnHeaderVisibility**: string
* **VerticalOverflowVisibility**: string

## TablePaginatedReportOptions
### Properties
* **OverflowColumnHeaderVisibility**: [Template_OverflowColumnHeaderVisibility](#templateoverflowcolumnheadervisibility)
* **VerticalOverflowVisibility**: [Template_VerticalOverflowVisibility](#templateverticaloverflowvisibility)

## TablePinnedFieldOptions
### Properties
* **PinnedLeftFields**: string[]

## TablePinnedFieldOptions
### Properties
* **PinnedLeftFields**: string[]

## TablePinnedFieldOptions
### Properties
* **PinnedLeftFields**: string[]

## TableRowConditionalFormatting
### Properties
* **BackgroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## TableRowConditionalFormatting
### Properties
* **BackgroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## TableRowConditionalFormatting
### Properties
* **BackgroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## TableSideBorderOptions
### Properties
* **Bottom**: [TableBorderOptions](#tableborderoptions)
* **InnerHorizontal**: [TableBorderOptions](#tableborderoptions)
* **InnerVertical**: [TableBorderOptions](#tableborderoptions)
* **Left**: [TableBorderOptions](#tableborderoptions)
* **Right**: [TableBorderOptions](#tableborderoptions)
* **Top**: [TableBorderOptions](#tableborderoptions)

## TableSideBorderOptions
### Properties
* **Bottom**: [TableBorderOptions](#tableborderoptions)
* **InnerHorizontal**: [TableBorderOptions](#tableborderoptions)
* **InnerVertical**: [TableBorderOptions](#tableborderoptions)
* **Left**: [TableBorderOptions](#tableborderoptions)
* **Right**: [TableBorderOptions](#tableborderoptions)
* **Top**: [TableBorderOptions](#tableborderoptions)

## TableSideBorderOptions
### Properties
* **Bottom**: [TableBorderOptions](#tableborderoptions)
* **InnerHorizontal**: [TableBorderOptions](#tableborderoptions)
* **InnerVertical**: [TableBorderOptions](#tableborderoptions)
* **Left**: [TableBorderOptions](#tableborderoptions)
* **Right**: [TableBorderOptions](#tableborderoptions)
* **Top**: [TableBorderOptions](#tableborderoptions)

## TableSortConfiguration
### Properties
* **PaginationConfiguration**: [PaginationConfiguration](#paginationconfiguration)
* **RowSort**: [FieldSortOptions](#fieldsortoptions)[]

## TableSortConfiguration
### Properties
* **PaginationConfiguration**: [PaginationConfiguration](#paginationconfiguration)
* **RowSort**: [FieldSortOptions](#fieldsortoptions)[]

## TableSortConfiguration
### Properties
* **PaginationConfiguration**: [PaginationConfiguration](#paginationconfiguration)
* **RowSort**: [FieldSortOptions](#fieldsortoptions)[]

## TableStyleTarget
### Properties
* **CellType**: string (Required)

## TableStyleTarget
### Properties
* **CellType**: string (Required)

## TableStyleTarget
### Properties
* **CellType**: string (Required)

## TableUnaggregatedFieldWells
### Properties
* **Values**: [UnaggregatedField](#unaggregatedfield)[]

## TableUnaggregatedFieldWells
### Properties
* **Values**: [UnaggregatedField](#unaggregatedfield)[]

## TableUnaggregatedFieldWells
### Properties
* **Values**: [UnaggregatedField](#unaggregatedfield)[]

## TableVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [TableConfiguration](#tableconfiguration)
* **ConditionalFormatting**: [TableConditionalFormatting](#tableconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## TableVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [TableConfiguration](#tableconfiguration)
* **ConditionalFormatting**: [TableConditionalFormatting](#tableconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## TableVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [TableConfiguration](#tableconfiguration)
* **ConditionalFormatting**: [TableConditionalFormatting](#tableconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## Tag
### Properties
* **Key**: string (Required): <p>Tag key.</p>
* **Value**: string (Required): <p>Tag value.</p>

## Tag
### Properties
* **Key**: string (Required): <p>Tag key.</p>
* **Value**: string (Required): <p>Tag value.</p>

## Tag
### Properties
* **Key**: string (Required): <p>Tag key.</p>
* **Value**: string (Required): <p>Tag value.</p>

## Tag
### Properties
* **Key**: string (Required): <p>Tag key.</p>
* **Value**: string (Required): <p>Tag value.</p>

## Tag
### Properties
* **Key**: string (Required): <p>Tag key.</p>
* **Value**: string (Required): <p>Tag value.</p>

## Tag
### Properties
* **Key**: string (Required): <p>Tag key.</p>
* **Value**: string (Required): <p>Tag value.</p>

## Tag
### Properties
* **Key**: string (Required): <p>Tag key.</p>
* **Value**: string (Required): <p>Tag value.</p>

## Tag
### Properties
* **Key**: string (Required): <p>Tag key.</p>
* **Value**: string (Required): <p>Tag value.</p>

## Tag
### Properties
* **Key**: string (Required): <p>Tag key.</p>
* **Value**: string (Required): <p>Tag value.</p>

## Template_AggregationVisibility
### Properties

## Template_AllDataPointsVisibility
### Properties

## Template_AlternateBandColorsVisibility
### Properties

## Template_AvailabilityStatus
### Properties

## Template_AxisLineVisibility
### Properties

## Template_BackgroundVisibility
### Properties

## Template_BorderVisibility
### Properties

## Template_CategoryLabelVisibility
### Properties

## Template_CategoryLabelVisibility
### Properties

## Template_CollapsedRowDimensionsVisibility
### Properties

## Template_ColumnNamesVisibility
### Properties

## Template_GridLineVisibility
### Properties

## Template_GutterVisibility
### Properties

## Template_LabelVisibility
### Properties

## Template_LineVisibility
### Properties

## Template_MarkerVisibility
### Properties

## Template_MeasureLabelVisibility
### Properties

## Template_MeasureLabelVisibility
### Properties

## Template_MissingDateVisibility
### Properties

## Template_OutlierVisibility
### Properties

## Template_OverflowColumnHeaderVisibility
### Properties

## Template_OverflowColumnHeaderVisibility
### Properties

## Template_SingleMetricVisibility
### Properties

## Template_SortIconVisibility
### Properties

## Template_ToggleButtonsVisibility
### Properties

## Template_TooltipVisibility
### Properties

## Template_TooltipVisibility
### Properties

## Template_TotalsVisibility
### Properties

## Template_TotalsVisibility
### Properties

## Template_TotalsVisibility
### Properties

## Template_TotalsVisibility
### Properties

## Template_VerticalOverflowVisibility
### Properties

## Template_VerticalOverflowVisibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## Template_Visibility
### Properties

## TemplateError
### Properties
* **Message**: string: <p>Description of the error type.</p>
* **Type**: string
* **ViolatedEntities**: [Entity](#entity)[]: <p>An error path that shows which entities caused the template error.</p>

## TemplateSourceAnalysis
### Properties
* **Arn**: string (Required): <p>The Amazon Resource Name (ARN) of the resource.</p>
* **DataSetReferences**: [DataSetReference](#datasetreference)[] (Required): <p>A structure containing information about the dataset references used as placeholders
            in the template.</p>

## TemplateSourceEntity
### Properties
* **SourceAnalysis**: [TemplateSourceAnalysis](#templatesourceanalysis)
* **SourceTemplate**: [TemplateSourceTemplate](#templatesourcetemplate)

## TemplateSourceTemplate
### Properties
* **Arn**: string (Required): <p>The Amazon Resource Name (ARN) of the resource.</p>

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
* **Status**: string
* **ThemeArn**: string: <p>The ARN of the theme associated with this version of the template.</p>
* **VersionNumber**: int: <p>The version number of the template version.</p>

## TemplateVersionDefinition
### Properties
* **AnalysisDefaults**: [AnalysisDefaults](#analysisdefaults)
* **CalculatedFields**: [CalculatedField](#calculatedfield)[]
* **ColumnConfigurations**: [ColumnConfiguration](#columnconfiguration)[]
* **DataSetConfigurations**: [DataSetConfiguration](#datasetconfiguration)[] (Required)
* **FilterGroups**: [FilterGroup](#filtergroup)[]
* **Options**: [AssetOptions](#assetoptions)
* **ParameterDeclarations**: [ParameterDeclaration](#parameterdeclaration)[]
* **QueryExecutionOptions**: [QueryExecutionOptions](#queryexecutionoptions)
* **Sheets**: [SheetDefinition](#sheetdefinition)[]

## TeradataParameters
### Properties
* **Database**: string (Required): <p>Database.</p>
* **Host**: string (Required): <p>Host.</p>
* **Port**: int (Required): <p>Port.</p>

## TextAreaControlDisplayOptions
### Properties
* **InfoIconLabelOptions**: [SheetControlInfoIconLabelOptions](#sheetcontrolinfoiconlabeloptions)
* **PlaceholderOptions**: [TextControlPlaceholderOptions](#textcontrolplaceholderoptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## TextAreaControlDisplayOptions
### Properties
* **InfoIconLabelOptions**: [SheetControlInfoIconLabelOptions](#sheetcontrolinfoiconlabeloptions)
* **PlaceholderOptions**: [TextControlPlaceholderOptions](#textcontrolplaceholderoptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## TextAreaControlDisplayOptions
### Properties
* **InfoIconLabelOptions**: [SheetControlInfoIconLabelOptions](#sheetcontrolinfoiconlabeloptions)
* **PlaceholderOptions**: [TextControlPlaceholderOptions](#textcontrolplaceholderoptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## TextConditionalFormat
### Properties
* **BackgroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## TextConditionalFormat
### Properties
* **BackgroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## TextConditionalFormat
### Properties
* **BackgroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## TextControlPlaceholderOptions
### Properties
* **Visibility**: string

## TextControlPlaceholderOptions
### Properties
* **Visibility**: string

## TextControlPlaceholderOptions
### Properties
* **Visibility**: [Template_Visibility](#templatevisibility)

## TextFieldControlDisplayOptions
### Properties
* **InfoIconLabelOptions**: [SheetControlInfoIconLabelOptions](#sheetcontrolinfoiconlabeloptions)
* **PlaceholderOptions**: [TextControlPlaceholderOptions](#textcontrolplaceholderoptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## TextFieldControlDisplayOptions
### Properties
* **InfoIconLabelOptions**: [SheetControlInfoIconLabelOptions](#sheetcontrolinfoiconlabeloptions)
* **PlaceholderOptions**: [TextControlPlaceholderOptions](#textcontrolplaceholderoptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## TextFieldControlDisplayOptions
### Properties
* **InfoIconLabelOptions**: [SheetControlInfoIconLabelOptions](#sheetcontrolinfoiconlabeloptions)
* **PlaceholderOptions**: [TextControlPlaceholderOptions](#textcontrolplaceholderoptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## ThemeConfiguration
### Properties
* **DataColorPalette**: [DataColorPalette](#datacolorpalette)
* **Sheet**: [SheetStyle](#sheetstyle)
* **Typography**: [Typography](#typography)
* **UIColorPalette**: [UIColorPalette](#uicolorpalette)

## ThemeError
### Properties
* **Message**: string: <p>The error message.</p>
* **Type**: string

## ThemeVersion
### Properties
* **Arn**: string: <p>The Amazon Resource Name (ARN) of the resource.</p>
* **BaseThemeId**: string: <p>The Amazon QuickSight-defined ID of the theme that a custom theme inherits from. All
            themes initially inherit from a default Amazon QuickSight theme.</p>
* **Configuration**: [ThemeConfiguration](#themeconfiguration)
* **CreatedTime**: string: <p>The date and time that this theme version was created.</p>
* **Description**: string: <p>The description of the theme.</p>
* **Errors**: [ThemeError](#themeerror)[]: <p>Errors associated with the theme.</p>
* **Status**: string
* **VersionNumber**: int: <p>The version number of the theme.</p>

## ThousandSeparatorOptions
### Properties
* **Symbol**: string
* **Visibility**: string

## ThousandSeparatorOptions
### Properties
* **Symbol**: string
* **Visibility**: string

## ThousandSeparatorOptions
### Properties
* **Symbol**: string
* **Visibility**: [Template_Visibility](#templatevisibility)

## TileLayoutStyle
### Properties
* **Gutter**: [GutterStyle](#gutterstyle)
* **Margin**: [MarginStyle](#marginstyle)

## TileStyle
### Properties
* **Border**: [BorderStyle](#borderstyle)

## TimeBasedForecastProperties
### Properties
* **LowerBoundary**: int
* **PeriodsBackward**: int
* **PeriodsForward**: int
* **PredictionInterval**: int
* **Seasonality**: int
* **UpperBoundary**: int

## TimeBasedForecastProperties
### Properties
* **LowerBoundary**: int
* **PeriodsBackward**: int
* **PeriodsForward**: int
* **PredictionInterval**: int
* **Seasonality**: int
* **UpperBoundary**: int

## TimeBasedForecastProperties
### Properties
* **LowerBoundary**: int
* **PeriodsBackward**: int
* **PeriodsForward**: int
* **PredictionInterval**: int
* **Seasonality**: int
* **UpperBoundary**: int

## TimeEqualityFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)
* **FilterId**: string (Required)
* **ParameterName**: string
* **RollingDate**: [RollingDateConfiguration](#rollingdateconfiguration)
* **TimeGranularity**: string
* **Value**: string

## TimeEqualityFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)
* **FilterId**: string (Required)
* **ParameterName**: string
* **RollingDate**: [RollingDateConfiguration](#rollingdateconfiguration)
* **TimeGranularity**: string
* **Value**: string

## TimeEqualityFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)
* **FilterId**: string (Required)
* **ParameterName**: string
* **RollingDate**: [RollingDateConfiguration](#rollingdateconfiguration)
* **TimeGranularity**: string
* **Value**: string

## TimeRangeDrillDownFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **RangeMaximum**: string (Required)
* **RangeMinimum**: string (Required)
* **TimeGranularity**: string (Required)

## TimeRangeDrillDownFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **RangeMaximum**: string (Required)
* **RangeMinimum**: string (Required)
* **TimeGranularity**: string (Required)

## TimeRangeDrillDownFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **RangeMaximum**: string (Required)
* **RangeMinimum**: string (Required)
* **TimeGranularity**: string (Required)

## TimeRangeFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)
* **ExcludePeriodConfiguration**: [ExcludePeriodConfiguration](#excludeperiodconfiguration)
* **FilterId**: string (Required)
* **IncludeMaximum**: bool
* **IncludeMinimum**: bool
* **NullOption**: string (Required)
* **RangeMaximumValue**: [TimeRangeFilterValue](#timerangefiltervalue)
* **RangeMinimumValue**: [TimeRangeFilterValue](#timerangefiltervalue)
* **TimeGranularity**: string

## TimeRangeFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)
* **ExcludePeriodConfiguration**: [ExcludePeriodConfiguration](#excludeperiodconfiguration)
* **FilterId**: string (Required)
* **IncludeMaximum**: bool
* **IncludeMinimum**: bool
* **NullOption**: string (Required)
* **RangeMaximumValue**: [TimeRangeFilterValue](#timerangefiltervalue)
* **RangeMinimumValue**: [TimeRangeFilterValue](#timerangefiltervalue)
* **TimeGranularity**: string

## TimeRangeFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)
* **ExcludePeriodConfiguration**: [ExcludePeriodConfiguration](#excludeperiodconfiguration)
* **FilterId**: string (Required)
* **IncludeMaximum**: bool
* **IncludeMinimum**: bool
* **NullOption**: string (Required)
* **RangeMaximumValue**: [TimeRangeFilterValue](#timerangefiltervalue)
* **RangeMinimumValue**: [TimeRangeFilterValue](#timerangefiltervalue)
* **TimeGranularity**: string

## TimeRangeFilterValue
### Properties
* **Parameter**: string
* **RollingDate**: [RollingDateConfiguration](#rollingdateconfiguration)
* **StaticValue**: string

## TimeRangeFilterValue
### Properties
* **Parameter**: string
* **RollingDate**: [RollingDateConfiguration](#rollingdateconfiguration)
* **StaticValue**: string

## TimeRangeFilterValue
### Properties
* **Parameter**: string
* **RollingDate**: [RollingDateConfiguration](#rollingdateconfiguration)
* **StaticValue**: string

## TooltipItem
### Properties
* **ColumnTooltipItem**: [ColumnTooltipItem](#columntooltipitem)
* **FieldTooltipItem**: [FieldTooltipItem](#fieldtooltipitem)

## TooltipItem
### Properties
* **ColumnTooltipItem**: [ColumnTooltipItem](#columntooltipitem)
* **FieldTooltipItem**: [FieldTooltipItem](#fieldtooltipitem)

## TooltipItem
### Properties
* **ColumnTooltipItem**: [ColumnTooltipItem](#columntooltipitem)
* **FieldTooltipItem**: [FieldTooltipItem](#fieldtooltipitem)

## TooltipOptions
### Properties
* **FieldBasedTooltip**: [FieldBasedTooltip](#fieldbasedtooltip)
* **SelectedTooltipType**: string
* **TooltipVisibility**: string

## TooltipOptions
### Properties
* **FieldBasedTooltip**: [FieldBasedTooltip](#fieldbasedtooltip)
* **SelectedTooltipType**: string
* **TooltipVisibility**: string

## TooltipOptions
### Properties
* **FieldBasedTooltip**: [FieldBasedTooltip](#fieldbasedtooltip)
* **SelectedTooltipType**: string
* **TooltipVisibility**: [Template_TooltipVisibility](#templatetooltipvisibility)

## TopBottomFilter
### Properties
* **AggregationSortConfigurations**: [AggregationSortConfiguration](#aggregationsortconfiguration)[] (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)
* **FilterId**: string (Required)
* **Limit**: int
* **ParameterName**: string
* **TimeGranularity**: string

## TopBottomFilter
### Properties
* **AggregationSortConfigurations**: [AggregationSortConfiguration](#aggregationsortconfiguration)[] (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)
* **FilterId**: string (Required)
* **Limit**: int
* **ParameterName**: string
* **TimeGranularity**: string

## TopBottomFilter
### Properties
* **AggregationSortConfigurations**: [AggregationSortConfiguration](#aggregationsortconfiguration)[] (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DefaultFilterControlConfiguration**: [DefaultFilterControlConfiguration](#defaultfiltercontrolconfiguration)
* **FilterId**: string (Required)
* **Limit**: int
* **ParameterName**: string
* **TimeGranularity**: string

## TopBottomMoversComputation
### Properties
* **Category**: [DimensionField](#dimensionfield)
* **ComputationId**: string (Required)
* **MoverSize**: int
* **Name**: string
* **SortOrder**: string
* **Time**: [DimensionField](#dimensionfield)
* **Type**: string (Required)
* **Value**: [MeasureField](#measurefield)

## TopBottomMoversComputation
### Properties
* **Category**: [DimensionField](#dimensionfield)
* **ComputationId**: string (Required)
* **MoverSize**: int
* **Name**: string
* **SortOrder**: string
* **Time**: [DimensionField](#dimensionfield)
* **Type**: string (Required)
* **Value**: [MeasureField](#measurefield)

## TopBottomMoversComputation
### Properties
* **Category**: [DimensionField](#dimensionfield)
* **ComputationId**: string (Required)
* **MoverSize**: int
* **Name**: string
* **SortOrder**: string
* **Time**: [DimensionField](#dimensionfield)
* **Type**: string (Required)
* **Value**: [MeasureField](#measurefield)

## TopBottomRankedComputation
### Properties
* **Category**: [DimensionField](#dimensionfield)
* **ComputationId**: string (Required)
* **Name**: string
* **ResultSize**: int
* **Type**: string (Required)
* **Value**: [MeasureField](#measurefield)

## TopBottomRankedComputation
### Properties
* **Category**: [DimensionField](#dimensionfield)
* **ComputationId**: string (Required)
* **Name**: string
* **ResultSize**: int
* **Type**: string (Required)
* **Value**: [MeasureField](#measurefield)

## TopBottomRankedComputation
### Properties
* **Category**: [DimensionField](#dimensionfield)
* **ComputationId**: string (Required)
* **Name**: string
* **ResultSize**: int
* **Type**: string (Required)
* **Value**: [MeasureField](#measurefield)

## TopicCalculatedField
### Properties
* **Aggregation**: string
* **AllowedAggregations**: string[]
* **CalculatedFieldDescription**: string
* **CalculatedFieldName**: string (Required)
* **CalculatedFieldSynonyms**: string[]
* **CellValueSynonyms**: [CellValueSynonym](#cellvaluesynonym)[]
* **ColumnDataRole**: string
* **ComparativeOrder**: [ComparativeOrder](#comparativeorder)
* **DefaultFormatting**: [DefaultFormatting](#defaultformatting)
* **DisableIndexing**: bool
* **Expression**: string (Required)
* **IsIncludedInTopic**: bool
* **NeverAggregateInFilter**: bool
* **NonAdditive**: bool
* **NotAllowedAggregations**: string[]
* **SemanticType**: [SemanticType](#semantictype)
* **TimeGranularity**: string

## TopicCategoryFilter
### Properties
* **CategoryFilterFunction**: string
* **CategoryFilterType**: string
* **Constant**: [TopicCategoryFilterConstant](#topiccategoryfilterconstant)
* **Inverse**: bool

## TopicCategoryFilterConstant
### Properties
* **CollectiveConstant**: [CollectiveConstant](#collectiveconstant)
* **ConstantType**: string
* **SingularConstant**: string

## TopicColumn
### Properties
* **Aggregation**: string
* **AllowedAggregations**: string[]
* **CellValueSynonyms**: [CellValueSynonym](#cellvaluesynonym)[]
* **ColumnDataRole**: string
* **ColumnDescription**: string
* **ColumnFriendlyName**: string
* **ColumnName**: string (Required)
* **ColumnSynonyms**: string[]
* **ComparativeOrder**: [ComparativeOrder](#comparativeorder)
* **DefaultFormatting**: [DefaultFormatting](#defaultformatting)
* **DisableIndexing**: bool
* **IsIncludedInTopic**: bool
* **NeverAggregateInFilter**: bool
* **NonAdditive**: bool
* **NotAllowedAggregations**: string[]
* **SemanticType**: [SemanticType](#semantictype)
* **TimeGranularity**: string

## TopicDateRangeFilter
### Properties
* **Constant**: [TopicRangeFilterConstant](#topicrangefilterconstant)
* **Inclusive**: bool

## TopicFilter
### Properties
* **CategoryFilter**: [TopicCategoryFilter](#topiccategoryfilter)
* **DateRangeFilter**: [TopicDateRangeFilter](#topicdaterangefilter)
* **FilterClass**: string
* **FilterDescription**: string
* **FilterName**: string (Required)
* **FilterSynonyms**: string[]
* **FilterType**: string
* **NumericEqualityFilter**: [TopicNumericEqualityFilter](#topicnumericequalityfilter)
* **NumericRangeFilter**: [TopicNumericRangeFilter](#topicnumericrangefilter)
* **OperandFieldName**: string (Required)
* **RelativeDateFilter**: [TopicRelativeDateFilter](#topicrelativedatefilter)

## TopicNamedEntity
### Properties
* **Definition**: [NamedEntityDefinition](#namedentitydefinition)[]
* **EntityDescription**: string
* **EntityName**: string (Required)
* **EntitySynonyms**: string[]
* **SemanticEntityType**: [SemanticEntityType](#semanticentitytype)

## TopicNumericEqualityFilter
### Properties
* **Aggregation**: string
* **Constant**: [TopicSingularFilterConstant](#topicsingularfilterconstant)

## TopicNumericRangeFilter
### Properties
* **Aggregation**: string
* **Constant**: [TopicRangeFilterConstant](#topicrangefilterconstant)
* **Inclusive**: bool

## TopicRangeFilterConstant
### Properties
* **ConstantType**: string
* **RangeConstant**: [RangeConstant](#rangeconstant)

## TopicRelativeDateFilter
### Properties
* **Constant**: [TopicSingularFilterConstant](#topicsingularfilterconstant)
* **RelativeDateFilterFunction**: string
* **TimeGranularity**: string

## TopicSingularFilterConstant
### Properties
* **ConstantType**: string
* **SingularConstant**: string

## TotalAggregationComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **Value**: [MeasureField](#measurefield)

## TotalAggregationComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **Value**: [MeasureField](#measurefield)

## TotalAggregationComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **Value**: [MeasureField](#measurefield)

## TotalAggregationFunction
### Properties
* **SimpleTotalAggregationFunction**: string

## TotalAggregationFunction
### Properties
* **SimpleTotalAggregationFunction**: string

## TotalAggregationFunction
### Properties
* **SimpleTotalAggregationFunction**: string

## TotalAggregationOption
### Properties
* **FieldId**: string (Required)
* **TotalAggregationFunction**: [TotalAggregationFunction](#totalaggregationfunction) (Required)

## TotalAggregationOption
### Properties
* **FieldId**: string (Required)
* **TotalAggregationFunction**: [TotalAggregationFunction](#totalaggregationfunction) (Required)

## TotalAggregationOption
### Properties
* **FieldId**: string (Required)
* **TotalAggregationFunction**: [TotalAggregationFunction](#totalaggregationfunction) (Required)

## TotalOptions
### Properties
* **CustomLabel**: string
* **Placement**: string
* **ScrollStatus**: string
* **TotalAggregationOptions**: [TotalAggregationOption](#totalaggregationoption)[]
* **TotalCellStyle**: [TableCellStyle](#tablecellstyle)
* **TotalsVisibility**: string

## TotalOptions
### Properties
* **CustomLabel**: string
* **Placement**: string
* **ScrollStatus**: string
* **TotalAggregationOptions**: [TotalAggregationOption](#totalaggregationoption)[]
* **TotalCellStyle**: [TableCellStyle](#tablecellstyle)
* **TotalsVisibility**: string

## TotalOptions
### Properties
* **CustomLabel**: string
* **Placement**: string
* **ScrollStatus**: string
* **TotalAggregationOptions**: [TotalAggregationOption](#totalaggregationoption)[]
* **TotalCellStyle**: [TableCellStyle](#tablecellstyle)
* **TotalsVisibility**: [Template_TotalsVisibility](#templatetotalsvisibility)

## TreeMapAggregatedFieldWells
### Properties
* **Colors**: [MeasureField](#measurefield)[]
* **Groups**: [DimensionField](#dimensionfield)[]
* **Sizes**: [MeasureField](#measurefield)[]

## TreeMapAggregatedFieldWells
### Properties
* **Colors**: [MeasureField](#measurefield)[]
* **Groups**: [DimensionField](#dimensionfield)[]
* **Sizes**: [MeasureField](#measurefield)[]

## TreeMapAggregatedFieldWells
### Properties
* **Colors**: [MeasureField](#measurefield)[]
* **Groups**: [DimensionField](#dimensionfield)[]
* **Sizes**: [MeasureField](#measurefield)[]

## TreeMapConfiguration
### Properties
* **ColorLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ColorScale**: [ColorScale](#colorscale)
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [TreeMapFieldWells](#treemapfieldwells)
* **GroupLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **Legend**: [LegendOptions](#legendoptions)
* **SizeLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **SortConfiguration**: [TreeMapSortConfiguration](#treemapsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)

## TreeMapConfiguration
### Properties
* **ColorLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ColorScale**: [ColorScale](#colorscale)
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [TreeMapFieldWells](#treemapfieldwells)
* **GroupLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **Legend**: [LegendOptions](#legendoptions)
* **SizeLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **SortConfiguration**: [TreeMapSortConfiguration](#treemapsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)

## TreeMapConfiguration
### Properties
* **ColorLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ColorScale**: [ColorScale](#colorscale)
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [TreeMapFieldWells](#treemapfieldwells)
* **GroupLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **Legend**: [LegendOptions](#legendoptions)
* **SizeLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **SortConfiguration**: [TreeMapSortConfiguration](#treemapsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)

## TreeMapFieldWells
### Properties
* **TreeMapAggregatedFieldWells**: [TreeMapAggregatedFieldWells](#treemapaggregatedfieldwells)

## TreeMapFieldWells
### Properties
* **TreeMapAggregatedFieldWells**: [TreeMapAggregatedFieldWells](#treemapaggregatedfieldwells)

## TreeMapFieldWells
### Properties
* **TreeMapAggregatedFieldWells**: [TreeMapAggregatedFieldWells](#treemapaggregatedfieldwells)

## TreeMapSortConfiguration
### Properties
* **TreeMapGroupItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **TreeMapSort**: [FieldSortOptions](#fieldsortoptions)[]

## TreeMapSortConfiguration
### Properties
* **TreeMapGroupItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **TreeMapSort**: [FieldSortOptions](#fieldsortoptions)[]

## TreeMapSortConfiguration
### Properties
* **TreeMapGroupItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **TreeMapSort**: [FieldSortOptions](#fieldsortoptions)[]

## TreeMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [TreeMapConfiguration](#treemapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## TreeMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [TreeMapConfiguration](#treemapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## TreeMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [TreeMapConfiguration](#treemapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## TrendArrowOptions
### Properties
* **Visibility**: string

## TrendArrowOptions
### Properties
* **Visibility**: string

## TrendArrowOptions
### Properties
* **Visibility**: [Template_Visibility](#templatevisibility)

## TrinoParameters
### Properties
* **Catalog**: string (Required): <p>The catalog name for the Trino data source.</p>
* **Host**: string (Required): <p>The host name of the Trino data source.</p>
* **Port**: int (Required): <p>The port for the Trino data source.</p>

## TypeParameters
### Properties

## Typography
### Properties
* **FontFamilies**: [Font](#font)[]

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

## UnaggregatedField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [FormatConfiguration](#formatconfiguration)

## UnaggregatedField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [FormatConfiguration](#formatconfiguration)

## UnaggregatedField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [FormatConfiguration](#formatconfiguration)

## UniqueKey
### Properties
* **ColumnNames**: string[] (Required)

## UniqueValuesComputation
### Properties
* **Category**: [DimensionField](#dimensionfield)
* **ComputationId**: string (Required)
* **Name**: string

## UniqueValuesComputation
### Properties
* **Category**: [DimensionField](#dimensionfield)
* **ComputationId**: string (Required)
* **Name**: string

## UniqueValuesComputation
### Properties
* **Category**: [DimensionField](#dimensionfield)
* **ComputationId**: string (Required)
* **Name**: string

## ValidationStrategy
### Properties
* **Mode**: string (Required)

## ValidationStrategy
### Properties
* **Mode**: string (Required)

## ValidationStrategy
### Properties
* **Mode**: string (Required)

## VisibleRangeOptions
### Properties
* **PercentRange**: [PercentVisibleRange](#percentvisiblerange)

## VisibleRangeOptions
### Properties
* **PercentRange**: [PercentVisibleRange](#percentvisiblerange)

## VisibleRangeOptions
### Properties
* **PercentRange**: [PercentVisibleRange](#percentvisiblerange)

## Visual
### Properties
* **BarChartVisual**: [BarChartVisual](#barchartvisual)
* **BoxPlotVisual**: [BoxPlotVisual](#boxplotvisual)
* **ComboChartVisual**: [ComboChartVisual](#combochartvisual)
* **CustomContentVisual**: [CustomContentVisual](#customcontentvisual)
* **EmptyVisual**: [EmptyVisual](#emptyvisual)
* **FilledMapVisual**: [FilledMapVisual](#filledmapvisual)
* **FunnelChartVisual**: [FunnelChartVisual](#funnelchartvisual)
* **GaugeChartVisual**: [GaugeChartVisual](#gaugechartvisual)
* **GeospatialMapVisual**: [GeospatialMapVisual](#geospatialmapvisual)
* **HeatMapVisual**: [HeatMapVisual](#heatmapvisual)
* **HistogramVisual**: [HistogramVisual](#histogramvisual)
* **InsightVisual**: [InsightVisual](#insightvisual)
* **KPIVisual**: [KPIVisual](#kpivisual)
* **LayerMapVisual**: [LayerMapVisual](#layermapvisual)
* **LineChartVisual**: [LineChartVisual](#linechartvisual)
* **PieChartVisual**: [PieChartVisual](#piechartvisual)
* **PivotTableVisual**: [PivotTableVisual](#pivottablevisual)
* **PluginVisual**: [PluginVisual](#pluginvisual)
* **RadarChartVisual**: [RadarChartVisual](#radarchartvisual)
* **SankeyDiagramVisual**: [SankeyDiagramVisual](#sankeydiagramvisual)
* **ScatterPlotVisual**: [ScatterPlotVisual](#scatterplotvisual)
* **TableVisual**: [TableVisual](#tablevisual)
* **TreeMapVisual**: [TreeMapVisual](#treemapvisual)
* **WaterfallVisual**: [WaterfallVisual](#waterfallvisual)
* **WordCloudVisual**: [WordCloudVisual](#wordcloudvisual)

## Visual
### Properties
* **BarChartVisual**: [BarChartVisual](#barchartvisual)
* **BoxPlotVisual**: [BoxPlotVisual](#boxplotvisual)
* **ComboChartVisual**: [ComboChartVisual](#combochartvisual)
* **CustomContentVisual**: [CustomContentVisual](#customcontentvisual)
* **EmptyVisual**: [EmptyVisual](#emptyvisual)
* **FilledMapVisual**: [FilledMapVisual](#filledmapvisual)
* **FunnelChartVisual**: [FunnelChartVisual](#funnelchartvisual)
* **GaugeChartVisual**: [GaugeChartVisual](#gaugechartvisual)
* **GeospatialMapVisual**: [GeospatialMapVisual](#geospatialmapvisual)
* **HeatMapVisual**: [HeatMapVisual](#heatmapvisual)
* **HistogramVisual**: [HistogramVisual](#histogramvisual)
* **InsightVisual**: [InsightVisual](#insightvisual)
* **KPIVisual**: [KPIVisual](#kpivisual)
* **LayerMapVisual**: [LayerMapVisual](#layermapvisual)
* **LineChartVisual**: [LineChartVisual](#linechartvisual)
* **PieChartVisual**: [PieChartVisual](#piechartvisual)
* **PivotTableVisual**: [PivotTableVisual](#pivottablevisual)
* **PluginVisual**: [PluginVisual](#pluginvisual)
* **RadarChartVisual**: [RadarChartVisual](#radarchartvisual)
* **SankeyDiagramVisual**: [SankeyDiagramVisual](#sankeydiagramvisual)
* **ScatterPlotVisual**: [ScatterPlotVisual](#scatterplotvisual)
* **TableVisual**: [TableVisual](#tablevisual)
* **TreeMapVisual**: [TreeMapVisual](#treemapvisual)
* **WaterfallVisual**: [WaterfallVisual](#waterfallvisual)
* **WordCloudVisual**: [WordCloudVisual](#wordcloudvisual)

## Visual
### Properties
* **BarChartVisual**: [BarChartVisual](#barchartvisual)
* **BoxPlotVisual**: [BoxPlotVisual](#boxplotvisual)
* **ComboChartVisual**: [ComboChartVisual](#combochartvisual)
* **CustomContentVisual**: [CustomContentVisual](#customcontentvisual)
* **EmptyVisual**: [EmptyVisual](#emptyvisual)
* **FilledMapVisual**: [FilledMapVisual](#filledmapvisual)
* **FunnelChartVisual**: [FunnelChartVisual](#funnelchartvisual)
* **GaugeChartVisual**: [GaugeChartVisual](#gaugechartvisual)
* **GeospatialMapVisual**: [GeospatialMapVisual](#geospatialmapvisual)
* **HeatMapVisual**: [HeatMapVisual](#heatmapvisual)
* **HistogramVisual**: [HistogramVisual](#histogramvisual)
* **InsightVisual**: [InsightVisual](#insightvisual)
* **KPIVisual**: [KPIVisual](#kpivisual)
* **LineChartVisual**: [LineChartVisual](#linechartvisual)
* **PieChartVisual**: [PieChartVisual](#piechartvisual)
* **PivotTableVisual**: [PivotTableVisual](#pivottablevisual)
* **PluginVisual**: [PluginVisual](#pluginvisual)
* **RadarChartVisual**: [RadarChartVisual](#radarchartvisual)
* **SankeyDiagramVisual**: [SankeyDiagramVisual](#sankeydiagramvisual)
* **ScatterPlotVisual**: [ScatterPlotVisual](#scatterplotvisual)
* **TableVisual**: [TableVisual](#tablevisual)
* **TreeMapVisual**: [TreeMapVisual](#treemapvisual)
* **WaterfallVisual**: [WaterfallVisual](#waterfallvisual)
* **WordCloudVisual**: [WordCloudVisual](#wordcloudvisual)

## VisualAxisSortOption
### Properties
* **AvailabilityStatus**: string

## VisualCustomAction
### Properties
* **ActionOperations**: [VisualCustomActionOperation](#visualcustomactionoperation)[] (Required)
* **CustomActionId**: string (Required)
* **Name**: string (Required)
* **Status**: string
* **Trigger**: string (Required)

## VisualCustomAction
### Properties
* **ActionOperations**: [VisualCustomActionOperation](#visualcustomactionoperation)[] (Required)
* **CustomActionId**: string (Required)
* **Name**: string (Required)
* **Status**: string
* **Trigger**: string (Required)

## VisualCustomAction
### Properties
* **ActionOperations**: [VisualCustomActionOperation](#visualcustomactionoperation)[] (Required)
* **CustomActionId**: string (Required)
* **Name**: string (Required)
* **Status**: string
* **Trigger**: string (Required)

## VisualCustomActionOperation
### Properties
* **FilterOperation**: [CustomActionFilterOperation](#customactionfilteroperation)
* **NavigationOperation**: [CustomActionNavigationOperation](#customactionnavigationoperation)
* **SetParametersOperation**: [CustomActionSetParametersOperation](#customactionsetparametersoperation)
* **URLOperation**: [CustomActionURLOperation](#customactionurloperation)

## VisualCustomActionOperation
### Properties
* **FilterOperation**: [CustomActionFilterOperation](#customactionfilteroperation)
* **NavigationOperation**: [CustomActionNavigationOperation](#customactionnavigationoperation)
* **SetParametersOperation**: [CustomActionSetParametersOperation](#customactionsetparametersoperation)
* **URLOperation**: [CustomActionURLOperation](#customactionurloperation)

## VisualCustomActionOperation
### Properties
* **FilterOperation**: [CustomActionFilterOperation](#customactionfilteroperation)
* **NavigationOperation**: [CustomActionNavigationOperation](#customactionnavigationoperation)
* **SetParametersOperation**: [CustomActionSetParametersOperation](#customactionsetparametersoperation)
* **URLOperation**: [CustomActionURLOperation](#customactionurloperation)

## VisualPalette
### Properties
* **ChartColor**: string
* **ColorMap**: [DataPathColor](#datapathcolor)[]

## VisualPalette
### Properties
* **ChartColor**: string
* **ColorMap**: [DataPathColor](#datapathcolor)[]

## VisualPalette
### Properties
* **ChartColor**: string
* **ColorMap**: [DataPathColor](#datapathcolor)[]

## VisualSubtitleLabelOptions
### Properties
* **FormatText**: [LongFormatText](#longformattext)
* **Visibility**: string

## VisualSubtitleLabelOptions
### Properties
* **FormatText**: [LongFormatText](#longformattext)
* **Visibility**: string

## VisualSubtitleLabelOptions
### Properties
* **FormatText**: [LongFormatText](#longformattext)
* **Visibility**: [Template_Visibility](#templatevisibility)

## VisualTitleLabelOptions
### Properties
* **FormatText**: [ShortFormatText](#shortformattext)
* **Visibility**: string

## VisualTitleLabelOptions
### Properties
* **FormatText**: [ShortFormatText](#shortformattext)
* **Visibility**: string

## VisualTitleLabelOptions
### Properties
* **FormatText**: [ShortFormatText](#shortformattext)
* **Visibility**: [Template_Visibility](#templatevisibility)

## VpcConnectionProperties
### Properties
* **VpcConnectionArn**: string (Required): <p>The Amazon Resource Name (ARN) for the VPC connection.</p>

## WaterfallChartAggregatedFieldWells
### Properties
* **Breakdowns**: [DimensionField](#dimensionfield)[]
* **Categories**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## WaterfallChartAggregatedFieldWells
### Properties
* **Breakdowns**: [DimensionField](#dimensionfield)[]
* **Categories**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## WaterfallChartAggregatedFieldWells
### Properties
* **Breakdowns**: [DimensionField](#dimensionfield)[]
* **Categories**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## WaterfallChartColorConfiguration
### Properties
* **GroupColorConfiguration**: [WaterfallChartGroupColorConfiguration](#waterfallchartgroupcolorconfiguration)

## WaterfallChartColorConfiguration
### Properties
* **GroupColorConfiguration**: [WaterfallChartGroupColorConfiguration](#waterfallchartgroupcolorconfiguration)

## WaterfallChartColorConfiguration
### Properties
* **GroupColorConfiguration**: [WaterfallChartGroupColorConfiguration](#waterfallchartgroupcolorconfiguration)

## WaterfallChartConfiguration
### Properties
* **CategoryAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **CategoryAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ColorConfiguration**: [WaterfallChartColorConfiguration](#waterfallchartcolorconfiguration)
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [WaterfallChartFieldWells](#waterfallchartfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **PrimaryYAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **PrimaryYAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **SortConfiguration**: [WaterfallChartSortConfiguration](#waterfallchartsortconfiguration)
* **VisualPalette**: [VisualPalette](#visualpalette)
* **WaterfallChartOptions**: [WaterfallChartOptions](#waterfallchartoptions)

## WaterfallChartConfiguration
### Properties
* **CategoryAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **CategoryAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ColorConfiguration**: [WaterfallChartColorConfiguration](#waterfallchartcolorconfiguration)
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [WaterfallChartFieldWells](#waterfallchartfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **PrimaryYAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **PrimaryYAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **SortConfiguration**: [WaterfallChartSortConfiguration](#waterfallchartsortconfiguration)
* **VisualPalette**: [VisualPalette](#visualpalette)
* **WaterfallChartOptions**: [WaterfallChartOptions](#waterfallchartoptions)

## WaterfallChartConfiguration
### Properties
* **CategoryAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **CategoryAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **ColorConfiguration**: [WaterfallChartColorConfiguration](#waterfallchartcolorconfiguration)
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [WaterfallChartFieldWells](#waterfallchartfieldwells)
* **Legend**: [LegendOptions](#legendoptions)
* **PrimaryYAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **PrimaryYAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **SortConfiguration**: [WaterfallChartSortConfiguration](#waterfallchartsortconfiguration)
* **VisualPalette**: [VisualPalette](#visualpalette)
* **WaterfallChartOptions**: [WaterfallChartOptions](#waterfallchartoptions)

## WaterfallChartFieldWells
### Properties
* **WaterfallChartAggregatedFieldWells**: [WaterfallChartAggregatedFieldWells](#waterfallchartaggregatedfieldwells)

## WaterfallChartFieldWells
### Properties
* **WaterfallChartAggregatedFieldWells**: [WaterfallChartAggregatedFieldWells](#waterfallchartaggregatedfieldwells)

## WaterfallChartFieldWells
### Properties
* **WaterfallChartAggregatedFieldWells**: [WaterfallChartAggregatedFieldWells](#waterfallchartaggregatedfieldwells)

## WaterfallChartGroupColorConfiguration
### Properties
* **NegativeBarColor**: string
* **PositiveBarColor**: string
* **TotalBarColor**: string

## WaterfallChartGroupColorConfiguration
### Properties
* **NegativeBarColor**: string
* **PositiveBarColor**: string
* **TotalBarColor**: string

## WaterfallChartGroupColorConfiguration
### Properties
* **NegativeBarColor**: string
* **PositiveBarColor**: string
* **TotalBarColor**: string

## WaterfallChartOptions
### Properties
* **TotalBarLabel**: string

## WaterfallChartOptions
### Properties
* **TotalBarLabel**: string

## WaterfallChartOptions
### Properties
* **TotalBarLabel**: string

## WaterfallChartSortConfiguration
### Properties
* **BreakdownItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## WaterfallChartSortConfiguration
### Properties
* **BreakdownItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## WaterfallChartSortConfiguration
### Properties
* **BreakdownItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## WaterfallVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [WaterfallChartConfiguration](#waterfallchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## WaterfallVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [WaterfallChartConfiguration](#waterfallchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## WaterfallVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [WaterfallChartConfiguration](#waterfallchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## WhatIfPointScenario
### Properties
* **Date**: string (Required)
* **Value**: int (Required)

## WhatIfPointScenario
### Properties
* **Date**: string (Required)
* **Value**: int (Required)

## WhatIfPointScenario
### Properties
* **Date**: string (Required)
* **Value**: int (Required)

## WhatIfRangeScenario
### Properties
* **EndDate**: string (Required)
* **StartDate**: string (Required)
* **Value**: int (Required)

## WhatIfRangeScenario
### Properties
* **EndDate**: string (Required)
* **StartDate**: string (Required)
* **Value**: int (Required)

## WhatIfRangeScenario
### Properties
* **EndDate**: string (Required)
* **StartDate**: string (Required)
* **Value**: int (Required)

## WordCloudAggregatedFieldWells
### Properties
* **GroupBy**: [DimensionField](#dimensionfield)[]
* **Size**: [MeasureField](#measurefield)[]

## WordCloudAggregatedFieldWells
### Properties
* **GroupBy**: [DimensionField](#dimensionfield)[]
* **Size**: [MeasureField](#measurefield)[]

## WordCloudAggregatedFieldWells
### Properties
* **GroupBy**: [DimensionField](#dimensionfield)[]
* **Size**: [MeasureField](#measurefield)[]

## WordCloudChartConfiguration
### Properties
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **FieldWells**: [WordCloudFieldWells](#wordcloudfieldwells)
* **SortConfiguration**: [WordCloudSortConfiguration](#wordcloudsortconfiguration)
* **WordCloudOptions**: [WordCloudOptions](#wordcloudoptions)

## WordCloudChartConfiguration
### Properties
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **FieldWells**: [WordCloudFieldWells](#wordcloudfieldwells)
* **SortConfiguration**: [WordCloudSortConfiguration](#wordcloudsortconfiguration)
* **WordCloudOptions**: [WordCloudOptions](#wordcloudoptions)

## WordCloudChartConfiguration
### Properties
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **FieldWells**: [WordCloudFieldWells](#wordcloudfieldwells)
* **SortConfiguration**: [WordCloudSortConfiguration](#wordcloudsortconfiguration)
* **WordCloudOptions**: [WordCloudOptions](#wordcloudoptions)

## WordCloudFieldWells
### Properties
* **WordCloudAggregatedFieldWells**: [WordCloudAggregatedFieldWells](#wordcloudaggregatedfieldwells)

## WordCloudFieldWells
### Properties
* **WordCloudAggregatedFieldWells**: [WordCloudAggregatedFieldWells](#wordcloudaggregatedfieldwells)

## WordCloudFieldWells
### Properties
* **WordCloudAggregatedFieldWells**: [WordCloudAggregatedFieldWells](#wordcloudaggregatedfieldwells)

## WordCloudOptions
### Properties
* **CloudLayout**: string
* **MaximumStringLength**: int
* **WordCasing**: string
* **WordOrientation**: string
* **WordPadding**: string
* **WordScaling**: string

## WordCloudOptions
### Properties
* **CloudLayout**: string
* **MaximumStringLength**: int
* **WordCasing**: string
* **WordOrientation**: string
* **WordPadding**: string
* **WordScaling**: string

## WordCloudOptions
### Properties
* **CloudLayout**: string
* **MaximumStringLength**: int
* **WordCasing**: string
* **WordOrientation**: string
* **WordPadding**: string
* **WordScaling**: string

## WordCloudSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## WordCloudSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## WordCloudSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## WordCloudVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [WordCloudChartConfiguration](#wordcloudchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## WordCloudVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [WordCloudChartConfiguration](#wordcloudchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## WordCloudVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [WordCloudChartConfiguration](#wordcloudchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualContentAltText**: string
* **VisualId**: string (Required)

## YAxisOptions
### Properties
* **YAxis**: string (Required)

## YAxisOptions
### Properties
* **YAxis**: string (Required)

## YAxisOptions
### Properties
* **YAxis**: string (Required)

