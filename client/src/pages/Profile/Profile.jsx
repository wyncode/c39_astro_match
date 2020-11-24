import React, { useState, useContext, useEffect } from 'react';
import './Profile.css';
import axios from 'axios';
// import swal from 'sweetalert';
// import { TextField } from '@material-ui/core';
// import { Container, Image, Button } from 'react-bootstrap';
import Navigation from '../../components/NavigationBar';

const Profile = () => {
  //bring in user from app context
  //use that object to render user info

  return (
    <div>
      <Navigation />
      <h1>Your Profile</h1>
      <p>Top personality traits are based on: </p>
    </div>
  );
};

export default Profile;
