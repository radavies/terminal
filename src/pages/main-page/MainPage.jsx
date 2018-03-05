import React, { Component } from 'react';
import TermContainer from '../../containers/TermContainer';

import './MainPage.css';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.inputElement.focus();
  }

  render() {
    return (
      <div className="TerminalContainer" onClick={this.focusTextInput}>
        <TermContainer inputRef={el => (this.inputElement = el)} />
      </div>
    );
  }
}

export default MainPage;
