import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../components/Header/Header';
import LoginPage from '../routes/LoginPage/LoginPage';
import LandingPage from '../routes/LandingPage/LandingPage';
import RegistrationPage from '../routes/RegistrationPage/RegistrationPage';

import './App.css';

export default class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    return (
      <div className="App">
        <Header />
        <main className="App_main">
          {hasError && <p>There was an error. Sad day.</p>}
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegistrationPage} />
          </Switch>
        </main>
      </div>
    );
  }
}
