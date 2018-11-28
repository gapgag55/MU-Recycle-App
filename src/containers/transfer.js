import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Scanner from '../components/scanner';
import Close from '../components/close';

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

  onClose = () => {
    this.props.navigation.navigate('Map');
  }

  render() {
    return (
      <View style={{height: '100%'}}>
        <Close
          onClose={this.onClose}
          underlayColor={'#FF00FF00'}
        />
        <Scanner onRead={this.onRead} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getReceiver: (userId) => dispatch(getReceiver(userId))
});

export default connect(null, mapDispatchToProps)(Transfer);