import React from 'react';

const Home = () => {
  console.log();
  const handleClick = (e) => {
    console.log({ [e.target.name]: e.target.innerText });
  };

  return (
    <div>
      <h1> I am a home page </h1>
      <div onClick={handleClick} value="hello">
        {' '}
        CLICK ME TEST{' '}
      </div>
    </div>
  );
};

export default Home;
