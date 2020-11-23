import React, { useState } from 'react';
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';
import axios from 'axios';

const SelectState = ({ handleChange, userData }) => {
  const [apiData, setApiData] = useState('');

  const handleSearch = async () => {
    try {
      console.log(userData);
      let response = await axios.get(
        `/api/location/state/${userData.birthCountry}`
      );
      console.log('ididt', response.data);
      setApiData(response.data);
    } catch (error) {
      console.log('here is error', error);
    }
  };

  return (
    <div>
      <FormControl id="birthState" className="user-input">
        <InputLabel htmlFor="birthState" id="birthState">
          country
        </InputLabel>
        <NativeSelect
          id="birthState"
          defaultValue=""
          onChange={handleChange}
          onClick={handleSearch}
          required
        >
          {apiData &&
            apiData.map((state, i) => {
              return (
                <option id="birthState" key={i} value={state.state_name}>
                  {state.state_name}
                </option>
              );
            })}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default SelectState;
