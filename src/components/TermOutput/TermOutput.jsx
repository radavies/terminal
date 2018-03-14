import React from 'react';
import PropTypes from 'prop-types';

import './TermOutput.css';

//https://stackoverflow.com/questions/30803440/delayed-rendering-of-react-components
//http://jsbin.com/gepujalepa/1/edit?html,css,js,output

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
  addCarrot: PropTypes.bool,
  wait: PropTypes.number
};

TermOutput.defaultProps = {
  termOutput: '',
  isLatest: false,
  isError: false,
  addCarrot: false,
  wait: 0
};

export default TermOutput;
