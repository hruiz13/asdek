import { Button, Grid, Skeleton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cart'
import { Available } from './Available'
import Information from './Information'
import { useHomeStyles } from './uiStyles'

export const BookCard = ({ loading, data }) => {
  const { classes } = useHomeStyles()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  const handleAddProduct = () => {
    console.log('CAMBIA SET IOEN')
    setOpen(true)
    dispatch(addProduct((data)))
  }

  if (loading) {
    return (
      <Grid container direction='column' width={230}>
        <Skeleton variant='rectangular' width={231} height={360} />
        <Skeleton height='35px' />
        <Skeleton />
        <Skeleton height='38px' width='50%' />
        <Skeleton height='25px' width='50%' />
        <Skeleton height='40px' width='50%' />
      </Grid>
    )
  }
  const { title, name, price, image, qtty } = data

  return (
    <Grid direction='column' width={230} container justifyContent='space-between'>
      <img className={classes.cardImage} src={image} alt={name} />
      <Typography variant='h5'>
        {title}
      </Typography>
      <div className={classes.spacer} />
      <Typography variant='subtitle'>
        {name}
      </Typography>
      <Grid width='50%'>
        <Available isAvailable={qtty > 0} />
      </Grid>
      <Typography variant='h6' className={classes.bookPrice}>
        {price}
      </Typography>
      <Button variant='contained' color='secondary' onClick={handleAddProduct}>
        Comprar
      </Button>
      <Information open={open} setOpen={setOpen} message='Item agregado al carrito!' />
    </Grid>
  )
}
