import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
// Local
import ErrorMessage from './index'

export default {
  title: 'Components/Simple/ErrorMessage',
  component: ErrorMessage,
  decorators: [withKnobs],
} as ComponentMeta<typeof ErrorMessage>

const Template: ComponentStory<typeof ErrorMessage> = ({ children }) => (
  <ErrorMessage>{children}</ErrorMessage>
)

export const Primary = Template.bind({})
Primary.args = {
  children: 'This is a warning message!',
}
