import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {
  state = {
    isLoggedIn: false
  };

  handleLogoutClick = () => {
    // TokenService.clearAuthToken();
    this.setState({ isLoggedIn: false }); // Going to delete this
    console.log(
      'imagine you are being logged out of the reality simulation...'
    );
  };

  handleLoginClick = () => {
    // Going to delete this
    console.log('What is Real?');
    this.setState({ isLoggedIn: true });
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
    return (
      <nav className="main_menu">
        <ul>
          {this.state.isLoggedIn
            ? this.renderLogoutLink()
            : this.renderLoginRegisterLinks()}
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
