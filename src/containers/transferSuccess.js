import React, { Component } from 'react';
import {Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Title,
  TitleGreen,
  Line
} from '../components/utilities';
import Point from '../components/point';
import Close from '../components/close';
import Event from '../components/event';

import {
  removeReceiver
} from '../actions/receiver';

class TransferSuccess extends Component {
  onClose = () => {
    this.props.removeReceiver();
    this.props.navigation.navigate('Map');
  }

  render() {
    const { fullname, navigation } = this.props.receiver;

    return (
      <Container>
        <Close onClose={this.onClose} />
        <TitleGreen>Success</TitleGreen>
        <Text style={styles.font}>Your points have been transfered</Text>
        <Line />
        <Text style={{...styles.font, marginBottom: 10}}>Receiver</Text>
        <Title style={{
          marginBottom: 20,
          fontWeight: 'normal',
          fontSize: 20
        }}>{fullname}</Title>
        <Point
          style={{ width: 40, height: 41 }}
          styleText={{ fontSize: 26 }}
          text={navigation.getParams('point')}
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
    fontFamily: 'Roboto-Regular',
  }
});

const mapStateToProps = state => ({
  receiver: state.receiver,
});

const mapDispatchToProps = dispatch => ({
  removeReceiver: () => dispatch(removeReceiver()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransferSuccess);