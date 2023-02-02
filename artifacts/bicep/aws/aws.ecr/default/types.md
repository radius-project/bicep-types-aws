# AWS.ECR @ default

## Resource AWS.ECR/PullThroughCacheRule@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECR/PullThroughCacheRuleProperties](#awsecrpullthroughcacheruleproperties): properties of the resource

## Resource AWS.ECR/RegistryPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECR/RegistryPolicyProperties](#awsecrregistrypolicyproperties) (Required): properties of the resource

## Resource AWS.ECR/ReplicationConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECR/ReplicationConfigurationProperties](#awsecrreplicationconfigurationproperties) (Required): properties of the resource

## Resource AWS.ECR/Repository@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECR/RepositoryProperties](#awsecrrepositoryproperties): properties of the resource

## AWS.ECR/PullThroughCacheRuleProperties
### Properties
* **EcrRepositoryPrefix**: string (Identifier): The ECRRepositoryPrefix is a custom alias for upstream registry url.
* **UpstreamRegistryUrl**: string: The upstreamRegistryUrl is the endpoint of upstream registry url of the public repository to be cached

## AWS.ECR/RegistryPolicyProperties
### Properties
* **PolicyText**: [RegistryPolicy_PolicyText](#registrypolicypolicytext) (Required): The JSON policy text to apply to your registry. The policy text follows the same format as IAM policy text. For more information, see Registry permissions (https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html) in the Amazon Elastic Container Registry User Guide.
* **RegistryId**: string (ReadOnly, Identifier)

## RegistryPolicy_PolicyText
### Properties

## AWS.ECR/ReplicationConfigurationProperties
### Properties
* **RegistryId**: string (ReadOnly, Identifier): The RegistryId associated with the aws account.
* **ReplicationConfiguration**: [ReplicationConfiguration](#replicationconfiguration) (Required)

## ReplicationConfiguration
### Properties
* **Rules**: [ReplicationRule](#replicationrule)[] (Required): An array of objects representing the replication rules for a replication configuration. A replication configuration may contain a maximum of 10 rules.

## ReplicationRule
### Properties
* **Destinations**: [ReplicationDestination](#replicationdestination)[] (Required): An array of objects representing the details of a replication destination.
* **RepositoryFilters**: [RepositoryFilter](#repositoryfilter)[]: An array of objects representing the details of a repository filter.

## ReplicationDestination
### Properties
* **Region**: string (Required)
* **RegistryId**: string (Required, Identifier)

## RepositoryFilter
### Properties
* **Filter**: string (Required)
* **FilterType**: string (Required)

## AWS.ECR/RepositoryProperties
### Properties
* **Arn**: string (ReadOnly)
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **ImageScanningConfiguration**: [ImageScanningConfiguration](#imagescanningconfiguration)
* **ImageTagMutability**: string: The image tag mutability setting for the repository.
* **LifecyclePolicy**: [LifecyclePolicy](#lifecyclepolicy)
* **RepositoryName**: string (Identifier): The name to use for the repository. The repository name may be specified on its own (such as nginx-web-app) or it can be prepended with a namespace to group the repository into a category (such as project-a/nginx-web-app). If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the repository name. For more information, see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html.
* **RepositoryPolicyText**: [Repository_RepositoryPolicyText](#repositoryrepositorypolicytext) | string: The JSON repository policy text to apply to the repository. For more information, see https://docs.aws.amazon.com/AmazonECR/latest/userguide/RepositoryPolicyExamples.html in the Amazon Elastic Container Registry User Guide. 
* **RepositoryUri**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## EncryptionConfiguration
### Properties
* **EncryptionType**: string (Required)
* **KmsKey**: string

## ImageScanningConfiguration
### Properties
* **ScanOnPush**: bool

## LifecyclePolicy
### Properties
* **LifecyclePolicyText**: string
* **RegistryId**: string

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

