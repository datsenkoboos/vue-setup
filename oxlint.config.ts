import type { OxlintConfig } from 'oxlint'
import { GLOB_TESTS } from 'eslint-config-fans'
import { defineConfig } from 'oxc-config-fans/oxlint'

const overrides: OxlintConfig = {
  overrides: [
    {
      files: GLOB_TESTS,
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
