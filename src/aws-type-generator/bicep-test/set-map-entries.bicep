// expect: none
extension aws

resource settings 'AWS.LakeFormation/DataLakeSettings@default' = {
  alias: 'lake-settings'
  properties: {
    Parameters: {
      CROSS_ACCOUNT_VERSION: '4'
    }
  }
}

resource cluster 'AWS.MSK/ServerlessCluster@default' = {
  alias: 'kafka'
  properties: {
    ClusterName: 'kafka'
    ClientAuthentication: {
      Sasl: {
        Iam: {
          Enabled: true
        }
      }
    }
    VpcConfigs: [
      {
        SubnetIds: ['subnet-0123456789abcdef0']
      }
    ]
    Tags: {
      team: 'payments'
    }
  }
}
