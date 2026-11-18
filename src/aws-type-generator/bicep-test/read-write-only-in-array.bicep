// expect: BCP077
extension aws

resource channel 'AWS.MediaLive/Channel@default' existing = {
  alias: 'channel'
}

output key string = channel.properties.EncoderSettings.OutputGroups[0].OutputGroupSettings.HlsGroupSettings.KeyProviderSettings.StaticKeySettings.StaticKeyValue
output salt string = channel.properties.EncoderSettings.OutputGroups[0].OutputGroupSettings.HlsGroupSettings.HlsCdnSettings.HlsAkamaiSettings.Salt
