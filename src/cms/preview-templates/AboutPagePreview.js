import React from 'react';
import PropTypes from 'prop-types';

import { useTranslatedData } from '../../utils';
import { AboutPageTemplate } from '../../templates/templates-components';

const AboutPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  console.log('data', data);
  const translatedData = useTranslatedData(data);

  if (translatedData) {
    return (
      <AboutPageTemplate
        title={translatedData.title}
        vision={translatedData.vision}
        mission={translatedData.mission}
        subtitle={translatedData.subtitle}
        values={translatedData.values}
      />
    );
  }

  return <div>Loading...</div>;
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default AboutPagePreview;
