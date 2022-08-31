import React from 'react';

import PropTypes from 'prop-types';
import './style.sass';

const GenericSlide = ({
  selectedSlide,
  loaded,
  carouselContentClass = 'generic-carousel-content',
  slideTextClass,
}) => {
  console.log('selectedSlide', selectedSlide);
  return (
    <div className={`${carouselContentClass} ${loaded ? 'active' : ''}`}>
      <>
        {selectedSlide.image && (
          <div className="generic-slide-image-container">
            <img
              className="generic-slide-image"
              src={selectedSlide.image}
              alt={'img'}
            />
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
  );
};

GenericSlide.propTypes = {
  selectedSlide: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    footer: PropTypes.string,
  }).isRequired,
  loaded: PropTypes.bool,
  carouselContentClass: PropTypes.string,
  slideTextClass: PropTypes.string,
};

export default GenericSlide;
