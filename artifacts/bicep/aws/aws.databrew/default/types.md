# AWS.DataBrew @ default

## Resource AWS.DataBrew/Dataset@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataBrew/DatasetProperties](#awsdatabrewdatasetproperties) (Required, Identifier): properties of the resource

## Resource AWS.DataBrew/Job@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataBrew/JobProperties](#awsdatabrewjobproperties) (Required, Identifier): properties of the resource

## Resource AWS.DataBrew/Project@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataBrew/ProjectProperties](#awsdatabrewprojectproperties) (Required, Identifier): properties of the resource

## Resource AWS.DataBrew/Recipe@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataBrew/RecipeProperties](#awsdatabrewrecipeproperties) (Required, Identifier): properties of the resource

## Resource AWS.DataBrew/Ruleset@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataBrew/RulesetProperties](#awsdatabrewrulesetproperties) (Required, Identifier): properties of the resource

## Resource AWS.DataBrew/Schedule@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataBrew/ScheduleProperties](#awsdatabrewscheduleproperties) (Required, Identifier): properties of the resource

## Action
### Properties
* **Operation**: string (Required): Step action operation
* **Parameters**: [Recipe_Parameters](#recipeparameters)

## AllowedStatistics
### Properties
* **Statistics**: string[] (Required)

## AWS.DataBrew/DatasetProperties
### Properties
* **Format**: string: Dataset format
* **FormatOptions**: [FormatOptions](#formatoptions): Format options for dataset
* **Input**: [Input](#input) (Required): Input
* **Name**: string (Required, Identifier): Dataset name
* **PathOptions**: [PathOptions](#pathoptions): PathOptions
* **Tags**: [Tag](#tag)[]

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
* **Name**: string (Required, Identifier): Job name
* **OutputLocation**: [OutputLocation](#outputlocation): Output location
* **Outputs**: [Output](#output)[]
* **ProfileConfiguration**: [ProfileConfiguration](#profileconfiguration): Profile Job configuration
* **ProjectName**: string: Project name
* **Recipe**: [Recipe](#recipe)
* **RoleArn**: string (Required): Role arn
* **Tags**: [Tag](#tag)[]
* **Timeout**: int: Timeout
* **Type**: string (Required): Job type
* **ValidationConfigurations**: [ValidationConfiguration](#validationconfiguration)[]: Data quality rules configuration

## AWS.DataBrew/ProjectProperties
### Properties
* **DatasetName**: string (Required): Dataset name
* **Name**: string (Required, Identifier): Project name
* **RecipeName**: string (Required): Recipe name
* **RoleArn**: string (Required): Role arn
* **Sample**: [Sample](#sample): Sample
* **Tags**: [Tag](#tag)[]

## AWS.DataBrew/RecipeProperties
### Properties
* **Description**: string: Description of the recipe
* **Name**: string (Required, Identifier): Recipe name
* **Steps**: [Recipe_RecipeStep](#reciperecipestep)[] (Required)
* **Tags**: [Tag](#tag)[]

## AWS.DataBrew/RulesetProperties
### Properties
* **Description**: string: Description of the Ruleset
* **Name**: string (Required, Identifier): Name of the Ruleset
* **Rules**: [Rule](#rule)[] (Required): List of the data quality rules in the ruleset
* **Tags**: [Tag](#tag)[]
* **TargetArn**: string (Required): Arn of the target resource (dataset) to apply the ruleset to

## AWS.DataBrew/ScheduleProperties
### Properties
* **CronExpression**: string (Required): Schedule cron
* **JobNames**: string[]
* **Name**: string (Required, Identifier): Schedule Name
* **Tags**: [Tag](#tag)[]

## ColumnSelector
### Properties
* **Name**: string (Identifier)
* **Regex**: string

## ColumnSelector
### Properties
* **Name**: string (Identifier): The name of a column from a dataset
* **Regex**: string: A regular expression for selecting a column from a dataset

## ColumnStatisticsConfiguration
### Properties
* **Selectors**: [ColumnSelector](#columnselector)[]
* **Statistics**: [StatisticsConfiguration](#statisticsconfiguration) (Required)

## ConditionExpression
### Properties
* **Condition**: string (Required): Input condition to be applied to the target column
* **TargetColumn**: string (Required): Name of the target column
* **Value**: string: Value of the condition

## CsvOptions
### Properties
* **Delimiter**: string
* **HeaderRow**: bool

## CsvOutputOptions
### Properties
* **Delimiter**: string

## DatabaseInputDefinition
### Properties
* **DatabaseTableName**: string: Database table name
* **GlueConnectionName**: string (Required): Glue connection name
* **QueryString**: string: Custom SQL to run against the provided AWS Glue connection. This SQL will be used as the input for DataBrew projects and jobs.
* **TempDirectory**: [S3Location](#s3location)

## DatabaseOutput
### Properties
* **DatabaseOptions**: [DatabaseTableOutputOptions](#databasetableoutputoptions) (Required)
* **DatabaseOutputMode**: string: Database table name
* **GlueConnectionName**: string (Required): Glue connection name

## DatabaseTableOutputOptions
### Properties
* **TableName**: string (Required)
* **TempDirectory**: [S3Location](#s3location)

## DataCatalogInputDefinition
### Properties
* **CatalogId**: string: Catalog id
* **DatabaseName**: string: Database name
* **TableName**: string: Table name
* **TempDirectory**: [S3Location](#s3location)

## DataCatalogOutput
### Properties
* **CatalogId**: string
* **DatabaseName**: string (Required)
* **DatabaseOptions**: [DatabaseTableOutputOptions](#databasetableoutputoptions)
* **Overwrite**: bool
* **S3Options**: [S3TableOutputOptions](#s3tableoutputoptions)
* **TableName**: string (Required)

## DatasetParameter
### Properties
* **CreateColumn**: bool: Add the value of this parameter as a column in a dataset.
* **DatetimeOptions**: [DatetimeOptions](#datetimeoptions)
* **Filter**: [FilterExpression](#filterexpression)
* **Name**: string (Required, Identifier)
* **Type**: string (Required): Parameter type

## DatetimeOptions
### Properties
* **Format**: string (Required): Date/time format of a date parameter
* **LocaleCode**: string: Locale code for a date parameter
* **TimezoneOffset**: string: Timezone offset

## EntityDetectorConfiguration
### Properties
* **AllowedStatistics**: [AllowedStatistics](#allowedstatistics)
* **EntityTypes**: string[] (Required)

## ExcelOptions
### Properties
* **HeaderRow**: bool
* **SheetIndexes**: int[]
* **SheetNames**: string[]

## FilesLimit
### Properties
* **MaxFiles**: int (Required): Maximum number of files
* **Order**: string: Order
* **OrderedBy**: string: Ordered by

## FilterExpression
### Properties
* **Expression**: string (Required): Filtering expression for a parameter
* **ValuesMap**: [FilterValue](#filtervalue)[] (Required)

## FilterValue
### Properties
* **Value**: string (Required)
* **ValueReference**: string (Required): Variable name

## FormatOptions
### Properties
* **Csv**: [CsvOptions](#csvoptions)
* **Excel**: [ExcelOptions](#exceloptions)
* **Json**: [JsonOptions](#jsonoptions)

## Input
### Properties
* **DatabaseInputDefinition**: [DatabaseInputDefinition](#databaseinputdefinition)
* **DataCatalogInputDefinition**: [DataCatalogInputDefinition](#datacataloginputdefinition)
* **Metadata**: [Metadata](#metadata)
* **S3InputDefinition**: [S3Location](#s3location)

## JobSample
### Properties
* **Mode**: string
* **Size**: int

## JsonOptions
### Properties
* **MultiLine**: bool

## Metadata
### Properties
* **SourceArn**: string: Arn of the source of the dataset. For e.g.: AppFlow Flow ARN.

## Output
### Properties
* **CompressionFormat**: string
* **Format**: string
* **FormatOptions**: [OutputFormatOptions](#outputformatoptions)
* **Location**: [S3Location](#s3location) (Required)
* **MaxOutputFiles**: int
* **Overwrite**: bool
* **PartitionColumns**: string[]

## OutputFormatOptions
### Properties
* **Csv**: [CsvOutputOptions](#csvoutputoptions)

## OutputLocation
### Properties
* **Bucket**: string (Required)
* **BucketOwner**: string
* **Key**: string

## ParameterMap
### Properties

## PathOptions
### Properties
* **FilesLimit**: [FilesLimit](#fileslimit)
* **LastModifiedDateCondition**: [FilterExpression](#filterexpression)
* **Parameters**: [PathParameter](#pathparameter)[]

## PathParameter
### Properties
* **DatasetParameter**: [DatasetParameter](#datasetparameter) (Required)
* **PathParameterName**: string (Required)

## ProfileConfiguration
### Properties
* **ColumnStatisticsConfigurations**: [ColumnStatisticsConfiguration](#columnstatisticsconfiguration)[]
* **DatasetStatisticsConfiguration**: [StatisticsConfiguration](#statisticsconfiguration)
* **EntityDetectorConfiguration**: [EntityDetectorConfiguration](#entitydetectorconfiguration)
* **ProfileColumns**: [ColumnSelector](#columnselector)[]

## Recipe
### Properties
* **Name**: string (Required, Identifier): Recipe name
* **Version**: string: Recipe version

## Recipe_Parameters
### Properties

## Recipe_RecipeStep
### Properties
* **Action**: [Action](#action) (Required)
* **ConditionExpressions**: [ConditionExpression](#conditionexpression)[]: Condition expressions applied to the step action

## Rule
### Properties
* **CheckExpression**: string (Required)
* **ColumnSelectors**: [ColumnSelector](#columnselector)[]
* **Disabled**: bool
* **Name**: string (Required, Identifier): Name of the rule
* **SubstitutionMap**: [SubstitutionValue](#substitutionvalue)[]
* **Threshold**: [Threshold](#threshold)

## S3Location
### Properties
* **Bucket**: string (Required)
* **Key**: string

## S3Location
### Properties
* **Bucket**: string (Required)
* **BucketOwner**: string
* **Key**: string

## S3TableOutputOptions
### Properties
* **Location**: [S3Location](#s3location) (Required)

## Sample
### Properties
* **Size**: int: Sample size
* **Type**: string (Required): Sample type

## StatisticOverride
### Properties
* **Parameters**: [ParameterMap](#parametermap) (Required)
* **Statistic**: string (Required)

## StatisticsConfiguration
### Properties
* **IncludedStatistics**: string[]
* **Overrides**: [StatisticOverride](#statisticoverride)[]

## SubstitutionValue
### Properties
* **Value**: string (Required): Value or column name
* **ValueReference**: string (Required): Variable name

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

## Threshold
### Properties
* **Type**: string
* **Unit**: string
* **Value**: int (Required)

## ValidationConfiguration
### Properties
* **RulesetArn**: string (Required): Arn of the Ruleset
* **ValidationMode**: string

