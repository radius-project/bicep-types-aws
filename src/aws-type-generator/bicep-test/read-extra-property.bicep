// expect: none
extension aws

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
  }
}

output brokers string = cluster.properties.BootstrapBrokerStringSaslIam
