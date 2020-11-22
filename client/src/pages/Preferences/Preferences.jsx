import React from 'react';
import { Link } from 'react-router-dom';
import './Preferences.css';
import RangeSlider from './Slider';
import { Radio, FormControlLabel } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import InputCircle from './InputCircle';

const options = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo'];

const options2 = [
  'Libra',
  'Scorpio',
  'Sagittarius',
  'Capricorn',
  'Aquarius',
  'Pisces'
];

const Preferences = () => {
  return (
    <div className={'preferences-container'}>
      <h1 className={'title'}> Astrodate </h1>
      <p className={'tag-line'}>SELECT YOUR PREFERENCES</p>
      <p className={'dist-line'}> SELECT AGE RANGE </p>
      <RangeSlider step={1} min={21} max={91} id={'age'} />
      <p className={'dist-line'}> DISTANCE IN MILES </p>
      <RangeSlider step={5} min={5} max={200} id={'distance'} />
      <p className={'dist-line'}>PREFERRED SUN SIGN (optional)</p>
      <div className={'option-holder'}>
        <div className={'option-column'}>
          {options.map((sign) => (
            <FormControlLabel
              value="end"
              control={<InputCircle />}
              label={sign}
              className={'radio-buttons-signs'}
            />
          ))}
        </div>
        <div className={'option-column'}>
          {options2.map((sign) => (
            <FormControlLabel
              value="end"
              control={<InputCircle />}
              label={sign}
              className={'radio-buttons-signs'}
            />
          ))}
        </div>
      </div>
      <Link to="/profile">
        <button className={'sign-in-button'}>
          {' '}
          <p>Edit Profile</p>
        </button>
      </Link>
    </div>
  );
};

export default Preferences;
