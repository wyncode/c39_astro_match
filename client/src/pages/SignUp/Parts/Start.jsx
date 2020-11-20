import React from 'react';

const Start = ({ initForm }) => {
  return (
    <div>
      <p>Click the button to start filling out the form!</p>
      <button onClick={initForm}>Start!</button>
    </div>
  );
};

export default Start;
