# AWS.RolesAnywhere @ default

## Resource AWS.RolesAnywhere/CRL@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RolesAnywhere/CRLProperties](#awsrolesanywherecrlproperties) (Required, Identifier): properties of the resource

## Resource AWS.RolesAnywhere/Profile@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RolesAnywhere/ProfileProperties](#awsrolesanywhereprofileproperties) (Required, Identifier): properties of the resource

## Resource AWS.RolesAnywhere/Subject@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RolesAnywhere/SubjectProperties](#awsrolesanywheresubjectproperties) (Identifier): properties of the resource

## Resource AWS.RolesAnywhere/TrustAnchor@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RolesAnywhere/TrustAnchorProperties](#awsrolesanywheretrustanchorproperties) (Required, Identifier): properties of the resource

## AttributeMapping
### Properties
* **CertificateField**: string (Required)
* **MappingRules**: [MappingRule](#mappingrule)[] (Required)

## AWS.RolesAnywhere/CRLProperties
### Properties
* **CrlData**: string (Required)
* **CrlId**: string (ReadOnly, Identifier)
* **Enabled**: bool
* **Name**: string (Required)
* **Tags**: [Tag](#tag)[]
* **TrustAnchorArn**: string

## AWS.RolesAnywhere/ProfileProperties
### Properties
* **AcceptRoleSessionName**: bool
* **AttributeMappings**: [AttributeMapping](#attributemapping)[]
* **DurationSeconds**: int
* **Enabled**: bool
* **ManagedPolicyArns**: string[]
* **Name**: string (Required)
* **ProfileArn**: string (ReadOnly)
* **ProfileId**: string (ReadOnly, Identifier)
* **RequireInstanceProperties**: bool (WriteOnly)
* **RoleArns**: string[] (Required)
* **SessionPolicy**: string
* **Tags**: [Tag](#tag)[]

## AWS.RolesAnywhere/SubjectProperties
### Properties
* **CreatedAt**: string (ReadOnly): The ISO-8601 timestamp when the subject was created.
* **Credentials**: [CredentialSummary](#credentialsummary)[] (ReadOnly): The temporary session credentials vended at the last authenticating call with this subject.
* **InstanceProperties**: [InstanceProperty](#instanceproperty)[] (ReadOnly): The specified instance properties associated with the request.
* **LastSeenAt**: string (ReadOnly): The ISO-8601 timestamp of the last time this subject requested temporary session credentials.
* **SubjectArn**: string (Identifier): The Amazon Resource Name (ARN) of the subject.
* **SubjectId**: string (ReadOnly): The unique identifier of the subject.
* **UpdatedAt**: string (ReadOnly): The ISO-8601 timestamp when the subject was last updated.
* **X509Subject**: string (ReadOnly): The x509 principal identifier of the authenticating certificate.

## AWS.RolesAnywhere/TrustAnchorProperties
### Properties
* **Enabled**: bool
* **Name**: string (Required)
* **NotificationSettings**: [NotificationSetting](#notificationsetting)[]
* **Source**: [Source](#source) (Required)
* **Tags**: [Tag](#tag)[]
* **TrustAnchorArn**: string (ReadOnly)
* **TrustAnchorId**: string (ReadOnly, Identifier)

## CredentialSummary
### Properties
* **Failed**: bool: Indicates whether the temporary credential request was successful.
* **Issuer**: string: The fully qualified domain name of the issuing certificate for the presented end-entity certificate.
* **SeenAt**: string: The ISO-8601 time stamp of when the certificate was last used in a temporary credential request.
* **SerialNumber**: string: The serial number of the certificate.
* **X509CertificateData**: string: The PEM-encoded data of the certificate.

## InstanceProperty
### Properties
* **Failed**: bool: Indicates whether the temporary credential request was successful.
* **Properties**: [Subject_Properties](#subjectproperties): A list of instanceProperty objects.
* **SeenAt**: string: The ISO-8601 time stamp of when the certificate was last used in a temporary credential request.

## MappingRule
### Properties
* **Specifier**: string (Required)

## NotificationSetting
### Properties
* **Channel**: string
* **Enabled**: bool (Required)
* **Event**: string (Required)
* **Threshold**: int

## Source
### Properties
* **SourceData**: [TrustAnchor_SourceData](#trustanchorsourcedata) (Required)
* **SourceType**: string (Required)

## Subject_Properties
### Properties

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TrustAnchor_SourceData
### Properties

