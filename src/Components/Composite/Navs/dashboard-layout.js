import { useState } from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Navbar } from './Navbar/Navbar'
import { DashboardSidebar } from './dashboard-sidebar'

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 100,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280,
  },
}))

export const DashboardLayout = (props) => {
  const { children } = props
  const [isSidebarOpen, setSidebarOpen] = useState(true)

  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          {children}
        </Box>
      </DashboardLayoutRoot>
      <Navbar onSidebarOpen={() => setSidebarOpen(true)} />
      <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
    </>
  )
}
