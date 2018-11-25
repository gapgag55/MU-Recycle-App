import React, { Component } from 'react';
import {View, Image, ScrollView } from 'react-native';

import {
  Container,
  TitleGreen,
  StyledText,
  Line,
} from '../components/utilities';
import Close from '../components/close';
import Point from '../components/point';
import TrashList from '../components/trashList';
import Event from '../components/event';

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

class ReceiveSuccess extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  componentWillMount() {
    const items = this.props.navigation.getParam('items');
    this.setState({items});
  }

  onClose = () => {
    this.props.navigation.navigate('Bin');
  }

  render() {
    const {items} = this.state;
    return (
      <Container>
        <Close onClose={this.onClose} />
        <TitleGreen>Success</TitleGreen>
        <StyledText>Your points are now ready to use</StyledText>
        <Line />
        <Point
          style={{ width: 40, height: 41 }}
          styleText={{ fontSize: 32 }}
          text="20"
        />
        <TrashList dataSource={items} />
        <Line />
        <Event />
      </Container>
    );
  }
}

export default ReceiveSuccess;