/* eslint-disable camelcase */
import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };

  handleSubmitJwtAuth = (e) => {
    e.preventDefault();
    console.log('logging in!');
    const { onLoginSuccess, setAuthToken } = this.props;
    this.setState({ error: null });

    const { user_name, password } = e.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    }).then((res) => {
      user_name.value = '';
      password.value = '';
      TokenService.saveAuthToken(res.authToken);
      onLoginSuccess();
      setAuthToken(true);
    });
  };

  render() {
    const { error } = this.state;
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmitJwtAuth}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="user_name">
          <label htmlFor="user_name_input">User name</label>
          <input required name="user_name" id="user_name_input" />
        </div>
        <div className="password">
          <label htmlFor="password_input">Password</label>
          <input required name="password" id="password_input" />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
