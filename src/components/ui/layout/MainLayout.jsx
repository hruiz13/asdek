import { Box, Grid } from '@mui/material'
import React from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useMainLayoutStyles } from './mainLayoutStyles'

export const MainLayout = ({ children }) => {
  const { classes } = useMainLayoutStyles()
  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Header />
      <Box>
        {children}
      </Box>
      <Footer />
    </Grid>
  )
}
