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
      setApiData(response.data);
    } catch (error) {
      alert('here is error', error);
    }
  };

  return (
    <>
      <FormControl id="birthState" className="user-input">
        <InputLabel htmlFor="birthState" id="birthState">
          state
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
    </>
  );
};

export default SelectState;
