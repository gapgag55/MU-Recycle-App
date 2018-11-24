import React, { Component } from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner'

class Scanner extends Component {
  render() {
    return (
      <QRCodeScanner
        onRead={this.props.onRead()}
        cameraStyle={styles.cameraContainer}
        showMarker={true}
        customMarker={<Image source={require('../../assets/scanqr.png')} />}
        markerStyle={{color: 'white'}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  cameraContainer: {
    height: Dimensions.get('window').height,
  }
});

export default Scanner;