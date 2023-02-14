# AWS.Transfer @ default

## Resource AWS.Transfer/Agreement@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Transfer/AgreementProperties](#awstransferagreementproperties) (Required): properties of the resource

## Resource AWS.Transfer/Certificate@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Transfer/CertificateProperties](#awstransfercertificateproperties) (Required): properties of the resource

## Resource AWS.Transfer/Connector@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Transfer/ConnectorProperties](#awstransferconnectorproperties) (Required): properties of the resource

## Resource AWS.Transfer/Profile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Transfer/ProfileProperties](#awstransferprofileproperties) (Required): properties of the resource

## Resource AWS.Transfer/Workflow@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Transfer/WorkflowProperties](#awstransferworkflowproperties) (Required): properties of the resource

## AWS.Transfer/AgreementProperties
### Properties
* **AccessRole**: string (Required): Specifies the access role for the agreement.
* **AgreementId**: string (ReadOnly, Identifier): A unique identifier for the agreement.
* **Arn**: string (ReadOnly): Specifies the unique Amazon Resource Name (ARN) for the agreement.
* **BaseDirectory**: string (Required): Specifies the base directory for the agreement.
* **Description**: string: A textual description for the agreement.
* **LocalProfileId**: string (Required): A unique identifier for the local profile.
* **PartnerProfileId**: string (Required): A unique identifier for the partner profile.
* **ServerId**: string (Required, Identifier): A unique identifier for the server.
* **Status**: string: Specifies the status of the agreement.
* **Tags**: [Tag](#tag)[]: Key-value pairs that can be used to group and search for agreements. Tags are metadata attached to agreements for any purpose.

## Tag
### Properties
* **Key**: string (Required): The name assigned to the tag that you create.
* **Value**: string (Required): Contains one or more values that you assigned to the key name you create.

## AWS.Transfer/CertificateProperties
### Properties
* **ActiveDate**: string: Specifies the active date for the certificate.
* **Arn**: string (ReadOnly): Specifies the unique Amazon Resource Name (ARN) for the agreement.
* **Certificate**: string (Required): Specifies the certificate body to be imported.
* **CertificateChain**: string: Specifies the certificate chain to be imported.
* **CertificateId**: string (ReadOnly, Identifier): A unique identifier for the certificate.
* **Description**: string: A textual description for the certificate.
* **InactiveDate**: string: Specifies the inactive date for the certificate.
* **NotAfterDate**: string (ReadOnly): Specifies the not after date for the certificate.
* **NotBeforeDate**: string (ReadOnly): Specifies the not before date for the certificate.
* **PrivateKey**: string (WriteOnly): Specifies the private key for the certificate.
* **Serial**: string (ReadOnly): Specifies Certificate's serial.
* **Status**: string (ReadOnly): A status description for the certificate.
* **Tags**: [Tag](#tag)[]: Key-value pairs that can be used to group and search for certificates. Tags are metadata attached to certificates for any purpose.
* **Type**: string (ReadOnly): Describing the type of certificate. With or without a private key.
* **Usage**: string (Required): Specifies the usage type for the certificate.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Transfer/ConnectorProperties
### Properties
* **AccessRole**: string (Required): Specifies the access role for the connector.
* **Arn**: string (ReadOnly): Specifies the unique Amazon Resource Name (ARN) for the workflow.
* **As2Config**: [Connector_As2Config](#connectoras2config) (Required): Configuration for an AS2 connector.
* **ConnectorId**: string (ReadOnly, Identifier): A unique identifier for the connector.
* **LoggingRole**: string: Specifies the logging role for the connector.
* **Tags**: [Tag](#tag)[]: Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose.
* **Url**: string (Required): URL for Connector

## Connector_As2Config
### Properties
* **Compression**: string: Compression setting for this AS2 connector configuration.
* **EncryptionAlgorithm**: string: Encryption algorithm for this AS2 connector configuration.
* **LocalProfileId**: string: A unique identifier for the local profile.
* **MdnResponse**: string: MDN Response setting for this AS2 connector configuration.
* **MdnSigningAlgorithm**: string: MDN Signing algorithm for this AS2 connector configuration.
* **MessageSubject**: string: The message subject for this AS2 connector configuration.
* **PartnerProfileId**: string: A unique identifier for the partner profile.
* **SigningAlgorithm**: string: Signing algorithm for this AS2 connector configuration.

## Tag
### Properties
* **Key**: string (Required): The name assigned to the tag that you create.
* **Value**: string (Required): Contains one or more values that you assigned to the key name you create.

## AWS.Transfer/ProfileProperties
### Properties
* **Arn**: string (ReadOnly): Specifies the unique Amazon Resource Name (ARN) for the profile.
* **As2Id**: string (Required): AS2 identifier agreed with a trading partner.
* **CertificateIds**: string[]: List of the certificate IDs associated with this profile to be used for encryption and signing of AS2 messages.
* **ProfileId**: string (ReadOnly, Identifier): A unique identifier for the profile
* **ProfileType**: string (Required): Enum specifying whether the profile is local or associated with a trading partner.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Tag
### Properties
* **Key**: string (Required): The name assigned to the tag that you create.
* **Value**: string (Required): Contains one or more values that you assigned to the key name you create.

## AWS.Transfer/WorkflowProperties
### Properties
* **Arn**: string (ReadOnly): Specifies the unique Amazon Resource Name (ARN) for the workflow.
* **Description**: string: A textual description for the workflow.
* **OnExceptionSteps**: [WorkflowStep](#workflowstep)[]: Specifies the steps (actions) to take if any errors are encountered during execution of the workflow.
* **Steps**: [WorkflowStep](#workflowstep)[] (Required): Specifies the details for the steps that are in the specified workflow.
* **Tags**: [Tag](#tag)[]: Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose.
* **WorkflowId**: string (ReadOnly, Identifier): A unique identifier for the workflow.

## WorkflowStep
### Properties
* **CopyStepDetails**: [Workflow_CopyStepDetails](#workflowcopystepdetails): Details for a step that performs a file copy.
* **CustomStepDetails**: [Workflow_CustomStepDetails](#workflowcustomstepdetails): Details for a step that invokes a lambda function.
* **DeleteStepDetails**: [Workflow_DeleteStepDetails](#workflowdeletestepdetails): Details for a step that deletes the file.
* **TagStepDetails**: [Workflow_TagStepDetails](#workflowtagstepdetails): Details for a step that creates one or more tags.
* **Type**: string

## Workflow_CopyStepDetails
### Properties
* **DestinationFileLocation**: [InputFileLocation](#inputfilelocation)
* **Name**: string: The name of the step, used as an identifier.
* **OverwriteExisting**: string: A flag that indicates whether or not to overwrite an existing file of the same name. The default is FALSE.
* **SourceFileLocation**: string: Specifies which file to use as input to the workflow step.

## InputFileLocation
### Properties
* **S3FileLocation**: [S3InputFileLocation](#s3inputfilelocation)

## S3InputFileLocation
### Properties
* **Bucket**: string: Specifies the S3 bucket that contains the file being copied.
* **Key**: string: The name assigned to the file when it was created in S3. You use the object key to retrieve the object.

## Workflow_CustomStepDetails
### Properties
* **Name**: string: The name of the step, used as an identifier.
* **SourceFileLocation**: string: Specifies which file to use as input to the workflow step.
* **Target**: string: The ARN for the lambda function that is being called.
* **TimeoutSeconds**: int: Timeout, in seconds, for the step.

## Workflow_DeleteStepDetails
### Properties
* **Name**: string: The name of the step, used as an identifier.
* **SourceFileLocation**: string: Specifies which file to use as input to the workflow step.

## Workflow_TagStepDetails
### Properties
* **Name**: string: The name of the step, used as an identifier.
* **SourceFileLocation**: string: Specifies which file to use as input to the workflow step.
* **Tags**: [S3Tag](#s3tag)[]: Array that contains from 1 to 10 key/value pairs.

## S3Tag
### Properties
* **Key**: string (Required): The name assigned to the tag that you create.
* **Value**: string (Required): The value that corresponds to the key.

## Tag
### Properties
* **Key**: string (Required): The name assigned to the tag that you create.
* **Value**: string (Required): Contains one or more values that you assigned to the key name you create.

