# AWS.Artifact @ default

## Resource AWS.Artifact/ComplianceInquiry@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Artifact/ComplianceInquiryProperties](#awsartifactcomplianceinquiryproperties) (Identifier): properties of the resource

## Resource AWS.Artifact/Report@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Artifact/ReportProperties](#awsartifactreportproperties) (Identifier): properties of the resource

## AWS.Artifact/ComplianceInquiryProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the compliance inquiry resource.
* **CreatedAt**: string (ReadOnly): Timestamp indicating when the resource was created.
* **Id**: string (ReadOnly): Unique resource ID for the compliance inquiry.
* **InputSource**: string (ReadOnly): Type of inquiry content (text or file).
* **Name**: string (ReadOnly): Title of the inquiry. Service-derived, which is why it is readOnly even though CreateComplianceInquiry accepts a name member: for a text inquiry the service DISCARDS the supplied name and sets this to the query text, and for a file inquiry to the uploaded file name. Measured -- sending name 'uluru-ct-probe-t93' with query 'Does AWS maintain a SOC 2 Type II report?' returned the query as the name on create, getMetadata and list alike. An accepted input is not an honoured input, so modelling it as settable would misrepresent the API.
* **Status**: string (ReadOnly): Current processing status of the inquiry.
* **StatusMessage**: string (ReadOnly): Status message providing additional context.
* **SupportMode**: string (ReadOnly): Support mode for this inquiry. AI_ONLY provides AI-generated responses. FULL_SUPPORT includes human expert review. readOnly because the service assigns it on the only path this resource can be provisioned through: CreateComplianceInquiry documents supportMode as supported for file-upload mode only, and a text inquiry is assigned AI_ONLY by the service (measured). Settability on the text path was deliberately NOT probed, because the only discriminating probe is to request FULL_SUPPORT, which routes the inquiry to human expert review -- not a negligible-cost call.
* **Tags**: [Tag](#tag)[]: Tags to associate with the compliance inquiry resource.
* **UpdatedAt**: string (ReadOnly): Timestamp indicating when the resource was last modified.

## AWS.Artifact/ReportProperties
### Properties
* **AcceptanceType**: string (ReadOnly): Acceptance type for report.
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the report.
* **Category**: string (ReadOnly): Category for the report resource.
* **CompanyName**: string (ReadOnly): Associated company name for the report resource.
* **CreatedAt**: string (ReadOnly): Timestamp indicating when the report resource was created.
* **Description**: string (ReadOnly): Description for the report resource.
* **Name**: string (ReadOnly): Name for the report resource.
* **PeriodEnd**: string (ReadOnly): Timestamp indicating the report resource effective end.
* **PeriodStart**: string (ReadOnly): Timestamp indicating the report resource effective start.
* **ProductName**: string (ReadOnly): Associated product name for the report resource.
* **ReportId**: string (ReadOnly): Unique resource ID for the report resource.
* **SequenceNumber**: int (ReadOnly): Sequence number to enforce optimistic locking.
* **Series**: string (ReadOnly): Series for the report resource.
* **State**: string (ReadOnly): Current state of the report resource.
* **TermArn**: string (ReadOnly): Unique resource ARN for term resource.
* **Version**: string (ReadOnly): Version for the report resource.

## Tag
### Properties
* **Key**: string (Required): A tag key.
* **Value**: string (Required): A tag value.

