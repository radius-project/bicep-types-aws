# AWS.Shield @ default

## Resource AWS.Shield/DRTAccess@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Shield/DRTAccessProperties](#awsshielddrtaccessproperties) (Required): properties of the resource

## Resource AWS.Shield/ProactiveEngagement@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Shield/ProactiveEngagementProperties](#awsshieldproactiveengagementproperties) (Required): properties of the resource

## Resource AWS.Shield/Protection@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Shield/ProtectionProperties](#awsshieldprotectionproperties) (Required): properties of the resource

## Resource AWS.Shield/ProtectionGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Shield/ProtectionGroupProperties](#awsshieldprotectiongroupproperties) (Required): properties of the resource

## AWS.Shield/DRTAccessProperties
### Properties
* **AccountId**: string (ReadOnly, Identifier)
* **LogBucketList**: string[]: Authorizes the Shield Response Team (SRT) to access the specified Amazon S3 bucket containing log data such as Application Load Balancer access logs, CloudFront logs, or logs from third party sources. You can associate up to 10 Amazon S3 buckets with your subscription.
* **RoleArn**: string (Required): Authorizes the Shield Response Team (SRT) using the specified role, to access your AWS account to assist with DDoS attack mitigation during potential attacks. This enables the SRT to inspect your AWS WAF configuration and create or update AWS WAF rules and web ACLs.

## AWS.Shield/ProactiveEngagementProperties
### Properties
* **AccountId**: string (ReadOnly, Identifier)
* **EmergencyContactList**: [EmergencyContact](#emergencycontact)[] (Required): A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you for escalations to the SRT and to initiate proactive customer support.
To enable proactive engagement, the contact list must include at least one phone number.
* **ProactiveEngagementStatus**: string (Required): If `ENABLED`, the Shield Response Team (SRT) will use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.
If `DISABLED`, the SRT will not proactively notify contacts about escalations or to initiate proactive customer support.

## EmergencyContact
### Properties
* **ContactNotes**: string: Additional notes regarding the contact.
* **EmailAddress**: string (Required): The email address for the contact.
* **PhoneNumber**: string: The phone number for the contact

## AWS.Shield/ProtectionProperties
### Properties
* **ApplicationLayerAutomaticResponseConfiguration**: [ApplicationLayerAutomaticResponseConfiguration](#applicationlayerautomaticresponseconfiguration)
* **HealthCheckArns**: string[]: The Amazon Resource Names (ARNs) of the health check to associate with the protection.
* **Name**: string (Required): Friendly name for the Protection.
* **ProtectionArn**: string (ReadOnly, Identifier): The ARN (Amazon Resource Name) of the protection.
* **ProtectionId**: string (ReadOnly): The unique identifier (ID) of the protection.
* **ResourceArn**: string (Required): The ARN (Amazon Resource Name) of the resource to be protected.
* **Tags**: [Tag](#tag)[]: One or more tag key-value pairs for the Protection object.

## ApplicationLayerAutomaticResponseConfiguration
### Properties
* **Action**: [Protection_Action](#protectionaction) (Required): Specifies the action setting that Shield Advanced should use in the AWS WAF rules that it creates on behalf of the protected resource in response to DDoS attacks. You specify this as part of the configuration for the automatic application layer DDoS mitigation feature, when you enable or update automatic mitigation. Shield Advanced creates the AWS WAF rules in a Shield Advanced-managed rule group, inside the web ACL that you have associated with the resource.
* **Status**: string (Required): Indicates whether automatic application layer DDoS mitigation is enabled for the protection.

## Protection_Action
### Properties

## Tag
### Properties
* **Key**: string (Required): Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.
* **Value**: string (Required): Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.

## AWS.Shield/ProtectionGroupProperties
### Properties
* **Aggregation**: string (Required): Defines how AWS Shield combines resource data for the group in order to detect, mitigate, and report events.
* Sum - Use the total traffic across the group. This is a good choice for most cases. Examples include Elastic IP addresses for EC2 instances that scale manually or automatically.
* Mean - Use the average of the traffic across the group. This is a good choice for resources that share traffic uniformly. Examples include accelerators and load balancers.
* Max - Use the highest traffic from each resource. This is useful for resources that don't share traffic and for resources that share that traffic in a non-uniform way. Examples include Amazon CloudFront and origin resources for CloudFront distributions.
* **Members**: string[]: The Amazon Resource Names (ARNs) of the resources to include in the protection group. You must set this when you set `Pattern` to `ARBITRARY` and you must not set it for any other `Pattern` setting.
* **Pattern**: string (Required): The criteria to use to choose the protected resources for inclusion in the group. You can include all resources that have protections, provide a list of resource Amazon Resource Names (ARNs), or include all resources of a specified resource type.
* **ProtectionGroupArn**: string (ReadOnly, Identifier): The ARN (Amazon Resource Name) of the protection group.
* **ProtectionGroupId**: string (Required): The name of the protection group. You use this to identify the protection group in lists and to manage the protection group, for example to update, delete, or describe it.
* **ResourceType**: string: The resource type to include in the protection group. All protected resources of this type are included in the protection group. Newly protected resources of this type are automatically added to the group. You must set this when you set `Pattern` to `BY_RESOURCE_TYPE` and you must not set it for any other `Pattern` setting.
* **Tags**: [Tag](#tag)[]: One or more tag key-value pairs for the Protection object.

## Tag
### Properties
* **Key**: string (Required): Part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.
* **Value**: string (Required): Part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.

