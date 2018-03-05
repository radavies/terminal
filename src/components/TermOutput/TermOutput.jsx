import React from 'react';
import PropTypes from 'prop-types';

import './TermOutput.css';

const TermOutput = props => {
  const { termOutput, isLatest, isError, addCarrot } = props;
  let cssClass = 'outputLine';
  if (isLatest) {
    cssClass += ' latest';
  }
  if (isError) {
    cssClass += ' error';
  }

  let carrot = '';
  if (addCarrot) {
    carrot = '> ';
  }
  return (
    <p className={cssClass}>
      {carrot}
      {termOutput}
    </p>
  );
};

TermOutput.propTypes = {
  termOutput: PropTypes.string,
  isLatest: PropTypes.bool,
  isError: PropTypes.bool,
  addCarrot: PropTypes.bool
};

TermOutput.defaultProps = {
  termOutput: '',
  isLatest: false,
  isError: false,
  addCarrot: false
};

export default TermOutput;
