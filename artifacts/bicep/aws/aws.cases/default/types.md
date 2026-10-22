# AWS.Cases @ default

## Resource AWS.Cases/Case@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cases/CaseProperties](#awscasescaseproperties) (Required, Identifier): properties of the resource

## Resource AWS.Cases/CaseRule@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cases/CaseRuleProperties](#awscasescaseruleproperties) (Required, Identifier): properties of the resource

## Resource AWS.Cases/Domain@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cases/DomainProperties](#awscasesdomainproperties) (Required, Identifier): properties of the resource

## Resource AWS.Cases/Field@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cases/FieldProperties](#awscasesfieldproperties) (Required, Identifier): properties of the resource

## Resource AWS.Cases/Layout@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cases/LayoutProperties](#awscaseslayoutproperties) (Required, Identifier): properties of the resource

## Resource AWS.Cases/RelatedItem@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cases/RelatedItemProperties](#awscasesrelateditemproperties) (Required, Identifier): properties of the resource

## Resource AWS.Cases/Template@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cases/TemplateProperties](#awscasestemplateproperties) (Required, Identifier): properties of the resource

## AWS.Cases/CaseProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the case.
* **CaseId**: string (ReadOnly): A unique identifier of the case.
* **CustomerId**: string (Required): The full customer profile ARN for the case.
* **DomainId**: string (Required): The unique identifier of the Cases domain.
* **Tags**: [Tag](#tag)[]: A list of tags for the case.
* **TemplateId**: string (Required): A unique identifier of a template.
* **Title**: string (Required): The title of the case.

## AWS.Cases/CaseRuleProperties
### Properties
* **CaseRuleArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of a case rule.
* **CaseRuleId**: string (ReadOnly): The unique identifier of a case rule.
* **CreatedTime**: string (ReadOnly): The time at which the case rule was created.
* **Description**: string: A description explaining the purpose and behavior of this case rule. Helps administrators understand when and why this rule applies to case fields.
* **DomainId**: string: The unique identifier of the Cases domain.
* **LastModifiedTime**: string (ReadOnly): The time at which the case rule was created or last modified.
* **Name**: string (Required): A descriptive name for the case rule. Must be unique within the domain and should clearly indicate the rule's purpose (e.g., 'Priority Field Required for Urgent Cases').
* **Rule**: [CaseRuleDetails](#caseruledetails) (Required)
* **Tags**: [Tag](#tag)[]: The tags that you attach to this case rule.

## AWS.Cases/DomainProperties
### Properties
* **CreatedTime**: string (ReadOnly): The time at which the domain was created.
* **DomainArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) for the Cases domain.
* **DomainId**: string (ReadOnly): The unique identifier of the Cases domain.
* **DomainStatus**: string (ReadOnly)
* **Name**: string (Required): The name for your Cases domain. It must be unique for your AWS account.
* **Tags**: [Tag](#tag)[]: The tags that you attach to this domain.

## AWS.Cases/FieldProperties
### Properties
* **Attributes**: [FieldAttributes](#fieldattributes): Field-type specific attributes that control rendering and validation behavior
* **CreatedTime**: string (ReadOnly): The time at which the field was created.
* **Description**: string: A description explaining the purpose and usage of this field in cases. Helps agents and administrators understand what information should be captured in this field.
* **DomainId**: string: The unique identifier of the Cases domain.
* **FieldArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the field.
* **FieldId**: string (ReadOnly): The unique identifier of a field.
* **LastModifiedTime**: string (ReadOnly): The time at which the field was created or last modified.
* **Name**: string (Required): The display name of the field as it appears to agents in the case interface. Should be descriptive and user-friendly (e.g., 'Customer Priority Level', 'Issue Category').
* **Namespace**: string (ReadOnly): Indicates whether this is a System field (predefined by AWS) or a Custom field (created by your organization). System fields cannot be modified or deleted.
* **Tags**: [Tag](#tag)[]
* **Type**: string (Required)

## AWS.Cases/LayoutProperties
### Properties
* **Content**: [LayoutContent](#layoutcontent) (Required)
* **CreatedTime**: string (ReadOnly): The time at which the layout was created.
* **DomainId**: string: The unique identifier of the Cases domain.
* **LastModifiedTime**: string (ReadOnly): The time at which the layout was created or last modified.
* **LayoutArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the layout.
* **LayoutId**: string (ReadOnly): The unique identifier of the layout.
* **Name**: string (Required): A descriptive name for the layout. Must be unique within the Cases domain and should clearly indicate the layout's purpose and field organization.
* **Tags**: [Tag](#tag)[]

## AWS.Cases/RelatedItemProperties
### Properties
* **CaseId**: string (Required): A unique identifier of the case.
* **Content**: [RelatedItemContent](#relateditemcontent) (Required): The content of a related item to be created.
* **DomainId**: string (Required): The unique identifier of the Cases domain.
* **RelatedItemArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the related item.
* **RelatedItemId**: string (ReadOnly): The unique identifier of the related item.
* **Tags**: [Tag](#tag)[]: A list of tags on the related item.
* **Type**: string (Required): The type of a related item.

## AWS.Cases/TemplateProperties
### Properties
* **CreatedTime**: string (ReadOnly): The time at which the template was created.
* **Description**: string: A description explaining the purpose and use case for this template. Should indicate what types of cases this template is designed for and any specific workflow it supports.
* **DomainId**: string: The unique identifier of the Cases domain.
* **LastModifiedTime**: string (ReadOnly): The time at which the template was created or last modified.
* **LayoutConfiguration**: [LayoutConfiguration](#layoutconfiguration)
* **Name**: string (Required): A name for the template. It must be unique per domain.
* **RequiredFields**: [RequiredField](#requiredfield)[]: A list of fields that must contain a value for a case to be successfully created with this template.
* **Rules**: [TemplateRule](#templaterule)[]: A list of case rules (also known as case field conditions) on a template.
* **Status**: string
* **Tags**: [Tag](#tag)[]: The tags that you attach to this template.
* **TemplateArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the template.
* **TemplateId**: string (ReadOnly): The unique identifier of a template.

## CaseRuleDetails
### Properties

## CommentContent
### Properties
* **Body**: string (Required): Text in the body of a comment.
* **ContentType**: string (Required): Type of the text in the comment.

## FieldAttributes
### Properties
* **Text**: [TextAttributes](#textattributes)

## LayoutConfiguration
### Properties
* **DefaultLayout**: string: The unique identifier of a layout.

## LayoutContent
### Properties

## RelatedItemContent
### Properties
* **Comment**: [CommentContent](#commentcontent)

## RequiredField
### Properties
* **FieldId**: string (Required): The unique identifier of a field.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## TemplateRule
### Properties
* **CaseRuleId**: string (Required): The unique identifier of a case rule.
* **FieldId**: string: The ID of the field that this rule applies to.

## TextAttributes
### Properties
* **IsMultiline**: bool (Required): Attribute that defines rendering component and validation

