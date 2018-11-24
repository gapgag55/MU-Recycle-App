import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Point = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={props.style}
        source={require('../../assets/point.png')}
      />
      <Text style={Object.assign({}, styles.text, props.styleText)}>{props.text} แต้ม</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    marginLeft: 10,
    fontSize: 30,
    fontFamily: 'Prompt-Regular'
  }
})

export default Point;