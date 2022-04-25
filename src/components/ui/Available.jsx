import { Chip } from '@mui/material'
import React from 'react'

export const Available = ({ isAvailable }) => {
  if (isAvailable) {
    return (
      <Chip label='En Stock' color='primary' variant='outlined' />
    )
  } else {
    return (
      <Chip label='Agotado' color='warning' variant='outlined' />
    )
  }
}
