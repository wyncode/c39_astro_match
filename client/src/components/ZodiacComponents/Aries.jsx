import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AriesImg from '../Images/ZodiacImages/Aries.svg';

const Aries = (props) => {
  const useStyles = makeStyles(
    {
      root: {},
      ariesClass: {
        background: 'transparent',
        boxShadow: 'none'
      }
    },
    { name: 'MuiIcon' }
  );
  const classes = useStyles();

  return (
    <Paper className={classes.ariesClass}>
      <img src={AriesImg} width={props.width} height={props.height} />
    </Paper>
  );
};

export default Aries;
