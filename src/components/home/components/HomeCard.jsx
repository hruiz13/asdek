import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

import { useHomeStyles } from '../homeStyles'

export const HomeCard = ({ title, content, icon }) => {
  const { classes } = useHomeStyles()
  return (
    <Card variant='outlined' className={classes.homeCard}>
      <CardContent className={classes.homeCardContent}>
        <Typography variant='h6' component='div'>
          {title}
        </Typography>
        <Typography variant='body2'>
          {content}
        </Typography>
      </CardContent>

      <div className={classes.homeCardIcon}>
        {icon}
      </div>
    </Card>
  )
}
