# AWS.PricingPlanManager @ default

## Resource AWS.PricingPlanManager/Subscription@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.PricingPlanManager/SubscriptionProperties](#awspricingplanmanagersubscriptionproperties) (Required, Identifier): properties of the resource

## AWS.PricingPlanManager/SubscriptionProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the subscription.
* **CreatedAt**: string (ReadOnly): The time the subscription was created, in ISO 8601 format.
* **CurrentPlanTier**: string (ReadOnly): The plan tier currently active on the subscription as reported by the API. Populated by the Read handler. Diverges from PlanTier after a non-reversible CloudFormation rollback; surface via drift detection.
* **PlanFamily**: string (Required): The name of the pricing plan family.
* **PlanTier**: string (Required): The tier of the pricing plan. CloudFormation does not change the tier of an existing subscription; a stack update that changes the tier, upgrading or downgrading it, is rejected.
* **ResourceArns**: string[] (Required): The ARNs of resources associated with the subscription.
* **Status**: string (ReadOnly): The status of the subscription. PENDING_APPROVAL means a paid-tier subscription has been created but is not yet active and incurs no charges until it is approved out of band via a separate ApprovePaidSubscription call; CloudFormation never approves it. Free-tier subscriptions are activated immediately and do not use this status. ACTIVE means the subscription is in effect and, for paid tiers, billing has started. SYNC_IN_PROGRESS means a change is being applied. FAILED means provisioning did not complete; see StatusReason.
* **StatusReason**: string (ReadOnly): A human-readable explanation of why the subscription is in its current status. Populated only when Status is FAILED, where it carries the reason the subscription could not be provisioned. Empty for all other statuses.
* **UpdatedAt**: string (ReadOnly): The time the subscription was last modified, in ISO 8601 format.
* **UsageLevel**: string

