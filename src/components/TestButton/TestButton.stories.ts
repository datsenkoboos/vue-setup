import type { Meta } from '@storybook/vue3'
import TestButton from './TestButton.vue'

const meta: Meta<typeof TestButton> = {
  component: TestButton,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Primary = {
  render: () => ({
    components: { TestButton },
    template: '<TestButton> Button </TestButton>',
  }),
}
