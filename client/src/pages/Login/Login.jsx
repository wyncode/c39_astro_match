import React, { useState, useContext } from 'react';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';
import Logo from '../../components/Logo';

const Login = ({ history }) => {
  const [showEmail, setShowEmail] = useState('');
  const [loginData, setLoginData] = useState('');
  const { setCurrentUser } = useContext(AppContext);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
    console.log(loginData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(`Will send this to the backend`, loginData);
      const response = await axios.post('/api/login', loginData);
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data.user);
      history.push('/profile');
    } catch (error) {
      console.log('SignUp Error: ', error);
    }
  };

  return (
    <div className={'container-login'}>
      <h1 className={'title-log'}> Astrodate </h1>
      <Logo height={7.625} width={10.625} />
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
      <button
        className={'sign-in-button'}
        type="submit"
        onClick={() => setShowEmail(!showEmail)}
      >
        {' '}
        <p>Sign in with Email</p>
      </button>
      {showEmail && (
        <form className={'user-login-holder'} onSubmit={handleSubmit}>
          <TextField
            id="email"
            type="email"
            onChange={handleChange}
            placeholder="email address"
            className="user-login"
          />
          <br />
          <TextField
            id="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
            className="user-login"
          />
          <input type="submit" />
        </form>
      )}
      {showEmail ? (
        <div></div>
      ) : (
        <Link className={'back-link'} to="/">
          {' '}
          Back{' '}
        </Link>
      )}
    </div>
  );
};

export default Login;
