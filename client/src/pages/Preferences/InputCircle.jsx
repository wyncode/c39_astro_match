import React from 'react';
import { Checkbox } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  icon: {
    borderRadius: '50%',
    width: '1em',
    height: '1em',
    backgroundColor: '#181826',
    'input:hover ~ &': {
      backgroundColor: '#5a5a91'
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)'
    }
  },
  checkedIcon: {
    backgroundColor: '#ffd76e',
    '&:before': {
      display: 'block',
      width: '1em',
      height: '1em',
      content: '""'
    },
    'input:hover ~ &': {
      backgroundColor: '#DFBC60'
    }
  }
});

const InputCircle = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Checkbox
        className={classes.root}
        onChange={props.handleChange}
        inputProps
        value={props.value}
        id="zodiac"
        lab
        disableRipple
        checkedIcon={
          <span className={clsx(classes.icon, classes.checkedIcon)} />
        }
        icon={<span className={classes.icon} />}
        // inputProps={{ 'aria-label': 'decorative checkbox' }}
      />
    </div>
  );
};

export default InputCircle;
