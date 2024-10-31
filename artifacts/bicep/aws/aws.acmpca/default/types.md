# AWS.ACMPCA @ default

## Resource AWS.ACMPCA/CertificateAuthority@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ACMPCA/CertificateAuthorityProperties](#awsacmpcacertificateauthorityproperties) (Required, Identifier): properties of the resource

## Resource AWS.ACMPCA/CertificateAuthorityActivation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ACMPCA/CertificateAuthorityActivationProperties](#awsacmpcacertificateauthorityactivationproperties) (Required, Identifier): properties of the resource

## AccessDescription
### Properties
* **AccessLocation**: [GeneralName](#generalname) (Required)
* **AccessMethod**: [AccessMethod](#accessmethod) (Required)

## AccessMethod
### Properties
* **AccessMethodType**: string
* **CustomObjectIdentifier**: string

## AWS.ACMPCA/CertificateAuthorityActivationProperties
### Properties
* **Certificate**: string (Required, WriteOnly): Certificate Authority certificate that will be installed in the Certificate Authority.
* **CertificateAuthorityArn**: string (Required, Identifier): Arn of the Certificate Authority.
* **CertificateChain**: string (WriteOnly): Certificate chain for the Certificate Authority certificate.
* **CompleteCertificateChain**: string (ReadOnly): The complete certificate chain, including the Certificate Authority certificate.
* **Status**: string: The status of the Certificate Authority.

## AWS.ACMPCA/CertificateAuthorityProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the certificate authority.
* **CertificateSigningRequest**: string (ReadOnly): The base64 PEM-encoded certificate signing request (CSR) for your certificate authority certificate.
* **CsrExtensions**: [CsrExtensions](#csrextensions) (WriteOnly): Structure that contains CSR pass through extension information used by the CreateCertificateAuthority action.
* **KeyAlgorithm**: string (Required): Public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate.
* **KeyStorageSecurityStandard**: string (WriteOnly): KeyStorageSecurityStadard defines a cryptographic key management compliance standard used for handling CA keys.
* **RevocationConfiguration**: [RevocationConfiguration](#revocationconfiguration) (WriteOnly): Certificate revocation information used by the CreateCertificateAuthority and UpdateCertificateAuthority actions.
* **SigningAlgorithm**: string (Required): Algorithm your CA uses to sign certificate requests.
* **Subject**: [Subject](#subject) (Required, WriteOnly): Structure that contains X.500 distinguished name information for your CA.
* **Tags**: [Tag](#tag)[] (WriteOnly)
* **Type**: string (Required): The type of the certificate authority.
* **UsageMode**: string: Usage mode of the ceritificate authority.

## CrlConfiguration
### Properties
* **CrlDistributionPointExtensionConfiguration**: [CrlDistributionPointExtensionConfiguration](#crldistributionpointextensionconfiguration)
* **CustomCname**: string
* **Enabled**: bool (Required)
* **ExpirationInDays**: int
* **S3BucketName**: string
* **S3ObjectAcl**: string

## CrlDistributionPointExtensionConfiguration
### Properties
* **OmitExtension**: bool (Required)

## CsrExtensions
### Properties
* **KeyUsage**: [KeyUsage](#keyusage)
* **SubjectInformationAccess**: [AccessDescription](#accessdescription)[]

## CustomAttribute
### Properties
* **ObjectIdentifier**: string (Required)
* **Value**: string (Required)

## EdiPartyName
### Properties
* **NameAssigner**: string
* **PartyName**: string (Required)

## GeneralName
### Properties
* **DirectoryName**: [Subject](#subject)
* **DnsName**: string
* **EdiPartyName**: [EdiPartyName](#edipartyname)
* **IpAddress**: string
* **OtherName**: [OtherName](#othername)
* **RegisteredId**: string
* **Rfc822Name**: string
* **UniformResourceIdentifier**: string

## KeyUsage
### Properties
* **CRLSign**: bool
* **DataEncipherment**: bool
* **DecipherOnly**: bool
* **DigitalSignature**: bool
* **EncipherOnly**: bool
* **KeyAgreement**: bool
* **KeyCertSign**: bool
* **KeyEncipherment**: bool
* **NonRepudiation**: bool

## OcspConfiguration
### Properties
* **Enabled**: bool (Required)
* **OcspCustomCname**: string

## OtherName
### Properties
* **TypeId**: string (Required)
* **Value**: string (Required)

## RevocationConfiguration
### Properties
* **CrlConfiguration**: [CrlConfiguration](#crlconfiguration)
* **OcspConfiguration**: [OcspConfiguration](#ocspconfiguration)

## Subject
### Properties
* **CommonName**: string
* **Country**: string
* **CustomAttributes**: [CustomAttribute](#customattribute)[]
* **DistinguishedNameQualifier**: string
* **GenerationQualifier**: string
* **GivenName**: string
* **Initials**: string
* **Locality**: string
* **Organization**: string
* **OrganizationalUnit**: string
* **Pseudonym**: string
* **SerialNumber**: string
* **State**: string
* **Surname**: string
* **Title**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string

