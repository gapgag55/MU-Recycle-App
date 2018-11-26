import React, { Component } from 'react';
import { Image, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';

import Loading from '../components/loading';
import { getUser } from '../actions/user';

import { theme } from '../../app.json'
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
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isLoading: false
    };
  }
  
  onPress = () => {
    const { email, password } = this.state;
    this.setState({
      isLoading: true
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await AsyncStorage.setItem('userId', user._user.uid);
        this.props.getUser();
        this.props.navigation.navigate('TabNavigator');
      });
  }

  onNavigate = () => {
    this.props.navigation.push('Register')
  }

  render() {
    const { isLoading } = this.state;
    return (
      <Container>
        {isLoading && <Loading />}
        <Image style={{ marginBottom: 20 }} source={Logo} />
        <StyledTextInput
          placeholder="Email:"
          placeholderTextColor={theme.secondColor}
          onChangeText={(email) => this.setState({ email })}
        />
        <StyledTextInput
          placeholder="Password:"
          secureTextEntry={true}
          placeholderTextColor={theme.secondColor}
          onChangeText={(password) => this.setState({ password })}
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

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser())
});

export default connect(null, mapDispatchToProps)(Login);