import { Box, Container, Grid } from '@mui/material'

export const FullWidthLayout = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          {children}
        </Grid>
      </Container>
    </Box>
  )
}
