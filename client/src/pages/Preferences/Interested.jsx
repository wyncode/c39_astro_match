import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import clsx from 'clsx';

const options = [
  'Cis Man',
  'Trans Man',
  'Trans Woman',
  'Cis Woman',
  'Non-binary'
];

//label on top and un underline to choose whichone you have

const useStyles = makeStyles({
  root: {
    background: '#ffffff',
    padding: '0em',
    borderRadius: '1em',
    height: '4em',
    width: '7em',
    border: 0,
    color: '#181826'
    //   height: 48,
    //   padding: '0 30px',
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  // label: {
  //   textTransform: 'capitalize',
  //   content: 'asdasdasdds'
  // },
  icon: {
    //the icon (if it's a check mark or not oooooh)
    borderRadius: '50%',
    // backgroundColor: 'blue',
    width: '1em',
    height: '1em',
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'green'
    }
  },
  checkedIcon: {
    backgroundColor: '#ffd76e',
    // width: '1em',
    // height: '0.5em',
    // visibility: 'hidden',
    '&:before': {
      //before the check, like the hover over
      // borderRadius: '5px',
      // display: 'block',
      // width: '1em',
      // height: '0.5em',
      content: '""'
      // visibility: 'hidden',
    }
  }
});

const Interested = (props) => {
  const classes = useStyles();

  // const handleClick = (e) => {
  //   console.log(e.target);
  //   console.log(e.target.name);
  // };
  return (
    <div>
      <div className={`answer-container`}>
        {options.map((identity, i) => (
          //   <div
          //     key={identity}
          //     name={i}
          //     className={`button-identity`}
          //     id="gender"
          //     onClick={handleClick}
          //     value={identity}
          //   >
          //     <p className={'button-identity-p'}>{identity}</p>
          //   </div>

          // <Checkbox
          // className={classes.root}
          // checkedIcon={
          //   <span className={clsx(classes.icon, classes.checkedIcon)} />
          // } />

          <FormControlLabel
            className={`${classes.root} centerMe`}
            // onClick={props.handleClick}
            labelPlacement="end"
            // value="top"
            control={
              <Checkbox
                // className={classes.root}
                onClick={props.handleClick}
                value={identity}
                checkedIcon={
                  <span className={clsx(classes.icon, classes.checkedIcon)} />
                }
              />
            }
            label={identity}
            // className={'radio-buttons-signs'}
          />
        ))}
      </div>
    </div>
  );
};

export default Interested;
