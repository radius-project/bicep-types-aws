# AWS.Kendra @ default

## Resource AWS.Kendra/DataSource@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Kendra/DataSourceProperties](#awskendradatasourceproperties) (Required): properties of the resource

## Resource AWS.Kendra/Faq@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Kendra/FaqProperties](#awskendrafaqproperties) (Required): properties of the resource

## Resource AWS.Kendra/Index@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Kendra/IndexProperties](#awskendraindexproperties) (Required): properties of the resource

## AWS.Kendra/DataSourceProperties
### Properties
* **Arn**: [Arn](#arn) (ReadOnly)
* **CustomDocumentEnrichmentConfiguration**: [CustomDocumentEnrichmentConfiguration](#customdocumentenrichmentconfiguration)
* **DataSourceConfiguration**: [DataSourceConfiguration](#datasourceconfiguration)
* **Description**: [Description](#description)
* **Id**: [Id](#id) (ReadOnly)
* **IndexId**: [IndexId](#indexid) (Required)
* **Name**: [Name](#name) (Required)
* **RoleArn**: [RoleArn](#rolearn)
* **Schedule**: [Schedule](#schedule)
* **Tags**: [TagList](#taglist): Tags for labeling the data source
* **Type**: [Type](#type) (Required)

## Arn
### Properties

## CustomDocumentEnrichmentConfiguration
### Properties
* **InlineConfigurations**: [InlineConfigurations](#inlineconfigurations)
* **PostExtractionHookConfiguration**: [HookConfiguration](#hookconfiguration)
* **PreExtractionHookConfiguration**: [HookConfiguration](#hookconfiguration)
* **RoleArn**: [RoleArn](#rolearn)

## InlineConfigurations
### Properties

## HookConfiguration
### Properties
* **InvocationCondition**: [DocumentAttributeCondition](#documentattributecondition)
* **LambdaArn**: [LambdaArn](#lambdaarn) (Required)
* **S3Bucket**: [S3BucketName](#s3bucketname) (Required)

## DocumentAttributeCondition
### Properties
* **ConditionDocumentAttributeKey**: [DocumentAttributeKey](#documentattributekey) (Required)
* **ConditionOnValue**: [DocumentAttributeValue](#documentattributevalue)
* **Operator**: [ConditionOperator](#conditionoperator) (Required)

## DocumentAttributeKey
### Properties

## DocumentAttributeValue
### Properties
* **DateValue**: [Timestamp](#timestamp)
* **LongValue**: [Long](#long)
* **StringListValue**: string[]
* **StringValue**: string

## Timestamp
### Properties

## Long
### Properties

## ConditionOperator
### Properties

## LambdaArn
### Properties

## S3BucketName
### Properties

## RoleArn
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
* **WebCrawlerConfiguration**: [WebCrawlerConfiguration](#webcrawlerconfiguration)
* **WorkDocsConfiguration**: [WorkDocsConfiguration](#workdocsconfiguration)

## ConfluenceConfiguration
### Properties
* **AttachmentConfiguration**: [ConfluenceAttachmentConfiguration](#confluenceattachmentconfiguration)
* **BlogConfiguration**: [ConfluenceBlogConfiguration](#confluenceblogconfiguration)
* **ExclusionPatterns**: [DataSourceInclusionsExclusionsStrings](#datasourceinclusionsexclusionsstrings)
* **InclusionPatterns**: [DataSourceInclusionsExclusionsStrings](#datasourceinclusionsexclusionsstrings)
* **PageConfiguration**: [ConfluencePageConfiguration](#confluencepageconfiguration)
* **SecretArn**: [SecretArn](#secretarn) (Required)
* **ServerUrl**: [Url](#url) (Required)
* **SpaceConfiguration**: [ConfluenceSpaceConfiguration](#confluencespaceconfiguration)
* **Version**: [ConfluenceVersion](#confluenceversion) (Required)
* **VpcConfiguration**: [DataSourceVpcConfiguration](#datasourcevpcconfiguration)

## ConfluenceAttachmentConfiguration
### Properties
* **AttachmentFieldMappings**: [ConfluenceAttachmentFieldMappingsList](#confluenceattachmentfieldmappingslist)
* **CrawlAttachments**: bool

## ConfluenceAttachmentFieldMappingsList
### Properties

## ConfluenceBlogConfiguration
### Properties
* **BlogFieldMappings**: [ConfluenceBlogFieldMappingsList](#confluenceblogfieldmappingslist)

## ConfluenceBlogFieldMappingsList
### Properties

## DataSourceInclusionsExclusionsStrings
### Properties

## ConfluencePageConfiguration
### Properties
* **PageFieldMappings**: [ConfluencePageFieldMappingsList](#confluencepagefieldmappingslist)

## ConfluencePageFieldMappingsList
### Properties

## SecretArn
### Properties

## Url
### Properties

## ConfluenceSpaceConfiguration
### Properties
* **CrawlArchivedSpaces**: bool
* **CrawlPersonalSpaces**: bool
* **ExcludeSpaces**: [ConfluenceSpaceList](#confluencespacelist)
* **IncludeSpaces**: [ConfluenceSpaceList](#confluencespacelist)
* **SpaceFieldMappings**: [ConfluenceSpaceFieldMappingsList](#confluencespacefieldmappingslist)

## ConfluenceSpaceList
### Properties

## ConfluenceSpaceFieldMappingsList
### Properties

## ConfluenceVersion
### Properties

## DataSourceVpcConfiguration
### Properties
* **SecurityGroupIds**: string[] (Required)
* **SubnetIds**: string[] (Required)

## DatabaseConfiguration
### Properties
* **AclConfiguration**: [AclConfiguration](#aclconfiguration)
* **ColumnConfiguration**: [ColumnConfiguration](#columnconfiguration) (Required)
* **ConnectionConfiguration**: [ConnectionConfiguration](#connectionconfiguration) (Required)
* **DatabaseEngineType**: [DatabaseEngineType](#databaseenginetype) (Required)
* **SqlConfiguration**: [SqlConfiguration](#sqlconfiguration)
* **VpcConfiguration**: [DataSourceVpcConfiguration](#datasourcevpcconfiguration)

## AclConfiguration
### Properties
* **AllowedGroupsColumnName**: [ColumnName](#columnname) (Required)

## ColumnName
### Properties

## ColumnConfiguration
### Properties
* **ChangeDetectingColumns**: [ChangeDetectingColumns](#changedetectingcolumns) (Required)
* **DocumentDataColumnName**: [ColumnName](#columnname) (Required)
* **DocumentIdColumnName**: [ColumnName](#columnname) (Required)
* **DocumentTitleColumnName**: [ColumnName](#columnname)
* **FieldMappings**: [DataSourceToIndexFieldMappingList](#datasourcetoindexfieldmappinglist)

## ChangeDetectingColumns
### Properties

## DataSourceToIndexFieldMappingList
### Properties

## ConnectionConfiguration
### Properties
* **DatabaseHost**: [DatabaseHost](#databasehost) (Required)
* **DatabaseName**: [DatabaseName](#databasename) (Required)
* **DatabasePort**: [DatabasePort](#databaseport) (Required)
* **SecretArn**: [SecretArn](#secretarn) (Required)
* **TableName**: [TableName](#tablename) (Required)

## DatabaseHost
### Properties

## DatabaseName
### Properties

## DatabasePort
### Properties

## TableName
### Properties

## DatabaseEngineType
### Properties

## SqlConfiguration
### Properties
* **QueryIdentifiersEnclosingOption**: [QueryIdentifiersEnclosingOption](#queryidentifiersenclosingoption)

## QueryIdentifiersEnclosingOption
### Properties

## GoogleDriveConfiguration
### Properties
* **ExcludeMimeTypes**: [ExcludeMimeTypesList](#excludemimetypeslist)
* **ExcludeSharedDrives**: [ExcludeSharedDrivesList](#excludeshareddriveslist)
* **ExcludeUserAccounts**: [ExcludeUserAccountsList](#excludeuseraccountslist)
* **ExclusionPatterns**: [DataSourceInclusionsExclusionsStrings](#datasourceinclusionsexclusionsstrings)
* **FieldMappings**: [DataSourceToIndexFieldMappingList](#datasourcetoindexfieldmappinglist)
* **InclusionPatterns**: [DataSourceInclusionsExclusionsStrings](#datasourceinclusionsexclusionsstrings)
* **SecretArn**: [SecretArn](#secretarn) (Required)

## ExcludeMimeTypesList
### Properties

## ExcludeSharedDrivesList
### Properties

## ExcludeUserAccountsList
### Properties

## OneDriveConfiguration
### Properties
* **DisableLocalGroups**: [DisableLocalGroups](#disablelocalgroups)
* **ExclusionPatterns**: [DataSourceInclusionsExclusionsStrings](#datasourceinclusionsexclusionsstrings)
* **FieldMappings**: [DataSourceToIndexFieldMappingList](#datasourcetoindexfieldmappinglist)
* **InclusionPatterns**: [DataSourceInclusionsExclusionsStrings](#datasourceinclusionsexclusionsstrings)
* **OneDriveUsers**: [OneDriveUsers](#onedriveusers) (Required)
* **SecretArn**: [SecretArn](#secretarn) (Required)
* **TenantDomain**: [TenantDomain](#tenantdomain) (Required)

## DisableLocalGroups
### Properties

## OneDriveUsers
### Properties
* **OneDriveUserList**: [OneDriveUserList](#onedriveuserlist)
* **OneDriveUserS3Path**: [S3Path](#s3path)

## OneDriveUserList
### Properties

## S3Path
### Properties
* **Bucket**: [S3BucketName](#s3bucketname) (Required)
* **Key**: [S3ObjectKey](#s3objectkey) (Required)

## S3ObjectKey
### Properties

## TenantDomain
### Properties

## S3DataSourceConfiguration
### Properties
* **AccessControlListConfiguration**: [AccessControlListConfiguration](#accesscontrollistconfiguration)
* **BucketName**: [S3BucketName](#s3bucketname) (Required)
* **DocumentsMetadataConfiguration**: [DocumentsMetadataConfiguration](#documentsmetadataconfiguration)
* **ExclusionPatterns**: [DataSourceInclusionsExclusionsStrings](#datasourceinclusionsexclusionsstrings)
* **InclusionPatterns**: [DataSourceInclusionsExclusionsStrings](#datasourceinclusionsexclusionsstrings)
* **InclusionPrefixes**: [DataSourceInclusionsExclusionsStrings](#datasourceinclusionsexclusionsstrings)

## AccessControlListConfiguration
### Properties
* **KeyPath**: [S3ObjectKey](#s3objectkey)

## DocumentsMetadataConfiguration
### Properties
* **S3Prefix**: [S3ObjectKey](#s3objectkey)

## SalesforceConfiguration
### Properties
* **ChatterFeedConfiguration**: [SalesforceChatterFeedConfiguration](#salesforcechatterfeedconfiguration)
* **CrawlAttachments**: bool
* **ExcludeAttachmentFilePatterns**: [DataSourceInclusionsExclusionsStrings](#datasourceinclusionsexclusionsstrings)
* **IncludeAttachmentFilePatterns**: [DataSourceInclusionsExclusionsStrings](#datasourceinclusionsexclusionsstrings)
* **KnowledgeArticleConfiguration**: [SalesforceKnowledgeArticleConfiguration](#salesforceknowledgearticleconfiguration)
* **SecretArn**: [SecretArn](#secretarn) (Required)
* **ServerUrl**: [Url](#url) (Required)
* **StandardObjectAttachmentConfiguration**: [SalesforceStandardObjectAttachmentConfiguration](#salesforcestandardobjectattachmentconfiguration)
* **StandardObjectConfigurations**: [SalesforceStandardObjectConfigurationList](#salesforcestandardobjectconfigurationlist)

## SalesforceChatterFeedConfiguration
### Properties
* **DocumentDataFieldName**: [DataSourceFieldName](#datasourcefieldname) (Required)
* **DocumentTitleFieldName**: [DataSourceFieldName](#datasourcefieldname)
* **FieldMappings**: [DataSourceToIndexFieldMappingList](#datasourcetoindexfieldmappinglist)
* **IncludeFilterTypes**: [SalesforceChatterFeedIncludeFilterTypes](#salesforcechatterfeedincludefiltertypes)

## DataSourceFieldName
### Properties

## SalesforceChatterFeedIncludeFilterTypes
### Properties

## SalesforceKnowledgeArticleConfiguration
### Properties
* **CustomKnowledgeArticleTypeConfigurations**: [SalesforceCustomKnowledgeArticleTypeConfigurationList](#salesforcecustomknowledgearticletypeconfigurationlist)
* **IncludedStates**: [SalesforceKnowledgeArticleStateList](#salesforceknowledgearticlestatelist) (Required)
* **StandardKnowledgeArticleTypeConfiguration**: [SalesforceStandardKnowledgeArticleTypeConfiguration](#salesforcestandardknowledgearticletypeconfiguration)

## SalesforceCustomKnowledgeArticleTypeConfigurationList
### Properties

## SalesforceKnowledgeArticleStateList
### Properties

## SalesforceStandardKnowledgeArticleTypeConfiguration
### Properties
* **DocumentDataFieldName**: [DataSourceFieldName](#datasourcefieldname) (Required)
* **DocumentTitleFieldName**: [DataSourceFieldName](#datasourcefieldname)
* **FieldMappings**: [DataSourceToIndexFieldMappingList](#datasourcetoindexfieldmappinglist)

## SalesforceStandardObjectAttachmentConfiguration
### Properties
* **DocumentTitleFieldName**: [DataSourceFieldName](#datasourcefieldname)
* **FieldMappings**: [DataSourceToIndexFieldMappingList](#datasourcetoindexfieldmappinglist)

## SalesforceStandardObjectConfigurationList
### Properties

## ServiceNowConfiguration
### Properties
* **AuthenticationType**: [ServiceNowAuthenticationType](#servicenowauthenticationtype)
* **HostUrl**: [ServiceNowHostUrl](#servicenowhosturl) (Required)
* **KnowledgeArticleConfiguration**: [ServiceNowKnowledgeArticleConfiguration](#servicenowknowledgearticleconfiguration)
* **SecretArn**: [SecretArn](#secretarn) (Required)
* **ServiceCatalogConfiguration**: [ServiceNowServiceCatalogConfiguration](#servicenowservicecatalogconfiguration)
* **ServiceNowBuildVersion**: [ServiceNowBuildVersionType](#servicenowbuildversiontype) (Required)

## ServiceNowAuthenticationType
### Properties

## ServiceNowHostUrl
### Properties

## ServiceNowKnowledgeArticleConfiguration
### Properties
* **CrawlAttachments**: bool
* **DocumentDataFieldName**: [DataSourceFieldName](#datasourcefieldname) (Required)
* **DocumentTitleFieldName**: [DataSourceFieldName](#datasourcefieldname)
* **ExcludeAttachmentFilePatterns**: [DataSourceInclusionsExclusionsStrings](#datasourceinclusionsexclusionsstrings)
* **FieldMappings**: [DataSourceToIndexFieldMappingList](#datasourcetoindexfieldmappinglist)
* **FilterQuery**: [ServiceNowKnowledgeArticleFilterQuery](#servicenowknowledgearticlefilterquery)
* **IncludeAttachmentFilePatterns**: [DataSourceInclusionsExclusionsStrings](#datasourceinclusionsexclusionsstrings)

## ServiceNowKnowledgeArticleFilterQuery
### Properties

## ServiceNowServiceCatalogConfiguration
### Properties
* **CrawlAttachments**: bool
* **DocumentDataFieldName**: [DataSourceFieldName](#datasourcefieldname) (Required)
* **DocumentTitleFieldName**: [DataSourceFieldName](#datasourcefieldname)
* **ExcludeAttachmentFilePatterns**: [DataSourceInclusionsExclusionsStrings](#datasourceinclusionsexclusionsstrings)
* **FieldMappings**: [DataSourceToIndexFieldMappingList](#datasourcetoindexfieldmappinglist)
* **IncludeAttachmentFilePatterns**: [DataSourceInclusionsExclusionsStrings](#datasourceinclusionsexclusionsstrings)

## ServiceNowBuildVersionType
### Properties

## SharePointConfiguration
### Properties
* **CrawlAttachments**: bool
* **DisableLocalGroups**: [DisableLocalGroups](#disablelocalgroups)
* **DocumentTitleFieldName**: [DataSourceFieldName](#datasourcefieldname)
* **ExclusionPatterns**: [DataSourceInclusionsExclusionsStrings](#datasourceinclusionsexclusionsstrings)
* **FieldMappings**: [DataSourceToIndexFieldMappingList](#datasourcetoindexfieldmappinglist)
* **InclusionPatterns**: [DataSourceInclusionsExclusionsStrings](#datasourceinclusionsexclusionsstrings)
* **SecretArn**: [SecretArn](#secretarn) (Required)
* **SharePointVersion**: string (Required)
* **SslCertificateS3Path**: [S3Path](#s3path)
* **Urls**: [Url](#url)[] (Required)
* **UseChangeLog**: bool
* **VpcConfiguration**: [DataSourceVpcConfiguration](#datasourcevpcconfiguration)

## WebCrawlerConfiguration
### Properties
* **AuthenticationConfiguration**: [WebCrawlerAuthenticationConfiguration](#webcrawlerauthenticationconfiguration)
* **CrawlDepth**: int
* **MaxContentSizePerPageInMegaBytes**: int
* **MaxLinksPerPage**: int
* **MaxUrlsPerMinuteCrawlRate**: int
* **ProxyConfiguration**: [ProxyConfiguration](#proxyconfiguration)
* **UrlExclusionPatterns**: [DataSourceInclusionsExclusionsStrings](#datasourceinclusionsexclusionsstrings)
* **UrlInclusionPatterns**: [DataSourceInclusionsExclusionsStrings](#datasourceinclusionsexclusionsstrings)
* **Urls**: [WebCrawlerUrls](#webcrawlerurls) (Required)

## WebCrawlerAuthenticationConfiguration
### Properties
* **BasicAuthentication**: [WebCrawlerBasicAuthenticationList](#webcrawlerbasicauthenticationlist)

## WebCrawlerBasicAuthenticationList
### Properties

## ProxyConfiguration
### Properties
* **Credentials**: [SecretArn](#secretarn)
* **Host**: string (Required)
* **Port**: int (Required)

## WebCrawlerUrls
### Properties
* **SeedUrlConfiguration**: [WebCrawlerSeedUrlConfiguration](#webcrawlerseedurlconfiguration)
* **SiteMapsConfiguration**: [WebCrawlerSiteMapsConfiguration](#webcrawlersitemapsconfiguration)

## WebCrawlerSeedUrlConfiguration
### Properties
* **SeedUrls**: [WebCrawlerSeedUrlList](#webcrawlerseedurllist) (Required)
* **WebCrawlerMode**: string

## WebCrawlerSeedUrlList
### Properties

## WebCrawlerSiteMapsConfiguration
### Properties
* **SiteMaps**: [WebCrawlerSiteMaps](#webcrawlersitemaps) (Required)

## WebCrawlerSiteMaps
### Properties

## WorkDocsConfiguration
### Properties
* **CrawlComments**: bool
* **ExclusionPatterns**: [DataSourceInclusionsExclusionsStrings](#datasourceinclusionsexclusionsstrings)
* **FieldMappings**: [DataSourceToIndexFieldMappingList](#datasourcetoindexfieldmappinglist)
* **InclusionPatterns**: [DataSourceInclusionsExclusionsStrings](#datasourceinclusionsexclusionsstrings)
* **OrganizationId**: string (Required)
* **UseChangeLog**: bool

## Description
### Properties

## Id
### Properties

## IndexId
### Properties

## Name
### Properties

## Schedule
### Properties

## TagList
### Properties

## Type
### Properties

## AWS.Kendra/FaqProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: [Description](#description): FAQ description
* **FileFormat**: [FileFormat](#fileformat): FAQ file format
* **Id**: [Id](#id) (ReadOnly)
* **IndexId**: [IndexId](#indexid) (Required): Index ID
* **Name**: [FaqName](#faqname) (Required): FAQ name
* **RoleArn**: [RoleArn](#rolearn) (Required): FAQ role ARN
* **S3Path**: [S3Path](#s3path) (Required): FAQ S3 path
* **Tags**: [TagList](#taglist): Tags for labeling the FAQ

## Description
### Properties

## FileFormat
### Properties

## Id
### Properties

## IndexId
### Properties

## FaqName
### Properties

## RoleArn
### Properties

## S3Path
### Properties
* **Bucket**: [S3BucketName](#s3bucketname) (Required)
* **Key**: [S3ObjectKey](#s3objectkey) (Required)

## S3BucketName
### Properties

## S3ObjectKey
### Properties

## TagList
### Properties

## AWS.Kendra/IndexProperties
### Properties
* **Arn**: [Arn](#arn) (ReadOnly)
* **CapacityUnits**: [CapacityUnitsConfiguration](#capacityunitsconfiguration): Capacity units
* **Description**: [Description](#description): A description for the index
* **DocumentMetadataConfigurations**: [DocumentMetadataConfigurationList](#documentmetadataconfigurationlist): Document metadata configurations
* **Edition**: [Edition](#edition) (Required)
* **Id**: [Id](#id) (ReadOnly)
* **Name**: [Name](#name) (Required)
* **RoleArn**: [RoleArn](#rolearn) (Required)
* **ServerSideEncryptionConfiguration**: [ServerSideEncryptionConfiguration](#serversideencryptionconfiguration): Server side encryption configuration
* **Tags**: [TagList](#taglist): Tags for labeling the index
* **UserContextPolicy**: [UserContextPolicy](#usercontextpolicy)
* **UserTokenConfigurations**: [UserTokenConfigurationList](#usertokenconfigurationlist)

## Arn
### Properties

## CapacityUnitsConfiguration
### Properties
* **QueryCapacityUnits**: [QueryCapacityUnits](#querycapacityunits) (Required)
* **StorageCapacityUnits**: [StorageCapacityUnits](#storagecapacityunits) (Required)

## QueryCapacityUnits
### Properties

## StorageCapacityUnits
### Properties

## Description
### Properties

## DocumentMetadataConfigurationList
### Properties

## Edition
### Properties

## Id
### Properties

## Name
### Properties

## RoleArn
### Properties

## ServerSideEncryptionConfiguration
### Properties
* **KmsKeyId**: [KmsKeyId](#kmskeyid)

## KmsKeyId
### Properties

## TagList
### Properties

## UserContextPolicy
### Properties

## UserTokenConfigurationList
### Properties

