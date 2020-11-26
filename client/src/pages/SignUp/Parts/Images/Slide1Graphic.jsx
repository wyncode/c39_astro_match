import React from 'react';
import { Icon } from '@material-ui/core';
import ImageOne from '../../../../components/Images/Vectors/Matches/Undraw1.svg';
import { makeStyles } from '@material-ui/core/styles';

const Slide1Graphic = (props) => {
  const useStyles = makeStyles(
    {
      root: {
        width: `${props.width}em`,
        height: `${props.height}em`,
        fontSize: '1em',
        margin: '5em 1em 5em 1em',
        overflow: 'inherit',
        display: 'inline-table'
      }
    },
    { name: 'MuiIcon' }
  );

  const classes = useStyles(props);

  return (
    <Icon>
      <img
        className={classes.root}
        src={ImageOne}
        height={props.height || 30}
        width={props.width || 30}
      />
    </Icon>
  );
};

export default Slide1Graphic;
