# AWS.Cloud9 @ default

## Resource AWS.Cloud9/EnvironmentEC2@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cloud9/EnvironmentEC2Properties](#awscloud9environmentec2properties) (Identifier): properties of the resource

## AWS.Cloud9/EnvironmentEC2Properties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the development environment.
* **AutomaticStopTimeMinutes**: int (WriteOnly): The number of minutes until the running instance is shut down after the environment was last used.
* **ConnectionType**: string: The connection type used for connecting to an Amazon EC2 environment.
* **Description**: string: The description of the environment.
* **EnvironmentId**: string (ReadOnly, Identifier): The ID of the environment.
* **ImageId**: string (WriteOnly): The identifier for the Amazon Machine Image (AMI) that's used to create the EC2 instance.
* **InstanceType**: string (WriteOnly): The type of instance to connect to the environment.
* **Name**: string: The name of the environment.
* **OwnerArn**: string: The Amazon Resource Name (ARN) of the environment owner.
* **Repositories**: [Repository](#repository)[] (WriteOnly): Any AWS CodeCommit source code repositories to be cloned into the development environment.
* **SubnetId**: string (WriteOnly): The ID of the subnet in Amazon VPC that AWS Cloud9 will use.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs that will be associated with the new AWS Cloud9 development environment.

## Repository
### Properties
* **PathComponent**: string (Required): The path within the development environment's default file system location to clone the AWS CodeCommit repository into.
* **RepositoryUrl**: string (Required): The clone URL of the AWS CodeCommit repository to be cloned.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

