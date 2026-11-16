// expect: none
extension aws

resource channel 'AWS.MediaLive/Channel@default' existing = {
  alias: 'channel'
}

output groups array = channel.properties.EncoderSettings.OutputGroups
output name string = channel.properties.EncoderSettings.OutputGroups[0].Name
output token string = channel.properties.EncoderSettings.OutputGroups[0].OutputGroupSettings.HlsGroupSettings.HlsCdnSettings.HlsAkamaiSettings.Token
