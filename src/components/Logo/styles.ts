import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    animation: '$Logo-spin infinite 1s linear',
    margin: 'auto',
  },
  '@keyframes Logo-spin': {
    "0%": {
      transform: 'rotate(0deg)',
    },
    "100%": {
      transform: 'rotate(360deg)',
    }
  }
}));