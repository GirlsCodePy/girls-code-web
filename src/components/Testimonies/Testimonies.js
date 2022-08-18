import React from 'react';
import './styles.sass';
import { withTranslation } from 'react-i18next';

import GenericCarousel from '../GenericCarousel';

export const Testimonies = ({ t, testimonies }) => {
  return (
    <div className="testimonies-container clip-hero-testimonies">
      <h1 className="gc-white gc-page-title has-text-centered">
        {t('testimonies')}
      </h1>
      <GenericCarousel
        autoPlay
        items={testimonies.map((testimonie) => ({
          content: testimonie.quote,
          footer: testimonie.author,
        }))}
      />
    </div>
  );
};

export default withTranslation()(Testimonies);
