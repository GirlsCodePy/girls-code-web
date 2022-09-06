import React from 'react';
import PropTypes from 'prop-types';
import { ActivitiesPageTemplate } from '../../templates/templates-components';

const AboutPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

    return (
      <ActivitiesPageTemplate
        title={data.title}
        subtitle={data.subtitle}
        workshops={data.workshops}
        courses={data.courses}
        mentoring={data.mentoring}
      />
    );
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default AboutPagePreview;
