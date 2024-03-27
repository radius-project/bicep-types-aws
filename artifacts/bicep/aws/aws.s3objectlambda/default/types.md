# AWS.S3ObjectLambda @ default

## Resource AWS.S3ObjectLambda/AccessPoint@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3ObjectLambda/AccessPointProperties](#awss3objectlambdaaccesspointproperties) (Required, Identifier): properties of the resource

## Resource AWS.S3ObjectLambda/AccessPointPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3ObjectLambda/AccessPointPolicyProperties](#awss3objectlambdaaccesspointpolicyproperties) (Required, Identifier): properties of the resource

## AccessPoint_ContentTransformation
### Properties

## AccessPointPolicy_PolicyDocument
### Properties

## Alias
### Properties
* **Status**: string (ReadOnly): The status of the Object Lambda alias.
* **Value**: string (Required, ReadOnly): The value of the Object Lambda alias.

## AWS.S3ObjectLambda/AccessPointPolicyProperties
### Properties
* **ObjectLambdaAccessPoint**: string (Required, Identifier): The name of the Amazon S3 ObjectLambdaAccessPoint to which the policy applies.
* **PolicyDocument**: [AccessPointPolicy_PolicyDocument](#accesspointpolicypolicydocument) (Required): A policy document containing permissions to add to the specified ObjectLambdaAccessPoint. For more information, see Access Policy Language Overview (https://docs.aws.amazon.com/AmazonS3/latest/dev/access-policy-language-overview.html) in the Amazon Simple Storage Service Developer Guide. 

## AWS.S3ObjectLambda/AccessPointProperties
### Properties
* **Alias**: [Alias](#alias) (ReadOnly)
* **Arn**: string (ReadOnly)
* **CreationDate**: string (ReadOnly): The date and time when the Object lambda Access Point was created.
* **Name**: string (Identifier): The name you want to assign to this Object lambda Access Point.
* **ObjectLambdaConfiguration**: [ObjectLambdaConfiguration](#objectlambdaconfiguration) (Required): The Object lambda Access Point Configuration that configures transformations to be applied on the objects on specified S3 Actions
* **PolicyStatus**: [PolicyStatus](#policystatus) (ReadOnly)
* **PublicAccessBlockConfiguration**: [PublicAccessBlockConfiguration](#publicaccessblockconfiguration) (ReadOnly): The PublicAccessBlock configuration that you want to apply to this Access Point. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status 'The Meaning of Public' in the Amazon Simple Storage Service Developer Guide.

## ObjectLambdaConfiguration
### Properties
* **AllowedFeatures**: string[]
* **CloudWatchMetricsEnabled**: bool
* **SupportingAccessPoint**: string (Required)
* **TransformationConfigurations**: [TransformationConfiguration](#transformationconfiguration)[] (Required)

## PolicyStatus
### Properties
* **IsPublic**: bool (ReadOnly): Specifies whether the Object lambda Access Point Policy is Public or not. Object lambda Access Points are private by default.

## PublicAccessBlockConfiguration
### Properties
* **BlockPublicAcls**: bool: Specifies whether Amazon S3 should block public access control lists (ACLs) to this object lambda access point. Setting this element to TRUE causes the following behavior:
- PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.
 - PUT Object calls fail if the request includes a public ACL.
. - PUT Bucket calls fail if the request includes a public ACL.
Enabling this setting doesn't affect existing policies or ACLs.
* **BlockPublicPolicy**: bool: Specifies whether Amazon S3 should block public bucket policies for buckets in this account. Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. Enabling this setting doesn't affect existing bucket policies.
* **IgnorePublicAcls**: bool: Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain. Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
* **RestrictPublicBuckets**: bool: Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to TRUE restricts access to this bucket to only AWS services and authorized users within this account if the bucket has a public policy.
Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.

## TransformationConfiguration
### Properties
* **Actions**: string[] (Required)
* **ContentTransformation**: [AccessPoint_ContentTransformation](#accesspointcontenttransformation) (Required)

