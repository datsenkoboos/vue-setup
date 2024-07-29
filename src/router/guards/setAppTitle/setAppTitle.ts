import type { RouteLocationNormalized } from 'vue-router';

export default function setAppTitle(to: RouteLocationNormalized) {
  const { title: pageTitle } = to.meta;
  const appTitle = import.meta.env.VITE_APP_TITLE;
  document.title = pageTitle ? `${pageTitle} | ${appTitle}` : appTitle;
}
