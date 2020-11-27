import React, { Component } from 'react';
import LogoHorizontal from '../components/Images/Vectors/Matches/LogoHorizontal.svg';
import hamburger from '../components/Images/Vectors/Matches/hamburger.svg';
// import navbarfade from '../components/Images/Vectors/Matches/navbarfade.svg';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <div>
      <div className="borderBuffer" alt="faded splash screen">
        <div className="navbar">
          <img src={LogoHorizontal} className="logo" />
          <img src={hamburger} className="menu" />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
