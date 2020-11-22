<<<<<<< HEAD
import React, { useContext } from 'react';
=======
import React, { useContext, useState } from 'react';
>>>>>>> 36dcef695cf3fa7072f16212dda1a598d6ab2851
import { AppContext } from '../../../context/AppContext';

const options = [
  'Cis Man',
  'Trans Man',
  'Trans Woman',
  'Cis Woman',
  'Non-Binary'
];
const PartOne = ({ handleChange }) => {
<<<<<<< HEAD
  const { gender, setGender } = useContext(AppContext);
=======
  // const { userData, setUserData } = useContext(AppContext)
  const { gender, setGender } = useContext(AppContext);
  const [buttonColor, setButtonColor] = useState('unclicked');
>>>>>>> 36dcef695cf3fa7072f16212dda1a598d6ab2851

  const handleClick = (e) => {
    // console.log(gender);
    setGender(e.target.innerText);
<<<<<<< HEAD
=======
    e.target.className = setButtonColor('clicked');
>>>>>>> 36dcef695cf3fa7072f16212dda1a598d6ab2851
  };

  return (
    <>
<<<<<<< HEAD
      <h2 className={`form-question`}> How do you identify?</h2>
      <div className={`answer-container`}>
        {options.map((identity) => (
          <div
            key={identity}
            className={`button-identity`}
=======
      <h2> How do you identify?</h2>
      <div className={`question-container`}>
        {options.map((identity) => (
          <div
            key={identity}
            className={`button-identity ${buttonColor}`}
>>>>>>> 36dcef695cf3fa7072f16212dda1a598d6ab2851
            id="gender"
            onClick={handleClick}
            value={identity}
          >
<<<<<<< HEAD
            <p className={'button-identity-p'}>{identity}</p>
=======
            <p>{identity}</p>
>>>>>>> 36dcef695cf3fa7072f16212dda1a598d6ab2851
          </div>
        ))}
      </div>
    </>
  );
};
<<<<<<< HEAD
=======

>>>>>>> 36dcef695cf3fa7072f16212dda1a598d6ab2851
export default PartOne;
