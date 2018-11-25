import React, {Component} from 'react';
import {StyleSheet, View, Image, AsyncStorage} from 'react-native';
import firebase from 'react-native-firebase';

import {theme} from '../../app.json'
import Logo from '../../assets/logo.png'
import {
  Container,
  StyledTextInput,
  StyledButton,
  StyledButtonText,
  StyledButtonSmall,
  StyledButtonTextSmall
} from '../components/utilities';

class Login extends Component {
  onPress = () => {
    firebase.auth().signInWithEmailAndPassword("imkopkap2@gmail.com", "Kopkap123456!")
    .then(({user}) => {
      // Send uid to redux to get full information

      AsyncStorage.setItem('userId', user._user.refreshToken)
      this.props.navigation.navigate('TabNavigator');
    });
  }

  onNavigate = () => {
    this.props.navigation.push('Register')
  }

  render() {
    return (
      <Container>
        <Image style={styles.logo} source={Logo} />
        <StyledTextInput
          placeholder="Email:"
          placeholderTextColor={theme.secondColor}
        />
        <StyledTextInput
          placeholder="Password:"
          placeholderTextColor={theme.secondColor}
        />
        <StyledButton
          onPress={this.onPress}
        >
          <StyledButtonText>Login</StyledButtonText>
        </StyledButton>
        <StyledButtonSmall
          onPress={this.onNavigate}
        >
          <StyledButtonTextSmall>
            Register
          </StyledButtonTextSmall>
        </StyledButtonSmall>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    marginBottom: 40,
  }
});


export default Login;