import type { Meta } from '@storybook/vue3';

import TestBtn from './TestBtn.vue';

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
