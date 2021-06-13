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

.PHONY: all build clean deploy deps distclean docker docker-clean docker-push node-deps test unit-test

all: deps test docker

clean:
	npm run clean
	rm -rf node_modules/

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

docker-clean:
	docker rmi -f '$(DOCKER_IMAGE)' || true

docker-push: docker
	docker tag $(DOCKER_IMAGE) '$(DOCKER_REPO):$(full_version)' && docker push '$(DOCKER_REPO):$(full_version)'
	docker tag $(DOCKER_IMAGE) '$(DOCKER_REPO):$(patch_version)' && docker push '$(DOCKER_REPO):$(patch_version)'
	docker tag $(DOCKER_IMAGE) '$(DOCKER_REPO):$(minor_version)' && docker push '$(DOCKER_REPO):$(minor_version)'
	docker tag $(DOCKER_IMAGE) '$(DOCKER_REPO):$(major_version)' && docker push '$(DOCKER_REPO):$(major_version)'
	docker tag $(DOCKER_IMAGE) '$(DOCKER_REPO):latest' && docker push '$(DOCKER_REPO):latest'

deploy: docker-push
	$(kubectl) scale deployment "$(KUBE_DEPLOYMENT)" --replicas 2
	$(kubectl) set image "deployment/$(KUBE_DEPLOYMENT)" "$(KUBE_CONTAINER)=$(DOCKER_REPO):$(full_version)"
	$(kubectl) rollout status "deployment/$(KUBE_DEPLOYMENT)"
	$(kubectl) scale deployment "$(KUBE_DEPLOYMENT)" --replicas 1

unit-test: node-deps
	npm test

test: unit-test
