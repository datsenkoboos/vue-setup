import { vi } from 'vitest';

const localStorageMock: Omit<Storage, 'length' | 'clear' | 'key'> = (() => {
  let storage: { [key: string]: string } = {};
  return {
    getItem: vi.fn((key: string) => storage[key]),
    setItem: vi.fn((key: string, value: string) => (storage[key] = value)),
    removeItem: vi.fn((key: string) => delete storage[key]),
    reset: () => {
      storage = {};
    },
  };
})();
export default localStorageMock;
