#! /bin/env bash

set -euo pipefail

name="$(jq -r '.name' 'package.json')"
version="$(jq -r '.version' 'package.json')"

# Version workspace packages
npm pkg set "version=${version}" --workspaces

# Update references in template files
sed -i -E "s/\"@(${name})\/([^\"]*)\": \"\^?[0-9][^\"]*\"/\"@\1\/\2\": \"^${version}\"/g" \
  lib/*/skel/*/package.json*

# Update references in peerDependencies
sed -i -E "s/\"@(${name})\/([^\"]*)\":([^\"]*)\"[^:]+\"/\"@\1\/\2\":\3\"^${version}\"/g" \
  lib/*/skel/*/package.json* \
  {apps,components,lib}/*/package.json

npm install --package-lock-only

git add \
  lib/*/skel/*/package.json* \
  {apps,components,lib}/*/package.json \
  package-lock.json
