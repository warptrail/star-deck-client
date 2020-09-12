import React, { Component } from 'react';

import Navbar from './Navbar/Navbar';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Warptrail React Application Interface</h1>
        <Navbar />
      </header>
    );
  }
}

export default Header;
