import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './Item';
import { makeStyles } from '@material-ui/core/styles';
import ImageOne from './Images/Slide1Graphic';

const Start = ({ initForm }) => {
  const useStyles = makeStyles(
    {
      root: {
        overflow: 'inherit'
        // height: '100vh'
      }
    },
    { name: 'Carousel' }
  );

  const classes = useStyles();

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
    <div className={'container-caro'}>
      <Carousel
        autoPlay={false}
        className={`carousel-container-su ${classes.root}`}
      >
        {items.map((item, i) => (
          <>
            <ImageOne height={11.75} width={23.4375} />
            <Item key={i} item={item} check={i} initForm={initForm} />
          </>
        ))}
      </Carousel>
    </div>
  );
};

export default Start;
