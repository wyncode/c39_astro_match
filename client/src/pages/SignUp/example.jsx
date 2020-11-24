import React from 'react';
import {
  TextField,
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from '@material-ui/core';
import './SignUp.css';

const SignUp = () => {
  return (
    <>
      <form>
        <label>
          {' '}
          Gender
          <input type="radio" name="gender" />
          <input type="radio" name="gender" />
          <input type="radio" name="gender" />
          <input type="radio" name="gender" />
          <input type="radio" name="gender" />
        </label>
        <label>
          {' '}
          Interested In
          <input type="checkbox" name="gender" />
          <input type="checkbox" name="gender" />
          <input type="checkbox" name="gender" />
          <input type="checkbox" name="gender" />
          <input type="checkbox" name="gender" />
        </label>
        <label>
          Birthday
          <input type="date" />
        </label>
        <label>
          Time of Birth
          <input type="time" />
        </label>
        <label>
          Where were you born
          <input type="" />
          <input type="" />
        </label>
        <label>
          Zipcode
          <input type="number" />
        </label>
        <label>
          Name <input type="text" />{' '}
        </label>
        <label>
          Email <input type="email" />{' '}
        </label>
        <label>
          Password <input type="password" />{' '}
        </label>
      </form>
    </>
  );
};

export default SignUp;
