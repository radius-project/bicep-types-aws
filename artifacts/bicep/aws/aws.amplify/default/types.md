# AWS.Amplify @ default

## Resource AWS.Amplify/App@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Amplify/AppProperties](#awsamplifyappproperties) (Required): properties of the resource

## Resource AWS.Amplify/Branch@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Amplify/BranchProperties](#awsamplifybranchproperties) (Required): properties of the resource

## Resource AWS.Amplify/Domain@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Amplify/DomainProperties](#awsamplifydomainproperties) (Required): properties of the resource

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
* **Name**: string (Required)
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
* **Name**: string (Required)
* **Value**: string (Required)

## CustomRule
### Properties
* **Condition**: string
* **Source**: string (Required)
* **Status**: string
* **Target**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.Amplify/BranchProperties
### Properties
* **AppId**: string (Required)
* **Arn**: string (ReadOnly)
* **BasicAuthConfig**: [BasicAuthConfig](#basicauthconfig) (WriteOnly)
* **BranchName**: string (Required)
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
* **Password**: string (Required)
* **Username**: string (Required)

## EnvironmentVariable
### Properties
* **Name**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.Amplify/DomainProperties
### Properties
* **AppId**: string (Required)
* **Arn**: string (ReadOnly)
* **AutoSubDomainCreationPatterns**: string[]
* **AutoSubDomainIAMRole**: string
* **CertificateRecord**: string (ReadOnly)
* **DomainName**: string (Required)
* **DomainStatus**: string (ReadOnly)
* **EnableAutoSubDomain**: bool
* **StatusReason**: string (ReadOnly)
* **SubDomainSettings**: [SubDomainSetting](#subdomainsetting)[] (Required)

## SubDomainSetting
### Properties
* **BranchName**: string (Required)
* **Prefix**: string (Required)

