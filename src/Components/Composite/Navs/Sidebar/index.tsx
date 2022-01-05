import React, { FC } from 'react'
// import PropTypes from 'prop-types'
import { Box, Divider, Drawer, useMediaQuery } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import UserIcon from '@mui/icons-material/Person'
// Local
import { Logo } from '../../../Simple/Logo'
import { NavItem } from '../nav-item'

interface IProps {
  onClose?(
    event: Record<string, unknown>,
    reason: 'backdropClick' | 'escapeKeyDown'
  ): void
  open?: boolean
}

const items = [
  {
    href: '/',
    icon: <SearchIcon fontSize="small" />,
    title: 'Track Nutrients',
  },
  {
    href: '/create-meal',
    icon: <MenuBookIcon fontSize="small" />,
    title: 'Create a Meal',
  },
  {
    href: '/about',
    icon: <UserIcon fontSize="small" />,
    title: 'About',
  },
]

export const Sidebar: FC<IProps> = ({ open, onClose }) => {
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
  //   defaultMatches: true,
  //   noSsr: false,
  // })

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <div>
        <Box sx={{ p: 3 }}>
          <a href="/">
            <Logo />
          </a>
        </Box>
      </div>
      <Divider
        sx={{
          borderColor: '#2D3748',
          my: 3,
        }}
      />
      <Box sx={{ flexGrow: 1 }}>
        {items.map((item) => (
          <NavItem
            key={item.title}
            icon={item.icon}
            href={item.href}
            title={item.title}
          />
        ))}
      </Box>
    </Box>
  )

  // if (lgUp) {
  //   return (
  //     <Drawer
  //       anchor="left"
  //       open
  //       PaperProps={{
  //         sx: {
  //           backgroundColor: 'neutral.900',
  //           color: '#FFFFFF',
  //           width: 280,
  //         },
  //       }}
  //       variant="permanent"
  //     >
  //       {content}
  //     </Drawer>
  //   )
  // }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  )
}

Sidebar.defaultProps = {
  onClose: () => null,
  open: false,
}

// Sidebar.propTypes = {
//   onClose: PropTypes.func,
//   open: PropTypes.bool,
// }
