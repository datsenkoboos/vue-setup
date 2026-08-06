---
to: src/components/base/Base<%= name %>/Base<%= name %>.stories.ts
---
import type { Meta } from '@storybook/vue3-vite'
import Base<%= name %> from './Base<%= name %>.vue'

const meta: Meta<typeof Base<%= name %>> = {
  component: Base<%= name %>,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const Primary = {
  render: () => ({
    components: { Base<%= name %> },
    template: '<Base<%= name %> />',
  }),
}
