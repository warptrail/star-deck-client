import React, { Component } from 'react';

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  state = { error: null };

  render() {
    const { error } = this.state;
    return (
      <form>
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
