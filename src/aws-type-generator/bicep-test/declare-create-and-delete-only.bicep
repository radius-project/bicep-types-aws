// expect: none
extension aws

resource group 'AWS.EC2/PlacementGroup@default' = {
  alias: 'cluster-group'
  properties: {
    Strategy: 'cluster'
  }
}
