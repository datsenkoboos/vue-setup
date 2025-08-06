import * as matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/vue'
import { afterEach, beforeAll, expect, vi } from 'vitest'
import { localStorageMock } from './src/mocks'

expect.extend(matchers)

beforeAll(() => {
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  })
})

afterEach(() => {
  cleanup()
  vi.clearAllMocks()
})
