import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { theme } from 'Theme'

export const Colors = () => {
  const getSwatches = (swatches) =>
    Object.entries(swatches).map(([variantName, color]) => (
      <div style={{ backgroundColor: color }}>{variantName}</div>
    ))

  const colors = Object.entries(theme.palette).map(([colorName, variants]) => (
    <>
      <h1>{colorName}</h1>
      {getSwatches(variants)}
    </>
  ))

  return colors
}

export default {
  title: 'Theme/Colors',
  component: Colors,
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFF' },
        { name: 'dark', value: '#000' },
      ],
    },
  },
}
