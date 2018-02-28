import React, { Component } from 'react';
import Term from '../components/term/term'

const TermContainer = (props) => {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Welcome to Reactz</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Term />
        <Term />
      </div>
    );
}

export default TermContainer;
