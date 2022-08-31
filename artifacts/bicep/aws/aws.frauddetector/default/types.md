# AWS.FraudDetector @ default

## Resource AWS.FraudDetector/Detector@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.FraudDetector/DetectorProperties](#awsfrauddetectordetectorproperties): properties of the resource

## Resource AWS.FraudDetector/EntityType@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.FraudDetector/EntityTypeProperties](#awsfrauddetectorentitytypeproperties): properties of the resource

## Resource AWS.FraudDetector/EventType@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.FraudDetector/EventTypeProperties](#awsfrauddetectoreventtypeproperties): properties of the resource

## Resource AWS.FraudDetector/Label@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.FraudDetector/LabelProperties](#awsfrauddetectorlabelproperties): properties of the resource

## Resource AWS.FraudDetector/Outcome@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.FraudDetector/OutcomeProperties](#awsfrauddetectoroutcomeproperties): properties of the resource

## Resource AWS.FraudDetector/Variable@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.FraudDetector/VariableProperties](#awsfrauddetectorvariableproperties): properties of the resource

## AWS.FraudDetector/DetectorProperties
### Properties
* **Arn**: string (ReadOnly): The ARN of the detector.
* **AssociatedModels**: [Model](#model)[] (ReadOnly): The models to associate with this detector.
* **CreatedTime**: string (ReadOnly): The time when the detector was created.
* **Description**: string: The description of the detector.
* **DetectorId**: string: The ID of the detector
* **DetectorVersionId**: string (ReadOnly): The active version ID of the detector
* **DetectorVersionStatus**: string: The desired detector version status for the detector
* **EventType**: [EventType](#eventtype): The event type to associate this detector with.
* **LastUpdatedTime**: string (ReadOnly): The time when the detector was last updated.
* **RuleExecutionMode**: string
* **Rules**: [Rule](#rule)[] (ReadOnly)
* **Tags**: [Tag](#tag)[]: Tags associated with this detector.

## Model
### Properties
* **Arn**: string

## EventType
### Properties
* **Arn**: string (ReadOnly): The ARN of the event type.
* **CreatedTime**: string (ReadOnly): The time when the event type was created.
* **Description**: string: The description of the event type.
* **EntityTypes**: [EntityType](#entitytype)[] (ReadOnly)
* **EventVariables**: [EventVariable](#eventvariable)[] (ReadOnly)
* **Inline**: bool
* **Labels**: [Label](#label)[] (ReadOnly)
* **LastUpdatedTime**: string (ReadOnly): The time when the event type was last updated.
* **Name**: string: The name for the event type
* **Tags**: [Tag](#tag)[]: Tags associated with this event type.

## EntityType
### Properties
* **Arn**: string
* **CreatedTime**: string: The time when the entity type was created.
* **Description**: string: The description.
* **Inline**: bool
* **LastUpdatedTime**: string: The time when the entity type was last updated.
* **Name**: string
* **Tags**: [Tag](#tag)[]: Tags associated with this entity type.

## Tag
### Properties
* **Key**: string
* **Value**: string

## EventVariable
### Properties
* **Arn**: string
* **CreatedTime**: string: The time when the event variable was created.
* **DataSource**: string
* **DataType**: string
* **DefaultValue**: string
* **Description**: string: The description.
* **Inline**: bool
* **LastUpdatedTime**: string: The time when the event variable was last updated.
* **Name**: string
* **Tags**: [Tag](#tag)[]: Tags associated with this event variable.
* **VariableType**: string

## Label
### Properties
* **Arn**: string
* **CreatedTime**: string: The time when the label was created.
* **Description**: string: The description.
* **Inline**: bool
* **LastUpdatedTime**: string: The time when the label was last updated.
* **Name**: string
* **Tags**: [Tag](#tag)[]: Tags associated with this label.

## Rule
### Properties
* **Arn**: string
* **CreatedTime**: string: The time when the event type was created.
* **Description**: string: The description.
* **DetectorId**: string
* **Expression**: string
* **Language**: string
* **LastUpdatedTime**: string: The time when the event type was last updated.
* **Outcomes**: [Outcome](#outcome)[]
* **RuleId**: string
* **RuleVersion**: string
* **Tags**: [Tag](#tag)[]: Tags associated with this event type.

## Outcome
### Properties
* **Arn**: string
* **CreatedTime**: string: The time when the outcome was created.
* **Description**: string: The description.
* **Inline**: bool
* **LastUpdatedTime**: string: The time when the outcome was last updated.
* **Name**: string
* **Tags**: [Tag](#tag)[]: Tags associated with this outcome.

## AWS.FraudDetector/EntityTypeProperties
### Properties
* **Arn**: string (ReadOnly): The entity type ARN.
* **CreatedTime**: string (ReadOnly): The timestamp when the entity type was created.
* **Description**: string: The entity type description.
* **LastUpdatedTime**: string (ReadOnly): The timestamp when the entity type was last updated.
* **Name**: string: The name of the entity type.
* **Tags**: [Tag](#tag)[]: Tags associated with this entity type.

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.FraudDetector/EventTypeProperties
### Properties
* **Arn**: string (ReadOnly): The ARN of the event type.
* **CreatedTime**: string (ReadOnly): The time when the event type was created.
* **Description**: string: The description of the event type.
* **EntityTypes**: [EntityType](#entitytype)[] (ReadOnly)
* **EventVariables**: [EventVariable](#eventvariable)[] (ReadOnly)
* **Labels**: [Label](#label)[] (ReadOnly)
* **LastUpdatedTime**: string (ReadOnly): The time when the event type was last updated.
* **Name**: string: The name for the event type
* **Tags**: [Tag](#tag)[]: Tags associated with this event type.

## EntityType
### Properties
* **Arn**: string
* **CreatedTime**: string: The time when the event type was created.
* **Description**: string: The description.
* **Inline**: bool
* **LastUpdatedTime**: string: The time when the event type was last updated.
* **Name**: string
* **Tags**: [Tag](#tag)[]: Tags associated with this event type.

## Tag
### Properties
* **Key**: string
* **Value**: string

## EventVariable
### Properties
* **Arn**: string
* **CreatedTime**: string: The time when the event type was created.
* **DataSource**: string
* **DataType**: string
* **DefaultValue**: string
* **Description**: string: The description.
* **Inline**: bool
* **LastUpdatedTime**: string: The time when the event type was last updated.
* **Name**: string
* **Tags**: [Tag](#tag)[]: Tags associated with this event type.
* **VariableType**: string

## Label
### Properties
* **Arn**: string
* **CreatedTime**: string: The time when the event type was created.
* **Description**: string: The description.
* **Inline**: bool
* **LastUpdatedTime**: string: The time when the event type was last updated.
* **Name**: string
* **Tags**: [Tag](#tag)[]: Tags associated with this event type.

## AWS.FraudDetector/LabelProperties
### Properties
* **Arn**: string (ReadOnly): The label ARN.
* **CreatedTime**: string (ReadOnly): The timestamp when the label was created.
* **Description**: string: The label description.
* **LastUpdatedTime**: string (ReadOnly): The timestamp when the label was last updated.
* **Name**: string: The name of the label.
* **Tags**: [Tag](#tag)[]: Tags associated with this label.

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.FraudDetector/OutcomeProperties
### Properties
* **Arn**: string (ReadOnly): The outcome ARN.
* **CreatedTime**: string (ReadOnly): The timestamp when the outcome was created.
* **Description**: string: The outcome description.
* **LastUpdatedTime**: string (ReadOnly): The timestamp when the outcome was last updated.
* **Name**: string: The name of the outcome.
* **Tags**: [Tag](#tag)[]: Tags associated with this outcome.

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.FraudDetector/VariableProperties
### Properties
* **Arn**: string (ReadOnly): The ARN of the variable.
* **CreatedTime**: string (ReadOnly): The time when the variable was created.
* **DataSource**: string: The source of the data.
* **DataType**: string: The data type.
* **DefaultValue**: string: The default value for the variable when no value is received.
* **Description**: string: The description.
* **LastUpdatedTime**: string (ReadOnly): The time when the variable was last updated.
* **Name**: string: The name of the variable.
* **Tags**: [Tag](#tag)[]: Tags associated with this variable.
* **VariableType**: string: The variable type. For more information see https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types

## Tag
### Properties
* **Key**: string
* **Value**: string

