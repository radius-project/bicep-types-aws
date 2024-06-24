# AWS.FraudDetector @ default

## Resource AWS.FraudDetector/Detector@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FraudDetector/DetectorProperties](#awsfrauddetectordetectorproperties) (Required, Identifier): properties of the resource

## Resource AWS.FraudDetector/EntityType@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FraudDetector/EntityTypeProperties](#awsfrauddetectorentitytypeproperties) (Required, Identifier): properties of the resource

## Resource AWS.FraudDetector/EventType@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FraudDetector/EventTypeProperties](#awsfrauddetectoreventtypeproperties) (Required, Identifier): properties of the resource

## Resource AWS.FraudDetector/Label@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FraudDetector/LabelProperties](#awsfrauddetectorlabelproperties) (Required, Identifier): properties of the resource

## Resource AWS.FraudDetector/List@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FraudDetector/ListProperties](#awsfrauddetectorlistproperties) (Required, Identifier): properties of the resource

## Resource AWS.FraudDetector/Outcome@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FraudDetector/OutcomeProperties](#awsfrauddetectoroutcomeproperties) (Required, Identifier): properties of the resource

## Resource AWS.FraudDetector/Variable@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FraudDetector/VariableProperties](#awsfrauddetectorvariableproperties) (Required, Identifier): properties of the resource

## AWS.FraudDetector/DetectorProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the detector.
* **AssociatedModels**: [Model](#model)[] (ReadOnly): The models to associate with this detector.
* **CreatedTime**: string (ReadOnly): The time when the detector was created.
* **Description**: string: The description of the detector.
* **DetectorId**: string (Required): The ID of the detector
* **DetectorVersionId**: string (ReadOnly): The active version ID of the detector
* **DetectorVersionStatus**: string: The desired detector version status for the detector
* **EventType**: [EventType](#eventtype) (Required): The event type to associate this detector with.
* **LastUpdatedTime**: string (ReadOnly): The time when the detector was last updated.
* **RuleExecutionMode**: string
* **Rules**: [Rule](#rule)[] (Required, ReadOnly)
* **Tags**: [Tag](#tag)[]: Tags associated with this detector.

## AWS.FraudDetector/EntityTypeProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The entity type ARN.
* **CreatedTime**: string (ReadOnly): The timestamp when the entity type was created.
* **Description**: string: The entity type description.
* **LastUpdatedTime**: string (ReadOnly): The timestamp when the entity type was last updated.
* **Name**: string (Required): The name of the entity type.
* **Tags**: [Tag](#tag)[]: Tags associated with this entity type.

## AWS.FraudDetector/EventTypeProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the event type.
* **CreatedTime**: string (ReadOnly): The time when the event type was created.
* **Description**: string: The description of the event type.
* **EntityTypes**: [EntityType](#entitytype)[] (Required, ReadOnly)
* **EventVariables**: [EventVariable](#eventvariable)[] (Required, ReadOnly)
* **Labels**: [Label](#label)[] (Required, ReadOnly)
* **LastUpdatedTime**: string (ReadOnly): The time when the event type was last updated.
* **Name**: string (Required): The name for the event type
* **Tags**: [Tag](#tag)[]: Tags associated with this event type.

## AWS.FraudDetector/LabelProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The label ARN.
* **CreatedTime**: string (ReadOnly): The timestamp when the label was created.
* **Description**: string: The label description.
* **LastUpdatedTime**: string (ReadOnly): The timestamp when the label was last updated.
* **Name**: string (Required): The name of the label.
* **Tags**: [Tag](#tag)[]: Tags associated with this label.

## AWS.FraudDetector/ListProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The list ARN.
* **CreatedTime**: string (ReadOnly): The time when the list was created.
* **Description**: string: The description of the list.
* **Elements**: string[]: The elements in this list.
* **LastUpdatedTime**: string (ReadOnly): The time when the list was last updated.
* **Name**: string (Required): The name of the list.
* **Tags**: [Tag](#tag)[]: Tags associated with this list.
* **VariableType**: string: The variable type of the list.

## AWS.FraudDetector/OutcomeProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The outcome ARN.
* **CreatedTime**: string (ReadOnly): The timestamp when the outcome was created.
* **Description**: string: The outcome description.
* **LastUpdatedTime**: string (ReadOnly): The timestamp when the outcome was last updated.
* **Name**: string (Required): The name of the outcome.
* **Tags**: [Tag](#tag)[]: Tags associated with this outcome.

## AWS.FraudDetector/VariableProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the variable.
* **CreatedTime**: string (ReadOnly): The time when the variable was created.
* **DataSource**: string (Required): The source of the data.
* **DataType**: string (Required): The data type.
* **DefaultValue**: string (Required): The default value for the variable when no value is received.
* **Description**: string: The description.
* **LastUpdatedTime**: string (ReadOnly): The time when the variable was last updated.
* **Name**: string (Required): The name of the variable.
* **Tags**: [Tag](#tag)[]: Tags associated with this variable.
* **VariableType**: string: The variable type. For more information see https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types

## EntityType
### Properties
* **Arn**: string (Identifier)
* **CreatedTime**: string: The time when the entity type was created.
* **Description**: string: The description.
* **Inline**: bool
* **LastUpdatedTime**: string: The time when the entity type was last updated.
* **Name**: string
* **Tags**: [Tag](#tag)[]: Tags associated with this entity type.

## EntityType
### Properties
* **Arn**: string (Identifier)
* **CreatedTime**: string: The time when the event type was created.
* **Description**: string: The description.
* **Inline**: bool
* **LastUpdatedTime**: string: The time when the event type was last updated.
* **Name**: string
* **Tags**: [Tag](#tag)[]: Tags associated with this event type.

## EventType
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the event type.
* **CreatedTime**: string (ReadOnly): The time when the event type was created.
* **Description**: string: The description of the event type.
* **EntityTypes**: [EntityType](#entitytype)[] (ReadOnly)
* **EventVariables**: [EventVariable](#eventvariable)[] (ReadOnly)
* **Inline**: bool
* **Labels**: [Label](#label)[] (ReadOnly)
* **LastUpdatedTime**: string (ReadOnly): The time when the event type was last updated.
* **Name**: string: The name for the event type
* **Tags**: [Tag](#tag)[]: Tags associated with this event type.

## EventVariable
### Properties
* **Arn**: string (Identifier)
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

## EventVariable
### Properties
* **Arn**: string (Identifier)
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
* **Arn**: string (Identifier)
* **CreatedTime**: string: The time when the label was created.
* **Description**: string: The description.
* **Inline**: bool
* **LastUpdatedTime**: string: The time when the label was last updated.
* **Name**: string
* **Tags**: [Tag](#tag)[]: Tags associated with this label.

## Label
### Properties
* **Arn**: string (Identifier)
* **CreatedTime**: string: The time when the event type was created.
* **Description**: string: The description.
* **Inline**: bool
* **LastUpdatedTime**: string: The time when the event type was last updated.
* **Name**: string
* **Tags**: [Tag](#tag)[]: Tags associated with this event type.

## Model
### Properties
* **Arn**: string (Identifier)

## Outcome
### Properties
* **Arn**: string (Identifier)
* **CreatedTime**: string: The time when the outcome was created.
* **Description**: string: The description.
* **Inline**: bool
* **LastUpdatedTime**: string: The time when the outcome was last updated.
* **Name**: string
* **Tags**: [Tag](#tag)[]: Tags associated with this outcome.

## Rule
### Properties
* **Arn**: string (Identifier)
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

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

