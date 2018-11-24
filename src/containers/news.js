import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableHighlight} from 'react-native';
import Box from '../components/box';
import {theme} from '../../app.json'

class News extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text>ข่าวสาร</Text>
          </View>
          <View style={styles.headerRight}>
              <TouchableHighlight>
                <Text>บทความใหม่ล่าสุด</Text>
              </TouchableHighlight>
              {/* <TouchableHighlight>ได้รับความนิยม</TouchableHighlight> */}
          </View>
        </View>
        <ScrollView style={styles.container}>
          <Box />
          <Box />
          <Box />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.thirdColor,
  },
  header: {
    backgroundColor: '#FFF',
    height: 100,
    marginBottom: 20
  }
});

export default News;