import vitest from '@vitest/eslint-plugin'
import { defineConfig, GLOB_SRC_EXT, GLOB_STORYBOOK, GLOB_TESTS, GLOB_VUE } from 'eslint-config-fans'

export default defineConfig({
  typescript: true,
  vue: true,
  test: true,
  stylistic: true,
  perfectionist: true,
}, {
  files: [GLOB_SRC_EXT, GLOB_VUE, GLOB_STORYBOOK],
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
    }],
    'unicorn/numeric-separators-style': [
      'error',
      { onlyIfContainsSeparator: true },
    ],
    'unicorn/prefer-query-selector': 'off',
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        ignore: ['Prop$', /props/i, 'Ref$'],
      },
    ],
  },
}, {
  files: ['**/test-utils/**/*.ts', '**/router/guards/**/*.ts', '**/mocks/**/*.ts'],
  rules: { 'unicorn/filename-case': 'off' },
}, {
  files: [GLOB_TESTS, '**/test-utils/**/*.test.ts'],
  rules: {
    ...vitest.configs.all.rules,
    'vitest/consistent-test-it': ['error', {
      fn: 'test',
      withinDescribe: 'test',
    }],
    'vitest/prefer-lowercase-title': ['error', {
      ignoreTopLevelDescribe: true,
    }],
    'vitest/prefer-describe-function-title': 'off',
    'vitest/require-mock-type-parameters': 'off',
    'vitest/prefer-expect-assertions': 'off',
    'vitest/no-hooks': 'off',
    'vitest/prefer-called-times': 'off',
  },
})
