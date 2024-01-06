# AWS.AccessAnalyzer @ default

## Resource AWS.AccessAnalyzer/Analyzer@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AccessAnalyzer/AnalyzerProperties](#awsaccessanalyzeranalyzerproperties) (Required): properties of the resource

## AWS.AccessAnalyzer/AnalyzerProperties
### Properties
* **AnalyzerConfiguration**: [Analyzer_AnalyzerConfiguration](#analyzeranalyzerconfiguration): The configuration for the analyzer
* **AnalyzerName**: string: Analyzer name
* **ArchiveRules**: [ArchiveRule](#archiverule)[]
* **Arn**: string (ReadOnly, Identifier): Amazon Resource Name (ARN) of the analyzer
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Type**: string (Required): The type of the analyzer, must be one of ACCOUNT, ORGANIZATION, ACCOUNT_UNUSED_ACCESS or ORGANIZATION_UNUSED_ACCESS

## Analyzer_AnalyzerConfiguration
### Properties
* **UnusedAccessConfiguration**: [UnusedAccessConfiguration](#unusedaccessconfiguration)

## UnusedAccessConfiguration
### Properties
* **UnusedAccessAge**: int: The specified access age in days for which to generate findings for unused access. For example, if you specify 90 days, the analyzer will generate findings for IAM entities within the accounts of the selected organization for any access that hasn't been used in 90 or more days since the analyzer's last scan. You can choose a value between 1 and 180 days.

## ArchiveRule
### Properties
* **Filter**: [Filter](#filter)[] (Required)
* **RuleName**: string (Required): The archive rule name

## Filter
### Properties
* **Contains**: string[]
* **Eq**: string[]
* **Exists**: bool
* **Neq**: string[]
* **Property**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

