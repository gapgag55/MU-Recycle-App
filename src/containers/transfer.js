import React, { Component } from 'react';
import Scanner from '../components/scanner';

class Transfer extends Component {
  onRead = (data) => {
    // Read Success 
    if (data != undefined) 
      this.props.navigation.push('TransferInput', {userId: data});
  }

  render() {
    return (
      <Scanner onRead={this.onRead} />
    );
  }
}

export default Transfer;