# AWS.SecurityAgent @ default

## Resource AWS.SecurityAgent/AgentSpace@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityAgent/AgentSpaceProperties](#awssecurityagentagentspaceproperties) (Required, Identifier): properties of the resource

## Resource AWS.SecurityAgent/Application@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityAgent/ApplicationProperties](#awssecurityagentapplicationproperties) (Identifier): properties of the resource

## Resource AWS.SecurityAgent/Artifact@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityAgent/ArtifactProperties](#awssecurityagentartifactproperties) (Required, Identifier): properties of the resource

## Resource AWS.SecurityAgent/Integration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityAgent/IntegrationProperties](#awssecurityagentintegrationproperties) (Required, Identifier): properties of the resource

## Resource AWS.SecurityAgent/Pentest@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityAgent/PentestProperties](#awssecurityagentpentestproperties) (Required, Identifier): properties of the resource

## Resource AWS.SecurityAgent/PentestJob@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityAgent/PentestJobProperties](#awssecurityagentpentestjobproperties) (Required, Identifier): properties of the resource

## Resource AWS.SecurityAgent/PentestTask@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityAgent/PentestTaskProperties](#awssecurityagentpentesttaskproperties) (Identifier): properties of the resource

## Resource AWS.SecurityAgent/PrivateConnection@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityAgent/PrivateConnectionProperties](#awssecurityagentprivateconnectionproperties) (Required, Identifier): properties of the resource

## Resource AWS.SecurityAgent/SecurityRequirementPack@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityAgent/SecurityRequirementPackProperties](#awssecurityagentsecurityrequirementpackproperties) (Required, Identifier): properties of the resource

## Resource AWS.SecurityAgent/TargetDomain@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityAgent/TargetDomainProperties](#awssecurityagenttargetdomainproperties) (Required, Identifier): properties of the resource

