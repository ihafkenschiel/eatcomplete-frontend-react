import React, { FC } from 'react'
import { Box, CircularProgress } from '@mui/material'

export interface ILoadingIndicatorProps {
  color:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
  size: number
  thickness: number
}

const LoadingIndicator: FC<ILoadingIndicatorProps> = ({
  color,
  size,
  thickness,
}) => {
  return (
    <Box
      m={2}
      p={3}
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <CircularProgress color={color} size={size} thickness={thickness} />
    </Box>
  )
}

export default LoadingIndicator
