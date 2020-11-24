import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';

const options = [
  'Cis Man',
  'Trans Man',
  'Trans Woman',
  'Cis Woman',
  'Non-Binary'
];
const PartOne = ({ handleChange }) => {
  const { gender, setGender } = useContext(AppContext);

  const handleClick = (e) => {
    // console.log(gender);
    setGender(e.target.innerText);
  };

  return (
    <>
      <h2 className={`form-question`}> How do you identify?</h2>
      <div className={`answer-container`}>
        {options.map((identity) => (
          <div
            key={identity}
            className={`button-identity`}
            id="gender"
            onClick={handleClick}
            value={identity}
          >
            <p className={'button-identity-p'}>{identity}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PartOne;
