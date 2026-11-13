## Radius Bicep AWS limitations

### Identifiers AWS assigns

Some resource types, such as `AWS::EC2::VPC`, get their primary identifier from AWS when AWS creates them, so a template can't set it. Radius keeps a record of each AWS resource it deploys, keyed by the resource's `alias`, so every deploy of the same alias updates the same resource. A retried deploy sends the same create request again, so it doesn't create a second resource.

```bicep
extension aws

resource vpc 'AWS.EC2/VPC@default' = {
  alias: 'app-vpc'
  properties: {
    CidrBlock: '10.0.0.0/16'
  }
}
```

To manage a resource that already exists, set the top-level `name` to its identifier. To only read it, use `existing`.

This needs a Radius release after v0.62.0, or an edge build. One case can still create a second resource: if Radius loses track of a create that AWS accepted, such as when it restarts at that moment, the next deploy of the alias finds the resource through the same request. For types served through AWS Cloud Control, that works for 36 hours, which is how long Cloud Control keeps the request.

### Read-only resource types

A read-only resource type, such as `AWS::EC2::Image`, is a type that AWS creates on its own. A template can reference an existing resource of this type with the `existing` keyword and set its primary identifier. A declaration that would create one gets Bicep warning BCP245, and Radius rejects it when you deploy.

```bicep
extension aws

resource image 'AWS.EC2/Image@default' existing = {
  alias: 'base-image'
  properties: {
    Arn: 'arn:aws:ec2:us-west-2::image/ami-0123456789abcdef0'
  }
}
```

### Create-and-delete-only resource types

A create-and-delete-only resource type, such as `AWS::EC2::PlacementGroup`, is a type that AWS can create and delete but can't update. A template can declare one, but a deployment that changes a property of an existing resource fails. To change it, delete the resource and deploy again.
