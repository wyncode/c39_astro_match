import React from 'react';
import { Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AriesLogo from '../Images/Vectors/Matches/Aries.svg';

const Aries = (props) => {
  const useStyles = makeStyles(
    {
      root: {},
      ariesClass: {
        width: `${props.width}rem`,
        height: `${props.height}rem`
        // background: 'transparent'
      }
    },
    { name: 'MuiIcon' }
  );

  const classes = useStyles(props);
  return (
    <Paper>
      <img src={AriesLogo} className={classes.ariesClass} />
    </Paper>
  );
};

export default Aries;
