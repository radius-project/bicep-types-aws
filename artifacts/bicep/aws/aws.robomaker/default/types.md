# AWS.RoboMaker @ default

## Resource AWS.RoboMaker/Fleet@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.RoboMaker/FleetProperties](#awsrobomakerfleetproperties): properties of the resource

## Resource AWS.RoboMaker/Robot@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.RoboMaker/RobotProperties](#awsrobomakerrobotproperties): properties of the resource

## Resource AWS.RoboMaker/RobotApplication@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.RoboMaker/RobotApplicationProperties](#awsrobomakerrobotapplicationproperties): properties of the resource

## Resource AWS.RoboMaker/SimulationApplication@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.RoboMaker/SimulationApplicationProperties](#awsrobomakersimulationapplicationproperties): properties of the resource

## AWS.RoboMaker/FleetProperties
### Properties
* **Arn**: [Arn](#arn) (ReadOnly)
* **Name**: string: The name of the fleet.
* **Tags**: [Tags](#tags)

## Arn
### Properties

## Tags
### Properties

## AWS.RoboMaker/RobotProperties
### Properties
* **Architecture**: string: The target architecture of the robot.
* **Arn**: [Arn](#arn) (ReadOnly)
* **Fleet**: string: The Amazon Resource Name (ARN) of the fleet.
* **GreengrassGroupId**: string: The Greengrass group id.
* **Name**: string: The name for the robot.
* **Tags**: [Tags](#tags)

## Arn
### Properties

## Tags
### Properties

## AWS.RoboMaker/RobotApplicationProperties
### Properties
* **Arn**: [Arn](#arn) (ReadOnly)
* **CurrentRevisionId**: string: The revision ID of robot application.
* **Environment**: string: The URI of the Docker image for the robot application.
* **Name**: string: The name of the robot application.
* **RobotSoftwareSuite**: [RobotSoftwareSuite](#robotsoftwaresuite)
* **Sources**: [SourceConfig](#sourceconfig)[]: The sources of the robot application.
* **Tags**: [Tags](#tags)

## Arn
### Properties

## RobotSoftwareSuite
### Properties
* **Name**: string: The name of robot software suite.
* **Version**: string: The version of robot software suite.

## SourceConfig
### Properties
* **Architecture**: string: The architecture of robot application.
* **S3Bucket**: string: The Arn of the S3Bucket that stores the robot application source.
* **S3Key**: string: The s3 key of robot application source.

## Tags
### Properties

## AWS.RoboMaker/SimulationApplicationProperties
### Properties
* **Arn**: [Arn](#arn) (ReadOnly)
* **CurrentRevisionId**: string: The current revision id.
* **Environment**: string: The URI of the Docker image for the robot application.
* **Name**: string: The name of the simulation application.
* **RenderingEngine**: [RenderingEngine](#renderingengine): The rendering engine for the simulation application.
* **RobotSoftwareSuite**: [RobotSoftwareSuite](#robotsoftwaresuite): The robot software suite used by the simulation application.
* **SimulationSoftwareSuite**: [SimulationSoftwareSuite](#simulationsoftwaresuite): The simulation software suite used by the simulation application.
* **Sources**: [SourceConfig](#sourceconfig)[]: The sources of the simulation application.
* **Tags**: [Tags](#tags)

## Arn
### Properties

## RenderingEngine
### Properties
* **Name**: string: The name of the rendering engine.
* **Version**: string: The version of the rendering engine.

## RobotSoftwareSuite
### Properties
* **Name**: string: The name of the robot software suite.
* **Version**: string: The version of the robot software suite.

## SimulationSoftwareSuite
### Properties
* **Name**: string: The name of the simulation software suite.
* **Version**: string: The version of the simulation software suite.

## SourceConfig
### Properties
* **Architecture**: string: The target processor architecture for the application.
* **S3Bucket**: string: The Amazon S3 bucket name.
* **S3Key**: string: The s3 object key.

## Tags
### Properties

