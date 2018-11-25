import React, { Component } from 'react';
import {View} from 'react-native';

import {
  StyledButton,
  Line,
  StyledButtonText,
} from '../components/utilities';
import Event from '../components/event';

class ReceiveSuccess extends Component {
  render() {
    return (
      <View>
        <Line />
        <Event />
      </View>
    );
  }
}

export default ReceiveSuccess;