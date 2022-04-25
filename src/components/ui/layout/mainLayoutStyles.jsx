import { makeStyles } from 'tss-react/mui'

export const useMainLayoutStyles = makeStyles()(
  (theme) => ({
    mainContainer: {
      backgroundColor: theme.palette.background.default
    }
  })

)
