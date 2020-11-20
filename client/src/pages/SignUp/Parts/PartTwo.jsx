import React from 'react';
import {
  TextField,
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';

// const handleChange= () => {
//     console.log("hi")
// }

const PartTwo = ({ handleChange }) => {
  return (
    <div>
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
      {/* <SpeakerAvatar question={'What time were you born?'} /> */}
      <h2> What time were you born? </h2>
      <TextField
        variant="filled"
        id="birthTime"
        type="time"
        onChange={handleChange}
      />
      <br />
      <h2> Where were you born? </h2>
      <FormControl id="birthPlace">
        <InputLabel id="demo-controlled-open-select-label">country</InputLabel>
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
    </div>
  );
};

export default PartTwo;
