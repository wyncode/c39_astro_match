import React from 'react';
import { TextField } from '@material-ui/core';

const PartThree = ({ handleChange }) => {
  return (
    <>
      <div className={'text-field-holder-su'}>
        <h2> What is your current zip code? </h2>
        <TextField
          id="zipCode"
          type="text"
          placeholder="zipcode"
          onChange={handleChange}
          className="user-input-su"
          required
        />
        <h2> What is your name?</h2>
        <TextField
          id="name"
          type="text"
          placeholder="FirstName LastName"
          onChange={handleChange}
          className="user-input-su"
          required
        />
        <h2> What is your email?</h2>
        <TextField
          id="email"
          type="email"
          placeholder="email"
          onChange={handleChange}
          className="user-input-su"
          required
        />
        {/* <p className="size"> Disclaimer: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis adipiscing tortor facilisi purus fermentum ultricies. In faucibus ac venenatis, quisque eget. </p> */}
        <h2> Please create your account password. </h2>
        <TextField
          id="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
          className="user-input-su"
          required
        />
        <h2> Please confirm your password. </h2>
        <TextField
          id="password_confirm"
          type="password"
          placeholder="password"
          onChange={handleChange}
          className="user-input-su"
          required
        />
      </div>
    </>
  );
};
export default PartThree;
