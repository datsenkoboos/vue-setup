import js from '@eslint/js';
import ts from 'typescript-eslint';
import vitest from '@vitest/eslint-plugin';
import html from '@html-eslint/eslint-plugin';
import vue from 'eslint-plugin-vue';
import vueA11y from 'eslint-plugin-vuejs-accessibility';
import stylistic from '@stylistic/eslint-plugin';

import { includeIgnoreFile } from '@eslint/compat';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

export default [
  includeIgnoreFile(gitignorePath),

  js.configs.recommended,
  ...ts.configs.strict,
  ...ts.configs.stylistic,

  ...vue.configs['flat/recommended'],
  ...vueA11y.configs['flat/recommended'],

  {
    ...html.configs['flat/recommended'],
    files: ['**/*.html'],
    rules: {
      ...html.configs['flat/recommended'].rules,
      '@html-eslint/indent': ['warn', 2],
      '@html-eslint/no-extra-spacing-attrs': ['warn', {
        enforceBeforeSelfClose: true,
        disallowMissing: true,
      }],
      '@html-eslint/require-closing-tags': ['warn', {
        selfClosing: 'always',
      }],
    },
  },

  {
    ...vitest.configs.all,
    files: ['**/*.{test,spec}.{ts,js}'],
    rules: {
      ...vitest.configs.all.rules,
      'vitest/prefer-lowercase-title': ['warn', {
        ignoreTopLevelDescribe: true,
      }],
      'vitest/no-hooks': 'off',
      'vitest/consistent-test-it': ['warn', {
        fn: 'test',
        withinDescribe: 'test',
      }],
      'vitest/prefer-expect-assertions': 'off',
    },
  },

  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: true,
    braceStyle: '1tbs',
    commaDangle: {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'only-multiline',
    },
  }),
];
