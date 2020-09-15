/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import DropApiService from '../../services/drop-api-service';

class DropForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { addDrop } = this.props;

    const { title, content } = e.target;
    const data = {
      title: title.value,
      content: content.value
    };

    DropApiService.postDrop(data)
      .then(addDrop)
      .then(() => {
        title.value = '';
        content.value = '';
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <form className="add_drop_form" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <input type="text" name="content" id="content" />
        </div>
        <button type="submit">Drop!</button>
      </form>
    );
  }
}

export default DropForm;
