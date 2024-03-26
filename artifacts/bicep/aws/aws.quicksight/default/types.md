# AWS.QuickSight @ default

## Resource AWS.QuickSight/Analysis@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QuickSight/AnalysisProperties](#awsquicksightanalysisproperties) (Required): properties of the resource

## Resource AWS.QuickSight/Dashboard@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QuickSight/DashboardProperties](#awsquicksightdashboardproperties) (Required): properties of the resource

## Resource AWS.QuickSight/DataSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QuickSight/DataSetProperties](#awsquicksightdatasetproperties): properties of the resource

## Resource AWS.QuickSight/DataSource@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QuickSight/DataSourceProperties](#awsquicksightdatasourceproperties): properties of the resource

## Resource AWS.QuickSight/RefreshSchedule@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QuickSight/RefreshScheduleProperties](#awsquicksightrefreshscheduleproperties): properties of the resource

## Resource AWS.QuickSight/Template@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QuickSight/TemplateProperties](#awsquicksighttemplateproperties) (Required): properties of the resource

## Resource AWS.QuickSight/Theme@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QuickSight/ThemeProperties](#awsquicksightthemeproperties) (Required): properties of the resource

## Resource AWS.QuickSight/Topic@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QuickSight/TopicProperties](#awsquicksighttopicproperties): properties of the resource

## Resource AWS.QuickSight/VPCConnection@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QuickSight/VPCConnectionProperties](#awsquicksightvpcconnectionproperties): properties of the resource

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

## AllSheetsFilterScopeConfiguration
### Properties

## AllSheetsFilterScopeConfiguration
### Properties

## AmazonElasticsearchParameters
### Properties
* **Domain**: string (Required): <p>The Amazon Elasticsearch Service domain.</p>

