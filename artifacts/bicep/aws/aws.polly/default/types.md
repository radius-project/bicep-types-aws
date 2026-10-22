# AWS.Polly @ default

## Resource AWS.Polly/Lexicon@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Polly/LexiconProperties](#awspollylexiconproperties) (Required, Identifier): properties of the resource

## AWS.Polly/LexiconProperties
### Properties
* **Alphabet**: string (ReadOnly): The phonetic alphabet used in the lexicon. Valid values are ipa and x-sampa.
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the lexicon.
* **Content**: string (Required): The content of the PLS lexicon in string format.
* **LanguageCode**: string (ReadOnly): The language code that the lexicon applies to.
* **LastModified**: string (ReadOnly): The date the lexicon was last modified (ISO 8601 timestamp).
* **LexemesCount**: int (ReadOnly): The number of lexemes in the lexicon.
* **Name**: string (Required): The name of the lexicon. Must be an alphanumeric string up to 20 characters long.
* **Size**: int (ReadOnly): The total size of the lexicon, in characters.

