# AWS.ElasticBeanstalk @ default

## Resource AWS.ElasticBeanstalk/Application@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ElasticBeanstalk/ApplicationProperties](#awselasticbeanstalkapplicationproperties): properties of the resource

## Resource AWS.ElasticBeanstalk/ApplicationVersion@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ElasticBeanstalk/ApplicationVersionProperties](#awselasticbeanstalkapplicationversionproperties) (Required): properties of the resource

## Resource AWS.ElasticBeanstalk/ConfigurationTemplate@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ElasticBeanstalk/ConfigurationTemplateProperties](#awselasticbeanstalkconfigurationtemplateproperties) (Required): properties of the resource

## Resource AWS.ElasticBeanstalk/Environment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
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

## AWS.ElasticBeanstalk/ConfigurationTemplateProperties
### Properties
* **ApplicationName**: string (Required, Identifier): The name of the Elastic Beanstalk application to associate with this configuration template. 
* **Description**: string: An optional description for this configuration.
* **EnvironmentId**: string (WriteOnly): The ID of an environment whose settings you want to use to create the configuration template. You must specify EnvironmentId if you don't specify PlatformArn, SolutionStackName, or SourceConfiguration. 
* **OptionSettings**: [ConfigurationOptionSetting](#configurationoptionsetting)[]: Option values for the Elastic Beanstalk configuration, such as the instance type. If specified, these values override the values obtained from the solution stack or the source configuration template. For a complete list of Elastic Beanstalk configuration options, see [Option Values](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html) in the AWS Elastic Beanstalk Developer Guide. 
* **PlatformArn**: string: The Amazon Resource Name (ARN) of the custom platform. For more information, see [Custom Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html) in the AWS Elastic Beanstalk Developer Guide. 
* **SolutionStackName**: string: The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses. For example, 64bit Amazon Linux 2013.09 running Tomcat 7 Java 7. A solution stack specifies the operating system, runtime, and application server for a configuration template. It also determines the set of configuration options as well as the possible and default values. For more information, see [Supported Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html) in the AWS Elastic Beanstalk Developer Guide.

 You must specify SolutionStackName if you don't specify PlatformArn, EnvironmentId, or SourceConfiguration.

 Use the ListAvailableSolutionStacks API to obtain a list of available solution stacks. 
* **SourceConfiguration**: [SourceConfiguration](#sourceconfiguration): An Elastic Beanstalk configuration template to base this one on. If specified, Elastic Beanstalk uses the configuration values from the specified configuration template to create a new configuration.

Values specified in OptionSettings override any values obtained from the SourceConfiguration.

You must specify SourceConfiguration if you don't specify PlatformArn, EnvironmentId, or SolutionStackName.

Constraint: If both solution stack name and source configuration are specified, the solution stack of the source configuration template must match the specified solution stack name. 
* **TemplateName**: string (ReadOnly, Identifier): The name of the configuration template

## ConfigurationOptionSetting
### Properties
* **Namespace**: string (Required): A unique namespace that identifies the option's associated AWS resource.
* **OptionName**: string (Required): The name of the configuration option.
* **ResourceName**: string: A unique resource name for the option setting. Use it for a time–based scaling configuration option. 
* **Value**: string: The current value for the configuration option.

## SourceConfiguration
### Properties
* **ApplicationName**: string (Required, WriteOnly, Identifier): The name of the application associated with the configuration.
* **TemplateName**: string (Required, WriteOnly, Identifier): The name of the configuration template.

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

