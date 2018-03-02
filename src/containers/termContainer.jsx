import React, { Component } from 'react';
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
    const { termInput, termOutput } = this.state;
    e.preventDefault();
    termOutput.push(termInput);
    this.setState(() => ({ termOutput, termInput: '' }));
  }

  render() {
    const { termInput, termOutput } = this.state;

    const outputElements = termOutput.map(output => (
      <TermOutput termOutput={output} />
    ));

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
