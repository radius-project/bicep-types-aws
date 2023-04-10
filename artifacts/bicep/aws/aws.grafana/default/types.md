# AWS.Grafana @ default

## Resource AWS.Grafana/Workspace@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Grafana/WorkspaceProperties](#awsgrafanaworkspaceproperties) (Required): properties of the resource

## AWS.Grafana/WorkspaceProperties
### Properties
* **AccountAccessType**: string (Required)
* **AuthenticationProviders**: string[] (Required): List of authentication providers to enable.
* **ClientToken**: string (WriteOnly): A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
* **CreationTimestamp**: string (ReadOnly): Timestamp when the workspace was created.
* **DataSources**: string[]: List of data sources on the service managed IAM role.
* **Description**: string: Description of a workspace.
* **Endpoint**: string (ReadOnly): Endpoint for the Grafana workspace.
* **GrafanaVersion**: string (ReadOnly): Version of Grafana the workspace is currently using.
* **Id**: string (ReadOnly, Identifier): The id that uniquely identifies a Grafana workspace.
* **ModificationTimestamp**: string (ReadOnly): Timestamp when the workspace was last modified
* **Name**: string: The user friendly name of a workspace.
* **NotificationDestinations**: string[]: List of notification destinations on the customers service managed IAM role that the Grafana workspace can query.
* **OrganizationalUnits**: string[]: List of Organizational Units containing AWS accounts the Grafana workspace can pull data from.
* **OrganizationRoleName**: string: The name of an IAM role that already exists to use with AWS Organizations to access AWS data sources and notification channels in other accounts in an organization.
* **PermissionType**: string (Required)
* **RoleArn**: string: IAM Role that will be used to grant the Grafana workspace access to a customers AWS resources.
* **SamlConfiguration**: [SamlConfiguration](#samlconfiguration)
* **SamlConfigurationStatus**: string (ReadOnly)
* **SsoClientId**: string (ReadOnly): The client ID of the AWS SSO Managed Application.
* **StackSetName**: string: The name of the AWS CloudFormation stack set to use to generate IAM roles to be used for this workspace.
* **Status**: string (ReadOnly)
* **VpcConfiguration**: [VpcConfiguration](#vpcconfiguration)

## SamlConfiguration
### Properties
* **AllowedOrganizations**: string[]: List of SAML organizations allowed to access Grafana.
* **AssertionAttributes**: [AssertionAttributes](#assertionattributes)
* **IdpMetadata**: [IdpMetadata](#idpmetadata) (Required)
* **LoginValidityDuration**: int: The maximum lifetime an authenticated user can be logged in (in minutes) before being required to re-authenticate.
* **RoleValues**: [RoleValues](#rolevalues)

## AssertionAttributes
### Properties
* **Email**: string: Name of the attribute within the SAML assert to use as the users email in Grafana.
* **Groups**: string: Name of the attribute within the SAML assert to use as the users groups in Grafana.
* **Login**: string: Name of the attribute within the SAML assert to use as the users login handle in Grafana.
* **Name**: string: Name of the attribute within the SAML assert to use as the users name in Grafana.
* **Org**: string: Name of the attribute within the SAML assert to use as the users organizations in Grafana.
* **Role**: string: Name of the attribute within the SAML assert to use as the users roles in Grafana.

## IdpMetadata
### Properties
* **Url**: string: URL that vends the IdPs metadata.
* **Xml**: string: XML blob of the IdPs metadata.

## RoleValues
### Properties
* **Admin**: string[]: List of SAML roles which will be mapped into the Grafana Admin role.
* **Editor**: string[]: List of SAML roles which will be mapped into the Grafana Editor role.

## VpcConfiguration
### Properties
* **SecurityGroupIds**: string[] (Required): The list of Amazon EC2 security group IDs attached to the Amazon VPC for your Grafana workspace to connect.
* **SubnetIds**: string[] (Required): The list of Amazon EC2 subnet IDs created in the Amazon VPC for your Grafana workspace to connect.

