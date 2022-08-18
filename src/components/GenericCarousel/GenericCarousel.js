import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import './style.sass';
// const items = [
//   {
//     title: 'Title',
//     image: 'img/activities/IMG_20160416_161309.png',
//     content:
//       'Nostrud ex cillum Lorem aliqua est.Nostrud ex cillum Lorem aliqua est. ',
//     footer: 'Author - String',
//   },
//   {
//     title: 'Title 2',
//     image: 'img/activities/IMG-20160409-WA0054.png',
//     content: 'Nostrud ex cillum Lorem aliqua est.',
//     footer: 'Author 2 - String',
//   },
// ];

const GenericCarousel = ({
  autoPlay = false,
  showButtons = true,
  slideTextClass = 'gc-white',
  carouselDotClass = '',
  carouselDotActiveClass = 'active-dot',
  items,
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
    }, 200);
  };

  useEffect(() => {
    if (autoPlay || !showButtons) {
      const interval = setInterval(() => {
        selectNewSlide(selectedIndex);
      }, 3800);
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
      <div className={`generic-carousel-content ${loaded ? 'active' : ''}`}>
        <>
          {selectedSlide.image && (
            <div className="test">
              <img src={selectedSlide.image} alt={'img'} />
            </div>
          )}
          <div className="generic-carousel-description">
            {selectedSlide.title && (
              <>
                <p
                  className={`is-size-3 has-text-weight-medium has-text-centered ${slideTextClass}`}
                >
                  {selectedSlide.title}
                </p>
                <div className="spacer" />
              </>
            )}
            <p
              className={`is-size-4 has-text-weight-medium has-text-centered ${slideTextClass}`}
            >
              {selectedSlide.content}
            </p>
            <div className="spacer" />
            <p
              className={`is-size-5 has-text-weight-medium has-text-centered ${slideTextClass}`}
            >
              {selectedSlide.footer}
            </p>
          </div>
        </>
      </div>

      <div className={`carousel-dot-container ${carouselDotClass}`}>
        {Array.from(Array(items.length).keys()).map((i, index) => (
          <div
            className={`carousel-dot ${
              index === selectedIndex ? carouselDotActiveClass : ''
            }`}
            onClick={() => selectNewSlide(selectedIndex)}
          />
        ))}
      </div>
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
  ),
  showButtons: PropTypes.bool,
  autoPlay: PropTypes.bool,
  slideTextClass: PropTypes.string,
  carouselDotClass: PropTypes.string,
};

export default GenericCarousel;
