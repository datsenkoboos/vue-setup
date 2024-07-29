import { faker } from '@faker-js/faker';
import mountComposable from './mountComposable';
import { describe, test, expect, vi } from 'vitest';
import { mount, type ComponentMountingOptions } from '@vue/test-utils';

vi.mock('@vue/test-utils', async (importActual) => {
  const actual = await importActual<typeof import('@vue/test-utils')>();
  return {
    ...actual,
    mount: vi.fn(actual.mount),
  };
});

const testComposableData = {
  data: {
    id: faker.string.uuid(),
  },
};
const testComposable = vi.fn(() => testComposableData);
const testArgs = [1, 3, { name: 'user' }];

describe('mountComposable', () => {
  test('should create valid vue wrapper with options provided', () => {
    const testOptions: ComponentMountingOptions<unknown> = {
      global: {
        renderStubDefaultSlot: true,
      },
    };
    const wrapper = mountComposable(testOptions, testComposable, ...testArgs);

    expect(mount).toHaveBeenCalledOnce();
    expect(mount).toHaveBeenCalledWith(expect.any(Object), testOptions);

    expect(testComposable).toHaveBeenCalledOnce();
    expect(testComposable).toHaveBeenCalledWith(...testArgs);

    expect(wrapper.vm).toStrictEqual(
      expect.objectContaining(testComposableData)
    );
  });
  test('should create valid vue wrapper without options provided', () => {
    const wrapper = mountComposable(testComposable, ...testArgs);

    expect(mount).toHaveBeenCalledOnce();
    expect(mount).toHaveBeenCalledWith(expect.any(Object), {});

    expect(testComposable).toHaveBeenCalledOnce();
    expect(testComposable).toHaveBeenCalledWith(...testArgs);

    expect(wrapper.vm).toStrictEqual(
      expect.objectContaining(testComposableData)
    );
  });
});
