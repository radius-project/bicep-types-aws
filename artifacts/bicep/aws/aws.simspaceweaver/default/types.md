# AWS.SimSpaceWeaver @ default

## Resource AWS.SimSpaceWeaver/Simulation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SimSpaceWeaver/SimulationProperties](#awssimspaceweaversimulationproperties) (Required): properties of the resource

## AWS.SimSpaceWeaver/SimulationProperties
### Properties
* **DescribePayload**: string (ReadOnly): Json object with all simulation details
* **MaximumDuration**: string: The maximum running time of the simulation.
* **Name**: string (Required, Identifier): The name of the simulation.
* **RoleArn**: string (Required): Role ARN.
* **SchemaS3Location**: [S3Location](#s3location)
* **SnapshotS3Location**: [S3Location](#s3location)

## S3Location
### Properties
* **BucketName**: string (Required): The Schema S3 bucket name.
* **ObjectKey**: string (Required): This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema.

