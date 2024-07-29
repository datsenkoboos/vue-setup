import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

import IndexView from '@/views/IndexView.vue';
import { setAppTitle } from './guards';

export const routes: RouteRecordRaw[] = [
  {
    name: 'index',
    path: '/',
    component: IndexView,
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: {
      title: '404',
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(setAppTitle);

export default router;
