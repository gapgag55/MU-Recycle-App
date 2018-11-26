import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  StyledButton,
  StyledButtonText,
  Container,
  Title,
  Line,
  StyledTextInput
} from '../components/utilities';
import Point from '../components/point';
import Close from '../components/close';

import {
  updatePointReciver,
  removeReceiver
} from '../actions/receiver';

class TransferInput extends Component {
  constructor(props) {
    super(props);

    this.state = { point: 0 }
  }

  onSubmit = () => {
    // If Okay
    const { point } = this.state;
    // Update point to user
    this.props.updatePointReciver(point);
    navigation.navigate('TransferSuccess');
  }

  onClose = () => {
    this.props.removeReceiver();
    this.props.navigation.navigate('Map');
  }

  render() {
    const { point } = this.props.user;
    const { receiver } = this.state;
    return (
      <Container>
        <Close onClose={this.onClose} />
        <Title style={{ marginBottom: 20 }}>Transfer</Title>
        <View style={styles.flex}>
          <Text style={styles.font}>Your points:</Text>
          <Point
            style={{ width: 30, height: 31 }}
            styleText={{ fontSize: 22 }}
            text={point}
          />
        </View>
        <Line />
        <Text style={styles.font}>Receiver</Text>
        <Title style={{
          marginBottom: 20,
          fontWeight: 'normal',
          fontSize: 25
        }}>{receiver.fullname}</Title>
        <StyledTextInput
          placeholder="Points"
          onChangeText={(point) => this.setState({ point })}
        />
        <Line />
        <StyledButton
          onPress={this.onSubmit}
        >
          <StyledButtonText>
            Confirm
          </StyledButtonText>
        </StyledButton>
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
    fontFamily: 'Roboto-Regular'
  }
});

const mapStateToProps = state => ({
  user: state.user,
  receiver: state.receiver,
});

const mapDispatchToProps = dispatch => ({
  updatePointReciver: (point) => dispatch(updatePointReciver(point)),
  removeReceiver: () => dispatch(removeReceiver()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransferInput);