#!/usr/bin/env bash

# Generates Bicep types from the test fixtures, publishes them as a local
# extension, and builds each template in this directory with the Bicep CLI.
# The first line of each template lists the diagnostics, warnings or errors, the
# build must report, as "// expect: <codes>" or "// expect: none". Run `npm run build` first.

set -euo pipefail

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
generator="$(dirname "${here}")"
work="$(mktemp -d)"
trap 'rm -rf "${work}"' EXIT

bicep --version
node "${generator}/dist/src/main.js" --input "${generator}/testdata" --radius "${generator}/testdata/radius" --output "${work}/types" > /dev/null
if ! output="$(bicep publish-extension "${work}/types/index.json" --target "${work}/aws.tgz" 2>&1)"; then
    echo "${output}"
    exit 1
fi
echo '{ "extensions": { "aws": "./aws.tgz" } }' > "${work}/bicepconfig.json"

failed=0
for template in "${here}"/*.bicep; do
    name="$(basename "${template}")"
    cp "${template}" "${work}/${name}"
    want="$(head -n 1 "${template}" | sed -n 's|^// expect: ||p')"
    if [[ -z "${want}" ]]; then
        echo "FAIL ${name}: the first line must be \"// expect: <codes>\" or \"// expect: none\""
        failed=1
        continue
    fi

    # A template can expect errors too, so a failed build only fails the check when
    # it reports no diagnostics or different ones.
    built=true
    output="$(bicep build "${work}/${name}" --stdout 2>&1 > /dev/null)" || built=false

    got="$(echo "${output}" | sed -nE 's/.* : (Warning|Error) ([^:]+):.*/\2/p' | sort -u | tr '\n' ' ' | sed 's/ $//')"
    if [[ "${built}" == false && -z "${got}" ]]; then
        echo "FAIL ${name}: the build failed"
        echo "${output}"
        failed=1
        continue
    fi
    if [[ "${got}" != "${want/none/}" ]]; then
        echo "FAIL ${name}: got diagnostics \"${got:-none}\", want \"${want}\""
        echo "${output}"
        failed=1
        continue
    fi
    echo "ok   ${name}: ${want}"
done

exit "${failed}"
