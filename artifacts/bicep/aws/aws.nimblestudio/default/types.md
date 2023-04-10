# AWS.NimbleStudio @ default

## Resource AWS.NimbleStudio/LaunchProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NimbleStudio/LaunchProfileProperties](#awsnimblestudiolaunchprofileproperties) (Required): properties of the resource

## Resource AWS.NimbleStudio/StreamingImage@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NimbleStudio/StreamingImageProperties](#awsnimblestudiostreamingimageproperties) (Required): properties of the resource

## Resource AWS.NimbleStudio/Studio@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NimbleStudio/StudioProperties](#awsnimblestudiostudioproperties) (Required): properties of the resource

## Resource AWS.NimbleStudio/StudioComponent@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NimbleStudio/StudioComponentProperties](#awsnimblestudiostudiocomponentproperties) (Required): properties of the resource

## AWS.NimbleStudio/LaunchProfileProperties
### Properties
* **Description**: string: <p>The description.</p>
* **Ec2SubnetIds**: string[] (Required): <p>Specifies the IDs of the EC2 subnets where streaming sessions will be accessible from.
            These subnets must support the specified instance types. </p>
* **LaunchProfileId**: string (ReadOnly, Identifier)
* **LaunchProfileProtocolVersions**: string[] (Required): <p>The version number of the protocol that is used by the launch profile. The only valid
            version is "2021-03-31".</p>
