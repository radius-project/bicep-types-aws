# AWS.Cognito @ default

## Resource AWS.Cognito/IdentityPool@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cognito/IdentityPoolProperties](#awscognitoidentitypoolproperties) (Required, Identifier): properties of the resource

## Resource AWS.Cognito/IdentityPoolPrincipalTag@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cognito/IdentityPoolPrincipalTagProperties](#awscognitoidentitypoolprincipaltagproperties) (Required, Identifier): properties of the resource

## Resource AWS.Cognito/IdentityPoolRoleAttachment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cognito/IdentityPoolRoleAttachmentProperties](#awscognitoidentitypoolroleattachmentproperties) (Required, Identifier): properties of the resource

## Resource AWS.Cognito/LogDeliveryConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cognito/LogDeliveryConfigurationProperties](#awscognitologdeliveryconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.Cognito/ManagedLoginBranding@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cognito/ManagedLoginBrandingProperties](#awscognitomanagedloginbrandingproperties) (Required, Identifier): properties of the resource

## Resource AWS.Cognito/UserPool@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cognito/UserPoolProperties](#awscognitouserpoolproperties) (Identifier): properties of the resource

## Resource AWS.Cognito/UserPoolClient@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cognito/UserPoolClientProperties](#awscognitouserpoolclientproperties) (Required, Identifier): properties of the resource

## Resource AWS.Cognito/UserPoolGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cognito/UserPoolGroupProperties](#awscognitouserpoolgroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.Cognito/UserPoolIdentityProvider@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cognito/UserPoolIdentityProviderProperties](#awscognitouserpoolidentityproviderproperties) (Required, Identifier): properties of the resource

## Resource AWS.Cognito/UserPoolResourceServer@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cognito/UserPoolResourceServerProperties](#awscognitouserpoolresourceserverproperties) (Required, Identifier): properties of the resource

## Resource AWS.Cognito/UserPoolRiskConfigurationAttachment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cognito/UserPoolRiskConfigurationAttachmentProperties](#awscognitouserpoolriskconfigurationattachmentproperties) (Required, Identifier): properties of the resource

## Resource AWS.Cognito/UserPoolUICustomizationAttachment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cognito/UserPoolUICustomizationAttachmentProperties](#awscognitouserpooluicustomizationattachmentproperties) (Required, Identifier): properties of the resource

