# AWS.AccessAnalyzer @ default

## Resource AWS.AccessAnalyzer/Analyzer@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AccessAnalyzer/AnalyzerProperties](#awsaccessanalyzeranalyzerproperties): properties of the resource

## AWS.AccessAnalyzer/AnalyzerProperties
### Properties
* **AnalyzerName**: string: Analyzer name
* **ArchiveRules**: [ArchiveRule](#archiverule)[]
* **Arn**: string (ReadOnly): Amazon Resource Name (ARN) of the analyzer
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Type**: string: The type of the analyzer, must be ACCOUNT or ORGANIZATION

## ArchiveRule
### Properties
* **Filter**: [Filter](#filter)[]
* **RuleName**: string: The archive rule name

## Filter
### Properties
* **Contains**: string[]
* **Eq**: string[]
* **Exists**: bool
* **Neq**: string[]
* **Property**: string

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

