import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
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

class TransferInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      receiver: {},
      point: 0
    }
  }
  componentWillMount() {
    const uid = this.props.navigation.getParam('userId')
    var user = firebase.database().ref(`/users/${uid}`)
    user.on('value', (snapshot) => {
      this.setReceiver(snapshot.key, snapshot.val())
    });
  }

  setReceiver = (id, value) => {
    this.setState({
      receiver: {
        id,
        ...value
      }
    });
  }

  onSubmit = () => {
    // If Okay
    const {navigation} = this.props;
    const {point} = this.state;
    const uid = navigation.getParam('userId');
    
    var user = firebase.database().ref(`/users/${uid}`)
    user.update({
      point: this.state.receiver.point + point
    });

    // Update point to user
    
    navigation.navigate('TransferSuccess');
  }

  onClose = () => {
    this.props.navigation.navigate('Map');
  }

  render() {
    const {point} = this.props.user;
    const {receiver} = this.state;
    return (
      <Container>
        <Close onClose={this.onClose} />
        <Title style={{marginBottom: 20}}>Transfer</Title>
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
  user: state.user
});

export default connect(mapStateToProps)(TransferInput);