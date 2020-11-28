import React, { useState, useContext, useEffect } from 'react';
import './Profile.css';
import axios from 'axios';

import swal from 'sweetalert';
import { TextField } from '@material-ui/core';
// import { Container, Image, Button } from 'react-bootstrap';

const Profile = () => {
  useEffect(() => {
    axios
      .get('/api/users/me', { withCredentials: true })
      .then((res) => console.log(res));
    // .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>Your Profile</h1>
      <p>Top personality traits are based on: </p>
    </div>
  );
};

export default Profile;
