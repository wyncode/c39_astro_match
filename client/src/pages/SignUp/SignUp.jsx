import React, { useState } from 'react';
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
import axios from 'axios';
import SpeakerAvatar from '../../components/SpeakerAvatar';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: '50%',
    height: '5em',
    width: '5em',
    border: 'solid 1px black',
    backgroundColor: 'gray'
  },
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    width: '50%',
    alignSelf: 'flex-end'
  }
}));

const SignUp = () => {
  const classes = useStyles();
  const [gender, setGender] = useState('');
  const [userData, setUserData] = useState('');
  const [open, setOpen] = useState(false);

  //there is a better way to do this must refactor
  const handleClick = (e) => {
    setGender({ [e.target.id]: e.target.value });
  };

  const handleChange = (e) => {
    setGender({ [e.target.id]: e.target.value });
    setUserData({ ...gender, ...userData, [e.target.id]: e.target.value });
    console.log(userData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(`Will send this to the backend`, userData);
      const response = await axios.post('/api', userData);
      console.log(response.data);
      // sessionStorage.setItem('user', response.data);
      // setCurrentUser(response.data.user);
      // history.push('/');
    } catch (error) {
      // swal('SignUp Error: ', error.toString())
      console.log('SignUp Error: ', error);
    }
  };

  //will probably make a component for the avatar and speech bubble to reuse over and over again
  //actually make a component for maybe even the buttons hemmemmeme
  return (
    <>
      {/* <Container> */}
      {/* <RadioGroup >
          <div className="button-container">
          <Button className={classes.button} value="no" onClick={handleClick }> Cis Man </Button>
          <Button className={classes.button} value="ruasytdvub" onClick={handleClick} > Trans Man </Button>
          <Button className={classes.button} value="ruasytdvub" onClick={handleClick} > Cis Woman </Button>
          <Button className={classes.button} value="ruasytdvub" onClick={handleClick} > Trans Woman </Button>
          <Button className={classes.button} value="ruasytdvub" onClick={handleClick} > Non Binary </Button>
          </div>
        </RadioGroup> */}
      <form className={classes.container} onSubmit={handleSubmit}>
        {/* <ButtonGroup id="gender" onChange={handleChange} > */}
        <Button
          className={classes.button}
          id="gender"
          onClick={handleClick}
          value="Cis Man"
        >
          {' '}
          {/* //maybe target inner text or something similar  */}
          Cis Man{' '}
        </Button>
        <Button
          className={classes.button}
          id="gender"
          onClick={handleClick}
          value="Trans Man"
        >
          {' '}
          Trans Man{' '}
        </Button>
        <Button className={classes.button} value="Cis Woman">
          {' '}
          Cis Woman{' '}
        </Button>
        <Button className={classes.button} value="Trans Woman">
          {' '}
          Trans Woman{' '}
        </Button>
        <Button className={classes.button} value="Non Binary">
          {' '}
          Non Binary{' '}
        </Button>
        {/* </ButtonGroup> */}
        {/* <SpeakerAvatar question={"When were you born?"}/> */}
        <h2> When were you born? </h2>
        <TextField
          variant="filled"
          id="birthday"
          label="When were you born?"
          type="date"
          defaultValue="2017-05-24"
          onChange={handleChange}
          // className={classes.input}
        />
        <SpeakerAvatar question={'What time were you born?'} />
        {/* <h2> What time were you born? </h2> */}
        <TextField
          variant="filled"
          id="birthTime"
          type="time"
          onChange={handleChange}
        />
        <br />
        <h2> Where were you born? </h2>
        <FormControl id="birthPlace">
          <InputLabel id="demo-controlled-open-select-label">
            country
          </InputLabel>
          {/* why is birth place undefined  */}
          <Select id="birthPlace" value={''} onChange={handleChange}>
            {/* will have to fetch using api here like in wyn weather app, will populate out menu item */}
            <MenuItem id="birthPlace" value="">
              <em>None</em>
            </MenuItem>
            <MenuItem id="birthPlace" value={10}>
              {' '}
              Ten{' '}
            </MenuItem>
          </Select>
          {/* need to generate state and city for this one somehow */}
        </FormControl>
        <h2> What city do you live in? </h2>
        <TextField
          variant="filled"
          id="city"
          type="text"
          onChange={handleChange}
        />
        {/* <h2> What is your current zipcode? </h2>
        <TextField
          variant="filled"
          id="zipCode"
          type="number"
          onChange={handleChange}
        /> */}
        {/* //need to add validation to make sure there's a space below, maybe text helper  */}
        <h2> What is your name?</h2>
        <TextField
          variant="filled"
          id="name"
          type="text"
          onChange={handleChange}
        />
        <h2> What is your email?</h2>
        <TextField
          variant="filled"
          id="email"
          type="email"
          onChange={handleChange}
        />
        <h2> Please create your account password. </h2>
        <TextField
          variant="filled"
          id="password"
          type="password"
          onChange={handleChange}
        />
        <TextField type="submit" />
      </form>

      {/* </Container> */}
    </>
  );
};

export default SignUp;