* **Name**: string (Required): <p>The name for the launch profile.</p>
* **StreamConfiguration**: [StreamConfiguration](#streamconfiguration) (Required)
* **StudioComponentIds**: string[] (Required): <p>Unique identifiers for a collection of studio components that can be used with this
            launch profile.</p>
* **StudioId**: string (Required, Identifier): <p>The studio ID. </p>
* **Tags**: [Tags](#tags)

## StreamConfiguration
### Properties
* **AutomaticTerminationMode**: string
* **ClipboardMode**: string (Required)
* **Ec2InstanceTypes**: string[] (Required): <p>The EC2 instance types that users can select from when launching a streaming session
            with this launch profile.</p>
* **MaxSessionLengthInMinutes**: int: <p>The length of time, in minutes, that a streaming session can be active before it is
            stopped or terminated. After this point, Nimble Studio automatically terminates or
            stops the session. The default length of time is 690 minutes, and the maximum length of
            time is 30 days.</p>
* **MaxStoppedSessionLengthInMinutes**: int: <p>Integer that determines if you can start and stop your sessions and how long a session
            can stay in the <code>STOPPED</code> state. The default value is 0. The maximum value is
            5760.</p>
         <p>This field is allowed only when <code>sessionPersistenceMode</code> is
                <code>ACTIVATED</code> and <code>automaticTerminationMode</code> is
                <code>ACTIVATED</code>.</p>
         <p>If the value is set to 0, your sessions can?t be <code>STOPPED</code>. If you then
            call <code>StopStreamingSession</code>, the session fails. If the time that a session
            stays in the <code>READY</code> state exceeds the <code>maxSessionLengthInMinutes</code>
            value, the session will automatically be terminated (instead of
            <code>STOPPED</code>).</p>
         <p>If the value is set to a positive number, the session can be stopped. You can call
                <code>StopStreamingSession</code> to stop sessions in the <code>READY</code> state.
            If the time that a session stays in the <code>READY</code> state exceeds the
                <code>maxSessionLengthInMinutes</code> value, the session will automatically be
            stopped (instead of terminated).</p>
* **SessionBackup**: [StreamConfigurationSessionBackup](#streamconfigurationsessionbackup)
* **SessionPersistenceMode**: string
* **SessionStorage**: [StreamConfigurationSessionStorage](#streamconfigurationsessionstorage)
* **StreamingImageIds**: string[] (Required): <p>The streaming images that users can select from when launching a streaming session
            with this launch profile.</p>
* **VolumeConfiguration**: [VolumeConfiguration](#volumeconfiguration)

## StreamConfigurationSessionBackup
### Properties
* **MaxBackupsToRetain**: int: <p>The maximum number of backups that each streaming session created from this launch
            profile can have.</p>
* **Mode**: string

## StreamConfigurationSessionStorage
### Properties
* **Mode**: string[] (Required): <p>Allows artists to upload files to their workstations. The only valid option is
                <code>UPLOAD</code>.</p>
* **Root**: [StreamingSessionStorageRoot](#streamingsessionstorageroot)

## StreamingSessionStorageRoot
### Properties
* **Linux**: string: <p>The folder path in Linux workstations where files are uploaded.</p>
* **Windows**: string: <p>The folder path in Windows workstations where files are uploaded.</p>

## VolumeConfiguration
### Properties
* **Iops**: int: <p>The number of I/O operations per second for the root volume that is attached to
            streaming session.</p>
* **Size**: int: <p>The size of the root volume that is attached to the streaming session. The root volume
            size is measured in GiBs.</p>
* **Throughput**: int: <p>The throughput to provision for the root volume that is attached to the streaming
            session. The throughput is measured in MiB/s.</p>

## Tags
### Properties

## AWS.NimbleStudio/StreamingImageProperties
### Properties
* **Description**: string: <p>A human-readable description of the streaming image.</p>
* **Ec2ImageId**: string (Required): <p>The ID of an EC2 machine image with which to create this streaming image.</p>
* **EncryptionConfiguration**: [StreamingImageEncryptionConfiguration](#streamingimageencryptionconfiguration) (ReadOnly)
* **EulaIds**: string[] (ReadOnly): <p>The list of EULAs that must be accepted before a Streaming Session can be started using this streaming image.</p>
* **Name**: string (Required): <p>A friendly name for a streaming image resource.</p>
* **Owner**: string (ReadOnly): <p>The owner of the streaming image, either the studioId that contains the streaming image, or 'amazon' for images that are provided by Amazon Nimble Studio.</p>
* **Platform**: string (ReadOnly): <p>The platform of the streaming image, either WINDOWS or LINUX.</p>
* **StreamingImageId**: string (ReadOnly, Identifier)
* **StudioId**: string (Required, Identifier): <p>The studioId. </p>
* **Tags**: [Tags](#tags)

## StreamingImageEncryptionConfiguration
### Properties
* **KeyArn**: string: <p>The ARN for a KMS key that is used to encrypt studio data.</p>
* **KeyType**: string (Required)

## Tags
### Properties

## AWS.NimbleStudio/StudioProperties
### Properties
* **AdminRoleArn**: string (Required): <p>The IAM role that Studio Admins will assume when logging in to the Nimble Studio portal.</p>
* **DisplayName**: string (Required): <p>A friendly name for the studio.</p>
* **HomeRegion**: string (ReadOnly): <p>The Amazon Web Services Region where the studio resource is located.</p>
* **SsoClientId**: string (ReadOnly): <p>The Amazon Web Services SSO application client ID used to integrate with Amazon Web Services SSO to enable Amazon Web Services SSO users to log in to Nimble Studio portal.</p>
* **StudioEncryptionConfiguration**: [StudioEncryptionConfiguration](#studioencryptionconfiguration)
* **StudioId**: string (ReadOnly, Identifier)
* **StudioName**: string (Required): <p>The studio name that is used in the URL of the Nimble Studio portal when accessed by Nimble Studio users.</p>
* **StudioUrl**: string (ReadOnly): <p>The address of the web page for the studio.</p>
* **Tags**: [Tags](#tags)
* **UserRoleArn**: string (Required): <p>The IAM role that Studio Users will assume when logging in to the Nimble Studio portal.</p>

## StudioEncryptionConfiguration
### Properties
* **KeyArn**: string: <p>The ARN for a KMS key that is used to encrypt studio data.</p>
* **KeyType**: string (Required)

## Tags
### Properties

## AWS.NimbleStudio/StudioComponentProperties
### Properties
* **Configuration**: [StudioComponentConfiguration](#studiocomponentconfiguration)
* **Description**: string: <p>The description.</p>
* **Ec2SecurityGroupIds**: string[]: <p>The EC2 security groups that control access to the studio component.</p>
* **InitializationScripts**: [StudioComponentInitializationScript](#studiocomponentinitializationscript)[]: <p>Initialization scripts for studio components.</p>
* **Name**: string (Required): <p>The name for the studio component.</p>
* **RuntimeRoleArn**: string
* **ScriptParameters**: [ScriptParameterKeyValue](#scriptparameterkeyvalue)[]: <p>Parameters for the studio component scripts.</p>
* **SecureInitializationRoleArn**: string
* **StudioComponentId**: string (ReadOnly, Identifier)
* **StudioId**: string (Required, Identifier): <p>The studio ID. </p>
* **Subtype**: string
* **Tags**: [Tags](#tags)
* **Type**: string (Required)

## StudioComponentConfiguration
### Properties

## StudioComponentInitializationScript
### Properties
* **LaunchProfileProtocolVersion**: string: <p>The version number of the protocol that is used by the launch profile. The only valid
            version is "2021-03-31".</p>
* **Platform**: string
* **RunContext**: string
* **Script**: string: <p>The initialization script.</p>

## ScriptParameterKeyValue
### Properties
* **Key**: string: <p>A script parameter key.</p>
* **Value**: string: <p>A script parameter value.</p>

## Tags
### Properties

