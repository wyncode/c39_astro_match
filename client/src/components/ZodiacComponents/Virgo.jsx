import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import VirgoImg from '../Images/ZodiacImages/Virgo.svg';

const Virgo = (props) => {
  const useStyles = makeStyles(
    {
      root: {},
      virgoClass: {
        background: 'transparent',
        boxShadow: 'none'
      }
    },
    { name: 'MuiIcon' }
  );
  const classes = useStyles();

  return (
    <Paper className={classes.virgoClass}>
      <img src={VirgoImg} width={props.width} height={props.height} />
    </Paper>
  );
};

export default Virgo;
