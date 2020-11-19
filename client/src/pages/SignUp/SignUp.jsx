import React, { useState, useContext } from 'react';
import './SignUp.css';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';

const SignUp = ({ history }) => {
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post('/api', formData);
      console.log(response.data);
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data.user);
      // history.push('/profile');
    } catch (error) {
      console.log('SignUp Error: ', error);
    }
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSignUp}>
        <h2> How do you identify? </h2>
        <label>
          {' '}
          Trans Man{' '}
          <input
            type="radio"
            name="gender"
            value="Trans Man"
            onChange={handleChange}
          />
        </label>
        <label>
          {' '}
          Cis Man{' '}
          <input
            type="radio"
            name="gender"
            value="Cis Man"
            onChange={handleChange}
          />
        </label>
        <label>
          {' '}
          Trans Woman{' '}
          <input
            type="radio"
            name="gender"
            value="Trans Woman"
            onChange={handleChange}
          />
        </label>
        <label>
          {' '}
          Cis Woman{' '}
          <input
            type="radio"
            name="gender"
            value="Cis Woman"
            onChange={handleChange}
          />
        </label>
        <label>
          {' '}
          Non Binary{' '}
          <input
            type="radio"
            name="gender"
            value="Non Binary"
            onChange={handleChange}
          />
        </label>

        <br />

        <label>
          Birthday
          <input name="birthday" type="date" onChange={handleChange} />
        </label>
        <label>
          Time of Birth
          <input name="birthTime" type="time" onChange={handleChange} />
        </label>
        {/* making this a drop down menu, but for testing purposes it's fill in */}
        <label>
          Where were you born
          <input name="birthPlace" type="text" onChange={handleChange} />
        </label>
        {/* making below a drop down menu also, but for testing purposes it's fill in */}
        <label>
          What city do you currently live in?
          <input name="city" type="text" onChange={handleChange} />
        </label>
        {/* User will put first and last name intor this box, backend will sort it into first and last */}
        <label>
          Name <input name="name" type="text" onChange={handleChange} />{' '}
        </label>
        <label>
          Email <input name="email" type="email" onChange={handleChange} />{' '}
        </label>
        <label>
          Password{' '}
          <input name="password" type="password" onChange={handleChange} />{' '}
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default SignUp;
