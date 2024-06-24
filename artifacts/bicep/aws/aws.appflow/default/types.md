# AWS.AppFlow @ default

## Resource AWS.AppFlow/Connector@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppFlow/ConnectorProperties](#awsappflowconnectorproperties) (Required, Identifier): properties of the resource

## Resource AWS.AppFlow/ConnectorProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppFlow/ConnectorProfileProperties](#awsappflowconnectorprofileproperties) (Required, Identifier): properties of the resource

## Resource AWS.AppFlow/Flow@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppFlow/FlowProperties](#awsappflowflowproperties) (Required, Identifier): properties of the resource

## AggregationConfig
### Properties
* **AggregationType**: string
* **TargetFileSize**: int

## AmplitudeConnectorProfileCredentials
### Properties
* **ApiKey**: string (Required): A unique alphanumeric identi?er used to authenticate a user, developer, or calling program to your API.
* **SecretKey**: string (Required)

## AmplitudeSourceProperties
### Properties
* **Object**: string (Required)

## ApiKeyCredentials
### Properties
* **ApiKey**: string (Required)
* **ApiSecretKey**: string

## AWS.AppFlow/ConnectorProfileProperties
### Properties
* **ConnectionMode**: string (Required): Mode in which data transfer should be enabled. Private connection mode is currently enabled for Salesforce, Snowflake, Trendmicro and Singular
* **ConnectorLabel**: string: The label of the connector. The label is unique for each ConnectorRegistration in your AWS account. Only needed if calling for CUSTOMCONNECTOR connector type/.
* **ConnectorProfileArn**: string (ReadOnly): Unique identifier for connector profile resources
* **ConnectorProfileConfig**: [ConnectorProfileConfig](#connectorprofileconfig) (WriteOnly): Connector specific configurations needed to create connector profile
* **ConnectorProfileName**: string (Required, Identifier): The maximum number of items to retrieve in a single batch.
* **ConnectorType**: string (Required): List of Saas providers that need connector profile to be created
* **CredentialsArn**: string (ReadOnly): A unique Arn for Connector-Profile resource
* **KMSArn**: string (WriteOnly): The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.

## AWS.AppFlow/ConnectorProperties
### Properties
* **ConnectorArn**: string (ReadOnly):  The arn of the connector. The arn is unique for each ConnectorRegistration in your AWS account.
* **ConnectorLabel**: string (Identifier):  The name of the connector. The name is unique for each ConnectorRegistration in your AWS account.
* **ConnectorProvisioningConfig**: [ConnectorProvisioningConfig](#connectorprovisioningconfig) (Required): Contains information about the configuration of the connector being registered.
* **ConnectorProvisioningType**: string (Required): The provisioning type of the connector. Currently the only supported value is LAMBDA. 
* **Description**: string: A description about the connector that's being registered.

## AWS.AppFlow/FlowProperties
### Properties
* **Description**: string: Description of the flow.
* **DestinationFlowConfigList**: [DestinationFlowConfig](#destinationflowconfig)[] (Required): List of Destination connectors of the flow.
* **FlowArn**: string (ReadOnly): ARN identifier of the flow.
* **FlowName**: string (Required, Identifier): Name of the flow.
* **FlowStatus**: string: Flow activation status for Scheduled- and Event-triggered flows
* **KMSArn**: string: The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.
* **MetadataCatalogConfig**: [MetadataCatalogConfig](#metadatacatalogconfig): Configurations of metadata catalog of the flow.
* **SourceFlowConfig**: [SourceFlowConfig](#sourceflowconfig) (Required): Configurations of Source connector of the flow.
* **Tags**: [Tag](#tag)[]: List of Tags.
* **Tasks**: [Task](#task)[] (Required): List of tasks for the flow.
* **TriggerConfig**: [TriggerConfig](#triggerconfig) (Required): Trigger settings of the flow.

## BasicAuthCredentials
### Properties
* **Password**: string (Required)
* **Username**: string (Required)

## ConnectorOAuthRequest
### Properties
* **AuthCode**: string: The code provided by the connector when it has been authenticated via the connected app.
* **RedirectUri**: string: The URL to which the authentication server redirects the browser after authorization has been
granted.

## ConnectorOperator
### Properties
* **Amplitude**: string
* **CustomConnector**: string
* **Datadog**: string
* **Dynatrace**: string
* **GoogleAnalytics**: string
* **InforNexus**: string
* **Marketo**: string
* **Pardot**: string
* **S3**: string
* **Salesforce**: string
* **SAPOData**: string
* **ServiceNow**: string
* **Singular**: string
* **Slack**: string
* **Trendmicro**: string
* **Veeva**: string
* **Zendesk**: string

## ConnectorProfile_OAuthCredentials
### Properties
* **AccessToken**: string
* **ClientId**: string
* **ClientSecret**: string
* **ConnectorOAuthRequest**: [ConnectorOAuthRequest](#connectoroauthrequest)
* **RefreshToken**: string

## ConnectorProfileConfig
### Properties
* **ConnectorProfileCredentials**: [ConnectorProfileCredentials](#connectorprofilecredentials)
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
* **Pardot**: [PardotConnectorProfileCredentials](#pardotconnectorprofilecredentials)
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

## ConnectorProfileProperties
### Properties
* **CustomConnector**: [CustomConnectorProfileProperties](#customconnectorprofileproperties)
* **Datadog**: [DatadogConnectorProfileProperties](#datadogconnectorprofileproperties)
* **Dynatrace**: [DynatraceConnectorProfileProperties](#dynatraceconnectorprofileproperties)
* **InforNexus**: [InforNexusConnectorProfileProperties](#infornexusconnectorprofileproperties)
* **Marketo**: [MarketoConnectorProfileProperties](#marketoconnectorprofileproperties)
* **Pardot**: [PardotConnectorProfileProperties](#pardotconnectorprofileproperties)
* **Redshift**: [RedshiftConnectorProfileProperties](#redshiftconnectorprofileproperties)
* **Salesforce**: [SalesforceConnectorProfileProperties](#salesforceconnectorprofileproperties)
* **SAPOData**: [SAPODataConnectorProfileProperties](#sapodataconnectorprofileproperties)
* **ServiceNow**: [ServiceNowConnectorProfileProperties](#servicenowconnectorprofileproperties)
* **Slack**: [SlackConnectorProfileProperties](#slackconnectorprofileproperties)
* **Snowflake**: [SnowflakeConnectorProfileProperties](#snowflakeconnectorprofileproperties)
* **Veeva**: [VeevaConnectorProfileProperties](#veevaconnectorprofileproperties)
* **Zendesk**: [ZendeskConnectorProfileProperties](#zendeskconnectorprofileproperties)

## ConnectorProvisioningConfig
### Properties
* **Lambda**: [LambdaConnectorProvisioningConfig](#lambdaconnectorprovisioningconfig): Contains information about the configuration of the lambda which is being registered as the connector.

## CredentialsMap
### Properties

## CustomAuthCredentials
### Properties
* **CredentialsMap**: [CredentialsMap](#credentialsmap)
* **CustomAuthenticationType**: string (Required)

## CustomConnectorDestinationProperties
### Properties
* **CustomProperties**: [CustomProperties](#customproperties)
* **EntityName**: string (Required)
* **ErrorHandlingConfig**: [ErrorHandlingConfig](#errorhandlingconfig)
* **IdFieldNames**: string[]: List of fields used as ID when performing a write operation.
* **WriteOperationType**: string

## CustomConnectorProfileCredentials
### Properties
* **ApiKey**: [ApiKeyCredentials](#apikeycredentials)
* **AuthenticationType**: string (Required)
* **Basic**: [BasicAuthCredentials](#basicauthcredentials)
* **Custom**: [CustomAuthCredentials](#customauthcredentials)
* **Oauth2**: [OAuth2Credentials](#oauth2credentials)

## CustomConnectorProfileProperties
### Properties
* **OAuth2Properties**: [OAuth2Properties](#oauth2properties)
* **ProfileProperties**: [ProfileProperties](#profileproperties)

## CustomConnectorSourceProperties
### Properties
* **CustomProperties**: [CustomProperties](#customproperties)
* **DataTransferApi**: [Flow_DataTransferApi](#flowdatatransferapi)
* **EntityName**: string (Required)

## CustomProperties
### Properties

## DatadogConnectorProfileCredentials
### Properties
* **ApiKey**: string (Required): A unique alphanumeric identi?er used to authenticate a user, developer, or calling program to your API.
* **ApplicationKey**: string (Required): Application keys, in conjunction with your API key, give you full access to Datadog?s programmatic API. Application keys are associated with the user account that created them. The application key is used to log all requests made to the API.

## DatadogConnectorProfileProperties
### Properties
* **InstanceUrl**: string (Required): The location of the Datadog resource

## DatadogSourceProperties
### Properties
* **Object**: string (Required)

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

## DestinationFlowConfig
### Properties
* **ApiVersion**: string: The API version that the destination connector uses.
* **ConnectorProfileName**: string: Name of destination connector profile
* **ConnectorType**: string (Required): Destination connector type
* **DestinationConnectorProperties**: [DestinationConnectorProperties](#destinationconnectorproperties) (Required): Destination connector details

## DynatraceConnectorProfileCredentials
### Properties
* **ApiToken**: string (Required): The API tokens used by Dynatrace API to authenticate various API calls.

## DynatraceConnectorProfileProperties
### Properties
* **InstanceUrl**: string (Required): The location of the Dynatrace resource

## DynatraceSourceProperties
### Properties
* **Object**: string (Required)

## ErrorHandlingConfig
### Properties
* **BucketName**: string
* **BucketPrefix**: string
* **FailOnFirstError**: bool

## EventBridgeDestinationProperties
### Properties
* **ErrorHandlingConfig**: [ErrorHandlingConfig](#errorhandlingconfig)
* **Object**: string (Required)

## Flow_DataTransferApi
### Properties
* **Name**: string (Required)
* **Type**: string (Required)

## GlueDataCatalog
### Properties
* **DatabaseName**: string (Required): A string containing the value for the tag
* **RoleArn**: string (Required): A string containing the value for the tag
* **TablePrefix**: string (Required): A string containing the value for the tag

## GoogleAnalyticsConnectorProfileCredentials
### Properties
* **AccessToken**: string: The credentials used to access protected resources.
* **ClientId**: string (Required): The identi?er for the desired client.
* **ClientSecret**: string (Required): The client secret used by the oauth client to authenticate to the authorization server.
* **ConnectorOAuthRequest**: [ConnectorOAuthRequest](#connectoroauthrequest): The oauth needed to request security tokens from the connector endpoint.
* **RefreshToken**: string: The credentials used to acquire new access tokens.

## GoogleAnalyticsSourceProperties
### Properties
* **Object**: string (Required)

## IncrementalPullConfig
### Properties
* **DatetimeTypeFieldName**: string

## InforNexusConnectorProfileCredentials
### Properties
* **AccessKeyId**: string (Required): The Access Key portion of the credentials.
* **Datakey**: string (Required): The encryption keys used to encrypt data.
* **SecretAccessKey**: string (Required): The secret key used to sign requests.
* **UserId**: string (Required): The identi?er for the user.

## InforNexusConnectorProfileProperties
### Properties
* **InstanceUrl**: string (Required): The location of the InforNexus resource

## InforNexusSourceProperties
### Properties
* **Object**: string (Required)

## LambdaConnectorProvisioningConfig
### Properties
* **LambdaArn**: string (Required): Lambda ARN of the connector being registered.

## LookoutMetricsDestinationProperties
### Properties
* **Object**: string

## MarketoConnectorProfileCredentials
### Properties
* **AccessToken**: string: The credentials used to access protected resources.
* **ClientId**: string (Required): The identi?er for the desired client.
* **ClientSecret**: string (Required): The client secret used by the oauth client to authenticate to the authorization server.
* **ConnectorOAuthRequest**: [ConnectorOAuthRequest](#connectoroauthrequest): The oauth needed to request security tokens from the connector endpoint.

## MarketoConnectorProfileProperties
### Properties
* **InstanceUrl**: string (Required): The location of the Marketo resource

## MarketoDestinationProperties
### Properties
* **ErrorHandlingConfig**: [ErrorHandlingConfig](#errorhandlingconfig)
* **Object**: string (Required)

## MarketoSourceProperties
### Properties
* **Object**: string (Required)

## MetadataCatalogConfig
### Properties
* **GlueDataCatalog**: [GlueDataCatalog](#gluedatacatalog): Configurations of glue data catalog of the flow.

## OAuth2Credentials
### Properties
* **AccessToken**: string
* **ClientId**: string
* **ClientSecret**: string
* **OAuthRequest**: [ConnectorOAuthRequest](#connectoroauthrequest)
* **RefreshToken**: string

## OAuth2Properties
### Properties
* **OAuth2GrantType**: string
* **TokenUrl**: string
* **TokenUrlCustomProperties**: [TokenUrlCustomProperties](#tokenurlcustomproperties)

## OAuthProperties
### Properties
* **AuthCodeUrl**: string
* **OAuthScopes**: string[]
* **TokenUrl**: string

## PardotConnectorProfileCredentials
### Properties
* **AccessToken**: string: The credentials used to access protected resources.
* **ClientCredentialsArn**: string: The client credentials to fetch access token and refresh token.
* **ConnectorOAuthRequest**: [ConnectorOAuthRequest](#connectoroauthrequest): The oauth needed to request security tokens from the connector endpoint.
* **RefreshToken**: string: The credentials used to acquire new access tokens.

## PardotConnectorProfileProperties
### Properties
* **BusinessUnitId**: string (Required): The Business unit id of Salesforce Pardot instance to be connected
* **InstanceUrl**: string: The location of the Salesforce Pardot resource
* **IsSandboxEnvironment**: bool: Indicates whether the connector profile applies to a demo or production environment

## PardotSourceProperties
### Properties
* **Object**: string (Required)

## PrefixConfig
### Properties
* **PathPrefixHierarchy**: string[]
* **PrefixFormat**: string
* **PrefixType**: string

## ProfileProperties
### Properties

## RedshiftConnectorProfileCredentials
### Properties
* **Password**: string: The password that corresponds to the username.
* **Username**: string: The name of the user.

## RedshiftConnectorProfileProperties
### Properties
* **BucketName**: string (Required): The name of the Amazon S3 bucket associated with Redshift.
* **BucketPrefix**: string: The object key for the destination bucket in which Amazon AppFlow will place the ?les.
* **ClusterIdentifier**: string: The unique identifier of the Amazon Redshift cluster.
* **DataApiRoleArn**: string: The Amazon Resource Name (ARN) of the IAM role that grants Amazon AppFlow access to the data through the Amazon Redshift Data API.
* **DatabaseName**: string: The name of the Amazon Redshift database that will store the transferred data.
* **DatabaseUrl**: string: The JDBC URL of the Amazon Redshift cluster.
* **IsRedshiftServerless**: bool: If Amazon AppFlow will connect to Amazon Redshift Serverless or Amazon Redshift cluster.
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role.
* **WorkgroupName**: string: The name of the Amazon Redshift serverless workgroup

## RedshiftDestinationProperties
### Properties
* **BucketPrefix**: string
* **ErrorHandlingConfig**: [ErrorHandlingConfig](#errorhandlingconfig)
* **IntermediateBucketName**: string (Required)
* **Object**: string (Required)

## S3DestinationProperties
### Properties
* **BucketName**: string (Required)
* **BucketPrefix**: string
* **S3OutputFormatConfig**: [S3OutputFormatConfig](#s3outputformatconfig)

## S3InputFormatConfig
### Properties
* **S3InputFileType**: string

## S3OutputFormatConfig
### Properties
* **AggregationConfig**: [AggregationConfig](#aggregationconfig)
* **FileType**: string
* **PrefixConfig**: [PrefixConfig](#prefixconfig)
* **PreserveSourceDataTyping**: bool

## S3SourceProperties
### Properties
* **BucketName**: string (Required)
* **BucketPrefix**: string (Required)
* **S3InputFormatConfig**: [S3InputFormatConfig](#s3inputformatconfig)

## SalesforceConnectorProfileCredentials
### Properties
* **AccessToken**: string: The credentials used to access protected resources.
* **ClientCredentialsArn**: string: The client credentials to fetch access token and refresh token.
* **ConnectorOAuthRequest**: [ConnectorOAuthRequest](#connectoroauthrequest): The oauth needed to request security tokens from the connector endpoint.
* **JwtToken**: string: The credentials used to access your Salesforce records
* **OAuth2GrantType**: string: The grant types to fetch an access token
* **RefreshToken**: string: The credentials used to acquire new access tokens.

## SalesforceConnectorProfileProperties
### Properties
* **InstanceUrl**: string: The location of the Salesforce resource
* **isSandboxEnvironment**: bool: Indicates whether the connector profile applies to a sandbox or production environment
* **usePrivateLinkForMetadataAndAuthorization**: bool: Indicates whether to make Metadata And Authorization calls over Pivate Network

## SalesforceDestinationProperties
### Properties
* **DataTransferApi**: string
* **ErrorHandlingConfig**: [ErrorHandlingConfig](#errorhandlingconfig)
* **IdFieldNames**: string[]: List of fields used as ID when performing a write operation.
* **Object**: string (Required)
* **WriteOperationType**: string

## SalesforceSourceProperties
### Properties
* **DataTransferApi**: string
* **EnableDynamicFieldUpdate**: bool
* **IncludeDeletedRecords**: bool
* **Object**: string (Required)

## SAPODataConnectorProfileCredentials
### Properties
* **BasicAuthCredentials**: [BasicAuthCredentials](#basicauthcredentials)
* **OAuthCredentials**: [ConnectorProfile_OAuthCredentials](#connectorprofileoauthcredentials)

## SAPODataConnectorProfileProperties
### Properties
* **ApplicationHostUrl**: string
* **ApplicationServicePath**: string
* **ClientNumber**: string
* **DisableSSO**: bool: If you set this parameter to true, Amazon AppFlow bypasses the single sign-on (SSO) settings in your SAP account when it accesses your SAP OData instance.
* **LogonLanguage**: string
* **OAuthProperties**: [OAuthProperties](#oauthproperties)
* **PortNumber**: int
* **PrivateLinkServiceName**: string

## SAPODataDestinationProperties
### Properties
* **ErrorHandlingConfig**: [ErrorHandlingConfig](#errorhandlingconfig)
* **IdFieldNames**: string[]: List of fields used as ID when performing a write operation.
* **ObjectPath**: string (Required)
* **SuccessResponseHandlingConfig**: [SuccessResponseHandlingConfig](#successresponsehandlingconfig)
* **WriteOperationType**: string

## SAPODataPaginationConfig
### Properties
* **maxPageSize**: int (Required)

## SAPODataParallelismConfig
### Properties
* **maxParallelism**: int (Required)

## SAPODataSourceProperties
### Properties
* **ObjectPath**: string (Required)
* **paginationConfig**: [SAPODataPaginationConfig](#sapodatapaginationconfig)
* **parallelismConfig**: [SAPODataParallelismConfig](#sapodataparallelismconfig)

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

## ServiceNowConnectorProfileCredentials
### Properties
* **OAuth2Credentials**: [OAuth2Credentials](#oauth2credentials): The OAuth 2.0 credentials required to authenticate the user.
* **Password**: string: The password that corresponds to the username.
* **Username**: string: The name of the user.

## ServiceNowConnectorProfileProperties
### Properties
* **InstanceUrl**: string (Required): The location of the ServiceNow resource

## ServiceNowSourceProperties
### Properties
* **Object**: string (Required)

## SingularConnectorProfileCredentials
### Properties
* **ApiKey**: string (Required): A unique alphanumeric identi?er used to authenticate a user, developer, or calling program to your API.

## SingularSourceProperties
### Properties
* **Object**: string (Required)

## SlackConnectorProfileCredentials
### Properties
* **AccessToken**: string: The credentials used to access protected resources.
* **ClientId**: string (Required): The identi?er for the desired client.
* **ClientSecret**: string (Required): The client secret used by the oauth client to authenticate to the authorization server.
* **ConnectorOAuthRequest**: [ConnectorOAuthRequest](#connectoroauthrequest): The oauth needed to request security tokens from the connector endpoint.

## SlackConnectorProfileProperties
### Properties
* **InstanceUrl**: string (Required): The location of the Slack resource

## SlackSourceProperties
### Properties
* **Object**: string (Required)

## SnowflakeConnectorProfileCredentials
### Properties
* **Password**: string (Required): The password that corresponds to the username.
* **Username**: string (Required): The name of the user.

## SnowflakeConnectorProfileProperties
### Properties
* **AccountName**: string: The name of the account.
* **BucketName**: string (Required): The name of the Amazon S3 bucket associated with Snow?ake.
* **BucketPrefix**: string: The bucket prefix that refers to the Amazon S3 bucket associated with Snow?ake.
* **PrivateLinkServiceName**: string: The Snow?ake Private Link service name to be used for private data transfers.
* **Region**: string: The region of the Snow?ake account.
* **Stage**: string (Required): The name of the Amazon S3 stage that was created while setting up an Amazon S3 stage in the
Snow?ake account. This is written in the following format: < Database>< Schema><Stage Name>.
* **Warehouse**: string (Required): The name of the Snow?ake warehouse.

## SnowflakeDestinationProperties
### Properties
* **BucketPrefix**: string
* **ErrorHandlingConfig**: [ErrorHandlingConfig](#errorhandlingconfig)
* **IntermediateBucketName**: string (Required)
* **Object**: string (Required)

## SourceConnectorProperties
### Properties
* **Amplitude**: [AmplitudeSourceProperties](#amplitudesourceproperties)
* **CustomConnector**: [CustomConnectorSourceProperties](#customconnectorsourceproperties)
* **Datadog**: [DatadogSourceProperties](#datadogsourceproperties)
* **Dynatrace**: [DynatraceSourceProperties](#dynatracesourceproperties)
* **GoogleAnalytics**: [GoogleAnalyticsSourceProperties](#googleanalyticssourceproperties)
* **InforNexus**: [InforNexusSourceProperties](#infornexussourceproperties)
* **Marketo**: [MarketoSourceProperties](#marketosourceproperties)
* **Pardot**: [PardotSourceProperties](#pardotsourceproperties)
* **S3**: [S3SourceProperties](#s3sourceproperties)
* **Salesforce**: [SalesforceSourceProperties](#salesforcesourceproperties)
* **SAPOData**: [SAPODataSourceProperties](#sapodatasourceproperties)
* **ServiceNow**: [ServiceNowSourceProperties](#servicenowsourceproperties)
* **Singular**: [SingularSourceProperties](#singularsourceproperties)
* **Slack**: [SlackSourceProperties](#slacksourceproperties)
* **Trendmicro**: [TrendmicroSourceProperties](#trendmicrosourceproperties)
* **Veeva**: [VeevaSourceProperties](#veevasourceproperties)
* **Zendesk**: [ZendeskSourceProperties](#zendesksourceproperties)

## SourceFlowConfig
### Properties
* **ApiVersion**: string: The API version that the destination connector uses.
* **ConnectorProfileName**: string: Name of source connector profile
* **ConnectorType**: string (Required): Type of source connector
* **IncrementalPullConfig**: [IncrementalPullConfig](#incrementalpullconfig): Configuration for scheduled incremental data pull
* **SourceConnectorProperties**: [SourceConnectorProperties](#sourceconnectorproperties) (Required): Source connector details required to query a connector

## SuccessResponseHandlingConfig
### Properties
* **BucketName**: string
* **BucketPrefix**: string

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
* **TaskType**: string (Required): Type of task

## TaskPropertiesObject
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TokenUrlCustomProperties
### Properties

## TrendmicroConnectorProfileCredentials
### Properties
* **ApiSecretKey**: string (Required): The Secret Access Key portion of the credentials.

## TrendmicroSourceProperties
### Properties
* **Object**: string (Required)

## TriggerConfig
### Properties
* **TriggerProperties**: [ScheduledTriggerProperties](#scheduledtriggerproperties): Details required based on the type of trigger
* **TriggerType**: string (Required): Trigger type of the flow

## UpsolverDestinationProperties
### Properties
* **BucketName**: string (Required)
* **BucketPrefix**: string
* **S3OutputFormatConfig**: [UpsolverS3OutputFormatConfig](#upsolvers3outputformatconfig) (Required)

## UpsolverS3OutputFormatConfig
### Properties
* **AggregationConfig**: [AggregationConfig](#aggregationconfig)
* **FileType**: string
* **PrefixConfig**: [PrefixConfig](#prefixconfig) (Required)

## VeevaConnectorProfileCredentials
### Properties
* **Password**: string (Required): The password that corresponds to the username.
* **Username**: string (Required): The name of the user.

## VeevaConnectorProfileProperties
### Properties
* **InstanceUrl**: string (Required): The location of the Veeva resource

## VeevaSourceProperties
### Properties
* **DocumentType**: string
* **IncludeAllVersions**: bool
* **IncludeRenditions**: bool
* **IncludeSourceFiles**: bool
* **Object**: string (Required)

## ZendeskConnectorProfileCredentials
### Properties
* **AccessToken**: string: The credentials used to access protected resources.
* **ClientId**: string (Required): The identi?er for the desired client.
* **ClientSecret**: string (Required): The client secret used by the oauth client to authenticate to the authorization server.
* **ConnectorOAuthRequest**: [ConnectorOAuthRequest](#connectoroauthrequest): The oauth needed to request security tokens from the connector endpoint.

## ZendeskConnectorProfileProperties
### Properties
* **InstanceUrl**: string (Required): The location of the Zendesk resource

## ZendeskDestinationProperties
### Properties
* **ErrorHandlingConfig**: [ErrorHandlingConfig](#errorhandlingconfig)
* **IdFieldNames**: string[]: List of fields used as ID when performing a write operation.
* **Object**: string (Required)
* **WriteOperationType**: string

## ZendeskSourceProperties
### Properties
* **Object**: string (Required)

