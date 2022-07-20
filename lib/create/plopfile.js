import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { extendGenerator } from '@not-govuk/plop-pack-internal';

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));
const plopPackInternal = require.resolve('@not-govuk/plop-pack-internal');

const tarball = resolve(__dirname, 'dist', 'skel.tar');
const tarballPrototype = resolve(__dirname, 'dist', 'skel-prototype.tar');

const plop => {
  const parent = require.resolve('@not-govuk/create');

  plop.load(plopPackInternal, undefined, { actionTypes: true, generators: false, helpers: true, partials: false });

  plop.setGenerator(
    'project',
    extendGenerator(plop, parent, 'project', {
      prompts: [
      ],
      actions: [
        {
          type: 'shell',
          command: `tar -xv --strip-components=1 -f '${tarball}'`
        },
        {
          type: 'merge',
          path: 'package.json',
          templateFile: 'dist/package.base.json'
        },
        {
          type: 'merge',
          path: 'apps/docs/package.json',
          templateFile: 'dist/package.app.json'
        },
        {
          type: 'message',
          content: 'Done. (You can install dependencies with `pnpm i` and you may then want to commit with `git add . && git commit -m \'Initial commit\'`. Also, look at your new README file.)'
        }
      ]
    }, -1, 1)
  );

  plop.setGenerator(
    'prototype',
    extendGenerator(plop, parent, 'prototype', {
      prompts: [
      ],
      actions: [
        {
          type: 'shell',
          command: `tar -xv --strip-components=1 -f '${tarballPrototype}'`
        },
        {
          type: 'merge',
          path: 'package.json',
          templateFile: 'dist/package.app.json'
        },
        {
          type: 'message',
          content: 'Done. (You may want to commit this with `git add . && git commit -m \'Initial commit\'`. Also, look at your new README file.)'
        }
      ]
    }, -1, 1)
  );
};

export default plop;
