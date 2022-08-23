import React from 'react';
import PropTypes from 'prop-types';

import './styles.sass';

const Spinner = ({ spinnerClass = 'loader' }) => {
  return <span className={spinnerClass}></span>;
};

Spinner.propTypes = {
  spinnerClass: PropTypes.string,
};

export default Spinner;
