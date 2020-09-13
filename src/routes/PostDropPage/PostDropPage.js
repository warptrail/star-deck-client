import React, { Component } from 'react';
import DropForm from '../../components/DropForm/DropForm';

import DropApiService from '../../services/drop-api-service';

class PostDropPage extends Component {
  state = {
    error: null,
    drops: []
  };

  componentDidMount() {
    this.clearError();
    DropApiService.getDrops()
      .then((drops) => {
        this.setState({ drops });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  setDrops = (drops) => {
    this.setState({ drops });
  };

  clearError() {
    this.setState({
      error: null
    });
  }

  render() {
    return (
      <div>
        <p>Post a new Drop here!</p>
        <DropForm />
      </div>
    );
  }
}

export default PostDropPage;
