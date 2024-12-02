# AWS.AccessAnalyzer @ default

## Resource AWS.AccessAnalyzer/Analyzer@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AccessAnalyzer/AnalyzerProperties](#awsaccessanalyzeranalyzerproperties) (Required, Identifier): properties of the resource

## AnalysisRuleCriteria
### Properties
* **AccountIds**: string[]: A list of AWS account IDs to apply to the analysis rule criteria. The accounts cannot include the organization analyzer owner account. Account IDs can only be applied to the analysis rule criteria for organization-level analyzers.
* **ResourceTags**: [Tag](#tag)[][]: An array of key-value pairs to match for your resources. You can use the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

For the tag key, you can specify a value that is 1 to 128 characters in length and cannot be prefixed with aws:.

For the tag value, you can specify a value that is 0 to 256 characters in length. If the specified tag value is 0 characters, the rule is applied to all principals with the specified tag key.

## Analyzer_AnalysisRule
### Properties
* **Exclusions**: [AnalysisRuleCriteria](#analysisrulecriteria)[]: A list of rules for the analyzer containing criteria to exclude from analysis. Entities that meet the rule criteria will not generate findings.

## Analyzer_AnalyzerConfiguration
### Properties
* **UnusedAccessConfiguration**: [UnusedAccessConfiguration](#unusedaccessconfiguration)

## ArchiveRule
### Properties
* **Filter**: [Filter](#filter)[] (Required)
* **RuleName**: string (Required): The archive rule name

## AWS.AccessAnalyzer/AnalyzerProperties
### Properties
* **AnalyzerConfiguration**: [Analyzer_AnalyzerConfiguration](#analyzeranalyzerconfiguration): The configuration for the analyzer
* **AnalyzerName**: string: Analyzer name
* **ArchiveRules**: [ArchiveRule](#archiverule)[]
* **Arn**: string (ReadOnly, Identifier): Amazon Resource Name (ARN) of the analyzer
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Type**: string (Required): The type of the analyzer, must be one of ACCOUNT, ORGANIZATION, ACCOUNT_UNUSED_ACCESS or ORGANIZATION_UNUSED_ACCESS

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
* **Value**: string: The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## UnusedAccessConfiguration
### Properties
* **AnalysisRule**: [Analyzer_AnalysisRule](#analyzeranalysisrule): Contains information about rules for the analyzer.
* **UnusedAccessAge**: int: The specified access age in days for which to generate findings for unused access. For example, if you specify 90 days, the analyzer will generate findings for IAM entities within the accounts of the selected organization for any access that hasn't been used in 90 or more days since the analyzer's last scan. You can choose a value between 1 and 365 days.

