# AWS.Amplify @ default

## Resource AWS.Amplify/App@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Amplify/AppProperties](#awsamplifyappproperties): properties of the resource

## Resource AWS.Amplify/Branch@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Amplify/BranchProperties](#awsamplifybranchproperties): properties of the resource

## Resource AWS.Amplify/Domain@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Amplify/DomainProperties](#awsamplifydomainproperties): properties of the resource

## AWS.Amplify/AppProperties
### Properties
* **AccessToken**: string (WriteOnly)
* **AppId**: string (ReadOnly)
* **AppName**: string (ReadOnly)
* **Arn**: string (ReadOnly)
* **AutoBranchCreationConfig**: [AutoBranchCreationConfig](#autobranchcreationconfig) (WriteOnly)
* **BasicAuthConfig**: [BasicAuthConfig](#basicauthconfig) (WriteOnly)
* **BuildSpec**: string
* **CustomHeaders**: string
* **CustomRules**: [CustomRule](#customrule)[]
* **DefaultDomain**: string (ReadOnly)
* **Description**: string
* **EnableBranchAutoDeletion**: bool
* **EnvironmentVariables**: [EnvironmentVariable](#environmentvariable)[]
* **IAMServiceRole**: string
* **Name**: string
* **OauthToken**: string (WriteOnly)
* **Repository**: string
* **Tags**: [Tag](#tag)[]

## AutoBranchCreationConfig
### Properties
* **AutoBranchCreationPatterns**: string[]
* **BasicAuthConfig**: [BasicAuthConfig](#basicauthconfig)
* **BuildSpec**: string
* **EnableAutoBranchCreation**: bool
* **EnableAutoBuild**: bool
* **EnablePerformanceMode**: bool
* **EnablePullRequestPreview**: bool
* **EnvironmentVariables**: [EnvironmentVariable](#environmentvariable)[]
* **PullRequestEnvironmentName**: string
* **Stage**: string

## BasicAuthConfig
### Properties
* **EnableBasicAuth**: bool
* **Password**: string
* **Username**: string

## EnvironmentVariable
### Properties
* **Name**: string
* **Value**: string

## CustomRule
### Properties
* **Condition**: string
* **Source**: string
* **Status**: string
* **Target**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.Amplify/BranchProperties
### Properties
* **AppId**: string
* **Arn**: string (ReadOnly)
* **BasicAuthConfig**: [BasicAuthConfig](#basicauthconfig) (WriteOnly)
* **BranchName**: string
* **BuildSpec**: string
* **Description**: string
* **EnableAutoBuild**: bool
* **EnablePerformanceMode**: bool
* **EnablePullRequestPreview**: bool
* **EnvironmentVariables**: [EnvironmentVariable](#environmentvariable)[]
* **PullRequestEnvironmentName**: string
* **Stage**: string
* **Tags**: [Tag](#tag)[]

## BasicAuthConfig
### Properties
* **EnableBasicAuth**: bool
* **Password**: string
* **Username**: string

## EnvironmentVariable
### Properties
* **Name**: string
* **Value**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.Amplify/DomainProperties
### Properties
* **AppId**: string
* **Arn**: string (ReadOnly)
* **AutoSubDomainCreationPatterns**: string[]
* **AutoSubDomainIAMRole**: string
* **CertificateRecord**: string (ReadOnly)
* **DomainName**: string
* **DomainStatus**: string (ReadOnly)
* **EnableAutoSubDomain**: bool
* **StatusReason**: string (ReadOnly)
* **SubDomainSettings**: [SubDomainSetting](#subdomainsetting)[]

## SubDomainSetting
### Properties
* **BranchName**: string
* **Prefix**: string

