import { faker } from '@faker-js/faker'
import { cleanup, render, screen } from '@testing-library/vue'
import { beforeEach, describe, expect, test } from 'vitest'
import TestButton from './TestButton.vue'

describe('TestBtn', () => {
  beforeEach(() => {
    mount()
  })

  const mount = (slotContent = '') => {
    cleanup()
    render(TestButton, {
      slots: {
        default: slotContent,
      },
    })
  }

  test('should render slot content', () => {
    const testSlotContent = faker.string.uuid()
    mount(testSlotContent)

    const testButton = screen.getByRole('button')

    expect(testButton.textContent).toBe(testSlotContent)
  })
})
