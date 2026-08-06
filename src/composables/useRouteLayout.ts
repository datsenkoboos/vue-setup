import type { Component } from 'vue'
import type { RouteLayout } from '@/types'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import EmptyLayout from '@/layouts/EmptyLayout.vue'

export function useRouteLayout() {
  const layouts: Readonly<Record<RouteLayout, Component>> = {
    default: DefaultLayout,
    empty: EmptyLayout,
  }

  const route = useRoute()
  const layout = computed(
    () => layouts[route.meta.layout || 'default'] || layouts.default,
  )

  return {
    layout,
  }
}
