/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class Drop extends Component {
  render() {
    const { drop } = this.props;
    return (
      <div>
        <p>Drop id: {drop.id}</p>
        <h2>{drop.title}</h2>
        <p>{drop.content}</p>
        <p>{drop.created}</p>
      </div>
    );
  }
}

export default Drop;
