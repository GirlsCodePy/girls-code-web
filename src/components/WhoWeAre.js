import React from 'react';

import PropTypes from 'prop-types';

import ShowMore from './ShowMore';

const WhoWeAre = (props) => {
  console.log('props.image', props.image);
  return (
    <div className="section-whoweare">
      {/* Esto no es lo mas apropiado pero no me funcionaba la carga de imagen, alternativa temporal. */}
      <img
        className="photo-whoweare"
        src={`./img/${props.image}.svg`}
        alt="img"
      />
      <div className="container gc-ended-content">
        <span className="principal-title">{props.title}</span>
        <p className="title-content" style={{ marginTop: '2rem' }}>
          {props.description}
        </p>
        <ShowMore link={props.link} label={props.label} />
      </div>
    </div>
  );
};

WhoWeAre.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  label: PropTypes.string,
};

export default WhoWeAre;
