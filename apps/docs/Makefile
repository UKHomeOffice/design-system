DOCKER_IMAGE ?= ho-design-system
DOCKER_REGISTRY ?= quay.io
DOCKER_REPO ?= $(DOCKER_REGISTRY)/ukhomeofficedigital/$(DOCKER_IMAGE)
KUBE_CONTEXT ?= cto-dev
KUBE_DEPLOYMENT ?= design-system
KUBE_CONTAINER ?= design-system

kubectl ?= kubectl --context $(KUBE_CONTEXT)

patch_version != jq -r '.version' 'package.json'
minor_version != echo "$(patch_version)" | awk -F '.' '{print $$1"."$$2}'
major_version != echo "$(patch_version)" | awk -F '.' '{print $$1}'
full_version != echo "$(patch_version)-$${BUILD_NUMBER/%/-}$$(git rev-parse --short HEAD)"

.PHONY: all aws-lambda build clean deploy deps distclean docker docker-clean docker-push docker-test netlify node-deps test unit-test

all: deps test docker

clean:
	npm run clean
	rm -rf node_modules/ pkg/

distclean: clean docker-clean

deps: node-deps

node-deps: node_modules/.bin/webpack

node_modules/%: package.json
	pnpm install

build: dist/server/index.js

dist/%: node_modules/.bin/webpack
	npm run build

docker: build
	docker build -t '$(DOCKER_IMAGE)' .

docker-test:
	docker build -t '$(DOCKER_IMAGE)-test' -f 'test.Dockerfile' .

docker-clean:
	docker rmi -f '$(DOCKER_IMAGE)' || true
	docker rmi -f '$(DOCKER_IMAGE)-test' || true

docker-push: docker
	docker tag $(DOCKER_IMAGE) '$(DOCKER_REPO):$(full_version)' && docker push '$(DOCKER_REPO):$(full_version)'
	docker tag $(DOCKER_IMAGE) '$(DOCKER_REPO):$(patch_version)' && docker push '$(DOCKER_REPO):$(patch_version)'
	docker tag $(DOCKER_IMAGE) '$(DOCKER_REPO):$(minor_version)' && docker push '$(DOCKER_REPO):$(minor_version)'
	docker tag $(DOCKER_IMAGE) '$(DOCKER_REPO):$(major_version)' && docker push '$(DOCKER_REPO):$(major_version)'
	docker tag $(DOCKER_IMAGE) '$(DOCKER_REPO):latest' && docker push '$(DOCKER_REPO):latest'

aws-lambda: pkg/aws-lambda/govuk-template.zip

pkg/aws-lambda/govuk-template.zip: dist/server/index.js aws.serverless.yml
	npm run package:aws-lambda

netlify: pkg/netlify/functions/govuk-template.zip pkg/netlify/publish/_redirects

pkg/netlify/functions/%.zip: pkg/aws-lambda/%.zip
	mkdir -p '$(@D)'
	cp -a '$(<)' '$(@)'
	echo "process.env['MODE'] = 'serverless'; process.env['NODE_ENV'] = 'production'; module.exports = require('./dist/server/index.js');" > 'pkg/netlify/$(basename $(@F)).js'
	zip -mvj '$(@)' 'pkg/netlify/$(basename $(@F)).js'

pkg/netlify/publish/_redirects: dist/server/index.js
	mkdir -p '$(@D)'
	cp -a 'dist/public/' 'pkg/netlify/publish/public'
	rm -f 'pkg/netlify/publish/public/entrypoints.json'
	echo '/* /.netlify/functions/govuk-template/:splat 200' > '$(@)'

deploy: docker-push
	$(kubectl) set image 'deployment/$(KUBE_DEPLOYMENT)' '$(KUBE_CONTAINER)=$(DOCKER_REPO):$(full_version)'
	$(kubectl) rollout status 'deployment/$(KUBE_DEPLOYMENT)'

functional-test: build
	npm run 'test:functional:ci'

unit-test: node-deps
	npm test

test: unit-test functional-test
