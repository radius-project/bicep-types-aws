// expect: none
extension aws

resource config 'AWS.S3/Object@default' = {
  alias: 'app-config'
  properties: {
    Bucket: 'contoso-config'
    Key: 'app.json'
    Body: 'eyJsb2dMZXZlbCI6ICJpbmZvIn0='
  }
}

output version string = config.properties.VersionId
