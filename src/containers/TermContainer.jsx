import React, { Component } from 'react';

import Game from '../logic/Game';
import { buildOutputObject } from '../logic/utils';

import TermInput from '../components/TermInput/TermInput';
import TermOutput from '../components/TermOutput/TermOutput';

class TermContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      termInput: '',
      termOutput: []
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onTermInputChange = this.onTermInputChange.bind(this);
    this.game = new Game();
  }

  onTermInputChange(termInput) {
    this.setState(() => ({ termInput }));
  }

  onSubmit(e) {
    let { termInput, termOutput } = this.state;
    e.preventDefault();
    const forOutput = this.game.processCommand(termInput);

    let cleared = false;
    forOutput.forEach(outputObject => {
      if (!cleared) {
        if (outputObject.print === 'CLEAR') {
          termOutput = [];
          cleared = true;
        } else {
          termOutput.push(outputObject);
        }
      }
    });
    if (!cleared) {
      termOutput.push(buildOutputObject(termInput, false, true));
    }

    this.setState(() => ({ termOutput, termInput: '' }));
  }

  render() {
    const { termInput, termOutput } = this.state;

    let counter = 0;
    let length = termOutput.length;
    const outputElements = termOutput.map(output => {
      counter += 1;
      const isLatest = counter === length;
      return (
        <TermOutput
          termOutput={output.print}
          isLatest={isLatest}
          key={counter}
          isError={output.isError}
          addCarrot={output.addCarrot}
        />
      );
    });

    return (
      <div>
        <TermInput
          termInput={termInput}
          onSubmit={this.onSubmit}
          onTermInputChange={this.onTermInputChange}
          inputRef={this.props.inputRef}
        />
        {outputElements.reverse()}
      </div>
    );
  }
}

export default TermContainer;
