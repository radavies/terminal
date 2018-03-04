import React, { Component } from 'react';

import { parseCommand } from '../logic/CommandParser';
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
  }

  onTermInputChange(termInput) {
    this.setState(() => ({ termInput }));
  }

  onSubmit(e) {
    let { termInput, termOutput } = this.state;
    e.preventDefault();
    const forOutput = parseCommand(termInput);
    termOutput.push(forOutput);
    termOutput.push(buildOutputObject(termInput, false, true));
    if (forOutput.print === 'CLEAR') {
      termOutput = [];
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
        />
        {outputElements.reverse()}
      </div>
    );
  }
}

export default TermContainer;
