import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  Input,
  InputLabel,
  NativeSelect,
  Select
} from '@material-ui/core';
import axios from 'axios';

const SelectCity = ({ handleChange, userData }) => {
  const [apiData, setApiData] = useState('');

  const handleSearch = async (event) => {
    try {
      console.log(userData);
      let response = await axios.get(
        `/api/location/city/${userData.birthState}`
      );
      console.log('ididt', response.data);
      setApiData(response.data);
    } catch (error) {
      console.log('here is error', error);
    }
  };

  return (
    <div>
      <FormControl id="birthCity" className="user-input">
        <InputLabel htmlFor="birthCity" id="birthCity">
          country
        </InputLabel>
        {/* why is birth place undefined  */}
        <NativeSelect
          id="birthCity"
          defaultValue=""
          onChange={handleChange}
          onClick={handleSearch}
          required
        >
          {/* will have to fetch using api here like in wyn weather app, will populate out menu item */}
          {apiData &&
            apiData.map((city, i) => {
              return (
                <option id="birthCity" key={i} value={city.city_name}>
                  {city.city_name}
                </option>
              );
            })}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default SelectCity;
