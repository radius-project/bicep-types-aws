# AWS.Proton @ default

## Resource AWS.Proton/EnvironmentAccountConnection@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Proton/EnvironmentAccountConnectionProperties](#awsprotonenvironmentaccountconnectionproperties): properties of the resource

## Resource AWS.Proton/EnvironmentTemplate@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Proton/EnvironmentTemplateProperties](#awsprotonenvironmenttemplateproperties): properties of the resource

## Resource AWS.Proton/ServiceTemplate@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Proton/ServiceTemplateProperties](#awsprotonservicetemplateproperties): properties of the resource

## AWS.Proton/EnvironmentAccountConnectionProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the environment account connection.
* **CodebuildRoleArn**: string: The Amazon Resource Name (ARN) of an IAM service role in the environment account. AWS Proton uses this role to provision infrastructure resources using CodeBuild-based provisioning in the associated environment account.
* **ComponentRoleArn**: string: The Amazon Resource Name (ARN) of the IAM service role that AWS Proton uses when provisioning directly defined components in the associated environment account. It determines the scope of infrastructure that a component can provision in the account.
* **EnvironmentAccountId**: string: The environment account that's connected to the environment account connection.
* **EnvironmentName**: string: The name of the AWS Proton environment that's created in the associated management account.
* **Id**: string (ReadOnly): The ID of the environment account connection.
* **ManagementAccountId**: string: The ID of the management account that accepts or rejects the environment account connection. You create an manage the AWS Proton environment in this account. If the management account accepts the environment account connection, AWS Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account.
* **RoleArn**: string: The Amazon Resource Name (ARN) of the IAM service role that's created in the environment account. AWS Proton uses this role to provision infrastructure resources in the associated environment account.
* **Status**: string (ReadOnly): The status of the environment account connection.
* **Tags**: [Tag](#tag)[]: <p>An optional list of metadata items that you can associate with the Proton environment account connection. A tag is a key-value pair.</p>
         <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
        <i>Proton User Guide</i>.</p>

## Tag
### Properties
* **Key**: string (Required): <p>The key of the resource tag.</p>
* **Value**: string (Required): <p>The value of the resource tag.</p>

## AWS.Proton/EnvironmentTemplateProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): <p>The Amazon Resource Name (ARN) of the environment template.</p>
* **Description**: string: <p>A description of the environment template.</p>
* **DisplayName**: string: <p>The environment template name as displayed in the developer interface.</p>
* **EncryptionKey**: string: <p>A customer provided encryption key that Proton uses to encrypt data.</p>
* **Name**: string
* **Provisioning**: string
* **Tags**: [Tag](#tag)[]: <p>An optional list of metadata items that you can associate with the Proton environment template. A tag is a key-value pair.</p>
         <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
        <i>Proton User Guide</i>.</p>

## Tag
### Properties
* **Key**: string (Required): <p>The key of the resource tag.</p>
* **Value**: string (Required): <p>The value of the resource tag.</p>

## AWS.Proton/ServiceTemplateProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): <p>The Amazon Resource Name (ARN) of the service template.</p>
* **Description**: string: <p>A description of the service template.</p>
* **DisplayName**: string: <p>The name of the service template as displayed in the developer interface.</p>
* **EncryptionKey**: string: <p>A customer provided encryption key that's used to encrypt data.</p>
* **Name**: string
* **PipelineProvisioning**: string
* **Tags**: [Tag](#tag)[]: <p>An optional list of metadata items that you can associate with the Proton service template. A tag is a key-value pair.</p>
         <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
        <i>Proton User Guide</i>.</p>

## Tag
### Properties
* **Key**: string (Required): <p>The key of the resource tag.</p>
* **Value**: string (Required): <p>The value of the resource tag.</p>

