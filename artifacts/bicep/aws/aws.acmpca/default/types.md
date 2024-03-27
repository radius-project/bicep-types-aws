# AWS.ACMPCA @ default

## Resource AWS.ACMPCA/Certificate@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ACMPCA/CertificateProperties](#awsacmpcacertificateproperties) (Required, Identifier): properties of the resource

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

## ApiPassthrough
### Properties
* **Extensions**: [Extensions](#extensions): Specifies X.509 extension information for a certificate.
* **Subject**: [Subject](#subject): Contains information about the certificate subject. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.

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

## AWS.ACMPCA/CertificateProperties
### Properties
* **ApiPassthrough**: [ApiPassthrough](#apipassthrough) (WriteOnly): Specifies X.509 certificate information to be included in the issued certificate. An ``APIPassthrough`` or ``APICSRPassthrough`` template variant must be selected, or else this parameter is ignored.
* **Arn**: string (ReadOnly, Identifier)
* **Certificate**: string (ReadOnly)
* **CertificateAuthorityArn**: string (Required, Identifier): The Amazon Resource Name (ARN) for the private CA issues the certificate.
* **CertificateSigningRequest**: string (Required, WriteOnly): The certificate signing request (CSR) for the certificate.
* **SigningAlgorithm**: string (Required): The name of the algorithm that will be used to sign the certificate to be issued. 
 This parameter should not be confused with the ``SigningAlgorithm`` parameter used to sign a CSR in the ``CreateCertificateAuthority`` action.
  The specified signing algorithm family (RSA or ECDSA) must match the algorithm family of the CA's secret key.
* **TemplateArn**: string: Specifies a custom configuration template to use when issuing a certificate. If this parameter is not provided, PCAshort defaults to the ``EndEntityCertificate/V1`` template. For more information about PCAshort templates, see [Using Templates](https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html).
* **Validity**: [Validity](#validity) (Required): The period of time during which the certificate will be valid.
* **ValidityNotBefore**: [Validity](#validity): Information describing the start of the validity period of the certificate. This parameter sets the ?Not Before" date for the certificate.
 By default, when issuing a certificate, PCAshort sets the "Not Before" date to the issuance time minus 60 minutes. This compensates for clock inconsistencies across computer systems. The ``ValidityNotBefore`` parameter can be used to customize the ?Not Before? value. 
 Unlike the ``Validity`` parameter, the ``ValidityNotBefore`` parameter is optional.
 The ``ValidityNotBefore`` value is expressed as an explicit date and time, using the ``Validity`` type value ``ABSOLUTE``.

## CrlConfiguration
### Properties
* **CrlDistributionPointExtensionConfiguration**: [CrlDistributionPointExtensionConfiguration](#crldistributionpointextensionconfiguration)
* **CustomCname**: string
* **Enabled**: bool
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
* **ObjectIdentifier**: string (Required): Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN).
* **Value**: string (Required): Specifies the attribute value of relative distinguished name (RDN).

## CustomAttribute
### Properties
* **ObjectIdentifier**: string (Required)
* **Value**: string (Required)

## CustomExtension
### Properties
* **Critical**: bool: Specifies the critical flag of the X.509 extension.
* **ObjectIdentifier**: string (Required): Specifies the object identifier (OID) of the X.509 extension. For more information, see the [Global OID reference database.](https://docs.aws.amazon.com/https://oidref.com/2.5.29)
* **Value**: string (Required): Specifies the base64-encoded value of the X.509 extension.

## EdiPartyName
### Properties
* **NameAssigner**: string (Required): Specifies the name assigner.
* **PartyName**: string (Required): Specifies the party name.

## EdiPartyName
### Properties
* **NameAssigner**: string (Required)
* **PartyName**: string (Required)

## ExtendedKeyUsage
### Properties
* **ExtendedKeyUsageObjectIdentifier**: string: Specifies a custom ``ExtendedKeyUsage`` with an object identifier (OID).
* **ExtendedKeyUsageType**: string: Specifies a standard ``ExtendedKeyUsage`` as defined as in [RFC 5280](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12).

## Extensions
### Properties
* **CertificatePolicies**: [PolicyInformation](#policyinformation)[]: Contains a sequence of one or more policy information terms, each of which consists of an object identifier (OID) and optional qualifiers. For more information, see NIST's definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier).
 In an end-entity certificate, these terms indicate the policy under which the certificate was issued and the purposes for which it may be used. In a CA certificate, these terms limit the set of policies for certification paths that include this certificate.
* **CustomExtensions**: [CustomExtension](#customextension)[]: Contains a sequence of one or more X.509 extensions, each of which consists of an object identifier (OID), a base64-encoded value, and the critical flag. For more information, see the [Global OID reference database.](https://docs.aws.amazon.com/https://oidref.com/2.5.29)
* **ExtendedKeyUsage**: [ExtendedKeyUsage](#extendedkeyusage)[]: Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the ``KeyUsage`` extension.
* **KeyUsage**: [KeyUsage](#keyusage): Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.
* **SubjectAlternativeNames**: [GeneralName](#generalname)[]: The subject alternative name extension allows identities to be bound to the subject of the certificate. These identities may be included in addition to or in place of the identity in the subject field of the certificate.

## GeneralName
### Properties
* **DirectoryName**: [Subject](#subject): Contains information about the certificate subject. The certificate can be one issued by your private certificate authority (CA) or it can be your private CA certificate. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique for each entity, but your private CA can issue more than one certificate with the same DN to the same entity.
* **DnsName**: string: Represents ``GeneralName`` as a DNS name.
* **EdiPartyName**: [EdiPartyName](#edipartyname): Represents ``GeneralName`` as an ``EdiPartyName`` object.
* **IpAddress**: string: Represents ``GeneralName`` as an IPv4 or IPv6 address.
* **OtherName**: [OtherName](#othername): Represents ``GeneralName`` using an ``OtherName`` object.
* **RegisteredId**: string: Represents ``GeneralName`` as an object identifier (OID).
* **Rfc822Name**: string: Represents ``GeneralName`` as an [RFC 822](https://docs.aws.amazon.com/https://datatracker.ietf.org/doc/html/rfc822) email address.
* **UniformResourceIdentifier**: string: Represents ``GeneralName`` as a URI.

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
* **CRLSign**: bool: Key can be used to sign CRLs.
* **DataEncipherment**: bool: Key can be used to decipher data.
* **DecipherOnly**: bool: Key can be used only to decipher data.
* **DigitalSignature**: bool: Key can be used for digital signing.
* **EncipherOnly**: bool: Key can be used only to encipher data.
* **KeyAgreement**: bool: Key can be used in a key-agreement protocol.
* **KeyCertSign**: bool: Key can be used to sign certificates.
* **KeyEncipherment**: bool: Key can be used to encipher data.
* **NonRepudiation**: bool: Key can be used for non-repudiation.

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
* **Enabled**: bool
* **OcspCustomCname**: string

## OtherName
### Properties
* **TypeId**: string (Required): Specifies an OID.
* **Value**: string (Required): Specifies an OID value.

## OtherName
### Properties
* **TypeId**: string (Required)
* **Value**: string (Required)

## PolicyInformation
### Properties
* **CertPolicyId**: string (Required): Specifies the object identifier (OID) of the certificate policy under which the certificate was issued. For more information, see NIST's definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier).
* **PolicyQualifiers**: [PolicyQualifierInfo](#policyqualifierinfo)[]: Modifies the given ``CertPolicyId`` with a qualifier. AWS Private CA supports the certification practice statement (CPS) qualifier.

## PolicyQualifierInfo
### Properties
* **PolicyQualifierId**: string (Required): Identifies the qualifier modifying a ``CertPolicyId``.
* **Qualifier**: [Qualifier](#qualifier) (Required): Defines the qualifier type. AWS Private CA supports the use of a URI for a CPS qualifier in this field.

## Qualifier
### Properties
* **CpsUri**: string (Required): Contains a pointer to a certification practice statement (CPS) published by the CA.

## RevocationConfiguration
### Properties
* **CrlConfiguration**: [CrlConfiguration](#crlconfiguration)
* **OcspConfiguration**: [OcspConfiguration](#ocspconfiguration)

## Subject
### Properties
* **CommonName**: string: For CA and end-entity certificates in a private PKI, the common name (CN) can be any string within the length limit.
 Note: In publicly trusted certificates, the common name must be a fully qualified domain name (FQDN) associated with the certificate subject.
* **Country**: string: Two-digit code that specifies the country in which the certificate subject located.
* **CustomAttributes**: [CustomAttribute](#customattribute)[]: Contains a sequence of one or more X.500 relative distinguished names (RDNs), each of which consists of an object identifier (OID) and a value. For more information, see NIST?s definition of [Object Identifier (OID)](https://docs.aws.amazon.com/https://csrc.nist.gov/glossary/term/Object_Identifier).
  Custom attributes cannot be used in combination with standard attributes.
* **DistinguishedNameQualifier**: string: Disambiguating information for the certificate subject.
* **GenerationQualifier**: string: Typically a qualifier appended to the name of an individual. Examples include Jr. for junior, Sr. for senior, and III for third.
* **GivenName**: string: First name.
* **Initials**: string: Concatenation that typically contains the first letter of the *GivenName*, the first letter of the middle name if one exists, and the first letter of the *Surname*.
* **Locality**: string: The locality (such as a city or town) in which the certificate subject is located.
* **Organization**: string: Legal name of the organization with which the certificate subject is affiliated.
* **OrganizationalUnit**: string: A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated.
* **Pseudonym**: string: Typically a shortened version of a longer *GivenName*. For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.
* **SerialNumber**: string: The certificate serial number.
* **State**: string: State in which the subject of the certificate is located.
* **Surname**: string: Family name. In the US and the UK, for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first.
* **Title**: string: A title such as Mr. or Ms., which is pre-pended to the name to refer formally to the certificate subject.

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
* **Key**: string
* **Value**: string

## Validity
### Properties
* **Type**: string (Required): Specifies whether the ``Value`` parameter represents days, months, or years.
* **Value**: int (Required): A long integer interpreted according to the value of ``Type``, below.

