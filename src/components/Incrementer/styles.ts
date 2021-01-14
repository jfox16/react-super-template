import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 30,
    cursor: 'pointer',
    fontSize: 24,
    textAlign: 'center',
    margin: 'auto',
    padding: 30,
    width: 300,
    
    '&:hover': {
      backgroundColor: '#a8d9ff'
    }
  }
}));