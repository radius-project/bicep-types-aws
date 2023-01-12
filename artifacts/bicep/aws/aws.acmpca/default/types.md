# AWS.ACMPCA @ default

## Resource AWS.ACMPCA/Certificate@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string: the resource name
* **properties**: [AWS.ACMPCA/CertificateProperties](#awsacmpcacertificateproperties) (Required): properties of the resource

## Resource AWS.ACMPCA/CertificateAuthority@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string: the resource name
* **properties**: [AWS.ACMPCA/CertificateAuthorityProperties](#awsacmpcacertificateauthorityproperties) (Required): properties of the resource

## Resource AWS.ACMPCA/CertificateAuthorityActivation@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string: the resource name
* **properties**: [AWS.ACMPCA/CertificateAuthorityActivationProperties](#awsacmpcacertificateauthorityactivationproperties) (Required): properties of the resource

## AWS.ACMPCA/CertificateProperties
### Properties
* **ApiPassthrough**: [ApiPassthrough](#apipassthrough) (WriteOnly): These are fields to be overridden in a certificate at the time of issuance. These requires an API_Passthrough template be used or they will be ignored.
* **Arn**: string (ReadOnly, Identifier): The ARN of the issued certificate.
* **Certificate**: string (ReadOnly): The issued certificate in base 64 PEM-encoded format.
* **CertificateAuthorityArn**: string (Required, Identifier): The Amazon Resource Name (ARN) for the private CA to issue the certificate.
* **CertificateSigningRequest**: string (Required, WriteOnly): The certificate signing request (CSR) for the Certificate.
* **SigningAlgorithm**: string (Required): The name of the algorithm that will be used to sign the Certificate.
* **TemplateArn**: string: Specifies a custom configuration template to use when issuing a certificate. If this parameter is not provided, ACM Private CA defaults to the EndEntityCertificate/V1 template.
* **Validity**: [Validity](#validity) (Required): The time before which the Certificate will be valid.
* **ValidityNotBefore**: [Validity](#validity): The time after which the Certificate will be valid.

## ApiPassthrough
### Properties
* **Extensions**: [Extensions](#extensions)
* **Subject**: [Subject](#subject)

## Extensions
### Properties
* **CertificatePolicies**: [PolicyInformation](#policyinformation)[]
* **CustomExtensions**: [CustomExtension](#customextension)[]
* **ExtendedKeyUsage**: [ExtendedKeyUsage](#extendedkeyusage)[]
* **KeyUsage**: [KeyUsage](#keyusage)
* **SubjectAlternativeNames**: [GeneralName](#generalname)[]

## PolicyInformation
### Properties
* **CertPolicyId**: string (Required)
* **PolicyQualifiers**: [PolicyQualifierInfo](#policyqualifierinfo)[]

## PolicyQualifierInfo
### Properties
* **PolicyQualifierId**: string (Required)
* **Qualifier**: [Qualifier](#qualifier) (Required)

## Qualifier
### Properties
* **CpsUri**: string (Required)

## CustomExtension
### Properties
* **Critical**: bool
* **ObjectIdentifier**: string (Required)
* **Value**: string (Required)

## ExtendedKeyUsage
### Properties
* **ExtendedKeyUsageObjectIdentifier**: string
* **ExtendedKeyUsageType**: string

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

## CustomAttribute
### Properties
* **ObjectIdentifier**: string (Required)
* **Value**: string (Required)

## EdiPartyName
### Properties
* **NameAssigner**: string (Required)
* **PartyName**: string (Required)

## OtherName
### Properties
* **TypeId**: string (Required)
* **Value**: string (Required)

## Validity
### Properties
* **Type**: string (Required)
* **Value**: int (Required)

## AWS.ACMPCA/CertificateAuthorityProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the certificate authority.
* **CertificateSigningRequest**: string (ReadOnly): The base64 PEM-encoded certificate signing request (CSR) for your certificate authority certificate.
* **CsrExtensions**: [CsrExtensions](#csrextensions): Structure that contains CSR pass through extension information used by the CreateCertificateAuthority action.
* **KeyAlgorithm**: string (Required): Public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate.
* **KeyStorageSecurityStandard**: string: KeyStorageSecurityStadard defines a cryptographic key management compliance standard used for handling CA keys.
* **RevocationConfiguration**: [RevocationConfiguration](#revocationconfiguration): Certificate revocation information used by the CreateCertificateAuthority and UpdateCertificateAuthority actions.
* **SigningAlgorithm**: string (Required): Algorithm your CA uses to sign certificate requests.
* **Subject**: [Subject](#subject) (Required, WriteOnly): Structure that contains X.500 distinguished name information for your CA.
* **Tags**: [Tag](#tag)[]
* **Type**: string (Required): The type of the certificate authority.
* **UsageMode**: string: Usage mode of the ceritificate authority.

## CsrExtensions
### Properties
* **KeyUsage**: [KeyUsage](#keyusage)
* **SubjectInformationAccess**: [AccessDescription](#accessdescription)[]

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

## AccessDescription
### Properties
* **AccessLocation**: [GeneralName](#generalname) (Required)
* **AccessMethod**: [AccessMethod](#accessmethod) (Required)

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

## CustomAttribute
### Properties
* **ObjectIdentifier**: string (Required)
* **Value**: string (Required)

## EdiPartyName
### Properties
* **NameAssigner**: string (Required)
* **PartyName**: string (Required)

## OtherName
### Properties
* **TypeId**: string (Required)
* **Value**: string (Required)

## AccessMethod
### Properties
* **AccessMethodType**: string
* **CustomObjectIdentifier**: string

## RevocationConfiguration
### Properties
* **CrlConfiguration**: [CrlConfiguration](#crlconfiguration)
* **OcspConfiguration**: [OcspConfiguration](#ocspconfiguration)

## CrlConfiguration
### Properties
* **CustomCname**: string
* **Enabled**: bool
* **ExpirationInDays**: int
* **S3BucketName**: string
* **S3ObjectAcl**: string

## OcspConfiguration
### Properties
* **Enabled**: bool
* **OcspCustomCname**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.ACMPCA/CertificateAuthorityActivationProperties
### Properties
* **Certificate**: string (Required, WriteOnly): Certificate Authority certificate that will be installed in the Certificate Authority.
* **CertificateAuthorityArn**: string (Required, Identifier): Arn of the Certificate Authority.
* **CertificateChain**: string (WriteOnly): Certificate chain for the Certificate Authority certificate.
* **CompleteCertificateChain**: string (ReadOnly): The complete certificate chain, including the Certificate Authority certificate.
* **Status**: string: The status of the Certificate Authority.

