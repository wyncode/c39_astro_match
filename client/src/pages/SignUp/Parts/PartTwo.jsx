<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> 36dcef695cf3fa7072f16212dda1a598d6ab2851
import {
  TextField,
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';

<<<<<<< HEAD
const PartTwo = ({ handleChange }) => {
  const [apiData, setApiData] = useState('');
  const handleSearch = (e) => {
    fetch(`http://restcountries.eu/rest/v2/`)
      .then((response) => response.json())
      .then((countries) => setApiData(countries))
      .catch((e) => console.log(e));
    // console.log(cities);
  };

=======
// const handleChange= () => {
//     console.log("hi")
// }

const PartTwo = ({ handleChange }) => {
>>>>>>> 36dcef695cf3fa7072f16212dda1a598d6ab2851
  return (
    <div className={'text-field-holder'}>
      <h2> When were you born? </h2>
      <TextField
        variant="filled"
        id="birthday"
        label="When were you born?"
        type="date"
        defaultValue="2002-11-20"
        onChange={handleChange}
        className="user-input"
<<<<<<< HEAD
        required
=======
>>>>>>> 36dcef695cf3fa7072f16212dda1a598d6ab2851
      />
      {/* <SpeakerAvatar question={'What time were you born?'} /> */}
      <h2> What time were you born? </h2>
      <TextField
        variant="filled"
        id="birthTime"
        type="time"
        onChange={handleChange}
        className="user-input"
<<<<<<< HEAD
        required
=======
>>>>>>> 36dcef695cf3fa7072f16212dda1a598d6ab2851
      />
      <br />
      <h2> Where were you born? </h2>
      <FormControl id="birthPlace" className="user-input">
<<<<<<< HEAD
        <InputLabel htmlFor="birthPlace" id="birthPlace">
          country
        </InputLabel>
        {/* why is birth place undefined  */}
        <Select
          id="birthPlace"
          defaultValue=""
          onChange={handleChange}
          onClick={handleSearch}
          required
        >
          {/* will have to fetch using api here like in wyn weather app, will populate out menu item */}
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          {apiData &&
            apiData.map((country, i) => {
              return (
                <MenuItem id="birthPlace" key={i} value={country.name}>
                  {country.name}
                </MenuItem>
              );
            })}
          {/* <MenuItem id="birthPlace" value="">
=======
        <InputLabel id="demo-controlled-open-select-label">country</InputLabel>
        {/* why is birth place undefined  */}
        <Select id="birthPlace" value={''} onChange={handleChange}>
          {/* will have to fetch using api here like in wyn weather app, will populate out menu item */}
          <MenuItem id="birthPlace" value="">
>>>>>>> 36dcef695cf3fa7072f16212dda1a598d6ab2851
            <em>None</em>
          </MenuItem>
          <MenuItem id="birthPlace" value={10}>
            {' '}
            Ten{' '}
<<<<<<< HEAD
          </MenuItem> */}
        </Select>
=======
          </MenuItem>
        </Select>
        {/* need to generate state and city for this one somehow */}
>>>>>>> 36dcef695cf3fa7072f16212dda1a598d6ab2851
      </FormControl>
    </div>
  );
};

export default PartTwo;
