import React, { Component } from 'react';
import Scanner from '../components/scanner';

class Transfer extends Component {
  onRead = () => { }

  render() {
    return (
      <Scanner onRead={this.onRead} />
    );
  }
}

export default Transfer;