# AWS.ECR @ default

## Resource AWS.ECR/PullThroughCacheRule@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECR/PullThroughCacheRuleProperties](#awsecrpullthroughcacheruleproperties) (Identifier): properties of the resource

## Resource AWS.ECR/RegistryPolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECR/RegistryPolicyProperties](#awsecrregistrypolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.ECR/RegistryScanningConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECR/RegistryScanningConfigurationProperties](#awsecrregistryscanningconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.ECR/ReplicationConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECR/ReplicationConfigurationProperties](#awsecrreplicationconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.ECR/Repository@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECR/RepositoryProperties](#awsecrrepositoryproperties) (Identifier): properties of the resource

## Resource AWS.ECR/RepositoryCreationTemplate@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECR/RepositoryCreationTemplateProperties](#awsecrrepositorycreationtemplateproperties) (Required, Identifier): properties of the resource

## Resource AWS.ECR/SigningConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECR/SigningConfigurationProperties](#awsecrsigningconfigurationproperties) (Required, Identifier): properties of the resource

## AWS.ECR/PullThroughCacheRuleProperties
### Properties
* **CredentialArn**: string (WriteOnly): The ARN of the Secrets Manager secret associated with the pull through cache rule.
* **CustomRoleArn**: string (WriteOnly): The ARN of the IAM role associated with the pull through cache rule.
* **EcrRepositoryPrefix**: string (Identifier): The Amazon ECR repository prefix associated with the pull through cache rule.
* **UpstreamRegistry**: string (WriteOnly): The name of the upstream source registry associated with the pull through cache rule.
* **UpstreamRegistryUrl**: string: The upstream registry URL associated with the pull through cache rule.
* **UpstreamRepositoryPrefix**: string: The upstream repository prefix associated with the pull through cache rule.

