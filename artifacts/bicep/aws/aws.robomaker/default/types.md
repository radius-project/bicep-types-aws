# AWS.RoboMaker @ default

## Resource AWS.RoboMaker/Fleet@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RoboMaker/FleetProperties](#awsrobomakerfleetproperties) (Identifier): properties of the resource

## Resource AWS.RoboMaker/Robot@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RoboMaker/RobotProperties](#awsrobomakerrobotproperties) (Required, Identifier): properties of the resource

## Resource AWS.RoboMaker/RobotApplication@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RoboMaker/RobotApplicationProperties](#awsrobomakerrobotapplicationproperties) (Required, Identifier): properties of the resource

## Resource AWS.RoboMaker/SimulationApplication@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RoboMaker/SimulationApplicationProperties](#awsrobomakersimulationapplicationproperties) (Required, Identifier): properties of the resource

## AWS.RoboMaker/FleetProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Name**: string: The name of the fleet.
* **Tags**: [Tags](#tags)

## AWS.RoboMaker/RobotApplicationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **CurrentRevisionId**: string: The revision ID of robot application.
* **Environment**: string: The URI of the Docker image for the robot application.
* **Name**: string: The name of the robot application.
* **RobotSoftwareSuite**: [RobotSoftwareSuite](#robotsoftwaresuite) (Required)
* **Sources**: [SourceConfig](#sourceconfig)[] (WriteOnly): The sources of the robot application.
* **Tags**: [Tags](#tags)

## AWS.RoboMaker/RobotProperties
### Properties
* **Architecture**: string (Required): The target architecture of the robot.
* **Arn**: string (ReadOnly, Identifier)
* **Fleet**: string: The Amazon Resource Name (ARN) of the fleet.
* **GreengrassGroupId**: string (Required): The Greengrass group id.
* **Name**: string: The name for the robot.
* **Tags**: [Tags](#tags)

## AWS.RoboMaker/SimulationApplicationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **CurrentRevisionId**: string: The current revision id.
* **Environment**: string: The URI of the Docker image for the robot application.
* **Name**: string: The name of the simulation application.
* **RenderingEngine**: [RenderingEngine](#renderingengine) (WriteOnly): The rendering engine for the simulation application.
* **RobotSoftwareSuite**: [RobotSoftwareSuite](#robotsoftwaresuite) (Required): The robot software suite used by the simulation application.
* **SimulationSoftwareSuite**: [SimulationSoftwareSuite](#simulationsoftwaresuite) (Required): The simulation software suite used by the simulation application.
* **Sources**: [SourceConfig](#sourceconfig)[] (WriteOnly): The sources of the simulation application.
* **Tags**: [Tags](#tags)

## RenderingEngine
### Properties
* **Name**: string (Required): The name of the rendering engine.
* **Version**: string (Required): The version of the rendering engine.

## RobotSoftwareSuite
### Properties
* **Name**: string (Required): The name of robot software suite.
* **Version**: string (WriteOnly): The version of robot software suite.

## RobotSoftwareSuite
### Properties
* **Name**: string (Required): The name of the robot software suite.
* **Version**: string (WriteOnly): The version of the robot software suite.

## SimulationSoftwareSuite
### Properties
* **Name**: string (Required): The name of the simulation software suite.
* **Version**: string (WriteOnly): The version of the simulation software suite.

## SourceConfig
### Properties
* **Architecture**: string (Required): The architecture of robot application.
* **S3Bucket**: string (Required): The Arn of the S3Bucket that stores the robot application source.
* **S3Key**: string (Required): The s3 key of robot application source.

## SourceConfig
### Properties
* **Architecture**: string (Required): The target processor architecture for the application.
* **S3Bucket**: string (Required): The Amazon S3 bucket name.
* **S3Key**: string (Required): The s3 object key.

## Tags
### Properties

## Tags
### Properties

## Tags
### Properties

## Tags
### Properties

