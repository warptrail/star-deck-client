/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import TokenService from '../services/token-service';

import Header from '../components/Header/Header';
import LoginPage from '../routes/LoginPage/LoginPage';
import LandingPage from '../routes/LandingPage/LandingPage';
import RegistrationPage from '../routes/RegistrationPage/RegistrationPage';
import Drops from '../routes/DropsPage/DropsPage';
import NotFoundPage from '../routes/NotFoundPage/NotFoundPage';

import './App.css';

export default class App extends Component {
  state = {
    hasError: false,
    hasAuthToken: TokenService.hasAuthToken()
  };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  setAuthToken = (token) => {
    this.setState({ hasAuthToken: token });
  };

  render() {
    const { hasError, hasAuthToken } = this.state;
    return (
      <div className="App">
        <Header hasAuthToken={hasAuthToken} setAuthToken={this.setAuthToken} />
        <main className="App_main">
          {hasError && <p>There was an error. Sad day.</p>}
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route
              exact
              path="/login"
              render={(props) => (
                <LoginPage {...props} setAuthToken={this.setAuthToken} />
              )}
            />
            <Route exact path="/register" component={RegistrationPage} />
            <Route exact path="/drops" component={Drops} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}
