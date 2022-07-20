#! /usr/bin/env node
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { runPlop } from '@not-govuk/plop-pack-internal';

const __dirname = dirname(fileURLToPath(import.meta.url));

const plopfile = resolve(__dirname, '..', 'plopfile.js');

runPlop(plopfile);
