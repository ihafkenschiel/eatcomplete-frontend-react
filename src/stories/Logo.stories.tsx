import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Logo } from 'Components/logo'

export default {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFF' },
        { name: 'dark', value: '#000' },
      ],
    },
  },
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = () => <Logo />

export const LightBackground = Template.bind({})
LightBackground.parameters = {
  backgrounds: { default: 'light' },
}

export const DarkBackground = Template.bind({})
DarkBackground.parameters = {
  backgrounds: { default: 'dark' },
}
