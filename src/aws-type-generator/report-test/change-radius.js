// Changes a copy of the Radius test fixtures in each way the breaking-change
// report flags. Usage: node change-radius.js <radius copy>
const fs = require("fs")
const path = require("path")

const root = process.argv[2]
const edit = (file, change) => {
    const full = path.join(root, file)
    const value = JSON.parse(fs.readFileSync(full, "utf8"))
    change(value)
    fs.writeFileSync(full, JSON.stringify(value, null, 2))
}

// A native schema loses a property.
edit("pkg/aws/schemas/native/docdb/aws-docdb-dbcluster.json", s => {
    delete s.properties.Endpoint
    s.readOnlyProperties = s.readOnlyProperties.filter(p => p !== "/properties/Endpoint")
})
// A native schema makes a property required.
edit("pkg/aws/schemas/native/codebuild/aws-codebuild-project.json", s => {
    s.required.push("Name")
})
// A hand-written schema changes a property's type.
edit("pkg/aws/schemas/handwritten/s3/aws-s3-object.json", s => {
    s.properties.Key.type = "integer"
})
// An extra property is removed.
edit("pkg/aws/extraproperties/extra_properties.json", s => {
    delete s["AWS::MSK::ServerlessCluster"].BootstrapBrokerStringSaslIamIpv6
})
