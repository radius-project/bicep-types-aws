# AWS.ServerlessRepo @ default

## Resource AWS.ServerlessRepo/Application@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ServerlessRepo/ApplicationProperties](#awsserverlessrepoapplicationproperties) (Required, Identifier): properties of the resource

## AWS.ServerlessRepo/ApplicationProperties
### Properties
* **ApplicationId**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the application.
* **Author**: string (Required): The name of the author publishing the app.
* **CreationTime**: string (ReadOnly): The date and time this resource was created.
* **Description**: string (Required): The description of the application.
* **HomePageUrl**: string: A URL with more information about the application.
* **IsVerifiedAuthor**: bool (ReadOnly): Whether the author of this application has been verified.
* **Labels**: string[]: Labels to improve discovery of apps in search results.
* **LicenseBody**: string (WriteOnly): A local text file that contains the license of the app.
* **Name**: string (Required): The name of the application.
* **ReadmeBody**: string (WriteOnly): A text readme file in Markdown language that contains a more detailed description of the application.
* **SemanticVersion**: string (WriteOnly): The semantic version of the application.
* **SourceCodeUrl**: string (WriteOnly): A link to a public repository for the source code of your application.
* **SpdxLicenseId**: string: A valid identifier from https://spdx.org/licenses/.
* **TemplateBody**: string (WriteOnly): The local raw packaged AWS SAM template file of your application.

