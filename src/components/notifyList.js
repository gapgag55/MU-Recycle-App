import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import {
  Line,
  StyledText,
} from './utilities';

class NotifyList extends Component {
  render() {
    return (
      <View style={{width: '100%'}}>
        <View style={styles.list}>
          <StyledText style={styles.head}>Points Received</StyledText>
          <StyledText style={styles.date}>10 November 2018</StyledText>
        </View>
        <View>
          <StyledText style={{marginTop: 10}}>Tanakit Sachati gives 20 points to you</StyledText>
        </View>
        <Line />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  date: {
    fontSize: 12
  },
  head: {
    fontSize: 20,
  }
});

export default NotifyList;