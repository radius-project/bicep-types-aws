# AWS.KMS @ default

## Resource AWS.KMS/Alias@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.KMS/AliasProperties](#awskmsaliasproperties) (Required): properties of the resource

## Resource AWS.KMS/Key@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.KMS/KeyProperties](#awskmskeyproperties): properties of the resource

## Resource AWS.KMS/ReplicaKey@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.KMS/ReplicaKeyProperties](#awskmsreplicakeyproperties) (Required): properties of the resource

## AWS.KMS/AliasProperties
### Properties
* **AliasName**: string (Required, Identifier): Specifies the alias name. This value must begin with ``alias/`` followed by a name, such as ``alias/ExampleAlias``. 
  If you change the value of the ``AliasName`` property, the existing alias is deleted and a new alias is created for the specified KMS key. This change can disrupt applications that use the alias. It can also allow or deny access to a KMS key affected by attribute-based access control (ABAC).
  The alias must be string of 1-256 characters. It can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). The alias name cannot begin with ``alias/aws/``. The ``alias/aws/`` prefix is reserved for [](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk).
* **TargetKeyId**: string (Required): Associates the alias with the specified [](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk). The KMS key must be in the same AWS-account and Region.
 A valid key ID is required. If you supply a null or empty string value, this operation returns an error.
 For help finding the key ID and ARN, see [Finding the key ID and ARN](https://docs.aws.amazon.com/kms/latest/developerguide/viewing-keys.html#find-cmk-id-arn) in the *Developer Guide*.
 Specify the key ID or the key ARN of the KMS key.
 For example:
  +  Key ID: ``1234abcd-12ab-34cd-56ef-1234567890ab`` 
  +  Key ARN: ``arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`` 
  
 To get the key ID and key ARN for a KMS key, use [ListKeys](https://docs.aws.amazon.com/kms/latest/APIReference/API_ListKeys.html) or [DescribeKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html).

## AWS.KMS/KeyProperties
### Properties
* **Arn**: string (ReadOnly)
* **BypassPolicyLockoutSafetyCheck**: bool (WriteOnly): Skips ("bypasses") the key policy lockout safety check. The default value is false.
  Setting this value to true increases the risk that the KMS key becomes unmanageable. Do not set this value to true indiscriminately.
 For more information, see [Default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-default.html#prevent-unmanageable-key) in the *Developer Guide*.
  Use this parameter only when you intend to prevent the principal that is making the request from making a subsequent [PutKeyPolicy](https://docs.aws.amazon.com/kms/latest/APIReference/API_PutKeyPolicy.html) request on the KMS key.
* **Description**: string: A description of the KMS key. Use a description that helps you to distinguish this KMS key from others in the account, such as its intended use.
* **Enabled**: bool: Specifies whether the KMS key is enabled. Disabled KMS keys cannot be used in cryptographic operations.
 When ``Enabled`` is ``true``, the *key state* of the KMS key is ``Enabled``. When ``Enabled`` is ``false``, the key state of the KMS key is ``Disabled``. The default value is ``true``.
 The actual key state of the KMS key might be affected by actions taken outside of CloudFormation, such as running the [EnableKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_EnableKey.html), [DisableKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_DisableKey.html), or [ScheduleKeyDeletion](https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html) operations.
 For information about the key states of a KMS key, see [Key state: Effect on your KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Developer Guide*.
* **EnableKeyRotation**: bool: Enables automatic rotation of the key material for the specified KMS key. By default, automatic key rotation is not enabled.
 KMS supports automatic rotation only for symmetric encryption KMS keys (``KeySpec`` = ``SYMMETRIC_DEFAULT``). For asymmetric KMS keys, HMAC KMS keys, and KMS keys with Origin ``EXTERNAL``, omit the ``EnableKeyRotation`` property or set it to ``false``.
 To enable automatic key rotation of the key material for a multi-Region KMS key, set ``EnableKeyRotation`` to ``true`` on the primary key (created by using ``AWS::KMS::Key``). KMS copies the rotation status to all replica keys. For details, see [Rotating multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-manage.html#multi-region-rotate) in the *Developer Guide*.
 When you enable automatic rotation, KMS automatically creates new key material for the KMS key one year after the enable date and every year thereafter. KMS retains all key material until you delete the KMS key. Fo
* **KeyId**: string (ReadOnly, Identifier)
* **KeyPolicy**: [Key_KeyPolicy](#keykeypolicy) | string: The key policy to attach to the KMS key.
 If you provide a key policy, it must meet the following criteria:
  +  The key policy must allow the caller to make a subsequent [PutKeyPolicy](https://docs.aws.amazon.com/kms/latest/APIReference/API_PutKeyPolicy.html) request on the KMS key. This reduces the risk that the KMS key becomes unmanageable. For more information, see [Default key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam) in the *Developer Guide*. (To omit this condition, set ``BypassPolicyLockoutSafetyCheck`` to true.)
  +  Each statement in the key policy must contain one or more principals. The principals in the key policy must exist and be visible to KMS. When you create a new AWS principal (for example, an IAM user or role), you might need to enforce a delay before including the new principal in a key policy because the new principal might not be immediately visible to KMS. For more information, see [
* **KeySpec**: string: Specifies the type of KMS key to create. The default value, ``SYMMETRIC_DEFAULT``, creates a KMS key with a 256-bit symmetric key for encryption and decryption. In China Regions, ``SYMMETRIC_DEFAULT`` creates a 128-bit symmetric key that uses SM4 encryption. You can't change the ``KeySpec`` value after the KMS key is created. For help choosing a key spec for your KMS key, see [Choosing a KMS key type](https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-choose.html) in the *Developer Guide*.
 The ``KeySpec`` property determines the type of key material in the KMS key and the algorithms that the KMS key supports. To further restrict the algorithms that can be used with the KMS key, use a condition key in its key policy or IAM policy. For more information, see [condition keys](https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms) in the *Developer Guide*.
  If you change the value of the ``KeySpec`` property on an existing KMS key, the u
* **KeyUsage**: string: Determines the [cryptographic operations](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations) for which you can use the KMS key. The default value is ``ENCRYPT_DECRYPT``. This property is required for asymmetric KMS keys and HMAC KMS keys. You can't change the ``KeyUsage`` value after the KMS key is created.
  If you change the value of the ``KeyUsage`` property on an existing KMS key, the update request fails, regardless of the value of the [UpdateReplacePolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html). This prevents you from accidentally deleting a KMS key by changing an immutable property value.
  Select only one valid value.
  +  For symmetric encryption KMS keys, omit the property or specify ``ENCRYPT_DECRYPT``.
  +  For asymmetric KMS keys with RSA key material, specify ``ENCRYPT_DECRYPT`` or ``SIGN_VERIFY``.
  +  For asymmetric KMS keys with ECC key material, specify
* **MultiRegion**: bool: Creates a multi-Region primary key that you can replicate in other AWS-Regions. You can't change the ``MultiRegion`` value after the KMS key is created.
 For a list of AWS-Regions in which multi-Region keys are supported, see [Multi-Region keys in](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the **.
  If you change the value of the ``MultiRegion`` property on an existing KMS key, the update request fails, regardless of the value of the [UpdateReplacePolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html). This prevents you from accidentally deleting a KMS key by changing an immutable property value.
  For a multi-Region key, set to this property to ``true``. For a single-Region key, omit this property or set it to ``false``. The default value is ``false``.
 *Multi-Region keys* are an KMS feature that lets you create multiple interoperable KMS keys in different AWS-Regions. Bec
* **Origin**: string: The source of the key material for the KMS key. You cannot change the origin after you create the KMS key. The default is ``AWS_KMS``, which means that KMS creates the key material.
 To [create a KMS key with no key material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-create-cmk.html) (for imported key material), set this value to ``EXTERNAL``. For more information about importing key material into KMS, see [Importing Key Material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html) in the *Developer Guide*.
 You can ignore ``ENABLED`` when Origin is ``EXTERNAL``. When a KMS key with Origin ``EXTERNAL`` is created, the key state is ``PENDING_IMPORT`` and ``ENABLED`` is ``false``. After you import the key material, ``ENABLED`` updated to ``true``. The KMS key can then be used for Cryptographic Operations. 
  CFN doesn't support creating an ``Origin`` parameter of the ``AWS_CLOUDHSM`` or ``EXTERNAL_KEY_STORE`` values.
* **PendingWindowInDays**: int (WriteOnly): Specifies the number of days in the waiting period before KMS deletes a KMS key that has been removed from a CloudFormation stack. Enter a value between 7 and 30 days. The default value is 30 days.
 When you remove a KMS key from a CloudFormation stack, KMS schedules the KMS key for deletion and starts the mandatory waiting period. The ``PendingWindowInDays`` property determines the length of waiting period. During the waiting period, the key state of KMS key is ``Pending Deletion`` or ``Pending Replica Deletion``, which prevents the KMS key from being used in cryptographic operations. When the waiting period expires, KMS permanently deletes the KMS key.
 KMS will not delete a [multi-Region primary key](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) that has replica keys. If you remove a multi-Region primary key from a CloudFormation stack, its key state changes to ``PendingReplicaDeletion`` so it cannot be replicated or used in cryptographic ope
* **Tags**: [Tag](#tag)[]: Assigns one or more tags to the replica key.
  Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see [ABAC for](https://docs.aws.amazon.com/kms/latest/developerguide/abac.html) in the *Developer Guide*.
  For information about tags in KMS, see [Tagging keys](https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html) in the *Developer Guide*. For information about tags in CloudFormation, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).

## AWS.KMS/ReplicaKeyProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string: A description of the AWS KMS key. Use a description that helps you to distinguish this AWS KMS key from others in the account, such as its intended use.
* **Enabled**: bool: Specifies whether the AWS KMS key is enabled. Disabled AWS KMS keys cannot be used in cryptographic operations.
* **KeyId**: string (ReadOnly, Identifier)
* **KeyPolicy**: [ReplicaKey_KeyPolicy](#replicakeykeypolicy) | string (Required): The key policy that authorizes use of the AWS KMS key. The key policy must observe the following rules.
* **PendingWindowInDays**: int (WriteOnly): Specifies the number of days in the waiting period before AWS KMS deletes an AWS KMS key that has been removed from a CloudFormation stack. Enter a value between 7 and 30 days. The default value is 30 days.
* **PrimaryKeyArn**: string (Required): Identifies the primary AWS KMS key to create a replica of. Specify the Amazon Resource Name (ARN) of the AWS KMS key. You cannot specify an alias or key ID. For help finding the ARN, see Finding the Key ID and ARN in the AWS Key Management Service Developer Guide.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

