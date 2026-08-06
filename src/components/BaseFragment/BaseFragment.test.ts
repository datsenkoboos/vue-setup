import { render, screen } from '@testing-library/vue'
import { describe, test, expect } from 'vitest'
import BaseFragment from './BaseFragment.vue'

describe('BaseFragment', () => {
  test('should render default slot content', () => {
    const slotContent = `<button> test </button>`

    render(BaseFragment, {
      slots: {
        default: slotContent,
      },
    })

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
})
