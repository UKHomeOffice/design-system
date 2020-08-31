cp = cp -P --preserve=all
patch_package = sed -Ei 's/"@(hods)\/([^"]+)": "workspace:(.+)"/"@\1\/\2": "\3"/'
strip_package = jq '{ scripts: .scripts, devDependencies: .devDependencies }'
build_dir = ./build
dist_dir = ./dist
source_dir = ../..
target_dir = $(build_dir)/skel
sources := $(wildcard \
	$(source_dir)/plopfile.js \
	$(source_dir)/pnpm-lock.yaml \
)
docs_source_dir = $(build_dir)/apps/template
docs_target_dir = $(target_dir)/apps/docs
docs_targets = \
	$(docs_target_dir)/src/common/app.scss \
	$(docs_target_dir)/src/common/page-wrap.tsx
skel_deps = \
	$(patsubst $(source_dir)/%,$(target_dir)/%,$(sources)) \
	$(docs_targets)
proto_target_dir = $(build_dir)/skel-prototype
skel_proto_deps = \
	$(proto_target_dir)/src/common/app.scss \
	$(proto_target_dir)/src/common/page-wrap.tsx
plopfile = $(build_dir)/plopfile.js

.PHONY: all clean debug

all: \
	$(dist_dir)/skel.tar \
	$(dist_dir)/skel-prototype.tar \
	$(dist_dir)/package.base.json \
	$(dist_dir)/package.app.json

debug:
	echo '$(skel_deps)'

clean:
	rm -rf build dist

$(dist_dir)/package.base.json: $(source_dir)/package.json
	mkdir -p '$(@D)'
	$(strip_package) '$(<)' > '$(@)'
	$(patch_package) '$(@)'

$(dist_dir)/package.app.json: $(plopfile)
	mkdir -p '$(@D)'
	./node_modules/.bin/plop --plopfile '$(plopfile)' app 'template' 'Template.'
	$(strip_package) '$(docs_source_dir)/package.json' > '$(@)'

$(dist_dir)/skel.tar: $(skel_deps)
	mkdir -p '$(@D)'
	cd 'build/' && tar -cf '../$(@)' 'skel/'

$(dist_dir)/skel-prototype.tar: $(skel_proto_deps)
	mkdir -p '$(@D)'
	cd 'build/' && tar -cf '../$(@)' 'skel-prototype/'

$(plopfile): $(source_dir)/plopfile.js
	mkdir -p '$(@D)'
	$(cp) '$(<)' '$(@D)'

$(docs_target_dir)/src/common/page-wrap.tsx: $(source_dir)/apps/docs/src/common/page-wrap.tsx
	mkdir -p '$(@D)'
	$(cp) '$(<)' '$(@D)'

$(docs_target_dir)/%: $(dist_dir)/package.app.json
	mkdir -p '$(@D)'
	$(cp) '$(docs_source_dir)/$(*)' '$(@D)'

$(proto_target_dir)/%: $(dist_dir)/package.app.json
	mkdir -p '$(@D)'
	$(cp) '$(docs_source_dir)/$(*)' '$(@D)'

$(target_dir)/%: $(source_dir)/%
	mkdir -p '$(@D)'
	$(cp) '$(<)' '$(@D)'
