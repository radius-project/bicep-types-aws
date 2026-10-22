# AWS.Invoicing @ default

## Resource AWS.Invoicing/InvoiceUnit@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Invoicing/InvoiceUnitProperties](#awsinvoicinginvoiceunitproperties) (Required, Identifier): properties of the resource

## Resource AWS.Invoicing/ProcurementPortalPreference@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Invoicing/ProcurementPortalPreferenceProperties](#awsinvoicingprocurementportalpreferenceproperties) (Required, Identifier): properties of the resource

## AWS.Invoicing/InvoiceUnitProperties
### Properties
* **Description**: string
* **InvoiceReceiver**: string (Required)
* **InvoiceUnitArn**: string (ReadOnly, Identifier)
* **LastModified**: int (ReadOnly)
* **Name**: string (Required)
* **ResourceTags**: [ResourceTag](#resourcetag)[]
* **Rule**: [Rule](#rule) (Required)
* **TaxInheritanceDisabled**: bool

## AWS.Invoicing/ProcurementPortalPreferenceProperties
### Properties
* **AwsAccountId**: string (ReadOnly): The AWS account ID associated with this procurement portal preference.
* **BuyerDomain**: string (Required): The domain identifier for the buyer in the procurement portal.
* **BuyerIdentifier**: string (Required): The unique identifier for the buyer in the procurement portal.
* **Contacts**: [Contact](#contact)[] (Required): List of contact information for portal administrators and technical contacts.
* **CreateDate**: string (ReadOnly): The date and time when the procurement portal preference was created.
* **EinvoiceDeliveryEnabled**: bool (Required): Indicates whether e-invoice delivery is enabled for this procurement portal preference.
* **EinvoiceDeliveryPreference**: [EinvoiceDeliveryPreference](#einvoicedeliverypreference)
* **EinvoiceDeliveryPreferenceStatus**: string (ReadOnly): The current status of the e-invoice delivery preference.
* **LastUpdateDate**: string (ReadOnly): The date and time when the procurement portal preference was last updated.
* **ProcurementPortalInstanceEndpoint**: string: The endpoint URL where e-invoices are delivered to the procurement portal.
* **ProcurementPortalName**: string (Required): The name of the procurement portal.
* **ProcurementPortalPreferenceArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the procurement portal preference.
* **ProcurementPortalSharedSecret**: string (WriteOnly): The shared secret or authentication credential used for secure communication with the procurement portal.
* **PurchaseOrderRetrievalEnabled**: bool (Required): Indicates whether purchase order retrieval is enabled for this procurement portal preference.
* **PurchaseOrderRetrievalEndpoint**: string (ReadOnly): The endpoint URL used for retrieving purchase orders from the procurement portal.
* **PurchaseOrderRetrievalPreferenceStatus**: string (ReadOnly): The current status of the purchase order retrieval preference.
* **Selector**: [ProcurementPortalPreferenceSelector](#procurementportalpreferenceselector)
* **SupplierDomain**: string (Required): The domain identifier for the supplier in the procurement portal.
* **SupplierIdentifier**: string (Required): The unique identifier for the supplier in the procurement portal.
* **Tags**: [Tag](#tag)[]: The tags associated with this procurement portal preference.
* **TestEnvPreference**: [TestEnvPreference](#testenvpreference)
* **Version**: int (ReadOnly): The version number of the procurement portal preference configuration.

## Contact
### Properties
* **Email**: string: The email address of the contact person or role.
* **Name**: string: The name of the contact person or role.

## EinvoiceDeliveryPreference
### Properties
* **ConnectionTestingMethod**: string: The method to use for testing the connection to the procurement portal.
* **EinvoiceDeliveryActivationDate**: string: The ISO 8601 date-time when e-invoice delivery should be activated.
* **EinvoiceDeliveryAttachmentTypes**: string[]: The types of attachments to include with the e-invoice delivery.
* **EinvoiceDeliveryDocumentTypes**: string[]: The types of e-invoice documents to be delivered.
* **Protocol**: string: The communication protocol to use for e-invoice delivery.
* **PurchaseOrderDataSources**: [PurchaseOrderDataSource](#purchaseorderdatasource)[]: The sources of purchase order data.

## ProcurementPortalPreferenceSelector
### Properties
* **InvoiceUnitArns**: string[]: The Amazon Resource Name (ARN) of invoice unit identifiers to which this preference applies.

## PurchaseOrderDataSource
### Properties
* **EinvoiceDeliveryDocumentType**: string: The type of e-invoice document that requires purchase order data.
* **PurchaseOrderDataSourceType**: string: The type of source for purchase order data.

## ResourceTag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Rule
### Properties
* **LinkedAccounts**: string[] (Required)

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## TestEnvPreference
### Properties
* **BuyerDomain**: string: The domain identifier for the buyer in the test environment.
* **BuyerIdentifier**: string: The unique identifier for the buyer in the test environment.
* **ProcurementPortalInstanceEndpoint**: string: The endpoint URL for e-invoice delivery in the test environment.
* **ProcurementPortalSharedSecret**: string: The shared secret for secure communication in the test environment.
* **SupplierDomain**: string: The domain identifier for the supplier in the test environment.
* **SupplierIdentifier**: string: The unique identifier for the supplier in the test environment.

