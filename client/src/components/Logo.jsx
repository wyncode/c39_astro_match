import React from 'react';
import { Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AstroLogo from './Images/Vectors/Matches/LogoGraphicThin.svg';

const Logo = (props) => {
  const useStyles = makeStyles(
    {
      root: {
      },
      dif: {
        width: `${props.width}rem`,
        height: `${props.height}rem`,
        background: 'transparent'
      }
    },
    { name: 'MuiIcon' }
  );

  const classes = useStyles(props);
  return (
    <Paper className={classes.dif}>
      <img
        src={AstroLogo}
      />
    </Paper>
  );
};

export default Logo;
