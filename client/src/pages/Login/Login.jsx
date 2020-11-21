import React from 'react';
import './Login.css';
const Login = () => {
  return (
    <div className={'container'}>
      <h1 className={'title-log'}> Astrodate </h1>
      <p className={'tag-line'}>Find Love in the Stars! </p>
      <p className={'help-text'}>
        {' '}
        By signing up for Astrodate, you agree to our Terms of Service . Learn
        how we process your data in our Privacy Policy and Cookies Policy.{' '}
      </p>
      <button className={'sign-in-button'} type="submit">
        {' '}
        <p>Sign in with Apple</p>
      </button>
      <button className={'sign-in-button'} type="submit">
        {' '}
        <p>Sign in with Facebook</p>
      </button>
      <button className={'sign-in-button'} type="submit">
        {' '}
        <p>Sign in with Phone Number</p>
      </button>
    </div>
  );
};

export default Login;
