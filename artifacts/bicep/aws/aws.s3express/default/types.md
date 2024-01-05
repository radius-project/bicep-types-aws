# AWS.S3Express @ default

## Resource AWS.S3Express/BucketPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3Express/BucketPolicyProperties](#awss3expressbucketpolicyproperties) (Required): properties of the resource

## AWS.S3Express/BucketPolicyProperties
### Properties
* **Bucket**: string (Required, Identifier): The name of the S3 directory bucket to which the policy applies.
* **PolicyDocument**: [BucketPolicy_PolicyDocument](#bucketpolicypolicydocument) | string (Required): A policy document containing permissions to add to the specified bucket. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM.

