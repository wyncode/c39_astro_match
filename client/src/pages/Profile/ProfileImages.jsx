import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './Item';

const Start = () => {
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
