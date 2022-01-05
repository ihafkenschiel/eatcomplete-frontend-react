import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Logo } from 'Components/logo'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Logo',
}
