import PropTypes from 'prop-types'
import { Box, Divider, Drawer, useMediaQuery } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import { User as UserIcon } from 'Icons/user'
import { Logo } from '../logo'
import { NavItem } from './nav-item'

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

export const DashboardSidebar = (props) => {
  const { open, onClose } = props
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false,
  })

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
            <Logo
              sx={{
                height: 42,
                width: 42,
              }}
            />
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

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    )
  }

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

DashboardSidebar.defaultProps = {
  onClose: () => null,
  open: false,
}

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
}
