import { Grid } from '@mui/material'
import React from 'react'
import { HomeCard } from './components/HomeCard'
import { useHomeStyles } from './homeStyles'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { NewBooks } from './components/NewBooks'

export const Home = () => {
  const { classes } = useHomeStyles()

  return (
    <Grid container direction='column' justifyContent='center'>
      <Grid container alignSelf='center' justifyContent='center' className={classes.homeContainer} maxWidth='1440px'>
        <Grid item container xs={4} direction='column' alignContent='stretch' justifyContent='center'>
          <HomeCard
            title='Nuestro horario de atencion'
            content='9am - 6pm lunes a viernes 9am - 12m sabados'
            icon={<AccessTimeIcon sx={{ fontSize: 80 }} />}
          />
        </Grid>
        <Grid item container xs={4} direction='column' alignContent='stretch' justifyContent='center'>
          <HomeCard
            title='Envios'
            content='Envios a nivel nacional'
            icon={<AccessTimeIcon sx={{ fontSize: 80 }} />}
          />
        </Grid>
        <Grid item container xs={4} direction='column' alignContent='stretch' justifyContent='center'>
          <HomeCard
            title='Nuestros medios de pagos'
            content={<span>- Transferencia Nequi <br />-Transferencia Bancolombia</span>}
            icon={<AccessTimeIcon sx={{ fontSize: 80 }} />}
          />
        </Grid>
      </Grid>
      <Grid container alignSelf='center' className={classes.homeContainer} maxWidth='1440px'>
        <NewBooks />
      </Grid>
    </Grid>
  )
}
