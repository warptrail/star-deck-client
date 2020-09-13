import React, { Component } from 'react';

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
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
        <div className="password_again">
          <label htmlFor="password_again_input">Enter Password Again</label>
          <input required name="password" id="password_again_input" />
        </div>
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default RegistrationForm;
