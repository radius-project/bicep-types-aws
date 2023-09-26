# AWS.SecretsManager @ default

## Resource AWS.SecretsManager/Secret@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecretsManager/SecretProperties](#awssecretsmanagersecretproperties): properties of the resource

## AWS.SecretsManager/SecretProperties
### Properties
* **Description**: string: (Optional) Specifies a user-provided description of the secret.
* **GenerateSecretString**: [GenerateSecretString](#generatesecretstring) (WriteOnly): (Optional) Specifies text data that you want to encrypt and store in this new version of the secret.
* **Id**: string (ReadOnly, Identifier): secret Id, the Arn of the resource.
* **KmsKeyId**: string: (Optional) Specifies the ARN, Key ID, or alias of the AWS KMS customer master key (CMK) used to encrypt the SecretString.
* **Name**: string: The friendly name of the secret. You can use forward slashes in the name to represent a path hierarchy.
* **ReplicaRegions**: [ReplicaRegion](#replicaregion)[]: (Optional) A list of ReplicaRegion objects. The ReplicaRegion type consists of a Region (required) and the KmsKeyId which can be an ARN, Key ID, or Alias.
* **SecretString**: string (WriteOnly): (Optional) Specifies text data that you want to encrypt and store in this new version of the secret.
* **Tags**: [Tag](#tag)[]: The list of user-defined tags associated with the secret. Use tags to manage your AWS resources. For additional information about tags, see TagResource.

## GenerateSecretString
### Properties
* **ExcludeCharacters**: string: A string that excludes characters in the generated password. By default, all characters from the included sets can be used. The string can be a minimum length of 0 characters and a maximum length of 7168 characters. 
* **ExcludeLowercase**: bool: Specifies the generated password should not include lowercase letters. By default, ecrets Manager disables this parameter, and the generated password can include lowercase False, and the generated password can include lowercase letters.
* **ExcludeNumbers**: bool: Specifies that the generated password should exclude digits. By default, Secrets Manager does not enable the parameter, False, and the generated password can include digits.
* **ExcludePunctuation**: bool: Specifies that the generated password should not include punctuation characters. The default if you do not include this switch parameter is that punctuation characters can be included. 
* **ExcludeUppercase**: bool: Specifies that the generated password should not include uppercase letters. The default behavior is False, and the generated password can include uppercase letters. 
* **GenerateStringKey**: string: The JSON key name used to add the generated password to the JSON structure specified by the SecretStringTemplate parameter. If you specify this parameter, then you must also specify SecretStringTemplate. 
* **IncludeSpace**: bool: Specifies that the generated password can include the space character. By default, Secrets Manager disables this parameter, and the generated password doesn't include space
* **PasswordLength**: int: The desired length of the generated password. The default value if you do not include this parameter is 32 characters. 
* **RequireEachIncludedType**: bool: Specifies whether the generated password must include at least one of every allowed character type. By default, Secrets Manager enables this parameter, and the generated password includes at least one of every character type.
* **SecretStringTemplate**: string: A properly structured JSON string that the generated password can be added to. If you specify this parameter, then you must also specify GenerateStringKey.

## ReplicaRegion
### Properties
* **KmsKeyId**: string: The ARN, key ID, or alias of the KMS key to encrypt the secret. If you don't include this field, Secrets Manager uses aws/secretsmanager.
* **Region**: string (Required): (Optional) A string that represents a Region, for example "us-east-1".

## Tag
### Properties
* **Key**: string (Required): The value for the tag. You can specify a value that's 1 to 256 characters in length.
* **Value**: string (Required): The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws.

