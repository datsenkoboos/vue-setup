import { beforeAll, expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import { localStorageMock } from './src/mocks';

expect.extend(matchers);

beforeAll(() => {
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });
});
