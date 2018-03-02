import React from 'react';
import PropTypes from 'prop-types';

import './TermInput.css';

const TermInput = props => {
  const { termInput, onSubmit, onTermInputChange } = props;

  return (
    <form onSubmit={onSubmit}>
      <label for="termInput">></label>
      <input
        id="termInput"
        name="termInput"
        value={termInput}
        onChange={e => onTermInputChange(e.target.value)}
        autoFocus
      />
    </form>
  );
};

TermInput.propTypes = {
  termInput: PropTypes.string,
  onSubmit: PropTypes.func,
  onTermInputChange: PropTypes.func
};

TermInput.defaultProps = {
  termInput: '',
  onSubmit: () => null,
  onTermInputChange: () => null
};

export default TermInput;
