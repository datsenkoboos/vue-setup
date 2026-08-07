import type { OxlintConfig } from 'oxlint'
import { defineConfig } from 'oxc-config-fans/oxlint'

const overrides: OxlintConfig = {
  jsPlugins: ['eslint-plugin-storybook'],
  overrides: [
    {
      files: ['**/*.spec.{ts,tsx}', '**/*.test.{ts,tsx}'],
      plugins: ['vitest'],
      rules: {
        'vitest/consistent-test-it': [
          'error',
          {
            fn: 'test',
            withinDescribe: 'test',
          },
        ],
        'vitest/consistent-test-filename': [
          'error',
          {
            pattern: String.raw`.*\.test\.[tj]sx?$`,
            allTestPattern: String.raw`.*\.(test|spec)\.[tj]sx?$`,
          },
        ],
        'vitest/consistent-vitest-vi': 'warn',
        'vitest/no-focused-tests': 'warn',
        'vitest/no-disabled-tests': 'off',
        'vitest/prefer-to-be-truthy': 'warn',
        'vitest/prefer-to-be-falsy': 'warn',
        'vitest/prefer-strict-equal': 'error',
        'vitest/no-import-node-test': 'error',
        'vitest/prefer-hooks-in-order': 'warn',
      },
    },
    {
      files: ['**/*.stories.{ts,tsx}'],
      rules: {
        'storybook/default-exports': 'error',
        'storybook/hierarchy-separator': 'warn',
        'storybook/no-redundant-story-name': 'warn',
        'storybook/no-renderer-packages': 'error',
        'storybook/prefer-pascal-case': 'warn',
        'storybook/story-exports': 'error',
      },
    },
    {
      files: ['.storybook/main.{js,cjs,mjs,ts}'],
      rules: {
        'storybook/no-uninstalled-addons': 'error',
      },
    },
    {
      files: ['**/*.{js,ts,jsx,tsx,vue}'],
      rules: {
        'no-console': 'warn',
        'no-unused-vars': 'warn',
      },
    },
  ],
}

export default defineConfig({
  typescript: true,
  query: true,
  vitest: true,
  opinionated: true,
  options: { typeCheck: false },
  extends: [overrides],
})
