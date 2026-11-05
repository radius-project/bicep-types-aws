# AWS.LakeFormation @ default

## Resource AWS.LakeFormation/DataCellsFilter@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.LakeFormation/DataCellsFilterProperties](#awslakeformationdatacellsfilterproperties) (Required, Identifier): properties of the resource

## Resource AWS.LakeFormation/PrincipalPermissions@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.LakeFormation/PrincipalPermissionsProperties](#awslakeformationprincipalpermissionsproperties) (Required, Identifier): properties of the resource

## Resource AWS.LakeFormation/Resource@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.LakeFormation/ResourceProperties](#awslakeformationresourceproperties) (Required, Identifier): properties of the resource

## Resource AWS.LakeFormation/Tag@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.LakeFormation/TagProperties](#awslakeformationtagproperties) (Required, Identifier): properties of the resource

## Resource AWS.LakeFormation/TagAssociation@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.LakeFormation/TagAssociationProperties](#awslakeformationtagassociationproperties) (Required, Identifier): properties of the resource

## AWS.LakeFormation/DataCellsFilterProperties
### Properties
* **ColumnNames**: string[]: A list of columns to be included in this Data Cells Filter.
* **ColumnWildcard**: [ColumnWildcard](#columnwildcard): An object representing the Data Cells Filter's Columns. Either Column Names or a Wildcard is required
* **DatabaseName**: string (Required, Identifier): The name of the Database that the Table resides in.
* **Name**: string (Required, Identifier): The desired name of the Data Cells Filter.
* **RowFilter**: [RowFilter](#rowfilter): An object representing the Data Cells Filter's Row Filter. Either a Filter Expression or a Wildcard is required
* **TableCatalogId**: string (Required, Identifier): The Catalog Id of the Table on which to create a Data Cells Filter.
* **TableName**: string (Required, Identifier): The name of the Table to create a Data Cells Filter for.

## AWS.LakeFormation/PrincipalPermissionsProperties
### Properties
* **Catalog**: string (WriteOnly): The identifier for the GLUDC. By default, the account ID. The GLUDC is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
* **Permissions**: string[] (Required): The permissions granted or revoked.
* **PermissionsWithGrantOption**: string[] (Required): Indicates the ability to grant permissions (as a subset of permissions granted).
* **Principal**: [DataLakePrincipal](#datalakeprincipal) (Required): The principal to be granted a permission.
* **PrincipalIdentifier**: string (ReadOnly, Identifier)
* **Resource**: [Resource](#resource) (Required): The resource to be granted or revoked permissions.
* **ResourceIdentifier**: string (ReadOnly, Identifier)

## AWS.LakeFormation/ResourceProperties
### Properties
* **HybridAccessEnabled**: bool: Indicates whether the data access of tables pointing to the location can be managed by both Lake Formation permissions as well as Amazon S3 bucket policies.
* **Id**: string (ReadOnly, Identifier): The CloudFormation primary identifier for the LakeFormation::Resource. Mirrors ResourceArn once the resource exists; populated by the handler. Customers should reference the LakeFormation::Resource by ResourceArn.
* **ResourceArn**: string (Required): The Amazon Resource Name (ARN) of the Data Source.
* **RoleArn**: string: The IAM role that registered a resource.
* **UseServiceLinkedRole**: bool (Required, WriteOnly): Designates a trusted caller, an IAM principal, by registering this caller with the Data Catalog.
* **WithFederation**: bool: Allows Lake Formation to assume a role to access tables in a federated database.

## AWS.LakeFormation/TagAssociationProperties
### Properties
* **LFTags**: [LFTagPair](#lftagpair)[] (Required): List of Lake Formation Tags to associate with the Lake Formation Resource
* **Resource**: [Resource](#resource) (Required): Resource to tag with the Lake Formation Tags
* **ResourceIdentifier**: string (ReadOnly, Identifier): Unique string identifying the resource. Used as primary identifier, which ideally should be a string
* **TagsIdentifier**: string (ReadOnly, Identifier): Unique string identifying the resource's tags. Used as primary identifier, which ideally should be a string

## AWS.LakeFormation/TagProperties
### Properties
* **CatalogId**: string: The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
* **TagKey**: string (Required, Identifier): The key-name for the LF-tag.
* **TagValues**: string[] (Required): A list of possible values an attribute can take.

## CatalogResource
### Properties
* **Id**: string: An identifier for the catalog resource.

## CatalogResource
### Properties

## ColumnWildcard
### Properties
* **ExcludedColumnNames**: string[]: A list of column names to be excluded from the Data Cells Filter.

## ColumnWildcard
### Properties
* **ExcludedColumnNames**: string[]: Excludes column names. Any column with this name will be excluded.

## DatabaseResource
### Properties
* **CatalogId**: string (Required): The identifier for the Data Catalog. By default, it is the account ID of the caller.
* **Name**: string (Required): The name of the database resource. Unique to the Data Catalog.

## DatabaseResource
### Properties
* **CatalogId**: string (Required)
* **Name**: string (Required)

## DataCellsFilter_AllRowsWildcard
### Properties

## DataCellsFilterResource
### Properties
* **DatabaseName**: string (Required): A database in the GLUDC.
* **Name**: string (Required): The name given by the user to the data filter cell.
* **TableCatalogId**: string (Required): The ID of the catalog to which the table belongs.
* **TableName**: string (Required): The name of the table.

## DataLakePrincipal
### Properties
* **DataLakePrincipalIdentifier**: string: An identifier for the LFlong principal.

## DataLocationResource
### Properties
* **CatalogId**: string (Required): The identifier for the GLUDC where the location is registered with LFlong.
* **ResourceArn**: string (Required): The Amazon Resource Name (ARN) that uniquely identifies the data location resource.

## LFTag
### Properties
* **TagKey**: string: The key-name for the LF-tag.
* **TagValues**: string[]: A list of possible values of the corresponding ``TagKey`` of an LF-tag key-value pair.

## LFTagKeyResource
### Properties
* **CatalogId**: string (Required): The identifier for the GLUDC where the location is registered with GLUDC.
* **TagKey**: string (Required): The key-name for the LF-tag.
* **TagValues**: string[] (Required): A list of possible values for the corresponding ``TagKey`` of an LF-tag key-value pair.

## LFTagPair
### Properties
* **CatalogId**: string (Required)
* **TagKey**: string (Required)
* **TagValues**: string[] (Required)

## LFTagPolicyResource
### Properties
* **CatalogId**: string (Required): The identifier for the GLUDC. The GLUDC is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your LFlong environment.
* **Expression**: [LFTag](#lftag)[] (Required): A list of LF-tag conditions that apply to the resource's LF-tag policy.
* **ResourceType**: string (Required): The resource type for which the LF-tag policy applies.

## Resource
### Properties
* **Catalog**: [CatalogResource](#catalogresource): The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your LFlong environment.
* **Database**: [DatabaseResource](#databaseresource): The database for the resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal.
* **DataCellsFilter**: [DataCellsFilterResource](#datacellsfilterresource): A data cell filter.
* **DataLocation**: [DataLocationResource](#datalocationresource): The location of an Amazon S3 path where permissions are granted or revoked.
* **LFTag**: [LFTagKeyResource](#lftagkeyresource): The LF-tag key and values attached to a resource.
* **LFTagPolicy**: [LFTagPolicyResource](#lftagpolicyresource): A list of LF-tag conditions that define a resource's LF-tag policy.
* **Table**: [TableResource](#tableresource): The table for the resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
* **TableWithColumns**: [TableWithColumnsResource](#tablewithcolumnsresource): The table with columns for the resource. A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.

## Resource
### Properties
* **Catalog**: [CatalogResource](#catalogresource)
* **Database**: [DatabaseResource](#databaseresource)
* **Table**: [TableResource](#tableresource)
* **TableWithColumns**: [TableWithColumnsResource](#tablewithcolumnsresource)

## RowFilter
### Properties
* **AllRowsWildcard**: [DataCellsFilter_AllRowsWildcard](#datacellsfilterallrowswildcard): An empty object representing a row wildcard.
* **FilterExpression**: string: A PartiQL predicate.

## TableResource
### Properties
* **CatalogId**: string (Required): The identifier for the Data Catalog. By default, it is the account ID of the caller.
* **DatabaseName**: string (Required): The name of the database for the table. Unique to a Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.
* **Name**: string: The name of the table.
* **TableWildcard**: [TableWildcard](#tablewildcard): A wildcard object representing every table under a database.
 At least one of ``TableResource$Name`` or ``TableResource$TableWildcard`` is required.

## TableResource
### Properties
* **CatalogId**: string (Required)
* **DatabaseName**: string (Required)
* **Name**: string
* **TableWildcard**: [TableWildcard](#tablewildcard)

## TableWildcard
### Properties

## TableWildcard
### Properties

## TableWithColumnsResource
### Properties
* **CatalogId**: string (Required): The identifier for the GLUDC where the location is registered with LFlong.
* **ColumnNames**: string[]: The list of column names for the table. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required.
* **ColumnWildcard**: [ColumnWildcard](#columnwildcard): A wildcard specified by a ``ColumnWildcard`` object. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required.
* **DatabaseName**: string (Required): The name of the database for the table with columns resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.
* **Name**: string (Required): The name of the table resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.

## TableWithColumnsResource
### Properties
* **CatalogId**: string (Required)
* **ColumnNames**: string[] (Required)
* **DatabaseName**: string (Required)
* **Name**: string (Required)

