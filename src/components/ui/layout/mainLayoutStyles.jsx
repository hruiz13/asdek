import { makeStyles } from 'tss-react/mui'

export const useMainLayoutStyles = makeStyles()(
  (theme) => ({
    mainContainer: {
      minHeight: '100vh',
      backgroundColor: theme.palette.background.default
    }
  })

)
