import { makeStyles } from 'tss-react/mui'

export const useHomeStyles = makeStyles()(
  (theme) => ({
    bookPrice: {
      color: theme.palette.warning.light
    },
    cardImage: {
      width: 230,
      height: 360
    },
    spacer: {
      display: 'flex',
      flexGrow: 1
    }
  })

)
