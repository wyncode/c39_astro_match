import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SagittariusImg from '../Images/ZodiacImages/Sagittarius.svg';

const Sagittarius = (props) => {
  const useStyles = makeStyles(
    {
      root: {},
      sagittariusClass: {
        background: 'transparent',
        boxShadow: 'none'
      }
    },
    { name: 'MuiIcon' }
  );
  const classes = useStyles();

  return (
    <Paper className={classes.sagittariusClass}>
      <img src={SagittariusImg} width={props.width} height={props.height} />
    </Paper>
  );
};

export default Sagittarius;
