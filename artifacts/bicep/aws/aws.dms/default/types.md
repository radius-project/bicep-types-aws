# AWS.DMS @ default

## Resource AWS.DMS/ReplicationConfig@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DMS/ReplicationConfigProperties](#awsdmsreplicationconfigproperties): properties of the resource

## AWS.DMS/ReplicationConfigProperties
### Properties
* **ComputeConfig**: [ComputeConfig](#computeconfig)
* **ReplicationConfigArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the Replication Config
* **ReplicationConfigIdentifier**: string: A unique identifier of replication configuration
* **ReplicationSettings**: [ReplicationConfig_ReplicationSettings](#replicationconfigreplicationsettings): JSON settings for Servereless replications that are provisioned using this replication configuration
* **ReplicationType**: string: The type of AWS DMS Serverless replication to provision using this replication configuration
* **ResourceIdentifier**: string: A unique value or name that you get set for a given resource that can be used to construct an Amazon Resource Name (ARN) for that resource
* **SourceEndpointArn**: string: The Amazon Resource Name (ARN) of the source endpoint for this AWS DMS Serverless replication configuration
* **SupplementalSettings**: [ReplicationConfig_SupplementalSettings](#replicationconfigsupplementalsettings): JSON settings for specifying supplemental data
* **TableMappings**: [ReplicationConfig_TableMappings](#replicationconfigtablemappings): JSON table mappings for AWS DMS Serverless replications that are provisioned using this replication configuration
* **Tags**: [Tag](#tag)[]: <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
* **TargetEndpointArn**: string: The Amazon Resource Name (ARN) of the target endpoint for this AWS DMS Serverless replication configuration

## ComputeConfig
### Properties
* **AvailabilityZone**: string
* **DnsNameServers**: string
* **KmsKeyId**: string
* **MaxCapacityUnits**: int (Required)
* **MinCapacityUnits**: int
* **MultiAZ**: bool
* **PreferredMaintenanceWindow**: string
* **ReplicationSubnetGroupId**: string
* **VpcSecurityGroupIds**: string[]

## ReplicationConfig_ReplicationSettings
### Properties

## ReplicationConfig_SupplementalSettings
### Properties

## ReplicationConfig_TableMappings
### Properties

## Tag
### Properties
* **Key**: string (Required): <p>Tag key.</p>
* **Value**: string (Required): <p>Tag value.</p>

