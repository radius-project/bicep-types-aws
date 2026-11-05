// expect: BCP245 BCP246
extension aws

resource model 'AWS.Bedrock/FoundationModel@default' = {
  alias: 'model'
  properties: {
    ModelArn: 'arn:aws:bedrock:us-west-2::foundation-model/amazon.titan-text-express-v1'
  }
}
