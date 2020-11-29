import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TaurusImg from '../Images/ZodiacImages/Taurus.svg';

const Taurus = (props) => {
  const useStyles = makeStyles(
    {
      root: {},
      taurusClass: {
        background: 'transparent',
        boxShadow: 'none'
      }
    },
    { name: 'MuiIcon' }
  );
  const classes = useStyles();

  return (
    <Paper className={classes.taurusClass}>
      <img src={TaurusImg} width={props.width} height={props.height} />
    </Paper>
  );
};

export default Taurus;
