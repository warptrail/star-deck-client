import React, { Component } from 'react';

import DropApiService from '../../services/drop-api-service';

import Drop from '../../components/Drop/Drop';
import DropForm from '../../components/DropForm/DropForm';

class SeeDropPage extends Component {
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

  addDrop = (drop) => {
    const { drops } = this.state;
    this.setDrops([...drops, drop]);
  };

  clearError() {
    this.setState({
      error: null
    });
  }

  renderDrops() {
    const { drops = [] } = this.state;
    return drops.map((drop) => <Drop key={drop.id} drop={drop} />);
  }

  render() {
    const { error } = this.state;
    return (
      <div>
        <p>Look at all these Drops!</p>
        {error ? <p>There was an error, oh gosh!</p> : this.renderDrops()}
        <h3>Add a new Drop</h3>
        <DropForm addDrop={this.addDrop} />
      </div>
    );
  }
}

export default SeeDropPage;
