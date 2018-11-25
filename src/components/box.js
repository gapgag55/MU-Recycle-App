import React, { Component } from 'react';
import { Image, TouchableHighlight } from 'react-native';

import { BoxWrapper, BoxTitle } from './utilities';

class Box extends Component {
  render() {
    return (
      <TouchableHighlight>
        <BoxWrapper>
          <Image
            source={require('../../assets/blog/1.jpg')}
            style={{ width: '100%', height: '100%' }}
          />
          <BoxTitle>MUIC Successfully Stages Open House 2018</BoxTitle>
        </BoxWrapper>
      </TouchableHighlight>
    );
  }
}

export default Box;