import { makeStyles } from 'tss-react/mui'

export const useHomeStyles = makeStyles()(
  (theme) => ({
    homeContainer: {

    },
    homeCard: {
      margin: '5px 5px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '10px',
      flexGrow: 1,
      [theme.breakpoints.up('lg')]: {
        margin: '30px 30px'
      }
    },
    homeCardIcon: {
      padding: 5,
      [theme.breakpoints.up('lg')]: {
        padding: 16
      }
    },
    homeNewBooks: {
      margin: '0 30px',
      display: 'flex',
      width: '100%'
    },
    homeTitle: {
      ...theme.typography.title
    },
    bookPrice: {
      color: theme.palette.warning.light
    },
    homeCardContent: {
      width: '100%',
      padding: 5,
      [theme.breakpoints.up('lg')]: {
        padding: 16
      }
    }
  })

)
