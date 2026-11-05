## Radius Bicep AWS limitations

### Non-idempotency
If you see a warning describing an AWS resource as 'non-idempotent', this means that this resource type is assigned a primary identifier at deployment time and is currently not supported by Radius Bicep.

We are currently building support for non-idempotent resources in Radius. Please like and comment on [this issue](https://github.com/radius-project/radius/issues/6227) if you are interested in the same.

As a workaround, you can try using [Terraform Recipes](https://docs.radapp.io/guides/recipes/overview/) to deploy and manage those non-idempotent resource types.

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
