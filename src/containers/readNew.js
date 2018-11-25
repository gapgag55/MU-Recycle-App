import React, {Component} from 'react';
import {
  Title,
  Container
} from '../components/utilities';
import Close from '../components/close';

class ReadNew extends Component {
  onClose = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <Container>
        <Close onClose={this.onClose} />
        <Title>Hello</Title>
      </Container>
    );
  }
}

export default ReadNew;