import React, { Component } from 'react';
import LogoHorizontal from '../components/Images/Vectors/Matches/LogoHorizontal.svg';
import hamburger from '../components/Images/Vectors/Matches/hamburger.svg';
import './Navigation.css';

// import { Link } from 'react-router-dom';

export class NavigationBar extends Component {

  render() {
    return (
      <div>
        <div className="borderBuffer">
          <div className="navbar">
            <img src={LogoHorizontal} className="logo" />
            <img src={hamburger} className="menu" />
          </div>
        </div>
      </div>
    )
  }
}

export default NavigationBar;
