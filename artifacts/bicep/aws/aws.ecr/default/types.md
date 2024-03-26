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
* **CredentialArn**: string (WriteOnly): The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that identifies the credentials to authenticate to the upstream registry.
* **EcrRepositoryPrefix**: string (Identifier): The ECRRepositoryPrefix is a custom alias for upstream registry url.
* **UpstreamRegistry**: string (WriteOnly): The name of the upstream registry.
* **UpstreamRegistryUrl**: string: The upstreamRegistryUrl is the endpoint of upstream registry url of the public repository to be cached

## AWS.ECR/RegistryPolicyProperties
### Properties
* **PolicyText**: [RegistryPolicy_PolicyText](#registrypolicypolicytext) (Required): The JSON policy text for your registry.
* **RegistryId**: string (ReadOnly, Identifier)

## AWS.ECR/ReplicationConfigurationProperties
### Properties
* **RegistryId**: string (ReadOnly, Identifier): The RegistryId associated with the aws account.
* **ReplicationConfiguration**: [ReplicationConfiguration](#replicationconfiguration) (Required)

## AWS.ECR/RepositoryProperties
### Properties
* **Arn**: string (ReadOnly)
* **EmptyOnDelete**: bool (WriteOnly): If true, deleting the repository force deletes the contents of the repository. If false, the repository must be empty before attempting to delete it.
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration): The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.
* **ImageScanningConfiguration**: [ImageScanningConfiguration](#imagescanningconfiguration): The image scanning configuration for the repository. This determines whether images are scanned for known vulnerabilities after being pushed to the repository.
* **ImageTagMutability**: string: The tag mutability setting for the repository. If this parameter is omitted, the default setting of ``MUTABLE`` will be used which will allow image tags to be overwritten. If ``IMMUTABLE`` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.
* **LifecyclePolicy**: [LifecyclePolicy](#lifecyclepolicy): Creates or updates a lifecycle policy. For information about lifecycle policy syntax, see [Lifecycle policy template](https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html).
* **RepositoryName**: string (Identifier): The name to use for the repository. The repository name may be specified on its own (such as ``nginx-web-app``) or it can be prepended with a namespace to group the repository into a category (such as ``project-a/nginx-web-app``). If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the repository name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
 The repository name must start with a letter and can only contain lowercase letters, numbers, hyphens, underscores, and forward slashes.
  If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
* **RepositoryPolicyText**: [Repository_RepositoryPolicyText](#repositoryrepositorypolicytext) | string: The JSON repository policy text to apply to the repository. For more information, see [Amazon ECR repository policies](https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html) in the *Amazon Elastic Container Registry User Guide*.
* **RepositoryUri**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## EncryptionConfiguration
### Properties
* **EncryptionType**: string (Required): The encryption type to use.
 If you use the ``KMS`` encryption type, the contents of the repository will be encrypted using server-side encryption with KMSlong key stored in KMS. When you use KMS to encrypt your data, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you already created. For more information, see [Protecting data using server-side encryption with an key stored in (SSE-KMS)](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html) in the *Amazon Simple Storage Service Console Developer Guide*.
 If you use the ``AES256`` encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES-256 encryption algorithm. For more information, see [Protecting data using server-side encryption with Amazon S3-managed encryption keys (SSE-S3)](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html) in the *Ama
* **KmsKey**: string: If you use the ``KMS`` encryption type, specify the KMS key to use for encryption. The alias, key ID, or full ARN of the KMS key can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed KMS key for Amazon ECR will be used.

## ImageScanningConfiguration
### Properties
* **ScanOnPush**: bool: The setting that determines whether images are scanned after being pushed to a repository. If set to ``true``, images will be scanned after being pushed. If this parameter is not specified, it will default to ``false`` and images will not be scanned unless a scan is manually started.

## LifecyclePolicy
### Properties
* **LifecyclePolicyText**: string: The JSON repository policy text to apply to the repository.
* **RegistryId**: string: The AWS account ID associated with the registry that contains the repository. If you do? not specify a registry, the default registry is assumed.

## RegistryPolicy_PolicyText
### Properties

## ReplicationConfiguration
### Properties
* **Rules**: [ReplicationRule](#replicationrule)[] (Required): An array of objects representing the replication rules for a replication configuration. A replication configuration may contain a maximum of 10 rules.

## ReplicationDestination
### Properties
* **Region**: string (Required)
* **RegistryId**: string (Required, Identifier)

## ReplicationRule
### Properties
* **Destinations**: [ReplicationDestination](#replicationdestination)[] (Required): An array of objects representing the details of a replication destination.
* **RepositoryFilters**: [RepositoryFilter](#repositoryfilter)[]: An array of objects representing the details of a repository filter.

## RepositoryFilter
### Properties
* **Filter**: string (Required)
* **FilterType**: string (Required)

## Tag
### Properties
* **Key**: string (Required): One part of a key-value pair that make up a tag. A ``key`` is a general label that acts like a category for more specific tag values.
* **Value**: string (Required): A ``value`` acts as a descriptor within a tag category (key).

