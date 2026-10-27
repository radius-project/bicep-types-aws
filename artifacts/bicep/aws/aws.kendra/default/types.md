# AWS.Kendra @ default

## Resource AWS.Kendra/DataSource@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Kendra/DataSourceProperties](#awskendradatasourceproperties) (Required, Identifier): properties of the resource

## Resource AWS.Kendra/Faq@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Kendra/FaqProperties](#awskendrafaqproperties) (Required, Identifier): properties of the resource

## Resource AWS.Kendra/FeaturedResultsSet@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Kendra/FeaturedResultsSetProperties](#awskendrafeaturedresultssetproperties) (Required, Identifier): properties of the resource

## Resource AWS.Kendra/Index@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Kendra/IndexProperties](#awskendraindexproperties) (Required, Identifier): properties of the resource

## Resource AWS.Kendra/QuerySuggestionsBlockList@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Kendra/QuerySuggestionsBlockListProperties](#awskendraquerysuggestionsblocklistproperties) (Required, Identifier): properties of the resource

## Resource AWS.Kendra/Thesaurus@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Kendra/ThesaurusProperties](#awskendrathesaurusproperties) (Required, Identifier): properties of the resource

## AccessControlListConfiguration
### Properties
* **KeyPath**: string

## AclConfiguration
### Properties
* **AllowedGroupsColumnName**: string (Required)

