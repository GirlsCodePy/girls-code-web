import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import './style.sass';
import GenericSlide from './GenericSlide';
import GenericFooter from './GenericFooter';

const GenericCarousel = ({
  autoPlay = false,
  showButtons = true,
  slideTextClass = 'gc-white',
  carouselDotClass = '',
  carouselDotActiveClass = 'active-dot',
  items,
  autoPlayDelay = 4000,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(items[0]);

  const selectNewSlide = (index, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < items.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : items.length - 1;
      setSelectedSlide(items[nextIndex]);
      setSelectedIndex(nextIndex);
      setLoaded(true);
    }, 500);
  };

  useEffect(() => {
    if (autoPlay || !showButtons) {
      const interval = setInterval(() => {
        selectNewSlide(selectedIndex);
      }, autoPlayDelay);
      return () => clearInterval(interval);
    }
  });

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 200);
  }, []);

  return (
    <div className="generic-carousel-container">
      {/* items of carouse */}
      <GenericSlide
        selectedSlide={selectedSlide}
        loaded={loaded}
        slideTextClass={slideTextClass}
      />

      <GenericFooter
        numberOfItems={items.length}
        carouselDotActiveClass={carouselDotActiveClass}
        carouselDotClass={carouselDotClass}
        selectedIndex={selectedIndex}
        selectNewSlide={selectNewSlide}
      />
    </div>
  );
};

GenericCarousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
      footer: PropTypes.string,
    })
  ).isRequired,
  showButtons: PropTypes.bool,
  autoPlay: PropTypes.bool,
  slideTextClass: PropTypes.string,
  carouselDotClass: PropTypes.string,
  autoPlayDelay: PropTypes.number,
};

export default GenericCarousel;
