import React, { useState } from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography, InputBase, Badge } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { useHeaderStyles } from './headerStyles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { ProfileMenu } from './ProfileMenu'

const menuId = 'primary-search-account-menu'

export const Header = () => {
  const { classes } = useHeaderStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            ASDEK
          </Typography>
          <div className={classes.searchContainer}>
            <div className={classes.iconContainer}>
              <SearchIcon />
            </div>
            <InputBase
              className={classes.headerInput}
              placeholder='Buscar...'
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div>
            <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
              <Badge badgeContent={4} color='warning'>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
          <div>
            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <ProfileMenu anchorEl={anchorEl} handleMenuClose={handleMenuClose} menuId={menuId} />
    </Box>
  )
}
