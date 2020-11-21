import React from 'react';

const Item = (props) => {
  return (
    <div className={'carousel-item'}>
      {/* //placeholder image waiting for vector files from UXUI */}
      <img
        className="carousel-img"
        src={
          'https://images.pexels.com/photos/1257860/pexels-photo-1257860.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        }
      />
      <h2>{props.item.name}</h2>
      <p className={'carousel-p'}>{props.item.description}</p>

      {props.check === 2 ? (
        <button onClick={props.initForm} className={'start-button'}>
          Start!
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Item;
