import React from 'react';
import { Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AstroLogo from './Images/Vectors/Matches/LogoGraphicThin.svg';

const Logo = (props) => {
  const useStyles = makeStyles(
    {
      root: {
        width: `${props.width}em`,
        height: `${props.height}em`
      }
    },
    { name: 'MuiIcon' }
  );

  const classes = useStyles(props);
  return (
    <Icon>
      <img
        className={classes.root}
        src={AstroLogo}
        height={props.height || 25}
        width={props.width || 25}
      />
    </Icon>
  );
};

export default Logo;
