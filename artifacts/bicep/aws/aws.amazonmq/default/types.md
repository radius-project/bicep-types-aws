# AWS.AmazonMQ @ default

## Resource AWS.AmazonMQ/Broker@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AmazonMQ/BrokerProperties](#awsamazonmqbrokerproperties) (Required, Identifier): properties of the resource

## Resource AWS.AmazonMQ/Configuration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AmazonMQ/ConfigurationProperties](#awsamazonmqconfigurationproperties) (Required, Identifier): properties of the resource

## AWS.AmazonMQ/BrokerProperties
### Properties
* **AmqpEndpoints**: string[] (ReadOnly)
* **Arn**: string (ReadOnly)
* **AuthenticationStrategy**: string
* **AutoMinorVersionUpgrade**: bool
* **BrokerName**: string (Required)
* **Configuration**: [ConfigurationId](#configurationid) (WriteOnly): The intended configuration (ID and revision) to be set when creating or updating.
This property is write-only so that applications of a ConfigurationAssociation do not cause drift.

* **ConfigurationId**: string (ReadOnly): The ID of the current actual configuration.
* **ConfigurationRevision**: string (ReadOnly): The revision of the current actual configuration.
* **ConsoleURLs**: string[] (ReadOnly)
* **DataReplicationMode**: string
* **DataReplicationPrimaryBrokerArn**: string (WriteOnly): The ARN of the primary broker that is used to replicate data from in a data replication pair when creating a replica.
This field is only used at creation-time. Changes to it subsequently are ignored by CloudFormation.
Information on the current primary is available on the DataReplicationMetadata object returned by the API.

* **DeploymentMode**: string (Required)
* **EncryptionOptions**: [EncryptionOptions](#encryptionoptions)
* **EngineType**: string (Required)
* **EngineVersion**: string (WriteOnly): The version specified to use. See also EngineVersionCurrent.
* **EngineVersionCurrent**: string (ReadOnly): The version in use. This may have more precision than the specified EngineVersion.
* **HostInstanceType**: string (Required)
* **Id**: string (ReadOnly, Identifier)
* **IpAddresses**: string[] (ReadOnly)
* **LdapServerMetadata**: [LdapServerMetadata](#ldapservermetadata)
* **Logs**: [LogList](#loglist)
* **MaintenanceWindowStartTime**: [MaintenanceWindow](#maintenancewindow)
* **MqttEndpoints**: string[] (ReadOnly)
* **OpenWireEndpoints**: string[] (ReadOnly)
* **PubliclyAccessible**: bool (Required)
* **ResourceShareArns**: string[]: The ARNs of the resource shares to be associated with the broker.

* **SecurityGroups**: string[]
* **StompEndpoints**: string[] (ReadOnly)
* **StorageSize**: int: The broker's storage size in GB.
* **StorageType**: string
* **SubnetIds**: string[]
* **Tags**: [TagsEntry](#tagsentry)[]
* **Users**: [User](#user)[] (WriteOnly): Users to configure on the broker. 
For RabbitMQ, this should be one user, created when the broker is created, and changes thereafter are ignored.
For ActiveMQ, changes to anything but Password are detected and will trigger an update,
but changes to Password cannot be detected so updates to Password may not take effect unless there is some other change.

* **WssEndpoints**: string[] (ReadOnly)

## AWS.AmazonMQ/ConfigurationProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the Amazon MQ configuration.
* **AuthenticationStrategy**: string: The authentication strategy associated with the configuration. The default is SIMPLE.
* **Data**: string (WriteOnly): The base64-encoded XML configuration.
* **Description**: string: The description of the configuration.
* **EngineType**: string (Required): The type of broker engine. Note: Currently, Amazon MQ only supports ACTIVEMQ for creating and editing broker configurations.
* **EngineVersion**: string: The version of the broker engine.
* **Id**: string (ReadOnly, Identifier): The ID of the Amazon MQ configuration.
* **Name**: string (Required): The name of the configuration.
* **Revision**: string (ReadOnly): The revision number of the configuration.
* **Tags**: [TagsEntry](#tagsentry)[]: Create tags when creating the configuration.

## ConfigurationId
### Properties
* **Id**: string (Required, Identifier)
* **Revision**: int (Required)

## EncryptionOptions
### Properties
* **KmsKeyId**: string: The customer master key (CMK) to use for the A KMS (KMS). 
This key is used to encrypt your data at rest. If not provided, Amazon MQ will use a default CMK to encrypt your data.
The Key ARN is recommended so that drift can be detected,
but a key ID or key alias will also be accepted for API compatibility reasons.

* **UseAwsOwnedKey**: bool (Required)

## LdapServerMetadata
### Properties
* **Hosts**: string[] (Required)
* **RoleBase**: string (Required)
* **RoleName**: string
* **RoleSearchMatching**: string (Required)
* **RoleSearchSubtree**: bool
* **ServiceAccountPassword**: string (WriteOnly)
* **ServiceAccountUsername**: string (Required)
* **UserBase**: string (Required)
* **UserRoleName**: string
* **UserSearchMatching**: string (Required)
* **UserSearchSubtree**: bool

## LogList
### Properties
* **Audit**: bool
* **General**: bool

## MaintenanceWindow
### Properties
* **DayOfWeek**: string (Required): _Allowed Values_: <code>MONDAY</code> | <code>TUESDAY</code> | <code>WEDNESDAY</code> | <code>THURSDAY</code> | <code>FRIDAY</code> | <code>SATURDAY</code> | <code>SUNDAY</code>

* **TimeOfDay**: string (Required): The time, in 24-hour format, and use only numbers separated by a colon, HH:MM or HH:MM:SS. Example: 13:05.
When writing YAML this may need to be quoted to prevent a timestamp being read and converted to a number of minutes or seconds.

* **TimeZone**: string (Required): The time zone, UTC by default, in either the Country/City format, or the UTC offset format.

## TagsEntry
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TagsEntry
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## User
### Properties
* **ConsoleAccess**: bool
* **Groups**: string[]
* **Password**: string (Required)
* **ReplicationUser**: bool
* **Username**: string (Required)

