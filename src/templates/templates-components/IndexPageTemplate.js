import React from 'react';
import PropTypes from 'prop-types';

import FlowerLogo from '../../img/flower.svg';
import WriteUs from '../../img/writeUs.svg';
import Encourage from '../../components/Encourage';
import SplitBanner from '../../components/SplitBanner';
import WhoWeAre from '../../components/WhoWeAre';
import WhatWeDo from '../../components/WhatWeDo';
import Partner from '../../components/Partner';
import Testimonies from '../../components/Testimonies';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const IndexPageTemplate = ({
  heading,
  mainpitch,
  description,
  testimonies,
}) => (
  <div>
    <ToastContainer />
    <SplitBanner />
    <WhoWeAre
      title={mainpitch.title}
      image={mainpitch.logo}
      description={mainpitch.description}
      link={mainpitch.link}
      label={mainpitch.label}
    />
    <WhatWeDo />
    <Testimonies testimonies={testimonies} />
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column">
              <div className="content">
                <Partner />
                <Encourage
                  image={FlowerLogo}
                  title="wantCollaborate"
                  subtitle="supportUs"
                  buttonLabel="donate"
                  buttonLink="https://www.metrepay.com/girlscode"
                />
                <Encourage
                  image={WriteUs}
                  title="bePart"
                  subtitle="sendMessage"
                  buttonLabel="writeUs"
                  buttonLink="/contact"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

export default IndexPageTemplate;
