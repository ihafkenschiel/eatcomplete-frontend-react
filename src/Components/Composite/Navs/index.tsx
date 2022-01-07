import React, { FC, useState } from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 100,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280,
  },
}))

interface IProps {
  children: JSX.Element
}

export const DashboardLayout: FC<IProps> = ({ children }) => {
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
      <Sidebar onClose={() => setSidebarOpen(false)} open={isSidebarOpen} />
    </>
  )
}
