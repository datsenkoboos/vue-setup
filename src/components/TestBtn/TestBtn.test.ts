import TestBtn from './TestBtn.vue';
import { describe, test, expect, beforeEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/vue';
import { faker } from '@faker-js/faker';

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
