import React from 'react';
import PropTypes from 'prop-types';

import './TermOutput.css';

const TermOutput = props => {
  const { termOutput, isLatest } = props;
  if (isLatest) {
    return <p className="outputLine latest" >> {termOutput}</p>;
  }
  else {
    return <p className="outputLine" >> {termOutput}</p>;
  }
};

TermOutput.propTypes = {
  termOutput: PropTypes.string,
  isLatest: PropTypes.bool
};

TermOutput.defaultProps = {
  termOutput: '',
  isLatest: false
};

export default TermOutput;
