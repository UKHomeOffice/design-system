#! /bin/env bash

usage() {
    echo "Usage: ${0} <VERSION>"
}

if [ -z "${1}" ]; then
    echo "Error: Missing argument VERSION"
    echo
    usage
    exit 1
fi

set -euo pipefail

name="not-govuk"
version="${1}"

for package_json in package.json {apps,components,lib}/*/package.json lib/*/skel/*/package.json*; do
        [ -f "${package_json}" ] || continue

        PACKAGE_JSON="${package_json}" PACKAGE_SCOPE="@${name}/" PACKAGE_VERSION="^${version}" node <<'NODE'
const fs = require('fs');

const packageJson = process.env.PACKAGE_JSON;
const packageScope = process.env.PACKAGE_SCOPE;
const packageVersion = process.env.PACKAGE_VERSION;
const data = JSON.parse(fs.readFileSync(packageJson, 'utf8'));

for (const key of ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies']) {
    const dependencies = data[key];

    if (!dependencies) {
        continue;
    }

    for (const dependency of Object.keys(dependencies)) {
        if (dependency.startsWith(packageScope)) {
            dependencies[dependency] = packageVersion;
        }
    }
}

fs.writeFileSync(packageJson, `${JSON.stringify(data, null, 2)}\n`);
NODE
done

npm install --package-lock-only