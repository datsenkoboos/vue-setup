import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import html from '@html-eslint/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';
import vitest from '@vitest/eslint-plugin';
import perfectionist from 'eslint-plugin-perfectionist';
import vue from 'eslint-plugin-vue';
import vueA11y from 'eslint-plugin-vuejs-accessibility';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

export default [
  includeIgnoreFile(gitignorePath),

  js.configs.recommended,
  {
    rules: {
      'no-empty': [
        'warn',
        {
          allowEmptyCatch: true,
        },
      ],
    },
  },

  ...ts.configs.strict,
  ...ts.configs.stylistic,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        caughtErrors: 'none',
      }],
    },
  },

  ...vue.configs['flat/recommended'],
  {
    rules: {
      'vue/block-order': ['warn', {
        order: ['script', 'template', 'style'],
      }],
    },
  },
  ...vueA11y.configs['flat/recommended'],

  {
    ...html.configs['flat/recommended'],
    files: ['**/*.html'],
    rules: {
      ...html.configs['flat/recommended'].rules,
      '@html-eslint/indent': ['warn', 2],
      '@html-eslint/no-extra-spacing-attrs': ['warn', {
        disallowMissing: true,
        enforceBeforeSelfClose: true,
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
      'vitest/consistent-test-it': ['warn', {
        fn: 'test',
        withinDescribe: 'test',
      }],
      'vitest/no-hooks': 'off',
      'vitest/prefer-expect-assertions': 'off',
      'vitest/prefer-lowercase-title': ['warn', {
        ignoreTopLevelDescribe: true,
      }],
    },
  },

  stylistic.configs.customize({
    braceStyle: '1tbs',
    commaDangle: {
      arrays: 'always-multiline',
      exports: 'always-multiline',
      functions: 'only-multiline',
      imports: 'always-multiline',
      objects: 'always-multiline',
    },
    indent: 2,
    quotes: 'single',
    semi: true,
  }),
  {
    rules: {
      '@stylistic/indent': 'warn',
      '@stylistic/no-multiple-empty-lines': 'warn',
      '@stylistic/no-trailing-spaces': 'warn',
      '@stylistic/semi': 'warn',
    },
  },

  perfectionist.configs['recommended-natural'],
];
