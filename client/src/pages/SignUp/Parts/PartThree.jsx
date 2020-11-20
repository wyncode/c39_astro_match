import React from 'react';
import {
  TextField,
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';

const handleChange = () => {
  console.log('hi');
};

const PartThree = ({ handleChange }) => {
  return (
    <div>
      <h2> What city do you live in? </h2>
      <TextField
        variant="filled"
        id="city"
        type="text"
        onChange={handleChange}
      />
      <h2> What is your name?</h2>
      <TextField
        variant="filled"
        id="name"
        type="text"
        onChange={handleChange}
      />
      <h2> What is your email?</h2>
      <TextField
        variant="filled"
        id="email"
        type="email"
        onChange={handleChange}
      />
      <h2> Please create your account password. </h2>
      <TextField
        variant="filled"
        id="password"
        type="password"
        onChange={handleChange}
      />
    </div>
  );
};

export default PartThree;