## AWS.ECR/RegistryPolicyProperties
### Properties
* **PolicyText**: [RegistryPolicy_PolicyText](#registrypolicypolicytext) (Required): The JSON policy text for your registry.
* **RegistryId**: string (ReadOnly, Identifier)

## AWS.ECR/RegistryScanningConfigurationProperties
### Properties
* **RegistryId**: string (ReadOnly, Identifier)
* **Rules**: [ScanningRule](#scanningrule)[] (Required): The scanning rules associated with the registry.
* **ScanType**: string (Required): The type of scanning configured for the registry.

## AWS.ECR/ReplicationConfigurationProperties
### Properties
* **RegistryId**: string (ReadOnly, Identifier)
* **ReplicationConfiguration**: [ReplicationConfiguration](#replicationconfiguration) (Required): The replication configuration for a registry.

## AWS.ECR/RepositoryCreationTemplateProperties
### Properties
* **AppliedFor**: string[] (Required): A list of enumerable Strings representing the repository creation scenarios that this template will apply towards. The supported scenarios are PULL_THROUGH_CACHE, REPLICATION, and CREATE_ON_PUSH
* **CreatedAt**: string (ReadOnly)
* **CustomRoleArn**: string: The ARN of the role to be assumed by Amazon ECR. Amazon ECR will assume your supplied role when the customRoleArn is specified. When this field isn't specified, Amazon ECR will use the service-linked role for the repository creation template.
* **Description**: string: The description associated with the repository creation template.
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration): The encryption configuration associated with the repository creation template.
* **ImageTagMutability**: string: The tag mutability setting for the repository. If this parameter is omitted, the default setting of ``MUTABLE`` will be used which will allow image tags to be overwritten. If ``IMMUTABLE`` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.
* **ImageTagMutabilityExclusionFilters**: [ImageTagMutabilityExclusionFilter](#imagetagmutabilityexclusionfilter)[]: A list of filters that specify which image tags are excluded from the repository creation template's image tag mutability setting.
* **LifecyclePolicy**: string: The lifecycle policy to use for repositories created using the template.
* **Prefix**: string (Required, Identifier): The repository namespace prefix associated with the repository creation template.
* **RepositoryPolicy**: string: The repository policy to apply to repositories created using the template. A repository policy is a permissions policy associated with a repository to control access permissions.
* **ResourceTags**: [Tag](#tag)[]: The metadata to apply to the repository to help you categorize and organize. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
* **UpdatedAt**: string (ReadOnly)

## AWS.ECR/RepositoryProperties
### Properties
* **Arn**: string (ReadOnly)
* **EmptyOnDelete**: bool (WriteOnly): If true, deleting the repository force deletes the contents of the repository. If false, the repository must be empty before attempting to delete it.
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration): The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.
* **ImageScanningConfiguration**: [ImageScanningConfiguration](#imagescanningconfiguration): The ``imageScanningConfiguration`` parameter is being deprecated, in favor of specifying the image scanning configuration at the registry level. For more information, see ``PutRegistryScanningConfiguration``.
  The image scanning configuration for the repository. This determines whether images are scanned for known vulnerabilities after being pushed to the repository.
* **ImageTagMutability**: string: The tag mutability setting for the repository. If this parameter is omitted, the default setting of ``MUTABLE`` will be used which will allow image tags to be overwritten. If ``IMMUTABLE`` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.
* **ImageTagMutabilityExclusionFilters**: [ImageTagMutabilityExclusionFilter](#imagetagmutabilityexclusionfilter)[]: A list of filters that specify which image tags are excluded from the repository's image tag mutability setting.
* **LifecyclePolicy**: [LifecyclePolicy](#lifecyclepolicy): Creates or updates a lifecycle policy. For information about lifecycle policy syntax, see [Lifecycle policy template](https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html).
* **RepositoryName**: string (Identifier): The name to use for the repository. The repository name may be specified on its own (such as ``nginx-web-app``) or it can be prepended with a namespace to group the repository into a category (such as ``project-a/nginx-web-app``). If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the repository name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
 The repository name must start with a letter and can only contain lowercase letters, numbers, hyphens, underscores, and forward slashes.
  If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
* **RepositoryPolicyText**: [Repository_RepositoryPolicyText](#repositoryrepositorypolicytext) | string: The JSON repository policy text to apply to the repository. For more information, see [Amazon ECR repository policies](https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html) in the *Amazon Elastic Container Registry User Guide*.
* **RepositoryUri**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.ECR/SigningConfigurationProperties
### Properties
* **RegistryId**: string (ReadOnly, Identifier): 12-digit AWS account ID of the ECR registry.
* **Rules**: [Rule](#rule)[] (Required): Array of signing rules that define which repositories should be signed and with which signing profiles.

## EncryptionConfiguration
### Properties
* **EncryptionType**: string (Required): The encryption type to use.
 If you use the ``KMS`` encryption type, the contents of the repository will be encrypted using server-side encryption with KMSlong key stored in KMS. When you use KMS to encrypt your data, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you already created.
 If you use the ``KMS_DSSE`` encryption type, the contents of the repository will be encrypted with two layers of encryption using server-side encryption with the KMS Management Service key stored in KMS. Similar to the ``KMS`` encryption type, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you've already created. 
 If you use the ``AES256`` encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES256 encryption algorithm.
 For more information, see [Amazon ECR encryption at rest](https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the *Amazon Elastic Container Registry User Guide*.
* **KmsKey**: string: If you use the ``KMS`` encryption type, specify the KMS key to use for encryption. The alias, key ID, or full ARN of the KMS key can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed KMS key for Amazon ECR will be used.

## EncryptionConfiguration
### Properties
* **EncryptionType**: string (Required): The encryption type to use.
 If you use the ``KMS`` encryption type, the contents of the repository will be encrypted using server-side encryption with KMSlong key stored in KMS. When you use KMS to encrypt your data, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you already created.
 If you use the ``KMS_DSSE`` encryption type, the contents of the repository will be encrypted with two layers of encryption using server-side encryption with the KMS Management Service key stored in KMS. Similar to the ``KMS`` encryption type, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you've already created. 
 If you use the ``AES256`` encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES256 encryption algorithm.
 For more information, see [Amazon ECR encryption at rest](https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the *Amazon Elastic Container Registry User Guide*.
* **KmsKey**: string: If you use the ``KMS`` encryption type, specify the KMS key to use for encryption. The alias, key ID, or full ARN of the KMS key can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed KMS key for Amazon ECR will be used.

## ImageScanningConfiguration
### Properties
* **ScanOnPush**: bool: The setting that determines whether images are scanned after being pushed to a repository. If set to ``true``, images will be scanned after being pushed. If this parameter is not specified, it will default to ``false`` and images will not be scanned unless a scan is manually started.

## ImageTagMutabilityExclusionFilter
### Properties
* **ImageTagMutabilityExclusionFilterType**: string (Required)
* **ImageTagMutabilityExclusionFilterValue**: string (Required)

## ImageTagMutabilityExclusionFilter
### Properties
* **ImageTagMutabilityExclusionFilterType**: string (Required)
* **ImageTagMutabilityExclusionFilterValue**: string (Required)

## LifecyclePolicy
### Properties
* **LifecyclePolicyText**: string: The JSON repository policy text to apply to the repository.
* **RegistryId**: string: The AWS account ID associated with the registry that contains the repository. If you do? not specify a registry, the default registry is assumed.

## RegistryPolicy_PolicyText
### Properties

## ReplicationConfiguration
### Properties
* **Rules**: [ReplicationRule](#replicationrule)[] (Required): An array of objects representing the replication destinations and repository filters for a replication configuration.

## ReplicationDestination
### Properties
* **Region**: string (Required): The Region to replicate to.
* **RegistryId**: string (Required, Identifier): The AWS account ID of the Amazon ECR private registry to replicate to. When configuring cross-Region replication within your own registry, specify your own account ID.

## ReplicationRule
### Properties
* **Destinations**: [ReplicationDestination](#replicationdestination)[] (Required): An array of objects representing the destination for a replication rule.
* **RepositoryFilters**: [RepositoryFilter](#repositoryfilter)[]: An array of objects representing the filters for a replication rule. Specifying a repository filter for a replication rule provides a method for controlling which repositories in a private registry are replicated.

## RepositoryFilter
### Properties
* **Filter**: string (Required): The filter to use when scanning.
* **FilterType**: string (Required): The type associated with the filter.

## RepositoryFilter
### Properties
* **Filter**: string (Required): The repository filter details. When the ``PREFIX_MATCH`` filter type is specified, this value is required and should be the repository name prefix to configure replication for.
* **FilterType**: string (Required): The repository filter type. The only supported value is ``PREFIX_MATCH``, which is a repository name prefix specified with the ``filter`` parameter.

## RepositoryFilter
### Properties
* **Filter**: string (Required)
* **FilterType**: string (Required)

## Rule
### Properties
* **RepositoryFilters**: [RepositoryFilter](#repositoryfilter)[]: Optional array of repository filters. If omitted, the rule matches all repositories. If provided, must contain at least one filter. Empty arrays are not allowed.
* **SigningProfileArn**: string (Required): AWS Signer signing profile ARN to use for matched repositories.

## ScanningRule
### Properties
* **RepositoryFilters**: [RepositoryFilter](#repositoryfilter)[] (Required): The details of a scanning repository filter. For more information on how to use filters, see [Using filters](https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html#image-scanning-filters) in the *Amazon Elastic Container Registry User Guide*.
* **ScanFrequency**: string (Required): The frequency that scans are performed at for a private registry. When the ``ENHANCED`` scan type is specified, the supported scan frequencies are ``CONTINUOUS_SCAN`` and ``SCAN_ON_PUSH``. When the ``BASIC`` scan type is specified, the ``SCAN_ON_PUSH`` scan frequency is supported. If scan on push is not specified, then the ``MANUAL`` scan frequency is set by default.

## Tag
### Properties
* **Key**: string (Required): One part of a key-value pair that make up a tag. A ``key`` is a general label that acts like a category for more specific tag values.
* **Value**: string (Required): A ``value`` acts as a descriptor within a tag category (key).

## Tag
### Properties
* **Key**: string (Required): One part of a key-value pair that make up a tag. A ``key`` is a general label that acts like a category for more specific tag values.
* **Value**: string (Required): A ``value`` acts as a descriptor within a tag category (key).

