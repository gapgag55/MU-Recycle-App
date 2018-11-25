import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import {
  StyledText
} from '../components/utilities';

class TrashList extends Component {
  render() {
    const {dataSource} = this.props;
    return dataSource.map(data => (
      <View key={data.name} style={{...styles.list, width: '80%', marginTop: 20}}>
        <View style={styles.list}>
          <StyledText>{data.name}</StyledText>
          <StyledText> x{data.amount}</StyledText>
        </View>
        <View>
          <StyledText>{data.price} แต้ม</StyledText>
        </View>
      </View>
    ))
  }
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default TrashList;