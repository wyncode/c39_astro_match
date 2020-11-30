import React from 'react';
import slideOne from './Images/slideOne.png';
import slideTwo from './Images/slideTwo.png';
import slideThree from './Images/slideThree.png';

const imgArr = [slideOne, slideTwo, slideThree];

const Item = (props) => {
  return (
    <div className={'carousel-item'}>
      {/* //placeholder image waiting for vector files from UXUI */}
      <img className="carousel-img" src={imgArr[props.check]} />
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
