import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableHighlight, AsyncStorage} from 'react-native';
import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/Feather';

import {theme} from '../../app.json'
import Logo from '../../assets/logo.png'
import {
  StyledTextInput,
  StyledButton,
  StyledButtonText,
  StyledButtonSmall,
  StyledButtonTextSmall,
  Container
} from '../components/utilities';

class Register extends Component {
  onPress = () => {
    const fullname = "Sarayut Lawilai";

    firebase.auth().createUserWithEmailAndPassword("imkopkap8@gmail.com", "Kopkap123456!")
    .then(({user}) => {
      console.log(user);
      const {email} = user._user;
      const userRef = firebase.database().ref(`/users/${user.uid}`)
      userRef.set({
        email,
        fullname,
        point: 0.00,
        type: 'user',
      });

      AsyncStorage.setItem('userToken', user._user.refreshToken)
      this.props.navigation.navigate('TabNavigator');
    })
    .catch((error) => {
      const { code, message } = error;
      console.log(error)
      // For details of error codes, see the docs
      // The message contains the default Firebase string
      // representation of the error
    });
  }

  onClose = () => {
    this.props.navigation.pop();
  }

  render() {
    return (
      <Container>
        <TouchableHighlight 
          style={styles.close}
          onPress={this.onClose}
          underlayColor="#ffffff00"
        >
          <Icon name="x" size={30} />
        </TouchableHighlight>
        <Image style={styles.logo} source={Logo} />
        <StyledTextInput
          placeholder="อีเมล:"
          placeholderTextColor={theme.secondColor}
        />
        <StyledTextInput
          placeholder="รหัสผ่าน:"
          placeholderTextColor={theme.secondColor}
        />
        <StyledTextInput
          placeholder="ชื่อ-นามสกุล:"
          placeholderTextColor={theme.secondColor}
        />
        <StyledButton
          onPress={this.onPress}
        >
          <StyledButtonText>สมัครสมาชิก</StyledButtonText>
        </StyledButton>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    marginBottom: 40,
  },
  close: {
    position: 'absolute',
    top: '10%',
    right: 30
  }
});


export default Register;