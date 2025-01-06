#! /bin/env bash

set -euo pipefail

name="$(jq -r '.name' 'package.json')"
version="$(jq -r '.version' 'package.json')"

# Version sub-packages
pnpm recursive --filter '@*/*' exec -- npm version --no-git-tag-version --allow-same-version "${version}"

# Update workspace packages
pnpm recursive up --workspace "@${name}/*"

# Update references in template files
sed -i -E "s/workspace:([^\^0-9]*)(\^)?.+\"/workspace:\1\2${version}\"/g" \
  lib/*/skel/*/package.json*

# Update references in peerDependencies
sed -i -E "s/\"@(${name})\/([^\"]*)\":([^\"]*)\"[^:]+\"/\"@\1\/\2\":\3\"^${version}\"/g" \
  lib/*/skel/*/package.json* \
  {apps,components,lib}/*/package.json

# Stage modified files
cp pnpm-lock.yaml pnpm-lock-committed.yaml
git add \
  lib/*/skel/*/package.json* \
  {apps,components,lib}/*/package.json \
  pnpm-lock-committed.yaml
