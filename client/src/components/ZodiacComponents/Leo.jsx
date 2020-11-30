import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LeoImg from '../Images/ZodiacImages/Leo.svg';

const Leo = (props) => {
  const useStyles = makeStyles(
    {
      root: {},
      leoClass: {
        background: 'transparent',
        boxShadow: 'none'
      }
    },
    { name: 'MuiIcon' }
  );
  const classes = useStyles();

  return (
    <Paper className={classes.leoClass}>
      <img src={LeoImg} width={props.width} height={props.height} />
    </Paper>
  );
};

export default Leo;
