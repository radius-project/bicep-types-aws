# AWS.ACMPCA @ default

## Resource AWS.ACMPCA/Certificate@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.ACMPCA/CertificateProperties](#awsacmpcacertificateproperties) (Required): properties of the resource

## Resource AWS.ACMPCA/CertificateAuthority@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.ACMPCA/CertificateAuthorityProperties](#awsacmpcacertificateauthorityproperties) (Required): properties of the resource

## Resource AWS.ACMPCA/CertificateAuthorityActivation@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.ACMPCA/CertificateAuthorityActivationProperties](#awsacmpcacertificateauthorityactivationproperties) (Required): properties of the resource

## AWS.ACMPCA/CertificateProperties
### Properties
* **ApiPassthrough**: [ApiPassthrough](#apipassthrough) (WriteOnly): These are fields to be overridden in a certificate at the time of issuance. These requires an API_Passthrough template be used or they will be ignored.
* **Arn**: [Arn](#arn) (ReadOnly): The ARN of the issued certificate.
* **Certificate**: string (ReadOnly): The issued certificate in base 64 PEM-encoded format.
* **CertificateAuthorityArn**: [Arn](#arn) (Required): The Amazon Resource Name (ARN) for the private CA to issue the certificate.
* **CertificateSigningRequest**: string (Required, WriteOnly): The certificate signing request (CSR) for the Certificate.
* **SigningAlgorithm**: string (Required): The name of the algorithm that will be used to sign the Certificate.
* **TemplateArn**: [Arn](#arn): Specifies a custom configuration template to use when issuing a certificate. If this parameter is not provided, ACM Private CA defaults to the EndEntityCertificate/V1 template.
* **Validity**: [Validity](#validity) (Required): The time before which the Certificate will be valid.
* **ValidityNotBefore**: [Validity](#validity): The time after which the Certificate will be valid.

## ApiPassthrough
### Properties
* **Extensions**: [Extensions](#extensions)
* **Subject**: [Subject](#subject)

## Extensions
### Properties
* **CertificatePolicies**: [CertificatePolicyList](#certificatepolicylist)
* **CustomExtensions**: [CustomExtensionList](#customextensionlist)
* **ExtendedKeyUsage**: [ExtendedKeyUsageList](#extendedkeyusagelist)
* **KeyUsage**: [KeyUsage](#keyusage)
* **SubjectAlternativeNames**: [GeneralNameList](#generalnamelist)

## CertificatePolicyList
### Properties

## CustomExtensionList
### Properties

## ExtendedKeyUsageList
### Properties

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

## GeneralNameList
### Properties

## Subject
### Properties
* **CommonName**: string
* **Country**: string
* **CustomAttributes**: [CustomAttributeList](#customattributelist)
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

## CustomAttributeList
### Properties

## Arn
### Properties

## Validity
### Properties
* **Type**: string (Required)
* **Value**: int (Required)

## AWS.ACMPCA/CertificateAuthorityProperties
### Properties
* **Arn**: [Arn](#arn) (ReadOnly): The Amazon Resource Name (ARN) of the certificate authority.
* **CertificateSigningRequest**: string (ReadOnly): The base64 PEM-encoded certificate signing request (CSR) for your certificate authority certificate.
* **CsrExtensions**: [CsrExtensions](#csrextensions): Structure that contains CSR pass through extension information used by the CreateCertificateAuthority action.
* **KeyAlgorithm**: string (Required): Public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate.
* **KeyStorageSecurityStandard**: string: KeyStorageSecurityStadard defines a cryptographic key management compliance standard used for handling CA keys.
* **RevocationConfiguration**: [RevocationConfiguration](#revocationconfiguration): Certificate revocation information used by the CreateCertificateAuthority and UpdateCertificateAuthority actions.
* **SigningAlgorithm**: string (Required): Algorithm your CA uses to sign certificate requests.
* **Subject**: [Subject](#subject) (Required, WriteOnly): Structure that contains X.500 distinguished name information for your CA.
* **Tags**: [Tag](#tag)[]
* **Type**: string (Required): The type of the certificate authority.

## Arn
### Properties

## CsrExtensions
### Properties
* **KeyUsage**: [KeyUsage](#keyusage)
* **SubjectInformationAccess**: [SubjectInformationAccess](#subjectinformationaccess)

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

## SubjectInformationAccess
### Properties

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

## Subject
### Properties
* **CommonName**: string
* **Country**: string
* **CustomAttributes**: [CustomAttributeList](#customattributelist)
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

## CustomAttributeList
### Properties

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.ACMPCA/CertificateAuthorityActivationProperties
### Properties
* **Certificate**: string (Required, WriteOnly): Certificate Authority certificate that will be installed in the Certificate Authority.
* **CertificateAuthorityArn**: string (Required): Arn of the Certificate Authority.
* **CertificateChain**: string (WriteOnly): Certificate chain for the Certificate Authority certificate.
* **CompleteCertificateChain**: string (ReadOnly): The complete certificate chain, including the Certificate Authority certificate.
* **Status**: string: The status of the Certificate Authority.

