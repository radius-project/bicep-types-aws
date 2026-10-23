# AWS.LicenseManagerUserSubscriptions @ default

## Resource AWS.LicenseManagerUserSubscriptions/LicenseServerEndpoint@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.LicenseManagerUserSubscriptions/LicenseServerEndpointProperties](#awslicensemanagerusersubscriptionslicenseserverendpointproperties) (Required, Identifier): properties of the resource

## AWS.LicenseManagerUserSubscriptions/LicenseServerEndpointProperties
### Properties
* **CreationTime**: string (ReadOnly): The timestamp when License Manager created the license server endpoint.
* **IdentityProviderArn**: string (Required, Identifier): The Amazon Resource Name (ARN) that identifies the registered identity provider the license server endpoint is created for. For Active Directory, that can be a self-managed Active Directory or an AWS Managed Microsoft AD.
* **LicenseServerEndpointArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the license server endpoint.
* **LicenseServerEndpointId**: string (ReadOnly): The ID of the license server endpoint.
* **LicenseServerEndpointProvisioningStatus**: string (ReadOnly): The current state of the provisioning process for the license server endpoint.
* **LicenseServers**: [LicenseServer](#licenseserver)[] (ReadOnly): The license servers that are accessed through this endpoint.
* **LicenseServerSettings**: [LicenseServerSettings](#licenseserversettings) (WriteOnly)
* **ServerEndpoint**: [ServerEndpoint](#serverendpoint) (ReadOnly)
* **ServerType**: string (ReadOnly): The type of license server.
* **Tags**: [Tag](#tag)[]: The tags that apply for the license server endpoint. A maximum of 50 tags.

## CredentialsProvider
### Properties
* **SecretsManagerCredentialsProvider**: [SecretsManagerCredentialsProvider](#secretsmanagercredentialsprovider) (Required)

## LicenseServer
### Properties
* **HealthStatus**: string: The health status of the license server.
* **Ipv4Address**: string: The domain IPv4 address of the license server.
* **Ipv6Address**: string: The domain IPv6 address of the license server.
* **ProvisioningStatus**: string: The current state of the provisioning process for the license server.

## LicenseServerSettings
### Properties
* **ServerSettings**: [ServerSettings](#serversettings) (Required)
* **ServerType**: string (Required): The type of license server.

## RdsSalSettings
### Properties
* **RdsSalCredentialsProvider**: [CredentialsProvider](#credentialsprovider) (Required)

## SecretsManagerCredentialsProvider
### Properties
* **SecretId**: string (Required): The identifier of the Secrets Manager secret that holds the license server administrator credentials. The name of the secret must begin with the prefix license-manager-user-.

## ServerEndpoint
### Properties
* **Endpoint**: string: The network address of the endpoint.

## ServerSettings
### Properties
* **RdsSalSettings**: [RdsSalSettings](#rdssalsettings) (Required)

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

