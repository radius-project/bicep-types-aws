# AWS.DataBrew @ default

## Resource AWS.DataBrew/Dataset@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DataBrew/DatasetProperties](#awsdatabrewdatasetproperties): properties of the resource

## Resource AWS.DataBrew/Job@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DataBrew/JobProperties](#awsdatabrewjobproperties): properties of the resource

## Resource AWS.DataBrew/Project@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DataBrew/ProjectProperties](#awsdatabrewprojectproperties): properties of the resource

## Resource AWS.DataBrew/Recipe@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DataBrew/RecipeProperties](#awsdatabrewrecipeproperties): properties of the resource

## Resource AWS.DataBrew/Ruleset@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DataBrew/RulesetProperties](#awsdatabrewrulesetproperties): properties of the resource

## Resource AWS.DataBrew/Schedule@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DataBrew/ScheduleProperties](#awsdatabrewscheduleproperties): properties of the resource

## AWS.DataBrew/DatasetProperties
### Properties
* **Format**: string: Dataset format
* **FormatOptions**: [FormatOptions](#formatoptions): Format options for dataset
* **Input**: [Input](#input): Input
* **Name**: string: Dataset name
* **PathOptions**: [PathOptions](#pathoptions): PathOptions
* **Tags**: [Tag](#tag)[]

## FormatOptions
### Properties
* **Csv**: [CsvOptions](#csvoptions)
* **Excel**: [ExcelOptions](#exceloptions)
* **Json**: [JsonOptions](#jsonoptions)

## CsvOptions
### Properties
* **Delimiter**: string
* **HeaderRow**: bool

## ExcelOptions
### Properties
* **HeaderRow**: bool
* **SheetIndexes**: int[]
* **SheetNames**: string[]

## JsonOptions
### Properties
* **MultiLine**: bool

## Input
### Properties
* **DatabaseInputDefinition**: [DatabaseInputDefinition](#databaseinputdefinition)
* **DataCatalogInputDefinition**: [DataCatalogInputDefinition](#datacataloginputdefinition)
* **Metadata**: [Metadata](#metadata)
* **S3InputDefinition**: [S3Location](#s3location)

## DatabaseInputDefinition
### Properties
* **DatabaseTableName**: string: Database table name
* **GlueConnectionName**: string: Glue connection name
* **QueryString**: string: Custom SQL to run against the provided AWS Glue connection. This SQL will be used as the input for DataBrew projects and jobs.
* **TempDirectory**: [S3Location](#s3location)

## S3Location
### Properties
* **Bucket**: string
* **Key**: string

## DataCatalogInputDefinition
### Properties
* **CatalogId**: string: Catalog id
* **DatabaseName**: string: Database name
* **TableName**: string: Table name
* **TempDirectory**: [S3Location](#s3location)

## Metadata
### Properties
* **SourceArn**: string: Arn of the source of the dataset. For e.g.: AppFlow Flow ARN.

## PathOptions
### Properties
* **FilesLimit**: [FilesLimit](#fileslimit)
* **LastModifiedDateCondition**: [FilterExpression](#filterexpression)
* **Parameters**: [PathParameter](#pathparameter)[]

## FilesLimit
### Properties
* **MaxFiles**: int: Maximum number of files
* **Order**: string: Order
* **OrderedBy**: string: Ordered by

## FilterExpression
### Properties
* **Expression**: string: Filtering expression for a parameter
* **ValuesMap**: [FilterValue](#filtervalue)[]

## FilterValue
### Properties
* **Value**: string
* **ValueReference**: string: Variable name

## PathParameter
### Properties
* **DatasetParameter**: [DatasetParameter](#datasetparameter)
* **PathParameterName**: [PathParameterName](#pathparametername)

## DatasetParameter
### Properties
* **CreateColumn**: bool: Add the value of this parameter as a column in a dataset.
* **DatetimeOptions**: [DatetimeOptions](#datetimeoptions)
* **Filter**: [FilterExpression](#filterexpression)
* **Name**: [PathParameterName](#pathparametername)
* **Type**: string: Parameter type

## DatetimeOptions
### Properties
* **Format**: string: Date/time format of a date parameter
* **LocaleCode**: string: Locale code for a date parameter
* **TimezoneOffset**: string: Timezone offset

## PathParameterName
### Properties

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.DataBrew/JobProperties
### Properties
* **DatabaseOutputs**: [DatabaseOutput](#databaseoutput)[]
* **DataCatalogOutputs**: [DataCatalogOutput](#datacatalogoutput)[]
* **DatasetName**: string: Dataset name
* **EncryptionKeyArn**: string: Encryption Key Arn
* **EncryptionMode**: string: Encryption mode
* **JobSample**: [JobSample](#jobsample): Job Sample
* **LogSubscription**: string: Log subscription
* **MaxCapacity**: int: Max capacity
* **MaxRetries**: int: Max retries
* **Name**: string: Job name
* **OutputLocation**: [OutputLocation](#outputlocation): Output location
* **Outputs**: [Output](#output)[]
* **ProfileConfiguration**: [ProfileConfiguration](#profileconfiguration): Profile Job configuration
* **ProjectName**: string: Project name
* **Recipe**: [Recipe](#recipe)
* **RoleArn**: string: Role arn
* **Tags**: [Tag](#tag)[]
* **Timeout**: int: Timeout
* **Type**: string: Job type
* **ValidationConfigurations**: [ValidationConfiguration](#validationconfiguration)[]: Data quality rules configuration

## DatabaseOutput
### Properties
* **DatabaseOptions**: [DatabaseTableOutputOptions](#databasetableoutputoptions)
* **DatabaseOutputMode**: string: Database table name
* **GlueConnectionName**: string: Glue connection name

## DatabaseTableOutputOptions
### Properties
* **TableName**: string
* **TempDirectory**: [S3Location](#s3location)

## S3Location
### Properties
* **Bucket**: string
* **BucketOwner**: string
* **Key**: string

## DataCatalogOutput
### Properties
* **CatalogId**: string
* **DatabaseName**: string
* **DatabaseOptions**: [DatabaseTableOutputOptions](#databasetableoutputoptions)
* **Overwrite**: bool
* **S3Options**: [S3TableOutputOptions](#s3tableoutputoptions)
* **TableName**: string

## S3TableOutputOptions
### Properties
* **Location**: [S3Location](#s3location)

## JobSample
### Properties
* **Mode**: [SampleMode](#samplemode)
* **Size**: [JobSize](#jobsize)

## SampleMode
### Properties

## JobSize
### Properties

## OutputLocation
### Properties
* **Bucket**: string
* **BucketOwner**: string
* **Key**: string

## Output
### Properties
* **CompressionFormat**: string
* **Format**: string
* **FormatOptions**: [OutputFormatOptions](#outputformatoptions)
* **Location**: [S3Location](#s3location)
* **MaxOutputFiles**: int
* **Overwrite**: bool
* **PartitionColumns**: string[]

## OutputFormatOptions
### Properties
* **Csv**: [CsvOutputOptions](#csvoutputoptions)

## CsvOutputOptions
### Properties
* **Delimiter**: string

## ProfileConfiguration
### Properties
* **ColumnStatisticsConfigurations**: [ColumnStatisticsConfiguration](#columnstatisticsconfiguration)[]
* **DatasetStatisticsConfiguration**: [StatisticsConfiguration](#statisticsconfiguration)
* **EntityDetectorConfiguration**: [EntityDetectorConfiguration](#entitydetectorconfiguration)
* **ProfileColumns**: [ColumnSelector](#columnselector)[]

## ColumnStatisticsConfiguration
### Properties
* **Selectors**: [ColumnSelector](#columnselector)[]
* **Statistics**: [StatisticsConfiguration](#statisticsconfiguration)

## ColumnSelector
### Properties
* **Name**: string
* **Regex**: string

## StatisticsConfiguration
### Properties
* **IncludedStatistics**: [Statistic](#statistic)[]
* **Overrides**: [StatisticOverride](#statisticoverride)[]

## Statistic
### Properties

## StatisticOverride
### Properties
* **Parameters**: [ParameterMap](#parametermap)
* **Statistic**: [Statistic](#statistic)

## ParameterMap
### Properties

## EntityDetectorConfiguration
### Properties
* **AllowedStatistics**: [AllowedStatistics](#allowedstatistics)
* **EntityTypes**: string[]

## AllowedStatistics
### Properties
* **Statistics**: [Statistic](#statistic)[]

## Recipe
### Properties
* **Name**: string: Recipe name
* **Version**: string: Recipe version

## Tag
### Properties
* **Key**: string
* **Value**: string

## ValidationConfiguration
### Properties
* **RulesetArn**: string: Arn of the Ruleset
* **ValidationMode**: [ValidationMode](#validationmode)

## ValidationMode
### Properties

## AWS.DataBrew/ProjectProperties
### Properties
* **DatasetName**: string: Dataset name
* **Name**: string: Project name
* **RecipeName**: string: Recipe name
* **RoleArn**: string: Role arn
* **Sample**: [Sample](#sample): Sample
* **Tags**: [Tag](#tag)[]

## Sample
### Properties
* **Size**: int: Sample size
* **Type**: string: Sample type

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.DataBrew/RecipeProperties
### Properties
* **Description**: string: Description of the recipe
* **Name**: string: Recipe name
* **Steps**: [Recipe_RecipeStep](#reciperecipestep)[]
* **Tags**: [Tag](#tag)[]

## Recipe_RecipeStep
### Properties
* **Action**: [Action](#action)
* **ConditionExpressions**: [ConditionExpression](#conditionexpression)[]: Condition expressions applied to the step action

## Action
### Properties
* **Operation**: string: Step action operation
* **Parameters**: [Recipe_Parameters](#recipeparameters)

## Recipe_Parameters
### Properties

## ConditionExpression
### Properties
* **Condition**: string: Input condition to be applied to the target column
* **TargetColumn**: string: Name of the target column
* **Value**: string: Value of the condition

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.DataBrew/RulesetProperties
### Properties
* **Description**: string: Description of the Ruleset
* **Name**: string: Name of the Ruleset
* **Rules**: [Rule](#rule)[]: List of the data quality rules in the ruleset
* **Tags**: [Tag](#tag)[]
* **TargetArn**: string: Arn of the target resource (dataset) to apply the ruleset to

## Rule
### Properties
* **CheckExpression**: [Expression](#expression)
* **ColumnSelectors**: [ColumnSelector](#columnselector)[]
* **Disabled**: [Disabled](#disabled)
* **Name**: string: Name of the rule
* **SubstitutionMap**: [ValuesMap](#valuesmap)
* **Threshold**: [Threshold](#threshold)

## Expression
### Properties

## ColumnSelector
### Properties
* **Name**: string: The name of a column from a dataset
* **Regex**: string: A regular expression for selecting a column from a dataset

## Disabled
### Properties

## ValuesMap
### Properties

## Threshold
### Properties
* **Type**: [ThresholdType](#thresholdtype)
* **Unit**: [ThresholdUnit](#thresholdunit)
* **Value**: [ThresholdValue](#thresholdvalue)

## ThresholdType
### Properties

## ThresholdUnit
### Properties

## ThresholdValue
### Properties

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.DataBrew/ScheduleProperties
### Properties
* **CronExpression**: string: Schedule cron
* **JobNames**: [JobName](#jobname)[]
* **Name**: string: Schedule Name
* **Tags**: [Tag](#tag)[]

## JobName
### Properties

## Tag
### Properties
* **Key**: string
* **Value**: string

