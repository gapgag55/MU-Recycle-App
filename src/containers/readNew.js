import React, { Component } from 'react';
import {ScrollView, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {
  Title,
  StyledText,
  Container
} from '../components/utilities';
import Close from '../components/close';

class ReadNew extends Component {
  constructor(props) {
    super(props);
    this.state = { content: {} };
  }

  componentWillMount() {
    const content = this.props.navigation.getParam('content');
    this.setState({ content });
  }

  onClose = () => {
    this.props.navigation.goBack();
  }

  render() {
    const {title, date, photo, content} = this.state.content;
    const d = new Date(date);
    return (
      <View>
        <Close onClose={this.onClose} />
        <ScrollView>
          <Image source={{uri: photo}} style={{height: 300}} />
          <View style={{padding: 10}}>
            <Title style={{fontSize: 20}}>{title}</Title>
            <StyledText style={{marginTop: 20}}>
              <Icon name="calendar" size={20} />{' '}
             {d.toLocaleString("en-us", {month: "long"})} {d.getDay()}, {d.getFullYear()}
            </StyledText>
            <StyledText style={{marginTop: 20, lineHeight: 22}}>{content}</StyledText>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ReadNew;