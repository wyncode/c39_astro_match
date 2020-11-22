import React from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import SliderMark from './SliderMark';

const RangeSliderCss = withStyles({
  root: {
    color: '#ffffff',
    height: 3,
    //   padding: '13px 0',
    margin: '2em 1em 2em 1em',
    width: '90vw'
    // width: 300 + theme.spacing(3) * 2
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#DFBC60',
    //   border: '1px solid currentColor',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '0px 0px 10px 3px #DFBC60',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0 2px 3px 1px'
    },
    '& .bar': {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: 'red',
      marginLeft: 1,
      marginRight: 1
    }
  },
  active: {},
  track: {
    height: 3
  },
  valueLabel: {
    // left: 'calc(-50% + 4px)',
    color: '#DFBC60'
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3
  }
})(Slider);

// const useStyles = makeStyles((theme) => ({
//     root: {
//       width: 300 + theme.spacing(3) * 2
//     //   backgroundColor: '#ffffff',
//     //   color: '#3880ff'
//     },
//     marks: {
//     //   height: theme.spacing(3),
//     },
//   }));

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
      <RangeSliderCss
        ThumbComponent={SliderMark}
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
