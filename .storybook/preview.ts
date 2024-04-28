import { type Preview, setup } from '@storybook/vue3';
import { type App } from 'vue';

import './compiled.css';
import '@/fonts';

import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';

const pinia = createPinia();

setup((app: App) => {
  app.use(pinia);
  app.use(VueQueryPlugin);
});

const preview: Preview = {
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
