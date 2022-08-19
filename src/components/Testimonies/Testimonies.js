import React, { useCallback } from 'react';
import './styles.sass';
import { withTranslation } from 'react-i18next';

import GenericCarousel, {
  formatItemsGenericCarousel,
} from '../GenericCarousel';

export const Testimonies = ({ t, testimonies }) => {
  const getItems = useCallback(
    () =>
      testimonies.map((testimonie) =>
        formatItemsGenericCarousel({
          item: testimonie,
          contentKey: 'quote',
          footerKey: 'author',
        })
      ),
    [testimonies]
  );

  return (
    <div className="testimonies-container clip-hero-testimonies">
      <h1 className="gc-white gc-page-title has-text-centered title-testimonies">
        {t('testimonies')}
      </h1>
      <GenericCarousel autoPlay items={getItems()} />
    </div>
  );
};

export default withTranslation()(Testimonies);
