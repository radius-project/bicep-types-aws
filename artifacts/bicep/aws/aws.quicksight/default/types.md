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

## AWS.QuickSight/AnalysisProperties
### Properties
* **AnalysisId**: string (Required, Identifier)
* **Arn**: string (ReadOnly)
* **AwsAccountId**: string (Required, Identifier)
* **CreatedTime**: string (ReadOnly)
* **DataSetArns**: string[] (ReadOnly)
* **Definition**: [AnalysisDefinition](#analysisdefinition) (WriteOnly)
* **Errors**: [AnalysisError](#analysiserror)[] (ReadOnly)
* **LastUpdatedTime**: string (ReadOnly, WriteOnly)
* **Name**: string (Required)
* **Parameters**: [Parameters](#parameters) (WriteOnly)
* **Permissions**: [ResourcePermission](#resourcepermission)[]
* **Sheets**: [Sheet](#sheet)[] (ReadOnly, WriteOnly)
* **SourceEntity**: [AnalysisSourceEntity](#analysissourceentity) (WriteOnly)
* **Status**: string
* **Tags**: [Tag](#tag)[]
* **ThemeArn**: string

## AnalysisDefinition
### Properties
* **AnalysisDefaults**: [AnalysisDefaults](#analysisdefaults)
* **CalculatedFields**: [CalculatedField](#calculatedfield)[]
* **ColumnConfigurations**: [ColumnConfiguration](#columnconfiguration)[]
* **DataSetIdentifierDeclarations**: [DataSetIdentifierDeclaration](#datasetidentifierdeclaration)[] (Required)
* **FilterGroups**: [FilterGroup](#filtergroup)[]
* **ParameterDeclarations**: [ParameterDeclaration](#parameterdeclaration)[]
* **Sheets**: [SheetDefinition](#sheetdefinition)[]

## AnalysisDefaults
### Properties
* **DefaultNewSheetConfiguration**: [DefaultNewSheetConfiguration](#defaultnewsheetconfiguration) (Required)

## DefaultNewSheetConfiguration
### Properties
* **InteractiveLayoutConfiguration**: [DefaultInteractiveLayoutConfiguration](#defaultinteractivelayoutconfiguration)
* **PaginatedLayoutConfiguration**: [DefaultPaginatedLayoutConfiguration](#defaultpaginatedlayoutconfiguration)
* **SheetContentType**: string

## DefaultInteractiveLayoutConfiguration
### Properties
* **FreeForm**: [DefaultFreeFormLayoutConfiguration](#defaultfreeformlayoutconfiguration)
* **Grid**: [DefaultGridLayoutConfiguration](#defaultgridlayoutconfiguration)

## DefaultFreeFormLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [FreeFormLayoutCanvasSizeOptions](#freeformlayoutcanvassizeoptions) (Required)

## FreeFormLayoutCanvasSizeOptions
### Properties
* **ScreenCanvasSizeOptions**: [FreeFormLayoutScreenCanvasSizeOptions](#freeformlayoutscreencanvassizeoptions)

## FreeFormLayoutScreenCanvasSizeOptions
### Properties
* **OptimizedViewPortWidth**: string (Required): String based length that is composed of value and unit in px

## DefaultGridLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [GridLayoutCanvasSizeOptions](#gridlayoutcanvassizeoptions) (Required)

## GridLayoutCanvasSizeOptions
### Properties
* **ScreenCanvasSizeOptions**: [GridLayoutScreenCanvasSizeOptions](#gridlayoutscreencanvassizeoptions)

## GridLayoutScreenCanvasSizeOptions
### Properties
* **OptimizedViewPortWidth**: string: String based length that is composed of value and unit in px
* **ResizeOption**: string (Required)

## DefaultPaginatedLayoutConfiguration
### Properties
* **SectionBased**: [DefaultSectionBasedLayoutConfiguration](#defaultsectionbasedlayoutconfiguration)

## DefaultSectionBasedLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [SectionBasedLayoutCanvasSizeOptions](#sectionbasedlayoutcanvassizeoptions) (Required)

## SectionBasedLayoutCanvasSizeOptions
### Properties
* **PaperCanvasSizeOptions**: [SectionBasedLayoutPaperCanvasSizeOptions](#sectionbasedlayoutpapercanvassizeoptions)

## SectionBasedLayoutPaperCanvasSizeOptions
### Properties
* **PaperMargin**: [Spacing](#spacing)
* **PaperOrientation**: string
* **PaperSize**: string

## Spacing
### Properties
* **Bottom**: string: String based length that is composed of value and unit
* **Left**: string: String based length that is composed of value and unit
* **Right**: string: String based length that is composed of value and unit
* **Top**: string: String based length that is composed of value and unit

## CalculatedField
### Properties
* **DataSetIdentifier**: string (Required)
* **Expression**: string (Required)
* **Name**: string (Required)

## ColumnConfiguration
### Properties
* **ColorsConfiguration**: [ColorsConfiguration](#colorsconfiguration)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FormatConfiguration**: [FormatConfiguration](#formatconfiguration)
* **Role**: string

## ColorsConfiguration
### Properties
* **CustomColors**: [CustomColor](#customcolor)[]

## CustomColor
### Properties
* **Color**: string (Required)
* **FieldValue**: string
* **SpecialValue**: string

## ColumnIdentifier
### Properties
* **ColumnName**: string (Required)
* **DataSetIdentifier**: string (Required)

## FormatConfiguration
### Properties
* **DateTimeFormatConfiguration**: [DateTimeFormatConfiguration](#datetimeformatconfiguration)
* **NumberFormatConfiguration**: [NumberFormatConfiguration](#numberformatconfiguration)
* **StringFormatConfiguration**: [StringFormatConfiguration](#stringformatconfiguration)

## DateTimeFormatConfiguration
### Properties
* **DateTimeFormat**: string
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **NumericFormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)

## NullValueFormatConfiguration
### Properties
* **NullString**: string (Required)

## NumericFormatConfiguration
### Properties
* **CurrencyDisplayFormatConfiguration**: [CurrencyDisplayFormatConfiguration](#currencydisplayformatconfiguration)
* **NumberDisplayFormatConfiguration**: [NumberDisplayFormatConfiguration](#numberdisplayformatconfiguration)
* **PercentageDisplayFormatConfiguration**: [PercentageDisplayFormatConfiguration](#percentagedisplayformatconfiguration)

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

## DecimalPlacesConfiguration
### Properties
* **DecimalPlaces**: int (Required)

## NegativeValueConfiguration
### Properties
* **DisplayMode**: string (Required)

## NumericSeparatorConfiguration
### Properties
* **DecimalSeparator**: string
* **ThousandsSeparator**: [ThousandSeparatorOptions](#thousandseparatoroptions)

## ThousandSeparatorOptions
### Properties
* **Symbol**: string
* **Visibility**: string

## NumberDisplayFormatConfiguration
### Properties
* **DecimalPlacesConfiguration**: [DecimalPlacesConfiguration](#decimalplacesconfiguration)
* **NegativeValueConfiguration**: [NegativeValueConfiguration](#negativevalueconfiguration)
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **NumberScale**: string
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

## NumberFormatConfiguration
### Properties
* **FormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)

## StringFormatConfiguration
### Properties
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **NumericFormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)

## DataSetIdentifierDeclaration
### Properties
* **DataSetArn**: string (Required)
* **Identifier**: string (Required)

## FilterGroup
### Properties
* **CrossDataset**: string (Required)
* **FilterGroupId**: string (Required)
* **Filters**: [Filter](#filter)[] (Required)
* **ScopeConfiguration**: [FilterScopeConfiguration](#filterscopeconfiguration) (Required)
* **Status**: string

## Filter
### Properties
* **CategoryFilter**: [CategoryFilter](#categoryfilter)
* **NumericEqualityFilter**: [NumericEqualityFilter](#numericequalityfilter)
* **NumericRangeFilter**: [NumericRangeFilter](#numericrangefilter)
* **RelativeDatesFilter**: [RelativeDatesFilter](#relativedatesfilter)
* **TimeEqualityFilter**: [TimeEqualityFilter](#timeequalityfilter)
* **TimeRangeFilter**: [TimeRangeFilter](#timerangefilter)
* **TopBottomFilter**: [TopBottomFilter](#topbottomfilter)

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

## FilterListConfiguration
### Properties
* **CategoryValues**: string[]
* **MatchOperator**: string (Required)
* **SelectAllOptions**: string

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

## AggregationFunction
### Properties
* **CategoricalAggregationFunction**: string
* **DateAggregationFunction**: string
* **NumericalAggregationFunction**: [NumericalAggregationFunction](#numericalaggregationfunction)

## NumericalAggregationFunction
### Properties
* **PercentileAggregation**: [PercentileAggregation](#percentileaggregation)
* **SimpleNumericalAggregation**: string

## PercentileAggregation
### Properties
* **PercentileValue**: int

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

## AnchorDateConfiguration
### Properties
* **AnchorOption**: string
* **ParameterName**: string

## ExcludePeriodConfiguration
### Properties
* **Amount**: int (Required)
* **Granularity**: string (Required)
* **Status**: string

## TimeEqualityFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FilterId**: string (Required)
* **ParameterName**: string
* **TimeGranularity**: string
* **Value**: string

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

## RollingDateConfiguration
### Properties
* **DataSetIdentifier**: string
* **Expression**: string (Required)

## TopBottomFilter
### Properties
* **AggregationSortConfigurations**: [AggregationSortConfiguration](#aggregationsortconfiguration)[] (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FilterId**: string (Required)
* **Limit**: int
* **ParameterName**: string
* **TimeGranularity**: string

## AggregationSortConfiguration
### Properties
* **AggregationFunction**: [AggregationFunction](#aggregationfunction) (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **SortDirection**: string (Required)

## FilterScopeConfiguration
### Properties
* **SelectedSheets**: [SelectedSheetsFilterScopeConfiguration](#selectedsheetsfilterscopeconfiguration)

## SelectedSheetsFilterScopeConfiguration
### Properties
* **SheetVisualScopingConfigurations**: [SheetVisualScopingConfiguration](#sheetvisualscopingconfiguration)[]

## SheetVisualScopingConfiguration
### Properties
* **Scope**: string (Required)
* **SheetId**: string (Required)
* **VisualIds**: string[]

## ParameterDeclaration
### Properties
* **DateTimeParameterDeclaration**: [DateTimeParameterDeclaration](#datetimeparameterdeclaration)
* **DecimalParameterDeclaration**: [DecimalParameterDeclaration](#decimalparameterdeclaration)
* **IntegerParameterDeclaration**: [IntegerParameterDeclaration](#integerparameterdeclaration)
* **StringParameterDeclaration**: [StringParameterDeclaration](#stringparameterdeclaration)

## DateTimeParameterDeclaration
### Properties
* **DefaultValues**: [DateTimeDefaultValues](#datetimedefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **TimeGranularity**: string
* **ValueWhenUnset**: [DateTimeValueWhenUnsetConfiguration](#datetimevaluewhenunsetconfiguration)

## DateTimeDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **RollingDate**: [RollingDateConfiguration](#rollingdateconfiguration)
* **StaticValues**: string[]

## DynamicDefaultValue
### Properties
* **DefaultValueColumn**: [ColumnIdentifier](#columnidentifier) (Required)
* **GroupNameColumn**: [ColumnIdentifier](#columnidentifier)
* **UserNameColumn**: [ColumnIdentifier](#columnidentifier)

## MappedDataSetParameter
### Properties
* **DataSetIdentifier**: string (Required)
* **DataSetParameterName**: string (Required)

## DateTimeValueWhenUnsetConfiguration
### Properties
* **CustomValue**: string
* **ValueWhenUnsetOption**: string

## DecimalParameterDeclaration
### Properties
* **DefaultValues**: [DecimalDefaultValues](#decimaldefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **ParameterValueType**: string (Required)
* **ValueWhenUnset**: [DecimalValueWhenUnsetConfiguration](#decimalvaluewhenunsetconfiguration)

## DecimalDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **StaticValues**: int[]

## DecimalValueWhenUnsetConfiguration
### Properties
* **CustomValue**: int
* **ValueWhenUnsetOption**: string

## IntegerParameterDeclaration
### Properties
* **DefaultValues**: [IntegerDefaultValues](#integerdefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **ParameterValueType**: string (Required)
* **ValueWhenUnset**: [IntegerValueWhenUnsetConfiguration](#integervaluewhenunsetconfiguration)

## IntegerDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **StaticValues**: int[]

## IntegerValueWhenUnsetConfiguration
### Properties
* **CustomValue**: int
* **ValueWhenUnsetOption**: string

## StringParameterDeclaration
### Properties
* **DefaultValues**: [StringDefaultValues](#stringdefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **ParameterValueType**: string (Required)
* **ValueWhenUnset**: [StringValueWhenUnsetConfiguration](#stringvaluewhenunsetconfiguration)

## StringDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **StaticValues**: string[]

## StringValueWhenUnsetConfiguration
### Properties
* **CustomValue**: string
* **ValueWhenUnsetOption**: string

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

## DateTimePickerControlDisplayOptions
### Properties
* **DateTimeFormat**: string
* **TitleOptions**: [LabelOptions](#labeloptions)

## LabelOptions
### Properties
* **CustomLabel**: string
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)
* **Visibility**: string

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

## FontWeight
### Properties
* **Name**: string

## FilterDropDownControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **DisplayOptions**: [DropDownControlDisplayOptions](#dropdowncontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SelectableValues**: [FilterSelectableValues](#filterselectablevalues)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)
* **Type**: string

## CascadingControlConfiguration
### Properties
* **SourceControls**: [CascadingControlSource](#cascadingcontrolsource)[]

## CascadingControlSource
### Properties
* **ColumnToMatch**: [ColumnIdentifier](#columnidentifier)
* **SourceSheetControlId**: string

## DropDownControlDisplayOptions
### Properties
* **SelectAllOptions**: [ListControlSelectAllOptions](#listcontrolselectalloptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## ListControlSelectAllOptions
### Properties
* **Visibility**: string

## FilterSelectableValues
### Properties
* **Values**: string[]

## FilterListControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **DisplayOptions**: [ListControlDisplayOptions](#listcontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SelectableValues**: [FilterSelectableValues](#filterselectablevalues)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)
* **Type**: string

## ListControlDisplayOptions
### Properties
* **SearchOptions**: [ListControlSearchOptions](#listcontrolsearchoptions)
* **SelectAllOptions**: [ListControlSelectAllOptions](#listcontrolselectalloptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## ListControlSearchOptions
### Properties
* **Visibility**: string

## FilterRelativeDateTimeControl
### Properties
* **DisplayOptions**: [RelativeDateTimeControlDisplayOptions](#relativedatetimecontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)

## RelativeDateTimeControlDisplayOptions
### Properties
* **DateTimeFormat**: string
* **TitleOptions**: [LabelOptions](#labeloptions)

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

## SliderControlDisplayOptions
### Properties
* **TitleOptions**: [LabelOptions](#labeloptions)

## FilterTextAreaControl
### Properties
* **Delimiter**: string
* **DisplayOptions**: [TextAreaControlDisplayOptions](#textareacontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)

## TextAreaControlDisplayOptions
### Properties
* **PlaceholderOptions**: [TextControlPlaceholderOptions](#textcontrolplaceholderoptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## TextControlPlaceholderOptions
### Properties
* **Visibility**: string

## FilterTextFieldControl
### Properties
* **DisplayOptions**: [TextFieldControlDisplayOptions](#textfieldcontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)

## TextFieldControlDisplayOptions
### Properties
* **PlaceholderOptions**: [TextControlPlaceholderOptions](#textcontrolplaceholderoptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## Layout
### Properties
* **Configuration**: [LayoutConfiguration](#layoutconfiguration) (Required)

## LayoutConfiguration
### Properties
* **FreeFormLayout**: [FreeFormLayoutConfiguration](#freeformlayoutconfiguration)
* **GridLayout**: [GridLayoutConfiguration](#gridlayoutconfiguration)
* **SectionBasedLayout**: [SectionBasedLayoutConfiguration](#sectionbasedlayoutconfiguration)

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

## FreeFormLayoutElementBackgroundStyle
### Properties
* **Color**: string
* **Visibility**: string

## FreeFormLayoutElementBorderStyle
### Properties
* **Color**: string
* **Visibility**: string

## LoadingAnimation
### Properties
* **Visibility**: string

## SheetElementRenderingRule
### Properties
* **ConfigurationOverrides**: [SheetElementConfigurationOverrides](#sheetelementconfigurationoverrides) (Required)
* **Expression**: string (Required)

## SheetElementConfigurationOverrides
### Properties
* **Visibility**: string

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

## SectionBasedLayoutConfiguration
### Properties
* **BodySections**: [BodySectionConfiguration](#bodysectionconfiguration)[] (Required)
* **CanvasSizeOptions**: [SectionBasedLayoutCanvasSizeOptions](#sectionbasedlayoutcanvassizeoptions) (Required)
* **FooterSections**: [HeaderFooterSectionConfiguration](#headerfootersectionconfiguration)[] (Required)
* **HeaderSections**: [HeaderFooterSectionConfiguration](#headerfootersectionconfiguration)[] (Required)

## BodySectionConfiguration
### Properties
* **Content**: [BodySectionContent](#bodysectioncontent) (Required)
* **PageBreakConfiguration**: [SectionPageBreakConfiguration](#sectionpagebreakconfiguration)
* **SectionId**: string (Required)
* **Style**: [SectionStyle](#sectionstyle)

## BodySectionContent
### Properties
* **Layout**: [SectionLayoutConfiguration](#sectionlayoutconfiguration)

## SectionLayoutConfiguration
### Properties
* **FreeFormLayout**: [FreeFormSectionLayoutConfiguration](#freeformsectionlayoutconfiguration) (Required)

## FreeFormSectionLayoutConfiguration
### Properties
* **Elements**: [FreeFormLayoutElement](#freeformlayoutelement)[] (Required)

## SectionPageBreakConfiguration
### Properties
* **After**: [SectionAfterPageBreak](#sectionafterpagebreak)

## SectionAfterPageBreak
### Properties
* **Status**: string

## SectionStyle
### Properties
* **Height**: string: String based length that is composed of value and unit in px
* **Padding**: [Spacing](#spacing)

## HeaderFooterSectionConfiguration
### Properties
* **Layout**: [SectionLayoutConfiguration](#sectionlayoutconfiguration) (Required)
* **SectionId**: string (Required)
* **Style**: [SectionStyle](#sectionstyle)

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

## ParameterDropDownControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **DisplayOptions**: [DropDownControlDisplayOptions](#dropdowncontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SelectableValues**: [ParameterSelectableValues](#parameterselectablevalues)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)
* **Type**: string

## ParameterSelectableValues
### Properties
* **LinkToDataSetColumn**: [ColumnIdentifier](#columnidentifier)
* **Values**: string[]

## ParameterListControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **DisplayOptions**: [ListControlDisplayOptions](#listcontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SelectableValues**: [ParameterSelectableValues](#parameterselectablevalues)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)
* **Type**: string

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

## ParameterTextFieldControl
### Properties
* **DisplayOptions**: [TextFieldControlDisplayOptions](#textfieldcontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)

## SheetControlLayout
### Properties
* **Configuration**: [SheetControlLayoutConfiguration](#sheetcontrollayoutconfiguration) (Required)

## SheetControlLayoutConfiguration
### Properties
* **GridLayout**: [GridLayoutConfiguration](#gridlayoutconfiguration)

## SheetTextBox
### Properties
* **Content**: string
* **SheetTextBoxId**: string (Required)

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

## BarChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [BarChartConfiguration](#barchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## CustomActionFilterOperation
### Properties
* **SelectedFieldsConfiguration**: [FilterOperationSelectedFieldsConfiguration](#filteroperationselectedfieldsconfiguration) (Required)
* **TargetVisualsConfiguration**: [FilterOperationTargetVisualsConfiguration](#filteroperationtargetvisualsconfiguration) (Required)

## FilterOperationSelectedFieldsConfiguration
### Properties
* **SelectedFieldOptions**: string
* **SelectedFields**: string[]

## FilterOperationTargetVisualsConfiguration
### Properties
* **SameSheetTargetVisualConfiguration**: [SameSheetTargetVisualConfiguration](#samesheettargetvisualconfiguration)

## SameSheetTargetVisualConfiguration
### Properties
* **TargetVisualOptions**: string
* **TargetVisuals**: string[]

## CustomActionNavigationOperation
### Properties
* **LocalNavigationConfiguration**: [LocalNavigationConfiguration](#localnavigationconfiguration)

## LocalNavigationConfiguration
### Properties
* **TargetSheetId**: string (Required)

## CustomActionSetParametersOperation
### Properties
* **ParameterValueConfigurations**: [SetParameterValueConfiguration](#setparametervalueconfiguration)[] (Required)

## SetParameterValueConfiguration
### Properties
* **DestinationParameterName**: string (Required)
* **Value**: [DestinationParameterValueConfiguration](#destinationparametervalueconfiguration) (Required)

## DestinationParameterValueConfiguration
### Properties
* **CustomValuesConfiguration**: [CustomValuesConfiguration](#customvaluesconfiguration)
* **SelectAllValueOptions**: string
* **SourceField**: string
* **SourceParameterName**: string

## CustomValuesConfiguration
### Properties
* **CustomValues**: [CustomParameterValues](#customparametervalues) (Required)
* **IncludeNullValue**: bool

## CustomParameterValues
### Properties
* **DateTimeValues**: string[]
* **DecimalValues**: int[]
* **IntegerValues**: int[]
* **StringValues**: string[]

## CustomActionURLOperation
### Properties
* **URLTarget**: string (Required)
* **URLTemplate**: string (Required)

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

## AxisDisplayOptions
### Properties
* **AxisLineVisibility**: string
* **AxisOffset**: string: String based length that is composed of value and unit in px
* **DataOptions**: [AxisDataOptions](#axisdataoptions)
* **GridLineVisibility**: string
* **ScrollbarOptions**: [ScrollBarOptions](#scrollbaroptions)
* **TickLabelOptions**: [AxisTickLabelOptions](#axisticklabeloptions)

## AxisDataOptions
### Properties
* **DateAxisOptions**: [DateAxisOptions](#dateaxisoptions)
* **NumericAxisOptions**: [NumericAxisOptions](#numericaxisoptions)

## DateAxisOptions
### Properties
* **MissingDateVisibility**: string

## NumericAxisOptions
### Properties
* **Range**: [AxisDisplayRange](#axisdisplayrange)
* **Scale**: [AxisScale](#axisscale)

## AxisDisplayRange
### Properties
* **DataDriven**: [AxisDisplayDataDrivenRange](#axisdisplaydatadrivenrange)
* **MinMax**: [AxisDisplayMinMaxRange](#axisdisplayminmaxrange)

## AxisDisplayDataDrivenRange
### Properties

## AxisDisplayMinMaxRange
### Properties
* **Maximum**: int
* **Minimum**: int

## AxisScale
### Properties
* **Linear**: [AxisLinearScale](#axislinearscale)
* **Logarithmic**: [AxisLogarithmicScale](#axislogarithmicscale)

## AxisLinearScale
### Properties
* **StepCount**: int
* **StepSize**: int

## AxisLogarithmicScale
### Properties
* **Base**: int

## ScrollBarOptions
### Properties
* **Visibility**: string
* **VisibleRange**: [VisibleRangeOptions](#visiblerangeoptions)

## VisibleRangeOptions
### Properties
* **PercentRange**: [PercentVisibleRange](#percentvisiblerange)

## PercentVisibleRange
### Properties
* **From**: int
* **To**: int

## AxisTickLabelOptions
### Properties
* **LabelOptions**: [LabelOptions](#labeloptions)
* **RotationAngle**: int

## ChartAxisLabelOptions
### Properties
* **AxisLabelOptions**: [AxisLabelOptions](#axislabeloptions)[]
* **SortIconVisibility**: string
* **Visibility**: string

## AxisLabelOptions
### Properties
* **ApplyTo**: [AxisLabelReferenceOptions](#axislabelreferenceoptions)
* **CustomLabel**: string
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)

## AxisLabelReferenceOptions
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)

## ContributionAnalysisDefault
### Properties
* **ContributorDimensions**: [ColumnIdentifier](#columnidentifier)[] (Required)
* **MeasureFieldId**: string (Required)

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
* **Visibility**: string

## DataLabelType
### Properties
* **DataPathLabelType**: [DataPathLabelType](#datapathlabeltype)
* **FieldLabelType**: [FieldLabelType](#fieldlabeltype)
* **MaximumLabelType**: [MaximumLabelType](#maximumlabeltype)
* **MinimumLabelType**: [MinimumLabelType](#minimumlabeltype)
* **RangeEndsLabelType**: [RangeEndsLabelType](#rangeendslabeltype)

## DataPathLabelType
### Properties
* **FieldId**: string
* **FieldValue**: string
* **Visibility**: string

## FieldLabelType
### Properties
* **FieldId**: string
* **Visibility**: string

## MaximumLabelType
### Properties
* **Visibility**: string

## MinimumLabelType
### Properties
* **Visibility**: string

## RangeEndsLabelType
### Properties
* **Visibility**: string

## BarChartFieldWells
### Properties
* **BarChartAggregatedFieldWells**: [BarChartAggregatedFieldWells](#barchartaggregatedfieldwells)

## BarChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Colors**: [DimensionField](#dimensionfield)[]
* **SmallMultiples**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## DimensionField
### Properties
* **CategoricalDimensionField**: [CategoricalDimensionField](#categoricaldimensionfield)
* **DateDimensionField**: [DateDimensionField](#datedimensionfield)
* **NumericalDimensionField**: [NumericalDimensionField](#numericaldimensionfield)

## CategoricalDimensionField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [StringFormatConfiguration](#stringformatconfiguration)
* **HierarchyId**: string

## DateDimensionField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DateGranularity**: string
* **FieldId**: string (Required)
* **FormatConfiguration**: [DateTimeFormatConfiguration](#datetimeformatconfiguration)
* **HierarchyId**: string

## NumericalDimensionField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [NumberFormatConfiguration](#numberformatconfiguration)
* **HierarchyId**: string

## MeasureField
### Properties
* **CalculatedMeasureField**: [CalculatedMeasureField](#calculatedmeasurefield)
* **CategoricalMeasureField**: [CategoricalMeasureField](#categoricalmeasurefield)
* **DateMeasureField**: [DateMeasureField](#datemeasurefield)
* **NumericalMeasureField**: [NumericalMeasureField](#numericalmeasurefield)

## CalculatedMeasureField
### Properties
* **Expression**: string (Required)
* **FieldId**: string (Required)

## CategoricalMeasureField
### Properties
* **AggregationFunction**: string
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [StringFormatConfiguration](#stringformatconfiguration)

## DateMeasureField
### Properties
* **AggregationFunction**: string
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [DateTimeFormatConfiguration](#datetimeformatconfiguration)

## NumericalMeasureField
### Properties
* **AggregationFunction**: [NumericalAggregationFunction](#numericalaggregationfunction)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [NumberFormatConfiguration](#numberformatconfiguration)

## LegendOptions
### Properties
* **Height**: string: String based length that is composed of value and unit in px
* **Position**: string
* **Title**: [LabelOptions](#labeloptions)
* **Visibility**: string
* **Width**: string: String based length that is composed of value and unit in px

## ReferenceLine
### Properties
* **DataConfiguration**: [ReferenceLineDataConfiguration](#referencelinedataconfiguration) (Required)
* **LabelConfiguration**: [ReferenceLineLabelConfiguration](#referencelinelabelconfiguration)
* **Status**: string
* **StyleConfiguration**: [ReferenceLineStyleConfiguration](#referencelinestyleconfiguration)

## ReferenceLineDataConfiguration
### Properties
* **AxisBinding**: string
* **DynamicConfiguration**: [ReferenceLineDynamicDataConfiguration](#referencelinedynamicdataconfiguration)
* **StaticConfiguration**: [ReferenceLineStaticDataConfiguration](#referencelinestaticdataconfiguration)

## ReferenceLineDynamicDataConfiguration
### Properties
* **Calculation**: [NumericalAggregationFunction](#numericalaggregationfunction) (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **MeasureAggregationFunction**: [AggregationFunction](#aggregationfunction) (Required)

## ReferenceLineStaticDataConfiguration
### Properties
* **Value**: int (Required)

## ReferenceLineLabelConfiguration
### Properties
* **CustomLabelConfiguration**: [ReferenceLineCustomLabelConfiguration](#referencelinecustomlabelconfiguration)
* **FontColor**: string
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)
* **HorizontalPosition**: string
* **ValueLabelConfiguration**: [ReferenceLineValueLabelConfiguration](#referencelinevaluelabelconfiguration)
* **VerticalPosition**: string

## ReferenceLineCustomLabelConfiguration
### Properties
* **CustomLabel**: string (Required)

## ReferenceLineValueLabelConfiguration
### Properties
* **FormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)
* **RelativePosition**: string

## ReferenceLineStyleConfiguration
### Properties
* **Color**: string
* **Pattern**: string

## SmallMultiplesOptions
### Properties
* **MaxVisibleColumns**: int
* **MaxVisibleRows**: int
* **PanelConfiguration**: [PanelConfiguration](#panelconfiguration)

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

## BarChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **ColorSort**: [FieldSortOptions](#fieldsortoptions)[]
* **SmallMultiplesLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SmallMultiplesSort**: [FieldSortOptions](#fieldsortoptions)[]

## ItemsLimitConfiguration
### Properties
* **ItemsLimit**: int
* **OtherCategories**: string

## FieldSortOptions
### Properties
* **ColumnSort**: [ColumnSort](#columnsort)
* **FieldSort**: [FieldSort](#fieldsort)

## ColumnSort
### Properties
* **AggregationFunction**: [AggregationFunction](#aggregationfunction)
* **Direction**: string (Required)
* **SortBy**: [ColumnIdentifier](#columnidentifier) (Required)

## FieldSort
### Properties
* **Direction**: string (Required)
* **FieldId**: string (Required)

## TooltipOptions
### Properties
* **FieldBasedTooltip**: [FieldBasedTooltip](#fieldbasedtooltip)
* **SelectedTooltipType**: string
* **TooltipVisibility**: string

## FieldBasedTooltip
### Properties
* **AggregationVisibility**: string
* **TooltipFields**: [TooltipItem](#tooltipitem)[]
* **TooltipTitleType**: string

## TooltipItem
### Properties
* **ColumnTooltipItem**: [ColumnTooltipItem](#columntooltipitem)
* **FieldTooltipItem**: [FieldTooltipItem](#fieldtooltipitem)

## ColumnTooltipItem
### Properties
* **Aggregation**: [AggregationFunction](#aggregationfunction)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **Label**: string
* **Visibility**: string

## FieldTooltipItem
### Properties
* **FieldId**: string (Required)
* **Label**: string
* **Visibility**: string

## VisualPalette
### Properties
* **ChartColor**: string
* **ColorMap**: [DataPathColor](#datapathcolor)[]

## DataPathColor
### Properties
* **Color**: string (Required)
* **Element**: [DataPathValue](#datapathvalue) (Required)
* **TimeGranularity**: string

## DataPathValue
### Properties
* **FieldId**: string (Required)
* **FieldValue**: string (Required)

## ColumnHierarchy
### Properties
* **DateTimeHierarchy**: [DateTimeHierarchy](#datetimehierarchy)
* **ExplicitHierarchy**: [ExplicitHierarchy](#explicithierarchy)
* **PredefinedHierarchy**: [PredefinedHierarchy](#predefinedhierarchy)

## DateTimeHierarchy
### Properties
* **DrillDownFilters**: [DrillDownFilter](#drilldownfilter)[]
* **HierarchyId**: string (Required)

## DrillDownFilter
### Properties
* **CategoryFilter**: [CategoryDrillDownFilter](#categorydrilldownfilter)
* **NumericEqualityFilter**: [NumericEqualityDrillDownFilter](#numericequalitydrilldownfilter)
* **TimeRangeFilter**: [TimeRangeDrillDownFilter](#timerangedrilldownfilter)

## CategoryDrillDownFilter
### Properties
* **CategoryValues**: string[] (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)

## NumericEqualityDrillDownFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **Value**: int (Required)

## TimeRangeDrillDownFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **RangeMaximum**: string (Required)
* **RangeMinimum**: string (Required)
* **TimeGranularity**: string (Required)

## ExplicitHierarchy
### Properties
* **Columns**: [ColumnIdentifier](#columnidentifier)[] (Required)
* **DrillDownFilters**: [DrillDownFilter](#drilldownfilter)[]
* **HierarchyId**: string (Required)

## PredefinedHierarchy
### Properties
* **Columns**: [ColumnIdentifier](#columnidentifier)[] (Required)
* **DrillDownFilters**: [DrillDownFilter](#drilldownfilter)[]
* **HierarchyId**: string (Required)

## VisualSubtitleLabelOptions
### Properties
* **FormatText**: [LongFormatText](#longformattext)
* **Visibility**: string

## LongFormatText
### Properties
* **PlainText**: string
* **RichText**: string

## VisualTitleLabelOptions
### Properties
* **FormatText**: [ShortFormatText](#shortformattext)
* **Visibility**: string

## ShortFormatText
### Properties
* **PlainText**: string
* **RichText**: string

## BoxPlotVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [BoxPlotChartConfiguration](#boxplotchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## BoxPlotOptions
### Properties
* **AllDataPointsVisibility**: string
* **OutlierVisibility**: string
* **StyleOptions**: [BoxPlotStyleOptions](#boxplotstyleoptions)

## BoxPlotStyleOptions
### Properties
* **FillStyle**: string

## BoxPlotFieldWells
### Properties
* **BoxPlotAggregatedFieldWells**: [BoxPlotAggregatedFieldWells](#boxplotaggregatedfieldwells)

## BoxPlotAggregatedFieldWells
### Properties
* **GroupBy**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## BoxPlotSortConfiguration
### Properties
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **PaginationConfiguration**: [PaginationConfiguration](#paginationconfiguration)

## PaginationConfiguration
### Properties
* **PageNumber**: int (Required)
* **PageSize**: int (Required)

## ComboChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [ComboChartConfiguration](#combochartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## ComboChartAggregatedFieldWells
### Properties
* **BarValues**: [MeasureField](#measurefield)[]
* **Category**: [DimensionField](#dimensionfield)[]
* **Colors**: [DimensionField](#dimensionfield)[]
* **LineValues**: [MeasureField](#measurefield)[]

## ComboChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **ColorSort**: [FieldSortOptions](#fieldsortoptions)[]

## CustomContentVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [CustomContentConfiguration](#customcontentconfiguration)
* **DataSetIdentifier**: string (Required)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## CustomContentConfiguration
### Properties
* **ContentType**: string
* **ContentUrl**: string
* **ImageScaling**: string

## EmptyVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **DataSetIdentifier**: string (Required)
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

## FilledMapAggregatedFieldWells
### Properties
* **Geospatial**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## GeospatialMapStyleOptions
### Properties
* **BaseMapStyle**: string

## FilledMapSortConfiguration
### Properties
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## GeospatialWindowOptions
### Properties
* **Bounds**: [GeospatialCoordinateBounds](#geospatialcoordinatebounds)
* **MapZoomMode**: string

## GeospatialCoordinateBounds
### Properties
* **East**: int (Required)
* **North**: int (Required)
* **South**: int (Required)
* **West**: int (Required)

## FilledMapConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [FilledMapConditionalFormattingOption](#filledmapconditionalformattingoption)[] (Required)

## FilledMapConditionalFormattingOption
### Properties
* **Shape**: [FilledMapShapeConditionalFormatting](#filledmapshapeconditionalformatting) (Required)

## FilledMapShapeConditionalFormatting
### Properties
* **FieldId**: string (Required)
* **Format**: [ShapeConditionalFormat](#shapeconditionalformat)

## ShapeConditionalFormat
### Properties
* **BackgroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor) (Required)

## ConditionalFormattingColor
### Properties
* **Gradient**: [ConditionalFormattingGradientColor](#conditionalformattinggradientcolor)
* **Solid**: [ConditionalFormattingSolidColor](#conditionalformattingsolidcolor)

## ConditionalFormattingGradientColor
### Properties
* **Color**: [GradientColor](#gradientcolor) (Required)
* **Expression**: string (Required)

## GradientColor
### Properties
* **Stops**: [GradientStop](#gradientstop)[]

## GradientStop
### Properties
* **Color**: string
* **DataValue**: int
* **GradientOffset**: int (Required)

## ConditionalFormattingSolidColor
### Properties
* **Color**: string
* **Expression**: string (Required)

## FunnelChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [FunnelChartConfiguration](#funnelchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## FunnelChartFieldWells
### Properties
* **FunnelChartAggregatedFieldWells**: [FunnelChartAggregatedFieldWells](#funnelchartaggregatedfieldwells)

## FunnelChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## FunnelChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## GaugeChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [GaugeChartConfiguration](#gaugechartconfiguration)
* **ConditionalFormatting**: [GaugeChartConditionalFormatting](#gaugechartconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## GaugeChartOptions
### Properties
* **Arc**: [ArcConfiguration](#arcconfiguration)
* **ArcAxis**: [ArcAxisConfiguration](#arcaxisconfiguration)
* **Comparison**: [ComparisonConfiguration](#comparisonconfiguration)
* **PrimaryValueDisplayType**: string
* **PrimaryValueFontConfiguration**: [FontConfiguration](#fontconfiguration)

## ArcConfiguration
### Properties
* **ArcAngle**: int
* **ArcThickness**: string

## ArcAxisConfiguration
### Properties
* **Range**: [ArcAxisDisplayRange](#arcaxisdisplayrange)
* **ReserveRange**: int

## ArcAxisDisplayRange
### Properties
* **Max**: int
* **Min**: int

## ComparisonConfiguration
### Properties
* **ComparisonFormat**: [ComparisonFormatConfiguration](#comparisonformatconfiguration)
* **ComparisonMethod**: string

## ComparisonFormatConfiguration
### Properties
* **NumberDisplayFormatConfiguration**: [NumberDisplayFormatConfiguration](#numberdisplayformatconfiguration)
* **PercentageDisplayFormatConfiguration**: [PercentageDisplayFormatConfiguration](#percentagedisplayformatconfiguration)

## GaugeChartConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [GaugeChartConditionalFormattingOption](#gaugechartconditionalformattingoption)[]

## GaugeChartConditionalFormattingOption
### Properties
* **Arc**: [GaugeChartArcConditionalFormatting](#gaugechartarcconditionalformatting)
* **PrimaryValue**: [GaugeChartPrimaryValueConditionalFormatting](#gaugechartprimaryvalueconditionalformatting)

## GaugeChartArcConditionalFormatting
### Properties
* **ForegroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## GaugeChartPrimaryValueConditionalFormatting
### Properties
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## ConditionalFormattingIcon
### Properties
* **CustomCondition**: [ConditionalFormattingCustomIconCondition](#conditionalformattingcustomiconcondition)
* **IconSet**: [ConditionalFormattingIconSet](#conditionalformattingiconset)

## ConditionalFormattingCustomIconCondition
### Properties
* **Color**: string
* **DisplayConfiguration**: [ConditionalFormattingIconDisplayConfiguration](#conditionalformattingicondisplayconfiguration)
* **Expression**: string (Required)
* **IconOptions**: [ConditionalFormattingCustomIconOptions](#conditionalformattingcustomiconoptions) (Required)

## ConditionalFormattingIconDisplayConfiguration
### Properties
* **IconDisplayOption**: string

## ConditionalFormattingCustomIconOptions
### Properties
* **Icon**: string
* **UnicodeIcon**: string

## ConditionalFormattingIconSet
### Properties
* **Expression**: string (Required)
* **IconSetType**: string

## GeospatialMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [GeospatialMapConfiguration](#geospatialmapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## GeospatialMapAggregatedFieldWells
### Properties
* **Colors**: [DimensionField](#dimensionfield)[]
* **Geospatial**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## GeospatialPointStyleOptions
### Properties
* **ClusterMarkerConfiguration**: [ClusterMarkerConfiguration](#clustermarkerconfiguration)
* **SelectedPointStyle**: string

## ClusterMarkerConfiguration
### Properties
* **ClusterMarker**: [ClusterMarker](#clustermarker)

## ClusterMarker
### Properties
* **SimpleClusterMarker**: [SimpleClusterMarker](#simpleclustermarker)

## SimpleClusterMarker
### Properties
* **Color**: string

## HeatMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [HeatMapConfiguration](#heatmapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## ColorScale
### Properties
* **ColorFillType**: string (Required)
* **Colors**: [DataColor](#datacolor)[] (Required)
* **NullValueColor**: [DataColor](#datacolor)

## DataColor
### Properties
* **Color**: string
* **DataValue**: int

## HeatMapFieldWells
### Properties
* **HeatMapAggregatedFieldWells**: [HeatMapAggregatedFieldWells](#heatmapaggregatedfieldwells)

## HeatMapAggregatedFieldWells
### Properties
* **Columns**: [DimensionField](#dimensionfield)[]
* **Rows**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## HeatMapSortConfiguration
### Properties
* **HeatMapColumnItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **HeatMapColumnSort**: [FieldSortOptions](#fieldsortoptions)[]
* **HeatMapRowItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **HeatMapRowSort**: [FieldSortOptions](#fieldsortoptions)[]

## HistogramVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [HistogramConfiguration](#histogramconfiguration)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## HistogramBinOptions
### Properties
* **BinCount**: [BinCountOptions](#bincountoptions)
* **BinWidth**: [BinWidthOptions](#binwidthoptions)
* **SelectedBinType**: string
* **StartValue**: int

## BinCountOptions
### Properties
* **Value**: int

## BinWidthOptions
### Properties
* **BinCountLimit**: int
* **Value**: int

## HistogramFieldWells
### Properties
* **HistogramAggregatedFieldWells**: [HistogramAggregatedFieldWells](#histogramaggregatedfieldwells)

## HistogramAggregatedFieldWells
### Properties
* **Values**: [MeasureField](#measurefield)[]

## InsightVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **DataSetIdentifier**: string (Required)
* **InsightConfiguration**: [InsightConfiguration](#insightconfiguration)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## InsightConfiguration
### Properties
* **Computations**: [Computation](#computation)[]
* **CustomNarrative**: [CustomNarrativeOptions](#customnarrativeoptions)

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
* **Time**: [DimensionField](#dimensionfield) (Required)
* **UpperBoundary**: int
* **Value**: [MeasureField](#measurefield)

## GrowthRateComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **PeriodSize**: int
* **Time**: [DimensionField](#dimensionfield) (Required)
* **Value**: [MeasureField](#measurefield)

## MaximumMinimumComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **Time**: [DimensionField](#dimensionfield) (Required)
* **Type**: string (Required)
* **Value**: [MeasureField](#measurefield)

## MetricComparisonComputation
### Properties
* **ComputationId**: string (Required)
* **FromValue**: [MeasureField](#measurefield) (Required)
* **Name**: string
* **TargetValue**: [MeasureField](#measurefield) (Required)
* **Time**: [DimensionField](#dimensionfield) (Required)

## PeriodOverPeriodComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **Time**: [DimensionField](#dimensionfield) (Required)
* **Value**: [MeasureField](#measurefield)

## PeriodToDateComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **PeriodTimeGranularity**: string
* **Time**: [DimensionField](#dimensionfield) (Required)
* **Value**: [MeasureField](#measurefield)

## TopBottomMoversComputation
### Properties
* **Category**: [DimensionField](#dimensionfield) (Required)
* **ComputationId**: string (Required)
* **MoverSize**: int
* **Name**: string
* **SortOrder**: string
* **Time**: [DimensionField](#dimensionfield) (Required)
* **Type**: string (Required)
* **Value**: [MeasureField](#measurefield)

## TopBottomRankedComputation
### Properties
* **Category**: [DimensionField](#dimensionfield) (Required)
* **ComputationId**: string (Required)
* **Name**: string
* **ResultSize**: int
* **Type**: string (Required)
* **Value**: [MeasureField](#measurefield)

## TotalAggregationComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **Value**: [MeasureField](#measurefield) (Required)

## UniqueValuesComputation
### Properties
* **Category**: [DimensionField](#dimensionfield) (Required)
* **ComputationId**: string (Required)
* **Name**: string

## CustomNarrativeOptions
### Properties
* **Narrative**: string (Required)

## KPIVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [KPIConfiguration](#kpiconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **ConditionalFormatting**: [KPIConditionalFormatting](#kpiconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## KPIOptions
### Properties
* **Comparison**: [ComparisonConfiguration](#comparisonconfiguration)
* **PrimaryValueDisplayType**: string
* **PrimaryValueFontConfiguration**: [FontConfiguration](#fontconfiguration)
* **ProgressBar**: [ProgressBarOptions](#progressbaroptions)
* **SecondaryValue**: [SecondaryValueOptions](#secondaryvalueoptions)
* **SecondaryValueFontConfiguration**: [FontConfiguration](#fontconfiguration)
* **TrendArrows**: [TrendArrowOptions](#trendarrowoptions)

## ProgressBarOptions
### Properties
* **Visibility**: string

## SecondaryValueOptions
### Properties
* **Visibility**: string

## TrendArrowOptions
### Properties
* **Visibility**: string

## KPISortConfiguration
### Properties
* **TrendGroupSort**: [FieldSortOptions](#fieldsortoptions)[]

## KPIConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [KPIConditionalFormattingOption](#kpiconditionalformattingoption)[]

## KPIConditionalFormattingOption
### Properties
* **PrimaryValue**: [KPIPrimaryValueConditionalFormatting](#kpiprimaryvalueconditionalformatting)
* **ProgressBar**: [KPIProgressBarConditionalFormatting](#kpiprogressbarconditionalformatting)

## KPIPrimaryValueConditionalFormatting
### Properties
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## KPIProgressBarConditionalFormatting
### Properties
* **ForegroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## LineChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [LineChartConfiguration](#linechartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## LineChartFieldWells
### Properties
* **LineChartAggregatedFieldWells**: [LineChartAggregatedFieldWells](#linechartaggregatedfieldwells)

## LineChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Colors**: [DimensionField](#dimensionfield)[]
* **SmallMultiples**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## ForecastConfiguration
### Properties
* **ForecastProperties**: [TimeBasedForecastProperties](#timebasedforecastproperties)
* **Scenario**: [ForecastScenario](#forecastscenario)

## TimeBasedForecastProperties
### Properties
* **LowerBoundary**: int
* **PeriodsBackward**: int
* **PeriodsForward**: int
* **PredictionInterval**: int
* **Seasonality**: int
* **UpperBoundary**: int

## ForecastScenario
### Properties
* **WhatIfPointScenario**: [WhatIfPointScenario](#whatifpointscenario)
* **WhatIfRangeScenario**: [WhatIfRangeScenario](#whatifrangescenario)

## WhatIfPointScenario
### Properties
* **Date**: string (Required)
* **Value**: int (Required)

## WhatIfRangeScenario
### Properties
* **EndDate**: string (Required)
* **StartDate**: string (Required)
* **Value**: int (Required)

## LineSeriesAxisDisplayOptions
### Properties
* **AxisOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **MissingDataConfigurations**: [MissingDataConfiguration](#missingdataconfiguration)[]

## MissingDataConfiguration
### Properties
* **TreatmentOption**: string

## SeriesItem
### Properties
* **DataFieldSeriesItem**: [DataFieldSeriesItem](#datafieldseriesitem)
* **FieldSeriesItem**: [FieldSeriesItem](#fieldseriesitem)

## DataFieldSeriesItem
### Properties
* **AxisBinding**: string (Required)
* **FieldId**: string (Required)
* **FieldValue**: string
* **Settings**: [LineChartSeriesSettings](#linechartseriessettings)

## LineChartSeriesSettings
### Properties
* **LineStyleSettings**: [LineChartLineStyleSettings](#linechartlinestylesettings)
* **MarkerStyleSettings**: [LineChartMarkerStyleSettings](#linechartmarkerstylesettings)

## FieldSeriesItem
### Properties
* **AxisBinding**: string (Required)
* **FieldId**: string (Required)
* **Settings**: [LineChartSeriesSettings](#linechartseriessettings)

## LineChartSortConfiguration
### Properties
* **CategoryItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
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

## DonutOptions
### Properties
* **ArcOptions**: [ArcOptions](#arcoptions)
* **DonutCenterOptions**: [DonutCenterOptions](#donutcenteroptions)

## ArcOptions
### Properties
* **ArcThickness**: string

## DonutCenterOptions
### Properties
* **LabelVisibility**: string

## PieChartFieldWells
### Properties
* **PieChartAggregatedFieldWells**: [PieChartAggregatedFieldWells](#piechartaggregatedfieldwells)

## PieChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **SmallMultiples**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## PieChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **SmallMultiplesLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SmallMultiplesSort**: [FieldSortOptions](#fieldsortoptions)[]

## PivotTableVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [PivotTableConfiguration](#pivottableconfiguration)
* **ConditionalFormatting**: [PivotTableConditionalFormatting](#pivottableconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## PivotTableConfiguration
### Properties
* **FieldOptions**: [PivotTableFieldOptions](#pivottablefieldoptions)
* **FieldWells**: [PivotTableFieldWells](#pivottablefieldwells)
* **PaginatedReportOptions**: [PivotTablePaginatedReportOptions](#pivottablepaginatedreportoptions)
* **SortConfiguration**: [PivotTableSortConfiguration](#pivottablesortconfiguration)
* **TableOptions**: [PivotTableOptions](#pivottableoptions)
* **TotalOptions**: [PivotTableTotalOptions](#pivottabletotaloptions)

## PivotTableFieldOptions
### Properties
* **DataPathOptions**: [PivotTableDataPathOption](#pivottabledatapathoption)[]
* **SelectedFieldOptions**: [PivotTableFieldOption](#pivottablefieldoption)[]

## PivotTableDataPathOption
### Properties
* **DataPathList**: [DataPathValue](#datapathvalue)[] (Required)
* **Width**: string: String based length that is composed of value and unit in px

## PivotTableFieldOption
### Properties
* **CustomLabel**: string
* **FieldId**: string (Required)
* **Visibility**: string

## PivotTableFieldWells
### Properties
* **PivotTableAggregatedFieldWells**: [PivotTableAggregatedFieldWells](#pivottableaggregatedfieldwells)

## PivotTableAggregatedFieldWells
### Properties
* **Columns**: [DimensionField](#dimensionfield)[]
* **Rows**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## PivotTablePaginatedReportOptions
### Properties
* **OverflowColumnHeaderVisibility**: string
* **VerticalOverflowVisibility**: string

## PivotTableSortConfiguration
### Properties
* **FieldSortOptions**: [PivotFieldSortOptions](#pivotfieldsortoptions)[]

## PivotFieldSortOptions
### Properties
* **FieldId**: string (Required)
* **SortBy**: [PivotTableSortBy](#pivottablesortby) (Required)

## PivotTableSortBy
### Properties
* **Column**: [ColumnSort](#columnsort)
* **DataPath**: [DataPathSort](#datapathsort)
* **Field**: [FieldSort](#fieldsort)

## DataPathSort
### Properties
* **Direction**: string (Required)
* **SortPaths**: [DataPathValue](#datapathvalue)[] (Required)

## PivotTableOptions
### Properties
* **CellStyle**: [TableCellStyle](#tablecellstyle)
* **ColumnHeaderStyle**: [TableCellStyle](#tablecellstyle)
* **ColumnNamesVisibility**: string
* **MetricPlacement**: string
* **RowAlternateColorOptions**: [RowAlternateColorOptions](#rowalternatecoloroptions)
* **RowFieldNamesStyle**: [TableCellStyle](#tablecellstyle)
* **RowHeaderStyle**: [TableCellStyle](#tablecellstyle)
* **SingleMetricVisibility**: string
* **ToggleButtonsVisibility**: string

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

## GlobalTableBorderOptions
### Properties
* **SideSpecificBorder**: [TableSideBorderOptions](#tablesideborderoptions)
* **UniformBorder**: [TableBorderOptions](#tableborderoptions)

## TableSideBorderOptions
### Properties
* **Bottom**: [TableBorderOptions](#tableborderoptions)
* **InnerHorizontal**: [TableBorderOptions](#tableborderoptions)
* **InnerVertical**: [TableBorderOptions](#tableborderoptions)
* **Left**: [TableBorderOptions](#tableborderoptions)
* **Right**: [TableBorderOptions](#tableborderoptions)
* **Top**: [TableBorderOptions](#tableborderoptions)

## TableBorderOptions
### Properties
* **Color**: string
* **Style**: string
* **Thickness**: int

## RowAlternateColorOptions
### Properties
* **RowAlternateColors**: string[]
* **Status**: string

## PivotTableTotalOptions
### Properties
* **ColumnSubtotalOptions**: [SubtotalOptions](#subtotaloptions)
* **ColumnTotalOptions**: [PivotTotalOptions](#pivottotaloptions)
* **RowSubtotalOptions**: [SubtotalOptions](#subtotaloptions)
* **RowTotalOptions**: [PivotTotalOptions](#pivottotaloptions)

## SubtotalOptions
### Properties
* **CustomLabel**: string
* **FieldLevel**: string
* **FieldLevelOptions**: [PivotTableFieldSubtotalOptions](#pivottablefieldsubtotaloptions)[]
* **MetricHeaderCellStyle**: [TableCellStyle](#tablecellstyle)
* **TotalCellStyle**: [TableCellStyle](#tablecellstyle)
* **TotalsVisibility**: string
* **ValueCellStyle**: [TableCellStyle](#tablecellstyle)

## PivotTableFieldSubtotalOptions
### Properties
* **FieldId**: string

## PivotTotalOptions
### Properties
* **CustomLabel**: string
* **MetricHeaderCellStyle**: [TableCellStyle](#tablecellstyle)
* **Placement**: string
* **ScrollStatus**: string
* **TotalCellStyle**: [TableCellStyle](#tablecellstyle)
* **TotalsVisibility**: string
* **ValueCellStyle**: [TableCellStyle](#tablecellstyle)

## PivotTableConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [PivotTableConditionalFormattingOption](#pivottableconditionalformattingoption)[]

## PivotTableConditionalFormattingOption
### Properties
* **Cell**: [PivotTableCellConditionalFormatting](#pivottablecellconditionalformatting)

## PivotTableCellConditionalFormatting
### Properties
* **FieldId**: string (Required)
* **Scope**: [PivotTableConditionalFormattingScope](#pivottableconditionalformattingscope)
* **TextFormat**: [TextConditionalFormat](#textconditionalformat)

## PivotTableConditionalFormattingScope
### Properties
* **Role**: string

## TextConditionalFormat
### Properties
* **BackgroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## RadarChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [RadarChartConfiguration](#radarchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## RadarChartConfiguration
### Properties
* **AlternateBandColorsVisibility**: string
* **AlternateBandEvenColor**: string
* **AlternateBandOddColor**: string
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

## RadarChartSeriesSettings
### Properties
* **AreaStyleSettings**: [RadarChartAreaStyleSettings](#radarchartareastylesettings)

## RadarChartAreaStyleSettings
### Properties
* **Visibility**: string

## RadarChartFieldWells
### Properties
* **RadarChartAggregatedFieldWells**: [RadarChartAggregatedFieldWells](#radarchartaggregatedfieldwells)

## RadarChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Color**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## RadarChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **ColorSort**: [FieldSortOptions](#fieldsortoptions)[]

## SankeyDiagramVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [SankeyDiagramChartConfiguration](#sankeydiagramchartconfiguration)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## SankeyDiagramChartConfiguration
### Properties
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [SankeyDiagramFieldWells](#sankeydiagramfieldwells)
* **SortConfiguration**: [SankeyDiagramSortConfiguration](#sankeydiagramsortconfiguration)

## SankeyDiagramFieldWells
### Properties
* **SankeyDiagramAggregatedFieldWells**: [SankeyDiagramAggregatedFieldWells](#sankeydiagramaggregatedfieldwells)

## SankeyDiagramAggregatedFieldWells
### Properties
* **Destination**: [DimensionField](#dimensionfield)[]
* **Source**: [DimensionField](#dimensionfield)[]
* **Weight**: [MeasureField](#measurefield)[]

## SankeyDiagramSortConfiguration
### Properties
* **DestinationItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SourceItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **WeightSort**: [FieldSortOptions](#fieldsortoptions)[]

## ScatterPlotVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [ScatterPlotConfiguration](#scatterplotconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## ScatterPlotCategoricallyAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Size**: [MeasureField](#measurefield)[]
* **XAxis**: [MeasureField](#measurefield)[]
* **YAxis**: [MeasureField](#measurefield)[]

## ScatterPlotUnaggregatedFieldWells
### Properties
* **Size**: [MeasureField](#measurefield)[]
* **XAxis**: [DimensionField](#dimensionfield)[]
* **YAxis**: [DimensionField](#dimensionfield)[]

## TableVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [TableConfiguration](#tableconfiguration)
* **ConditionalFormatting**: [TableConditionalFormatting](#tableconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## TableConfiguration
### Properties
* **FieldOptions**: [TableFieldOptions](#tablefieldoptions)
* **FieldWells**: [TableFieldWells](#tablefieldwells)
* **PaginatedReportOptions**: [TablePaginatedReportOptions](#tablepaginatedreportoptions)
* **SortConfiguration**: [TableSortConfiguration](#tablesortconfiguration)
* **TableInlineVisualizations**: [TableInlineVisualization](#tableinlinevisualization)[]
* **TableOptions**: [TableOptions](#tableoptions)
* **TotalOptions**: [TotalOptions](#totaloptions)

## TableFieldOptions
### Properties
* **Order**: string[]
* **SelectedFieldOptions**: [TableFieldOption](#tablefieldoption)[]

## TableFieldOption
### Properties
* **CustomLabel**: string
* **FieldId**: string (Required)
* **URLStyling**: [TableFieldURLConfiguration](#tablefieldurlconfiguration)
* **Visibility**: string
* **Width**: string: String based length that is composed of value and unit in px

## TableFieldURLConfiguration
### Properties
* **ImageConfiguration**: [TableFieldImageConfiguration](#tablefieldimageconfiguration)
* **LinkConfiguration**: [TableFieldLinkConfiguration](#tablefieldlinkconfiguration)

## TableFieldImageConfiguration
### Properties
* **SizingOptions**: [TableCellImageSizingConfiguration](#tablecellimagesizingconfiguration)

## TableCellImageSizingConfiguration
### Properties
* **TableCellImageScalingConfiguration**: string

## TableFieldLinkConfiguration
### Properties
* **Content**: [TableFieldLinkContentConfiguration](#tablefieldlinkcontentconfiguration) (Required)
* **Target**: string (Required)

## TableFieldLinkContentConfiguration
### Properties
* **CustomIconContent**: [TableFieldCustomIconContent](#tablefieldcustomiconcontent)
* **CustomTextContent**: [TableFieldCustomTextContent](#tablefieldcustomtextcontent)

## TableFieldCustomIconContent
### Properties
* **Icon**: string

## TableFieldCustomTextContent
### Properties
* **FontConfiguration**: [FontConfiguration](#fontconfiguration) (Required)
* **Value**: string

## TableFieldWells
### Properties
* **TableAggregatedFieldWells**: [TableAggregatedFieldWells](#tableaggregatedfieldwells)
* **TableUnaggregatedFieldWells**: [TableUnaggregatedFieldWells](#tableunaggregatedfieldwells)

## TableAggregatedFieldWells
### Properties
* **GroupBy**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## TableUnaggregatedFieldWells
### Properties
* **Values**: [UnaggregatedField](#unaggregatedfield)[]

## UnaggregatedField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [FormatConfiguration](#formatconfiguration)

## TablePaginatedReportOptions
### Properties
* **OverflowColumnHeaderVisibility**: string
* **VerticalOverflowVisibility**: string

## TableSortConfiguration
### Properties
* **PaginationConfiguration**: [PaginationConfiguration](#paginationconfiguration)
* **RowSort**: [FieldSortOptions](#fieldsortoptions)[]

## TableInlineVisualization
### Properties
* **DataBars**: [DataBarsOptions](#databarsoptions)

## DataBarsOptions
### Properties
* **FieldId**: string (Required)
* **NegativeColor**: string
* **PositiveColor**: string

## TableOptions
### Properties
* **CellStyle**: [TableCellStyle](#tablecellstyle)
* **HeaderStyle**: [TableCellStyle](#tablecellstyle)
* **Orientation**: string
* **RowAlternateColorOptions**: [RowAlternateColorOptions](#rowalternatecoloroptions)

## TotalOptions
### Properties
* **CustomLabel**: string
* **Placement**: string
* **ScrollStatus**: string
* **TotalCellStyle**: [TableCellStyle](#tablecellstyle)
* **TotalsVisibility**: string

## TableConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [TableConditionalFormattingOption](#tableconditionalformattingoption)[]

## TableConditionalFormattingOption
### Properties
* **Cell**: [TableCellConditionalFormatting](#tablecellconditionalformatting)
* **Row**: [TableRowConditionalFormatting](#tablerowconditionalformatting)

## TableCellConditionalFormatting
### Properties
* **FieldId**: string (Required)
* **TextFormat**: [TextConditionalFormat](#textconditionalformat)

## TableRowConditionalFormatting
### Properties
* **BackgroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## TreeMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [TreeMapConfiguration](#treemapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## TreeMapAggregatedFieldWells
### Properties
* **Colors**: [MeasureField](#measurefield)[]
* **Groups**: [DimensionField](#dimensionfield)[]
* **Sizes**: [MeasureField](#measurefield)[]

## TreeMapSortConfiguration
### Properties
* **TreeMapGroupItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **TreeMapSort**: [FieldSortOptions](#fieldsortoptions)[]

## WaterfallVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [WaterfallChartConfiguration](#waterfallchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## WaterfallChartAggregatedFieldWells
### Properties
* **Breakdowns**: [DimensionField](#dimensionfield)[]
* **Categories**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## WaterfallChartSortConfiguration
### Properties
* **BreakdownItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## WaterfallChartOptions
### Properties
* **TotalBarLabel**: string

## WordCloudVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [WordCloudChartConfiguration](#wordcloudchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## WordCloudChartConfiguration
### Properties
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **FieldWells**: [WordCloudFieldWells](#wordcloudfieldwells)
* **SortConfiguration**: [WordCloudSortConfiguration](#wordcloudsortconfiguration)
* **WordCloudOptions**: [WordCloudOptions](#wordcloudoptions)

## WordCloudFieldWells
### Properties
* **WordCloudAggregatedFieldWells**: [WordCloudAggregatedFieldWells](#wordcloudaggregatedfieldwells)

## WordCloudAggregatedFieldWells
### Properties
* **GroupBy**: [DimensionField](#dimensionfield)[]
* **Size**: [MeasureField](#measurefield)[]

## WordCloudSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## WordCloudOptions
### Properties
* **CloudLayout**: string
* **MaximumStringLength**: int
* **WordCasing**: string
* **WordOrientation**: string
* **WordPadding**: string
* **WordScaling**: string

## AnalysisError
### Properties
* **Message**: string
* **Type**: string
* **ViolatedEntities**: [Entity](#entity)[]

## Entity
### Properties
* **Path**: string

## Parameters
### Properties
* **DateTimeParameters**: [DateTimeParameter](#datetimeparameter)[]
* **DecimalParameters**: [DecimalParameter](#decimalparameter)[]
* **IntegerParameters**: [IntegerParameter](#integerparameter)[]
* **StringParameters**: [StringParameter](#stringparameter)[]

## DateTimeParameter
### Properties
* **Name**: string (Required)
* **Values**: string[] (Required)

## DecimalParameter
### Properties
* **Name**: string (Required)
* **Values**: int[] (Required)

## IntegerParameter
### Properties
* **Name**: string (Required)
* **Values**: int[] (Required)

## StringParameter
### Properties
* **Name**: string (Required)
* **Values**: string[] (Required)

## ResourcePermission
### Properties
* **Actions**: string[] (Required)
* **Principal**: string (Required)
* **Resource**: string

## Sheet
### Properties
* **Name**: string
* **SheetId**: string

## AnalysisSourceEntity
### Properties
* **SourceTemplate**: [AnalysisSourceTemplate](#analysissourcetemplate)

## AnalysisSourceTemplate
### Properties
* **Arn**: string (Required)
* **DataSetReferences**: [DataSetReference](#datasetreference)[] (Required)

## DataSetReference
### Properties
* **DataSetArn**: string (Required)
* **DataSetPlaceholder**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.QuickSight/DashboardProperties
### Properties
* **Arn**: string (ReadOnly)
* **AwsAccountId**: string (Required, Identifier)
* **CreatedTime**: string (ReadOnly, WriteOnly)
* **DashboardId**: string (Required, Identifier)
* **DashboardPublishOptions**: [DashboardPublishOptions](#dashboardpublishoptions) (WriteOnly)
* **Definition**: [DashboardVersionDefinition](#dashboardversiondefinition) (WriteOnly)
* **LastPublishedTime**: string (ReadOnly)
* **LastUpdatedTime**: string (ReadOnly, WriteOnly)
* **Name**: string (Required)
* **Parameters**: [Parameters](#parameters) (WriteOnly)
* **Permissions**: [ResourcePermission](#resourcepermission)[]
* **SourceEntity**: [DashboardSourceEntity](#dashboardsourceentity) (WriteOnly)
* **Tags**: [Tag](#tag)[]
* **ThemeArn**: string (WriteOnly)
* **Version**: [DashboardVersion](#dashboardversion) (ReadOnly)
* **VersionDescription**: string (WriteOnly)

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

## AdHocFilteringOption
### Properties
* **AvailabilityStatus**: string

## DataPointDrillUpDownOption
### Properties
* **AvailabilityStatus**: string

## DataPointMenuLabelOption
### Properties
* **AvailabilityStatus**: string

## DataPointTooltipOption
### Properties
* **AvailabilityStatus**: string

## ExportToCSVOption
### Properties
* **AvailabilityStatus**: string

## ExportWithHiddenFieldsOption
### Properties
* **AvailabilityStatus**: string

## SheetControlsOption
### Properties
* **VisibilityState**: string

## SheetLayoutElementMaximizationOption
### Properties
* **AvailabilityStatus**: string

## VisualAxisSortOption
### Properties
* **AvailabilityStatus**: string

## VisualMenuOption
### Properties
* **AvailabilityStatus**: string

## DashboardVisualPublishOptions
### Properties
* **ExportHiddenFieldsOption**: [ExportHiddenFieldsOption](#exporthiddenfieldsoption)

## ExportHiddenFieldsOption
### Properties
* **AvailabilityStatus**: string

## DashboardVersionDefinition
### Properties
* **AnalysisDefaults**: [AnalysisDefaults](#analysisdefaults)
* **CalculatedFields**: [CalculatedField](#calculatedfield)[]
* **ColumnConfigurations**: [ColumnConfiguration](#columnconfiguration)[]
* **DataSetIdentifierDeclarations**: [DataSetIdentifierDeclaration](#datasetidentifierdeclaration)[] (Required)
* **FilterGroups**: [FilterGroup](#filtergroup)[]
* **ParameterDeclarations**: [ParameterDeclaration](#parameterdeclaration)[]
* **Sheets**: [SheetDefinition](#sheetdefinition)[]

## AnalysisDefaults
### Properties
* **DefaultNewSheetConfiguration**: [DefaultNewSheetConfiguration](#defaultnewsheetconfiguration) (Required)

## DefaultNewSheetConfiguration
### Properties
* **InteractiveLayoutConfiguration**: [DefaultInteractiveLayoutConfiguration](#defaultinteractivelayoutconfiguration)
* **PaginatedLayoutConfiguration**: [DefaultPaginatedLayoutConfiguration](#defaultpaginatedlayoutconfiguration)
* **SheetContentType**: string

## DefaultInteractiveLayoutConfiguration
### Properties
* **FreeForm**: [DefaultFreeFormLayoutConfiguration](#defaultfreeformlayoutconfiguration)
* **Grid**: [DefaultGridLayoutConfiguration](#defaultgridlayoutconfiguration)

## DefaultFreeFormLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [FreeFormLayoutCanvasSizeOptions](#freeformlayoutcanvassizeoptions) (Required)

## FreeFormLayoutCanvasSizeOptions
### Properties
* **ScreenCanvasSizeOptions**: [FreeFormLayoutScreenCanvasSizeOptions](#freeformlayoutscreencanvassizeoptions)

## FreeFormLayoutScreenCanvasSizeOptions
### Properties
* **OptimizedViewPortWidth**: string (Required): String based length that is composed of value and unit in px

## DefaultGridLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [GridLayoutCanvasSizeOptions](#gridlayoutcanvassizeoptions) (Required)

## GridLayoutCanvasSizeOptions
### Properties
* **ScreenCanvasSizeOptions**: [GridLayoutScreenCanvasSizeOptions](#gridlayoutscreencanvassizeoptions)

## GridLayoutScreenCanvasSizeOptions
### Properties
* **OptimizedViewPortWidth**: string: String based length that is composed of value and unit in px
* **ResizeOption**: string (Required)

## DefaultPaginatedLayoutConfiguration
### Properties
* **SectionBased**: [DefaultSectionBasedLayoutConfiguration](#defaultsectionbasedlayoutconfiguration)

## DefaultSectionBasedLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [SectionBasedLayoutCanvasSizeOptions](#sectionbasedlayoutcanvassizeoptions) (Required)

## SectionBasedLayoutCanvasSizeOptions
### Properties
* **PaperCanvasSizeOptions**: [SectionBasedLayoutPaperCanvasSizeOptions](#sectionbasedlayoutpapercanvassizeoptions)

## SectionBasedLayoutPaperCanvasSizeOptions
### Properties
* **PaperMargin**: [Spacing](#spacing)
* **PaperOrientation**: string
* **PaperSize**: string

## Spacing
### Properties
* **Bottom**: string: String based length that is composed of value and unit
* **Left**: string: String based length that is composed of value and unit
* **Right**: string: String based length that is composed of value and unit
* **Top**: string: String based length that is composed of value and unit

## CalculatedField
### Properties
* **DataSetIdentifier**: string (Required)
* **Expression**: string (Required)
* **Name**: string (Required)

## ColumnConfiguration
### Properties
* **ColorsConfiguration**: [ColorsConfiguration](#colorsconfiguration)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FormatConfiguration**: [FormatConfiguration](#formatconfiguration)
* **Role**: string

## ColorsConfiguration
### Properties
* **CustomColors**: [CustomColor](#customcolor)[]

## CustomColor
### Properties
* **Color**: string (Required)
* **FieldValue**: string
* **SpecialValue**: string

## ColumnIdentifier
### Properties
* **ColumnName**: string (Required)
* **DataSetIdentifier**: string (Required)

## FormatConfiguration
### Properties
* **DateTimeFormatConfiguration**: [DateTimeFormatConfiguration](#datetimeformatconfiguration)
* **NumberFormatConfiguration**: [NumberFormatConfiguration](#numberformatconfiguration)
* **StringFormatConfiguration**: [StringFormatConfiguration](#stringformatconfiguration)

## DateTimeFormatConfiguration
### Properties
* **DateTimeFormat**: string
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **NumericFormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)

## NullValueFormatConfiguration
### Properties
* **NullString**: string (Required)

## NumericFormatConfiguration
### Properties
* **CurrencyDisplayFormatConfiguration**: [CurrencyDisplayFormatConfiguration](#currencydisplayformatconfiguration)
* **NumberDisplayFormatConfiguration**: [NumberDisplayFormatConfiguration](#numberdisplayformatconfiguration)
* **PercentageDisplayFormatConfiguration**: [PercentageDisplayFormatConfiguration](#percentagedisplayformatconfiguration)

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

## DecimalPlacesConfiguration
### Properties
* **DecimalPlaces**: int (Required)

## NegativeValueConfiguration
### Properties
* **DisplayMode**: string (Required)

## NumericSeparatorConfiguration
### Properties
* **DecimalSeparator**: string
* **ThousandsSeparator**: [ThousandSeparatorOptions](#thousandseparatoroptions)

## ThousandSeparatorOptions
### Properties
* **Symbol**: string
* **Visibility**: string

## NumberDisplayFormatConfiguration
### Properties
* **DecimalPlacesConfiguration**: [DecimalPlacesConfiguration](#decimalplacesconfiguration)
* **NegativeValueConfiguration**: [NegativeValueConfiguration](#negativevalueconfiguration)
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **NumberScale**: string
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

## NumberFormatConfiguration
### Properties
* **FormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)

## StringFormatConfiguration
### Properties
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **NumericFormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)

## DataSetIdentifierDeclaration
### Properties
* **DataSetArn**: string (Required)
* **Identifier**: string (Required)

## FilterGroup
### Properties
* **CrossDataset**: string (Required)
* **FilterGroupId**: string (Required)
* **Filters**: [Filter](#filter)[] (Required)
* **ScopeConfiguration**: [FilterScopeConfiguration](#filterscopeconfiguration) (Required)
* **Status**: string

## Filter
### Properties
* **CategoryFilter**: [CategoryFilter](#categoryfilter)
* **NumericEqualityFilter**: [NumericEqualityFilter](#numericequalityfilter)
* **NumericRangeFilter**: [NumericRangeFilter](#numericrangefilter)
* **RelativeDatesFilter**: [RelativeDatesFilter](#relativedatesfilter)
* **TimeEqualityFilter**: [TimeEqualityFilter](#timeequalityfilter)
* **TimeRangeFilter**: [TimeRangeFilter](#timerangefilter)
* **TopBottomFilter**: [TopBottomFilter](#topbottomfilter)

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

## FilterListConfiguration
### Properties
* **CategoryValues**: string[]
* **MatchOperator**: string (Required)
* **SelectAllOptions**: string

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

## AggregationFunction
### Properties
* **CategoricalAggregationFunction**: string
* **DateAggregationFunction**: string
* **NumericalAggregationFunction**: [NumericalAggregationFunction](#numericalaggregationfunction)

## NumericalAggregationFunction
### Properties
* **PercentileAggregation**: [PercentileAggregation](#percentileaggregation)
* **SimpleNumericalAggregation**: string

## PercentileAggregation
### Properties
* **PercentileValue**: int

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

## AnchorDateConfiguration
### Properties
* **AnchorOption**: string
* **ParameterName**: string

## ExcludePeriodConfiguration
### Properties
* **Amount**: int (Required)
* **Granularity**: string (Required)
* **Status**: string

## TimeEqualityFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FilterId**: string (Required)
* **ParameterName**: string
* **TimeGranularity**: string
* **Value**: string

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

## RollingDateConfiguration
### Properties
* **DataSetIdentifier**: string
* **Expression**: string (Required)

## TopBottomFilter
### Properties
* **AggregationSortConfigurations**: [AggregationSortConfiguration](#aggregationsortconfiguration)[] (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FilterId**: string (Required)
* **Limit**: int
* **ParameterName**: string
* **TimeGranularity**: string

## AggregationSortConfiguration
### Properties
* **AggregationFunction**: [AggregationFunction](#aggregationfunction) (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **SortDirection**: string (Required)

## FilterScopeConfiguration
### Properties
* **SelectedSheets**: [SelectedSheetsFilterScopeConfiguration](#selectedsheetsfilterscopeconfiguration)

## SelectedSheetsFilterScopeConfiguration
### Properties
* **SheetVisualScopingConfigurations**: [SheetVisualScopingConfiguration](#sheetvisualscopingconfiguration)[]

## SheetVisualScopingConfiguration
### Properties
* **Scope**: string (Required)
* **SheetId**: string (Required)
* **VisualIds**: string[]

## ParameterDeclaration
### Properties
* **DateTimeParameterDeclaration**: [DateTimeParameterDeclaration](#datetimeparameterdeclaration)
* **DecimalParameterDeclaration**: [DecimalParameterDeclaration](#decimalparameterdeclaration)
* **IntegerParameterDeclaration**: [IntegerParameterDeclaration](#integerparameterdeclaration)
* **StringParameterDeclaration**: [StringParameterDeclaration](#stringparameterdeclaration)

## DateTimeParameterDeclaration
### Properties
* **DefaultValues**: [DateTimeDefaultValues](#datetimedefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **TimeGranularity**: string
* **ValueWhenUnset**: [DateTimeValueWhenUnsetConfiguration](#datetimevaluewhenunsetconfiguration)

## DateTimeDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **RollingDate**: [RollingDateConfiguration](#rollingdateconfiguration)
* **StaticValues**: string[]

## DynamicDefaultValue
### Properties
* **DefaultValueColumn**: [ColumnIdentifier](#columnidentifier) (Required)
* **GroupNameColumn**: [ColumnIdentifier](#columnidentifier)
* **UserNameColumn**: [ColumnIdentifier](#columnidentifier)

## MappedDataSetParameter
### Properties
* **DataSetIdentifier**: string (Required)
* **DataSetParameterName**: string (Required)

## DateTimeValueWhenUnsetConfiguration
### Properties
* **CustomValue**: string
* **ValueWhenUnsetOption**: string

## DecimalParameterDeclaration
### Properties
* **DefaultValues**: [DecimalDefaultValues](#decimaldefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **ParameterValueType**: string (Required)
* **ValueWhenUnset**: [DecimalValueWhenUnsetConfiguration](#decimalvaluewhenunsetconfiguration)

## DecimalDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **StaticValues**: int[]

## DecimalValueWhenUnsetConfiguration
### Properties
* **CustomValue**: int
* **ValueWhenUnsetOption**: string

## IntegerParameterDeclaration
### Properties
* **DefaultValues**: [IntegerDefaultValues](#integerdefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **ParameterValueType**: string (Required)
* **ValueWhenUnset**: [IntegerValueWhenUnsetConfiguration](#integervaluewhenunsetconfiguration)

## IntegerDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **StaticValues**: int[]

## IntegerValueWhenUnsetConfiguration
### Properties
* **CustomValue**: int
* **ValueWhenUnsetOption**: string

## StringParameterDeclaration
### Properties
* **DefaultValues**: [StringDefaultValues](#stringdefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **ParameterValueType**: string (Required)
* **ValueWhenUnset**: [StringValueWhenUnsetConfiguration](#stringvaluewhenunsetconfiguration)

## StringDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **StaticValues**: string[]

## StringValueWhenUnsetConfiguration
### Properties
* **CustomValue**: string
* **ValueWhenUnsetOption**: string

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

## DateTimePickerControlDisplayOptions
### Properties
* **DateTimeFormat**: string
* **TitleOptions**: [LabelOptions](#labeloptions)

## LabelOptions
### Properties
* **CustomLabel**: string
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)
* **Visibility**: string

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

## FontWeight
### Properties
* **Name**: string

## FilterDropDownControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **DisplayOptions**: [DropDownControlDisplayOptions](#dropdowncontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SelectableValues**: [FilterSelectableValues](#filterselectablevalues)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)
* **Type**: string

## CascadingControlConfiguration
### Properties
* **SourceControls**: [CascadingControlSource](#cascadingcontrolsource)[]

## CascadingControlSource
### Properties
* **ColumnToMatch**: [ColumnIdentifier](#columnidentifier)
* **SourceSheetControlId**: string

## DropDownControlDisplayOptions
### Properties
* **SelectAllOptions**: [ListControlSelectAllOptions](#listcontrolselectalloptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## ListControlSelectAllOptions
### Properties
* **Visibility**: string

## FilterSelectableValues
### Properties
* **Values**: string[]

## FilterListControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **DisplayOptions**: [ListControlDisplayOptions](#listcontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SelectableValues**: [FilterSelectableValues](#filterselectablevalues)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)
* **Type**: string

## ListControlDisplayOptions
### Properties
* **SearchOptions**: [ListControlSearchOptions](#listcontrolsearchoptions)
* **SelectAllOptions**: [ListControlSelectAllOptions](#listcontrolselectalloptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## ListControlSearchOptions
### Properties
* **Visibility**: string

## FilterRelativeDateTimeControl
### Properties
* **DisplayOptions**: [RelativeDateTimeControlDisplayOptions](#relativedatetimecontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)

## RelativeDateTimeControlDisplayOptions
### Properties
* **DateTimeFormat**: string
* **TitleOptions**: [LabelOptions](#labeloptions)

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

## SliderControlDisplayOptions
### Properties
* **TitleOptions**: [LabelOptions](#labeloptions)

## FilterTextAreaControl
### Properties
* **Delimiter**: string
* **DisplayOptions**: [TextAreaControlDisplayOptions](#textareacontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)

## TextAreaControlDisplayOptions
### Properties
* **PlaceholderOptions**: [TextControlPlaceholderOptions](#textcontrolplaceholderoptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## TextControlPlaceholderOptions
### Properties
* **Visibility**: string

## FilterTextFieldControl
### Properties
* **DisplayOptions**: [TextFieldControlDisplayOptions](#textfieldcontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)

## TextFieldControlDisplayOptions
### Properties
* **PlaceholderOptions**: [TextControlPlaceholderOptions](#textcontrolplaceholderoptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## Layout
### Properties
* **Configuration**: [LayoutConfiguration](#layoutconfiguration) (Required)

## LayoutConfiguration
### Properties
* **FreeFormLayout**: [FreeFormLayoutConfiguration](#freeformlayoutconfiguration)
* **GridLayout**: [GridLayoutConfiguration](#gridlayoutconfiguration)
* **SectionBasedLayout**: [SectionBasedLayoutConfiguration](#sectionbasedlayoutconfiguration)

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

## FreeFormLayoutElementBackgroundStyle
### Properties
* **Color**: string
* **Visibility**: string

## FreeFormLayoutElementBorderStyle
### Properties
* **Color**: string
* **Visibility**: string

## LoadingAnimation
### Properties
* **Visibility**: string

## SheetElementRenderingRule
### Properties
* **ConfigurationOverrides**: [SheetElementConfigurationOverrides](#sheetelementconfigurationoverrides) (Required)
* **Expression**: string (Required)

## SheetElementConfigurationOverrides
### Properties
* **Visibility**: string

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

## SectionBasedLayoutConfiguration
### Properties
* **BodySections**: [BodySectionConfiguration](#bodysectionconfiguration)[] (Required)
* **CanvasSizeOptions**: [SectionBasedLayoutCanvasSizeOptions](#sectionbasedlayoutcanvassizeoptions) (Required)
* **FooterSections**: [HeaderFooterSectionConfiguration](#headerfootersectionconfiguration)[] (Required)
* **HeaderSections**: [HeaderFooterSectionConfiguration](#headerfootersectionconfiguration)[] (Required)

## BodySectionConfiguration
### Properties
* **Content**: [BodySectionContent](#bodysectioncontent) (Required)
* **PageBreakConfiguration**: [SectionPageBreakConfiguration](#sectionpagebreakconfiguration)
* **SectionId**: string (Required)
* **Style**: [SectionStyle](#sectionstyle)

## BodySectionContent
### Properties
* **Layout**: [SectionLayoutConfiguration](#sectionlayoutconfiguration)

## SectionLayoutConfiguration
### Properties
* **FreeFormLayout**: [FreeFormSectionLayoutConfiguration](#freeformsectionlayoutconfiguration) (Required)

## FreeFormSectionLayoutConfiguration
### Properties
* **Elements**: [FreeFormLayoutElement](#freeformlayoutelement)[] (Required)

## SectionPageBreakConfiguration
### Properties
* **After**: [SectionAfterPageBreak](#sectionafterpagebreak)

## SectionAfterPageBreak
### Properties
* **Status**: string

## SectionStyle
### Properties
* **Height**: string: String based length that is composed of value and unit in px
* **Padding**: [Spacing](#spacing)

## HeaderFooterSectionConfiguration
### Properties
* **Layout**: [SectionLayoutConfiguration](#sectionlayoutconfiguration) (Required)
* **SectionId**: string (Required)
* **Style**: [SectionStyle](#sectionstyle)

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

## ParameterDropDownControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **DisplayOptions**: [DropDownControlDisplayOptions](#dropdowncontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SelectableValues**: [ParameterSelectableValues](#parameterselectablevalues)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)
* **Type**: string

## ParameterSelectableValues
### Properties
* **LinkToDataSetColumn**: [ColumnIdentifier](#columnidentifier)
* **Values**: string[]

## ParameterListControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **DisplayOptions**: [ListControlDisplayOptions](#listcontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SelectableValues**: [ParameterSelectableValues](#parameterselectablevalues)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)
* **Type**: string

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

## ParameterTextFieldControl
### Properties
* **DisplayOptions**: [TextFieldControlDisplayOptions](#textfieldcontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)

## SheetControlLayout
### Properties
* **Configuration**: [SheetControlLayoutConfiguration](#sheetcontrollayoutconfiguration) (Required)

## SheetControlLayoutConfiguration
### Properties
* **GridLayout**: [GridLayoutConfiguration](#gridlayoutconfiguration)

## SheetTextBox
### Properties
* **Content**: string
* **SheetTextBoxId**: string (Required)

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

## BarChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [BarChartConfiguration](#barchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## CustomActionFilterOperation
### Properties
* **SelectedFieldsConfiguration**: [FilterOperationSelectedFieldsConfiguration](#filteroperationselectedfieldsconfiguration) (Required)
* **TargetVisualsConfiguration**: [FilterOperationTargetVisualsConfiguration](#filteroperationtargetvisualsconfiguration) (Required)

## FilterOperationSelectedFieldsConfiguration
### Properties
* **SelectedFieldOptions**: string
* **SelectedFields**: string[]

## FilterOperationTargetVisualsConfiguration
### Properties
* **SameSheetTargetVisualConfiguration**: [SameSheetTargetVisualConfiguration](#samesheettargetvisualconfiguration)

## SameSheetTargetVisualConfiguration
### Properties
* **TargetVisualOptions**: string
* **TargetVisuals**: string[]

## CustomActionNavigationOperation
### Properties
* **LocalNavigationConfiguration**: [LocalNavigationConfiguration](#localnavigationconfiguration)

## LocalNavigationConfiguration
### Properties
* **TargetSheetId**: string (Required)

## CustomActionSetParametersOperation
### Properties
* **ParameterValueConfigurations**: [SetParameterValueConfiguration](#setparametervalueconfiguration)[] (Required)

## SetParameterValueConfiguration
### Properties
* **DestinationParameterName**: string (Required)
* **Value**: [DestinationParameterValueConfiguration](#destinationparametervalueconfiguration) (Required)

## DestinationParameterValueConfiguration
### Properties
* **CustomValuesConfiguration**: [CustomValuesConfiguration](#customvaluesconfiguration)
* **SelectAllValueOptions**: string
* **SourceField**: string
* **SourceParameterName**: string

## CustomValuesConfiguration
### Properties
* **CustomValues**: [CustomParameterValues](#customparametervalues) (Required)
* **IncludeNullValue**: bool

## CustomParameterValues
### Properties
* **DateTimeValues**: string[]
* **DecimalValues**: int[]
* **IntegerValues**: int[]
* **StringValues**: string[]

## CustomActionURLOperation
### Properties
* **URLTarget**: string (Required)
* **URLTemplate**: string (Required)

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

## AxisDisplayOptions
### Properties
* **AxisLineVisibility**: string
* **AxisOffset**: string: String based length that is composed of value and unit in px
* **DataOptions**: [AxisDataOptions](#axisdataoptions)
* **GridLineVisibility**: string
* **ScrollbarOptions**: [ScrollBarOptions](#scrollbaroptions)
* **TickLabelOptions**: [AxisTickLabelOptions](#axisticklabeloptions)

## AxisDataOptions
### Properties
* **DateAxisOptions**: [DateAxisOptions](#dateaxisoptions)
* **NumericAxisOptions**: [NumericAxisOptions](#numericaxisoptions)

## DateAxisOptions
### Properties
* **MissingDateVisibility**: string

## NumericAxisOptions
### Properties
* **Range**: [AxisDisplayRange](#axisdisplayrange)
* **Scale**: [AxisScale](#axisscale)

## AxisDisplayRange
### Properties
* **DataDriven**: [AxisDisplayDataDrivenRange](#axisdisplaydatadrivenrange)
* **MinMax**: [AxisDisplayMinMaxRange](#axisdisplayminmaxrange)

## AxisDisplayDataDrivenRange
### Properties

## AxisDisplayMinMaxRange
### Properties
* **Maximum**: int
* **Minimum**: int

## AxisScale
### Properties
* **Linear**: [AxisLinearScale](#axislinearscale)
* **Logarithmic**: [AxisLogarithmicScale](#axislogarithmicscale)

## AxisLinearScale
### Properties
* **StepCount**: int
* **StepSize**: int

## AxisLogarithmicScale
### Properties
* **Base**: int

## ScrollBarOptions
### Properties
* **Visibility**: string
* **VisibleRange**: [VisibleRangeOptions](#visiblerangeoptions)

## VisibleRangeOptions
### Properties
* **PercentRange**: [PercentVisibleRange](#percentvisiblerange)

## PercentVisibleRange
### Properties
* **From**: int
* **To**: int

## AxisTickLabelOptions
### Properties
* **LabelOptions**: [LabelOptions](#labeloptions)
* **RotationAngle**: int

## ChartAxisLabelOptions
### Properties
* **AxisLabelOptions**: [AxisLabelOptions](#axislabeloptions)[]
* **SortIconVisibility**: string
* **Visibility**: string

## AxisLabelOptions
### Properties
* **ApplyTo**: [AxisLabelReferenceOptions](#axislabelreferenceoptions)
* **CustomLabel**: string
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)

## AxisLabelReferenceOptions
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)

## ContributionAnalysisDefault
### Properties
* **ContributorDimensions**: [ColumnIdentifier](#columnidentifier)[] (Required)
* **MeasureFieldId**: string (Required)

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
* **Visibility**: string

## DataLabelType
### Properties
* **DataPathLabelType**: [DataPathLabelType](#datapathlabeltype)
* **FieldLabelType**: [FieldLabelType](#fieldlabeltype)
* **MaximumLabelType**: [MaximumLabelType](#maximumlabeltype)
* **MinimumLabelType**: [MinimumLabelType](#minimumlabeltype)
* **RangeEndsLabelType**: [RangeEndsLabelType](#rangeendslabeltype)

## DataPathLabelType
### Properties
* **FieldId**: string
* **FieldValue**: string
* **Visibility**: string

## FieldLabelType
### Properties
* **FieldId**: string
* **Visibility**: string

## MaximumLabelType
### Properties
* **Visibility**: string

## MinimumLabelType
### Properties
* **Visibility**: string

## RangeEndsLabelType
### Properties
* **Visibility**: string

## BarChartFieldWells
### Properties
* **BarChartAggregatedFieldWells**: [BarChartAggregatedFieldWells](#barchartaggregatedfieldwells)

## BarChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Colors**: [DimensionField](#dimensionfield)[]
* **SmallMultiples**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## DimensionField
### Properties
* **CategoricalDimensionField**: [CategoricalDimensionField](#categoricaldimensionfield)
* **DateDimensionField**: [DateDimensionField](#datedimensionfield)
* **NumericalDimensionField**: [NumericalDimensionField](#numericaldimensionfield)

## CategoricalDimensionField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [StringFormatConfiguration](#stringformatconfiguration)
* **HierarchyId**: string

## DateDimensionField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DateGranularity**: string
* **FieldId**: string (Required)
* **FormatConfiguration**: [DateTimeFormatConfiguration](#datetimeformatconfiguration)
* **HierarchyId**: string

## NumericalDimensionField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [NumberFormatConfiguration](#numberformatconfiguration)
* **HierarchyId**: string

## MeasureField
### Properties
* **CalculatedMeasureField**: [CalculatedMeasureField](#calculatedmeasurefield)
* **CategoricalMeasureField**: [CategoricalMeasureField](#categoricalmeasurefield)
* **DateMeasureField**: [DateMeasureField](#datemeasurefield)
* **NumericalMeasureField**: [NumericalMeasureField](#numericalmeasurefield)

## CalculatedMeasureField
### Properties
* **Expression**: string (Required)
* **FieldId**: string (Required)

## CategoricalMeasureField
### Properties
* **AggregationFunction**: string
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [StringFormatConfiguration](#stringformatconfiguration)

## DateMeasureField
### Properties
* **AggregationFunction**: string
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [DateTimeFormatConfiguration](#datetimeformatconfiguration)

## NumericalMeasureField
### Properties
* **AggregationFunction**: [NumericalAggregationFunction](#numericalaggregationfunction)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [NumberFormatConfiguration](#numberformatconfiguration)

## LegendOptions
### Properties
* **Height**: string: String based length that is composed of value and unit in px
* **Position**: string
* **Title**: [LabelOptions](#labeloptions)
* **Visibility**: string
* **Width**: string: String based length that is composed of value and unit in px

## ReferenceLine
### Properties
* **DataConfiguration**: [ReferenceLineDataConfiguration](#referencelinedataconfiguration) (Required)
* **LabelConfiguration**: [ReferenceLineLabelConfiguration](#referencelinelabelconfiguration)
* **Status**: string
* **StyleConfiguration**: [ReferenceLineStyleConfiguration](#referencelinestyleconfiguration)

## ReferenceLineDataConfiguration
### Properties
* **AxisBinding**: string
* **DynamicConfiguration**: [ReferenceLineDynamicDataConfiguration](#referencelinedynamicdataconfiguration)
* **StaticConfiguration**: [ReferenceLineStaticDataConfiguration](#referencelinestaticdataconfiguration)

## ReferenceLineDynamicDataConfiguration
### Properties
* **Calculation**: [NumericalAggregationFunction](#numericalaggregationfunction) (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **MeasureAggregationFunction**: [AggregationFunction](#aggregationfunction) (Required)

## ReferenceLineStaticDataConfiguration
### Properties
* **Value**: int (Required)

## ReferenceLineLabelConfiguration
### Properties
* **CustomLabelConfiguration**: [ReferenceLineCustomLabelConfiguration](#referencelinecustomlabelconfiguration)
* **FontColor**: string
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)
* **HorizontalPosition**: string
* **ValueLabelConfiguration**: [ReferenceLineValueLabelConfiguration](#referencelinevaluelabelconfiguration)
* **VerticalPosition**: string

## ReferenceLineCustomLabelConfiguration
### Properties
* **CustomLabel**: string (Required)

## ReferenceLineValueLabelConfiguration
### Properties
* **FormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)
* **RelativePosition**: string

## ReferenceLineStyleConfiguration
### Properties
* **Color**: string
* **Pattern**: string

## SmallMultiplesOptions
### Properties
* **MaxVisibleColumns**: int
* **MaxVisibleRows**: int
* **PanelConfiguration**: [PanelConfiguration](#panelconfiguration)

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

## BarChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **ColorSort**: [FieldSortOptions](#fieldsortoptions)[]
* **SmallMultiplesLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SmallMultiplesSort**: [FieldSortOptions](#fieldsortoptions)[]

## ItemsLimitConfiguration
### Properties
* **ItemsLimit**: int
* **OtherCategories**: string

## FieldSortOptions
### Properties
* **ColumnSort**: [ColumnSort](#columnsort)
* **FieldSort**: [FieldSort](#fieldsort)

## ColumnSort
### Properties
* **AggregationFunction**: [AggregationFunction](#aggregationfunction)
* **Direction**: string (Required)
* **SortBy**: [ColumnIdentifier](#columnidentifier) (Required)

## FieldSort
### Properties
* **Direction**: string (Required)
* **FieldId**: string (Required)

## TooltipOptions
### Properties
* **FieldBasedTooltip**: [FieldBasedTooltip](#fieldbasedtooltip)
* **SelectedTooltipType**: string
* **TooltipVisibility**: string

## FieldBasedTooltip
### Properties
* **AggregationVisibility**: string
* **TooltipFields**: [TooltipItem](#tooltipitem)[]
* **TooltipTitleType**: string

## TooltipItem
### Properties
* **ColumnTooltipItem**: [ColumnTooltipItem](#columntooltipitem)
* **FieldTooltipItem**: [FieldTooltipItem](#fieldtooltipitem)

## ColumnTooltipItem
### Properties
* **Aggregation**: [AggregationFunction](#aggregationfunction)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **Label**: string
* **Visibility**: string

## FieldTooltipItem
### Properties
* **FieldId**: string (Required)
* **Label**: string
* **Visibility**: string

## VisualPalette
### Properties
* **ChartColor**: string
* **ColorMap**: [DataPathColor](#datapathcolor)[]

## DataPathColor
### Properties
* **Color**: string (Required)
* **Element**: [DataPathValue](#datapathvalue) (Required)
* **TimeGranularity**: string

## DataPathValue
### Properties
* **FieldId**: string (Required)
* **FieldValue**: string (Required)

## ColumnHierarchy
### Properties
* **DateTimeHierarchy**: [DateTimeHierarchy](#datetimehierarchy)
* **ExplicitHierarchy**: [ExplicitHierarchy](#explicithierarchy)
* **PredefinedHierarchy**: [PredefinedHierarchy](#predefinedhierarchy)

## DateTimeHierarchy
### Properties
* **DrillDownFilters**: [DrillDownFilter](#drilldownfilter)[]
* **HierarchyId**: string (Required)

## DrillDownFilter
### Properties
* **CategoryFilter**: [CategoryDrillDownFilter](#categorydrilldownfilter)
* **NumericEqualityFilter**: [NumericEqualityDrillDownFilter](#numericequalitydrilldownfilter)
* **TimeRangeFilter**: [TimeRangeDrillDownFilter](#timerangedrilldownfilter)

## CategoryDrillDownFilter
### Properties
* **CategoryValues**: string[] (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)

## NumericEqualityDrillDownFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **Value**: int (Required)

## TimeRangeDrillDownFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **RangeMaximum**: string (Required)
* **RangeMinimum**: string (Required)
* **TimeGranularity**: string (Required)

## ExplicitHierarchy
### Properties
* **Columns**: [ColumnIdentifier](#columnidentifier)[] (Required)
* **DrillDownFilters**: [DrillDownFilter](#drilldownfilter)[]
* **HierarchyId**: string (Required)

## PredefinedHierarchy
### Properties
* **Columns**: [ColumnIdentifier](#columnidentifier)[] (Required)
* **DrillDownFilters**: [DrillDownFilter](#drilldownfilter)[]
* **HierarchyId**: string (Required)

## VisualSubtitleLabelOptions
### Properties
* **FormatText**: [LongFormatText](#longformattext)
* **Visibility**: string

## LongFormatText
### Properties
* **PlainText**: string
* **RichText**: string

## VisualTitleLabelOptions
### Properties
* **FormatText**: [ShortFormatText](#shortformattext)
* **Visibility**: string

## ShortFormatText
### Properties
* **PlainText**: string
* **RichText**: string

## BoxPlotVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [BoxPlotChartConfiguration](#boxplotchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## BoxPlotOptions
### Properties
* **AllDataPointsVisibility**: string
* **OutlierVisibility**: string
* **StyleOptions**: [BoxPlotStyleOptions](#boxplotstyleoptions)

## BoxPlotStyleOptions
### Properties
* **FillStyle**: string

## BoxPlotFieldWells
### Properties
* **BoxPlotAggregatedFieldWells**: [BoxPlotAggregatedFieldWells](#boxplotaggregatedfieldwells)

## BoxPlotAggregatedFieldWells
### Properties
* **GroupBy**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## BoxPlotSortConfiguration
### Properties
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **PaginationConfiguration**: [PaginationConfiguration](#paginationconfiguration)

## PaginationConfiguration
### Properties
* **PageNumber**: int (Required)
* **PageSize**: int (Required)

## ComboChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [ComboChartConfiguration](#combochartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## ComboChartAggregatedFieldWells
### Properties
* **BarValues**: [MeasureField](#measurefield)[]
* **Category**: [DimensionField](#dimensionfield)[]
* **Colors**: [DimensionField](#dimensionfield)[]
* **LineValues**: [MeasureField](#measurefield)[]

## ComboChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **ColorSort**: [FieldSortOptions](#fieldsortoptions)[]

## CustomContentVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [CustomContentConfiguration](#customcontentconfiguration)
* **DataSetIdentifier**: string (Required)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## CustomContentConfiguration
### Properties
* **ContentType**: string
* **ContentUrl**: string
* **ImageScaling**: string

## EmptyVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **DataSetIdentifier**: string (Required)
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

## FilledMapAggregatedFieldWells
### Properties
* **Geospatial**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## GeospatialMapStyleOptions
### Properties
* **BaseMapStyle**: string

## FilledMapSortConfiguration
### Properties
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## GeospatialWindowOptions
### Properties
* **Bounds**: [GeospatialCoordinateBounds](#geospatialcoordinatebounds)
* **MapZoomMode**: string

## GeospatialCoordinateBounds
### Properties
* **East**: int (Required)
* **North**: int (Required)
* **South**: int (Required)
* **West**: int (Required)

## FilledMapConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [FilledMapConditionalFormattingOption](#filledmapconditionalformattingoption)[] (Required)

## FilledMapConditionalFormattingOption
### Properties
* **Shape**: [FilledMapShapeConditionalFormatting](#filledmapshapeconditionalformatting) (Required)

## FilledMapShapeConditionalFormatting
### Properties
* **FieldId**: string (Required)
* **Format**: [ShapeConditionalFormat](#shapeconditionalformat)

## ShapeConditionalFormat
### Properties
* **BackgroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor) (Required)

## ConditionalFormattingColor
### Properties
* **Gradient**: [ConditionalFormattingGradientColor](#conditionalformattinggradientcolor)
* **Solid**: [ConditionalFormattingSolidColor](#conditionalformattingsolidcolor)

## ConditionalFormattingGradientColor
### Properties
* **Color**: [GradientColor](#gradientcolor) (Required)
* **Expression**: string (Required)

## GradientColor
### Properties
* **Stops**: [GradientStop](#gradientstop)[]

## GradientStop
### Properties
* **Color**: string
* **DataValue**: int
* **GradientOffset**: int (Required)

## ConditionalFormattingSolidColor
### Properties
* **Color**: string
* **Expression**: string (Required)

## FunnelChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [FunnelChartConfiguration](#funnelchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## FunnelChartFieldWells
### Properties
* **FunnelChartAggregatedFieldWells**: [FunnelChartAggregatedFieldWells](#funnelchartaggregatedfieldwells)

## FunnelChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## FunnelChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## GaugeChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [GaugeChartConfiguration](#gaugechartconfiguration)
* **ConditionalFormatting**: [GaugeChartConditionalFormatting](#gaugechartconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## GaugeChartOptions
### Properties
* **Arc**: [ArcConfiguration](#arcconfiguration)
* **ArcAxis**: [ArcAxisConfiguration](#arcaxisconfiguration)
* **Comparison**: [ComparisonConfiguration](#comparisonconfiguration)
* **PrimaryValueDisplayType**: string
* **PrimaryValueFontConfiguration**: [FontConfiguration](#fontconfiguration)

## ArcConfiguration
### Properties
* **ArcAngle**: int
* **ArcThickness**: string

## ArcAxisConfiguration
### Properties
* **Range**: [ArcAxisDisplayRange](#arcaxisdisplayrange)
* **ReserveRange**: int

## ArcAxisDisplayRange
### Properties
* **Max**: int
* **Min**: int

## ComparisonConfiguration
### Properties
* **ComparisonFormat**: [ComparisonFormatConfiguration](#comparisonformatconfiguration)
* **ComparisonMethod**: string

## ComparisonFormatConfiguration
### Properties
* **NumberDisplayFormatConfiguration**: [NumberDisplayFormatConfiguration](#numberdisplayformatconfiguration)
* **PercentageDisplayFormatConfiguration**: [PercentageDisplayFormatConfiguration](#percentagedisplayformatconfiguration)

## GaugeChartConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [GaugeChartConditionalFormattingOption](#gaugechartconditionalformattingoption)[]

## GaugeChartConditionalFormattingOption
### Properties
* **Arc**: [GaugeChartArcConditionalFormatting](#gaugechartarcconditionalformatting)
* **PrimaryValue**: [GaugeChartPrimaryValueConditionalFormatting](#gaugechartprimaryvalueconditionalformatting)

## GaugeChartArcConditionalFormatting
### Properties
* **ForegroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## GaugeChartPrimaryValueConditionalFormatting
### Properties
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## ConditionalFormattingIcon
### Properties
* **CustomCondition**: [ConditionalFormattingCustomIconCondition](#conditionalformattingcustomiconcondition)
* **IconSet**: [ConditionalFormattingIconSet](#conditionalformattingiconset)

## ConditionalFormattingCustomIconCondition
### Properties
* **Color**: string
* **DisplayConfiguration**: [ConditionalFormattingIconDisplayConfiguration](#conditionalformattingicondisplayconfiguration)
* **Expression**: string (Required)
* **IconOptions**: [ConditionalFormattingCustomIconOptions](#conditionalformattingcustomiconoptions) (Required)

## ConditionalFormattingIconDisplayConfiguration
### Properties
* **IconDisplayOption**: string

## ConditionalFormattingCustomIconOptions
### Properties
* **Icon**: string
* **UnicodeIcon**: string

## ConditionalFormattingIconSet
### Properties
* **Expression**: string (Required)
* **IconSetType**: string

## GeospatialMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [GeospatialMapConfiguration](#geospatialmapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## GeospatialMapAggregatedFieldWells
### Properties
* **Colors**: [DimensionField](#dimensionfield)[]
* **Geospatial**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## GeospatialPointStyleOptions
### Properties
* **ClusterMarkerConfiguration**: [ClusterMarkerConfiguration](#clustermarkerconfiguration)
* **SelectedPointStyle**: string

## ClusterMarkerConfiguration
### Properties
* **ClusterMarker**: [ClusterMarker](#clustermarker)

## ClusterMarker
### Properties
* **SimpleClusterMarker**: [SimpleClusterMarker](#simpleclustermarker)

## SimpleClusterMarker
### Properties
* **Color**: string

## HeatMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [HeatMapConfiguration](#heatmapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## ColorScale
### Properties
* **ColorFillType**: string (Required)
* **Colors**: [DataColor](#datacolor)[] (Required)
* **NullValueColor**: [DataColor](#datacolor)

## DataColor
### Properties
* **Color**: string
* **DataValue**: int

## HeatMapFieldWells
### Properties
* **HeatMapAggregatedFieldWells**: [HeatMapAggregatedFieldWells](#heatmapaggregatedfieldwells)

## HeatMapAggregatedFieldWells
### Properties
* **Columns**: [DimensionField](#dimensionfield)[]
* **Rows**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## HeatMapSortConfiguration
### Properties
* **HeatMapColumnItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **HeatMapColumnSort**: [FieldSortOptions](#fieldsortoptions)[]
* **HeatMapRowItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **HeatMapRowSort**: [FieldSortOptions](#fieldsortoptions)[]

## HistogramVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [HistogramConfiguration](#histogramconfiguration)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## HistogramBinOptions
### Properties
* **BinCount**: [BinCountOptions](#bincountoptions)
* **BinWidth**: [BinWidthOptions](#binwidthoptions)
* **SelectedBinType**: string
* **StartValue**: int

## BinCountOptions
### Properties
* **Value**: int

## BinWidthOptions
### Properties
* **BinCountLimit**: int
* **Value**: int

## HistogramFieldWells
### Properties
* **HistogramAggregatedFieldWells**: [HistogramAggregatedFieldWells](#histogramaggregatedfieldwells)

## HistogramAggregatedFieldWells
### Properties
* **Values**: [MeasureField](#measurefield)[]

## InsightVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **DataSetIdentifier**: string (Required)
* **InsightConfiguration**: [InsightConfiguration](#insightconfiguration)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## InsightConfiguration
### Properties
* **Computations**: [Computation](#computation)[]
* **CustomNarrative**: [CustomNarrativeOptions](#customnarrativeoptions)

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
* **Time**: [DimensionField](#dimensionfield) (Required)
* **UpperBoundary**: int
* **Value**: [MeasureField](#measurefield)

## GrowthRateComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **PeriodSize**: int
* **Time**: [DimensionField](#dimensionfield) (Required)
* **Value**: [MeasureField](#measurefield)

## MaximumMinimumComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **Time**: [DimensionField](#dimensionfield) (Required)
* **Type**: string (Required)
* **Value**: [MeasureField](#measurefield)

## MetricComparisonComputation
### Properties
* **ComputationId**: string (Required)
* **FromValue**: [MeasureField](#measurefield) (Required)
* **Name**: string
* **TargetValue**: [MeasureField](#measurefield) (Required)
* **Time**: [DimensionField](#dimensionfield) (Required)

## PeriodOverPeriodComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **Time**: [DimensionField](#dimensionfield) (Required)
* **Value**: [MeasureField](#measurefield)

## PeriodToDateComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **PeriodTimeGranularity**: string
* **Time**: [DimensionField](#dimensionfield) (Required)
* **Value**: [MeasureField](#measurefield)

## TopBottomMoversComputation
### Properties
* **Category**: [DimensionField](#dimensionfield) (Required)
* **ComputationId**: string (Required)
* **MoverSize**: int
* **Name**: string
* **SortOrder**: string
* **Time**: [DimensionField](#dimensionfield) (Required)
* **Type**: string (Required)
* **Value**: [MeasureField](#measurefield)

## TopBottomRankedComputation
### Properties
* **Category**: [DimensionField](#dimensionfield) (Required)
* **ComputationId**: string (Required)
* **Name**: string
* **ResultSize**: int
* **Type**: string (Required)
* **Value**: [MeasureField](#measurefield)

## TotalAggregationComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **Value**: [MeasureField](#measurefield) (Required)

## UniqueValuesComputation
### Properties
* **Category**: [DimensionField](#dimensionfield) (Required)
* **ComputationId**: string (Required)
* **Name**: string

## CustomNarrativeOptions
### Properties
* **Narrative**: string (Required)

## KPIVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [KPIConfiguration](#kpiconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **ConditionalFormatting**: [KPIConditionalFormatting](#kpiconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## KPIOptions
### Properties
* **Comparison**: [ComparisonConfiguration](#comparisonconfiguration)
* **PrimaryValueDisplayType**: string
* **PrimaryValueFontConfiguration**: [FontConfiguration](#fontconfiguration)
* **ProgressBar**: [ProgressBarOptions](#progressbaroptions)
* **SecondaryValue**: [SecondaryValueOptions](#secondaryvalueoptions)
* **SecondaryValueFontConfiguration**: [FontConfiguration](#fontconfiguration)
* **TrendArrows**: [TrendArrowOptions](#trendarrowoptions)

## ProgressBarOptions
### Properties
* **Visibility**: string

## SecondaryValueOptions
### Properties
* **Visibility**: string

## TrendArrowOptions
### Properties
* **Visibility**: string

## KPISortConfiguration
### Properties
* **TrendGroupSort**: [FieldSortOptions](#fieldsortoptions)[]

## KPIConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [KPIConditionalFormattingOption](#kpiconditionalformattingoption)[]

## KPIConditionalFormattingOption
### Properties
* **PrimaryValue**: [KPIPrimaryValueConditionalFormatting](#kpiprimaryvalueconditionalformatting)
* **ProgressBar**: [KPIProgressBarConditionalFormatting](#kpiprogressbarconditionalformatting)

## KPIPrimaryValueConditionalFormatting
### Properties
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## KPIProgressBarConditionalFormatting
### Properties
* **ForegroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## LineChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [LineChartConfiguration](#linechartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## LineChartFieldWells
### Properties
* **LineChartAggregatedFieldWells**: [LineChartAggregatedFieldWells](#linechartaggregatedfieldwells)

## LineChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Colors**: [DimensionField](#dimensionfield)[]
* **SmallMultiples**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## ForecastConfiguration
### Properties
* **ForecastProperties**: [TimeBasedForecastProperties](#timebasedforecastproperties)
* **Scenario**: [ForecastScenario](#forecastscenario)

## TimeBasedForecastProperties
### Properties
* **LowerBoundary**: int
* **PeriodsBackward**: int
* **PeriodsForward**: int
* **PredictionInterval**: int
* **Seasonality**: int
* **UpperBoundary**: int

## ForecastScenario
### Properties
* **WhatIfPointScenario**: [WhatIfPointScenario](#whatifpointscenario)
* **WhatIfRangeScenario**: [WhatIfRangeScenario](#whatifrangescenario)

## WhatIfPointScenario
### Properties
* **Date**: string (Required)
* **Value**: int (Required)

## WhatIfRangeScenario
### Properties
* **EndDate**: string (Required)
* **StartDate**: string (Required)
* **Value**: int (Required)

## LineSeriesAxisDisplayOptions
### Properties
* **AxisOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **MissingDataConfigurations**: [MissingDataConfiguration](#missingdataconfiguration)[]

## MissingDataConfiguration
### Properties
* **TreatmentOption**: string

## SeriesItem
### Properties
* **DataFieldSeriesItem**: [DataFieldSeriesItem](#datafieldseriesitem)
* **FieldSeriesItem**: [FieldSeriesItem](#fieldseriesitem)

## DataFieldSeriesItem
### Properties
* **AxisBinding**: string (Required)
* **FieldId**: string (Required)
* **FieldValue**: string
* **Settings**: [LineChartSeriesSettings](#linechartseriessettings)

## LineChartSeriesSettings
### Properties
* **LineStyleSettings**: [LineChartLineStyleSettings](#linechartlinestylesettings)
* **MarkerStyleSettings**: [LineChartMarkerStyleSettings](#linechartmarkerstylesettings)

## FieldSeriesItem
### Properties
* **AxisBinding**: string (Required)
* **FieldId**: string (Required)
* **Settings**: [LineChartSeriesSettings](#linechartseriessettings)

## LineChartSortConfiguration
### Properties
* **CategoryItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
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

## DonutOptions
### Properties
* **ArcOptions**: [ArcOptions](#arcoptions)
* **DonutCenterOptions**: [DonutCenterOptions](#donutcenteroptions)

## ArcOptions
### Properties
* **ArcThickness**: string

## DonutCenterOptions
### Properties
* **LabelVisibility**: string

## PieChartFieldWells
### Properties
* **PieChartAggregatedFieldWells**: [PieChartAggregatedFieldWells](#piechartaggregatedfieldwells)

## PieChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **SmallMultiples**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## PieChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **SmallMultiplesLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SmallMultiplesSort**: [FieldSortOptions](#fieldsortoptions)[]

## PivotTableVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [PivotTableConfiguration](#pivottableconfiguration)
* **ConditionalFormatting**: [PivotTableConditionalFormatting](#pivottableconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## PivotTableConfiguration
### Properties
* **FieldOptions**: [PivotTableFieldOptions](#pivottablefieldoptions)
* **FieldWells**: [PivotTableFieldWells](#pivottablefieldwells)
* **PaginatedReportOptions**: [PivotTablePaginatedReportOptions](#pivottablepaginatedreportoptions)
* **SortConfiguration**: [PivotTableSortConfiguration](#pivottablesortconfiguration)
* **TableOptions**: [PivotTableOptions](#pivottableoptions)
* **TotalOptions**: [PivotTableTotalOptions](#pivottabletotaloptions)

## PivotTableFieldOptions
### Properties
* **DataPathOptions**: [PivotTableDataPathOption](#pivottabledatapathoption)[]
* **SelectedFieldOptions**: [PivotTableFieldOption](#pivottablefieldoption)[]

## PivotTableDataPathOption
### Properties
* **DataPathList**: [DataPathValue](#datapathvalue)[] (Required)
* **Width**: string: String based length that is composed of value and unit in px

## PivotTableFieldOption
### Properties
* **CustomLabel**: string
* **FieldId**: string (Required)
* **Visibility**: string

## PivotTableFieldWells
### Properties
* **PivotTableAggregatedFieldWells**: [PivotTableAggregatedFieldWells](#pivottableaggregatedfieldwells)

## PivotTableAggregatedFieldWells
### Properties
* **Columns**: [DimensionField](#dimensionfield)[]
* **Rows**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## PivotTablePaginatedReportOptions
### Properties
* **OverflowColumnHeaderVisibility**: string
* **VerticalOverflowVisibility**: string

## PivotTableSortConfiguration
### Properties
* **FieldSortOptions**: [PivotFieldSortOptions](#pivotfieldsortoptions)[]

## PivotFieldSortOptions
### Properties
* **FieldId**: string (Required)
* **SortBy**: [PivotTableSortBy](#pivottablesortby) (Required)

## PivotTableSortBy
### Properties
* **Column**: [ColumnSort](#columnsort)
* **DataPath**: [DataPathSort](#datapathsort)
* **Field**: [FieldSort](#fieldsort)

## DataPathSort
### Properties
* **Direction**: string (Required)
* **SortPaths**: [DataPathValue](#datapathvalue)[] (Required)

## PivotTableOptions
### Properties
* **CellStyle**: [TableCellStyle](#tablecellstyle)
* **ColumnHeaderStyle**: [TableCellStyle](#tablecellstyle)
* **ColumnNamesVisibility**: string
* **MetricPlacement**: string
* **RowAlternateColorOptions**: [RowAlternateColorOptions](#rowalternatecoloroptions)
* **RowFieldNamesStyle**: [TableCellStyle](#tablecellstyle)
* **RowHeaderStyle**: [TableCellStyle](#tablecellstyle)
* **SingleMetricVisibility**: string
* **ToggleButtonsVisibility**: string

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

## GlobalTableBorderOptions
### Properties
* **SideSpecificBorder**: [TableSideBorderOptions](#tablesideborderoptions)
* **UniformBorder**: [TableBorderOptions](#tableborderoptions)

## TableSideBorderOptions
### Properties
* **Bottom**: [TableBorderOptions](#tableborderoptions)
* **InnerHorizontal**: [TableBorderOptions](#tableborderoptions)
* **InnerVertical**: [TableBorderOptions](#tableborderoptions)
* **Left**: [TableBorderOptions](#tableborderoptions)
* **Right**: [TableBorderOptions](#tableborderoptions)
* **Top**: [TableBorderOptions](#tableborderoptions)

## TableBorderOptions
### Properties
* **Color**: string
* **Style**: string
* **Thickness**: int

## RowAlternateColorOptions
### Properties
* **RowAlternateColors**: string[]
* **Status**: string

## PivotTableTotalOptions
### Properties
* **ColumnSubtotalOptions**: [SubtotalOptions](#subtotaloptions)
* **ColumnTotalOptions**: [PivotTotalOptions](#pivottotaloptions)
* **RowSubtotalOptions**: [SubtotalOptions](#subtotaloptions)
* **RowTotalOptions**: [PivotTotalOptions](#pivottotaloptions)

## SubtotalOptions
### Properties
* **CustomLabel**: string
* **FieldLevel**: string
* **FieldLevelOptions**: [PivotTableFieldSubtotalOptions](#pivottablefieldsubtotaloptions)[]
* **MetricHeaderCellStyle**: [TableCellStyle](#tablecellstyle)
* **TotalCellStyle**: [TableCellStyle](#tablecellstyle)
* **TotalsVisibility**: string
* **ValueCellStyle**: [TableCellStyle](#tablecellstyle)

## PivotTableFieldSubtotalOptions
### Properties
* **FieldId**: string

## PivotTotalOptions
### Properties
* **CustomLabel**: string
* **MetricHeaderCellStyle**: [TableCellStyle](#tablecellstyle)
* **Placement**: string
* **ScrollStatus**: string
* **TotalCellStyle**: [TableCellStyle](#tablecellstyle)
* **TotalsVisibility**: string
* **ValueCellStyle**: [TableCellStyle](#tablecellstyle)

## PivotTableConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [PivotTableConditionalFormattingOption](#pivottableconditionalformattingoption)[]

## PivotTableConditionalFormattingOption
### Properties
* **Cell**: [PivotTableCellConditionalFormatting](#pivottablecellconditionalformatting)

## PivotTableCellConditionalFormatting
### Properties
* **FieldId**: string (Required)
* **Scope**: [PivotTableConditionalFormattingScope](#pivottableconditionalformattingscope)
* **TextFormat**: [TextConditionalFormat](#textconditionalformat)

## PivotTableConditionalFormattingScope
### Properties
* **Role**: string

## TextConditionalFormat
### Properties
* **BackgroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## RadarChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [RadarChartConfiguration](#radarchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## RadarChartConfiguration
### Properties
* **AlternateBandColorsVisibility**: string
* **AlternateBandEvenColor**: string
* **AlternateBandOddColor**: string
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

## RadarChartSeriesSettings
### Properties
* **AreaStyleSettings**: [RadarChartAreaStyleSettings](#radarchartareastylesettings)

## RadarChartAreaStyleSettings
### Properties
* **Visibility**: string

## RadarChartFieldWells
### Properties
* **RadarChartAggregatedFieldWells**: [RadarChartAggregatedFieldWells](#radarchartaggregatedfieldwells)

## RadarChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Color**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## RadarChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **ColorSort**: [FieldSortOptions](#fieldsortoptions)[]

## SankeyDiagramVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [SankeyDiagramChartConfiguration](#sankeydiagramchartconfiguration)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## SankeyDiagramChartConfiguration
### Properties
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [SankeyDiagramFieldWells](#sankeydiagramfieldwells)
* **SortConfiguration**: [SankeyDiagramSortConfiguration](#sankeydiagramsortconfiguration)

## SankeyDiagramFieldWells
### Properties
* **SankeyDiagramAggregatedFieldWells**: [SankeyDiagramAggregatedFieldWells](#sankeydiagramaggregatedfieldwells)

## SankeyDiagramAggregatedFieldWells
### Properties
* **Destination**: [DimensionField](#dimensionfield)[]
* **Source**: [DimensionField](#dimensionfield)[]
* **Weight**: [MeasureField](#measurefield)[]

## SankeyDiagramSortConfiguration
### Properties
* **DestinationItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SourceItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **WeightSort**: [FieldSortOptions](#fieldsortoptions)[]

## ScatterPlotVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [ScatterPlotConfiguration](#scatterplotconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## ScatterPlotCategoricallyAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Size**: [MeasureField](#measurefield)[]
* **XAxis**: [MeasureField](#measurefield)[]
* **YAxis**: [MeasureField](#measurefield)[]

## ScatterPlotUnaggregatedFieldWells
### Properties
* **Size**: [MeasureField](#measurefield)[]
* **XAxis**: [DimensionField](#dimensionfield)[]
* **YAxis**: [DimensionField](#dimensionfield)[]

## TableVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [TableConfiguration](#tableconfiguration)
* **ConditionalFormatting**: [TableConditionalFormatting](#tableconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## TableConfiguration
### Properties
* **FieldOptions**: [TableFieldOptions](#tablefieldoptions)
* **FieldWells**: [TableFieldWells](#tablefieldwells)
* **PaginatedReportOptions**: [TablePaginatedReportOptions](#tablepaginatedreportoptions)
* **SortConfiguration**: [TableSortConfiguration](#tablesortconfiguration)
* **TableInlineVisualizations**: [TableInlineVisualization](#tableinlinevisualization)[]
* **TableOptions**: [TableOptions](#tableoptions)
* **TotalOptions**: [TotalOptions](#totaloptions)

## TableFieldOptions
### Properties
* **Order**: string[]
* **SelectedFieldOptions**: [TableFieldOption](#tablefieldoption)[]

## TableFieldOption
### Properties
* **CustomLabel**: string
* **FieldId**: string (Required)
* **URLStyling**: [TableFieldURLConfiguration](#tablefieldurlconfiguration)
* **Visibility**: string
* **Width**: string: String based length that is composed of value and unit in px

## TableFieldURLConfiguration
### Properties
* **ImageConfiguration**: [TableFieldImageConfiguration](#tablefieldimageconfiguration)
* **LinkConfiguration**: [TableFieldLinkConfiguration](#tablefieldlinkconfiguration)

## TableFieldImageConfiguration
### Properties
* **SizingOptions**: [TableCellImageSizingConfiguration](#tablecellimagesizingconfiguration)

## TableCellImageSizingConfiguration
### Properties
* **TableCellImageScalingConfiguration**: string

## TableFieldLinkConfiguration
### Properties
* **Content**: [TableFieldLinkContentConfiguration](#tablefieldlinkcontentconfiguration) (Required)
* **Target**: string (Required)

## TableFieldLinkContentConfiguration
### Properties
* **CustomIconContent**: [TableFieldCustomIconContent](#tablefieldcustomiconcontent)
* **CustomTextContent**: [TableFieldCustomTextContent](#tablefieldcustomtextcontent)

## TableFieldCustomIconContent
### Properties
* **Icon**: string

## TableFieldCustomTextContent
### Properties
* **FontConfiguration**: [FontConfiguration](#fontconfiguration) (Required)
* **Value**: string

## TableFieldWells
### Properties
* **TableAggregatedFieldWells**: [TableAggregatedFieldWells](#tableaggregatedfieldwells)
* **TableUnaggregatedFieldWells**: [TableUnaggregatedFieldWells](#tableunaggregatedfieldwells)

## TableAggregatedFieldWells
### Properties
* **GroupBy**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## TableUnaggregatedFieldWells
### Properties
* **Values**: [UnaggregatedField](#unaggregatedfield)[]

## UnaggregatedField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [FormatConfiguration](#formatconfiguration)

## TablePaginatedReportOptions
### Properties
* **OverflowColumnHeaderVisibility**: string
* **VerticalOverflowVisibility**: string

## TableSortConfiguration
### Properties
* **PaginationConfiguration**: [PaginationConfiguration](#paginationconfiguration)
* **RowSort**: [FieldSortOptions](#fieldsortoptions)[]

## TableInlineVisualization
### Properties
* **DataBars**: [DataBarsOptions](#databarsoptions)

## DataBarsOptions
### Properties
* **FieldId**: string (Required)
* **NegativeColor**: string
* **PositiveColor**: string

## TableOptions
### Properties
* **CellStyle**: [TableCellStyle](#tablecellstyle)
* **HeaderStyle**: [TableCellStyle](#tablecellstyle)
* **Orientation**: string
* **RowAlternateColorOptions**: [RowAlternateColorOptions](#rowalternatecoloroptions)

## TotalOptions
### Properties
* **CustomLabel**: string
* **Placement**: string
* **ScrollStatus**: string
* **TotalCellStyle**: [TableCellStyle](#tablecellstyle)
* **TotalsVisibility**: string

## TableConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [TableConditionalFormattingOption](#tableconditionalformattingoption)[]

## TableConditionalFormattingOption
### Properties
* **Cell**: [TableCellConditionalFormatting](#tablecellconditionalformatting)
* **Row**: [TableRowConditionalFormatting](#tablerowconditionalformatting)

## TableCellConditionalFormatting
### Properties
* **FieldId**: string (Required)
* **TextFormat**: [TextConditionalFormat](#textconditionalformat)

## TableRowConditionalFormatting
### Properties
* **BackgroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## TreeMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [TreeMapConfiguration](#treemapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## TreeMapAggregatedFieldWells
### Properties
* **Colors**: [MeasureField](#measurefield)[]
* **Groups**: [DimensionField](#dimensionfield)[]
* **Sizes**: [MeasureField](#measurefield)[]

## TreeMapSortConfiguration
### Properties
* **TreeMapGroupItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **TreeMapSort**: [FieldSortOptions](#fieldsortoptions)[]

## WaterfallVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [WaterfallChartConfiguration](#waterfallchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## WaterfallChartAggregatedFieldWells
### Properties
* **Breakdowns**: [DimensionField](#dimensionfield)[]
* **Categories**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## WaterfallChartSortConfiguration
### Properties
* **BreakdownItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## WaterfallChartOptions
### Properties
* **TotalBarLabel**: string

## WordCloudVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [WordCloudChartConfiguration](#wordcloudchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## WordCloudChartConfiguration
### Properties
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **FieldWells**: [WordCloudFieldWells](#wordcloudfieldwells)
* **SortConfiguration**: [WordCloudSortConfiguration](#wordcloudsortconfiguration)
* **WordCloudOptions**: [WordCloudOptions](#wordcloudoptions)

## WordCloudFieldWells
### Properties
* **WordCloudAggregatedFieldWells**: [WordCloudAggregatedFieldWells](#wordcloudaggregatedfieldwells)

## WordCloudAggregatedFieldWells
### Properties
* **GroupBy**: [DimensionField](#dimensionfield)[]
* **Size**: [MeasureField](#measurefield)[]

## WordCloudSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## WordCloudOptions
### Properties
* **CloudLayout**: string
* **MaximumStringLength**: int
* **WordCasing**: string
* **WordOrientation**: string
* **WordPadding**: string
* **WordScaling**: string

## Parameters
### Properties
* **DateTimeParameters**: [DateTimeParameter](#datetimeparameter)[]
* **DecimalParameters**: [DecimalParameter](#decimalparameter)[]
* **IntegerParameters**: [IntegerParameter](#integerparameter)[]
* **StringParameters**: [StringParameter](#stringparameter)[]

## DateTimeParameter
### Properties
* **Name**: string (Required)
* **Values**: string[] (Required)

## DecimalParameter
### Properties
* **Name**: string (Required)
* **Values**: int[] (Required)

## IntegerParameter
### Properties
* **Name**: string (Required)
* **Values**: int[] (Required)

## StringParameter
### Properties
* **Name**: string (Required)
* **Values**: string[] (Required)

## ResourcePermission
### Properties
* **Actions**: string[] (Required)
* **Principal**: string (Required)
* **Resource**: string

## DashboardSourceEntity
### Properties
* **SourceTemplate**: [DashboardSourceTemplate](#dashboardsourcetemplate)

## DashboardSourceTemplate
### Properties
* **Arn**: string (Required)
* **DataSetReferences**: [DataSetReference](#datasetreference)[] (Required)

## DataSetReference
### Properties
* **DataSetArn**: string (Required)
* **DataSetPlaceholder**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

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

## DashboardError
### Properties
* **Message**: string
* **Type**: string
* **ViolatedEntities**: [Entity](#entity)[]

## Entity
### Properties
* **Path**: string

## Sheet
### Properties
* **Name**: string
* **SheetId**: string

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
* **Tags**: [Tag](#tag)[]: <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>

## ColumnGroup
### Properties
* **GeoSpatialColumnGroup**: [GeoSpatialColumnGroup](#geospatialcolumngroup)

## GeoSpatialColumnGroup
### Properties
* **Columns**: string[] (Required): <p>Columns in this hierarchy.</p>
* **CountryCode**: string
* **Name**: string (Required): <p>A display name for the hierarchy.</p>

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
* **Type**: string

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
* **FormatVersion**: string
* **Namespace**: string: <p>The namespace associated with the row-level permissions dataset.</p>
* **PermissionPolicy**: string (Required)

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

## DatabricksParameters
### Properties
* **Host**: string (Required): <p>Host.</p>
* **Port**: int (Required): <p>Port.</p>
* **SqlEndpointPath**: string (Required): <p>The HTTP Path of the Databricks data source.</p>

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
* **SecretArn**: string: <p>The Amazon Resource Name (ARN) of the secret associated with the data source in Amazon Secrets Manager.</p>

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
* **Type**: string

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

## Tag
### Properties
* **Key**: string (Required): <p>Tag key.</p>
* **Value**: string (Required): <p>Tag value.</p>

## VpcConnectionProperties
### Properties
* **VpcConnectionArn**: string (Required): <p>The Amazon Resource Name (ARN) for the VPC connection.</p>

## AWS.QuickSight/RefreshScheduleProperties
### Properties
* **Arn**: string (ReadOnly): <p>The Amazon Resource Name (ARN) of the data source.</p>
* **AwsAccountId**: string (Identifier)
* **DataSetId**: string (Identifier)
* **Schedule**: [RefreshScheduleMap](#refreshschedulemap)

## RefreshScheduleMap
### Properties
* **RefreshType**: string
* **ScheduleFrequency**: [RefreshSchedule_ScheduleFrequency](#refreshscheduleschedulefrequency): <p>Information about the schedule frequency.</p>
* **ScheduleId**: string: <p>An unique identifier for the refresh schedule.</p>
* **StartAfterDateTime**: string: <p>The date time after which refresh is to be scheduled</p>

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

## AWS.QuickSight/TemplateProperties
### Properties
* **Arn**: string (ReadOnly)
* **AwsAccountId**: string (Required, Identifier)
* **CreatedTime**: string (ReadOnly, WriteOnly)
* **Definition**: [TemplateVersionDefinition](#templateversiondefinition) (WriteOnly)
* **LastUpdatedTime**: string (ReadOnly, WriteOnly)
* **Name**: string
* **Permissions**: [ResourcePermission](#resourcepermission)[]
* **SourceEntity**: [TemplateSourceEntity](#templatesourceentity) (WriteOnly)
* **Tags**: [Tag](#tag)[]
* **TemplateId**: string (Required, Identifier)
* **Version**: [TemplateVersion](#templateversion) (ReadOnly, WriteOnly)
* **VersionDescription**: string (WriteOnly)

## TemplateVersionDefinition
### Properties
* **AnalysisDefaults**: [AnalysisDefaults](#analysisdefaults)
* **CalculatedFields**: [CalculatedField](#calculatedfield)[]
* **ColumnConfigurations**: [ColumnConfiguration](#columnconfiguration)[]
* **DataSetConfigurations**: [DataSetConfiguration](#datasetconfiguration)[] (Required)
* **FilterGroups**: [FilterGroup](#filtergroup)[]
* **ParameterDeclarations**: [ParameterDeclaration](#parameterdeclaration)[]
* **Sheets**: [SheetDefinition](#sheetdefinition)[]

## AnalysisDefaults
### Properties
* **DefaultNewSheetConfiguration**: [DefaultNewSheetConfiguration](#defaultnewsheetconfiguration) (Required)

## DefaultNewSheetConfiguration
### Properties
* **InteractiveLayoutConfiguration**: [DefaultInteractiveLayoutConfiguration](#defaultinteractivelayoutconfiguration)
* **PaginatedLayoutConfiguration**: [DefaultPaginatedLayoutConfiguration](#defaultpaginatedlayoutconfiguration)
* **SheetContentType**: string

## DefaultInteractiveLayoutConfiguration
### Properties
* **FreeForm**: [DefaultFreeFormLayoutConfiguration](#defaultfreeformlayoutconfiguration)
* **Grid**: [DefaultGridLayoutConfiguration](#defaultgridlayoutconfiguration)

## DefaultFreeFormLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [FreeFormLayoutCanvasSizeOptions](#freeformlayoutcanvassizeoptions) (Required)

## FreeFormLayoutCanvasSizeOptions
### Properties
* **ScreenCanvasSizeOptions**: [FreeFormLayoutScreenCanvasSizeOptions](#freeformlayoutscreencanvassizeoptions)

## FreeFormLayoutScreenCanvasSizeOptions
### Properties
* **OptimizedViewPortWidth**: string (Required): String based length that is composed of value and unit in px

## DefaultGridLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [GridLayoutCanvasSizeOptions](#gridlayoutcanvassizeoptions) (Required)

## GridLayoutCanvasSizeOptions
### Properties
* **ScreenCanvasSizeOptions**: [GridLayoutScreenCanvasSizeOptions](#gridlayoutscreencanvassizeoptions)

## GridLayoutScreenCanvasSizeOptions
### Properties
* **OptimizedViewPortWidth**: string: String based length that is composed of value and unit in px
* **ResizeOption**: string (Required)

## DefaultPaginatedLayoutConfiguration
### Properties
* **SectionBased**: [DefaultSectionBasedLayoutConfiguration](#defaultsectionbasedlayoutconfiguration)

## DefaultSectionBasedLayoutConfiguration
### Properties
* **CanvasSizeOptions**: [SectionBasedLayoutCanvasSizeOptions](#sectionbasedlayoutcanvassizeoptions) (Required)

## SectionBasedLayoutCanvasSizeOptions
### Properties
* **PaperCanvasSizeOptions**: [SectionBasedLayoutPaperCanvasSizeOptions](#sectionbasedlayoutpapercanvassizeoptions)

## SectionBasedLayoutPaperCanvasSizeOptions
### Properties
* **PaperMargin**: [Spacing](#spacing)
* **PaperOrientation**: string
* **PaperSize**: string

## Spacing
### Properties
* **Bottom**: string: String based length that is composed of value and unit
* **Left**: string: String based length that is composed of value and unit
* **Right**: string: String based length that is composed of value and unit
* **Top**: string: String based length that is composed of value and unit

## CalculatedField
### Properties
* **DataSetIdentifier**: string (Required)
* **Expression**: string (Required)
* **Name**: string (Required)

## ColumnConfiguration
### Properties
* **ColorsConfiguration**: [ColorsConfiguration](#colorsconfiguration)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FormatConfiguration**: [FormatConfiguration](#formatconfiguration)
* **Role**: string

## ColorsConfiguration
### Properties
* **CustomColors**: [CustomColor](#customcolor)[]

## CustomColor
### Properties
* **Color**: string (Required)
* **FieldValue**: string
* **SpecialValue**: string

## ColumnIdentifier
### Properties
* **ColumnName**: string (Required)
* **DataSetIdentifier**: string (Required)

## FormatConfiguration
### Properties
* **DateTimeFormatConfiguration**: [DateTimeFormatConfiguration](#datetimeformatconfiguration)
* **NumberFormatConfiguration**: [NumberFormatConfiguration](#numberformatconfiguration)
* **StringFormatConfiguration**: [StringFormatConfiguration](#stringformatconfiguration)

## DateTimeFormatConfiguration
### Properties
* **DateTimeFormat**: string
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **NumericFormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)

## NullValueFormatConfiguration
### Properties
* **NullString**: string (Required)

## NumericFormatConfiguration
### Properties
* **CurrencyDisplayFormatConfiguration**: [CurrencyDisplayFormatConfiguration](#currencydisplayformatconfiguration)
* **NumberDisplayFormatConfiguration**: [NumberDisplayFormatConfiguration](#numberdisplayformatconfiguration)
* **PercentageDisplayFormatConfiguration**: [PercentageDisplayFormatConfiguration](#percentagedisplayformatconfiguration)

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

## DecimalPlacesConfiguration
### Properties
* **DecimalPlaces**: int (Required)

## NegativeValueConfiguration
### Properties
* **DisplayMode**: string (Required)

## NumericSeparatorConfiguration
### Properties
* **DecimalSeparator**: string
* **ThousandsSeparator**: [ThousandSeparatorOptions](#thousandseparatoroptions)

## ThousandSeparatorOptions
### Properties
* **Symbol**: string
* **Visibility**: string

## NumberDisplayFormatConfiguration
### Properties
* **DecimalPlacesConfiguration**: [DecimalPlacesConfiguration](#decimalplacesconfiguration)
* **NegativeValueConfiguration**: [NegativeValueConfiguration](#negativevalueconfiguration)
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **NumberScale**: string
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

## NumberFormatConfiguration
### Properties
* **FormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)

## StringFormatConfiguration
### Properties
* **NullValueFormatConfiguration**: [NullValueFormatConfiguration](#nullvalueformatconfiguration)
* **NumericFormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)

## DataSetConfiguration
### Properties
* **ColumnGroupSchemaList**: [ColumnGroupSchema](#columngroupschema)[]
* **DataSetSchema**: [DataSetSchema](#datasetschema)
* **Placeholder**: string

## ColumnGroupSchema
### Properties
* **ColumnGroupColumnSchemaList**: [ColumnGroupColumnSchema](#columngroupcolumnschema)[]
* **Name**: string

## ColumnGroupColumnSchema
### Properties
* **Name**: string

## DataSetSchema
### Properties
* **ColumnSchemaList**: [ColumnSchema](#columnschema)[]

## ColumnSchema
### Properties
* **DataType**: string
* **GeographicRole**: string
* **Name**: string

## FilterGroup
### Properties
* **CrossDataset**: string (Required)
* **FilterGroupId**: string (Required)
* **Filters**: [Filter](#filter)[] (Required)
* **ScopeConfiguration**: [FilterScopeConfiguration](#filterscopeconfiguration) (Required)
* **Status**: string

## Filter
### Properties
* **CategoryFilter**: [CategoryFilter](#categoryfilter)
* **NumericEqualityFilter**: [NumericEqualityFilter](#numericequalityfilter)
* **NumericRangeFilter**: [NumericRangeFilter](#numericrangefilter)
* **RelativeDatesFilter**: [RelativeDatesFilter](#relativedatesfilter)
* **TimeEqualityFilter**: [TimeEqualityFilter](#timeequalityfilter)
* **TimeRangeFilter**: [TimeRangeFilter](#timerangefilter)
* **TopBottomFilter**: [TopBottomFilter](#topbottomfilter)

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

## FilterListConfiguration
### Properties
* **CategoryValues**: string[]
* **MatchOperator**: string (Required)
* **SelectAllOptions**: string

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

## AggregationFunction
### Properties
* **CategoricalAggregationFunction**: string
* **DateAggregationFunction**: string
* **NumericalAggregationFunction**: [NumericalAggregationFunction](#numericalaggregationfunction)

## NumericalAggregationFunction
### Properties
* **PercentileAggregation**: [PercentileAggregation](#percentileaggregation)
* **SimpleNumericalAggregation**: string

## PercentileAggregation
### Properties
* **PercentileValue**: int

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

## AnchorDateConfiguration
### Properties
* **AnchorOption**: string
* **ParameterName**: string

## ExcludePeriodConfiguration
### Properties
* **Amount**: int (Required)
* **Granularity**: string (Required)
* **Status**: string

## TimeEqualityFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FilterId**: string (Required)
* **ParameterName**: string
* **TimeGranularity**: string
* **Value**: string

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

## RollingDateConfiguration
### Properties
* **DataSetIdentifier**: string
* **Expression**: string (Required)

## TopBottomFilter
### Properties
* **AggregationSortConfigurations**: [AggregationSortConfiguration](#aggregationsortconfiguration)[] (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FilterId**: string (Required)
* **Limit**: int
* **ParameterName**: string
* **TimeGranularity**: string

## AggregationSortConfiguration
### Properties
* **AggregationFunction**: [AggregationFunction](#aggregationfunction) (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **SortDirection**: string (Required)

## FilterScopeConfiguration
### Properties
* **SelectedSheets**: [SelectedSheetsFilterScopeConfiguration](#selectedsheetsfilterscopeconfiguration)

## SelectedSheetsFilterScopeConfiguration
### Properties
* **SheetVisualScopingConfigurations**: [SheetVisualScopingConfiguration](#sheetvisualscopingconfiguration)[]

## SheetVisualScopingConfiguration
### Properties
* **Scope**: string (Required)
* **SheetId**: string (Required)
* **VisualIds**: string[]

## ParameterDeclaration
### Properties
* **DateTimeParameterDeclaration**: [DateTimeParameterDeclaration](#datetimeparameterdeclaration)
* **DecimalParameterDeclaration**: [DecimalParameterDeclaration](#decimalparameterdeclaration)
* **IntegerParameterDeclaration**: [IntegerParameterDeclaration](#integerparameterdeclaration)
* **StringParameterDeclaration**: [StringParameterDeclaration](#stringparameterdeclaration)

## DateTimeParameterDeclaration
### Properties
* **DefaultValues**: [DateTimeDefaultValues](#datetimedefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **TimeGranularity**: string
* **ValueWhenUnset**: [DateTimeValueWhenUnsetConfiguration](#datetimevaluewhenunsetconfiguration)

## DateTimeDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **RollingDate**: [RollingDateConfiguration](#rollingdateconfiguration)
* **StaticValues**: string[]

## DynamicDefaultValue
### Properties
* **DefaultValueColumn**: [ColumnIdentifier](#columnidentifier) (Required)
* **GroupNameColumn**: [ColumnIdentifier](#columnidentifier)
* **UserNameColumn**: [ColumnIdentifier](#columnidentifier)

## MappedDataSetParameter
### Properties
* **DataSetIdentifier**: string (Required)
* **DataSetParameterName**: string (Required)

## DateTimeValueWhenUnsetConfiguration
### Properties
* **CustomValue**: string
* **ValueWhenUnsetOption**: string

## DecimalParameterDeclaration
### Properties
* **DefaultValues**: [DecimalDefaultValues](#decimaldefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **ParameterValueType**: string (Required)
* **ValueWhenUnset**: [DecimalValueWhenUnsetConfiguration](#decimalvaluewhenunsetconfiguration)

## DecimalDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **StaticValues**: int[]

## DecimalValueWhenUnsetConfiguration
### Properties
* **CustomValue**: int
* **ValueWhenUnsetOption**: string

## IntegerParameterDeclaration
### Properties
* **DefaultValues**: [IntegerDefaultValues](#integerdefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **ParameterValueType**: string (Required)
* **ValueWhenUnset**: [IntegerValueWhenUnsetConfiguration](#integervaluewhenunsetconfiguration)

## IntegerDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **StaticValues**: int[]

## IntegerValueWhenUnsetConfiguration
### Properties
* **CustomValue**: int
* **ValueWhenUnsetOption**: string

## StringParameterDeclaration
### Properties
* **DefaultValues**: [StringDefaultValues](#stringdefaultvalues)
* **MappedDataSetParameters**: [MappedDataSetParameter](#mappeddatasetparameter)[]
* **Name**: string (Required)
* **ParameterValueType**: string (Required)
* **ValueWhenUnset**: [StringValueWhenUnsetConfiguration](#stringvaluewhenunsetconfiguration)

## StringDefaultValues
### Properties
* **DynamicValue**: [DynamicDefaultValue](#dynamicdefaultvalue)
* **StaticValues**: string[]

## StringValueWhenUnsetConfiguration
### Properties
* **CustomValue**: string
* **ValueWhenUnsetOption**: string

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

## DateTimePickerControlDisplayOptions
### Properties
* **DateTimeFormat**: string
* **TitleOptions**: [LabelOptions](#labeloptions)

## LabelOptions
### Properties
* **CustomLabel**: string
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)
* **Visibility**: string

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

## FontWeight
### Properties
* **Name**: string

## FilterDropDownControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **DisplayOptions**: [DropDownControlDisplayOptions](#dropdowncontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SelectableValues**: [FilterSelectableValues](#filterselectablevalues)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)
* **Type**: string

## CascadingControlConfiguration
### Properties
* **SourceControls**: [CascadingControlSource](#cascadingcontrolsource)[]

## CascadingControlSource
### Properties
* **ColumnToMatch**: [ColumnIdentifier](#columnidentifier)
* **SourceSheetControlId**: string

## DropDownControlDisplayOptions
### Properties
* **SelectAllOptions**: [ListControlSelectAllOptions](#listcontrolselectalloptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## ListControlSelectAllOptions
### Properties
* **Visibility**: string

## FilterSelectableValues
### Properties
* **Values**: string[]

## FilterListControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **DisplayOptions**: [ListControlDisplayOptions](#listcontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SelectableValues**: [FilterSelectableValues](#filterselectablevalues)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)
* **Type**: string

## ListControlDisplayOptions
### Properties
* **SearchOptions**: [ListControlSearchOptions](#listcontrolsearchoptions)
* **SelectAllOptions**: [ListControlSelectAllOptions](#listcontrolselectalloptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## ListControlSearchOptions
### Properties
* **Visibility**: string

## FilterRelativeDateTimeControl
### Properties
* **DisplayOptions**: [RelativeDateTimeControlDisplayOptions](#relativedatetimecontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)

## RelativeDateTimeControlDisplayOptions
### Properties
* **DateTimeFormat**: string
* **TitleOptions**: [LabelOptions](#labeloptions)

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

## SliderControlDisplayOptions
### Properties
* **TitleOptions**: [LabelOptions](#labeloptions)

## FilterTextAreaControl
### Properties
* **Delimiter**: string
* **DisplayOptions**: [TextAreaControlDisplayOptions](#textareacontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)

## TextAreaControlDisplayOptions
### Properties
* **PlaceholderOptions**: [TextControlPlaceholderOptions](#textcontrolplaceholderoptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## TextControlPlaceholderOptions
### Properties
* **Visibility**: string

## FilterTextFieldControl
### Properties
* **DisplayOptions**: [TextFieldControlDisplayOptions](#textfieldcontroldisplayoptions)
* **FilterControlId**: string (Required)
* **SourceFilterId**: string (Required)
* **Title**: string (Required)

## TextFieldControlDisplayOptions
### Properties
* **PlaceholderOptions**: [TextControlPlaceholderOptions](#textcontrolplaceholderoptions)
* **TitleOptions**: [LabelOptions](#labeloptions)

## Layout
### Properties
* **Configuration**: [LayoutConfiguration](#layoutconfiguration) (Required)

## LayoutConfiguration
### Properties
* **FreeFormLayout**: [FreeFormLayoutConfiguration](#freeformlayoutconfiguration)
* **GridLayout**: [GridLayoutConfiguration](#gridlayoutconfiguration)
* **SectionBasedLayout**: [SectionBasedLayoutConfiguration](#sectionbasedlayoutconfiguration)

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

## FreeFormLayoutElementBackgroundStyle
### Properties
* **Color**: string
* **Visibility**: string

## FreeFormLayoutElementBorderStyle
### Properties
* **Color**: string
* **Visibility**: string

## LoadingAnimation
### Properties
* **Visibility**: string

## SheetElementRenderingRule
### Properties
* **ConfigurationOverrides**: [SheetElementConfigurationOverrides](#sheetelementconfigurationoverrides) (Required)
* **Expression**: string (Required)

## SheetElementConfigurationOverrides
### Properties
* **Visibility**: string

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

## SectionBasedLayoutConfiguration
### Properties
* **BodySections**: [BodySectionConfiguration](#bodysectionconfiguration)[] (Required)
* **CanvasSizeOptions**: [SectionBasedLayoutCanvasSizeOptions](#sectionbasedlayoutcanvassizeoptions) (Required)
* **FooterSections**: [HeaderFooterSectionConfiguration](#headerfootersectionconfiguration)[] (Required)
* **HeaderSections**: [HeaderFooterSectionConfiguration](#headerfootersectionconfiguration)[] (Required)

## BodySectionConfiguration
### Properties
* **Content**: [BodySectionContent](#bodysectioncontent) (Required)
* **PageBreakConfiguration**: [SectionPageBreakConfiguration](#sectionpagebreakconfiguration)
* **SectionId**: string (Required)
* **Style**: [SectionStyle](#sectionstyle)

## BodySectionContent
### Properties
* **Layout**: [SectionLayoutConfiguration](#sectionlayoutconfiguration)

## SectionLayoutConfiguration
### Properties
* **FreeFormLayout**: [FreeFormSectionLayoutConfiguration](#freeformsectionlayoutconfiguration) (Required)

## FreeFormSectionLayoutConfiguration
### Properties
* **Elements**: [FreeFormLayoutElement](#freeformlayoutelement)[] (Required)

## SectionPageBreakConfiguration
### Properties
* **After**: [SectionAfterPageBreak](#sectionafterpagebreak)

## SectionAfterPageBreak
### Properties
* **Status**: string

## SectionStyle
### Properties
* **Height**: string: String based length that is composed of value and unit in px
* **Padding**: [Spacing](#spacing)

## HeaderFooterSectionConfiguration
### Properties
* **Layout**: [SectionLayoutConfiguration](#sectionlayoutconfiguration) (Required)
* **SectionId**: string (Required)
* **Style**: [SectionStyle](#sectionstyle)

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

## ParameterDropDownControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **DisplayOptions**: [DropDownControlDisplayOptions](#dropdowncontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SelectableValues**: [ParameterSelectableValues](#parameterselectablevalues)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)
* **Type**: string

## ParameterSelectableValues
### Properties
* **LinkToDataSetColumn**: [ColumnIdentifier](#columnidentifier)
* **Values**: string[]

## ParameterListControl
### Properties
* **CascadingControlConfiguration**: [CascadingControlConfiguration](#cascadingcontrolconfiguration)
* **DisplayOptions**: [ListControlDisplayOptions](#listcontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SelectableValues**: [ParameterSelectableValues](#parameterselectablevalues)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)
* **Type**: string

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

## ParameterTextFieldControl
### Properties
* **DisplayOptions**: [TextFieldControlDisplayOptions](#textfieldcontroldisplayoptions)
* **ParameterControlId**: string (Required)
* **SourceParameterName**: string (Required)
* **Title**: string (Required)

## SheetControlLayout
### Properties
* **Configuration**: [SheetControlLayoutConfiguration](#sheetcontrollayoutconfiguration) (Required)

## SheetControlLayoutConfiguration
### Properties
* **GridLayout**: [GridLayoutConfiguration](#gridlayoutconfiguration)

## SheetTextBox
### Properties
* **Content**: string
* **SheetTextBoxId**: string (Required)

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

## BarChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [BarChartConfiguration](#barchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## CustomActionFilterOperation
### Properties
* **SelectedFieldsConfiguration**: [FilterOperationSelectedFieldsConfiguration](#filteroperationselectedfieldsconfiguration) (Required)
* **TargetVisualsConfiguration**: [FilterOperationTargetVisualsConfiguration](#filteroperationtargetvisualsconfiguration) (Required)

## FilterOperationSelectedFieldsConfiguration
### Properties
* **SelectedFieldOptions**: string
* **SelectedFields**: string[]

## FilterOperationTargetVisualsConfiguration
### Properties
* **SameSheetTargetVisualConfiguration**: [SameSheetTargetVisualConfiguration](#samesheettargetvisualconfiguration)

## SameSheetTargetVisualConfiguration
### Properties
* **TargetVisualOptions**: string
* **TargetVisuals**: string[]

## CustomActionNavigationOperation
### Properties
* **LocalNavigationConfiguration**: [LocalNavigationConfiguration](#localnavigationconfiguration)

## LocalNavigationConfiguration
### Properties
* **TargetSheetId**: string (Required)

## CustomActionSetParametersOperation
### Properties
* **ParameterValueConfigurations**: [SetParameterValueConfiguration](#setparametervalueconfiguration)[] (Required)

## SetParameterValueConfiguration
### Properties
* **DestinationParameterName**: string (Required)
* **Value**: [DestinationParameterValueConfiguration](#destinationparametervalueconfiguration) (Required)

## DestinationParameterValueConfiguration
### Properties
* **CustomValuesConfiguration**: [CustomValuesConfiguration](#customvaluesconfiguration)
* **SelectAllValueOptions**: string
* **SourceField**: string
* **SourceParameterName**: string

## CustomValuesConfiguration
### Properties
* **CustomValues**: [CustomParameterValues](#customparametervalues) (Required)
* **IncludeNullValue**: bool

## CustomParameterValues
### Properties
* **DateTimeValues**: string[]
* **DecimalValues**: int[]
* **IntegerValues**: int[]
* **StringValues**: string[]

## CustomActionURLOperation
### Properties
* **URLTarget**: string (Required)
* **URLTemplate**: string (Required)

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

## AxisDisplayOptions
### Properties
* **AxisLineVisibility**: string
* **AxisOffset**: string: String based length that is composed of value and unit in px
* **DataOptions**: [AxisDataOptions](#axisdataoptions)
* **GridLineVisibility**: string
* **ScrollbarOptions**: [ScrollBarOptions](#scrollbaroptions)
* **TickLabelOptions**: [AxisTickLabelOptions](#axisticklabeloptions)

## AxisDataOptions
### Properties
* **DateAxisOptions**: [DateAxisOptions](#dateaxisoptions)
* **NumericAxisOptions**: [NumericAxisOptions](#numericaxisoptions)

## DateAxisOptions
### Properties
* **MissingDateVisibility**: string

## NumericAxisOptions
### Properties
* **Range**: [AxisDisplayRange](#axisdisplayrange)
* **Scale**: [AxisScale](#axisscale)

## AxisDisplayRange
### Properties
* **DataDriven**: [AxisDisplayDataDrivenRange](#axisdisplaydatadrivenrange)
* **MinMax**: [AxisDisplayMinMaxRange](#axisdisplayminmaxrange)

## AxisDisplayDataDrivenRange
### Properties

## AxisDisplayMinMaxRange
### Properties
* **Maximum**: int
* **Minimum**: int

## AxisScale
### Properties
* **Linear**: [AxisLinearScale](#axislinearscale)
* **Logarithmic**: [AxisLogarithmicScale](#axislogarithmicscale)

## AxisLinearScale
### Properties
* **StepCount**: int
* **StepSize**: int

## AxisLogarithmicScale
### Properties
* **Base**: int

## ScrollBarOptions
### Properties
* **Visibility**: string
* **VisibleRange**: [VisibleRangeOptions](#visiblerangeoptions)

## VisibleRangeOptions
### Properties
* **PercentRange**: [PercentVisibleRange](#percentvisiblerange)

## PercentVisibleRange
### Properties
* **From**: int
* **To**: int

## AxisTickLabelOptions
### Properties
* **LabelOptions**: [LabelOptions](#labeloptions)
* **RotationAngle**: int

## ChartAxisLabelOptions
### Properties
* **AxisLabelOptions**: [AxisLabelOptions](#axislabeloptions)[]
* **SortIconVisibility**: string
* **Visibility**: string

## AxisLabelOptions
### Properties
* **ApplyTo**: [AxisLabelReferenceOptions](#axislabelreferenceoptions)
* **CustomLabel**: string
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)

## AxisLabelReferenceOptions
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)

## ContributionAnalysisDefault
### Properties
* **ContributorDimensions**: [ColumnIdentifier](#columnidentifier)[] (Required)
* **MeasureFieldId**: string (Required)

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
* **Visibility**: string

## DataLabelType
### Properties
* **DataPathLabelType**: [DataPathLabelType](#datapathlabeltype)
* **FieldLabelType**: [FieldLabelType](#fieldlabeltype)
* **MaximumLabelType**: [MaximumLabelType](#maximumlabeltype)
* **MinimumLabelType**: [MinimumLabelType](#minimumlabeltype)
* **RangeEndsLabelType**: [RangeEndsLabelType](#rangeendslabeltype)

## DataPathLabelType
### Properties
* **FieldId**: string
* **FieldValue**: string
* **Visibility**: string

## FieldLabelType
### Properties
* **FieldId**: string
* **Visibility**: string

## MaximumLabelType
### Properties
* **Visibility**: string

## MinimumLabelType
### Properties
* **Visibility**: string

## RangeEndsLabelType
### Properties
* **Visibility**: string

## BarChartFieldWells
### Properties
* **BarChartAggregatedFieldWells**: [BarChartAggregatedFieldWells](#barchartaggregatedfieldwells)

## BarChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Colors**: [DimensionField](#dimensionfield)[]
* **SmallMultiples**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## DimensionField
### Properties
* **CategoricalDimensionField**: [CategoricalDimensionField](#categoricaldimensionfield)
* **DateDimensionField**: [DateDimensionField](#datedimensionfield)
* **NumericalDimensionField**: [NumericalDimensionField](#numericaldimensionfield)

## CategoricalDimensionField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [StringFormatConfiguration](#stringformatconfiguration)
* **HierarchyId**: string

## DateDimensionField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **DateGranularity**: string
* **FieldId**: string (Required)
* **FormatConfiguration**: [DateTimeFormatConfiguration](#datetimeformatconfiguration)
* **HierarchyId**: string

## NumericalDimensionField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [NumberFormatConfiguration](#numberformatconfiguration)
* **HierarchyId**: string

## MeasureField
### Properties
* **CalculatedMeasureField**: [CalculatedMeasureField](#calculatedmeasurefield)
* **CategoricalMeasureField**: [CategoricalMeasureField](#categoricalmeasurefield)
* **DateMeasureField**: [DateMeasureField](#datemeasurefield)
* **NumericalMeasureField**: [NumericalMeasureField](#numericalmeasurefield)

## CalculatedMeasureField
### Properties
* **Expression**: string (Required)
* **FieldId**: string (Required)

## CategoricalMeasureField
### Properties
* **AggregationFunction**: string
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [StringFormatConfiguration](#stringformatconfiguration)

## DateMeasureField
### Properties
* **AggregationFunction**: string
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [DateTimeFormatConfiguration](#datetimeformatconfiguration)

## NumericalMeasureField
### Properties
* **AggregationFunction**: [NumericalAggregationFunction](#numericalaggregationfunction)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [NumberFormatConfiguration](#numberformatconfiguration)

## LegendOptions
### Properties
* **Height**: string: String based length that is composed of value and unit in px
* **Position**: string
* **Title**: [LabelOptions](#labeloptions)
* **Visibility**: string
* **Width**: string: String based length that is composed of value and unit in px

## ReferenceLine
### Properties
* **DataConfiguration**: [ReferenceLineDataConfiguration](#referencelinedataconfiguration) (Required)
* **LabelConfiguration**: [ReferenceLineLabelConfiguration](#referencelinelabelconfiguration)
* **Status**: string
* **StyleConfiguration**: [ReferenceLineStyleConfiguration](#referencelinestyleconfiguration)

## ReferenceLineDataConfiguration
### Properties
* **AxisBinding**: string
* **DynamicConfiguration**: [ReferenceLineDynamicDataConfiguration](#referencelinedynamicdataconfiguration)
* **StaticConfiguration**: [ReferenceLineStaticDataConfiguration](#referencelinestaticdataconfiguration)

## ReferenceLineDynamicDataConfiguration
### Properties
* **Calculation**: [NumericalAggregationFunction](#numericalaggregationfunction) (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **MeasureAggregationFunction**: [AggregationFunction](#aggregationfunction) (Required)

## ReferenceLineStaticDataConfiguration
### Properties
* **Value**: int (Required)

## ReferenceLineLabelConfiguration
### Properties
* **CustomLabelConfiguration**: [ReferenceLineCustomLabelConfiguration](#referencelinecustomlabelconfiguration)
* **FontColor**: string
* **FontConfiguration**: [FontConfiguration](#fontconfiguration)
* **HorizontalPosition**: string
* **ValueLabelConfiguration**: [ReferenceLineValueLabelConfiguration](#referencelinevaluelabelconfiguration)
* **VerticalPosition**: string

## ReferenceLineCustomLabelConfiguration
### Properties
* **CustomLabel**: string (Required)

## ReferenceLineValueLabelConfiguration
### Properties
* **FormatConfiguration**: [NumericFormatConfiguration](#numericformatconfiguration)
* **RelativePosition**: string

## ReferenceLineStyleConfiguration
### Properties
* **Color**: string
* **Pattern**: string

## SmallMultiplesOptions
### Properties
* **MaxVisibleColumns**: int
* **MaxVisibleRows**: int
* **PanelConfiguration**: [PanelConfiguration](#panelconfiguration)

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

## BarChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **ColorSort**: [FieldSortOptions](#fieldsortoptions)[]
* **SmallMultiplesLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SmallMultiplesSort**: [FieldSortOptions](#fieldsortoptions)[]

## ItemsLimitConfiguration
### Properties
* **ItemsLimit**: int
* **OtherCategories**: string

## FieldSortOptions
### Properties
* **ColumnSort**: [ColumnSort](#columnsort)
* **FieldSort**: [FieldSort](#fieldsort)

## ColumnSort
### Properties
* **AggregationFunction**: [AggregationFunction](#aggregationfunction)
* **Direction**: string (Required)
* **SortBy**: [ColumnIdentifier](#columnidentifier) (Required)

## FieldSort
### Properties
* **Direction**: string (Required)
* **FieldId**: string (Required)

## TooltipOptions
### Properties
* **FieldBasedTooltip**: [FieldBasedTooltip](#fieldbasedtooltip)
* **SelectedTooltipType**: string
* **TooltipVisibility**: string

## FieldBasedTooltip
### Properties
* **AggregationVisibility**: string
* **TooltipFields**: [TooltipItem](#tooltipitem)[]
* **TooltipTitleType**: string

## TooltipItem
### Properties
* **ColumnTooltipItem**: [ColumnTooltipItem](#columntooltipitem)
* **FieldTooltipItem**: [FieldTooltipItem](#fieldtooltipitem)

## ColumnTooltipItem
### Properties
* **Aggregation**: [AggregationFunction](#aggregationfunction)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **Label**: string
* **Visibility**: string

## FieldTooltipItem
### Properties
* **FieldId**: string (Required)
* **Label**: string
* **Visibility**: string

## VisualPalette
### Properties
* **ChartColor**: string
* **ColorMap**: [DataPathColor](#datapathcolor)[]

## DataPathColor
### Properties
* **Color**: string (Required)
* **Element**: [DataPathValue](#datapathvalue) (Required)
* **TimeGranularity**: string

## DataPathValue
### Properties
* **FieldId**: string (Required)
* **FieldValue**: string (Required)

## ColumnHierarchy
### Properties
* **DateTimeHierarchy**: [DateTimeHierarchy](#datetimehierarchy)
* **ExplicitHierarchy**: [ExplicitHierarchy](#explicithierarchy)
* **PredefinedHierarchy**: [PredefinedHierarchy](#predefinedhierarchy)

## DateTimeHierarchy
### Properties
* **DrillDownFilters**: [DrillDownFilter](#drilldownfilter)[]
* **HierarchyId**: string (Required)

## DrillDownFilter
### Properties
* **CategoryFilter**: [CategoryDrillDownFilter](#categorydrilldownfilter)
* **NumericEqualityFilter**: [NumericEqualityDrillDownFilter](#numericequalitydrilldownfilter)
* **TimeRangeFilter**: [TimeRangeDrillDownFilter](#timerangedrilldownfilter)

## CategoryDrillDownFilter
### Properties
* **CategoryValues**: string[] (Required)
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)

## NumericEqualityDrillDownFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **Value**: int (Required)

## TimeRangeDrillDownFilter
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **RangeMaximum**: string (Required)
* **RangeMinimum**: string (Required)
* **TimeGranularity**: string (Required)

## ExplicitHierarchy
### Properties
* **Columns**: [ColumnIdentifier](#columnidentifier)[] (Required)
* **DrillDownFilters**: [DrillDownFilter](#drilldownfilter)[]
* **HierarchyId**: string (Required)

## PredefinedHierarchy
### Properties
* **Columns**: [ColumnIdentifier](#columnidentifier)[] (Required)
* **DrillDownFilters**: [DrillDownFilter](#drilldownfilter)[]
* **HierarchyId**: string (Required)

## VisualSubtitleLabelOptions
### Properties
* **FormatText**: [LongFormatText](#longformattext)
* **Visibility**: string

## LongFormatText
### Properties
* **PlainText**: string
* **RichText**: string

## VisualTitleLabelOptions
### Properties
* **FormatText**: [ShortFormatText](#shortformattext)
* **Visibility**: string

## ShortFormatText
### Properties
* **PlainText**: string
* **RichText**: string

## BoxPlotVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [BoxPlotChartConfiguration](#boxplotchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## BoxPlotOptions
### Properties
* **AllDataPointsVisibility**: string
* **OutlierVisibility**: string
* **StyleOptions**: [BoxPlotStyleOptions](#boxplotstyleoptions)

## BoxPlotStyleOptions
### Properties
* **FillStyle**: string

## BoxPlotFieldWells
### Properties
* **BoxPlotAggregatedFieldWells**: [BoxPlotAggregatedFieldWells](#boxplotaggregatedfieldwells)

## BoxPlotAggregatedFieldWells
### Properties
* **GroupBy**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## BoxPlotSortConfiguration
### Properties
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **PaginationConfiguration**: [PaginationConfiguration](#paginationconfiguration)

## PaginationConfiguration
### Properties
* **PageNumber**: int (Required)
* **PageSize**: int (Required)

## ComboChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [ComboChartConfiguration](#combochartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## ComboChartAggregatedFieldWells
### Properties
* **BarValues**: [MeasureField](#measurefield)[]
* **Category**: [DimensionField](#dimensionfield)[]
* **Colors**: [DimensionField](#dimensionfield)[]
* **LineValues**: [MeasureField](#measurefield)[]

## ComboChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **ColorSort**: [FieldSortOptions](#fieldsortoptions)[]

## CustomContentVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [CustomContentConfiguration](#customcontentconfiguration)
* **DataSetIdentifier**: string (Required)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## CustomContentConfiguration
### Properties
* **ContentType**: string
* **ContentUrl**: string
* **ImageScaling**: string

## EmptyVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **DataSetIdentifier**: string (Required)
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

## FilledMapAggregatedFieldWells
### Properties
* **Geospatial**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## GeospatialMapStyleOptions
### Properties
* **BaseMapStyle**: string

## FilledMapSortConfiguration
### Properties
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## GeospatialWindowOptions
### Properties
* **Bounds**: [GeospatialCoordinateBounds](#geospatialcoordinatebounds)
* **MapZoomMode**: string

## GeospatialCoordinateBounds
### Properties
* **East**: int (Required)
* **North**: int (Required)
* **South**: int (Required)
* **West**: int (Required)

## FilledMapConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [FilledMapConditionalFormattingOption](#filledmapconditionalformattingoption)[] (Required)

## FilledMapConditionalFormattingOption
### Properties
* **Shape**: [FilledMapShapeConditionalFormatting](#filledmapshapeconditionalformatting) (Required)

## FilledMapShapeConditionalFormatting
### Properties
* **FieldId**: string (Required)
* **Format**: [ShapeConditionalFormat](#shapeconditionalformat)

## ShapeConditionalFormat
### Properties
* **BackgroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor) (Required)

## ConditionalFormattingColor
### Properties
* **Gradient**: [ConditionalFormattingGradientColor](#conditionalformattinggradientcolor)
* **Solid**: [ConditionalFormattingSolidColor](#conditionalformattingsolidcolor)

## ConditionalFormattingGradientColor
### Properties
* **Color**: [GradientColor](#gradientcolor) (Required)
* **Expression**: string (Required)

## GradientColor
### Properties
* **Stops**: [GradientStop](#gradientstop)[]

## GradientStop
### Properties
* **Color**: string
* **DataValue**: int
* **GradientOffset**: int (Required)

## ConditionalFormattingSolidColor
### Properties
* **Color**: string
* **Expression**: string (Required)

## FunnelChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [FunnelChartConfiguration](#funnelchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## FunnelChartFieldWells
### Properties
* **FunnelChartAggregatedFieldWells**: [FunnelChartAggregatedFieldWells](#funnelchartaggregatedfieldwells)

## FunnelChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## FunnelChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## GaugeChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [GaugeChartConfiguration](#gaugechartconfiguration)
* **ConditionalFormatting**: [GaugeChartConditionalFormatting](#gaugechartconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## GaugeChartOptions
### Properties
* **Arc**: [ArcConfiguration](#arcconfiguration)
* **ArcAxis**: [ArcAxisConfiguration](#arcaxisconfiguration)
* **Comparison**: [ComparisonConfiguration](#comparisonconfiguration)
* **PrimaryValueDisplayType**: string
* **PrimaryValueFontConfiguration**: [FontConfiguration](#fontconfiguration)

## ArcConfiguration
### Properties
* **ArcAngle**: int
* **ArcThickness**: string

## ArcAxisConfiguration
### Properties
* **Range**: [ArcAxisDisplayRange](#arcaxisdisplayrange)
* **ReserveRange**: int

## ArcAxisDisplayRange
### Properties
* **Max**: int
* **Min**: int

## ComparisonConfiguration
### Properties
* **ComparisonFormat**: [ComparisonFormatConfiguration](#comparisonformatconfiguration)
* **ComparisonMethod**: string

## ComparisonFormatConfiguration
### Properties
* **NumberDisplayFormatConfiguration**: [NumberDisplayFormatConfiguration](#numberdisplayformatconfiguration)
* **PercentageDisplayFormatConfiguration**: [PercentageDisplayFormatConfiguration](#percentagedisplayformatconfiguration)

## GaugeChartConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [GaugeChartConditionalFormattingOption](#gaugechartconditionalformattingoption)[]

## GaugeChartConditionalFormattingOption
### Properties
* **Arc**: [GaugeChartArcConditionalFormatting](#gaugechartarcconditionalformatting)
* **PrimaryValue**: [GaugeChartPrimaryValueConditionalFormatting](#gaugechartprimaryvalueconditionalformatting)

## GaugeChartArcConditionalFormatting
### Properties
* **ForegroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## GaugeChartPrimaryValueConditionalFormatting
### Properties
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## ConditionalFormattingIcon
### Properties
* **CustomCondition**: [ConditionalFormattingCustomIconCondition](#conditionalformattingcustomiconcondition)
* **IconSet**: [ConditionalFormattingIconSet](#conditionalformattingiconset)

## ConditionalFormattingCustomIconCondition
### Properties
* **Color**: string
* **DisplayConfiguration**: [ConditionalFormattingIconDisplayConfiguration](#conditionalformattingicondisplayconfiguration)
* **Expression**: string (Required)
* **IconOptions**: [ConditionalFormattingCustomIconOptions](#conditionalformattingcustomiconoptions) (Required)

## ConditionalFormattingIconDisplayConfiguration
### Properties
* **IconDisplayOption**: string

## ConditionalFormattingCustomIconOptions
### Properties
* **Icon**: string
* **UnicodeIcon**: string

## ConditionalFormattingIconSet
### Properties
* **Expression**: string (Required)
* **IconSetType**: string

## GeospatialMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [GeospatialMapConfiguration](#geospatialmapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## GeospatialMapAggregatedFieldWells
### Properties
* **Colors**: [DimensionField](#dimensionfield)[]
* **Geospatial**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## GeospatialPointStyleOptions
### Properties
* **ClusterMarkerConfiguration**: [ClusterMarkerConfiguration](#clustermarkerconfiguration)
* **SelectedPointStyle**: string

## ClusterMarkerConfiguration
### Properties
* **ClusterMarker**: [ClusterMarker](#clustermarker)

## ClusterMarker
### Properties
* **SimpleClusterMarker**: [SimpleClusterMarker](#simpleclustermarker)

## SimpleClusterMarker
### Properties
* **Color**: string

## HeatMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [HeatMapConfiguration](#heatmapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## ColorScale
### Properties
* **ColorFillType**: string (Required)
* **Colors**: [DataColor](#datacolor)[] (Required)
* **NullValueColor**: [DataColor](#datacolor)

## DataColor
### Properties
* **Color**: string
* **DataValue**: int

## HeatMapFieldWells
### Properties
* **HeatMapAggregatedFieldWells**: [HeatMapAggregatedFieldWells](#heatmapaggregatedfieldwells)

## HeatMapAggregatedFieldWells
### Properties
* **Columns**: [DimensionField](#dimensionfield)[]
* **Rows**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## HeatMapSortConfiguration
### Properties
* **HeatMapColumnItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **HeatMapColumnSort**: [FieldSortOptions](#fieldsortoptions)[]
* **HeatMapRowItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **HeatMapRowSort**: [FieldSortOptions](#fieldsortoptions)[]

## HistogramVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [HistogramConfiguration](#histogramconfiguration)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## HistogramBinOptions
### Properties
* **BinCount**: [BinCountOptions](#bincountoptions)
* **BinWidth**: [BinWidthOptions](#binwidthoptions)
* **SelectedBinType**: string
* **StartValue**: int

## BinCountOptions
### Properties
* **Value**: int

## BinWidthOptions
### Properties
* **BinCountLimit**: int
* **Value**: int

## HistogramFieldWells
### Properties
* **HistogramAggregatedFieldWells**: [HistogramAggregatedFieldWells](#histogramaggregatedfieldwells)

## HistogramAggregatedFieldWells
### Properties
* **Values**: [MeasureField](#measurefield)[]

## InsightVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **DataSetIdentifier**: string (Required)
* **InsightConfiguration**: [InsightConfiguration](#insightconfiguration)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## InsightConfiguration
### Properties
* **Computations**: [Computation](#computation)[]
* **CustomNarrative**: [CustomNarrativeOptions](#customnarrativeoptions)

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
* **Time**: [DimensionField](#dimensionfield) (Required)
* **UpperBoundary**: int
* **Value**: [MeasureField](#measurefield)

## GrowthRateComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **PeriodSize**: int
* **Time**: [DimensionField](#dimensionfield) (Required)
* **Value**: [MeasureField](#measurefield)

## MaximumMinimumComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **Time**: [DimensionField](#dimensionfield) (Required)
* **Type**: string (Required)
* **Value**: [MeasureField](#measurefield)

## MetricComparisonComputation
### Properties
* **ComputationId**: string (Required)
* **FromValue**: [MeasureField](#measurefield) (Required)
* **Name**: string
* **TargetValue**: [MeasureField](#measurefield) (Required)
* **Time**: [DimensionField](#dimensionfield) (Required)

## PeriodOverPeriodComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **Time**: [DimensionField](#dimensionfield) (Required)
* **Value**: [MeasureField](#measurefield)

## PeriodToDateComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **PeriodTimeGranularity**: string
* **Time**: [DimensionField](#dimensionfield) (Required)
* **Value**: [MeasureField](#measurefield)

## TopBottomMoversComputation
### Properties
* **Category**: [DimensionField](#dimensionfield) (Required)
* **ComputationId**: string (Required)
* **MoverSize**: int
* **Name**: string
* **SortOrder**: string
* **Time**: [DimensionField](#dimensionfield) (Required)
* **Type**: string (Required)
* **Value**: [MeasureField](#measurefield)

## TopBottomRankedComputation
### Properties
* **Category**: [DimensionField](#dimensionfield) (Required)
* **ComputationId**: string (Required)
* **Name**: string
* **ResultSize**: int
* **Type**: string (Required)
* **Value**: [MeasureField](#measurefield)

## TotalAggregationComputation
### Properties
* **ComputationId**: string (Required)
* **Name**: string
* **Value**: [MeasureField](#measurefield) (Required)

## UniqueValuesComputation
### Properties
* **Category**: [DimensionField](#dimensionfield) (Required)
* **ComputationId**: string (Required)
* **Name**: string

## CustomNarrativeOptions
### Properties
* **Narrative**: string (Required)

## KPIVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [KPIConfiguration](#kpiconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **ConditionalFormatting**: [KPIConditionalFormatting](#kpiconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## KPIOptions
### Properties
* **Comparison**: [ComparisonConfiguration](#comparisonconfiguration)
* **PrimaryValueDisplayType**: string
* **PrimaryValueFontConfiguration**: [FontConfiguration](#fontconfiguration)
* **ProgressBar**: [ProgressBarOptions](#progressbaroptions)
* **SecondaryValue**: [SecondaryValueOptions](#secondaryvalueoptions)
* **SecondaryValueFontConfiguration**: [FontConfiguration](#fontconfiguration)
* **TrendArrows**: [TrendArrowOptions](#trendarrowoptions)

## ProgressBarOptions
### Properties
* **Visibility**: string

## SecondaryValueOptions
### Properties
* **Visibility**: string

## TrendArrowOptions
### Properties
* **Visibility**: string

## KPISortConfiguration
### Properties
* **TrendGroupSort**: [FieldSortOptions](#fieldsortoptions)[]

## KPIConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [KPIConditionalFormattingOption](#kpiconditionalformattingoption)[]

## KPIConditionalFormattingOption
### Properties
* **PrimaryValue**: [KPIPrimaryValueConditionalFormatting](#kpiprimaryvalueconditionalformatting)
* **ProgressBar**: [KPIProgressBarConditionalFormatting](#kpiprogressbarconditionalformatting)

## KPIPrimaryValueConditionalFormatting
### Properties
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## KPIProgressBarConditionalFormatting
### Properties
* **ForegroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## LineChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [LineChartConfiguration](#linechartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## LineChartFieldWells
### Properties
* **LineChartAggregatedFieldWells**: [LineChartAggregatedFieldWells](#linechartaggregatedfieldwells)

## LineChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Colors**: [DimensionField](#dimensionfield)[]
* **SmallMultiples**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## ForecastConfiguration
### Properties
* **ForecastProperties**: [TimeBasedForecastProperties](#timebasedforecastproperties)
* **Scenario**: [ForecastScenario](#forecastscenario)

## TimeBasedForecastProperties
### Properties
* **LowerBoundary**: int
* **PeriodsBackward**: int
* **PeriodsForward**: int
* **PredictionInterval**: int
* **Seasonality**: int
* **UpperBoundary**: int

## ForecastScenario
### Properties
* **WhatIfPointScenario**: [WhatIfPointScenario](#whatifpointscenario)
* **WhatIfRangeScenario**: [WhatIfRangeScenario](#whatifrangescenario)

## WhatIfPointScenario
### Properties
* **Date**: string (Required)
* **Value**: int (Required)

## WhatIfRangeScenario
### Properties
* **EndDate**: string (Required)
* **StartDate**: string (Required)
* **Value**: int (Required)

## LineSeriesAxisDisplayOptions
### Properties
* **AxisOptions**: [AxisDisplayOptions](#axisdisplayoptions)
* **MissingDataConfigurations**: [MissingDataConfiguration](#missingdataconfiguration)[]

## MissingDataConfiguration
### Properties
* **TreatmentOption**: string

## SeriesItem
### Properties
* **DataFieldSeriesItem**: [DataFieldSeriesItem](#datafieldseriesitem)
* **FieldSeriesItem**: [FieldSeriesItem](#fieldseriesitem)

## DataFieldSeriesItem
### Properties
* **AxisBinding**: string (Required)
* **FieldId**: string (Required)
* **FieldValue**: string
* **Settings**: [LineChartSeriesSettings](#linechartseriessettings)

## LineChartSeriesSettings
### Properties
* **LineStyleSettings**: [LineChartLineStyleSettings](#linechartlinestylesettings)
* **MarkerStyleSettings**: [LineChartMarkerStyleSettings](#linechartmarkerstylesettings)

## FieldSeriesItem
### Properties
* **AxisBinding**: string (Required)
* **FieldId**: string (Required)
* **Settings**: [LineChartSeriesSettings](#linechartseriessettings)

## LineChartSortConfiguration
### Properties
* **CategoryItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
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

## DonutOptions
### Properties
* **ArcOptions**: [ArcOptions](#arcoptions)
* **DonutCenterOptions**: [DonutCenterOptions](#donutcenteroptions)

## ArcOptions
### Properties
* **ArcThickness**: string

## DonutCenterOptions
### Properties
* **LabelVisibility**: string

## PieChartFieldWells
### Properties
* **PieChartAggregatedFieldWells**: [PieChartAggregatedFieldWells](#piechartaggregatedfieldwells)

## PieChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **SmallMultiples**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## PieChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **SmallMultiplesLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SmallMultiplesSort**: [FieldSortOptions](#fieldsortoptions)[]

## PivotTableVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [PivotTableConfiguration](#pivottableconfiguration)
* **ConditionalFormatting**: [PivotTableConditionalFormatting](#pivottableconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## PivotTableConfiguration
### Properties
* **FieldOptions**: [PivotTableFieldOptions](#pivottablefieldoptions)
* **FieldWells**: [PivotTableFieldWells](#pivottablefieldwells)
* **PaginatedReportOptions**: [PivotTablePaginatedReportOptions](#pivottablepaginatedreportoptions)
* **SortConfiguration**: [PivotTableSortConfiguration](#pivottablesortconfiguration)
* **TableOptions**: [PivotTableOptions](#pivottableoptions)
* **TotalOptions**: [PivotTableTotalOptions](#pivottabletotaloptions)

## PivotTableFieldOptions
### Properties
* **DataPathOptions**: [PivotTableDataPathOption](#pivottabledatapathoption)[]
* **SelectedFieldOptions**: [PivotTableFieldOption](#pivottablefieldoption)[]

## PivotTableDataPathOption
### Properties
* **DataPathList**: [DataPathValue](#datapathvalue)[] (Required)
* **Width**: string: String based length that is composed of value and unit in px

## PivotTableFieldOption
### Properties
* **CustomLabel**: string
* **FieldId**: string (Required)
* **Visibility**: string

## PivotTableFieldWells
### Properties
* **PivotTableAggregatedFieldWells**: [PivotTableAggregatedFieldWells](#pivottableaggregatedfieldwells)

## PivotTableAggregatedFieldWells
### Properties
* **Columns**: [DimensionField](#dimensionfield)[]
* **Rows**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## PivotTablePaginatedReportOptions
### Properties
* **OverflowColumnHeaderVisibility**: string
* **VerticalOverflowVisibility**: string

## PivotTableSortConfiguration
### Properties
* **FieldSortOptions**: [PivotFieldSortOptions](#pivotfieldsortoptions)[]

## PivotFieldSortOptions
### Properties
* **FieldId**: string (Required)
* **SortBy**: [PivotTableSortBy](#pivottablesortby) (Required)

## PivotTableSortBy
### Properties
* **Column**: [ColumnSort](#columnsort)
* **DataPath**: [DataPathSort](#datapathsort)
* **Field**: [FieldSort](#fieldsort)

## DataPathSort
### Properties
* **Direction**: string (Required)
* **SortPaths**: [DataPathValue](#datapathvalue)[] (Required)

## PivotTableOptions
### Properties
* **CellStyle**: [TableCellStyle](#tablecellstyle)
* **ColumnHeaderStyle**: [TableCellStyle](#tablecellstyle)
* **ColumnNamesVisibility**: string
* **MetricPlacement**: string
* **RowAlternateColorOptions**: [RowAlternateColorOptions](#rowalternatecoloroptions)
* **RowFieldNamesStyle**: [TableCellStyle](#tablecellstyle)
* **RowHeaderStyle**: [TableCellStyle](#tablecellstyle)
* **SingleMetricVisibility**: string
* **ToggleButtonsVisibility**: string

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

## GlobalTableBorderOptions
### Properties
* **SideSpecificBorder**: [TableSideBorderOptions](#tablesideborderoptions)
* **UniformBorder**: [TableBorderOptions](#tableborderoptions)

## TableSideBorderOptions
### Properties
* **Bottom**: [TableBorderOptions](#tableborderoptions)
* **InnerHorizontal**: [TableBorderOptions](#tableborderoptions)
* **InnerVertical**: [TableBorderOptions](#tableborderoptions)
* **Left**: [TableBorderOptions](#tableborderoptions)
* **Right**: [TableBorderOptions](#tableborderoptions)
* **Top**: [TableBorderOptions](#tableborderoptions)

## TableBorderOptions
### Properties
* **Color**: string
* **Style**: string
* **Thickness**: int

## RowAlternateColorOptions
### Properties
* **RowAlternateColors**: string[]
* **Status**: string

## PivotTableTotalOptions
### Properties
* **ColumnSubtotalOptions**: [SubtotalOptions](#subtotaloptions)
* **ColumnTotalOptions**: [PivotTotalOptions](#pivottotaloptions)
* **RowSubtotalOptions**: [SubtotalOptions](#subtotaloptions)
* **RowTotalOptions**: [PivotTotalOptions](#pivottotaloptions)

## SubtotalOptions
### Properties
* **CustomLabel**: string
* **FieldLevel**: string
* **FieldLevelOptions**: [PivotTableFieldSubtotalOptions](#pivottablefieldsubtotaloptions)[]
* **MetricHeaderCellStyle**: [TableCellStyle](#tablecellstyle)
* **TotalCellStyle**: [TableCellStyle](#tablecellstyle)
* **TotalsVisibility**: string
* **ValueCellStyle**: [TableCellStyle](#tablecellstyle)

## PivotTableFieldSubtotalOptions
### Properties
* **FieldId**: string

## PivotTotalOptions
### Properties
* **CustomLabel**: string
* **MetricHeaderCellStyle**: [TableCellStyle](#tablecellstyle)
* **Placement**: string
* **ScrollStatus**: string
* **TotalCellStyle**: [TableCellStyle](#tablecellstyle)
* **TotalsVisibility**: string
* **ValueCellStyle**: [TableCellStyle](#tablecellstyle)

## PivotTableConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [PivotTableConditionalFormattingOption](#pivottableconditionalformattingoption)[]

## PivotTableConditionalFormattingOption
### Properties
* **Cell**: [PivotTableCellConditionalFormatting](#pivottablecellconditionalformatting)

## PivotTableCellConditionalFormatting
### Properties
* **FieldId**: string (Required)
* **Scope**: [PivotTableConditionalFormattingScope](#pivottableconditionalformattingscope)
* **TextFormat**: [TextConditionalFormat](#textconditionalformat)

## PivotTableConditionalFormattingScope
### Properties
* **Role**: string

## TextConditionalFormat
### Properties
* **BackgroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)
* **Icon**: [ConditionalFormattingIcon](#conditionalformattingicon)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## RadarChartVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [RadarChartConfiguration](#radarchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## RadarChartConfiguration
### Properties
* **AlternateBandColorsVisibility**: string
* **AlternateBandEvenColor**: string
* **AlternateBandOddColor**: string
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

## RadarChartSeriesSettings
### Properties
* **AreaStyleSettings**: [RadarChartAreaStyleSettings](#radarchartareastylesettings)

## RadarChartAreaStyleSettings
### Properties
* **Visibility**: string

## RadarChartFieldWells
### Properties
* **RadarChartAggregatedFieldWells**: [RadarChartAggregatedFieldWells](#radarchartaggregatedfieldwells)

## RadarChartAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Color**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## RadarChartSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]
* **ColorItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **ColorSort**: [FieldSortOptions](#fieldsortoptions)[]

## SankeyDiagramVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [SankeyDiagramChartConfiguration](#sankeydiagramchartconfiguration)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## SankeyDiagramChartConfiguration
### Properties
* **DataLabels**: [DataLabelOptions](#datalabeloptions)
* **FieldWells**: [SankeyDiagramFieldWells](#sankeydiagramfieldwells)
* **SortConfiguration**: [SankeyDiagramSortConfiguration](#sankeydiagramsortconfiguration)

## SankeyDiagramFieldWells
### Properties
* **SankeyDiagramAggregatedFieldWells**: [SankeyDiagramAggregatedFieldWells](#sankeydiagramaggregatedfieldwells)

## SankeyDiagramAggregatedFieldWells
### Properties
* **Destination**: [DimensionField](#dimensionfield)[]
* **Source**: [DimensionField](#dimensionfield)[]
* **Weight**: [MeasureField](#measurefield)[]

## SankeyDiagramSortConfiguration
### Properties
* **DestinationItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **SourceItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **WeightSort**: [FieldSortOptions](#fieldsortoptions)[]

## ScatterPlotVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [ScatterPlotConfiguration](#scatterplotconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## ScatterPlotCategoricallyAggregatedFieldWells
### Properties
* **Category**: [DimensionField](#dimensionfield)[]
* **Size**: [MeasureField](#measurefield)[]
* **XAxis**: [MeasureField](#measurefield)[]
* **YAxis**: [MeasureField](#measurefield)[]

## ScatterPlotUnaggregatedFieldWells
### Properties
* **Size**: [MeasureField](#measurefield)[]
* **XAxis**: [DimensionField](#dimensionfield)[]
* **YAxis**: [DimensionField](#dimensionfield)[]

## TableVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [TableConfiguration](#tableconfiguration)
* **ConditionalFormatting**: [TableConditionalFormatting](#tableconditionalformatting)
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## TableConfiguration
### Properties
* **FieldOptions**: [TableFieldOptions](#tablefieldoptions)
* **FieldWells**: [TableFieldWells](#tablefieldwells)
* **PaginatedReportOptions**: [TablePaginatedReportOptions](#tablepaginatedreportoptions)
* **SortConfiguration**: [TableSortConfiguration](#tablesortconfiguration)
* **TableInlineVisualizations**: [TableInlineVisualization](#tableinlinevisualization)[]
* **TableOptions**: [TableOptions](#tableoptions)
* **TotalOptions**: [TotalOptions](#totaloptions)

## TableFieldOptions
### Properties
* **Order**: string[]
* **SelectedFieldOptions**: [TableFieldOption](#tablefieldoption)[]

## TableFieldOption
### Properties
* **CustomLabel**: string
* **FieldId**: string (Required)
* **URLStyling**: [TableFieldURLConfiguration](#tablefieldurlconfiguration)
* **Visibility**: string
* **Width**: string: String based length that is composed of value and unit in px

## TableFieldURLConfiguration
### Properties
* **ImageConfiguration**: [TableFieldImageConfiguration](#tablefieldimageconfiguration)
* **LinkConfiguration**: [TableFieldLinkConfiguration](#tablefieldlinkconfiguration)

## TableFieldImageConfiguration
### Properties
* **SizingOptions**: [TableCellImageSizingConfiguration](#tablecellimagesizingconfiguration)

## TableCellImageSizingConfiguration
### Properties
* **TableCellImageScalingConfiguration**: string

## TableFieldLinkConfiguration
### Properties
* **Content**: [TableFieldLinkContentConfiguration](#tablefieldlinkcontentconfiguration) (Required)
* **Target**: string (Required)

## TableFieldLinkContentConfiguration
### Properties
* **CustomIconContent**: [TableFieldCustomIconContent](#tablefieldcustomiconcontent)
* **CustomTextContent**: [TableFieldCustomTextContent](#tablefieldcustomtextcontent)

## TableFieldCustomIconContent
### Properties
* **Icon**: string

## TableFieldCustomTextContent
### Properties
* **FontConfiguration**: [FontConfiguration](#fontconfiguration) (Required)
* **Value**: string

## TableFieldWells
### Properties
* **TableAggregatedFieldWells**: [TableAggregatedFieldWells](#tableaggregatedfieldwells)
* **TableUnaggregatedFieldWells**: [TableUnaggregatedFieldWells](#tableunaggregatedfieldwells)

## TableAggregatedFieldWells
### Properties
* **GroupBy**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## TableUnaggregatedFieldWells
### Properties
* **Values**: [UnaggregatedField](#unaggregatedfield)[]

## UnaggregatedField
### Properties
* **Column**: [ColumnIdentifier](#columnidentifier) (Required)
* **FieldId**: string (Required)
* **FormatConfiguration**: [FormatConfiguration](#formatconfiguration)

## TablePaginatedReportOptions
### Properties
* **OverflowColumnHeaderVisibility**: string
* **VerticalOverflowVisibility**: string

## TableSortConfiguration
### Properties
* **PaginationConfiguration**: [PaginationConfiguration](#paginationconfiguration)
* **RowSort**: [FieldSortOptions](#fieldsortoptions)[]

## TableInlineVisualization
### Properties
* **DataBars**: [DataBarsOptions](#databarsoptions)

## DataBarsOptions
### Properties
* **FieldId**: string (Required)
* **NegativeColor**: string
* **PositiveColor**: string

## TableOptions
### Properties
* **CellStyle**: [TableCellStyle](#tablecellstyle)
* **HeaderStyle**: [TableCellStyle](#tablecellstyle)
* **Orientation**: string
* **RowAlternateColorOptions**: [RowAlternateColorOptions](#rowalternatecoloroptions)

## TotalOptions
### Properties
* **CustomLabel**: string
* **Placement**: string
* **ScrollStatus**: string
* **TotalCellStyle**: [TableCellStyle](#tablecellstyle)
* **TotalsVisibility**: string

## TableConditionalFormatting
### Properties
* **ConditionalFormattingOptions**: [TableConditionalFormattingOption](#tableconditionalformattingoption)[]

## TableConditionalFormattingOption
### Properties
* **Cell**: [TableCellConditionalFormatting](#tablecellconditionalformatting)
* **Row**: [TableRowConditionalFormatting](#tablerowconditionalformatting)

## TableCellConditionalFormatting
### Properties
* **FieldId**: string (Required)
* **TextFormat**: [TextConditionalFormat](#textconditionalformat)

## TableRowConditionalFormatting
### Properties
* **BackgroundColor**: [ConditionalFormattingColor](#conditionalformattingcolor)
* **TextColor**: [ConditionalFormattingColor](#conditionalformattingcolor)

## TreeMapVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [TreeMapConfiguration](#treemapconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## TreeMapAggregatedFieldWells
### Properties
* **Colors**: [MeasureField](#measurefield)[]
* **Groups**: [DimensionField](#dimensionfield)[]
* **Sizes**: [MeasureField](#measurefield)[]

## TreeMapSortConfiguration
### Properties
* **TreeMapGroupItemsLimitConfiguration**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **TreeMapSort**: [FieldSortOptions](#fieldsortoptions)[]

## WaterfallVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [WaterfallChartConfiguration](#waterfallchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

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

## WaterfallChartAggregatedFieldWells
### Properties
* **Breakdowns**: [DimensionField](#dimensionfield)[]
* **Categories**: [DimensionField](#dimensionfield)[]
* **Values**: [MeasureField](#measurefield)[]

## WaterfallChartSortConfiguration
### Properties
* **BreakdownItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## WaterfallChartOptions
### Properties
* **TotalBarLabel**: string

## WordCloudVisual
### Properties
* **Actions**: [VisualCustomAction](#visualcustomaction)[]
* **ChartConfiguration**: [WordCloudChartConfiguration](#wordcloudchartconfiguration)
* **ColumnHierarchies**: [ColumnHierarchy](#columnhierarchy)[]
* **Subtitle**: [VisualSubtitleLabelOptions](#visualsubtitlelabeloptions)
* **Title**: [VisualTitleLabelOptions](#visualtitlelabeloptions)
* **VisualId**: string (Required)

## WordCloudChartConfiguration
### Properties
* **CategoryLabelOptions**: [ChartAxisLabelOptions](#chartaxislabeloptions)
* **FieldWells**: [WordCloudFieldWells](#wordcloudfieldwells)
* **SortConfiguration**: [WordCloudSortConfiguration](#wordcloudsortconfiguration)
* **WordCloudOptions**: [WordCloudOptions](#wordcloudoptions)

## WordCloudFieldWells
### Properties
* **WordCloudAggregatedFieldWells**: [WordCloudAggregatedFieldWells](#wordcloudaggregatedfieldwells)

## WordCloudAggregatedFieldWells
### Properties
* **GroupBy**: [DimensionField](#dimensionfield)[]
* **Size**: [MeasureField](#measurefield)[]

## WordCloudSortConfiguration
### Properties
* **CategoryItemsLimit**: [ItemsLimitConfiguration](#itemslimitconfiguration)
* **CategorySort**: [FieldSortOptions](#fieldsortoptions)[]

## WordCloudOptions
### Properties
* **CloudLayout**: string
* **MaximumStringLength**: int
* **WordCasing**: string
* **WordOrientation**: string
* **WordPadding**: string
* **WordScaling**: string

## ResourcePermission
### Properties
* **Actions**: string[] (Required)
* **Principal**: string (Required)
* **Resource**: string

## TemplateSourceEntity
### Properties
* **SourceAnalysis**: [TemplateSourceAnalysis](#templatesourceanalysis)
* **SourceTemplate**: [TemplateSourceTemplate](#templatesourcetemplate)

## TemplateSourceAnalysis
### Properties
* **Arn**: string (Required)
* **DataSetReferences**: [DataSetReference](#datasetreference)[] (Required)

## DataSetReference
### Properties
* **DataSetArn**: string (Required)
* **DataSetPlaceholder**: string (Required)

## TemplateSourceTemplate
### Properties
* **Arn**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

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

## TemplateError
### Properties
* **Message**: string
* **Type**: string
* **ViolatedEntities**: [Entity](#entity)[]

## Entity
### Properties
* **Path**: string

## Sheet
### Properties
* **Name**: string
* **SheetId**: string

## AWS.QuickSight/ThemeProperties
### Properties
* **Arn**: string (ReadOnly): <p>The Amazon Resource Name (ARN) of the theme.</p>
* **AwsAccountId**: string (Required, Identifier)
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
* **ThemeId**: string (Required, Identifier)
* **Type**: string (ReadOnly)
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

## ThemeVersion
### Properties
* **Arn**: string: <p>The Amazon Resource Name (ARN) of the resource.</p>
* **BaseThemeId**: string: <p>The Amazon QuickSight-defined ID of the theme that a custom theme inherits from. All
            themes initially inherit from a default QuickSight theme.</p>
* **Configuration**: [ThemeConfiguration](#themeconfiguration)
* **CreatedTime**: string: <p>The date and time that this theme version was created.</p>
* **Description**: string: <p>The description of the theme.</p>
* **Errors**: [ThemeError](#themeerror)[]: <p>Errors associated with the theme.</p>
* **Status**: string
* **VersionNumber**: int: <p>The version number of the theme.</p>

## ThemeError
### Properties
* **Message**: string: <p>The error message.</p>
* **Type**: string

