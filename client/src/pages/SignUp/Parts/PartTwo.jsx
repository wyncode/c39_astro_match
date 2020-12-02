import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  NativeSelect
} from '@material-ui/core';
import SelectState from './SelectState';
import SelectCity from './SelectCity';
import axios from 'axios';

const PartTwo = ({ handleChange, userData }) => {
  const [apiData, setApiData] = useState('');

  const handleSearch = async () => {
    try {
      let response = await axios.get('/api/location/country');
      setApiData(response.data);
    } catch (error) {
      console.log('here is error', error);
    }
  };

  return (
    <div className={'text-field-holder-su'}>
      <h2> When were you born? </h2>
      <TextField
        variant="filled"
        id="birthday"
        label="When were you born?"
        type="date"
        defaultValue="2002-11-20"
        onChange={handleChange}
        className="user-input-su"
        required
      />
      <h2> What time were you born? </h2>
      <TextField
        variant="filled"
        id="birthTime"
        type="time"
        onChange={handleChange}
        className="user-input-su"
        required
      />
      <br />
      <h2> Where were you born? </h2>
      <FormControl id="birthPlace" className="user-input-su">
        <InputLabel htmlFor="birthPlace" id="birthPlace">
          country
        </InputLabel>
        <NativeSelect
          id="birthCountry"
          defaultValue=""
          onChange={handleChange}
          onClick={handleSearch}
          required
        >
          {apiData &&
            apiData.map((country, i) => {
              return (
                <option id="birthPlace" key={i} value={country.country_name}>
                  {country.country_name}
                </option>
              );
            })}
        </NativeSelect>
      </FormControl>
      {userData.birthCountry && (
        <SelectState
          className="user-input-su"
          handleChange={handleChange}
          userData={userData}
        />
      )}
      {userData.birthState && (
        <SelectCity handleChange={handleChange} userData={userData} />
      )}
    </div>
  );
};

export default PartTwo;
