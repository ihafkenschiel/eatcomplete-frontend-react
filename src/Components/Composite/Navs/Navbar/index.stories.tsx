import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Navbar } from './index'

export default {
  title: 'Components/Composite/Navs/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = () => <Navbar />

export const Default = Template.bind({})
Default.args = {}
