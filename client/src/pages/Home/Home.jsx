import ReactDOM from 'react-dom';
import React, { Component, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import SignUp from '../SignUp';
import Login from '../Login/Login';
import Logo from '../../components/Logo';

const Home = () => {
  return (
    <div className={'homecontainer'}>
      <h1 className={'hometitle-log'}> Astrodate </h1>
      <Logo height={'7.625em'} width={'10.625em'} />
      <p className={'hometag-line'}>Find Love in the Stars!</p>
      <p className={'homehelp-text'}>
        {' '}
        By signing up for Astrodate, you agree to our Terms of Service . Learn
        how we process your data in our Privacy Policy and Cookies Policy.{' '}
      </p>
      <ul>
        <li className={'create'}>
          <Link to="/signup">
            <button className={'account'}>Create Free Account</button>
          </Link>
        </li>
        <li className={'log'}>
          <Link to="/login">
            <a className="sign">Sign In</a>
          </Link>{' '}
        </li>
      </ul>
    </div>
  );
};

export default Home;
