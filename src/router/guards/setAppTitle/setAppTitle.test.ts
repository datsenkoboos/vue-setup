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

  test('should set valid title if both app title and page title are present', () => {
    const testRoute = {
      meta: {
        title: 'Test Title',
      },
    } as unknown as RouteLocationNormalized;
    setAppTitle(testRoute);

    expect(document.title).toBe(`${testRoute.meta.title} | ${appTitleMock}`);
  });
  test('should set valid title if only app title is present', () => {
    const testRoute = {
      meta: {},
    } as unknown as RouteLocationNormalized;
    setAppTitle(testRoute);

    expect(document.title).toBe(appTitleMock);
  });
  test('should not set title if app title is not present', () => {
    vi.stubEnv('VITE_APP_TITLE', '');
    document.title = 'default title';

    const testRoute = {
      meta: {
        title: 'Test Title',
      },
    } as unknown as RouteLocationNormalized;
    setAppTitle(testRoute);

    expect(document.title).toBe('default title');
  });
});
