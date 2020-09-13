/* eslint-disable camelcase */
import React, { Component } from 'react';

import AuthApiService from '../../services/auth-api-service';

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

  handleSubmitRegistration = (e) => {
    e.preventDefault();
    const { user_name, password, password_again } = e.target;
    console.log(user_name.value, password.value);
    this.setState({ error: null });

    const newUser = {
      user_name: user_name.value,
      password: password.value
    };

    AuthApiService.postUser(newUser);
    // .then((user) => {
    //   user_name.value = '';
    //   password.value = '';
    //   // this.props.onRegistrationSuccess();
    // })
    // .catch((res) => {
    //   this.setState({ error: res.error });
    // });
    user_name.value = '';
    password.value = '';
    password_again.value = '';
  };

  render() {
    const { error } = this.state;
    return (
      <form
        className="registration_form"
        onSubmit={this.handleSubmitRegistration}
      >
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
          <input required name="password_again" id="password_again_input" />
        </div>
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default RegistrationForm;
