import { vi } from 'vitest';

const localStorageMock: Omit<Storage, 'length' | 'clear' | 'key'> = (() => {
  let storage = new Map<string, string>();
  return {
    getItem: vi.fn((key: string) => storage.get(key)),
    setItem: vi.fn((key: string, value: string) => {
      storage.set(key, value)
    }),
    removeItem: vi.fn((key: string) => storage.delete(key)),
    clear: () => {
      storage = new Map();
    },
  };
})();
export default localStorageMock;
