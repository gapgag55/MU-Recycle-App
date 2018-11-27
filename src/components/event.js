import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Entypo';
import ViewShot from "react-native-view-shot";

import {
  StyledText
} from './utilities';

const StyledView = styled.View`
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 10px 20px;
`;

class Event extends Component {

  onTransfer = () => { }

  onShare = () => { }

  onSave = () => { }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.onTransfer}
          underlayColor="#eee"
        >
          <StyledView>
            <Icon name="wallet" size={30} />
            <StyledText>Transfer</StyledText>
          </StyledView>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.onShare}
          underlayColor="#eee"
        >
          <StyledView>
            <Icon name="share" size={30} />
            <StyledText>Share</StyledText>
          </StyledView>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.onSave}
          underlayColor="#eee"
        >
          <StyledView>
            <Icon name="download" size={30} />
            <StyledText>Save</StyledText>
          </StyledView>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
});

export default Event;