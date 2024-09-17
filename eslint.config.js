import js from '@eslint/js'
import ts from 'typescript-eslint'
import html from '@html-eslint/eslint-plugin';
import vue from 'eslint-plugin-vue'

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

  {
 ...html.configs['flat/recommended'],
    files: ['**/*.html'],
    rules: {
      ...html.configs['flat/recommended'].rules,
      '@html-eslint/indent': ['warn', 2],
      '@html-eslint/no-extra-spacing-attrs': ['warn', {
        'enforceBeforeSelfClose': true,
        'disallowMissing': true,
      }],
      '@html-eslint/require-closing-tags': ['warn', {
        'selfClosing': 'always',
      }],
    }
  },

  {
    
    rules: {
      quotes: ['warn', 'single']
    }
  }
]