## Actor
### Properties
* **Authentication**: [Authentication](#authentication): Authentication credentials for this actor
* **Description**: string: Description of the actor
* **EnableEmailMfa**: bool (WriteOnly): Whether email-based MFA is enabled for this actor
* **Identifier**: string: Identifier for the actor
* **MfaForwardingAddress**: string (ReadOnly): Server-generated email forwarding address for receiving MFA codes
* **Uris**: string[]: List of URIs this actor is authorized to access

## Actor
### Properties
* **Authentication**: [Authentication](#authentication)
* **Description**: string: A description of the actor.
* **Identifier**: string: The unique identifier for the actor.
* **Uris**: string[]: The list of URIs that the actor targets during testing.

## Assets
### Properties
* **Actors**: [Actor](#actor)[]: List of actors used during testing
* **ClientCertificates**: [ClientCertificate](#clientcertificate)[]: Client certificates that AWS Security Agent presents to target hosts that require mutual TLS (mTLS)
* **Documents**: [DocumentInfo](#documentinfo)[]: List of documents providing additional context for the pentest
* **Endpoints**: [Endpoint](#endpoint)[]: List of endpoints to test
* **IntegratedRepositories**: [IntegratedRepository](#integratedrepository)[]: List of repositories connected via provider integrations
* **SourceCode**: [SourceCodeRepository](#sourcecoderepository)[]: List of source code repositories to analyze
* **TrustedCaCertificates**: [TrustedCaCertificate](#trustedcacertificate)[]: Trust anchors for validating target endpoint TLS certificates, for endpoints served by a private or internal CA, an intermediate CA, or a self-signed certificate

## Authentication
### Properties
* **ProviderType**: string: Type of authentication provider
* **Value**: string: Reference value for the authentication provider, such as a secret ARN or Lambda ARN

## Authentication
### Properties
* **ProviderType**: string: The type of authentication provider.
* **Value**: string: The authentication value, such as a secret ARN, Lambda function ARN, or IAM role ARN, depending on the provider type.

## AWS.SecurityAgent/AgentSpaceProperties
### Properties
* **AgentSpaceId**: string (ReadOnly, Identifier): Unique identifier of the agent space
* **AwsResources**: [AWSResources](#awsresources)
* **CodeReviewSettings**: [CodeReviewSettings](#codereviewsettings)
* **CreatedAt**: string (ReadOnly): Timestamp when the agent space was created
* **Description**: string: Description of the agent space
* **IntegratedResources**: [IntegratedResource](#integratedresource)[]
* **KmsKeyId**: string: Identifier of the KMS key used to encrypt data. Can be a key ID, key ARN, alias name, or alias ARN. If not specified, an AWS managed key is used.
* **Name**: string (Required): Name of the agent space
* **Tags**: [Tag](#tag)[]: Tags for the agent space
* **TargetDomainIds**: string[]: List of target domain identifiers registered with the agent space
* **UpdatedAt**: string (ReadOnly): Timestamp when the agent space was last updated

## AWS.SecurityAgent/ApplicationProperties
### Properties
* **ApplicationId**: string (ReadOnly, Identifier)
* **ApplicationName**: string (ReadOnly)
* **DefaultKmsKeyId**: string: Identifier of a KMS key. Can be a key ID, key ARN, alias name, or alias ARN.
* **Domain**: string (ReadOnly)
* **IdCConfiguration**: [IdCConfiguration](#idcconfiguration)
* **RoleArn**: string
* **Tags**: [Tag](#tag)[]: Tags for the application

## AWS.SecurityAgent/ArtifactProperties
### Properties
* **AgentSpaceId**: string (Required): The unique identifier of the agent space to add the artifact to.
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the artifact.
* **ArtifactContent**: string (WriteOnly): The binary content of the artifact to upload, encoded as a Base64 string.
* **ArtifactId**: string (ReadOnly): The unique identifier assigned to the uploaded artifact.
* **ArtifactType**: string (Required): The file type of the artifact.
* **FileName**: string (Required): The file name of the artifact.
* **UpdatedAt**: string (ReadOnly): The date and time the artifact was last updated, in ISO 8601 format.

## AWS.SecurityAgent/IntegrationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the integration.
* **DisplayName**: string (Required): The display name for the integration.
* **InstallationId**: string (ReadOnly): The installation identifier from the integration provider.
* **IntegrationId**: string (ReadOnly): The unique identifier of the integration.
* **KmsKeyId**: string (WriteOnly): The identifier of the AWS KMS key to use for encrypting data associated with the integration. Can be a key ID, key ARN, alias name, or alias ARN.
* **PrivateConnectionName**: string: The name of an active private connection used to reach a self-hosted provider instance over private networking.
* **Provider**: string (Required): The integration provider.
* **ProviderInput**: [ProviderInput](#providerinput) (WriteOnly)
* **ProviderType**: string (ReadOnly): The type of the integration provider.
* **Tags**: [Tag](#tag)[]: The tags to associate with the integration.
* **TargetUrl**: string (ReadOnly): The HTTPS URL of the customer self-hosted instance, such as a GitHub Enterprise Server or self-managed GitLab instance. This value is absent for SaaS integrations.

## AWS.SecurityAgent/PentestJobProperties
### Properties
* **Actors**: [Actor](#actor)[] (ReadOnly): The list of actors used during the pentest job.
* **AgentSpaceId**: string (Required): The unique identifier of the agent space that contains the pentest job.
* **AllowedDomains**: [Endpoint](#endpoint)[] (ReadOnly): The list of domains allowed during the pentest job.
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the pentest job.
* **CleanUpStrategy**: string (ReadOnly): The strategy for cleaning up resources created during the pentest job.
* **CodeRemediationStrategy**: string (ReadOnly): The code remediation strategy for the pentest job.
* **CreatedAt**: string (ReadOnly): The date and time the pentest job was created, in UTC format.
* **DisableManagedSkills**: string[] (ReadOnly): The list of managed skills disabled for this pentest job.
* **Documents**: [DocumentInfo](#documentinfo)[] (ReadOnly): The list of documents providing context for the pentest job.
* **Endpoints**: [Endpoint](#endpoint)[] (ReadOnly): The list of endpoints being tested in the pentest job.
* **ExcludePaths**: [Endpoint](#endpoint)[] (ReadOnly): The list of paths excluded from the pentest job.
* **ExcludeRiskTypes**: string[] (ReadOnly): The list of risk types excluded from the pentest job.
* **IntegratedRepositories**: [IntegratedRepository](#integratedrepository)[] (ReadOnly): The list of integrated repositories associated with the pentest job.
* **LogConfig**: [CloudWatchLog](#cloudwatchlog) (ReadOnly)
* **NetworkTrafficConfig**: [NetworkTrafficConfig](#networktrafficconfig) (ReadOnly)
* **PentestId**: string (Required): The unique identifier of the pentest associated with the job.
* **PentestJobId**: string (ReadOnly): The unique identifier of the pentest job.
* **ServiceRole**: string (ReadOnly): The ARN of the IAM service role used for the pentest job.
* **SourceCode**: [SourceCodeRepository](#sourcecoderepository)[] (ReadOnly): The list of source code repositories analyzed during the pentest job.
* **Status**: string (ReadOnly): The current status of the pentest job.
* **Title**: string (ReadOnly): The title of the pentest job.
* **UpdatedAt**: string (ReadOnly): The date and time the pentest job was last updated, in UTC format.
* **VpcConfig**: [VpcConfig](#vpcconfig) (ReadOnly)

## AWS.SecurityAgent/PentestProperties
### Properties
* **AgentSpaceId**: string (Required, Identifier): Identifier of agent space where the pentest should be created
* **Assets**: [Assets](#assets) (Required): Collection of assets to be tested or used during the penetration test
* **CiCdConfiguration**: [CiCdConfiguration](#cicdconfiguration) (WriteOnly): Configuration for running pentests automatically from a CI/CD pipeline
* **CleanUpStrategy**: string: Strategy for cleaning up resources after pentest job completion
* **CodeRemediationStrategy**: string: Strategy for code remediation on findings
* **CreatedAt**: string (ReadOnly): Timestamp when the pentest was created
* **DisableManagedSkills**: string[]: A list of managed skills to disable for this pentest
* **ExcludeRiskTypes**: string[]: A list of risk types excluded from the pentest execution
* **LogConfig**: [CloudWatchLog](#cloudwatchlog): CloudWatch logs config
* **MaxTaskHours**: int: The maximum number of billable task hours allowed for jobs started from this pentest. If not set, jobs run to completion with no budget cap.
* **NetworkTrafficConfig**: [NetworkTrafficConfig](#networktrafficconfig): Configuration for network traffic filtering
* **PentestId**: string (ReadOnly, Identifier): Unique identifier of the pentest
* **ReportDestination**: [ReportDestination](#reportdestination) (WriteOnly): Destination for publishing the scan report to Confluence
* **ReportFilters**: [ReportFilters](#reportfilters) (WriteOnly): Filters applied when the scan report is published to Confluence
* **ServiceRole**: string (Required): Service role for accessing resources
* **TestScope**: [TestScope](#testscope): Scope of the target under test, determining which classes of risk are assessed
* **Title**: string: Title of the penetration test
* **UpdatedAt**: string (ReadOnly): Timestamp when the pentest was last updated
* **VpcConfig**: [VpcConfig](#vpcconfig): VPC configuration that the security testing environment accesses

## AWS.SecurityAgent/PentestTaskProperties
### Properties
* **AgentSpaceId**: string: The unique identifier of the agent space.
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the pentest task.
* **Categories**: [Category](#category)[] (ReadOnly): The list of categories assigned to the task.
* **CreatedAt**: string (ReadOnly): The date and time the task was created, in UTC format.
* **Description**: string (ReadOnly): A description of the task.
* **ExecutionStatus**: string (ReadOnly): The current execution status of the task.
* **PentestId**: string (ReadOnly): The unique identifier of the pentest associated with the task.
* **PentestJobId**: string (ReadOnly): The unique identifier of the pentest job that contains the task.
* **TargetEndpoint**: [Endpoint](#endpoint) (ReadOnly)
* **TaskHours**: int (ReadOnly): The number of active work hours consumed by the task during execution.
* **TaskId**: string (ReadOnly): The unique identifier of the task.
* **Title**: string (ReadOnly): The title of the task.
* **UpdatedAt**: string (ReadOnly): The date and time the task was last updated, in UTC format.

## AWS.SecurityAgent/PrivateConnectionProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the private connection.
* **Certificate**: string (WriteOnly): The PEM-encoded certificate chain for the private connection.
* **CertificateExpiryTime**: string (ReadOnly): The date and time the connection's certificate expires, in UTC format.
* **DnsResolution**: string (ReadOnly): The DNS resolution mode for the resource gateway.
* **HostAddress**: string (ReadOnly): The IP address or DNS name of the target resource.
* **Mode**: [Mode](#mode) (WriteOnly)
* **PrivateConnectionName**: string (Required): A unique name for the private connection within your account.
* **ResourceConfigurationId**: string (ReadOnly): The identifier or ARN of the VPC Lattice resource configuration.
* **ResourceGatewayId**: string (ReadOnly): The identifier or ARN of the VPC Lattice resource gateway.
* **Status**: string (ReadOnly): The current status of the private connection.
* **Tags**: [Tag](#tag)[]: The tags attached to the private connection.
* **Type**: string (ReadOnly): The type of the private connection, indicating whether it is service-managed or self-managed.
* **VpcId**: string (ReadOnly): The identifier of the VPC the resource gateway is created in.

## AWS.SecurityAgent/SecurityRequirementPackProperties
### Properties
* **Description**: string: Description of the pack
* **KmsKeyId**: string: KMS key for client-side encryption of pack contents
* **Name**: string (Required): Name of the security requirement pack
* **PackId**: string (ReadOnly, Identifier): Unique identifier of the security requirement pack
* **SecurityRequirements**: [SecurityRequirement](#securityrequirement)[]: Security requirements within this pack
* **Status**: string: Whether the pack is enabled or disabled
* **Tags**: [Tag](#tag)[]: Tags for the security requirement pack

## AWS.SecurityAgent/TargetDomainProperties
### Properties
* **CreatedAt**: string (ReadOnly): Timestamp when the target domain was registered
* **Tags**: [Tag](#tag)[]: Tags for the target domain
* **TargetDomainId**: string (ReadOnly, Identifier): Unique identifier of the target domain
* **TargetDomainName**: string (Required): Domain name of the target domain
* **VerificationDetails**: [VerificationDetails](#verificationdetails) (ReadOnly)
* **VerificationMethod**: string (Required): Verification method for the target domain
* **VerificationStatus**: string (ReadOnly): Current verification status of the registered target domain
* **VerificationStatusReason**: string (ReadOnly): Reason for the current target domain verification status
* **VerifiedAt**: string (ReadOnly): Timestamp when the target domain was last successfully verified

## AWSResources
### Properties
* **IamRoles**: string[]: IAM role ARNs
* **LambdaFunctionArns**: string[]: Lambda function ARNs used to retrieve tester credentials for pentests
* **LogGroups**: string[]: CloudWatch log group ARNs
* **S3Buckets**: string[]: S3 bucket ARNs
* **SecretArns**: string[]: SecretsManager secret ARNs used to store tester credentials for pentests
* **Vpcs**: [VpcConfig](#vpcconfig)[]: VPC configurations

## AzureDevOpsCapabilitiesResource
### Properties
* **LeaveComments**: bool: Enables Code Review in the repository
* **RemediateCode**: bool: Enables creation of pull requests with automated fixes

## AzureDevOpsRepositoryResource
### Properties
* **Name**: string (Required): Azure DevOps repository name
* **Organization**: string (ReadOnly): Read-only Azure DevOps organization that owns the repository, populated from service-side metadata
* **Project**: string (Required): Azure DevOps project that owns the repository

## BitbucketCapabilitiesResource
### Properties
* **LeaveComments**: bool: Enables Code Review in the repository
* **RemediateCode**: bool: Enables creation of pull requests with automated fixes

## BitbucketInput
### Properties
* **Code**: string (Required): The OAuth 2.0 authorization code returned from the consent redirect.
* **InstallationId**: string (Required): The Atlassian installation identifier, available from the Atlassian administration console.
* **State**: string (Required): The CSRF state token echoed back from the OAuth redirect.
* **Workspace**: string (Required): The Bitbucket workspace slug that identifies the workspace to integrate.

## BitbucketRepositoryResource
### Properties
* **Name**: string (Required): Bitbucket repository name
* **Workspace**: string (Required): Bitbucket workspace slug owning the repository

## CaCertificateSource
### Properties
* **ArtifactId**: string: Artifact ID of an uploaded certificate file
* **InlinePem**: string: PEM-encoded X.509 certificate supplied inline
* **S3Location**: string: Amazon S3 location URI of a customer-staged certificate

## Category
### Properties
* **IsPrimary**: bool: Indicates whether this is the primary category for the task.
* **Name**: string: The name of the category.

## CiCdConfiguration
### Properties
* **Enabled**: bool (Required): Whether CI/CD pentesting is enabled. When enabled, the pentest must have at least one entry in Assets.IntegratedRepositories

## ClientCertificate
### Properties
* **Name**: string (Required): Name of the client certificate, unique within the pentest
* **Origins**: string[] (Required): Target hosts the certificate applies to, as https://host[:port] origins
* **SecretArn**: string (Required): ARN of the Secrets Manager secret that holds the certificate and private key

## CloudWatchLog
### Properties
* **LogGroup**: string: CloudWatch log group
* **LogStream**: string: CloudWatch log stream

## CloudWatchLog
### Properties
* **LogGroup**: string: The name of the CloudWatch log group.
* **LogStream**: string: The name of the CloudWatch log stream.

## CodeReviewSettings
### Properties
* **ControlsScanning**: bool (Required): Whether Controls are utilized for code review analysis
* **GeneralPurposeScanning**: bool (Required): Whether general purpose analysis is performed for code review

## ConfluenceCapabilitiesResource
### Properties
* **CreateDocument**: bool: Enables creation of new Confluence documents in the same space
* **FetchDocument**: bool: Enables read access to the document content
* **UpdateDocument**: bool: Enables updates to the document

## ConfluenceDocumentResource
### Properties
* **Name**: string (Required): Customer-supplied logical name for the Confluence document
* **PageId**: string (Required): Confluence page identifier
* **SpaceKey**: string (Required): Confluence space key containing the document
* **SpaceTitle**: string (ReadOnly): Read-only human-readable title of the containing space, populated from service-side metadata
* **Title**: string (ReadOnly): Read-only human-readable title of the page, populated from service-side metadata

## ConfluenceInput
### Properties
* **Code**: string (Required): The OAuth 2.0 authorization code returned from the consent redirect.
* **InstallationId**: string (Required): The Atlassian installation identifier, available from the Atlassian administration console.
* **SiteUrl**: string (Required): The Confluence Cloud site URL, for example https://mysite.atlassian.net.
* **State**: string (Required): The CSRF state token echoed back from the OAuth redirect.

## CustomHeader
### Properties
* **Name**: string: Name of the header
* **Value**: string: Value of the header

## CustomHeader
### Properties
* **Name**: string: The name of the custom header.
* **Value**: string: The value of the custom header.

## DnsVerification
### Properties
* **DnsRecordName**: string: Record name to be added in DNS for target domain
* **DnsRecordType**: string: Type of record to be added in DNS for target domain
* **Token**: string: Token used to verify domain ownership

## DocumentInfo
### Properties
* **ArtifactId**: string: Artifact identifier
* **S3Location**: string: S3 document location

## DocumentInfo
### Properties
* **ArtifactId**: string: The unique identifier of the artifact associated with the document.
* **IntegratedDocument**: [IntegratedDocument](#integrateddocument)
* **S3Location**: string: The Amazon S3 location of the document.

## Endpoint
### Properties
* **Uri**: string: URI of the endpoint to test

## Endpoint
### Properties
* **Uri**: string: The URI of the endpoint.

## Endpoint
### Properties
* **Uri**: string: The URI of the endpoint.

## GitHubCapabilitiesResource
### Properties
* **LeaveComments**: bool (Required): Enables Code Review in the repository
* **RemediateCode**: bool (Required): Enables creation of pull requests with automated fixes

## GitHubInput
### Properties
* **Code**: string (Required): The OAuth authorization code received from GitHub.
* **InstallationId**: string: The installation identifier provided by GitHub Enterprise Server on the install callback. Required for GitHub Enterprise Server integrations and ignored for GitHub.com.
* **OrganizationName**: string: The name of the GitHub organization to integrate with.
* **State**: string (Required): The CSRF state token for validating the OAuth flow.
* **TargetUrl**: string: The HTTPS URL of a self-hosted GitHub Enterprise Server instance. Omit this value for GitHub.com.

## GitHubRepositoryResource
### Properties
* **Name**: string (Required): GitHub repository name
* **Owner**: string (Required): GitHub repository owner (user or organization)

## GitLabCapabilitiesResource
### Properties
* **LeaveComments**: bool: Enables Code Review in the repository
* **RemediateCode**: bool: Enables creation of merge requests with automated fixes

## GitLabInput
### Properties
* **AccessToken**: string (Required): The GitLab access token used to authenticate. This can be a personal access token or a group access token.
* **GroupId**: string: The identifier of the GitLab group. Required when TokenType is GROUP and ignored for personal tokens.
* **TargetUrl**: string: The HTTPS URL of a self-managed GitLab instance. Omit this value for GitLab SaaS (gitlab.com).
* **TokenType**: string (Required): The type of GitLab access token.

## GitLabRepositoryResource
### Properties
* **Name**: string (Required): GitLab project name
* **Namespace**: string (Required): GitLab project namespace (user, group, or subgroup path)

## HttpVerification
### Properties
* **RoutePath**: string: Route path where verification token should be placed
* **Token**: string: Token used to verify domain ownership

## IdCConfiguration
### Properties
* **IdCApplicationArn**: string (ReadOnly)
* **IdCInstanceArn**: string

## IntegratedDocument
### Properties
* **IntegrationId**: string (Required): The identifier of the integration that provides access to the document.
* **ResourceId**: string (Required): The provider-specific resource identifier for the document.

## IntegratedRepository
### Properties
* **Branch**: string: An optional override for the repository branch
* **IntegrationId**: string (Required): Unique identifier of the provider integration
* **ProviderResourceId**: string (Required): Identifier of the resource within the provider integration

## IntegratedRepository
### Properties
* **Branch**: string: An optional override for the repository branch.
* **IntegrationId**: string (Required): The unique identifier of the integration that provides access to the repository.
* **ProviderResourceId**: string (Required): The provider-specific resource identifier for the repository.

## IntegratedResource
### Properties
* **Integration**: string (Required): Unique identifier of the Provider Integration
* **ProviderResources**: [ProviderResource](#providerresource)[] (Required): List of selected Resources from the Integration

## Mode
### Properties
* **SelfManaged**: [SelfManaged](#selfmanaged)
* **ServiceManaged**: [ServiceManaged](#servicemanaged)

## NetworkTrafficConfig
### Properties
* **CustomHeaders**: [CustomHeader](#customheader)[]: Custom headers to include in outbound requests
* **Rules**: [NetworkTrafficRule](#networktrafficrule)[]: Ordered list of network traffic rules

## NetworkTrafficConfig
### Properties
* **CustomHeaders**: [CustomHeader](#customheader)[]: The list of custom HTTP headers to include in network traffic during testing.
* **Rules**: [NetworkTrafficRule](#networktrafficrule)[]: The list of network traffic rules that control which URLs are allowed or denied during testing.

## NetworkTrafficRule
### Properties
* **Effect**: string: Whether to allow or deny traffic matching this rule
* **NetworkTrafficRuleType**: string: Type of pattern matching for this rule
* **Pattern**: string: URL pattern this rule applies to

## NetworkTrafficRule
### Properties
* **Effect**: string: The effect of the rule.
* **NetworkTrafficRuleType**: string: The type of the network traffic rule. Currently, only URL is supported.
* **Pattern**: string: The URL pattern to match for the rule.

## ProviderInput
### Properties
* **Bitbucket**: [BitbucketInput](#bitbucketinput)
* **Confluence**: [ConfluenceInput](#confluenceinput)
* **Github**: [GitHubInput](#githubinput)
* **Gitlab**: [GitLabInput](#gitlabinput)

## ProviderResource
### Properties
* **AzureDevOpsCapabilities**: [AzureDevOpsCapabilitiesResource](#azuredevopscapabilitiesresource)
* **AzureDevOpsRepository**: [AzureDevOpsRepositoryResource](#azuredevopsrepositoryresource)
* **BitbucketCapabilities**: [BitbucketCapabilitiesResource](#bitbucketcapabilitiesresource)
* **BitbucketRepository**: [BitbucketRepositoryResource](#bitbucketrepositoryresource)
* **ConfluenceCapabilities**: [ConfluenceCapabilitiesResource](#confluencecapabilitiesresource)
* **ConfluenceDocument**: [ConfluenceDocumentResource](#confluencedocumentresource)
* **GitHubCapabilities**: [GitHubCapabilitiesResource](#githubcapabilitiesresource)
* **GitHubRepository**: [GitHubRepositoryResource](#githubrepositoryresource)
* **GitLabCapabilities**: [GitLabCapabilitiesResource](#gitlabcapabilitiesresource)
* **GitLabRepository**: [GitLabRepositoryResource](#gitlabrepositoryresource)

## ReportDestination
### Properties
* **ContainerId**: string (Required): Identifier of the container, such as a space, within the integration to publish the report to
* **DocumentId**: string: Identifier of an existing document to update with the report
* **IntegrationId**: string (Required): Unique identifier of the provider integration to publish the report to
* **ParentId**: string: Identifier of the parent under which the report document is created

## ReportFilters
### Properties
* **AnnotationNotes**: bool: Whether to include reviewer annotation notes under each finding
* **ComplianceReport**: bool: Whether to include the compliance-ready report additions
* **ConfidenceLevels**: string[]: Confidence levels to include in the report
* **FindingTypes**: string[]: Finding types to include in the report
* **RiskLevels**: string[]: Severity levels to include in the report
* **RiskTypes**: string[]: Risk types to include in the report
* **Statuses**: string[]: Finding statuses to include in the report
* **TaskStatuses**: string[]: Task execution statuses to include in the report's task table

## SecurityRequirement
### Properties
* **Description**: string (Required): Description of the security requirement
* **Domain**: string (Required): Security domain this requirement belongs to
* **Evaluation**: string (Required): How to evaluate compliance with this requirement
* **Name**: string (Required): Name of the security requirement
* **Remediation**: string: How to remediate non-compliance

## SelfManaged
### Properties
* **ResourceConfigurationId**: string (Required): The identifier or ARN of the resource configuration.

## ServiceManaged
### Properties
* **DnsResolution**: string: The DNS resolution mode for the resource gateway.
* **HostAddress**: string (Required): The IP address or DNS name of the target resource.
* **IpAddressType**: string: The IP address type of the service-managed resource gateway.
* **Ipv4AddressesPerEni**: int: The number of IPv4 addresses in each elastic network interface for the service-managed resource gateway.
* **PortRanges**: string[]: The TCP port ranges that a consumer can use to access the resource.
* **SecurityGroupIds**: string[]: The security groups to attach to the service-managed resource gateway.
* **SubnetIds**: string[] (Required): The subnets that the service-managed resource gateway spans.
* **VpcId**: string (Required): The VPC to create the service-managed resource gateway in.

## SourceCodeRepository
### Properties
* **S3Location**: string: S3 source code location

## SourceCodeRepository
### Properties
* **S3Location**: string: The Amazon S3 location of the source code repository archive.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag
* **Value**: string (Required): The value for the tag

## Tag
### Properties
* **Key**: string (Required): The key name of the tag
* **Value**: string (Required): The value for the tag

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag
* **Value**: string (Required): The value for the tag

## Tag
### Properties
* **Key**: string (Required): The key name of the tag
* **Value**: string (Required): The value for the tag

## TestScope
### Properties
* **Type**: string (Required): The kind of application the target is tested as

## TrustedCaCertificate
### Properties
* **Source**: [CaCertificateSource](#cacertificatesource) (Required): Where to read the certificate from

## VerificationDetails
### Properties
* **DnsTxt**: [DnsVerification](#dnsverification)
* **HttpRoute**: [HttpVerification](#httpverification)
* **Method**: string: Type of domain ownership verification method

## VpcConfig
### Properties
* **SecurityGroupArns**: string[]: List of security group ARNs in the customer VPC
* **SubnetArns**: string[]: List of subnet ARNs in the customer VPC
* **VpcArn**: string: ARN of the customer VPC

## VpcConfig
### Properties
* **SecurityGroupArns**: string[]: List of security groups in the VPC
* **SubnetArns**: string[]: List of subnets in the VPC
* **VpcArn**: string

## VpcConfig
### Properties
* **SecurityGroupArns**: string[]: The ARNs or IDs of the security groups for the VPC configuration.
* **SubnetArns**: string[]: The ARNs or IDs of the subnets for the VPC configuration.
* **VpcArn**: string: The ARN or ID of the VPC.

