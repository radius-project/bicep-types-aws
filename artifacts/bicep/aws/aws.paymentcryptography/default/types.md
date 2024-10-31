# AWS.PaymentCryptography @ default

## Resource AWS.PaymentCryptography/Alias@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.PaymentCryptography/AliasProperties](#awspaymentcryptographyaliasproperties) (Required, Identifier): properties of the resource

## Resource AWS.PaymentCryptography/Key@default
* **Valid Scope(s)**: Unknown
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
* **Enabled**: bool
* **Exportable**: bool (Required)
* **KeyAttributes**: [KeyAttributes](#keyattributes) (Required)
* **KeyCheckValueAlgorithm**: string
* **KeyIdentifier**: string (ReadOnly, Identifier)
* **KeyOrigin**: string (ReadOnly)
* **KeyState**: string (ReadOnly)
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

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

