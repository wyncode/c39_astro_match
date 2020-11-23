import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './Item';

const Start = ({ initForm }) => {
  var items = [
    {
      name: 'Welcome',
      description:
        'First, we will ask you a short series of questions so that we can get to know you and find great matches for you'
    },
    {
      name: 'Now',
      description: `We will create your profile based on your answers to your onboarding questionaire. `
    },
    {
      name: 'Ready?',
      description: `Click the button to start filling out the form!`
    }
  ];

  return (
    <div className={'container'}>
      <Carousel autoPlay={false} className={'carousel-container'}>
        {items.map((item, i) => (
          <Item key={i} item={item} check={i} initForm={initForm} />
        ))}
      </Carousel>
      {/* <p>Click the button to start filling out the form!</p>
      <button onClick={initForm}>Start!</button> */}
    </div>
  );
};

export default Start;
