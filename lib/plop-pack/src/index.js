'use strict';

const { extendGenerator, relativePath } = require('@not-govuk/plop-pack-internal');
const plopPackInternal = require.resolve('@not-govuk/plop-pack-internal');

const rel = relativePath(__dirname, '..', 'skel');

const plopFunction = plop => {
  const parent = require.resolve('@not-govuk/plop-pack');

  plop.load(plopPackInternal, undefined, { actionTypes: true, generators: false, helpers: true, partials: false });

  plop.setGenerator(
    'app',
    extendGenerator(plop, parent, 'app', {
      prompts: [
      ],
      actions: [
        {
          type: 'copy',
          destination: 'apps/{{{name}}}/src/',
          source: rel('app/src/'),
          overwrite: true
        },
        {
          type: 'merge',
          path: 'apps/{{{name}}}/package.json',
          templateFile: rel('app/package.json.hbs')
        }
      ]
    })
  );

  plop.setGenerator(
    'component',
    extendGenerator(plop, parent, 'component', {
      prompts: [
      ],
      actions: [
      ]
    })
  );

  plop.setGenerator(
    'lib',
    extendGenerator(plop, parent, 'lib', {
      prompts: [
      ],
      actions: [
      ]
    })
  );

  plop.setDefaultInclude({ actionTypes: true, generators: true, helpers: true });
};

module.exports = plopFunction;
