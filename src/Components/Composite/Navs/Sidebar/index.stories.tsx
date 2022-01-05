import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { OpenInBrowserRounded } from '@mui/icons-material'
import { Sidebar } from './index'

export default {
  title: 'Components/Composite/Navs/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = ({ open }) => (
  <Sidebar open={open} />
)

export const Open = Template.bind({})
Open.args = {
  open: true,
}

export const Closed = Template.bind({})
Closed.args = {
  open: false,
}
