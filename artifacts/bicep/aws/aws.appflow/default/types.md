# AWS.AppFlow @ default

## Resource AWS.AppFlow/ConnectorProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AppFlow/ConnectorProfileProperties](#awsappflowconnectorprofileproperties) (Required): properties of the resource

## Resource AWS.AppFlow/Flow@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AppFlow/FlowProperties](#awsappflowflowproperties) (Required): properties of the resource

## AWS.AppFlow/ConnectorProfileProperties
### Properties
* **ConnectionMode**: string (Required): Mode in which data transfer should be enabled. Private connection mode is currently enabled for Salesforce, Snowflake, Trendmicro and Singular
* **ConnectorLabel**: string: The label of the connector. The label is unique for each ConnectorRegistration in your AWS account. Only needed if calling for CUSTOMCONNECTOR connector type/.
* **ConnectorProfileArn**: string (ReadOnly): Unique identifier for connector profile resources
* **ConnectorProfileConfig**: [ConnectorProfileConfig](#connectorprofileconfig) (WriteOnly): Connector specific configurations needed to create connector profile
* **ConnectorProfileName**: string (Required): The maximum number of items to retrieve in a single batch.
* **ConnectorType**: [ConnectorType](#connectortype) (Required): List of Saas providers that need connector profile to be created
* **CredentialsArn**: string (ReadOnly): A unique Arn for Connector-Profile resource
* **KMSArn**: string: The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.

## ConnectorProfileConfig
### Properties
* **ConnectorProfileCredentials**: [ConnectorProfileCredentials](#connectorprofilecredentials) (Required)
* **ConnectorProfileProperties**: [ConnectorProfileProperties](#connectorprofileproperties)

## ConnectorProfileCredentials
### Properties
* **Amplitude**: [AmplitudeConnectorProfileCredentials](#amplitudeconnectorprofilecredentials)
* **CustomConnector**: [CustomConnectorProfileCredentials](#customconnectorprofilecredentials)
* **Datadog**: [DatadogConnectorProfileCredentials](#datadogconnectorprofilecredentials)
* **Dynatrace**: [DynatraceConnectorProfileCredentials](#dynatraceconnectorprofilecredentials)
* **GoogleAnalytics**: [GoogleAnalyticsConnectorProfileCredentials](#googleanalyticsconnectorprofilecredentials)
* **InforNexus**: [InforNexusConnectorProfileCredentials](#infornexusconnectorprofilecredentials)
* **Marketo**: [MarketoConnectorProfileCredentials](#marketoconnectorprofilecredentials)
* **Redshift**: [RedshiftConnectorProfileCredentials](#redshiftconnectorprofilecredentials)
* **Salesforce**: [SalesforceConnectorProfileCredentials](#salesforceconnectorprofilecredentials)
* **SAPOData**: [SAPODataConnectorProfileCredentials](#sapodataconnectorprofilecredentials)
* **ServiceNow**: [ServiceNowConnectorProfileCredentials](#servicenowconnectorprofilecredentials)
* **Singular**: [SingularConnectorProfileCredentials](#singularconnectorprofilecredentials)
* **Slack**: [SlackConnectorProfileCredentials](#slackconnectorprofilecredentials)
* **Snowflake**: [SnowflakeConnectorProfileCredentials](#snowflakeconnectorprofilecredentials)
* **Trendmicro**: [TrendmicroConnectorProfileCredentials](#trendmicroconnectorprofilecredentials)
* **Veeva**: [VeevaConnectorProfileCredentials](#veevaconnectorprofilecredentials)
* **Zendesk**: [ZendeskConnectorProfileCredentials](#zendeskconnectorprofilecredentials)

## AmplitudeConnectorProfileCredentials
### Properties
* **ApiKey**: [ApiKey](#apikey) (Required): A unique alphanumeric identi?er used to authenticate a user, developer, or calling program to your API.
* **SecretKey**: [SecretKey](#secretkey) (Required)

## ApiKey
### Properties

## SecretKey
### Properties

## CustomConnectorProfileCredentials
### Properties
* **ApiKey**: [ApiKeyCredentials](#apikeycredentials)
* **AuthenticationType**: [AuthenticationType](#authenticationtype) (Required)
* **Basic**: [BasicAuthCredentials](#basicauthcredentials)
* **Custom**: [CustomAuthCredentials](#customauthcredentials)
* **Oauth2**: [OAuth2Credentials](#oauth2credentials)

## ApiKeyCredentials
### Properties
* **ApiKey**: [ApiKey](#apikey) (Required)
* **ApiSecretKey**: [ApiSecretKey](#apisecretkey)

## ApiSecretKey
### Properties

## AuthenticationType
### Properties

## BasicAuthCredentials
### Properties
* **Password**: [Password](#password) (Required)
* **Username**: [Username](#username) (Required)

## Password
### Properties

## Username
### Properties

## CustomAuthCredentials
### Properties
* **CredentialsMap**: [CredentialsMap](#credentialsmap)
* **CustomAuthenticationType**: [CustomAuthenticationType](#customauthenticationtype) (Required)

## CredentialsMap
### Properties

## CustomAuthenticationType
### Properties

## OAuth2Credentials
### Properties
* **AccessToken**: [AccessToken](#accesstoken)
* **ClientId**: [ClientId](#clientid)
* **ClientSecret**: [ClientSecret](#clientsecret)
* **OAuthRequest**: [ConnectorOAuthRequest](#connectoroauthrequest)
* **RefreshToken**: [RefreshToken](#refreshtoken)

## AccessToken
### Properties

## ClientId
### Properties

## ClientSecret
### Properties

## ConnectorOAuthRequest
### Properties
* **AuthCode**: string: The code provided by the connector when it has been authenticated via the connected app.
* **RedirectUri**: string: The URL to which the authentication server redirects the browser after authorization has been
granted.

## RefreshToken
### Properties

## DatadogConnectorProfileCredentials
### Properties
* **ApiKey**: [ApiKey](#apikey) (Required): A unique alphanumeric identi?er used to authenticate a user, developer, or calling program to your API.
* **ApplicationKey**: [ApplicationKey](#applicationkey) (Required): Application keys, in conjunction with your API key, give you full access to Datadog?s programmatic API. Application keys are associated with the user account that created them. The application key is used to log all requests made to the API.

## ApplicationKey
### Properties

## DynatraceConnectorProfileCredentials
### Properties
* **ApiToken**: [ApiToken](#apitoken) (Required): The API tokens used by Dynatrace API to authenticate various API calls.

## ApiToken
### Properties

## GoogleAnalyticsConnectorProfileCredentials
### Properties
* **AccessToken**: [AccessToken](#accesstoken): The credentials used to access protected resources.
* **ClientId**: [ClientId](#clientid) (Required): The identi?er for the desired client.
* **ClientSecret**: [ClientSecret](#clientsecret) (Required): The client secret used by the oauth client to authenticate to the authorization server.
* **ConnectorOAuthRequest**: [ConnectorOAuthRequest](#connectoroauthrequest): The oauth needed to request security tokens from the connector endpoint.
* **RefreshToken**: [RefreshToken](#refreshtoken): The credentials used to acquire new access tokens.

## InforNexusConnectorProfileCredentials
### Properties
* **AccessKeyId**: [AccessKeyId](#accesskeyid) (Required): The Access Key portion of the credentials.
* **Datakey**: [Key](#key) (Required): The encryption keys used to encrypt data.
* **SecretAccessKey**: [Key](#key) (Required): The secret key used to sign requests.
* **UserId**: [Username](#username) (Required): The identi?er for the user.

## AccessKeyId
### Properties

## Key
### Properties

## MarketoConnectorProfileCredentials
### Properties
* **AccessToken**: [AccessToken](#accesstoken): The credentials used to access protected resources.
* **ClientId**: [ClientId](#clientid) (Required): The identi?er for the desired client.
* **ClientSecret**: [ClientSecret](#clientsecret) (Required): The client secret used by the oauth client to authenticate to the authorization server.
* **ConnectorOAuthRequest**: [ConnectorOAuthRequest](#connectoroauthrequest): The oauth needed to request security tokens from the connector endpoint.

## RedshiftConnectorProfileCredentials
### Properties
* **Password**: [Password](#password) (Required): The password that corresponds to the username.
* **Username**: [Username](#username) (Required): The name of the user.

## SalesforceConnectorProfileCredentials
### Properties
* **AccessToken**: [AccessToken](#accesstoken): The credentials used to access protected resources.
* **ClientCredentialsArn**: [ClientCredentialsArn](#clientcredentialsarn): The client credentials to fetch access token and refresh token.
* **ConnectorOAuthRequest**: [ConnectorOAuthRequest](#connectoroauthrequest): The oauth needed to request security tokens from the connector endpoint.
* **RefreshToken**: [RefreshToken](#refreshtoken): The credentials used to acquire new access tokens.

## ClientCredentialsArn
### Properties

## SAPODataConnectorProfileCredentials
### Properties
* **BasicAuthCredentials**: [BasicAuthCredentials](#basicauthcredentials)
* **OAuthCredentials**: [ConnectorProfile_OAuthCredentials](#connectorprofileoauthcredentials)

## ConnectorProfile_OAuthCredentials
### Properties
* **AccessToken**: [AccessToken](#accesstoken)
* **ClientId**: [ClientId](#clientid)
* **ClientSecret**: [ClientSecret](#clientsecret)
* **ConnectorOAuthRequest**: [ConnectorOAuthRequest](#connectoroauthrequest)
* **RefreshToken**: [RefreshToken](#refreshtoken)

## ServiceNowConnectorProfileCredentials
### Properties
* **Password**: [Password](#password) (Required): The password that corresponds to the username.
* **Username**: [Username](#username) (Required): The name of the user.

## SingularConnectorProfileCredentials
### Properties
* **ApiKey**: [ApiKey](#apikey) (Required): A unique alphanumeric identi?er used to authenticate a user, developer, or calling program to your API.

## SlackConnectorProfileCredentials
### Properties
* **AccessToken**: [AccessToken](#accesstoken): The credentials used to access protected resources.
* **ClientId**: [ClientId](#clientid) (Required): The identi?er for the desired client.
* **ClientSecret**: [ClientSecret](#clientsecret) (Required): The client secret used by the oauth client to authenticate to the authorization server.
* **ConnectorOAuthRequest**: [ConnectorOAuthRequest](#connectoroauthrequest): The oauth needed to request security tokens from the connector endpoint.

## SnowflakeConnectorProfileCredentials
### Properties
* **Password**: [Password](#password) (Required): The password that corresponds to the username.
* **Username**: [Username](#username) (Required): The name of the user.

## TrendmicroConnectorProfileCredentials
### Properties
* **ApiSecretKey**: [ApiSecretKey](#apisecretkey) (Required): The Secret Access Key portion of the credentials.

## VeevaConnectorProfileCredentials
### Properties
* **Password**: [Password](#password) (Required): The password that corresponds to the username.
* **Username**: [Username](#username) (Required): The name of the user.

## ZendeskConnectorProfileCredentials
### Properties
* **AccessToken**: [AccessToken](#accesstoken): The credentials used to access protected resources.
* **ClientId**: [ClientId](#clientid) (Required): The identi?er for the desired client.
* **ClientSecret**: [ClientSecret](#clientsecret) (Required): The client secret used by the oauth client to authenticate to the authorization server.
* **ConnectorOAuthRequest**: [ConnectorOAuthRequest](#connectoroauthrequest): The oauth needed to request security tokens from the connector endpoint.

## ConnectorProfileProperties
### Properties
* **CustomConnector**: [CustomConnectorProfileProperties](#customconnectorprofileproperties)
* **Datadog**: [DatadogConnectorProfileProperties](#datadogconnectorprofileproperties)
* **Dynatrace**: [DynatraceConnectorProfileProperties](#dynatraceconnectorprofileproperties)
* **InforNexus**: [InforNexusConnectorProfileProperties](#infornexusconnectorprofileproperties)
* **Marketo**: [MarketoConnectorProfileProperties](#marketoconnectorprofileproperties)
* **Redshift**: [RedshiftConnectorProfileProperties](#redshiftconnectorprofileproperties)
* **Salesforce**: [SalesforceConnectorProfileProperties](#salesforceconnectorprofileproperties)
* **SAPOData**: [SAPODataConnectorProfileProperties](#sapodataconnectorprofileproperties)
* **ServiceNow**: [ServiceNowConnectorProfileProperties](#servicenowconnectorprofileproperties)
* **Slack**: [SlackConnectorProfileProperties](#slackconnectorprofileproperties)
* **Snowflake**: [SnowflakeConnectorProfileProperties](#snowflakeconnectorprofileproperties)
* **Veeva**: [VeevaConnectorProfileProperties](#veevaconnectorprofileproperties)
* **Zendesk**: [ZendeskConnectorProfileProperties](#zendeskconnectorprofileproperties)

## CustomConnectorProfileProperties
### Properties
* **OAuth2Properties**: [OAuth2Properties](#oauth2properties)
* **ProfileProperties**: [ProfileProperties](#profileproperties)

## OAuth2Properties
### Properties
* **OAuth2GrantType**: [OAuth2GrantType](#oauth2granttype)
* **TokenUrl**: string
* **TokenUrlCustomProperties**: [TokenUrlCustomProperties](#tokenurlcustomproperties)

## OAuth2GrantType
### Properties

## TokenUrlCustomProperties
### Properties

## ProfileProperties
### Properties

## DatadogConnectorProfileProperties
### Properties
* **InstanceUrl**: [InstanceUrl](#instanceurl) (Required): The location of the Datadog resource

## InstanceUrl
### Properties

## DynatraceConnectorProfileProperties
### Properties
* **InstanceUrl**: [InstanceUrl](#instanceurl) (Required): The location of the Dynatrace resource

## InforNexusConnectorProfileProperties
### Properties
* **InstanceUrl**: [InstanceUrl](#instanceurl) (Required): The location of the InforNexus resource

## MarketoConnectorProfileProperties
### Properties
* **InstanceUrl**: [InstanceUrl](#instanceurl) (Required): The location of the Marketo resource

## RedshiftConnectorProfileProperties
### Properties
* **BucketName**: [BucketName](#bucketname) (Required): The name of the Amazon S3 bucket associated with Redshift.
* **BucketPrefix**: [BucketPrefix](#bucketprefix): The object key for the destination bucket in which Amazon AppFlow will place the ?les.
* **DatabaseUrl**: [DatabaseUrl](#databaseurl) (Required): The JDBC URL of the Amazon Redshift cluster.
* **RoleArn**: [RoleArn](#rolearn) (Required): The Amazon Resource Name (ARN) of the IAM role.

## BucketName
### Properties

## BucketPrefix
### Properties

## DatabaseUrl
### Properties

## RoleArn
### Properties

## SalesforceConnectorProfileProperties
### Properties
* **InstanceUrl**: [InstanceUrl](#instanceurl): The location of the Salesforce resource
* **isSandboxEnvironment**: bool

## SAPODataConnectorProfileProperties
### Properties
* **ApplicationHostUrl**: [ApplicationHostUrl](#applicationhosturl)
* **ApplicationServicePath**: [ApplicationServicePath](#applicationservicepath)
* **ClientNumber**: [ClientNumber](#clientnumber)
* **LogonLanguage**: [LogonLanguage](#logonlanguage)
* **OAuthProperties**: [OAuthProperties](#oauthproperties)
* **PortNumber**: [PortNumber](#portnumber)
* **PrivateLinkServiceName**: [PrivateLinkServiceName](#privatelinkservicename)

## ApplicationHostUrl
### Properties

## ApplicationServicePath
### Properties

## ClientNumber
### Properties

## LogonLanguage
### Properties

## OAuthProperties
### Properties
* **AuthCodeUrl**: string
* **OAuthScopes**: string[]
* **TokenUrl**: string

## PortNumber
### Properties

## PrivateLinkServiceName
### Properties

## ServiceNowConnectorProfileProperties
### Properties
* **InstanceUrl**: [InstanceUrl](#instanceurl) (Required): The location of the ServiceNow resource

## SlackConnectorProfileProperties
### Properties
* **InstanceUrl**: [InstanceUrl](#instanceurl) (Required): The location of the Slack resource

## SnowflakeConnectorProfileProperties
### Properties
* **AccountName**: [AccountName](#accountname): The name of the account.
* **BucketName**: [BucketName](#bucketname) (Required): The name of the Amazon S3 bucket associated with Snow?ake.
* **BucketPrefix**: [BucketPrefix](#bucketprefix): The bucket prefix that refers to the Amazon S3 bucket associated with Snow?ake.
* **PrivateLinkServiceName**: [PrivateLinkServiceName](#privatelinkservicename): The Snow?ake Private Link service name to be used for private data transfers.
* **Region**: [Region](#region): The region of the Snow?ake account.
* **Stage**: [Stage](#stage) (Required): The name of the Amazon S3 stage that was created while setting up an Amazon S3 stage in the
Snow?ake account. This is written in the following format: < Database>< Schema><Stage Name>.
* **Warehouse**: [Warehouse](#warehouse) (Required): The name of the Snow?ake warehouse.

## AccountName
### Properties

## Region
### Properties

## Stage
### Properties

## Warehouse
### Properties

## VeevaConnectorProfileProperties
### Properties
* **InstanceUrl**: [InstanceUrl](#instanceurl) (Required): The location of the Veeva resource

## ZendeskConnectorProfileProperties
### Properties
* **InstanceUrl**: [InstanceUrl](#instanceurl) (Required): The location of the Zendesk resource

## ConnectorType
### Properties

## AWS.AppFlow/FlowProperties
### Properties
* **Description**: string: Description of the flow.
* **DestinationFlowConfigList**: [DestinationFlowConfig](#destinationflowconfig)[] (Required): List of Destination connectors of the flow.
* **FlowArn**: string (ReadOnly): ARN identifier of the flow.
* **FlowName**: string (Required): Name of the flow.
* **KMSArn**: string: The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.
* **SourceFlowConfig**: [SourceFlowConfig](#sourceflowconfig) (Required): Configurations of Source connector of the flow.
* **Tags**: [Tag](#tag)[]: List of Tags.
* **Tasks**: [Task](#task)[] (Required): List of tasks for the flow.
* **TriggerConfig**: [TriggerConfig](#triggerconfig) (Required): Trigger settings of the flow.

## DestinationFlowConfig
### Properties
* **ApiVersion**: [ApiVersion](#apiversion): The API version that the destination connector uses.
* **ConnectorProfileName**: [ConnectorProfileName](#connectorprofilename): Name of destination connector profile
* **ConnectorType**: [ConnectorType](#connectortype) (Required): Destination connector type
* **DestinationConnectorProperties**: [DestinationConnectorProperties](#destinationconnectorproperties) (Required): Destination connector details

## ApiVersion
### Properties

## ConnectorProfileName
### Properties

## ConnectorType
### Properties

## DestinationConnectorProperties
### Properties
* **CustomConnector**: [CustomConnectorDestinationProperties](#customconnectordestinationproperties)
* **EventBridge**: [EventBridgeDestinationProperties](#eventbridgedestinationproperties)
* **LookoutMetrics**: [LookoutMetricsDestinationProperties](#lookoutmetricsdestinationproperties)
* **Marketo**: [MarketoDestinationProperties](#marketodestinationproperties)
* **Redshift**: [RedshiftDestinationProperties](#redshiftdestinationproperties)
* **S3**: [S3DestinationProperties](#s3destinationproperties)
* **Salesforce**: [SalesforceDestinationProperties](#salesforcedestinationproperties)
* **SAPOData**: [SAPODataDestinationProperties](#sapodatadestinationproperties)
* **Snowflake**: [SnowflakeDestinationProperties](#snowflakedestinationproperties)
* **Upsolver**: [UpsolverDestinationProperties](#upsolverdestinationproperties)
* **Zendesk**: [ZendeskDestinationProperties](#zendeskdestinationproperties)

## CustomConnectorDestinationProperties
### Properties
* **CustomProperties**: [CustomProperties](#customproperties)
* **EntityName**: [EntityName](#entityname) (Required)
* **ErrorHandlingConfig**: [ErrorHandlingConfig](#errorhandlingconfig)
* **IdFieldNames**: string[]: List of fields used as ID when performing a write operation.
* **WriteOperationType**: [WriteOperationType](#writeoperationtype)

## CustomProperties
### Properties

## EntityName
### Properties

## ErrorHandlingConfig
### Properties
* **BucketName**: [BucketName](#bucketname)
* **BucketPrefix**: [BucketPrefix](#bucketprefix)
* **FailOnFirstError**: bool

## BucketName
### Properties

## BucketPrefix
### Properties

## WriteOperationType
### Properties

## EventBridgeDestinationProperties
### Properties
* **ErrorHandlingConfig**: [ErrorHandlingConfig](#errorhandlingconfig)
* **Object**: [Object](#object) (Required)

## Object
### Properties

## LookoutMetricsDestinationProperties
### Properties
* **Object**: [Object](#object)

## MarketoDestinationProperties
### Properties
* **ErrorHandlingConfig**: [ErrorHandlingConfig](#errorhandlingconfig)
* **Object**: [Object](#object) (Required)

## RedshiftDestinationProperties
### Properties
* **BucketPrefix**: [BucketPrefix](#bucketprefix)
* **ErrorHandlingConfig**: [ErrorHandlingConfig](#errorhandlingconfig)
* **IntermediateBucketName**: [BucketName](#bucketname) (Required)
* **Object**: [Object](#object) (Required)

## S3DestinationProperties
### Properties
* **BucketName**: [BucketName](#bucketname) (Required)
* **BucketPrefix**: [BucketPrefix](#bucketprefix)
* **S3OutputFormatConfig**: [S3OutputFormatConfig](#s3outputformatconfig)

## S3OutputFormatConfig
### Properties
* **AggregationConfig**: [AggregationConfig](#aggregationconfig)
* **FileType**: [FileType](#filetype)
* **PrefixConfig**: [PrefixConfig](#prefixconfig)
* **PreserveSourceDataTyping**: [PreserveSourceDataTyping](#preservesourcedatatyping)

## AggregationConfig
### Properties
* **AggregationType**: [AggregationType](#aggregationtype)

## AggregationType
### Properties

## FileType
### Properties

## PrefixConfig
### Properties
* **PrefixFormat**: [PrefixFormat](#prefixformat)
* **PrefixType**: [PrefixType](#prefixtype)

## PrefixFormat
### Properties

## PrefixType
### Properties

## PreserveSourceDataTyping
### Properties

## SalesforceDestinationProperties
### Properties
* **ErrorHandlingConfig**: [ErrorHandlingConfig](#errorhandlingconfig)
* **IdFieldNames**: string[]: List of fields used as ID when performing a write operation.
* **Object**: [Object](#object) (Required)
* **WriteOperationType**: [WriteOperationType](#writeoperationtype)

## SAPODataDestinationProperties
### Properties
* **ErrorHandlingConfig**: [ErrorHandlingConfig](#errorhandlingconfig)
* **IdFieldNames**: string[]: List of fields used as ID when performing a write operation.
* **ObjectPath**: [Object](#object) (Required)
* **SuccessResponseHandlingConfig**: [SuccessResponseHandlingConfig](#successresponsehandlingconfig)
* **WriteOperationType**: [WriteOperationType](#writeoperationtype)

## SuccessResponseHandlingConfig
### Properties
* **BucketName**: [BucketName](#bucketname)
* **BucketPrefix**: [BucketPrefix](#bucketprefix)

## SnowflakeDestinationProperties
### Properties
* **BucketPrefix**: [BucketPrefix](#bucketprefix)
* **ErrorHandlingConfig**: [ErrorHandlingConfig](#errorhandlingconfig)
* **IntermediateBucketName**: [BucketName](#bucketname) (Required)
* **Object**: [Object](#object) (Required)

## UpsolverDestinationProperties
### Properties
* **BucketName**: [UpsolverBucketName](#upsolverbucketname) (Required)
* **BucketPrefix**: [BucketPrefix](#bucketprefix)
* **S3OutputFormatConfig**: [UpsolverS3OutputFormatConfig](#upsolvers3outputformatconfig) (Required)

## UpsolverBucketName
### Properties

## UpsolverS3OutputFormatConfig
### Properties
* **AggregationConfig**: [AggregationConfig](#aggregationconfig)
* **FileType**: [FileType](#filetype)
* **PrefixConfig**: [PrefixConfig](#prefixconfig) (Required)

## ZendeskDestinationProperties
### Properties
* **ErrorHandlingConfig**: [ErrorHandlingConfig](#errorhandlingconfig)
* **IdFieldNames**: string[]: List of fields used as ID when performing a write operation.
* **Object**: [Object](#object) (Required)
* **WriteOperationType**: [WriteOperationType](#writeoperationtype)

## SourceFlowConfig
### Properties
* **ApiVersion**: [ApiVersion](#apiversion): The API version that the destination connector uses.
* **ConnectorProfileName**: [ConnectorProfileName](#connectorprofilename): Name of source connector profile
* **ConnectorType**: [ConnectorType](#connectortype) (Required): Type of source connector
* **IncrementalPullConfig**: [IncrementalPullConfig](#incrementalpullconfig): Configuration for scheduled incremental data pull
* **SourceConnectorProperties**: [SourceConnectorProperties](#sourceconnectorproperties) (Required): Source connector details required to query a connector

## IncrementalPullConfig
### Properties
* **DatetimeTypeFieldName**: [DatetimeTypeFieldName](#datetimetypefieldname)

## DatetimeTypeFieldName
### Properties

## SourceConnectorProperties
### Properties
* **Amplitude**: [AmplitudeSourceProperties](#amplitudesourceproperties)
* **CustomConnector**: [CustomConnectorSourceProperties](#customconnectorsourceproperties)
* **Datadog**: [DatadogSourceProperties](#datadogsourceproperties)
* **Dynatrace**: [DynatraceSourceProperties](#dynatracesourceproperties)
* **GoogleAnalytics**: [GoogleAnalyticsSourceProperties](#googleanalyticssourceproperties)
* **InforNexus**: [InforNexusSourceProperties](#infornexussourceproperties)
* **Marketo**: [MarketoSourceProperties](#marketosourceproperties)
* **S3**: [S3SourceProperties](#s3sourceproperties)
* **Salesforce**: [SalesforceSourceProperties](#salesforcesourceproperties)
* **SAPOData**: [SAPODataSourceProperties](#sapodatasourceproperties)
* **ServiceNow**: [ServiceNowSourceProperties](#servicenowsourceproperties)
* **Singular**: [SingularSourceProperties](#singularsourceproperties)
* **Slack**: [SlackSourceProperties](#slacksourceproperties)
* **Trendmicro**: [TrendmicroSourceProperties](#trendmicrosourceproperties)
* **Veeva**: [VeevaSourceProperties](#veevasourceproperties)
* **Zendesk**: [ZendeskSourceProperties](#zendesksourceproperties)

## AmplitudeSourceProperties
### Properties
* **Object**: [Object](#object) (Required)

## CustomConnectorSourceProperties
### Properties
* **CustomProperties**: [CustomProperties](#customproperties)
* **EntityName**: [EntityName](#entityname) (Required)

## DatadogSourceProperties
### Properties
* **Object**: [Object](#object) (Required)

## DynatraceSourceProperties
### Properties
* **Object**: [Object](#object) (Required)

## GoogleAnalyticsSourceProperties
### Properties
* **Object**: [Object](#object) (Required)

## InforNexusSourceProperties
### Properties
* **Object**: [Object](#object) (Required)

## MarketoSourceProperties
### Properties
* **Object**: [Object](#object) (Required)

## S3SourceProperties
### Properties
* **BucketName**: [BucketName](#bucketname) (Required)
* **BucketPrefix**: [BucketPrefix](#bucketprefix) (Required)
* **S3InputFormatConfig**: [S3InputFormatConfig](#s3inputformatconfig)

## S3InputFormatConfig
### Properties
* **S3InputFileType**: string

## SalesforceSourceProperties
### Properties
* **EnableDynamicFieldUpdate**: [EnableDynamicFieldUpdate](#enabledynamicfieldupdate)
* **IncludeDeletedRecords**: [IncludeDeletedRecords](#includedeletedrecords)
* **Object**: [Object](#object) (Required)

## EnableDynamicFieldUpdate
### Properties

## IncludeDeletedRecords
### Properties

## SAPODataSourceProperties
### Properties
* **ObjectPath**: [Object](#object) (Required)

## ServiceNowSourceProperties
### Properties
* **Object**: [Object](#object) (Required)

## SingularSourceProperties
### Properties
* **Object**: [Object](#object) (Required)

## SlackSourceProperties
### Properties
* **Object**: [Object](#object) (Required)

## TrendmicroSourceProperties
### Properties
* **Object**: [Object](#object) (Required)

## VeevaSourceProperties
### Properties
* **DocumentType**: [DocumentType](#documenttype)
* **IncludeAllVersions**: [IncludeAllVersions](#includeallversions)
* **IncludeRenditions**: [IncludeRenditions](#includerenditions)
* **IncludeSourceFiles**: [IncludeSourceFiles](#includesourcefiles)
* **Object**: [Object](#object) (Required)

## DocumentType
### Properties

## IncludeAllVersions
### Properties

## IncludeRenditions
### Properties

## IncludeSourceFiles
### Properties

## ZendeskSourceProperties
### Properties
* **Object**: [Object](#object) (Required)

## Tag
### Properties
* **Key**: string (Required): A string used to identify this tag
* **Value**: string (Required): A string containing the value for the tag

## Task
### Properties
* **ConnectorOperator**: [ConnectorOperator](#connectoroperator): Operation to be performed on provided source fields
* **DestinationField**: string: A field value on which source field should be validated
* **SourceFields**: string[] (Required): Source fields on which particular task will be applied
* **TaskProperties**: [TaskPropertiesObject](#taskpropertiesobject)[]: A Map used to store task related info
* **TaskType**: [TaskType](#tasktype) (Required): Type of task

## ConnectorOperator
### Properties
* **Amplitude**: [AmplitudeConnectorOperator](#amplitudeconnectoroperator)
* **CustomConnector**: [Operator](#operator)
* **Datadog**: [DatadogConnectorOperator](#datadogconnectoroperator)
* **Dynatrace**: [DynatraceConnectorOperator](#dynatraceconnectoroperator)
* **GoogleAnalytics**: [GoogleAnalyticsConnectorOperator](#googleanalyticsconnectoroperator)
* **InforNexus**: [InforNexusConnectorOperator](#infornexusconnectoroperator)
* **Marketo**: [MarketoConnectorOperator](#marketoconnectoroperator)
* **S3**: [S3ConnectorOperator](#s3connectoroperator)
* **Salesforce**: [SalesforceConnectorOperator](#salesforceconnectoroperator)
* **SAPOData**: [SAPODataConnectorOperator](#sapodataconnectoroperator)
* **ServiceNow**: [ServiceNowConnectorOperator](#servicenowconnectoroperator)
* **Singular**: [SingularConnectorOperator](#singularconnectoroperator)
* **Slack**: [SlackConnectorOperator](#slackconnectoroperator)
* **Trendmicro**: [TrendmicroConnectorOperator](#trendmicroconnectoroperator)
* **Veeva**: [VeevaConnectorOperator](#veevaconnectoroperator)
* **Zendesk**: [ZendeskConnectorOperator](#zendeskconnectoroperator)

## AmplitudeConnectorOperator
### Properties

## Operator
### Properties

## DatadogConnectorOperator
### Properties

## DynatraceConnectorOperator
### Properties

## GoogleAnalyticsConnectorOperator
### Properties

## InforNexusConnectorOperator
### Properties

## MarketoConnectorOperator
### Properties

## S3ConnectorOperator
### Properties

## SalesforceConnectorOperator
### Properties

## SAPODataConnectorOperator
### Properties

## ServiceNowConnectorOperator
### Properties

## SingularConnectorOperator
### Properties

## SlackConnectorOperator
### Properties

## TrendmicroConnectorOperator
### Properties

## VeevaConnectorOperator
### Properties

## ZendeskConnectorOperator
### Properties

## TaskPropertiesObject
### Properties
* **Key**: [OperatorPropertiesKeys](#operatorpropertieskeys) (Required)
* **Value**: string (Required)

## OperatorPropertiesKeys
### Properties

## TaskType
### Properties

## TriggerConfig
### Properties
* **TriggerProperties**: [ScheduledTriggerProperties](#scheduledtriggerproperties): Details required based on the type of trigger
* **TriggerType**: [TriggerType](#triggertype) (Required): Trigger type of the flow

## ScheduledTriggerProperties
### Properties
* **DataPullMode**: string
* **FirstExecutionFrom**: int
* **FlowErrorDeactivationThreshold**: int
* **ScheduleEndTime**: int
* **ScheduleExpression**: string (Required)
* **ScheduleOffset**: int
* **ScheduleStartTime**: int
* **TimeZone**: string

## TriggerType
### Properties

