import { makeStyles } from 'tss-react/mui'

export const useFooterStyles = makeStyles()(
  (theme) => ({
    footerContainer: {
      backgroundColor: theme.palette.info.main,
      height: '200px'
    }
  })

)
