import React from 'react';
import ImageOne from './Images/Slide1Graphic';

const Item = (props) => {
  return (
    // <>

    <div className={'carousel-item'}>
      {/* //placeholder image waiting for vector files from UXUI */}
      {/* <img
        className="carousel-img"
        src={
          'https://images.pexels.com/photos/1257860/pexels-photo-1257860.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        }
      /> */}
      {/* <ImageOne height={11.75} width={23.4375}/> */}
      <section style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>{props.item.name}</h2>
        <p className={'carousel-p'}>{props.item.description}</p>
      </section>
      {props.check === 2 ? (
        <button onClick={props.initForm} className={'start-button'}>
          Start!
        </button>
      ) : (
        <div></div>
      )}
    </div>
    // </>
  );
};

export default Item;
