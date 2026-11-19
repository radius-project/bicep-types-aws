#!/usr/bin/env bash

# Checks that the breaking-change report and the reference docs read the
# effective types: AWS's types with the schemas and extra properties Radius owns
# applied. Changes a copy of the Radius test fixtures in each way the report
# flags, then checks the report lists every change. Needs Go, Python, and
# `npm run build` first. Last, checks that the generator rejects a previous Radius
# checkout with no Radius inputs, effective outputs that reach a protected
# directory through a symbolic link, and effective outputs that hold the target of
# a linked input file, without changing any file.

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

# The rest run the generator with arguments it must reject before it writes
# anything, on copies, so a run that wrongly goes ahead can only change ${work}.
cp -R "${generator}/testdata" "${work}/aws"
mkdir -p "${work}/empty" "${work}/out"
ln -s "${work}/out" "${work}/out-link"
ln -s "${work}/aws" "${work}/aws-link"
ln -s "${work}/radius/pkg/aws/schemas" "${work}/schemas-link"
# Inputs that are links to files in the effective output: the Radius extra
# properties file, and an AWS type file.
cp -R "${work}/radius" "${work}/radius-linked"
extra="${work}/radius-linked/pkg/aws/extraproperties/extra_properties.json"
mv "${extra}" "${work}/out/extra_properties.json"
ln -s "${work}/out/extra_properties.json" "${extra}"
cp -R "${work}/aws" "${work}/aws-linked"
aws_file="AWS::EC2::PlacementGroup.json"
mv "${work}/aws-linked/${aws_file}" "${work}/out/${aws_file}"
ln -s "${work}/out/${aws_file}" "${work}/aws-linked/${aws_file}"

snapshot() {
    (cd "${work}" && find . -type f -print0 | sort -z | xargs -0 shasum)
}

rejected() {
    local name="$1" message="$2" before output
    shift 2
    before="$(snapshot)"
    if output="$(node "${generator}/dist/src/main.js" --input "${work}/aws" --output "${work}/bicep-rejected" --radius "${work}/radius" "$@" 2>&1)"; then
        echo "FAIL ${name}: the generator accepted it"
        failed=1
    elif ! grep -qF -- "${message}" <<< "${output}"; then
        echo "FAIL ${name}: no line with \"${message}\" in: ${output}"
        failed=1
    elif [[ "$(snapshot)" != "${before}" ]]; then
        echo "FAIL ${name}: the generator changed files before it failed"
        failed=1
    else
        echo "ok   ${name}"
    fi
}

previous=(--previous-input "${work}/aws" --previous-effective-output "${work}/old-rejected")
rejected "empty previous Radius checkout" "is not the previous Radius checkout" \
    "${previous[@]}" --previous-radius "${work}/empty" --effective-output "${work}/new-rejected"
rejected "missing previous Radius checkout" "is not the previous Radius checkout" \
    "${previous[@]}" --previous-radius "${work}/missing" --effective-output "${work}/new-rejected"
rejected "outputs linked to one directory" "must be different directories" \
    --previous-input "${work}/aws" --previous-radius "${work}/radius" \
    --effective-output "${work}/out" --previous-effective-output "${work}/out-link"
rejected "output linked to the AWS input" "is an input directory" --effective-output "${work}/aws-link"
rejected "output inside a linked schema directory" "is inside the Radius schema directory" \
    --effective-output "${work}/schemas-link/native"
rejected "output holding a linked extra properties file" "which the input ${extra} links to" \
    --previous-input "${work}/aws" --previous-radius "${work}/radius-linked" --effective-output "${work}/out"
rejected "output holding a linked AWS input file" "which the input ${work}/aws-linked/${aws_file} links to" \
    --previous-input "${work}/aws-linked" --previous-radius "${work}/radius" --effective-output "${work}/out"

if [[ "${failed}" -ne 0 ]]; then
    echo "${report}"
fi
exit "${failed}"
