import TestBtn from './TestBtn.vue';
import { describe, test, expect, beforeEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/vue';

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
    const testSlotContent = 'test slot content';
    mount(testSlotContent);

    const testBtn = screen.getByRole('button');
    expect(testBtn.textContent).toBe(testSlotContent);
  });
});
