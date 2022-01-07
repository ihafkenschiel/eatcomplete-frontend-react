import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
// Local
import { capitalize } from 'Utils/Text'

import { theme } from 'Theme'

export const Typography = () => {
  const typographies = Object.entries(theme.typography).map(
    ([category, styles]) => {
      if (typeof styles !== 'object') return null

      return (
        <div key={category} style={{ padding: 20 }}>
          <h2 style={{ color: theme.palette.info.main }}>
            {capitalize(category)}
          </h2>
          <span style={styles}>Lorem ipsum dolor sit amet</span>
        </div>
      )
    }
  )

  return (
    <div style={{ fontFamily: theme.typography.fontFamily }}>
      {typographies}
    </div>
  )
}

export default {
  title: 'Theme/Typography',
  component: Typography,
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
