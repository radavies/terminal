import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/main-page/MainPage';

const App = () => (
  <Router>
    <Switch>
      <Route component={MainPage} />
    </Switch>
  </Router>
);

export default App;
