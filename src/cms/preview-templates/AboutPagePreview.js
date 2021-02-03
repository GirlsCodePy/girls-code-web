import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'
import {useTranslatedData} from "../../utils";

const AboutPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  const translatedData = useTranslatedData(data);

  if(translatedData){
    return <AboutPageTemplate
        title={translatedData.title}
        vision={translatedData.vision}
        mission={translatedData.mission}
        subtitle={translatedData.subtitle}
        values={translatedData.values}
    />
  }

  return <div>Loading...</div>
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default AboutPagePreview
