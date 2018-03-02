import React from 'react';
import PropTypes from 'prop-types';

import './TermOutput.css';

const TermOutput = props => {
  const { termOutput } = props;
  return <p className="outputLine">> {termOutput}</p>;
};

TermOutput.propTypes = {
  termOutput: PropTypes.string
};

TermOutput.defaultProps = {
  termOutput: ''
};

export default TermOutput;
