import React from 'react';

const SpeakerAvatar = (props) => {
  return (
    <div className="speaker-avatar">
      <img
        src={
          'https://images.pexels.com/photos/1624076/pexels-photo-1624076.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
        }
      />
      <div className="speech-bubble"> {props.question} </div>
    </div>
  );
};

export default SpeakerAvatar;
