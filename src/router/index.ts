import IndexView from '@/views/IndexView.vue';
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

import { setAppTitle } from './guards';

export const routes: RouteRecordRaw[] = [
  {
    component: IndexView,
    name: 'index',
    path: '/',
  },

  {
    component: () => import('@/views/NotFoundView.vue'),
    meta: {
      title: '404',
    },
    name: 'not-found',
    path: '/:pathMatch(.*)*',
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(setAppTitle);

export default router;
