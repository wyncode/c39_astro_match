import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LibraImg from '../Images/ZodiacImages/Libra.svg';

const Libra = (props) => {
  const useStyles = makeStyles(
    {
      root: {},
      libraClass: {
        background: 'transparent',
        boxShadow: 'none'
      }
    },
    { name: 'MuiIcon' }
  );
  const classes = useStyles();

  return (
    <Paper className={classes.libraClass}>
      <img src={LibraImg} width={props.width} height={props.height} />
    </Paper>
  );
};

export default Libra;
