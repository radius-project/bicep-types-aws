# AWS.EVS @ default

## Resource AWS.EVS/Environment@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EVS/EnvironmentProperties](#awsevsenvironmentproperties) (Required, Identifier): properties of the resource

## AWS.EVS/EnvironmentProperties
### Properties
* **Checks**: [Check](#check)[] (ReadOnly)
* **ConnectivityInfo**: [Environment_ConnectivityInfo](#environmentconnectivityinfo)
* **CreatedAt**: string (ReadOnly)
* **Credentials**: [Secret](#secret)[] (ReadOnly)
* **EnvironmentArn**: string (ReadOnly)
* **EnvironmentId**: string (ReadOnly, Identifier)
* **EnvironmentName**: string: The name of an EVS environment
* **EnvironmentState**: string (ReadOnly)
* **Hosts**: [HostInfoForCreate](#hostinfoforcreate)[] (WriteOnly): The initial hosts for environment only required upon creation. Modification after creation will have no effect
* **InitialVlans**: [Environment_InitialVlans](#environmentinitialvlans) (WriteOnly): The initial Vlan configuration only required upon creation. Modification after creation will have no effect
* **KmsKeyId**: string
* **LicenseInfo**: [Environment_LicenseInfo](#environmentlicenseinfo): The license information for an EVS environment
* **ModifiedAt**: string (ReadOnly)
* **ServiceAccessSecurityGroups**: [Environment_ServiceAccessSecurityGroups](#environmentserviceaccesssecuritygroups)
* **ServiceAccessSubnetId**: string (Required)
* **SiteId**: string
* **StateDetails**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TermsAccepted**: bool (Required)
* **VcfHostnames**: [Environment_VcfHostnames](#environmentvcfhostnames)
* **VcfVersion**: string (Required)
* **VpcId**: string (Required)

## Check
### Properties
* **ImpairedSince**: string
* **Result**: string (Required)
* **Type**: string (Required)

## Environment_ConnectivityInfo
### Properties
* **PrivateRouteServerPeerings**: string[] (Required)

## Environment_InitialVlans
### Properties
* **EdgeVTep**: [InitialVlanInfo](#initialvlaninfo) (Required)
* **ExpansionVlan1**: [InitialVlanInfo](#initialvlaninfo) (Required)
* **ExpansionVlan2**: [InitialVlanInfo](#initialvlaninfo) (Required)
* **Hcx**: [InitialVlanInfo](#initialvlaninfo) (Required)
* **HcxNetworkAclId**: string
* **IsHcxPublic**: bool
* **NsxUpLink**: [InitialVlanInfo](#initialvlaninfo) (Required)
* **VmkManagement**: [InitialVlanInfo](#initialvlaninfo) (Required)
* **VmManagement**: [InitialVlanInfo](#initialvlaninfo) (Required)
* **VMotion**: [InitialVlanInfo](#initialvlaninfo) (Required)
* **VSan**: [InitialVlanInfo](#initialvlaninfo) (Required)
* **VTep**: [InitialVlanInfo](#initialvlaninfo) (Required)

## Environment_LicenseInfo
### Properties
* **SolutionKey**: string (Required)
* **VsanKey**: string (Required)

## Environment_ServiceAccessSecurityGroups
### Properties
* **SecurityGroups**: string[]

## Environment_VcfHostnames
### Properties
* **CloudBuilder**: string (Required)
* **Nsx**: string (Required)
* **NsxEdge1**: string (Required)
* **NsxEdge2**: string (Required)
* **NsxManager1**: string (Required)
* **NsxManager2**: string (Required)
* **NsxManager3**: string (Required)
* **SddcManager**: string (Required)
* **VCenter**: string (Required)

## HostInfoForCreate
### Properties
* **DedicatedHostId**: string
* **HostName**: string (Required)
* **InstanceType**: string (Required)
* **KeyName**: string (Required)
* **PlacementGroupId**: string

## InitialVlanInfo
### Properties
* **Cidr**: string (Required)

## Secret
### Properties
* **SecretArn**: string

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

