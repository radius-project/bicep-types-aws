## Radius Bicep AWS limitations

### Non-idempotency
If you see a warning describing an AWS resource as 'non-idempotent', this means that this resource type is assigned a primary identifier at deployment time and is currently not supported by Radius Bicep.

We are currently building support for non-idempotent resources in Radius. Please like and comment on [this issue](https://github.com/radius-project/radius/issues/6227) if you are interested in the same.

As a workaround, you can try using [Terraform Recipes](https://docs.radapp.dev/guides/recipes/overview/) to deploy and manage those non-idempotent resource types.
