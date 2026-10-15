extension aws

resource bucket 'AWS.S3/Bucket@default' = {
  alias: 'aws'
  properties: {
    BucketName: 'bicep-publication-fixture'
  }
}

output bucketName string = bucket.properties.BucketName