## AccountRecoverySetting
### Properties
* **RecoveryMechanisms**: [RecoveryOption](#recoveryoption)[]

## AccountTakeoverActionsType
### Properties
* **HighAction**: [AccountTakeoverActionType](#accounttakeoveractiontype)
* **LowAction**: [AccountTakeoverActionType](#accounttakeoveractiontype)
* **MediumAction**: [AccountTakeoverActionType](#accounttakeoveractiontype)

## AccountTakeoverActionType
### Properties
* **EventAction**: string (Required)
* **Notify**: bool (Required)

## AccountTakeoverRiskConfigurationType
### Properties
* **Actions**: [AccountTakeoverActionsType](#accounttakeoveractionstype) (Required)
* **NotifyConfiguration**: [NotifyConfigurationType](#notifyconfigurationtype)

## AdminCreateUserConfig
### Properties
* **AllowAdminCreateUserOnly**: bool
* **InviteMessageTemplate**: [InviteMessageTemplate](#invitemessagetemplate)
* **UnusedAccountValidityDays**: int

## AdvancedSecurityAdditionalFlows
### Properties
* **CustomAuthMode**: string

## AnalyticsConfiguration
### Properties
* **ApplicationArn**: string
* **ApplicationId**: string
* **ExternalId**: string
* **RoleArn**: string
* **UserDataShared**: bool

## AssetType
### Properties
* **Bytes**: string
* **Category**: string (Required)
* **ColorMode**: string (Required)
* **Extension**: string (Required)
* **ResourceId**: string

## AWS.Cognito/IdentityPoolPrincipalTagProperties
### Properties
* **IdentityPoolId**: string (Required, Identifier)
* **IdentityProviderName**: string (Required, Identifier)
* **PrincipalTags**: [IdentityPoolPrincipalTag_PrincipalTags](#identitypoolprincipaltagprincipaltags)
* **UseDefaults**: bool

## AWS.Cognito/IdentityPoolProperties
### Properties
* **AllowClassicFlow**: bool
* **AllowUnauthenticatedIdentities**: bool (Required)
* **CognitoEvents**: [IdentityPool_CognitoEvents](#identitypoolcognitoevents) (WriteOnly)
* **CognitoIdentityProviders**: [CognitoIdentityProvider](#cognitoidentityprovider)[]
* **CognitoStreams**: [CognitoStreams](#cognitostreams) (WriteOnly)
* **DeveloperProviderName**: string
* **Id**: string (ReadOnly, Identifier)
* **IdentityPoolName**: string
* **IdentityPoolTags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Name**: string (ReadOnly)
* **OpenIdConnectProviderARNs**: string[]
* **PushSync**: [PushSync](#pushsync) (WriteOnly)
* **SamlProviderARNs**: string[]
* **SupportedLoginProviders**: [IdentityPool_SupportedLoginProviders](#identitypoolsupportedloginproviders)

## AWS.Cognito/IdentityPoolRoleAttachmentProperties
### Properties
* **Id**: string (ReadOnly, Identifier)
* **IdentityPoolId**: string (Required)
* **RoleMappings**: [IdentityPoolRoleAttachment_RoleMappings](#identitypoolroleattachmentrolemappings)
* **Roles**: [IdentityPoolRoleAttachment_Roles](#identitypoolroleattachmentroles)

## AWS.Cognito/LogDeliveryConfigurationProperties
### Properties
* **Id**: string (ReadOnly, Identifier)
* **LogConfigurations**: [LogConfiguration](#logconfiguration)[]
* **UserPoolId**: string (Required)

## AWS.Cognito/ManagedLoginBrandingProperties
### Properties
* **Assets**: [AssetType](#assettype)[]
* **ClientId**: string (WriteOnly)
* **ManagedLoginBrandingId**: string (ReadOnly, Identifier)
* **ReturnMergedResources**: bool (WriteOnly)
* **Settings**: [ManagedLoginBranding_Settings](#managedloginbrandingsettings)
* **UseCognitoProvidedValues**: bool
* **UserPoolId**: string (Required, Identifier)

## AWS.Cognito/UserPoolClientProperties
### Properties
* **AccessTokenValidity**: int
* **AllowedOAuthFlows**: string[]
* **AllowedOAuthFlowsUserPoolClient**: bool
* **AllowedOAuthScopes**: string[]
* **AnalyticsConfiguration**: [AnalyticsConfiguration](#analyticsconfiguration)
* **AuthSessionValidity**: int
* **CallbackURLs**: string[]
* **ClientId**: string (ReadOnly, Identifier)
* **ClientName**: string
* **ClientSecret**: string (ReadOnly)
* **DefaultRedirectURI**: string
* **EnablePropagateAdditionalUserContextData**: bool
* **EnableTokenRevocation**: bool
* **ExplicitAuthFlows**: string[]
* **GenerateSecret**: bool
* **IdTokenValidity**: int
* **LogoutURLs**: string[]
* **Name**: string (ReadOnly)
* **PreventUserExistenceErrors**: string
* **ReadAttributes**: string[]
* **RefreshTokenValidity**: int
* **SupportedIdentityProviders**: string[]
* **TokenValidityUnits**: [TokenValidityUnits](#tokenvalidityunits)
* **UserPoolId**: string (Required, Identifier)
* **WriteAttributes**: string[]

## AWS.Cognito/UserPoolGroupProperties
### Properties
* **Description**: string
* **GroupName**: string (Identifier)
* **Precedence**: int
* **RoleArn**: string
* **UserPoolId**: string (Required, Identifier)

## AWS.Cognito/UserPoolIdentityProviderProperties
### Properties
* **AttributeMapping**: [UserPoolIdentityProvider_AttributeMapping](#userpoolidentityproviderattributemapping)
* **IdpIdentifiers**: string[]
* **ProviderDetails**: [UserPoolIdentityProvider_ProviderDetails](#userpoolidentityproviderproviderdetails) (Required)
* **ProviderName**: string (Required, Identifier)
* **ProviderType**: string (Required)
* **UserPoolId**: string (Required, Identifier)

## AWS.Cognito/UserPoolProperties
### Properties
* **AccountRecoverySetting**: [AccountRecoverySetting](#accountrecoverysetting)
* **AdminCreateUserConfig**: [AdminCreateUserConfig](#admincreateuserconfig)
* **AliasAttributes**: string[]
* **Arn**: string (ReadOnly)
* **AutoVerifiedAttributes**: string[]
* **DeletionProtection**: string
* **DeviceConfiguration**: [DeviceConfiguration](#deviceconfiguration)
* **EmailAuthenticationMessage**: string
* **EmailAuthenticationSubject**: string
* **EmailConfiguration**: [EmailConfiguration](#emailconfiguration)
* **EmailVerificationMessage**: string
* **EmailVerificationSubject**: string
* **EnabledMfas**: string[] (WriteOnly)
* **LambdaConfig**: [LambdaConfig](#lambdaconfig)
* **MfaConfiguration**: string
* **Policies**: [Policies](#policies)
* **ProviderName**: string (ReadOnly)
* **ProviderURL**: string (ReadOnly)
* **Schema**: [SchemaAttribute](#schemaattribute)[]
* **SmsAuthenticationMessage**: string
* **SmsConfiguration**: [SmsConfiguration](#smsconfiguration)
* **SmsVerificationMessage**: string
* **UserAttributeUpdateSettings**: [UserAttributeUpdateSettings](#userattributeupdatesettings)
* **UsernameAttributes**: string[]
* **UsernameConfiguration**: [UsernameConfiguration](#usernameconfiguration)
* **UserPoolAddOns**: [UserPoolAddOns](#userpooladdons)
* **UserPoolId**: string (ReadOnly, Identifier)
* **UserPoolName**: string
* **UserPoolTags**: [UserPool_UserPoolTags](#userpooluserpooltags)
* **UserPoolTier**: string
* **VerificationMessageTemplate**: [VerificationMessageTemplate](#verificationmessagetemplate)
* **WebAuthnRelyingPartyID**: string
* **WebAuthnUserVerification**: string

## AWS.Cognito/UserPoolResourceServerProperties
### Properties
* **Identifier**: string (Required, Identifier)
* **Name**: string (Required)
* **Scopes**: [ResourceServerScopeType](#resourceserverscopetype)[]
* **UserPoolId**: string (Required, Identifier)

## AWS.Cognito/UserPoolRiskConfigurationAttachmentProperties
### Properties
* **AccountTakeoverRiskConfiguration**: [AccountTakeoverRiskConfigurationType](#accounttakeoverriskconfigurationtype)
* **ClientId**: string (Required, Identifier)
* **CompromisedCredentialsRiskConfiguration**: [CompromisedCredentialsRiskConfigurationType](#compromisedcredentialsriskconfigurationtype)
* **RiskExceptionConfiguration**: [RiskExceptionConfigurationType](#riskexceptionconfigurationtype)
* **UserPoolId**: string (Required, Identifier)

## AWS.Cognito/UserPoolUICustomizationAttachmentProperties
### Properties
* **ClientId**: string (Required, Identifier)
* **CSS**: string
* **UserPoolId**: string (Required, Identifier)

## CloudWatchLogsConfiguration
### Properties
* **LogGroupArn**: string

## CognitoIdentityProvider
### Properties
* **ClientId**: string (Required)
* **ProviderName**: string (Required)
* **ServerSideTokenCheck**: bool

## CognitoStreams
### Properties
* **RoleArn**: string
* **StreamingStatus**: string
* **StreamName**: string

## CompromisedCredentialsActionsType
### Properties
* **EventAction**: string (Required)

## CompromisedCredentialsRiskConfigurationType
### Properties
* **Actions**: [CompromisedCredentialsActionsType](#compromisedcredentialsactionstype) (Required)
* **EventFilter**: string[]

## CustomEmailSender
### Properties
* **LambdaArn**: string
* **LambdaVersion**: string

## CustomSMSSender
### Properties
* **LambdaArn**: string
* **LambdaVersion**: string

## DeviceConfiguration
### Properties
* **ChallengeRequiredOnNewDevice**: bool
* **DeviceOnlyRememberedOnUserPrompt**: bool

## EmailConfiguration
### Properties
* **ConfigurationSet**: string
* **EmailSendingAccount**: string
* **From**: string
* **ReplyToEmailAddress**: string
* **SourceArn**: string

## FirehoseConfiguration
### Properties
* **StreamArn**: string

## IdentityPool_CognitoEvents
### Properties

## IdentityPool_SupportedLoginProviders
### Properties

## IdentityPoolPrincipalTag_PrincipalTags
### Properties

## IdentityPoolRoleAttachment_RoleMappings
### Properties

## IdentityPoolRoleAttachment_Roles
### Properties

## InviteMessageTemplate
### Properties
* **EmailMessage**: string
* **EmailSubject**: string
* **SMSMessage**: string

## LambdaConfig
### Properties
* **CreateAuthChallenge**: string
* **CustomEmailSender**: [CustomEmailSender](#customemailsender)
* **CustomMessage**: string
* **CustomSMSSender**: [CustomSMSSender](#customsmssender)
* **DefineAuthChallenge**: string
* **KMSKeyID**: string
* **PostAuthentication**: string
* **PostConfirmation**: string
* **PreAuthentication**: string
* **PreSignUp**: string
* **PreTokenGeneration**: string
* **PreTokenGenerationConfig**: [PreTokenGenerationConfig](#pretokengenerationconfig)
* **UserMigration**: string
* **VerifyAuthChallengeResponse**: string

## LogConfiguration
### Properties
* **CloudWatchLogsConfiguration**: [CloudWatchLogsConfiguration](#cloudwatchlogsconfiguration)
* **EventSource**: string
* **FirehoseConfiguration**: [FirehoseConfiguration](#firehoseconfiguration)
* **LogLevel**: string
* **S3Configuration**: [S3Configuration](#s3configuration)

## ManagedLoginBranding_Settings
### Properties

## NotifyConfigurationType
### Properties
* **BlockEmail**: [NotifyEmailType](#notifyemailtype)
* **From**: string
* **MfaEmail**: [NotifyEmailType](#notifyemailtype)
* **NoActionEmail**: [NotifyEmailType](#notifyemailtype)
* **ReplyTo**: string
* **SourceArn**: string (Required)

## NotifyEmailType
### Properties
* **HtmlBody**: string
* **Subject**: string (Required)
* **TextBody**: string

## NumberAttributeConstraints
### Properties
* **MaxValue**: string
* **MinValue**: string

## PasswordPolicy
### Properties
* **MinimumLength**: int
* **PasswordHistorySize**: int
* **RequireLowercase**: bool
* **RequireNumbers**: bool
* **RequireSymbols**: bool
* **RequireUppercase**: bool
* **TemporaryPasswordValidityDays**: int

## Policies
### Properties
* **PasswordPolicy**: [PasswordPolicy](#passwordpolicy)
* **SignInPolicy**: [SignInPolicy](#signinpolicy)

## PreTokenGenerationConfig
### Properties
* **LambdaArn**: string
* **LambdaVersion**: string

## PushSync
### Properties
* **ApplicationArns**: string[]
* **RoleArn**: string

## RecoveryOption
### Properties
* **Name**: string
* **Priority**: int

## ResourceServerScopeType
### Properties
* **ScopeDescription**: string (Required)
* **ScopeName**: string (Required)

## RiskExceptionConfigurationType
### Properties
* **BlockedIPRangeList**: string[]
* **SkippedIPRangeList**: string[]

## S3Configuration
### Properties
* **BucketArn**: string

## SchemaAttribute
### Properties
* **AttributeDataType**: string
* **DeveloperOnlyAttribute**: bool
* **Mutable**: bool
* **Name**: string
* **NumberAttributeConstraints**: [NumberAttributeConstraints](#numberattributeconstraints)
* **Required**: bool
* **StringAttributeConstraints**: [StringAttributeConstraints](#stringattributeconstraints)

## SignInPolicy
### Properties
* **AllowedFirstAuthFactors**: string[]

## SmsConfiguration
### Properties
* **ExternalId**: string
* **SnsCallerArn**: string
* **SnsRegion**: string

## StringAttributeConstraints
### Properties
* **MaxLength**: string
* **MinLength**: string

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## TokenValidityUnits
### Properties
* **AccessToken**: string
* **IdToken**: string
* **RefreshToken**: string

## UserAttributeUpdateSettings
### Properties
* **AttributesRequireVerificationBeforeUpdate**: string[] (Required)

## UsernameConfiguration
### Properties
* **CaseSensitive**: bool

## UserPool_UserPoolTags
### Properties

## UserPoolAddOns
### Properties
* **AdvancedSecurityAdditionalFlows**: [AdvancedSecurityAdditionalFlows](#advancedsecurityadditionalflows)
* **AdvancedSecurityMode**: string

## UserPoolIdentityProvider_AttributeMapping
### Properties

## UserPoolIdentityProvider_ProviderDetails
### Properties

## VerificationMessageTemplate
### Properties
* **DefaultEmailOption**: string
* **EmailMessage**: string
* **EmailMessageByLink**: string
* **EmailSubject**: string
* **EmailSubjectByLink**: string
* **SmsMessage**: string

