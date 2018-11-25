import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Point = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={props.style}
        source={require('../../assets/point.png')}
      />
      <Text style={Object.assign({}, styles.text, props.styleText)}>{props.text} points</Text>
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
    fontFamily: 'Roboto-Regular'
  }
})

export default Point;