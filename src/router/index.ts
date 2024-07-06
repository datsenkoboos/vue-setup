import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

import IndexView from '@/views/IndexView.vue';

export const routes: RouteRecordRaw[] = [
  {
    name: 'index',
    path: '/',
    component: IndexView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
