import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CapricornImg from '../Images/ZodiacImages/Capricorn.svg';

const Capricorn = (props) => {
  const useStyles = makeStyles(
    {
      root: {},
      capricornClass: {
        background: 'transparent',
        boxShadow: 'none'
      }
    },
    { name: 'MuiIcon' }
  );
  const classes = useStyles();

  return (
    <Paper className={classes.capricornClass}>
      <img src={CapricornImg} width={props.width} height={props.height} />
    </Paper>
  );
};

export default Capricorn;
