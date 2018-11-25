import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import QRCode from 'react-native-qrcode';

import { removeUser } from '../actions/user';

import {
  Container,
  Title,
  StyledButton,
  Line,
  StyledButtonText,
} from '../components/utilities';

class Account extends Component {
  logout = () => {
    this.props.logout();
    this.props.navigation.navigate('AuthStack');
  }

  render() {
    const { id, email, fullname } = this.props.user;
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

const mapStateToProps = state => ({
  user: state.user
});

const mapStateToDispatch = dispatch => ({
  logout: () => dispatch(removeUser())
})

export default connect(mapStateToProps, mapStateToDispatch)(Account);