/// <reference types="vite/client" />

import 'vue-router'
import type { RouteLayout } from '@/types'

declare module 'vue-router' {
  interface RouteMeta {
    layout?: RouteLayout
  }
}
