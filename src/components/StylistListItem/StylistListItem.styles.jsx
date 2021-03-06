import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
  stylistItem: {
    margin: spacing(2),
    padding: spacing(2),
  },
  info: {
    flexGrow: 1,
  },
  workTime: {
    width: 'auto',
    paddingLeft: spacing(2),
    flexGrow: 0,
  },
}));

export default useStyles;
