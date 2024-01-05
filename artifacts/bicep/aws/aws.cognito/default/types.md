# AWS.Cognito @ default

## Resource AWS.Cognito/IdentityPoolPrincipalTag@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cognito/IdentityPoolPrincipalTagProperties](#awscognitoidentitypoolprincipaltagproperties) (Required): properties of the resource

## Resource AWS.Cognito/LogDeliveryConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cognito/LogDeliveryConfigurationProperties](#awscognitologdeliveryconfigurationproperties) (Required): properties of the resource

## Resource AWS.Cognito/UserPool@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cognito/UserPoolProperties](#awscognitouserpoolproperties): properties of the resource

## Resource AWS.Cognito/UserPoolClient@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cognito/UserPoolClientProperties](#awscognitouserpoolclientproperties) (Required): properties of the resource

## Resource AWS.Cognito/UserPoolGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cognito/UserPoolGroupProperties](#awscognitouserpoolgroupproperties) (Required): properties of the resource

## AWS.Cognito/IdentityPoolPrincipalTagProperties
### Properties
* **IdentityPoolId**: string (Required, Identifier)
* **IdentityProviderName**: string (Required, Identifier)
* **PrincipalTags**: [IdentityPoolPrincipalTag_PrincipalTags](#identitypoolprincipaltagprincipaltags)
* **UseDefaults**: bool

## IdentityPoolPrincipalTag_PrincipalTags
### Properties

## AWS.Cognito/LogDeliveryConfigurationProperties
### Properties
* **Id**: string (ReadOnly, Identifier)
* **LogConfigurations**: [LogConfiguration](#logconfiguration)[]
* **UserPoolId**: string (Required)

## LogConfiguration
### Properties
* **CloudWatchLogsConfiguration**: [CloudWatchLogsConfiguration](#cloudwatchlogsconfiguration)
* **EventSource**: string
* **LogLevel**: string

## CloudWatchLogsConfiguration
### Properties
* **LogGroupArn**: string

## AWS.Cognito/UserPoolProperties
### Properties
* **AccountRecoverySetting**: [AccountRecoverySetting](#accountrecoverysetting)
* **AdminCreateUserConfig**: [AdminCreateUserConfig](#admincreateuserconfig)
* **AliasAttributes**: string[]
* **Arn**: string (ReadOnly)
* **AutoVerifiedAttributes**: string[]
* **DeletionProtection**: string
* **DeviceConfiguration**: [DeviceConfiguration](#deviceconfiguration)
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
* **VerificationMessageTemplate**: [VerificationMessageTemplate](#verificationmessagetemplate)

## AccountRecoverySetting
### Properties
* **RecoveryMechanisms**: [RecoveryOption](#recoveryoption)[]

## RecoveryOption
### Properties
* **Name**: string
* **Priority**: int

## AdminCreateUserConfig
### Properties
* **AllowAdminCreateUserOnly**: bool
* **InviteMessageTemplate**: [InviteMessageTemplate](#invitemessagetemplate)
* **UnusedAccountValidityDays**: int

## InviteMessageTemplate
### Properties
* **EmailMessage**: string
* **EmailSubject**: string
* **SMSMessage**: string

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

## CustomEmailSender
### Properties
* **LambdaArn**: string
* **LambdaVersion**: string

## CustomSMSSender
### Properties
* **LambdaArn**: string
* **LambdaVersion**: string

## PreTokenGenerationConfig
### Properties
* **LambdaArn**: string
* **LambdaVersion**: string

## Policies
### Properties
* **PasswordPolicy**: [PasswordPolicy](#passwordpolicy)

## PasswordPolicy
### Properties
* **MinimumLength**: int
* **RequireLowercase**: bool
* **RequireNumbers**: bool
* **RequireSymbols**: bool
* **RequireUppercase**: bool
* **TemporaryPasswordValidityDays**: int

## SchemaAttribute
### Properties
* **AttributeDataType**: string
* **DeveloperOnlyAttribute**: bool
* **Mutable**: bool
* **Name**: string
* **NumberAttributeConstraints**: [NumberAttributeConstraints](#numberattributeconstraints)
* **Required**: bool
* **StringAttributeConstraints**: [StringAttributeConstraints](#stringattributeconstraints)

## NumberAttributeConstraints
### Properties
* **MaxValue**: string
* **MinValue**: string

## StringAttributeConstraints
### Properties
* **MaxLength**: string
* **MinLength**: string

## SmsConfiguration
### Properties
* **ExternalId**: string
* **SnsCallerArn**: string
* **SnsRegion**: string

## UserAttributeUpdateSettings
### Properties
* **AttributesRequireVerificationBeforeUpdate**: string[] (Required)

## UsernameConfiguration
### Properties
* **CaseSensitive**: bool

## UserPoolAddOns
### Properties
* **AdvancedSecurityMode**: string

## UserPool_UserPoolTags
### Properties

## VerificationMessageTemplate
### Properties
* **DefaultEmailOption**: string
* **EmailMessage**: string
* **EmailMessageByLink**: string
* **EmailSubject**: string
* **EmailSubjectByLink**: string
* **SmsMessage**: string

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

## AnalyticsConfiguration
### Properties
* **ApplicationArn**: string
* **ApplicationId**: string
* **ExternalId**: string
* **RoleArn**: string
* **UserDataShared**: bool

## TokenValidityUnits
### Properties
* **AccessToken**: string
* **IdToken**: string
* **RefreshToken**: string

## AWS.Cognito/UserPoolGroupProperties
### Properties
* **Description**: string
* **GroupName**: string (Identifier)
* **Precedence**: int
* **RoleArn**: string
* **UserPoolId**: string (Required, Identifier)

