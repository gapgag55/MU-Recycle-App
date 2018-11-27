import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class Close extends Component {
  render() {
    const { underlayColor } = this.props;
    return (
      <TouchableHighlight
        style={styles.close}
        onPress={this.props.onClose}
        underlayColor={underlayColor ? underlayColor : "#eee"}
      >
        <Icon name="x" size={30} />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  close: {
    position: 'absolute',
    top: '10%',
    right: 20,
    zIndex: 2,
  }
});

export default Close;