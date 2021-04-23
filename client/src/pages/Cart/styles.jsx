import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom: '1rem',
    marginTop: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    marginTop: 'auto',
    height: 'auto',
  },
  checkout: {
    marginTop: theme.spacing(2),
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  CardActions: {
    display: 'flex',
    placeItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    marginBottom: 0,
  },
  content: {
    flex: '1 0 auto',
  },
  image: {
    minWidth: 300,
    height: 400,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  nativeSelect: {
    flexDirection: 'column',
  },
  // flexContainer: {
  //   display: 'flex',
  //   placeItems: 'center',
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   padding: theme.spacing(3, 2),
  //   marginTop: 'auto',
  //   marginBottom: 0,
  // },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  box: {
    // margin: theme.spacing(1),
    // minWidth: 120,
    flexGrow: 1,
    flexShrink: 1,
    textAlign: 'center',
  },
}));

export default useStyles;
