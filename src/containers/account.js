import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import QRCode from 'react-native-qrcode';

import Loading from '../components/loading';
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

    if (!id) {
      return (<Loading />);
    }

    return (
      <Container style={styles.container}>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Title style={{fontSize: 30}}>{fullname}</Title>
          <Text style={styles.text}>{email}</Text>
        </View>
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