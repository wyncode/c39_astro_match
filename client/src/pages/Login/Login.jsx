import React, { useState, useContext } from 'react';
import './Login.css';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';

const Login = ({ history }) => {
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post('/api/login', formData);
      console.log(response.data);
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data.user);
      history.push('/profile');
    } catch (error) {
      console.log('SignUp Error: ', error);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <label>
        Email <input name="email" type="email" onChange={handleChange} />{' '}
      </label>
      <label>
        Password{' '}
        <input name="password" type="password" onChange={handleChange} />{' '}
      </label>
      <input type="submit" />
    </form>
  );
};

export default Login;
