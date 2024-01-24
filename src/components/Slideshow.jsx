import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center', // Center the background image
  height: '300px',
  width: '100%',
};

const slideImages = [
  {
    url: require('../assets/1.jpeg'),
  },
  {
    url: require('../assets/2.jpeg'),
  },
  {
    url: require('../assets/3.jpeg'),
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.url})`,
              }}
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
