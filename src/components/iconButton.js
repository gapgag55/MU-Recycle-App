import React, {Component} from 'react';
import {TouchableHighlight, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

class IconButton extends Component {
  render() {
    const {icon, onClick, text} = this.props;
    return (
      <TouchableHighlight onPress={onClick}>
        <View style={styles.flex}>
          <Icon name={icon} size={35} />
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15
  }
});

export default IconButton;