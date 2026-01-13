import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { maincerouseldata } from './maincerouseldata';

const Maincerousel = () => {
  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval={2000}
      infinite
      mouseTracking
      disableButtonsControls
      disableDotsControls
    >
      {maincerouseldata.map((item, index) => (
        <img
          key={index}
          src={item}
          alt="carousel"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover"
          }}
        />
      ))}
    </AliceCarousel>
  );
};

export default Maincerousel;
