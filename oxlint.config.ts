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
        'vitest/no-focused-tests': 'warn',
        'vitest/no-disabled-tests': 'off',
      },
    },
    {
      files: ['**/*.stories.{ts,tsx}'],
      rules: {
        'storybook/await-interactions': 'error',
        'storybook/context-in-play-function': 'error',
        'storybook/default-exports': 'error',
        'storybook/hierarchy-separator': 'warn',
        'storybook/no-redundant-story-name': 'warn',
        'storybook/no-renderer-packages': 'error',
        'storybook/prefer-pascal-case': 'warn',
        'storybook/story-exports': 'error',
        'storybook/use-storybook-expect': 'error',
        'storybook/use-storybook-testing-library': 'error',
      },
    },
    {
      files: ['.storybook/main.{js,cjs,mjs,ts}'],
      rules: {
        'storybook/no-uninstalled-addons': 'error',
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
