import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';

import { createUser } from '../actions/user';

import { theme } from '../../app.json'
import Logo from '../../assets/logo.png'
import {
  StyledTextInput,
  StyledButton,
  StyledButtonText,
  Container
} from '../components/utilities';
import Close from '../components/close';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      fullname: '',
    };
  }
  onPress = () => {
    const {email, password, fullname} = this.state;
    const data = {
      email,
      password,
      fullname,
      type:'user',
    };

    this.props.createUser(data);
    this.props.navigation.navigate('TabNavigator');
  }

  onClose = () => {
    this.props.navigation.pop();
  }

  render() {
    return (
      <Container>
        <Close onClose={this.onClose} />
        <Image style={{ marginBottom: 40 }} source={Logo} />
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
        <StyledTextInput
          placeholder="Name:"
          placeholderTextColor={theme.secondColor}
          onChangeText={(fullname) => this.setState({ fullname })}
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

const mapDispatchToProps = dispatch => ({
  createUser: (data) => dispatch(createUser(data))
})

export default connect(null, mapDispatchToProps)(Register);