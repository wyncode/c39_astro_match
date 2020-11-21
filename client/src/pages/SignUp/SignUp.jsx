import React, { useState, useContext } from 'react';
import './SignUp.css';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { schema } from './schema';
import Start from './Parts/Start';

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//     borderRadius: '50%',
//     height: '5em',
//     width: '5em',
//     border: 'solid 1px black',
//     backgroundColor: 'gray'
//   },
//   container: {
//     display: 'flex',
//     flexDirection: 'column'
//   },
//   input: {
//     width: '50%',
//     alignSelf: 'flex-end'
//   }
// }));

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
    if (nextForm) {
      setActiveSchema(schema[nextForm]);
      return;
    }
    console.log('I am here below the thing');
    try {
      console.log(`Will send this to the backend`, userData);
      const response = await axios.post('/api', userData);
      console.log(`here is the data saved to the DB`, response.data);
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data.user);
      history.push('/profile');
    } catch (error) {
      console.log('SignUp Error: ', error.reason);
    }
    setActiveSchema(null);
  };

  const initForm = (_) => {
    setActiveSchema(schema.one);
    console.log(activeSchema);
  };

  if (!activeSchema) return <Start initForm={initForm} />;

  const ActiveForm = activeSchema.form;

  //will probably make a component for the avatar and speech bubble to reuse over and over again
  //actually make a component for maybe even the buttons hemmemmeme
  return (
    <div className={'main-holder'}>
      <form onSubmit={handleSubmit} className={'container'}>
        <p className={'title'}> Astrodate </p>
        <p className={'sub-title'}> LET'S GET STARTED! </p>
        <ActiveForm handleChange={handleChange} />
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
