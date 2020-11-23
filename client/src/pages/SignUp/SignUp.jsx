import React, { useState, useContext } from 'react';
import './SignUp.css';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { schema } from './schema';
import Start from './Parts/Start';

const SignUp = ({ history }) => {
  const { gender, setGender, setCurrentUser } = useContext(AppContext);
  const [activeSchema, setActiveSchema] = useState(null);

  const [userData, setUserData] = useState('');

  const handleChange = (e) => {
    setUserData({ gender, ...userData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(activeSchema);
    const nextForm = activeSchema?.next;
    // console.log(nextForm);

    if (
      new Date().getTime() - new Date(userData.birthday).getTime() <
      568025136000
    ) {
      alert('Sorry you have to be 18 years or older to join');
      return;
    }

    if (nextForm) {
      setActiveSchema(schema[nextForm]);
      return;
    }

    if (userData.password !== userData.password_confirm) {
      console.log('Passowrds do not match');
      alert('password do not match');
      return;
    }
    try {
      console.log(`Will send this to the backend`, userData);
      const response = await axios.post('/api', userData);
      console.log(`here is the data saved to the DB`, response.data);
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data.user);
      history.push('/profile');
    } catch (error) {
      alert(error);
      console.log('SignUp Error: ', error);
    }
    setActiveSchema(null);
  };

  const initForm = (_) => {
    setActiveSchema(schema.one);
    console.log(activeSchema);
  };

  if (!activeSchema) return <Start initForm={initForm} />;

  const ActiveForm = activeSchema.form;

  return (
    <div className={'main-holder'}>
      <form onSubmit={handleSubmit} className={'container'}>
        <p className={'title'}> Astrodate </p>
        <p className={'sub-title'}> LET'S GET STARTED! </p>
        <ActiveForm handleChange={handleChange} userData={userData} />
        <br />
        <button className={'sub-button'} type="submit">
          {' '}
          {activeSchema.next ? 'Next' : 'Submit'}{' '}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
