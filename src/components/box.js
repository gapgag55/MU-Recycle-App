import React, { Component } from 'react';
import { View, Image, TouchableHighlight } from 'react-native';

import { BoxTitle } from './utilities';

class Box extends Component {
  onPress = (content) => {
    this.props.navigation.push('ReadNew', {content});
  }

  render() {
    const {content} = this.props;
    const {title, date, photo} = content
    return (
      <TouchableHighlight
        style={{ backgroundColor: '#FFF', marginBottom: 20 }}
        onPress={() => this.onPress(content)}
        underlayColor="#EEE"
      >
        <View>
          <Image
            source={{uri: photo}}
            style={{ width: '100%', height: 180 }}
          />
          <BoxTitle>{title}</BoxTitle>
        </View>
      </TouchableHighlight>
    );
  }
}

export default Box;