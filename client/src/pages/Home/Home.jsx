import ReactDOM from 'react-dom';
import React, { Component, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import SignUp from '../SignUp';
import Login from '../Login';

const Home = () => {
  return (
    //  <div className={'home-container'}>
    <body className={'body'}>
      <div className={'div'}>
        <head>
          <title className="title">AstroDate</title>
        </head>
        <h1 className={'h1'}>Find Love in the Stars</h1>
        <h2 className={'h2'}>
          By signing up for AstroDate, you agree to our Terms of Service . Learn
          how we process your data in our Privacy Policy and Cookies Policy
        </h2>
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
    </body>
  );
};

export default Home;
