import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
// Local
import LoadingIndicator from 'Components/LoadingIndicator'

export default {
  title: 'Components/LoadingIndicator',
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
