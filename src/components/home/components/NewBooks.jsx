import React, { useEffect, useId } from 'react'
import { Card, CardContent, Grid, Typography } from '@mui/material'
import { useHomeStyles } from '../homeStyles'
import { BookCard } from '../../ui/BookCard'
import { useDispatch, useSelector } from 'react-redux'
import { getNewBooks } from '../../../redux/books'

export const NewBooks = () => {
  const { classes } = useHomeStyles()
  const dispatch = useDispatch()
  const id = useId()
  const { news, newsLoading } = useSelector((state) => state.booksReducer)

  useEffect(() => {
    dispatch(getNewBooks())
  }, [])

  return (
    <Card variant='outlined' className={classes.homeNewBooks}>
      <CardContent className={classes.homeCardContent}>
        <Typography variant='h5' className={classes.homeTitle}>
          NUEVO
        </Typography>
        <Typography variant='body2'>
          Nuevos libros
        </Typography>
        <Grid container direction='row' justifyContent='space-between'>
          {
            newsLoading
              ? [...Array(5)].map((_, i) => (<BookCard loading={newsLoading} key={id + i} />))
              : news?.map((data, index) => (
                <BookCard loading={newsLoading} key={id + index} data={data} />
              ))
          }
        </Grid>
      </CardContent>
    </Card>
  )
}
