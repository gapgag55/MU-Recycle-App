import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import {
  StyledText
} from '../components/utilities';

class TrashList extends Component {
  render() {
    const {dataSource} = this.props;
    console.log(dataSource)
    return dataSource.map(data => (
      <View key={data.name + data.code} style={{...styles.list, width: '80%', marginTop: 20}}>
        <View style={styles.list}>
          <StyledText>{data.title}</StyledText>
          <StyledText> x{data.amount}</StyledText>
        </View>
        <View>
          <StyledText>{(data.rate * data.amount).toPrecision(2)} point</StyledText>
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