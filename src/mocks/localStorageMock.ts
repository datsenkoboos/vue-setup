import { vi } from 'vitest'

const localStorageMock: Omit<Storage, 'clear' | 'key' | 'length'> = (() => {
  let storage = new Map<string, string>()
  return {
    clear: () => {
      storage = new Map()
    },
    getItem: vi.fn((key: string) => storage.get(key)),
    removeItem: vi.fn((key: string) => storage.delete(key)),
    setItem: vi.fn((key: string, value: string) => {
      storage.set(key, value)
    }),
  }
})()
export default localStorageMock
