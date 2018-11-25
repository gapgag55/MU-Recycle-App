import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
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
    console.log(id, value);
    this.setState({
      receiver: {
        id,
        ...value
      }
    })
  }

  onSubmit = () => {
    // If Okay
    const {navigation} = this.props;
    const uid = navigation.getParam('userId');
    
    var user = firebase.database().ref(`/users/${uid}`)
    user.update({
      point: this.state.receiver.point + 20
    });
    
    navigation.navigate('TransferSuccess');
  }

  onClose = () => {
    this.props.navigation.navigate('Map');
  }

  render() {
    const {receiver, point} = this.state;
    return (
      <Container>
        <Close onClose={this.onClose} />
        <Title style={{marginBottom: 20}}>โอนแต้ม</Title>
        <View style={styles.flex}>
          <Text style={styles.font}>แต้มของคุณ:</Text>
          <Point
            style={{ width: 30, height: 31 }}
            styleText={{ fontSize: 22 }}
            text="20"
          />
        </View>
        <Line />
        <Text style={styles.font}>ผู้รับแต้ม</Text>
        <Title style={{
          marginBottom: 20,
          fontWeight: 'normal',
          fontSize: 25
        }}>{receiver.fullname}</Title>
        <StyledTextInput
          placeholder="จำนวนแต้ม"
        />
        <Line />
        <StyledButton
          onPress={this.onSubmit}
        >
          <StyledButtonText>
            ยืนยัน
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
    fontFamily: 'Prompt-regular'
  }
});

export default TransferInput;