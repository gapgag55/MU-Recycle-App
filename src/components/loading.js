import React, { Component } from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} />
        {/* <Text style={styles.text}>Loading...</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  text: {
    fontFamily: 'Prompt-regular'
  }
})

export default Loading;