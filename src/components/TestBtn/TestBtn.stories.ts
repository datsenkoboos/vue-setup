import TestBtn from './TestBtn.vue';
import type { Meta } from '@storybook/vue3';

const meta: Meta<typeof TestBtn> = {
  component: TestBtn,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Primary = {
  render: () => ({
    components: { TestBtn },
    template: '<TestBtn> Button </TestBtn>',
  }),
};
