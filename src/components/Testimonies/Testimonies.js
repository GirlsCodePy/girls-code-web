import React from 'react';
import './styles.sass';
import { withTranslation } from 'react-i18next';
import Carousel from '../Carousel';

export const Testimonies = ({ t, testimonies }) => {
  return (
    <div className="testimonies-container clip-hero-testimonies">
      <h1 className="gc-white gc-page-title has-text-centered">
        {t('testimonies')}
      </h1>
      <Carousel
        carouselContainerClassName="margin-top-0"
        dotClassName="carousel-dot-workshops"
        length={testimonies.length}
      >
        {testimonies.map((item) => {
          return (
            <div className="carousel-content testimonies-carousel">
              <div className="carousel-text carousel-testimonies-text">
                <p className="is-size-3 gc-white has-text-weight-medium has-text-centered">
                  "{item.quote}"
                </p>
                <div className="separator" />
                <p className="gc-text is-size-5 has-text-centered has-text-warning has-text-weight-semibold">
                  {item.author}
                </p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default withTranslation()(Testimonies);
