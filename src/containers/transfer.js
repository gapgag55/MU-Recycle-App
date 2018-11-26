import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scanner from '../components/scanner';

import { getReceiver } from '../actions/receiver';

class Transfer extends Component {
  onRead = (userId) => {
    // Read Success 
    if (userId != undefined) {
      this.props.getReceiver(userId);

      setTimeout(() => {
        this.props.navigation.push('TransferInput');
      }, 300)
    }
  }

  render() {
    return (
      <Scanner onRead={this.onRead} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getReceiver: (userId) => dispatch(getReceiver(userId))
});

export default connect(null, mapDispatchToProps)(Transfer);