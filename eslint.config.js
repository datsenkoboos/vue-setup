import { defineConfig } from 'eslint-config-fans'
import oxlint from 'eslint-plugin-oxlint'

export default defineConfig(
  {
    typescript: true,
    vue: {
      a11y: true,
    },
  },
  {
    rules: {
      '@typescript-eslint/no-unsafe-argument': 'off',
      'no-console': 'off',
    },
  },
  oxlint.buildFromOxlintConfigFile('./oxlint.config.ts'),
)
