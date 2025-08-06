import '@/fonts'
import './compiled.css'
import type { Preview } from '@storybook/vue3'
import type { App } from 'vue'
import { setup } from '@storybook/vue3'
import { VueQueryPlugin } from '@tanstack/vue-query'
import MockDate from 'mockdate'
import { createPinia } from 'pinia'
import { vueRouter } from 'storybook-vue3-router'
import { routes } from '../src/router'

MockDate.set('2025-04-21 14:12:46')

const pinia = createPinia()

setup((app: App) => {
  app.use(pinia)
  app.use(VueQueryPlugin)
})

const preview: Preview = {
  decorators: [vueRouter(routes)],
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
