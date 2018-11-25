import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  StyledButton,
  StyledButtonText,
  Container,
  Title,
  TitleGreen,
  Line,
  StyledTextInput
} from '../components/utilities';
import Point from '../components/point';
import Close from '../components/close';
import Event from '../components/event';

class TransferSuccess extends Component {
  onSubmit = () => {}

  onClose = () => {
    this.props.navigation.navigate('Map');
  }

  render() {
    return (
      <Container>
        <Close onClose={this.onClose} />
        <TitleGreen>สำเร็จ</TitleGreen>
        <Text style={styles.font}>คุณได้ทำการโอนแต้มเรียบร้อย</Text>
        <Line />
        <Text style={styles.font}>ผู้รับแต้ม</Text>
        <Title style={{
          marginBottom: 20,
          fontWeight: 'normal',
          fontSize: 20
        }}>ธนกิตติ์ สาชาติ</Title>
        <Point
          style={{ width: 40, height: 41 }}
          styleText={{ fontSize: 26 }}
          text="20"
        />
        <Line />
        <Event />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  font: {
    fontFamily: 'Prompt-regular'
  }
});

export default TransferSuccess;