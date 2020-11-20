import React, { useContext, useState } from 'react';
import { AppContext } from '../../../context/AppContext';

const options = [
  'Cis Man',
  'Trans Man',
  'Trans Woman',
  'Cis Woman',
  'Non-Binary'
];
const PartOne = ({ handleChange }) => {
  // const { userData, setUserData } = useContext(AppContext)
  const { gender, setGender } = useContext(AppContext);

  const handleClick = (e) => {
    console.log(gender);
    setGender(e.target.innerText);
  };

  return (
    <div>
      {options.map((identity) => (
        <div
          className="button-identity"
          id="gender"
          onClick={handleClick}
          value={identity}
        >
          {identity}
        </div>
      ))}
    </div>
  );
};

export default PartOne;
