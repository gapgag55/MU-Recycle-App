import React, { Component } from 'react';
import {View, ActivityIndicator, StyleSheet, } from 'react-native';

import {theme} from '../../app.json';

class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={theme.primaryColor} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 2
  }
})

export default Loading;