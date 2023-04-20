# AWS.DataPipeline @ default

## Resource AWS.DataPipeline/Pipeline@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataPipeline/PipelineProperties](#awsdatapipelinepipelineproperties) (Required): properties of the resource

## AWS.DataPipeline/PipelineProperties
### Properties
* **Activate**: bool: Indicates whether to validate and start the pipeline or stop an active pipeline. By default, the value is set to true.
* **Description**: string: A description of the pipeline.
* **Name**: string (Required): The name of the pipeline.
* **ParameterObjects**: [ParameterObject](#parameterobject)[]: The parameter objects used with the pipeline.
* **ParameterValues**: [ParameterValue](#parametervalue)[]: The parameter values used with the pipeline.
* **PipelineId**: string (ReadOnly, Identifier)
* **PipelineObjects**: [PipelineObject](#pipelineobject)[]: The objects that define the pipeline. These objects overwrite the existing pipeline definition. Not all objects, fields, and values can be updated. For information about restrictions, see Editing Your Pipeline in the AWS Data Pipeline Developer Guide.
* **PipelineTags**: [PipelineTag](#pipelinetag)[]: A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions. For more information, see Controlling Access to Pipelines and Resources in the AWS Data Pipeline Developer Guide.

## ParameterObject
### Properties
* **Attributes**: [ParameterAttribute](#parameterattribute)[] (Required): The attributes of the parameter object.
* **Id**: string (Required): The ID of the parameter object.

## ParameterAttribute
### Properties
* **Key**: string (Required): The field identifier.
* **StringValue**: string (Required): The field value, expressed as a String.

## ParameterValue
### Properties
* **Id**: string (Required): The ID of the parameter value.
* **StringValue**: string (Required): The field value, expressed as a String.

## PipelineObject
### Properties
* **Fields**: [Field](#field)[] (Required): Key-value pairs that define the properties of the object.
* **Id**: string (Required): The ID of the object.
* **Name**: string (Required): The name of the object.

## Field
### Properties
* **Key**: string (Required): Specifies the name of a field for a particular object. To view valid values for a particular field, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.
* **RefValue**: string: A field value that you specify as an identifier of another object in the same pipeline definition.
* **StringValue**: string: A field value that you specify as a string. To view valid values for a particular field, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.

## PipelineTag
### Properties
* **Key**: string (Required): The key name of a tag.
* **Value**: string (Required): The value to associate with the key name.

