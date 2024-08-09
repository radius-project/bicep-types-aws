# AWS.SecretsManager @ default

## Resource AWS.SecretsManager/ResourcePolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecretsManager/ResourcePolicyProperties](#awssecretsmanagerresourcepolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.SecretsManager/Secret@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecretsManager/SecretProperties](#awssecretsmanagersecretproperties) (Identifier): properties of the resource

## AWS.SecretsManager/ResourcePolicyProperties
### Properties
* **BlockPublicPolicy**: bool (WriteOnly): Specifies whether to block resource-based policies that allow broad access to the secret.
* **Id**: string (ReadOnly, Identifier): The Arn of the secret.
* **ResourcePolicy**: [ResourcePolicy_ResourcePolicy](#resourcepolicyresourcepolicy) | string (Required): A JSON-formatted string for an AWS resource-based policy.
* **SecretId**: string (Required): The ARN or name of the secret to attach the resource-based policy.

## AWS.SecretsManager/SecretProperties
### Properties
* **Description**: string: The description of the secret.
* **GenerateSecretString**: [GenerateSecretString](#generatesecretstring) (WriteOnly): A structure that specifies how to generate a password to encrypt and store in the secret. To include a specific string in the secret, use ``SecretString`` instead. If you omit both ``GenerateSecretString`` and ``SecretString``, you create an empty secret. When you make a change to this property, a new secret version is created.
 We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support.
* **Id**: string (ReadOnly, Identifier)
* **KmsKeyId**: string: The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt the secret value in the secret. An alias is always prefixed by ``alias/``, for example ``alias/aws/secretsmanager``. For more information, see [About aliases](https://docs.aws.amazon.com/kms/latest/developerguide/alias-about.html).
 To use a KMS key in a different account, use the key ARN or the alias ARN.
 If you don't specify this value, then Secrets Manager uses the key ``aws/secretsmanager``. If that key doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value.
 If the secret is in a different AWS account from the credentials calling the API, then you can't use ``aws/secretsmanager`` to encrypt the secret, and you must create and use a customer managed KMS key.
* **Name**: string: The name of the new secret.
 The secret name can contain ASCII letters, numbers, and the following characters: /_+=.@-
 Do not end your secret name with a hyphen followed by six characters. If you do so, you risk confusion and unexpected results when searching for a secret by partial ARN. Secrets Manager automatically adds a hyphen and six random characters after the secret name at the end of the ARN.
* **ReplicaRegions**: [ReplicaRegion](#replicaregion)[]: A custom type that specifies a ``Region`` and the ``KmsKeyId`` for a replica secret.
* **SecretString**: string (WriteOnly): The text to encrypt and store in the secret. We recommend you use a JSON structure of key/value pairs for your secret value. To generate a random password, use ``GenerateSecretString`` instead. If you omit both ``GenerateSecretString`` and ``SecretString``, you create an empty secret. When you make a change to this property, a new secret version is created.
* **Tags**: [Tag](#tag)[]: A list of tags to attach to the secret. Each tag is a key and value pair of strings in a JSON text string, for example:
  ``[{"Key":"CostCenter","Value":"12345"},{"Key":"environment","Value":"production"}]`` 
 Secrets Manager tag key names are case sensitive. A tag with the key "ABC" is a different tag from one with key "abc".
 Stack-level tags, tags you apply to the CloudFormation stack, are also attached to the secret. 
 If you check tags in permissions policies as part of your security strategy, then adding or removing a tag can change permissions. If the completion of this operation would result in you losing your permissions for this secret, then Secrets Manager blocks the operation and returns an ``Access Denied`` error. For more information, see [Control access to secrets using tags](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html#tag-secrets-abac) and [Limit access to identities with tags that match secrets' tags](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html#auth-and-access_tags2).
 For information about how to format a JSON parameter for the various command line tool environments, see [Using JSON for Parameters](https://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#cli-using-param-json). If your command-line tool or SDK requires quotation marks around the parameter, you should use single quotes to avoid confusion with the double quotes required in the JSON text.
 The following restrictions apply to tags:
  +  Maximum number of tags per secret: 50
  +  Maximum key length: 127 Unicode characters in UTF-8
  +  Maximum value length: 255 Unicode characters in UTF-8
  +  Tag keys and values are case sensitive.
  +  Do not use the ``aws:`` prefix in your tag names or values because AWS reserves it for AWS use. You can't edit or delete tag names or values with this prefix. Tags with this prefix do not count against your tags per secret limit.
  +  If you use your tagging schema across multiple services and resources, other services might have restrictions on allowed characters. Generally allowed characters: letters, spaces, and numbers representable in UTF-8, plus the following special characters: + - = . _ : / @.

## GenerateSecretString
### Properties
* **ExcludeCharacters**: string: A string of the characters that you don't want in the password.
* **ExcludeLowercase**: bool: Specifies whether to exclude lowercase letters from the password. If you don't include this switch, the password can contain lowercase letters.
* **ExcludeNumbers**: bool: Specifies whether to exclude numbers from the password. If you don't include this switch, the password can contain numbers.
* **ExcludePunctuation**: bool: Specifies whether to exclude the following punctuation characters from the password: ``! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~``. If you don't include this switch, the password can contain punctuation.
* **ExcludeUppercase**: bool: Specifies whether to exclude uppercase letters from the password. If you don't include this switch, the password can contain uppercase letters.
* **GenerateStringKey**: string: The JSON key name for the key/value pair, where the value is the generated password. This pair is added to the JSON structure specified by the ``SecretStringTemplate`` parameter. If you specify this parameter, then you must also specify ``SecretStringTemplate``.
* **IncludeSpace**: bool: Specifies whether to include the space character. If you include this switch, the password can contain space characters.
* **PasswordLength**: int: The length of the password. If you don't include this parameter, the default length is 32 characters.
* **RequireEachIncludedType**: bool: Specifies whether to include at least one upper and lowercase letter, one number, and one punctuation. If you don't include this switch, the password contains at least one of every character type.
* **SecretStringTemplate**: string: A template that the generated string must match. When you make a change to this property, a new secret version is created.

## ReplicaRegion
### Properties
* **KmsKeyId**: string: The ARN, key ID, or alias of the KMS key to encrypt the secret. If you don't include this field, Secrets Manager uses ``aws/secretsmanager``.
* **Region**: string (Required): A string that represents a ``Region``, for example "us-east-1".

## Tag
### Properties
* **Key**: string (Required): The key identifier, or name, of the tag.
* **Value**: string (Required): The string value associated with the key of the tag.

