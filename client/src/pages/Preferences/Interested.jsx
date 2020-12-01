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
    color: '#181826',
    paddingLeft: '1em'
  },
  icon: {
    borderRadius: '50%',
    width: '1em',
    height: '1em',
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'green'
    }
  },
  checkedIcon: {
    backgroundColor: '#ffd76e',
    '&:before': {
      content: '""'
    }
  }
});

const Interested = (props) => {
  const classes = useStyles();

  return (
    <div>
      <div className={`answer-container`}>
        {options.map((identity, i) => (
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
          />
        ))}
      </div>
    </div>
  );
};

export default Interested;
