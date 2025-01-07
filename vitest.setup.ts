import { afterEach, beforeAll, expect, vi } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import { localStorageMock } from './src/mocks';
import { cleanup } from '@testing-library/vue';

expect.extend(matchers);

beforeAll(() => {
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });
});
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
