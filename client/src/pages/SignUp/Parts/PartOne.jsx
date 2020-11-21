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
  const [buttonColor, setButtonColor] = useState('unclicked');

  const handleClick = (e) => {
    // console.log(gender);
    setGender(e.target.innerText);
    e.target.className = setButtonColor('clicked');
  };

  return (
    <>
      <h2> How do you identify?</h2>
      <div className={`question-container`}>
        {options.map((identity) => (
          <div
            key={identity}
            className={`button-identity ${buttonColor}`}
            id="gender"
            onClick={handleClick}
            value={identity}
          >
            <p>{identity}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PartOne;
