# AWS.Inspector @ default

## Resource AWS.Inspector/AssessmentTarget@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Inspector/AssessmentTargetProperties](#awsinspectorassessmenttargetproperties) (Identifier): properties of the resource

## Resource AWS.Inspector/AssessmentTemplate@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Inspector/AssessmentTemplateProperties](#awsinspectorassessmenttemplateproperties) (Required, Identifier): properties of the resource

## Resource AWS.Inspector/ResourceGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Inspector/ResourceGroupProperties](#awsinspectorresourcegroupproperties) (Required, Identifier): properties of the resource

## AWS.Inspector/AssessmentTargetProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **AssessmentTargetName**: string
* **ResourceGroupArn**: string

## AWS.Inspector/AssessmentTemplateProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **AssessmentTargetArn**: string (Required)
* **AssessmentTemplateName**: string
* **DurationInSeconds**: int (Required)
* **RulesPackageArns**: string[] (Required)
* **UserAttributesForFindings**: [Tag](#tag)[]

## AWS.Inspector/ResourceGroupProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **ResourceGroupTags**: [Tag](#tag)[] (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

