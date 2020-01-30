import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './layouts/PrivateRoute'

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import PeoplePage from './pages/PeoplePage'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path='/' component={LoginPage} />
          <PrivateRoute path='/home' component={HomePage} />
          <PrivateRoute path='/people' component={PeoplePage} />
        </Switch>
      </Router>
    )
  }
}

export default App;