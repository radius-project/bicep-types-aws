# AWS.ElasticBeanstalk @ default

## Resource AWS.ElasticBeanstalk/Application@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string: the resource name
* **properties**: [AWS.ElasticBeanstalk/ApplicationProperties](#awselasticbeanstalkapplicationproperties): properties of the resource

## Resource AWS.ElasticBeanstalk/ApplicationVersion@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string: the resource name
* **properties**: [AWS.ElasticBeanstalk/ApplicationVersionProperties](#awselasticbeanstalkapplicationversionproperties) (Required): properties of the resource

## Resource AWS.ElasticBeanstalk/Environment@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string: the resource name
* **properties**: [AWS.ElasticBeanstalk/EnvironmentProperties](#awselasticbeanstalkenvironmentproperties) (Required): properties of the resource

## AWS.ElasticBeanstalk/ApplicationProperties
### Properties
* **ApplicationName**: string (Identifier): A name for the Elastic Beanstalk application. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name.
* **Description**: string: Your description of the application.
* **ResourceLifecycleConfig**: [ApplicationResourceLifecycleConfig](#applicationresourcelifecycleconfig): Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions.

## ApplicationResourceLifecycleConfig
### Properties
* **ServiceRole**: string: The ARN of an IAM service role that Elastic Beanstalk has permission to assume. The ServiceRole property is required the first time that you provide a ResourceLifecycleConfig for the application. After you provide it once, Elastic Beanstalk persists the Service Role with the application, and you don't need to specify it again. You can, however, specify it in subsequent updates to change the Service Role to another value.
* **VersionLifecycleConfig**: [ApplicationVersionLifecycleConfig](#applicationversionlifecycleconfig): Defines lifecycle settings for application versions.

## ApplicationVersionLifecycleConfig
### Properties
* **MaxAgeRule**: [MaxAgeRule](#maxagerule): Specify a max age rule to restrict the length of time that application versions are retained for an application.
* **MaxCountRule**: [MaxCountRule](#maxcountrule): Specify a max count rule to restrict the number of application versions that are retained for an application.

## MaxAgeRule
### Properties
* **DeleteSourceFromS3**: bool: Set to true to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.
* **Enabled**: bool: Specify true to apply the rule, or false to disable it.
* **MaxAgeInDays**: int: Specify the number of days to retain an application versions.

## MaxCountRule
### Properties
* **DeleteSourceFromS3**: bool: Set to true to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.
* **Enabled**: bool: Specify true to apply the rule, or false to disable it.
* **MaxCount**: int: Specify the maximum number of application versions to retain.

## AWS.ElasticBeanstalk/ApplicationVersionProperties
### Properties
* **ApplicationName**: string (Required, Identifier): The name of the Elastic Beanstalk application that is associated with this application version. 
* **Description**: string: A description of this application version.
* **Id**: string (ReadOnly, Identifier)
* **SourceBundle**: [SourceBundle](#sourcebundle) (Required): The Amazon S3 bucket and key that identify the location of the source bundle for this version. 

## SourceBundle
### Properties
* **S3Bucket**: string (Required): The Amazon S3 bucket where the data is located.
* **S3Key**: string (Required): The Amazon S3 key where the data is located.

## AWS.ElasticBeanstalk/EnvironmentProperties
### Properties
* **ApplicationName**: string (Required): The name of the application that is associated with this environment.
* **CNAMEPrefix**: string: If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL. If not specified, the CNAME is generated automatically by appending a random alphanumeric string to the environment name.
* **Description**: string: Your description for this environment.
* **EndpointURL**: string (ReadOnly)
* **EnvironmentName**: string (Identifier): A unique name for the environment.
* **OperationsRole**: string: The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role.
* **OptionSettings**: [OptionSetting](#optionsetting)[] (WriteOnly): Key-value pairs defining configuration options for this environment, such as the instance type.
* **PlatformArn**: string: The Amazon Resource Name (ARN) of the custom platform to use with the environment.
* **SolutionStackName**: string: The name of an Elastic Beanstalk solution stack (platform version) to use with the environment.
* **Tags**: [Tag](#tag)[]: Specifies the tags applied to resources in the environment.
* **TemplateName**: string (WriteOnly): The name of the Elastic Beanstalk configuration template to use with the environment.
* **Tier**: [Tier](#tier): Specifies the tier to use in creating this environment. The environment tier that you choose determines whether Elastic Beanstalk provisions resources to support a web application that handles HTTP(S) requests or a web application that handles background-processing tasks.
* **VersionLabel**: string: The name of the application version to deploy.

## OptionSetting
### Properties
* **Namespace**: string (Required): A unique namespace that identifies the option's associated AWS resource.
* **OptionName**: string (Required): The name of the configuration option.
* **ResourceName**: string: A unique resource name for the option setting. Use it for a time–based scaling configuration option.
* **Value**: string: The current value for the configuration option.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tier
### Properties
* **Name**: string: The name of this environment tier.
* **Type**: string: The type of this environment tier.
* **Version**: string: The version of this environment tier. When you don't set a value to it, Elastic Beanstalk uses the latest compatible worker tier version.

