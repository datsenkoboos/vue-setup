import { type Preview, setup } from '@storybook/vue3';
import { VueQueryPlugin } from '@tanstack/vue-query';

import './compiled.css';

import '@/fonts';
import { createPinia } from 'pinia';
import { vueRouter } from 'storybook-vue3-router';
import { type App } from 'vue';

import { routes } from '../src/router';

const pinia = createPinia();

setup((app: App) => {
  app.use(pinia);
  app.use(VueQueryPlugin);
});

const preview: Preview = {
  decorators: [vueRouter(routes)],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
