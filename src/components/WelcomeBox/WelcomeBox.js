/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';

import './WelcomeBox.css';

class WelcomeBox extends Component {
  render() {
    return (
      <div className="welcome_box">
        <p>
          Hello and Welcome to the Internet. This is where you will find any and
          all information about how and why we construct Ethereal Widgets out of
          Random Number Generators to encode them with extra-dimensional
          abilities.
        </p>
        <p>
          Please register and login to use this amazing service. There will be
          cupcakes and punch at some point in your future.
        </p>
        <p>
          If you are an alien of the seventh dimension, please click this link:{' '}
          <a
            className="alien"
            href="https://quantum-warp-dynamics.tumblr.com/"
            target="_blank"
          >
            ⍙⟒⌰☊⍜⋔⟒
          </a>
        </p>
      </div>
    );
  }
}

export default WelcomeBox;
