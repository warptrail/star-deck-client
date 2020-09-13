import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <h1 className="header-title">
            Warptrail React Application Interface
          </h1>
        </Link>
        <Navbar />
      </header>
    );
  }
}

export default Header;
