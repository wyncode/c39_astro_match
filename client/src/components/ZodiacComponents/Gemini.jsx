import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GeminiImg from '../Images/ZodiacImages/Gemini.svg';

const Gemini = (props) => {
  const useStyles = makeStyles(
    {
      root: {},
      geminiClass: {
        background: 'transparent',
        boxShadow: 'none'
      }
    },
    { name: 'MuiIcon' }
  );
  const classes = useStyles();

  return (
    <Paper className={classes.geminiClass}>
      <img src={GeminiImg} width={props.width} height={props.height} />
    </Paper>
  );
};

export default Gemini;
