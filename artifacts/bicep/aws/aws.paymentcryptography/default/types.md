# AWS.PaymentCryptography @ default

## Resource AWS.PaymentCryptography/Alias@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.PaymentCryptography/AliasProperties](#awspaymentcryptographyaliasproperties) (Required, Identifier): properties of the resource

## Resource AWS.PaymentCryptography/Key@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.PaymentCryptography/KeyProperties](#awspaymentcryptographykeyproperties) (Required, Identifier): properties of the resource

## AWS.PaymentCryptography/AliasProperties
### Properties
* **AliasName**: string (Required, Identifier)
* **KeyArn**: string

## AWS.PaymentCryptography/KeyProperties
### Properties
* **DeriveKeyUsage**: string
* **Enabled**: bool
* **Exportable**: bool (Required)
* **KeyAttributes**: [KeyAttributes](#keyattributes) (Required)
* **KeyCheckValueAlgorithm**: string
* **KeyIdentifier**: string (ReadOnly, Identifier)
* **KeyOrigin**: string (ReadOnly)
* **KeyState**: string (ReadOnly)
* **Policy**: string: The resource-based policy attached to the key, in JSON format.
* **ReplicationRegions**: string[] (WriteOnly)
* **ReplicationStatus**: [ReplicationStatus](#replicationstatus) (ReadOnly)
* **Tags**: [Tag](#tag)[]

## KeyAttributes
### Properties
* **KeyAlgorithm**: string (Required)
* **KeyClass**: string (Required)
* **KeyModesOfUse**: [KeyModesOfUse](#keymodesofuse) (Required)
* **KeyUsage**: string (Required)

## KeyModesOfUse
### Properties
* **Decrypt**: bool
* **DeriveKey**: bool
* **Encrypt**: bool
* **Generate**: bool
* **NoRestrictions**: bool
* **Sign**: bool
* **Unwrap**: bool
* **Verify**: bool
* **Wrap**: bool

## ReplicationStatus
### Properties
### Additional Properties
* **Additional Properties Type**: [ReplicationStatusType](#replicationstatustype)

## ReplicationStatusType
### Properties
* **KmsKeyArn**: string: The ARN of the AWS KMS key that protects the replica in this region.
* **KmsKeyId**: string: The AWS KMS key requested for this region, when replication failed before its ARN was known.
* **Status**: string (Required)
* **StatusMessage**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

