import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PiscesImg from '../Images/ZodiacImages/Pisces.svg';

const Pisces = (props) => {
  const useStyles = makeStyles(
    {
      root: {},
      piscesClass: {
        background: 'transparent',
        boxShadow: 'none'
      }
    },
    { name: 'MuiIcon' }
  );
  const classes = useStyles();

  return (
    <Paper className={classes.piscesClass}>
      <img src={PiscesImg} width={props.width} height={props.height} />
    </Paper>
  );
};

export default Pisces;
