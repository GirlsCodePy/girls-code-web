import React from 'react';

import PropTypes from 'prop-types';
import './style.sass';

const GenericFooter = ({
  numberOfItems,
  selectedIndex,
  carouselDotActiveClass,
  carouselDotClass,
  selectNewSlide,
}) => {
  return (
    <div className={`carousel-dot-container ${carouselDotClass}`}>
      {Array.from(Array(numberOfItems).keys()).map((i, index) => (
        <div
          className={`carousel-dot ${
            index === selectedIndex ? carouselDotActiveClass : ''
          }`}
          onClick={() => selectNewSlide(selectedIndex)}
        />
      ))}
    </div>
  );
};

GenericFooter.propTypes = {
  numberOfItems: PropTypes.number,
  selectedIndex: PropTypes.number,
  carouselDotActiveClass: PropTypes.string,
  carouselDotClass: PropTypes.string,
  selectNewSlide: PropTypes.func,
};

export default GenericFooter;
