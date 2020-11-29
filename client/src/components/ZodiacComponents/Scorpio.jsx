import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ScorpioImg from '../Images/ZodiacImages/Scorpio.svg';

const Scorpio = (props) => {
  const useStyles = makeStyles(
    {
      root: {},
      scorpioClass: {
        background: 'transparent',
        boxShadow: 'none'
      }
    },
    { name: 'MuiIcon' }
  );
  const classes = useStyles();

  return (
    <Paper className={classes.scorpioClass}>
      <img src={ScorpioImg} width={props.width} height={props.height} />
    </Paper>
  );
};

export default Scorpio;
