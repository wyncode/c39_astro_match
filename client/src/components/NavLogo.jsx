import React from 'react';
import { Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AstroLogo from './Images/Vectors/Matches/LogoGraphic.svg';

const NavLogo = (props) => {
  const useStyles = makeStyles(
    {
      thing: {
        width: `${props.width || 1}em`,
        height: `${props.width || 1}em`,
        position: 'relative',
        bottom: '14%'
      }
    },
    { name: 'MuiIcon' }
  );

  const classes = useStyles(props);
  return (
    <Icon>
      <img className={classes.thing} src={AstroLogo} />
    </Icon>
  );
};

export default NavLogo;
