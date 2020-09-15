import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../../components/LoginForm/LoginForm';

class LoginPage extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    const { history } = this.props;
    const destination = '/';
    history.push(destination);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Login Form</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
          setAuthToken={this.props.setAuthToken}
        />
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  })
};
export default LoginPage;
