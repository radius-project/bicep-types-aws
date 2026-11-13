#!/usr/bin/env bash

# Checks that the breaking-change report and the reference docs read the
# effective types: AWS's types with the schemas and extra properties Radius owns
# applied. Changes a copy of the Radius test fixtures in each way the report
# flags, then checks the report lists every change. Needs Go, Python, and
# `npm run build` first.

set -euo pipefail

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
generator="$(dirname "${here}")"
repo="$(cd "${generator}/../.." && pwd)"
work="$(mktemp -d)"
trap 'rm -rf "${work}"' EXIT

cp -R "${generator}/testdata/radius" "${work}/radius"
node "${here}/change-radius.js" "${work}/radius"

node "${generator}/dist/src/main.js" --input "${generator}/testdata" --output "${work}/bicep" \
    --radius "${work}/radius" --previous-input "${generator}/testdata" --previous-radius "${generator}/testdata/radius" \
    --effective-output "${work}/new" --previous-effective-output "${work}/old" > /dev/null

report="$(cd "${repo}/src/aws-type-downloader" && go run . breaking-changes --old "${work}/old" --new "${work}/new")"
docs="${work}/supported-resources.md"
python3 "${repo}/.github/scripts/generate-reference-docs.py" "${work}/new" "${docs}"

failed=0
expect() {
    local name="$1" text="$2" pattern="$3"
    if grep -qF -- "${pattern}" <<< "${text}"; then
        echo "ok   ${name}"
    else
        echo "FAIL ${name}: no line with \"${pattern}\""
        failed=1
    fi
}

# section prints the report's lines for one type.
section() {
    awk -v heading="### \`$1\`" '$0 == heading { found = 1; next } /^### / { found = 0 } found' <<< "${report}"
}

expect "native property removed" "$(section AWS::DocDB::DBCluster)" "- \`Endpoint\` was removed."
expect "native property now required" "$(section AWS::CodeBuild::Project)" "- \`Name\` is now required."
expect "hand-written property type changed" "$(section AWS::S3::Object)" "- \`Key\` changed type from \`string\` to \`integer\`."
expect "extra property removed" "$(section AWS::MSK::ServerlessCluster)" "- \`BootstrapBrokerStringSaslIamIpv6\` was removed."
expect "docs list a native type" "$(cat "${docs}")" "**[AWS::DocDB::DBCluster]"
expect "docs list a hand-written type" "$(cat "${docs}")" "**[AWS::S3::Object]"

if [[ "${failed}" -ne 0 ]]; then
    echo "${report}"
fi
exit "${failed}"