## AWS.Kendra/DataSourceProperties
### Properties
* **Arn**: string (ReadOnly)
* **CustomDocumentEnrichmentConfiguration**: [CustomDocumentEnrichmentConfiguration](#customdocumentenrichmentconfiguration)
* **DataSourceConfiguration**: [DataSourceConfiguration](#datasourceconfiguration)
* **Description**: string
* **Id**: string (ReadOnly, Identifier)
* **IndexId**: string (Required, Identifier)
* **LanguageCode**: string
* **Name**: string (Required)
* **RoleArn**: string
* **Schedule**: string
* **Tags**: [Tag](#tag)[]: Tags for labeling the data source
* **Type**: string (Required)

## AWS.Kendra/FaqProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string: FAQ description
* **FileFormat**: string: FAQ file format
* **Id**: string (ReadOnly, Identifier)
* **IndexId**: string (Required, Identifier): Index ID
* **LanguageCode**: string
* **Name**: string (Required): FAQ name
* **RoleArn**: string (Required): FAQ role ARN
* **S3Path**: [S3Path](#s3path) (Required): FAQ S3 path
* **Tags**: [Tag](#tag)[]: Tags for labeling the FAQ

## AWS.Kendra/FeaturedResultsSetProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the featured results set.
* **Description**: string: A description for the set of featured results.
* **FeaturedDocuments**: [FeaturedDocument](#featureddocument)[] (WriteOnly): A list of document IDs for the documents you want to feature at the top of the search results page.
* **FeaturedResultsSetId**: string (ReadOnly): The identifier of the set of featured results.
* **FeaturedResultsSetName**: string (Required): A name for the set of featured results.
* **IndexId**: string (Required): The identifier of the index that you want to use for featuring results.
* **QueryTexts**: string[]: A list of queries for featuring results.
* **Status**: string: The current status of the set of featured results. When the value is ACTIVE, featured results are ready for use.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that identify or categorize the featured results set.

## AWS.Kendra/IndexProperties
### Properties
* **Arn**: string (ReadOnly)
* **CapacityUnits**: [CapacityUnitsConfiguration](#capacityunitsconfiguration): Capacity units
* **Description**: string: A description for the index
* **DocumentMetadataConfigurations**: [DocumentMetadataConfiguration](#documentmetadataconfiguration)[]: Document metadata configurations
* **Edition**: string (Required)
* **Id**: string (ReadOnly, Identifier)
* **Name**: string (Required)
* **RoleArn**: string (Required)
* **ServerSideEncryptionConfiguration**: [ServerSideEncryptionConfiguration](#serversideencryptionconfiguration): Server side encryption configuration
* **Tags**: [Tag](#tag)[]: Tags for labeling the index
* **UserContextPolicy**: string
* **UserTokenConfigurations**: [UserTokenConfiguration](#usertokenconfiguration)[]

## AWS.Kendra/QuerySuggestionsBlockListProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the query suggestions block list.
* **Description**: string: A description for the block list.
* **Id**: string (ReadOnly): The identifier of the block list.
* **IndexId**: string (Required): The identifier of the index for the block list.
* **Name**: string (Required): The name of the block list.
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) of an IAM role with permission to access the S3 bucket that contains the block list text file.
* **SourceS3Path**: [S3Path](#s3path) (Required)
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that identify or categorize the block list.

## AWS.Kendra/ThesaurusProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the thesaurus.
* **Description**: string: A description for the thesaurus.
* **Id**: string (ReadOnly): The identifier of the thesaurus.
* **IndexId**: string (Required): The identifier of the index for the thesaurus.
* **Name**: string (Required): A name for the thesaurus.
* **RoleArn**: string (Required): An IAM role that gives Amazon Kendra permissions to access the thesaurus file specified in SourceS3Path.
* **SourceS3Path**: [S3Path](#s3path) (Required)
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that identify or categorize the thesaurus.

## CapacityUnitsConfiguration
### Properties
* **QueryCapacityUnits**: int (Required)
* **StorageCapacityUnits**: int (Required)

## ColumnConfiguration
### Properties
* **ChangeDetectingColumns**: string[] (Required)
* **DocumentDataColumnName**: string (Required)
* **DocumentIdColumnName**: string (Required)
* **DocumentTitleColumnName**: string
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]

## ConfluenceAttachmentConfiguration
### Properties
* **AttachmentFieldMappings**: [ConfluenceAttachmentToIndexFieldMapping](#confluenceattachmenttoindexfieldmapping)[]
* **CrawlAttachments**: bool

## ConfluenceAttachmentToIndexFieldMapping
### Properties
* **DataSourceFieldName**: string (Required)
* **DateFieldFormat**: string
* **IndexFieldName**: string (Required)

## ConfluenceBlogConfiguration
### Properties
* **BlogFieldMappings**: [ConfluenceBlogToIndexFieldMapping](#confluenceblogtoindexfieldmapping)[]

## ConfluenceBlogToIndexFieldMapping
### Properties
* **DataSourceFieldName**: string (Required)
* **DateFieldFormat**: string
* **IndexFieldName**: string (Required)

## ConfluenceConfiguration
### Properties
* **AttachmentConfiguration**: [ConfluenceAttachmentConfiguration](#confluenceattachmentconfiguration)
* **BlogConfiguration**: [ConfluenceBlogConfiguration](#confluenceblogconfiguration)
* **ExclusionPatterns**: string[]
* **InclusionPatterns**: string[]
* **PageConfiguration**: [ConfluencePageConfiguration](#confluencepageconfiguration)
* **SecretArn**: string (Required)
* **ServerUrl**: string (Required)
* **SpaceConfiguration**: [ConfluenceSpaceConfiguration](#confluencespaceconfiguration)
* **Version**: string (Required)
* **VpcConfiguration**: [DataSourceVpcConfiguration](#datasourcevpcconfiguration)

## ConfluencePageConfiguration
### Properties
* **PageFieldMappings**: [ConfluencePageToIndexFieldMapping](#confluencepagetoindexfieldmapping)[]

## ConfluencePageToIndexFieldMapping
### Properties
* **DataSourceFieldName**: string (Required)
* **DateFieldFormat**: string
* **IndexFieldName**: string (Required)

## ConfluenceSpaceConfiguration
### Properties
* **CrawlArchivedSpaces**: bool
* **CrawlPersonalSpaces**: bool
* **ExcludeSpaces**: string[]
* **IncludeSpaces**: string[]
* **SpaceFieldMappings**: [ConfluenceSpaceToIndexFieldMapping](#confluencespacetoindexfieldmapping)[]

## ConfluenceSpaceToIndexFieldMapping
### Properties
* **DataSourceFieldName**: string (Required)
* **DateFieldFormat**: string
* **IndexFieldName**: string (Required)

## ConnectionConfiguration
### Properties
* **DatabaseHost**: string (Required)
* **DatabaseName**: string (Required)
* **DatabasePort**: int (Required)
* **SecretArn**: string (Required)
* **TableName**: string (Required)

## CustomDocumentEnrichmentConfiguration
### Properties
* **InlineConfigurations**: [InlineCustomDocumentEnrichmentConfiguration](#inlinecustomdocumentenrichmentconfiguration)[]
* **PostExtractionHookConfiguration**: [HookConfiguration](#hookconfiguration)
* **PreExtractionHookConfiguration**: [HookConfiguration](#hookconfiguration)
* **RoleArn**: string

## DatabaseConfiguration
### Properties
* **AclConfiguration**: [AclConfiguration](#aclconfiguration)
* **ColumnConfiguration**: [ColumnConfiguration](#columnconfiguration) (Required)
* **ConnectionConfiguration**: [ConnectionConfiguration](#connectionconfiguration) (Required)
* **DatabaseEngineType**: string (Required)
* **SqlConfiguration**: [SqlConfiguration](#sqlconfiguration)
* **VpcConfiguration**: [DataSourceVpcConfiguration](#datasourcevpcconfiguration)

## DataSource_Template
### Properties

## DataSourceConfiguration
### Properties
* **ConfluenceConfiguration**: [ConfluenceConfiguration](#confluenceconfiguration)
* **DatabaseConfiguration**: [DatabaseConfiguration](#databaseconfiguration)
* **GoogleDriveConfiguration**: [GoogleDriveConfiguration](#googledriveconfiguration)
* **OneDriveConfiguration**: [OneDriveConfiguration](#onedriveconfiguration)
* **S3Configuration**: [S3DataSourceConfiguration](#s3datasourceconfiguration)
* **SalesforceConfiguration**: [SalesforceConfiguration](#salesforceconfiguration)
* **ServiceNowConfiguration**: [ServiceNowConfiguration](#servicenowconfiguration)
* **SharePointConfiguration**: [SharePointConfiguration](#sharepointconfiguration)
* **TemplateConfiguration**: [TemplateConfiguration](#templateconfiguration)
* **WebCrawlerConfiguration**: [WebCrawlerConfiguration](#webcrawlerconfiguration)
* **WorkDocsConfiguration**: [WorkDocsConfiguration](#workdocsconfiguration)

## DataSourceToIndexFieldMapping
### Properties
* **DataSourceFieldName**: string (Required)
* **DateFieldFormat**: string
* **IndexFieldName**: string (Required)

## DataSourceVpcConfiguration
### Properties
* **SecurityGroupIds**: string[] (Required)
* **SubnetIds**: string[] (Required)

## DocumentAttributeCondition
### Properties
* **ConditionDocumentAttributeKey**: string (Required)
* **ConditionOnValue**: [DocumentAttributeValue](#documentattributevalue)
* **Operator**: string (Required)

## DocumentAttributeTarget
### Properties
* **TargetDocumentAttributeKey**: string (Required)
* **TargetDocumentAttributeValue**: [DocumentAttributeValue](#documentattributevalue)
* **TargetDocumentAttributeValueDeletion**: bool

## DocumentAttributeValue
### Properties
* **DateValue**: string
* **LongValue**: int
* **StringListValue**: string[]
* **StringValue**: string

## DocumentMetadataConfiguration
### Properties
* **Name**: string (Required)
* **Relevance**: [Relevance](#relevance)
* **Search**: [Search](#search)
* **Type**: string (Required)

## DocumentsMetadataConfiguration
### Properties
* **S3Prefix**: string

## FeaturedDocument
### Properties
* **Id**: string: The identifier of the document to feature in the search results.

## GoogleDriveConfiguration
### Properties
* **ExcludeMimeTypes**: string[]
* **ExcludeSharedDrives**: string[]
* **ExcludeUserAccounts**: string[]
* **ExclusionPatterns**: string[]
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]
* **InclusionPatterns**: string[]
* **SecretArn**: string (Required)

## HookConfiguration
### Properties
* **InvocationCondition**: [DocumentAttributeCondition](#documentattributecondition)
* **LambdaArn**: string (Required)
* **S3Bucket**: string (Required)

## InlineCustomDocumentEnrichmentConfiguration
### Properties
* **Condition**: [DocumentAttributeCondition](#documentattributecondition)
* **DocumentContentDeletion**: bool
* **Target**: [DocumentAttributeTarget](#documentattributetarget)

## JsonTokenTypeConfiguration
### Properties
* **GroupAttributeField**: string (Required)
* **UserNameAttributeField**: string (Required)

## JwtTokenTypeConfiguration
### Properties
* **ClaimRegex**: string
* **GroupAttributeField**: string
* **Issuer**: string
* **KeyLocation**: string (Required)
* **SecretManagerArn**: string
* **URL**: string
* **UserNameAttributeField**: string

## OneDriveConfiguration
### Properties
* **DisableLocalGroups**: bool
* **ExclusionPatterns**: string[]
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]
* **InclusionPatterns**: string[]
* **OneDriveUsers**: [OneDriveUsers](#onedriveusers) (Required)
* **SecretArn**: string (Required)
* **TenantDomain**: string (Required)

## OneDriveUsers
### Properties
* **OneDriveUserList**: string[]
* **OneDriveUserS3Path**: [S3Path](#s3path)

## ProxyConfiguration
### Properties
* **Credentials**: string
* **Host**: string (Required)
* **Port**: int (Required)

## Relevance
### Properties
* **Duration**: string
* **Freshness**: bool
* **Importance**: int
* **RankOrder**: string
* **ValueImportanceItems**: [ValueImportanceItem](#valueimportanceitem)[]

## S3DataSourceConfiguration
### Properties
* **AccessControlListConfiguration**: [AccessControlListConfiguration](#accesscontrollistconfiguration)
* **BucketName**: string (Required)
* **DocumentsMetadataConfiguration**: [DocumentsMetadataConfiguration](#documentsmetadataconfiguration)
* **ExclusionPatterns**: string[]
* **InclusionPatterns**: string[]
* **InclusionPrefixes**: string[]

## S3Path
### Properties
* **Bucket**: string (Required)
* **Key**: string (Required)

## S3Path
### Properties
* **Bucket**: string (Required)
* **Key**: string (Required)

## S3Path
### Properties
* **Bucket**: string (Required): The name of the S3 bucket that contains the file.
* **Key**: string (Required): The name of the file.

## S3Path
### Properties
* **Bucket**: string (Required): The name of the S3 bucket that contains the file.
* **Key**: string (Required): The name of the file.

## SalesforceChatterFeedConfiguration
### Properties
* **DocumentDataFieldName**: string (Required)
* **DocumentTitleFieldName**: string
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]
* **IncludeFilterTypes**: string[]

## SalesforceConfiguration
### Properties
* **ChatterFeedConfiguration**: [SalesforceChatterFeedConfiguration](#salesforcechatterfeedconfiguration)
* **CrawlAttachments**: bool
* **ExcludeAttachmentFilePatterns**: string[]
* **IncludeAttachmentFilePatterns**: string[]
* **KnowledgeArticleConfiguration**: [SalesforceKnowledgeArticleConfiguration](#salesforceknowledgearticleconfiguration)
* **SecretArn**: string (Required)
* **ServerUrl**: string (Required)
* **StandardObjectAttachmentConfiguration**: [SalesforceStandardObjectAttachmentConfiguration](#salesforcestandardobjectattachmentconfiguration)
* **StandardObjectConfigurations**: [SalesforceStandardObjectConfiguration](#salesforcestandardobjectconfiguration)[]

## SalesforceCustomKnowledgeArticleTypeConfiguration
### Properties
* **DocumentDataFieldName**: string (Required)
* **DocumentTitleFieldName**: string
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]
* **Name**: string (Required)

## SalesforceKnowledgeArticleConfiguration
### Properties
* **CustomKnowledgeArticleTypeConfigurations**: [SalesforceCustomKnowledgeArticleTypeConfiguration](#salesforcecustomknowledgearticletypeconfiguration)[]
* **IncludedStates**: string[] (Required)
* **StandardKnowledgeArticleTypeConfiguration**: [SalesforceStandardKnowledgeArticleTypeConfiguration](#salesforcestandardknowledgearticletypeconfiguration)

## SalesforceStandardKnowledgeArticleTypeConfiguration
### Properties
* **DocumentDataFieldName**: string (Required)
* **DocumentTitleFieldName**: string
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]

## SalesforceStandardObjectAttachmentConfiguration
### Properties
* **DocumentTitleFieldName**: string
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]

## SalesforceStandardObjectConfiguration
### Properties
* **DocumentDataFieldName**: string (Required)
* **DocumentTitleFieldName**: string
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]
* **Name**: string (Required)

## Search
### Properties
* **Displayable**: bool
* **Facetable**: bool
* **Searchable**: bool
* **Sortable**: bool

## ServerSideEncryptionConfiguration
### Properties
* **KmsKeyId**: string

## ServiceNowConfiguration
### Properties
* **AuthenticationType**: string
* **HostUrl**: string (Required)
* **KnowledgeArticleConfiguration**: [ServiceNowKnowledgeArticleConfiguration](#servicenowknowledgearticleconfiguration)
* **SecretArn**: string (Required)
* **ServiceCatalogConfiguration**: [ServiceNowServiceCatalogConfiguration](#servicenowservicecatalogconfiguration)
* **ServiceNowBuildVersion**: string (Required)

## ServiceNowKnowledgeArticleConfiguration
### Properties
* **CrawlAttachments**: bool
* **DocumentDataFieldName**: string (Required)
* **DocumentTitleFieldName**: string
* **ExcludeAttachmentFilePatterns**: string[]
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]
* **FilterQuery**: string
* **IncludeAttachmentFilePatterns**: string[]

## ServiceNowServiceCatalogConfiguration
### Properties
* **CrawlAttachments**: bool
* **DocumentDataFieldName**: string (Required)
* **DocumentTitleFieldName**: string
* **ExcludeAttachmentFilePatterns**: string[]
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]
* **IncludeAttachmentFilePatterns**: string[]

## SharePointConfiguration
### Properties
* **CrawlAttachments**: bool
* **DisableLocalGroups**: bool
* **DocumentTitleFieldName**: string
* **ExclusionPatterns**: string[]
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]
* **InclusionPatterns**: string[]
* **SecretArn**: string (Required)
* **SharePointVersion**: string (Required)
* **SslCertificateS3Path**: [S3Path](#s3path)
* **Urls**: string[] (Required)
* **UseChangeLog**: bool
* **VpcConfiguration**: [DataSourceVpcConfiguration](#datasourcevpcconfiguration)

## SqlConfiguration
### Properties
* **QueryIdentifiersEnclosingOption**: string

## Tag
### Properties
* **Key**: string (Required): A string used to identify this tag
* **Value**: string (Required): A string containing the value for the tag

## Tag
### Properties
* **Key**: string (Required): A string used to identify this tag
* **Value**: string (Required): A string containing the value for the tag

## Tag
### Properties
* **Key**: string (Required): The key for the tag.
* **Value**: string (Required): The value associated with the tag.

## Tag
### Properties
* **Key**: string (Required): A string used to identify this tag
* **Value**: string (Required): A string containing the value for the tag

## Tag
### Properties
* **Key**: string (Required): The key for the tag.
* **Value**: string (Required): The value associated with the tag.

## Tag
### Properties
* **Key**: string (Required): The key for the tag.
* **Value**: string (Required): The value associated with the tag.

## TemplateConfiguration
### Properties
* **Template**: [DataSource_Template](#datasourcetemplate) (Required)

## UserTokenConfiguration
### Properties
* **JsonTokenTypeConfiguration**: [JsonTokenTypeConfiguration](#jsontokentypeconfiguration)
* **JwtTokenTypeConfiguration**: [JwtTokenTypeConfiguration](#jwttokentypeconfiguration)

## ValueImportanceItem
### Properties
* **Key**: string
* **Value**: int

## WebCrawlerAuthenticationConfiguration
### Properties
* **BasicAuthentication**: [WebCrawlerBasicAuthentication](#webcrawlerbasicauthentication)[]

## WebCrawlerBasicAuthentication
### Properties
* **Credentials**: string (Required)
* **Host**: string (Required)
* **Port**: int (Required)

## WebCrawlerConfiguration
### Properties
* **AuthenticationConfiguration**: [WebCrawlerAuthenticationConfiguration](#webcrawlerauthenticationconfiguration)
* **CrawlDepth**: int
* **MaxContentSizePerPageInMegaBytes**: int
* **MaxLinksPerPage**: int
* **MaxUrlsPerMinuteCrawlRate**: int
* **ProxyConfiguration**: [ProxyConfiguration](#proxyconfiguration)
* **UrlExclusionPatterns**: string[]
* **UrlInclusionPatterns**: string[]
* **Urls**: [WebCrawlerUrls](#webcrawlerurls) (Required)

## WebCrawlerSeedUrlConfiguration
### Properties
* **SeedUrls**: string[] (Required)
* **WebCrawlerMode**: string

## WebCrawlerSiteMapsConfiguration
### Properties
* **SiteMaps**: string[] (Required)

## WebCrawlerUrls
### Properties
* **SeedUrlConfiguration**: [WebCrawlerSeedUrlConfiguration](#webcrawlerseedurlconfiguration)
* **SiteMapsConfiguration**: [WebCrawlerSiteMapsConfiguration](#webcrawlersitemapsconfiguration)

## WorkDocsConfiguration
### Properties
* **CrawlComments**: bool
* **ExclusionPatterns**: string[]
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]
* **InclusionPatterns**: string[]
* **OrganizationId**: string (Required)
* **UseChangeLog**: bool

