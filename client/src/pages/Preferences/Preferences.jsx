import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Preferences.css';
import RangeSlider from './RangeSlider';
import { FormControlLabel } from '@material-ui/core';
import InputCircle from './InputCircle';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';

const options = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo'];

const options2 = [
  'Libra',
  'Scorpio',
  'Sagittarius',
  'Capricorn',
  'Aquarius',
  'Pisces'
];

const Preferences = ({ history }) => {
  const { setCurrentUser } = useContext(AppContext);

  const [preferences, setPreferences] = useState({});
  const [zodiacPref, setZodiacPref] = useState(['Taruas']);

  const handleChange = (e, value) => {
    setPreferences({ ...preferences, [e.target.ariaLabel]: value });
    setZodiacPref([...zodiacPref, e.target.value]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(`Will send this to the backend`, {
        zodiac: zodiacPref,
        ...preferences
      });
      // const response = await axios.post('/api/login', loginData);
      // sessionStorage.setItem('user', response.data);
      // setCurrentUser(response.data.user);
      // history.push('/profile');
    } catch (error) {
      console.log('SignUp Error: ', error);
    }
  };

  return (
    <div className={'preferences-container'}>
      <form onSubmit={handleSubmit}>
        <h1 className={'title'}> Astrodate </h1>
        <p className={'select-line'}>SELECT YOUR PREFERENCES</p>
        <p className={'dist-line'}> SELECT AGE RANGE </p>

        <RangeSlider
          handleChange={handleChange}
          step={1}
          min={21}
          max={91}
          id="age"
        />

        <p className={'dist-line'}> DISTANCE IN MILES </p>

        <RangeSlider
          handleChange={handleChange}
          step={5}
          min={5}
          max={200}
          id="distance"
        />

        <p className={'dist-line'}>PREFERRED SUN SIGN (optional)</p>

        <div className={'option-holder'}>
          <div className={'option-column'}>
            {options.map((sign) => (
              <FormControlLabel
                value="end"
                control={
                  <InputCircle handleChange={handleChange} value={sign} />
                }
                label={sign}
                className={'radio-buttons-signs'}
              />
            ))}
          </div>
          <div className={'option-column'}>
            {options2.map((sign) => (
              <FormControlLabel
                value="end"
                control={
                  <InputCircle value={sign} handleChange={handleChange} />
                }
                label={sign}
                className={'radio-buttons-signs'}
              />
            ))}
          </div>
        </div>
        <button type="submit" className={'centerMe centerSelf'}>
          {' '}
          <p>Submit</p>
        </button>
      </form>
      <Link to="/profile" className={'centerMe'}>
        <button className={'centerSelf'}>
          {' '}
          <p>Edit Profile</p>
        </button>
      </Link>
    </div>
  );
};

export default Preferences;