## AmazonOpenSearchParameters
### Properties
* **Domain**: string (Required): <p>The Amazon OpenSearch Service domain.</p>

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
* **Sheets**: [SheetDefinition](#sheetdefinition)[]

## AnalysisError
### Properties
* **Message**: string
* **Type**: string
* **ViolatedEntities**: [Entity](#entity)[]

## AnalysisSourceEntity
### Properties
* **SourceTemplate**: [AnalysisSourceTemplate](#analysissourcetemplate)

## AnalysisSourceTemplate
### Properties
* **Arn**: string (Required)
* **DataSetReferences**: [DataSetReference](#datasetreference)[] (Required)

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
* **Database**: string (Required): <p>Database.</p>
* **Host**: string (Required): <p>Host.</p>
* **Port**: int (Required): <p>Port.</p>

## AWS.QuickSight/AnalysisProperties
### Properties
* **AnalysisId**: string (Required, Identifier)
* **Arn**: string (ReadOnly)
* **AwsAccountId**: string (Required, Identifier)
* **CreatedTime**: string (ReadOnly)
* **DataSetArns**: string[] (ReadOnly)
* **Definition**: [AnalysisDefinition](#analysisdefinition) (WriteOnly)
* **Errors**: [AnalysisError](#analysiserror)[]
* **LastUpdatedTime**: string (ReadOnly)
* **Name**: string (Required)
* **Parameters**: [Parameters](#parameters) (WriteOnly)
* **Permissions**: [ResourcePermission](#resourcepermission)[]
* **Sheets**: [Sheet](#sheet)[]
* **SourceEntity**: [AnalysisSourceEntity](#analysissourceentity) (WriteOnly)
* **Status**: string (WriteOnly)
* **Tags**: [Tag](#tag)[]
* **ThemeArn**: string
* **ValidationStrategy**: [ValidationStrategy](#validationstrategy) (WriteOnly)

## AWS.QuickSight/DashboardProperties
### Properties
* **Arn**: string (ReadOnly)
* **AwsAccountId**: string (Required, Identifier)
* **CreatedTime**: string (ReadOnly)
* **DashboardId**: string (Required, Identifier)
* **DashboardPublishOptions**: [DashboardPublishOptions](#dashboardpublishoptions) (WriteOnly)
* **Definition**: [DashboardVersionDefinition](#dashboardversiondefinition) (WriteOnly)
* **LastPublishedTime**: string (ReadOnly)
* **LastUpdatedTime**: string (ReadOnly)
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
* **ColumnGroups**: [ColumnGroup](#columngroup)[]: <p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p>
* **ColumnLevelPermissionRules**: [ColumnLevelPermissionRule](#columnlevelpermissionrule)[]
* **ConsumedSpiceCapacityInBytes**: int (ReadOnly): <p>The amount of SPICE capacity used by this dataset. This is 0 if the dataset isn't
            imported into SPICE.</p>
* **CreatedTime**: string (ReadOnly): <p>The time that this dataset was created.</p>
* **DataSetId**: string (Identifier)
* **DatasetParameters**: [DatasetParameter](#datasetparameter)[]: <p>The parameters declared in the dataset.</p>
* **DataSetRefreshProperties**: [DataSetRefreshProperties](#datasetrefreshproperties)
* **DataSetUsageConfiguration**: [DataSetUsageConfiguration](#datasetusageconfiguration)
* **FieldFolders**: [FieldFolderMap](#fieldfoldermap) (WriteOnly)
* **ImportMode**: string
* **IngestionWaitPolicy**: [IngestionWaitPolicy](#ingestionwaitpolicy) (WriteOnly)
* **LastUpdatedTime**: string (ReadOnly): <p>The last time that this dataset was updated.</p>
* **LogicalTableMap**: [LogicalTableMap](#logicaltablemap)
* **Name**: string: <p>The display name for the dataset.</p>
* **OutputColumns**: [OutputColumn](#outputcolumn)[] (ReadOnly): <p>The list of columns after all transforms. These columns are available in templates,
            analyses, and dashboards.</p>
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
* **LastUpdatedTime**: string (ReadOnly): <p>The last time that this data source was updated.</p>
* **Name**: string: <p>A display name for the data source.</p>
* **Permissions**: [ResourcePermission](#resourcepermission)[]: <p>A list of resource permissions on the data source.</p>
* **SslProperties**: [SslProperties](#sslproperties)
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]: <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the data source.</p>
* **Type**: string
* **VpcConnectionProperties**: [VpcConnectionProperties](#vpcconnectionproperties)

## AWS.QuickSight/RefreshScheduleProperties
### Properties
* **Arn**: string (ReadOnly): <p>The Amazon Resource Name (ARN) of the data source.</p>
* **AwsAccountId**: string (Identifier)
* **DataSetId**: string (Identifier)
* **Schedule**: [RefreshScheduleMap](#refreshschedulemap)

## AWS.QuickSight/TemplateProperties
### Properties
* **Arn**: string (ReadOnly)
* **AwsAccountId**: string (Required, Identifier)
* **CreatedTime**: string (ReadOnly)
* **Definition**: [TemplateVersionDefinition](#templateversiondefinition) (WriteOnly)
* **LastUpdatedTime**: string (ReadOnly)
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
* **Arn**: string (ReadOnly)
* **AwsAccountId**: string (Required, Identifier)
* **BaseThemeId**: string (Required, WriteOnly)
* **Configuration**: [ThemeConfiguration](#themeconfiguration) (Required, WriteOnly)
* **CreatedTime**: string (ReadOnly)
* **LastUpdatedTime**: string (ReadOnly)
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
* **Arn**: string (ReadOnly)
* **AvailabilityStatus**: string
* **AwsAccountId**: string (Identifier)
* **CreatedTime**: string (ReadOnly)
* **DnsResolvers**: string[]
* **LastUpdatedTime**: string (ReadOnly)
* **Name**: string
* **NetworkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly)
* **RoleArn**: string
* **SecurityGroupIds**: string[]
* **Status**: string (ReadOnly)
* **SubnetIds**: string[] (WriteOnly)
* **Tags**: [Tag](#tag)[]
* **VPCConnectionId**: string (Identifier)
* **VPCId**: string (ReadOnly)

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
* **AxisLineVisibility**: string
* **AxisOffset**: string: String based length that is composed of value and unit in px
* **DataOptions**: [AxisDataOptions](#axisdataoptions)
* **GridLineVisibility**: string
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
* **VisualId**: string (Required)

## BarChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [BarChartConfiguration](#barchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## BorderStyle
### Properties
* **Show**: bool

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

## BoxPlotVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [BoxPlotChartConfiguration](#boxplotchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## BoxPlotVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [BoxPlotChartConfiguration](#boxplotchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
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
* **FilterId**: string (Required)

## CategoryFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **Configuration**: [CategoryFilterConfiguration](#categoryfilterconfiguration) (Required)
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
* **SortIconVisibility**: string
* **Visibility**: string

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

## ColumnGroup
### Properties
* **GeoSpatialColumnGroup**: [GeoSpatialColumnGroup](#geospatialcolumngroup)

## ColumnGroupColumnSchema
### Properties
* **Name**: string

## ColumnGroupSchema
### Properties
* **ColumnGroupColumnSchemaList**: [ColumnGroupColumnSchema](#columngroupcolumnschema)[]
* **Name**: string

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
* **ColumnNames**: string[]
* **Principals**: string[]

## ColumnSchema
### Properties
* **DataType**: string
* **GeographicRole**: string
* **Name**: string

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
* **Visibility**: string

## ColumnTooltipItem
### Properties
* **Aggregation**: [AggregationFunction](#aggregationfunction)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **Label**: string
* **Visibility**: string

## ColumnTooltipItem
### Properties
* **Aggregation**: [AggregationFunction](#aggregationfunction)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **Label**: string
* **Visibility**: string

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
* **SortConfiguration**: [ComboChartSortConfiguration](#combochartsortconfiguration)
* **Tooltip**: [TooltipOptions](#tooltipoptions)
* **VisualPalette**: [VisualPalette](#visualpalette)

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

## ComboChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [ComboChartConfiguration](#combochartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## ComboChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [ComboChartConfiguration](#combochartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
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
* **VisualId**: string (Required)

## CustomContentVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [CustomContentConfiguration](#customcontentconfiguration)
* **DataSetIdentifier**: string (Required)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
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

## DashboardError
### Properties
* **Message**: string
* **Type**: string
* **ViolatedEntities**: [Entity](#entity)[]

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
* **VisualMenuOption**: [VisualMenuOption](#visualmenuoption)
* **VisualPublishOptions**: [DashboardVisualPublishOptions](#dashboardvisualpublishoptions)

## DashboardSourceEntity
### Properties
* **SourceTemplate**: [DashboardSourceTemplate](#dashboardsourcetemplate)

## DashboardSourceTemplate
### Properties
* **Arn**: string (Required)
* **DataSetReferences**: [DataSetReference](#datasetreference)[] (Required)

## DashboardVersion
### Properties
* **Arn**: string
* **CreatedTime**: string
* **DataSetArns**: string[]
* **Description**: string
* **Errors**: [DashboardError](#dashboarderror)[]
* **Sheets**: [Sheet](#sheet)[]
* **SourceEntityArn**: string
* **Status**: string
* **ThemeArn**: string
* **VersionNumber**: int

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

## DatabricksParameters
### Properties
* **Host**: string (Required): <p>Host.</p>
* **Port**: int (Required): <p>Port.</p>
* **SqlEndpointPath**: string (Required): <p>The HTTP Path of the Databricks data source.</p>

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
* **Colors**: string[]
* **EmptyFillColor**: string
* **MinMaxGradient**: string[]

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
* **Visibility**: string

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
* **ColumnGroupSchemaList**: [ColumnGroupSchema](#columngroupschema)[]
* **DataSetSchema**: [DataSetSchema](#datasetschema)
* **Placeholder**: string

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
* **DataSetArn**: string (Required)
* **DataSetPlaceholder**: string (Required)

## DataSetReference
### Properties
* **DataSetArn**: string (Required)
* **DataSetPlaceholder**: string (Required)

## DataSetRefreshProperties
### Properties
* **RefreshConfiguration**: [RefreshConfiguration](#refreshconfiguration)

## DataSetSchema
### Properties
* **ColumnSchemaList**: [ColumnSchema](#columnschema)[]

## DataSetUsageConfiguration
### Properties
* **DisableUseAsDirectQuerySource**: bool
* **DisableUseAsImportedSource**: bool

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
* **MissingDateVisibility**: string

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
* **Id**: string (Required)
* **Name**: string (Required)
* **TimeGranularity**: string
* **ValueType**: string (Required)

## DateTimeDatasetParameterDefaultValues
### Properties
* **StaticValues**: string[]: <p>List of static default values defined for a given string date time parameter type.</p>

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
* **Name**: string (Required)
* **Values**: string[] (Required)

## DateTimeParameter
### Properties
* **Name**: string (Required)
* **Values**: string[] (Required)

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
* **Id**: string (Required)
* **Name**: string (Required)
* **ValueType**: string (Required)

## DecimalDatasetParameterDefaultValues
### Properties
* **StaticValues**: int[]: <p>List of static default values defined for a given decimal dataset parameter type.</p>

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
* **Name**: string (Required)
* **Values**: int[] (Required)

## DecimalParameter
### Properties
* **Name**: string (Required)
* **Values**: int[] (Required)

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

## DefaultSectionBasedLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [SectionBasedLayoutCanvasSizeOptions](#sectionbasedlayoutcanvassizeoptions) (Required)

## DefaultSectionBasedLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [SectionBasedLayoutCanvasSizeOptions](#sectionbasedlayoutcanvassizeoptions) (Required)

## DefaultSectionBasedLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [SectionBasedLayoutCanvasSizeOptions](#sectionbasedlayoutcanvassizeoptions) (Required)

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
* **AggregationVisibility**: string
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
* **Visibility**: string

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
* **Visibility**: string

## FieldTooltipItem
### Properties
* **FieldId**: string (Required)
* **Label**: string
* **Visibility**: string

## FieldTooltipItem
### Properties
* **FieldId**: string (Required)
* **Label**: string
* **Visibility**: string

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
* **VisualId**: string (Required)

## FilledMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [FilledMapConfiguration](#filledmapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **ConditionalFormatting**: [FilledMapConditionalFormatting](#filledmapconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## Filter
### Properties
* **CategoryFilter**: [CategoryFilter](#categoryfilter)
* **NumericEqualityFilter**: [NumericEqualityFilter](#numericequalityfilter)
* **NumericRangeFilter**: [NumericRangeFilter](#numericrangefilter)
* **RelativeDatesFilter**: [RelativeDatesFilter](#relativedatesfilter)
* **TimeEqualityFilter**: [TimeEqualityFilter](#timeequalityfilter)
* **TimeRangeFilter**: [TimeRangeFilter](#timerangefilter)
* **TopBottomFilter**: [TopBottomFilter](#topbottomfilter)

## Filter
### Properties
* **CategoryFilter**: [CategoryFilter](#categoryfilter)
* **NumericEqualityFilter**: [NumericEqualityFilter](#numericequalityfilter)
* **NumericRangeFilter**: [NumericRangeFilter](#numericrangefilter)
* **RelativeDatesFilter**: [RelativeDatesFilter](#relativedatesfilter)
* **TimeEqualityFilter**: [TimeEqualityFilter](#timeequalityfilter)
* **TimeRangeFilter**: [TimeRangeFilter](#timerangefilter)
* **TopBottomFilter**: [TopBottomFilter](#topbottomfilter)

## FilterControl
### Properties
* **DateTimePicker**: [FilterDateTimePickerControl](#filterdatetimepickercontrol)
* **Dropdown**: [FilterDropDownControl](#filterdropdowncontrol)
* **List**: [FilterListControl](#filterlistcontrol)
* **RelativeDateTime**: [FilterRelativeDateTimeControl](#filterrelativedatetimecontrol)
* **Slider**: [FilterSliderControl](#filterslidercontrol)
* **TextArea**: [FilterTextAreaControl](#filtertextareacontrol)
* **TextField**: [FilterTextFieldControl](#filtertextfieldcontrol)

## FilterControl
### Properties
* **DateTimePicker**: [FilterDateTimePickerControl](#filterdatetimepickercontrol)
* **Dropdown**: [FilterDropDownControl](#filterdropdowncontrol)
* **List**: [FilterListControl](#filterlistcontrol)
* **RelativeDateTime**: [FilterRelativeDateTimeControl](#filterrelativedatetimecontrol)
* **Slider**: [FilterSliderControl](#filterslidercontrol)
* **TextArea**: [FilterTextAreaControl](#filtertextareacontrol)
* **TextField**: [FilterTextFieldControl](#filtertextfieldcontrol)

## FilterDateTimePickerControl
### Properties
* **DisplayOptions**: [DateTimePickerControlDisplayOptions](#datetimepickercontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)
* **Type**: string

## FilterDateTimePickerControl
### Properties
* **DisplayOptions**: [DateTimePickerControlDisplayOptions](#datetimepickercontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)
* **Type**: string

## FilterDropDownControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **DisplayOptions**: [DropDownControlDisplayOptions](#dropdowncontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SelectableValues**: [FilterSelectableValues](#filterselectablevalues)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)
* **Type**: string

## FilterDropDownControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
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

## FilterOperationSelectedFieldsConfiguration
### Properties
* **SelectedColumns**: [ColumnIdentifier](#columnidentifier)[]
* **SelectedFieldOptions**: string
* **SelectedFields**: string[]

## FilterOperationSelectedFieldsConfiguration
### Properties
* **SelectedColumns**: [ColumnIdentifier](#columnidentifier)[]
* **SelectedFieldOptions**: string
* **SelectedFields**: string[]

## FilterOperationTargetVisualsConfiguration
### Properties
* **SameSheetTargetVisualConfiguration**: [SameSheetTargetVisualConfiguration](#samesheettargetvisualconfiguration)

## FilterOperationTargetVisualsConfiguration
### Properties
* **SameSheetTargetVisualConfiguration**: [SameSheetTargetVisualConfiguration](#samesheettargetvisualconfiguration)

## FilterRelativeDateTimeControl
### Properties
* **DisplayOptions**: [RelativeDateTimeControlDisplayOptions](#relativedatetimecontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)

## FilterRelativeDateTimeControl
### Properties
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
* **Relative**: string

## FontSize
### Properties
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
* **Visibility**: string
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
* **Visibility**: string

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
* **Visibility**: string

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

## FunnelChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [FunnelChartConfiguration](#funnelchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## FunnelChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [FunnelChartConfiguration](#funnelchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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
* **VisualId**: string (Required)

## GaugeChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [GaugeChartConfiguration](#gaugechartconfiguration)
* **ConditionalFormatting**: [GaugeChartConditionalFormatting](#gaugechartconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## GeospatialHeatmapDataColor
### Properties
* **Color**: string (Required)

## GeospatialHeatmapDataColor
### Properties
* **Color**: string (Required)

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
* **VisualId**: string (Required)

## GeospatialMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [GeospatialMapConfiguration](#geospatialmapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## GutterStyle
### Properties
* **Show**: bool

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
* **VisualId**: string (Required)

## HeatMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [HeatMapConfiguration](#heatmapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## HistogramVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [HistogramConfiguration](#histogramconfiguration)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## HistogramVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [HistogramConfiguration](#histogramconfiguration)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## IncrementalRefresh
### Properties
* **LookbackWindow**: [LookbackWindow](#lookbackwindow)

## IngestionWaitPolicy
### Properties
* **IngestionWaitTimeInHours**: int: <p>The maximum time (in hours) to wait for Ingestion to complete. Default timeout is 36 hours.
 Applicable only when DataSetImportMode mode is set to SPICE and WaitForSpiceIngestion is set to true.</p>
* **WaitForSpiceIngestion**: bool: <p>Wait for SPICE ingestion to finish to mark dataset creation/update successful. Default (true).
  Applicable only when DataSetImportMode mode is set to SPICE.</p>

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
* **VisualId**: string (Required)

## InsightVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **DataSetIdentifier**: string (Required)
* **InsightConfiguration**: [InsightConfiguration](#insightconfiguration)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## IntegerDatasetParameter
### Properties
* **DefaultValues**: [IntegerDatasetParameterDefaultValues](#integerdatasetparameterdefaultvalues)
* **Id**: string (Required)
* **Name**: string (Required)
* **ValueType**: string (Required)

## IntegerDatasetParameterDefaultValues
### Properties
* **StaticValues**: int[]: <p>List of static default values defined for a given integer dataset parameter type.</p>

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
* **Name**: string (Required)
* **Values**: int[] (Required)

## IntegerParameter
### Properties
* **Name**: string (Required)
* **Values**: int[] (Required)

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

## KPIVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [KPIConfiguration](#kpiconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **ConditionalFormatting**: [KPIConditionalFormatting](#kpiconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## KPIVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [KPIConfiguration](#kpiconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **ConditionalFormatting**: [KPIConditionalFormatting](#kpiconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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
* **Visibility**: string

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

## LegendOptions
### Properties
* **Height**: string: String based length that is composed of value and unit in px
* **Position**: string
* **Title**: [LabelOptions](#labeloptions)
* **Visibility**: string
* **Width**: string: String based length that is composed of value and unit in px

## LegendOptions
### Properties
* **Height**: string: String based length that is composed of value and unit in px
* **Position**: string
* **Title**: [LabelOptions](#labeloptions)
* **Visibility**: string
* **Width**: string: String based length that is composed of value and unit in px

## LegendOptions
### Properties
* **Height**: string: String based length that is composed of value and unit in px
* **Position**: string
* **Title**: [LabelOptions](#labeloptions)
* **Visibility**: string
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

## LineChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [LineChartConfiguration](#linechartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## LineChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [LineChartConfiguration](#linechartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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
* **Visibility**: string

## ListControlSelectAllOptions
### Properties
* **Visibility**: string

## ListControlSelectAllOptions
### Properties
* **Visibility**: string

## ListControlSelectAllOptions
### Properties
* **Visibility**: string

## LoadingAnimation
### Properties
* **Visibility**: string

## LoadingAnimation
### Properties
* **Visibility**: string

## LoadingAnimation
### Properties
* **Visibility**: string

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

## LookbackWindow
### Properties
* **ColumnName**: string: <p>Column Name</p>
* **Size**: int: <p>Size</p>
* **SizeUnit**: string

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

## MarginStyle
### Properties
* **Show**: bool

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
* **Visibility**: string

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

## MinimumLabelType
### Properties
* **Visibility**: string

## MinimumLabelType
### Properties
* **Visibility**: string

## MinimumLabelType
### Properties
* **Visibility**: string

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

## NetworkInterface
### Properties
* **AvailabilityZone**: string
* **ErrorMessage**: string
* **NetworkInterfaceId**: string
* **Status**: string
* **SubnetId**: string

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

## OracleParameters
### Properties
* **Database**: string (Required)
* **Host**: string (Required)
* **Port**: int (Required)

## OutputColumn
### Properties
* **Description**: string: <p>A description for a column.</p>
* **Name**: string: <p>A display name for the dataset.</p>
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
* **DisplayOptions**: [DropDownControlDisplayOptions](#dropdowncontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SelectableValues**: [ParameterSelectableValues](#parameterselectablevalues)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)
* **Type**: string

## ParameterDropDownControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
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

## Parameters
### Properties
* **DateTimeParameters**: [DateTimeParameter](#datetimeparameter)[]
* **DecimalParameters**: [DecimalParameter](#decimalparameter)[]
* **IntegerParameters**: [IntegerParameter](#integerparameter)[]
* **StringParameters**: [StringParameter](#stringparameter)[]

## Parameters
### Properties
* **DateTimeParameters**: [DateTimeParameter](#datetimeparameter)[]
* **DecimalParameters**: [DecimalParameter](#decimalparameter)[]
* **IntegerParameters**: [IntegerParameter](#integerparameter)[]
* **StringParameters**: [StringParameter](#stringparameter)[]

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
* **VisualId**: string (Required)

## PieChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [PieChartConfiguration](#piechartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## PivotTablePaginatedReportOptions
### Properties
* **OverflowColumnHeaderVisibility**: string
* **VerticalOverflowVisibility**: string

## PivotTablePaginatedReportOptions
### Properties
* **OverflowColumnHeaderVisibility**: string
* **VerticalOverflowVisibility**: string

## PivotTableRowsLabelOptions
### Properties
* **CustomLabel**: string
* **Visibility**: string

## PivotTableRowsLabelOptions
### Properties
* **CustomLabel**: string
* **Visibility**: string

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
* **VisualId**: string (Required)

## PivotTableVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [PivotTableConfiguration](#pivottableconfiguration)
* **ConditionalFormatting**: [PivotTableConditionalFormatting](#pivottableconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
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
* **VisualId**: string (Required)

## RadarChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [RadarChartConfiguration](#radarchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
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
* **Visibility**: string

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

## RefreshConfiguration
### Properties
* **IncrementalRefresh**: [IncrementalRefresh](#incrementalrefresh)

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

## ResourcePermission
### Properties
* **Actions**: string[] (Required)
* **Principal**: string (Required)

## ResourcePermission
### Properties
* **Actions**: string[] (Required)
* **Principal**: string (Required)

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

## ResourcePermission
### Properties
* **Actions**: string[] (Required)
* **Principal**: string (Required)

## ResourcePermission
### Properties
* **Actions**: string[] (Required)
* **Principal**: string (Required)

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
* **Arn**: string (Required): <p>The Amazon Resource Name (ARN) of the permission dataset.</p>
* **FormatVersion**: string
* **Namespace**: string: <p>The namespace associated with the row-level permissions dataset.</p>
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
* **MatchAllValue**: string: <p>A string that you want to use to filter by all the values in a column in the dataset and don?t want to list the values one by one. For example, you can use an asterisk as your match all value.</p>
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

## SankeyDiagramVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [SankeyDiagramChartConfiguration](#sankeydiagramchartconfiguration)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## SankeyDiagramVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [SankeyDiagramChartConfiguration](#sankeydiagramchartconfiguration)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
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
* **VisualId**: string (Required)

## ScatterPlotVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [ScatterPlotConfiguration](#scatterplotconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
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
* **Visibility**: string
* **VisibleRange**: [VisibleRangeOptions](#visiblerangeoptions)

## SecondaryValueOptions
### Properties
* **Visibility**: string

## SecondaryValueOptions
### Properties
* **Visibility**: string

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

## Sheet
### Properties
* **Name**: string
* **SheetId**: string

## Sheet
### Properties
* **Name**: string
* **SheetId**: string

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
* **Visibility**: string

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

## SheetControlsOption
### Properties
* **VisibilityState**: string

## SheetDefinition
### Properties
* **ContentType**: string
* **Description**: string
* **FilterControls**: [FilterControl](#filtercontrol)[]
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
* **Visibility**: string

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

## SimpleClusterMarker
### Properties
* **Color**: string

## SimpleClusterMarker
### Properties
* **Color**: string

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
* **Database**: string (Required): <p>Database.</p>
* **Host**: string (Required): <p>Host.</p>
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
* **Catalog**: string (Required): <p>Catalog.</p>
* **Host**: string (Required): <p>Host.</p>
* **Port**: int (Required): <p>Port.</p>
* **ProductType**: string

## StringDatasetParameter
### Properties
* **DefaultValues**: [StringDatasetParameterDefaultValues](#stringdatasetparameterdefaultvalues)
* **Id**: string (Required)
* **Name**: string (Required)
* **ValueType**: string (Required)

## StringDatasetParameterDefaultValues
### Properties
* **StaticValues**: string[]: <p>List of static default values defined for a given string dataset parameter type.</p>

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
* **Name**: string (Required)
* **Values**: string[] (Required)

## StringParameter
### Properties
* **Name**: string (Required)
* **Values**: string[] (Required)

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
* **Visibility**: string

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

## TableVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [TableConfiguration](#tableconfiguration)
* **ConditionalFormatting**: [TableConditionalFormatting](#tableconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## TableVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [TableConfiguration](#tableconfiguration)
* **ConditionalFormatting**: [TableConditionalFormatting](#tableconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

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
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TemplateError
### Properties
* **Message**: string
* **Type**: string
* **ViolatedEntities**: [Entity](#entity)[]

## TemplateSourceAnalysis
### Properties
* **Arn**: string (Required)
* **DataSetReferences**: [DataSetReference](#datasetreference)[] (Required)

## TemplateSourceEntity
### Properties
* **SourceAnalysis**: [TemplateSourceAnalysis](#templatesourceanalysis)
* **SourceTemplate**: [TemplateSourceTemplate](#templatesourcetemplate)

## TemplateSourceTemplate
### Properties
* **Arn**: string (Required)

## TemplateVersion
### Properties
* **CreatedTime**: string
* **DataSetConfigurations**: [DataSetConfiguration](#datasetconfiguration)[]
* **Description**: string
* **Errors**: [TemplateError](#templateerror)[]
* **Sheets**: [Sheet](#sheet)[]
* **SourceEntityArn**: string
* **Status**: string
* **ThemeArn**: string
* **VersionNumber**: int

## TemplateVersionDefinition
### Properties
* **AnalysisDefaults**: [AnalysisDefaults](#analysisdefaults)
* **CalculatedFields**: [CalculatedField](#calculatedfield)[]
* **ColumnConfigurations**: [ColumnConfiguration](#columnconfiguration)[]
* **DataSetConfigurations**: [DataSetConfiguration](#datasetconfiguration)[] (Required)
* **FilterGroups**: [FilterGroup](#filtergroup)[]
* **Options**: [AssetOptions](#assetoptions)
* **ParameterDeclarations**: [ParameterDeclaration](#parameterdeclaration)[]
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
* **Visibility**: string

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
* **Message**: string
* **Type**: string

## ThemeVersion
### Properties
* **Arn**: string
* **BaseThemeId**: string
* **Configuration**: [ThemeConfiguration](#themeconfiguration)
* **CreatedTime**: string
* **Description**: string
* **Errors**: [ThemeError](#themeerror)[]
* **Status**: string
* **VersionNumber**: int

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
* **Visibility**: string

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

## TimeEqualityFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FilterId**: string (Required)
* **ParameterName**: string
* **RollingDate**: [RollingDateConfiguration](#rollingdateconfiguration)
* **TimeGranularity**: string
* **Value**: string

## TimeEqualityFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
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
* **TooltipVisibility**: string

## TopBottomFilter
### Properties
* **AggregationSortConfigurations**: [AggregationSortConfiguration](#aggregationsortconfiguration)[] (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FilterId**: string (Required)
* **Limit**: int
* **ParameterName**: string
* **TimeGranularity**: string

## TopBottomFilter
### Properties
* **AggregationSortConfigurations**: [AggregationSortConfiguration](#aggregationsortconfiguration)[] (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
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

## TreeMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [TreeMapConfiguration](#treemapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## TreeMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [TreeMapConfiguration](#treemapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## TrendArrowOptions
### Properties
* **Visibility**: string

## TrendArrowOptions
### Properties
* **Visibility**: string

## TrinoParameters
### Properties
* **Catalog**: string (Required): <p>Catalog.</p>
* **Host**: string (Required): <p>Host.</p>
* **Port**: int (Required): <p>Port.</p>

## TypeParameters
### Properties

## Typography
### Properties
* **FontFamilies**: [Font](#font)[]

## UIColorPalette
### Properties
* **Accent**: string
* **AccentForeground**: string
* **Danger**: string
* **DangerForeground**: string
* **Dimension**: string
* **DimensionForeground**: string
* **Measure**: string
* **MeasureForeground**: string
* **PrimaryBackground**: string
* **PrimaryForeground**: string
* **SecondaryBackground**: string
* **SecondaryForeground**: string
* **Success**: string
* **SuccessForeground**: string
* **Warning**: string
* **WarningForeground**: string

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
* **LineChartVisual**: [LineChartVisual](#linechartvisual)
* **PieChartVisual**: [PieChartVisual](#piechartvisual)
* **PivotTableVisual**: [PivotTableVisual](#pivottablevisual)
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

## VisualMenuOption
### Properties
* **AvailabilityStatus**: string

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

## VisualTitleLabelOptions
### Properties
* **FormatText**: [ShortFormatText](#shortformattext)
* **Visibility**: string

## VisualTitleLabelOptions
### Properties
* **FormatText**: [ShortFormatText](#shortformattext)
* **Visibility**: string

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

## WaterfallChartConfiguration
### Properties
* **CategoryAxisDisplayOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **CategoryAxisLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
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

## WaterfallVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [WaterfallChartConfiguration](#waterfallchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## WaterfallVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [WaterfallChartConfiguration](#waterfallchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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
* **VisualId**: string (Required)

## WordCloudVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [WordCloudChartConfiguration](#wordcloudchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

