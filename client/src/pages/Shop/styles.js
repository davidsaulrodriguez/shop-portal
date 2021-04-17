import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  myMasonryGrid: {
    display: 'flex',
    marginLeft: '-15px',
    marginTop: '20px',
    width: 'auto',
  },
  myMasonryGridColumn: {
    paddingLeft: '15px',
    backgroundClip: 'padding-box',
  },

  myMasonryGridColumnDiv: {
    background: 'white',
    marginBottom: '15px',
  },
}));

export default useStyles;
