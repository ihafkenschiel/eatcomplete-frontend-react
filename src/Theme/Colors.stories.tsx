import React from 'react'

import { theme } from 'Theme'

export const Colors = () => {
  const capitalize = (word: string) =>
    word.charAt(0).toUpperCase() + word.slice(1)

  const getSwatches = (swatches: string[]) =>
    Object.entries(swatches).map(function renderVariant([variantName, color]: [
      string,
      string
    ]): JSX.IntrinsicElements['div'] {
      return (
        <div key={variantName} style={{ backgroundColor: color, padding: 10 }}>
          {variantName}
        </div>
      )
    })

  const colors = Object.entries(theme.palette).map(([colorName, variants]) => {
    if (typeof variants !== 'object') return null

    return (
      <div key={colorName} style={{ padding: 20, textAlign: 'center' }}>
        <h2>{capitalize(colorName)}</h2>
        {getSwatches(variants)}
      </div>
    )
  })

  return <div style={{ display: 'flex', flexWrap: 'wrap' }}>{colors}</div>
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
