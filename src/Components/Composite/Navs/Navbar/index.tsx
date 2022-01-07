import React, { FC } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { AppBar, Avatar, Box, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
// Local
import { theme } from 'Theme'

interface IProps {
  onSidebarOpen?(): void
}

const NavbarRoot = styled(AppBar)(() => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}))

export const Navbar: FC<IProps> = ({ onSidebarOpen }) => {
  return (
    <NavbarRoot
      sx={{
        left: {
          lg: 280,
        },
        width: {
          lg: 'calc(100% - 280px)',
        },
      }}
      // {...other}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: 64,
          left: 0,
          px: 2,
        }}
      >
        <IconButton
          onClick={onSidebarOpen}
          sx={{
            display: {
              xs: 'inline-flex',
              lg: 'none',
            },
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Avatar
          sx={{
            height: 40,
            width: 40,
            ml: 1,
          }}
          src="/static/images/avatars/avatar_1.png"
        >
          <AccountCircleIcon fontSize="small" />
        </Avatar>
      </Toolbar>
    </NavbarRoot>
  )
}

Navbar.defaultProps = {
  onSidebarOpen: () => null,
}

Navbar.propTypes = {
  onSidebarOpen: PropTypes.func,
}
