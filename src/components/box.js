import React, { Component } from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { BoxTitle, StyledText } from './utilities';

class Box extends Component {
  onPress = (content) => {
    this.props.navigation.push('ReadNew', {content});
  }

  render() {
    const {content} = this.props;
    const {title, date, photo} = content
    const d = new Date(date);

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
          <StyledText style={{padding: 10, paddingTop: 0}}>
            <Icon name="calendar" size={20} />{' '}
            {d.toLocaleString("en-us", {month: "long"})} {d.getDay()}, {d.getFullYear()}
          </StyledText>
        </View>
      </TouchableHighlight>
    );
  }
}

export default Box;