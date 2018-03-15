import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TermOutput.css';

class TermOutput extends Component {
  constructor(props) {
    super(props);

    const { termOutput, isLatest, isError, addCarrot } = props;

    this.state = {
      hidden: ' hidden',
      termOutput: termOutput,
      isLatest: isLatest,
      isError: isError,
      addCarrot: addCarrot
    };
  }

  componentWillMount() {
    var that = this;
    setTimeout(function() {
      that.show();
    }, that.props.wait);
  }

  show() {
    this.setState({ hidden: '' });
  }

  render() {
    const { termOutput, isLatest, isError, addCarrot, hidden } = this.state;
    let cssClass = 'outputLine';
    if (isLatest) {
      cssClass += ' latest';
    }
    if (isError) {
      cssClass += ' error';
    }

    cssClass += hidden;

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
  }
}

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
