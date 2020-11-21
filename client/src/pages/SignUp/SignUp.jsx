import React, { useState, useContext } from 'react';
import {
  ButtonGroup,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Container,
  TextField,
  Select,
  MenuItem,
  makeStyles,
  Button
} from '@material-ui/core';
import './SignUp.css';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import SpeakerAvatar from '../../components/SpeakerAvatar';
import { schema } from './schema';
import { PartOne } from './Parts';
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
  // const classes = useStyles();
  // const [gender, setGender] = useState('');
  const [userData, setUserData] = useState('');
  // const [open, setOpen] = useState(false);

  // const options = ['Cis Man','Trans Man','Trans Woman','Cis Woman','Non-Binary']

  //there is a better way to do this must refactor
  // const handleClick = (e) => {
  //   setGender(e.target.innerText);
  // setUserData()
  // handleChange()
  // };

  const handleChange = (e) => {
    // setGender(gender); gender
    // console.log(e.target.innerText)
    // setGender(e.target.innerText)
    // console.log(gender)
    // if (e.target.innerText) {
    //   console.log(gender);
    // }
    setUserData({ gender, ...userData, [e.target.id]: e.target.value });
    // console.log(userData);
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
      console.log(response.data);
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data.user);
      // history.push('/');
    } catch (error) {
      // swal('SignUp Error: ', error.toString())
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
    <>
      <form onSubmit={handleSubmit} className={'container'}>
        <p className={'title'}> Astrodate </p>
        <p className={'sub-title'}> LET'S GET TO KNOW YOU! </p>
        <ActiveForm handleChange={handleChange} />
        <br />
        <button className={'sub-button'} type="submit">
          {' '}
          {activeSchema.next ? 'Next' : 'Submit'}{' '}
        </button>
      </form>
    </>
  );
};

export default SignUp;
