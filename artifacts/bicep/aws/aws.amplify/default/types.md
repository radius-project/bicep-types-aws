# AWS.Amplify @ default

## Resource AWS.Amplify/App@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Amplify/AppProperties](#awsamplifyappproperties) (Required, Identifier): properties of the resource

## Resource AWS.Amplify/Branch@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Amplify/BranchProperties](#awsamplifybranchproperties) (Required, Identifier): properties of the resource

## Resource AWS.Amplify/Domain@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Amplify/DomainProperties](#awsamplifydomainproperties) (Required, Identifier): properties of the resource

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
* **Framework**: string
* **PullRequestEnvironmentName**: string
* **Stage**: string

## AWS.Amplify/AppProperties
### Properties
* **AccessToken**: string (WriteOnly)
* **AppId**: string (ReadOnly)
* **AppName**: string (ReadOnly)
* **Arn**: string (ReadOnly, Identifier)
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
* **Platform**: string
* **Repository**: string
* **Tags**: [Tag](#tag)[]

## AWS.Amplify/BranchProperties
### Properties
* **AppId**: string (Required)
* **Arn**: string (ReadOnly, Identifier)
* **Backend**: [Backend](#backend)
* **BasicAuthConfig**: [BasicAuthConfig](#basicauthconfig) (WriteOnly)
* **BranchName**: string (Required)
* **BuildSpec**: string
* **Description**: string
* **EnableAutoBuild**: bool
* **EnablePerformanceMode**: bool
* **EnablePullRequestPreview**: bool
* **EnvironmentVariables**: [EnvironmentVariable](#environmentvariable)[]
* **Framework**: string
* **PullRequestEnvironmentName**: string
* **Stage**: string
* **Tags**: [Tag](#tag)[]

## AWS.Amplify/DomainProperties
### Properties
* **AppId**: string (Required)
* **Arn**: string (ReadOnly, Identifier)
* **AutoSubDomainCreationPatterns**: string[]
* **AutoSubDomainIAMRole**: string
* **Certificate**: [Certificate](#certificate) (ReadOnly)
* **CertificateRecord**: string (ReadOnly)
* **CertificateSettings**: [CertificateSettings](#certificatesettings) (WriteOnly)
* **DomainName**: string (Required)
* **DomainStatus**: string (ReadOnly)
* **EnableAutoSubDomain**: bool
* **StatusReason**: string (ReadOnly)
* **SubDomainSettings**: [SubDomainSetting](#subdomainsetting)[] (Required)
* **UpdateStatus**: string (ReadOnly)

## Backend
### Properties
* **StackArn**: string

## BasicAuthConfig
### Properties
* **EnableBasicAuth**: bool
* **Password**: string
* **Username**: string

## BasicAuthConfig
### Properties
* **EnableBasicAuth**: bool
* **Password**: string (Required)
* **Username**: string (Required)

## Certificate
### Properties
* **CertificateArn**: string
* **CertificateType**: string
* **CertificateVerificationDNSRecord**: string

## CertificateSettings
### Properties
* **CertificateType**: string
* **CustomCertificateArn**: string

## CustomRule
### Properties
* **Condition**: string
* **Source**: string (Required)
* **Status**: string
* **Target**: string (Required)

## EnvironmentVariable
### Properties
* **Name**: string (Required)
* **Value**: string (Required)

## EnvironmentVariable
### Properties
* **Name**: string (Required)
* **Value**: string (Required)

## SubDomainSetting
### Properties
* **BranchName**: string (Required)
* **Prefix**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

