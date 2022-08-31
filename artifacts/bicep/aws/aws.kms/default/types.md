# AWS.KMS @ default

## Resource AWS.KMS/Alias@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.KMS/AliasProperties](#awskmsaliasproperties): properties of the resource

## Resource AWS.KMS/Key@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.KMS/KeyProperties](#awskmskeyproperties): properties of the resource

## Resource AWS.KMS/ReplicaKey@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.KMS/ReplicaKeyProperties](#awskmsreplicakeyproperties): properties of the resource

## AWS.KMS/AliasProperties
### Properties
* **AliasName**: string: Specifies the alias name. This value must begin with alias/ followed by a name, such as alias/ExampleAlias. The alias name cannot begin with alias/aws/. The alias/aws/ prefix is reserved for AWS managed keys.
* **TargetKeyId**: string: Identifies the AWS KMS key to which the alias refers. Specify the key ID or the Amazon Resource Name (ARN) of the AWS KMS key. You cannot specify another alias. For help finding the key ID and ARN, see Finding the Key ID and ARN in the AWS Key Management Service Developer Guide.

## AWS.KMS/KeyProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string: A description of the AWS KMS key. Use a description that helps you to distinguish this AWS KMS key from others in the account, such as its intended use.
* **Enabled**: bool: Specifies whether the AWS KMS key is enabled. Disabled AWS KMS keys cannot be used in cryptographic operations.
* **EnableKeyRotation**: bool: Enables automatic rotation of the key material for the specified AWS KMS key. By default, automation key rotation is not enabled.
* **KeyId**: string (ReadOnly)
* **KeyPolicy**: [Key_KeyPolicy](#keykeypolicy) | string: The key policy that authorizes use of the AWS KMS key. The key policy must observe the following rules.
* **KeySpec**: string: Specifies the type of AWS KMS key to create. The default value is SYMMETRIC_DEFAULT. This property is required only for asymmetric AWS KMS keys. You can't change the KeySpec value after the AWS KMS key is created.
* **KeyUsage**: string: Determines the cryptographic operations for which you can use the AWS KMS key. The default value is ENCRYPT_DECRYPT. This property is required only for asymmetric AWS KMS keys. You can't change the KeyUsage value after the AWS KMS key is created.
* **MultiRegion**: bool: Specifies whether the AWS KMS key should be Multi-Region. You can't change the MultiRegion value after the AWS KMS key is created.
* **PendingWindowInDays**: int (WriteOnly): Specifies the number of days in the waiting period before AWS KMS deletes an AWS KMS key that has been removed from a CloudFormation stack. Enter a value between 7 and 30 days. The default value is 30 days.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.KMS/ReplicaKeyProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string: A description of the AWS KMS key. Use a description that helps you to distinguish this AWS KMS key from others in the account, such as its intended use.
* **Enabled**: bool: Specifies whether the AWS KMS key is enabled. Disabled AWS KMS keys cannot be used in cryptographic operations.
* **KeyId**: string (ReadOnly)
* **KeyPolicy**: [ReplicaKey_KeyPolicy](#replicakeykeypolicy) | string: The key policy that authorizes use of the AWS KMS key. The key policy must observe the following rules.
* **PendingWindowInDays**: int (WriteOnly): Specifies the number of days in the waiting period before AWS KMS deletes an AWS KMS key that has been removed from a CloudFormation stack. Enter a value between 7 and 30 days. The default value is 30 days.
* **PrimaryKeyArn**: string: Identifies the primary AWS KMS key to create a replica of. Specify the Amazon Resource Name (ARN) of the AWS KMS key. You cannot specify an alias or key ID. For help finding the ARN, see Finding the Key ID and ARN in the AWS Key Management Service Developer Guide.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

