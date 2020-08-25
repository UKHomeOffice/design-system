#! /bin/env bash

set -euo pipefail

version="$(jq -r '.version' 'package.json')"

pnpm recursive --filter '@*/*' exec -- npm version --no-git-tag-version --allow-same-version "${version}"
git add {apps,components,components-internal,lib,lib-govuk,packages}/*/package.json
