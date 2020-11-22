import React from 'react';
<<<<<<< HEAD
import { TextField } from '@material-ui/core';
=======
import {
  TextField,
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
>>>>>>> 36dcef695cf3fa7072f16212dda1a598d6ab2851

const PartThree = ({ handleChange }) => {
  return (
    <>
<<<<<<< HEAD
      <div className={'text-field-holder'}>
        <h2> What is your current zip code? </h2>
        <TextField
          id="zipCode"
          type="text"
          placeholder="zipcode"
          onChange={handleChange}
          className="user-input"
          required
        />
        <h2> What is your name?</h2>
        <TextField
          id="name"
          type="text"
          placeholder="FirstName LastName"
          onChange={handleChange}
          className="user-input"
          required
        />
        <h2> What is your email?</h2>
        <TextField
          id="email"
          type="email"
          placeholder="email"
          onChange={handleChange}
          className="user-input"
          required
        />
        {/* <p className="size"> Disclaimer: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis adipiscing tortor facilisi purus fermentum ultricies. In faucibus ac venenatis, quisque eget. </p> */}
        <h2> Please create your account password. </h2>
        <TextField
          id="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
          className="user-input"
          required
        />

        <h2> Please confirm your password. </h2>
        <TextField
          id="password_confirm"
          type="password"
          placeholder="password"
          onChange={handleChange}
          className="user-input"
          required
=======
      <div>
        <h2> What city do you live in? </h2>
        <TextField
          // variant="filled"
          id="city"
          type="text"
          onChange={handleChange}
          className="user-input"
        />
        <h2> What is your name?</h2>
        <TextField
          variant="filled"
          id="name"
          type="text"
          onChange={handleChange}
          className="user-input"
        />
        <h2> What is your email?</h2>
        <TextField
          variant="filled"
          id="email"
          type="email"
          onChange={handleChange}
          className="user-input"
        />
        <h2> Please create your account password. </h2>
        <TextField
          variant="filled"
          id="password"
          type="password"
          onChange={handleChange}
          className="user-input"
>>>>>>> 36dcef695cf3fa7072f16212dda1a598d6ab2851
        />
      </div>
    </>
  );
};
<<<<<<< HEAD
=======

>>>>>>> 36dcef695cf3fa7072f16212dda1a598d6ab2851
export default PartThree;
