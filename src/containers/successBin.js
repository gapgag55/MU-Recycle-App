import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { theme } from '../../app.json'
import IconButton from '../components/iconButton'
import Point from '../components/point';
import {
  SuccessText,
  Message,
  Line
} from '../components/utilities';

class SuccessBin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SuccessText>สำเร็จ</SuccessText>
        <Message>คุณได้รับแต้มเข้าสู่กระเป๋าเรียบร้อย</Message>
        <Line />
        <Point style={{ width: 25, height: 26 }} /> 
        <Line />
        <View styles={styles.icon}>
          <IconButton
            icon="wallet"
            text="โอนแต้ม"
          />
          <IconButton
            icon="credit"
            text="บริจาค"
          />
          <IconButton
            icon="share-alternative"
            text="บริจาค"
          />
          <IconButton
            icon="download"
            text="บันทึก"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.thirdColor,
    padding: 40
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'green',
    width: '100%'
  }
});

export default SuccessBin;