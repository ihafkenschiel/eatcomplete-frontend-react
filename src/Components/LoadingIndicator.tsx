import { Box, CircularProgress } from '@mui/material'

const LoadingIndicator = () => {
  return (
    <Box
      m={2}
      p={3}
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  )
}

export default LoadingIndicator
