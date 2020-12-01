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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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
      <h1 className={'title-log'}> AstroDate </h1>
      <Logo height={'7.625em'} width={'10.625em'} />
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
            required
            size="small"
            // id="outlined-required"
            variant="outlined"
          />
          <br />
          <TextField
            id="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
            className="user-login"
            // id="outlined-password-input"
            required
            size="small"
            autoComplete="current-password"
            variant="outlined"
          />
          <br className="space"></br>
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
