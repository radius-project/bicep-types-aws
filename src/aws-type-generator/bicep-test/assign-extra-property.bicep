// expect: BCP073
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
    BootstrapBrokerStringSaslIam: 'broker-1:9098'
  }
}
