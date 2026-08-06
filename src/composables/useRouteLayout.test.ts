import { describe, expect, test, vi } from 'vitest'
import { useRouteLayout } from './useRouteLayout'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import EmptyLayout from '@/layouts/EmptyLayout.vue'

const routeMock = vi.hoisted(() => {
  const meta: Record<string, unknown> = {}

  return { meta }
})

vi.mock('vue-router', () => ({
  useRoute: () => routeMock,
}))

function mockRouteMeta(meta: Record<string, unknown>) {
  routeMock.meta = meta
}

describe('useRouteLayout', () => {
  test('should return DefaultLayout when meta.layout is "default"', () => {
    mockRouteMeta({ layout: 'default' })

    const { layout } = useRouteLayout()
    expect(layout.value).toBe(DefaultLayout)
  })

  test('should return EmptyLayout when meta.layout is "empty"', () => {
    mockRouteMeta({ layout: 'empty' })

    const { layout } = useRouteLayout()
    expect(layout.value).toBe(EmptyLayout)
  })

  test('should return DefaultLayout when meta.layout is missing', () => {
    mockRouteMeta({})

    const { layout } = useRouteLayout()
    expect(layout.value).toBe(DefaultLayout)
  })

  test('should return DefaultLayout when meta.layout is invalid', () => {
    mockRouteMeta({ layout: '123' })

    const { layout } = useRouteLayout()
    expect(layout.value).toBe(DefaultLayout)
  })
})
