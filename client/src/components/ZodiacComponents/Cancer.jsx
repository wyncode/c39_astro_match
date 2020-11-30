import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CancerImg from '../Images/ZodiacImages/Cancer.svg';

const Cancer = (props) => {
  const useStyles = makeStyles(
    {
      root: {},
      cancerClass: {
        background: 'transparent'
      }
    },
    { name: 'MuiIcon' }
  );
  const classes = useStyles();

  return (
    <Paper className={classes.cancerClass}>
      <img src={CancerImg} width={props.width} height={props.height} />
    </Paper>
  );
};

export default Cancer;
