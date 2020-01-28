import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path='/' component={LoginPage} />
          <Route path='/home' component={HomePage} />
        </Switch>
      </Router>
    )
  }
}

export default App;