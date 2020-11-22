import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';

const PartTwo = ({ handleChange }) => {
  const [apiData, setApiData] = useState('');
  const handleSearch = (e) => {
    fetch(`http://restcountries.eu/rest/v2/`)
      .then((response) => response.json())
      .then((countries) => setApiData(countries))
      .catch((e) => console.log(e));
    // console.log(cities);
  };

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
        required
      />
      {/* <SpeakerAvatar question={'What time were you born?'} /> */}
      <h2> What time were you born? </h2>
      <TextField
        variant="filled"
        id="birthTime"
        type="time"
        onChange={handleChange}
        className="user-input"
        required
      />
      <br />
      <h2> Where were you born? </h2>
      <FormControl id="birthPlace" className="user-input">
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
            <em>None</em>
          </MenuItem>
          <MenuItem id="birthPlace" value={10}>
            {' '}
            Ten{' '}
          </MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
};

export default PartTwo;
