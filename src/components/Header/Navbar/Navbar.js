import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TokenService from '../../../services/token-service';

import './Navbar.css';

class Navbar extends Component {
  handleLogoutClick = () => {
    // TokenService.clearAuthToken();
    const { hasAuthToken, setAuthToken } = this.props;
    console.log(
      'imagine you are being logged out of the reality simulation...'
    );
    TokenService.clearAuthToken();
    setAuthToken(false);
  };

  handleLoginClick = () => {
    // Going to delete this
    console.log('What is Real?');
  };

  renderLogoutLink() {
    return (
      <li>
        <Link to="/" onClick={this.handleLogoutClick}>
          Logout
        </Link>
      </li>
    );
  }

  renderLoginRegisterLinks() {
    return (
      <>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link onClick={this.handleLoginClick} to="/login">
            Login
          </Link>
        </li>
      </>
    );
  }

  render() {
    const { hasAuthToken } = this.props;
    console.log(hasAuthToken);
    return (
      <nav className="main_menu">
        <ul>
          {hasAuthToken
            ? this.renderLogoutLink()
            : this.renderLoginRegisterLinks()}

          <li>
            <Link to="/drops">Drops</Link>
          </li>
          <li>
            <button type="button" href="#">
              Roll a d-20
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
