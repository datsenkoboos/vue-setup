import '../src/assets/styles/main.css'
import type { Preview } from '@storybook/vue3-vite'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
  },
}

export default preview
