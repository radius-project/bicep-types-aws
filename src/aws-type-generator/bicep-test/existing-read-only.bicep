// expect: none
extension aws

resource model 'AWS.Bedrock/FoundationModel@default' existing = {
  alias: 'model'
  properties: {
    ModelArn: 'arn:aws:bedrock:us-west-2::foundation-model/amazon.titan-text-express-v1'
  }
}

output modelName string = model.properties.ModelName
