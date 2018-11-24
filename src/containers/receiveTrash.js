import React, { Component } from 'react';
import {View} from 'react-native';

import {
  StyledButton,
  Line,
  StyledButtonText,
} from '../components/utilities';

class ReceiveTrash extends Component {
  render() {
    return (
      <View>
        <Line />
        <StyledButton>
          <StyledButtonText>
            ยันยืน
          </StyledButtonText>
        </StyledButton>
      </View>
    );
  }
}

export default ReceiveTrash;