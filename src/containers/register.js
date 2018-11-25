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
  Container
} from '../components/utilities';
import Close from '../components/close';

class Register extends Component {
  onPress = () => {
    // const fullname = "Sarayut Lawilai";

    // firebase.auth().createUserWithEmailAndPassword("imkopkap8@gmail.com", "Kopkap123456!")
    // .then(({user}) => {
    //   console.log(user);
    //   const {email} = user._user;
    //   const userRef = firebase.database().ref(`/users/${user.uid}`)
    //   userRef.set({
    //     email,
    //     fullname,
    //     point: 0.00,
    //     type: 'user',
    //   });

    //   AsyncStorage.setItem('userId', user._user.refreshToken)
    

    // SET TO REDUX

      this.props.navigation.navigate('TabNavigator');
    // })
    // .catch((error) => {
    //   const { code, message } = error;
    //   console.log(error)
    //   // For details of error codes, see the docs
    //   // The message contains the default Firebase string
    //   // representation of the error
    // });
  }

  onClose = () => {
    this.props.navigation.pop();
  }

  render() {
    return (
      <Container>
        <Close onClose={this.onClose} />
        <Image style={styles.logo} source={Logo} />
        <StyledTextInput
          placeholder="Email:"
          placeholderTextColor={theme.secondColor}
        />
        <StyledTextInput
          placeholder="Password:"
          placeholderTextColor={theme.secondColor}
        />
        <StyledTextInput
          placeholder="Name:"
          placeholderTextColor={theme.secondColor}
        />
        <StyledButton
          onPress={this.onPress}
        >
          <StyledButtonText>Register</StyledButtonText>
        </StyledButton>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    marginBottom: 40,
  }
});


export default Register;