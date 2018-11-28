import React, { Component } from 'react';
import Scanner from '../components/scanner';

class Bin extends Component {
  onRead = (binName) => {
    this.props.navigation.navigate('ReceiveTrash', {binName});
  }

  render() {
    return (
      <Scanner onRead={this.onRead} />
    );
  }
}

export default Bin;