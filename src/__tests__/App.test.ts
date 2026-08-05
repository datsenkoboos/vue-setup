import { mount } from '@vue/test-utils'
import { describe, test, expect, beforeAll, vi } from 'vitest'
import App from '../App.vue'

describe('App', () => {
  beforeAll(() => {
    vi.useFakeTimers()
  })

  test('mounts renders properly', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('You did it!')
  })
})
