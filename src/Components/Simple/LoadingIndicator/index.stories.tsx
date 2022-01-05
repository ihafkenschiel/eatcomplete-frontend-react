import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
// Local
import LoadingIndicator from 'Components/Simple/LoadingIndicator'

export default {
  title: 'Components/Simple/LoadingIndicator',
  component: LoadingIndicator,
  decorators: [withKnobs],
} as ComponentMeta<typeof LoadingIndicator>

const Template: ComponentStory<typeof LoadingIndicator> = (args) => (
  <LoadingIndicator {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  size: 50,
  thickness: 10,
}
