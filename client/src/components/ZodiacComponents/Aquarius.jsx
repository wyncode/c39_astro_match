import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AquariusImg from '../Images/ZodiacImages/Aquarius.svg';

const Aquarius = (props) => {
  const useStyles = makeStyles(
    {
      root: {},
      aquariusClass: {
        background: 'transparent',
        boxShadow: 'none'
      }
    },
    { name: 'MuiIcon' }
  );
  const classes = useStyles();

  return (
    <Paper className={classes.aquariusClass}>
      <img src={AquariusImg} width={props.width} height={props.height} />
    </Paper>
  );
};

export default Aquarius;
