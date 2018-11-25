import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';

import {
  Container,
  Title,
  StyledText,
  StyledButton,
  Line,
  StyledButtonText,
} from '../components/utilities';
import Close from '../components/close';
import Point from '../components/point';
import TrashList from '../components/trashList';

/*
  [{
    name: 'ขวดใส',
    price: 10.05
  }, {
    name: 'ขวดใส',
    price: 10.05
  } {
    name: 'กระป๋อง',
    price: 20
  }]

  convert to 

  [{
    name: 'ขวดใส',
    price: 10.05,
    amount: 2
  }, {
    name: 'กระป๋อง',
    price: 20,
    amount: 1
  }]

*/

class ReceiveTrash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [{
        name: 'ขวดใส',
        price: 10.05,
        amount: 2
      }, {
        name: 'กระป๋อง',
        price: 20,
        amount: 1
      }]
    }
  }

  onClose = () => {
    this.props.navigation.navigate('Bin');
  }

  onConfirm = () => {
    this.props.navigation.push('ReceiveSuccess', {items: this.state.items});
  }

  render() {
    const { items } = this.state;
    return (
      <Container>
        <Close onClose={this.onClose} />
        <Title>BIN IS READY</Title>
        <StyledText>Please put in the recyclable trash</StyledText>
        <Line />
        {(items.length == 0) ?
          <Image source={require('../../assets/logo.png')} /> :
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Point
              style={{ width: 40, height: 41 }}
              styleText={{ fontSize: 32 }}
              text="20"
            />
            <TrashList dataSource={items} />
            <Line />
            <StyledButton
              onPress={this.onConfirm}
            >
              <StyledButtonText>
                Confirm
              </StyledButtonText>
            </StyledButton>
          </View>
        }
      </Container>
    );
  }
}

export default ReceiveTrash;