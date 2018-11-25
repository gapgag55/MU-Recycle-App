import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import firebase from 'react-native-firebase';
import QRCode from 'react-native-qrcode';

import {
  Container,
  Title,
  StyledButton,
  Line,
  StyledButtonText,
} from '../components/utilities';

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      fullname: '',
      email: ''
    }
  }
  
  componentWillMount() {
    const {uid} = firebase.auth().currentUser._user;
    var user = firebase.database().ref(`/users/${uid}`)
    user.on('value', (snapshot) => {
      this.setUser(snapshot.key, snapshot.val())
    });
  }

  setUser = (id, { fullname, email }) => {
    this.setState({id, fullname, email});
  }

  logout = () => {
    // CODE HERE
    this.props.navigation.navigate('AuthStack');
  }

  render() {
    const {id, email, fullname} = this.state;
    return (
      <Container style={styles.container}>
        <Title>{fullname}</Title>
        <Text style={styles.text}>{email}</Text>
        <Line />
        <QRCode
          value={id}
          size={200}
        />
        <Line />
        <StyledButton
          onPress={this.logout}
        >
          <StyledButtonText>
            Logout
          </StyledButtonText>
        </StyledButton>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60, 
    paddingBottom: 30,
    justifyContent: 'space-between'
  },
  text: {
    fontFamily: 'Roboto-Regular'
  }
});

export default Account;