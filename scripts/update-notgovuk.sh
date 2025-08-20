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

# Update packages
pnpm recursive update "@${name}/*@^${version}"

# Update references in peerDependencies
sed -i -E "s/\"@(${name})\/([^\"]*)\":([^\"]*)\"[^:]+\"/\"@\1\/\2\":\3\"^${version}\"/g" \
  lib/*/skel/*/package.json* \
  {apps,components,lib}/*/package.json
