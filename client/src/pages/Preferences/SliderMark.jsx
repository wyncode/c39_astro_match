import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     bar: {
//         height: 27,
//         width: 27,
//         backgroundColor: 'red',
//         border: '1px solid currentColor',
//         marginTop: -12,
//         marginLeft: -13,
//         boxShadow: '#ebebeb 0 2px 2px',
//         '&:focus, &:hover, &$active': {
//             boxShadow: '#ccc 0 2px 3px 1px',
//     }
//     },
//     marks: {
//     //   height: theme.spacing(3),
//     },
//   }));

const SliderMark = (props) => {
  // const classes = useStyles();

  return (
    <div>
      <span {...props}>
        {/* <span className="classes.bar" />
                <span className="classes.bar" />
                <span className="classes.bar" /> */}
      </span>
    </div>
  );
};

export default SliderMark;
