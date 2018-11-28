import React, { Component } from 'react';
import Scanner from '../components/scanner';

class Bin extends Component {
  onRead = (binId) => {
    this.props.navigation.navigate('ReceiveTrash', {binId});
  }

  render() {
    return (
      <Scanner onRead={this.onRead} />
    );
  }
}

export default Bin;