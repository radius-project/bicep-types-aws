# AWS.LicenseManagerLinuxSubscriptions @ default

## Resource AWS.LicenseManagerLinuxSubscriptions/SubscriptionProvider@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.LicenseManagerLinuxSubscriptions/SubscriptionProviderProperties](#awslicensemanagerlinuxsubscriptionssubscriptionproviderproperties) (Required, Identifier): properties of the resource

## AWS.LicenseManagerLinuxSubscriptions/SubscriptionProviderProperties
### Properties
* **LastSuccessfulDataRetrievalTime**: string (ReadOnly): The timestamp from the last time that License Manager retrieved subscription details from the registered third-party Linux subscription provider.
* **SecretArn**: string (Required): The Amazon Resource Name (ARN) of the Secrets Manager secret that contains the access token for the third-party Linux subscription provider.
* **SubscriptionProviderArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the Linux subscription provider resource that you registered.
* **SubscriptionProviderSource**: string (Required): The Linux subscription provider that the registration is for.
* **SubscriptionProviderStatus**: string (ReadOnly): The status of the third-party subscription provider access token from the last subscription data request.
* **SubscriptionProviderStatusMessage**: string (ReadOnly): A message that describes the status of the third-party subscription provider access token.
* **Tags**: [Tag](#tag)[]: The metadata tags assigned to the registered subscription provider.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

