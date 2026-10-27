# AWS.CertificateManager @ default

## Resource AWS.CertificateManager/Account@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CertificateManager/AccountProperties](#awscertificatemanageraccountproperties) (Required, Identifier): properties of the resource

## Resource AWS.CertificateManager/AcmeDomainValidation@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CertificateManager/AcmeDomainValidationProperties](#awscertificatemanageracmedomainvalidationproperties) (Required, Identifier): properties of the resource

## Resource AWS.CertificateManager/AcmeEndpoint@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CertificateManager/AcmeEndpointProperties](#awscertificatemanageracmeendpointproperties) (Required, Identifier): properties of the resource

## Resource AWS.CertificateManager/AcmeExternalAccountBinding@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CertificateManager/AcmeExternalAccountBindingProperties](#awscertificatemanageracmeexternalaccountbindingproperties) (Required, Identifier): properties of the resource

## Resource AWS.CertificateManager/Certificate@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CertificateManager/CertificateProperties](#awscertificatemanagercertificateproperties) (Required, Identifier): properties of the resource

## AcmeDomainValidation_Tags
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## AcmeEndpoint_Tags
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## AcmeExternalAccountBinding_Tags
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## AWS.CertificateManager/AccountProperties
### Properties
* **AccountId**: string (ReadOnly, Identifier)
* **ExpiryEventsConfiguration**: [ExpiryEventsConfiguration](#expiryeventsconfiguration) (Required)

## AWS.CertificateManager/AcmeDomainValidationProperties
### Properties
* **AcmeEndpointArn**: string (Required): The ARN of the ACME endpoint this domain validation is associated with.
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the domain validation.
* **DomainName**: string (Required): The domain name to validate.
* **PrevalidationOptions**: [PrevalidationOptions](#prevalidationoptions) (Required)
* **Tags**: [AcmeDomainValidation_Tags](#acmedomainvalidationtags)[]: Tags associated with the domain validation.

## AWS.CertificateManager/AcmeEndpointProperties
### Properties
* **AcmeEndpointArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the ACME endpoint.
* **AuthorizationBehavior**: string (Required): The authorization behavior for the ACME endpoint.
* **CertificateAuthority**: [CertificateAuthority](#certificateauthority) (Required)
* **CertificateTags**: [Tag](#tag)[]: Tags applied to certificates issued via this endpoint.
* **Contact**: string: Whether contact information is required for the ACME endpoint.
* **EndpointUrl**: string (ReadOnly): The ACME directory URL for the endpoint.
* **Tags**: [AcmeEndpoint_Tags](#acmeendpointtags)[]: Tags associated with the ACME endpoint.

## AWS.CertificateManager/AcmeExternalAccountBindingProperties
### Properties
* **AcmeEndpointArn**: string (Required): The ARN of the ACME endpoint this binding is associated with.
* **AcmeExternalAccountBindingArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the external account binding.
* **Expiration**: [Expiration](#expiration) (WriteOnly)
* **RoleArn**: string (Required): The IAM role ARN for cross-account access.
* **Tags**: [AcmeExternalAccountBinding_Tags](#acmeexternalaccountbindingtags)[]: Tags associated with the external account binding.

## AWS.CertificateManager/CertificateProperties
### Properties
* **CertificateArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the private certificate authority (CA) that will be used to issue the certificate.
* **CertificateAuthorityArn**: string: The Amazon Resource Name (ARN) of the private certificate authority (CA) that will be used to issue the certificate.
* **CertificateExport**: string: Specifies whether the certificate can be exported. ENABLED allows the certificate to be exported, DISABLED prevents export.
* **CertificateTransparencyLoggingPreference**: string: You can opt out of certificate transparency logging by specifying the DISABLED option. Opt in by specifying ENABLED.
* **DomainName**: string (Required): The fully qualified domain name (FQDN), such as www.example.com, with which you want to secure an ACM certificate
* **DomainValidationOptions**: [DomainValidationOption](#domainvalidationoption)[] (WriteOnly): Domain information that domain name registrars use to verify your identity.
* **KeyAlgorithm**: string: Specifies the algorithm of the public and private key pair that your certificate uses to encrypt data.
* **SubjectAlternativeNames**: string[]: Additional FQDNs to be included in the Subject Alternative Name extension of the ACM certificate.
* **Tags**: [Tag](#tag)[]: Key-value pairs that can identify the certificate.
* **ValidationMethod**: string (WriteOnly): The method you want to use to validate that you own or control the domain associated with a public certificate. Valid values are DNS, EMAIL or HTTP

## CertificateAuthority
### Properties
* **PublicCertificateAuthority**: [PublicCertificateAuthority](#publiccertificateauthority) (Required)

## DnsPrevalidationOptions
### Properties
* **DomainScope**: [DomainScope](#domainscope)
* **HostedZoneId**: string: The Route 53 hosted zone ID for automatic DNS record management. When provided, the service creates the validation DNS record on the customer's behalf.

## DomainScope
### Properties
* **ExactDomain**: string: Whether certificates may be issued for the exact domain.
* **Subdomains**: string: Whether certificates may be issued for subdomains of the domain.
* **Wildcards**: string: Whether wildcard certificates may be issued for the domain.

## DomainValidationOption
### Properties
* **DomainName**: string
* **HostedZoneId**: string
* **ValidationDomain**: string

## Expiration
### Properties
* **Type**: string (Required): The time unit for the expiration value.
* **Value**: int (Required): The expiration value.

## ExpiryEventsConfiguration
### Properties
* **DaysBeforeExpiry**: int

## PrevalidationOptions
### Properties
* **DnsPrevalidation**: [DnsPrevalidationOptions](#dnsprevalidationoptions) (Required)

## PublicCertificateAuthority
### Properties
* **AllowedKeyAlgorithms**: string[]: The allowed key algorithms for certificates issued via this endpoint.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The tag's key.
* **Value**: string (Required): The tag's value.

