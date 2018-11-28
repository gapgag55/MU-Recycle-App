import React, { Component } from 'react';
import { connect } from 'react-redux';
import BleManager from 'react-native-ble-manager';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';

import {theme} from '../../app.json';
import {Container} from '../components/utilities';
import { getUser } from '../actions/user';

class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    BleManager.start({ showAlert: true });

    const userId = await AsyncStorage.getItem('userId');

    // // Get User to Store
    if (userId)
      this.props.getUser();
      

    this.props.navigation.navigate(userId ? 'TabNavigator' : 'AuthStack');
  };

  // Render any loading content that you like here
  render() {
    return (
      <Container>
        <ActivityIndicator size="large" color={theme.primaryColor} />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser()),
});

export default connect(null, mapDispatchToProps)(AuthLoading);