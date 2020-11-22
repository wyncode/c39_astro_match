import React from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';

const StyledSlider = withStyles({
  root: {
    color: '#ffffff',
    height: '0.5em',
    margin: '2em 1em 2em 1em',
    width: '90vw'
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#DFBC60',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '0px 0px 10px 3px #DFBC60',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0 2px 3px 1px'
    }
  },
  markLabel: {
    color: '#ffffff'
  },
  active: {},
  track: {
    height: 3
  },
  valueLabel: {
    color: '#DFBC60'
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3
  }
})(Slider);

const RangeSlider = (props) => {
  const marks = [
    {
      value: props.min,
      label: `${props.min}`
    },
    {
      value: props.max,
      label: `${props.max}`
    }
  ];

  return (
    <div>
      <StyledSlider
        step={props.step}
        marks={marks}
        valueLabelDisplay="auto"
        getAriaLabel={(index) => (index === 0 ? 'Minimum age' : 'Maximum age')}
        defaultValue={
          props.id === 'age'
            ? [props.min, props.max]
            : (props.min + props.max) / 2
        }
        min={props.min}
        max={props.max}
      />
    </div>
  );
};

export default RangeSlider;
