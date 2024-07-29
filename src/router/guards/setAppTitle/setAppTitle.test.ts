import type { RouteLocationNormalized } from 'vue-router';
import setAppTitle from './setAppTitle';
import { describe, test, expect, vi, beforeAll, afterEach } from 'vitest';

const appTitleMock = 'App Title';

describe('setAppTitle', () => {
  beforeAll(() => {
    vi.stubEnv('VITE_APP_TITLE', appTitleMock);
  });
  afterEach(() => {
    document.title = '';
  });

  test('should set valid title if specified in route metadata', () => {
    const testRoute = {
      meta: {
        title: 'Test Title',
      },
    } as unknown as RouteLocationNormalized;
    setAppTitle(testRoute);

    expect(document.title).toBe(`${testRoute.meta.title} | ${appTitleMock}`);
  });
  test('should set valid title if not specified in route metadata', () => {
    const testRoute = {
      meta: {},
    } as unknown as RouteLocationNormalized;
    setAppTitle(testRoute);

    expect(document.title).toBe(appTitleMock);
  });
});
