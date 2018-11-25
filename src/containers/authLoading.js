import React, {Component} from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';

class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userId = await AsyncStorage.getItem('userId');
    
    // Set User to Store

    this.props.navigation.navigate(userId ? 'TabNavigator' : 'AuthStack');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      </View>
    );
  }
}

export default AuthLoading;