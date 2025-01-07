import { faker } from '@faker-js/faker';
import { cleanup, render, screen } from '@testing-library/vue';
import { beforeEach, describe, expect, test } from 'vitest';

import TestBtn from './TestBtn.vue';

describe('TestBtn', () => {
  beforeEach(() => {
    mount();
  });

  const mount = (slotContent = '') => {
    cleanup();
    render(TestBtn, {
      slots: {
        default: slotContent,
      },
    });
  };

  test('should render slot content', () => {
    const testSlotContent = faker.string.uuid();
    mount(testSlotContent);

    const testBtn = screen.getByRole('button');

    expect(testBtn.textContent).toBe(testSlotContent);
  });
});
