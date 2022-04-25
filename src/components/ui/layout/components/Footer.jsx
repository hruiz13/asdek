import { Grid } from '@mui/material'
import React from 'react'
import { useFooterStyles } from './footerStyles'

export const Footer = () => {
  const { classes } = useFooterStyles()
  return (
    <Grid container className={classes.footerContainer}>
      Footer
    </Grid>
  )
}
