import './assets/styles/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';
import vueQueryConfig from './vueQueryConfig';
// import * as Sentry from '@sentry/vue';

import App from './App.vue';
import router from './router';

import VFragment from './components/VFragment';

const app = createApp(App);

// app.config.errorHandler = (e) => {
//   Sentry.captureException(e);
// };

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin, vueQueryConfig);

// if (
//   import.meta.env.PROD
// ) {
//   Sentry.init({
//     app,
//     dsn: import.meta.env.VITE_SENTRY_DSN,
//     integrations: [
//       Sentry.browserTracingIntegration({ router }),
//       Sentry.replayIntegration(),
//     ],
//     tracesSampleRate: 1.0,
//     environment: import.meta.env.MODE,
//   });
// }

app.component('VFragment', VFragment);

app.mount('#app');
