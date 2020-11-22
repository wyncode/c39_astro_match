import React from 'react';
import { Icon } from '@material-ui/core';
import AstroLogo from '../images/Logo.svg';

const Logo = (props) => {
  return (
    <Icon>
      <img
        src={AstroLogo}
        height={props.height || 25}
        width={props.width || 25}
      />
    </Icon>
  );
};

export default Logo;
