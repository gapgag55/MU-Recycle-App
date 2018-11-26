import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  TitleGreen,
  StyledText,
  Line,
} from '../components/utilities';
import Close from '../components/close';
import Point from '../components/point';
import TrashList from '../components/trashList';
import Event from '../components/event';

import { removeTrash } from '../actions/trash';

class ReceiveSuccess extends Component {
  onClose = () => {
    this.props.removeTrash();
    this.props.navigation.navigate('Bin');
  }

  render() {
    const { trashes } = this.props;
    let point = 0;

    if (trashes.length > 0) {
      for (let i = 0; i < trashes.length; i++) {
        point += (trashes[i].amount * trashes[i].rate);
      }
    }

    return (
      <Container>
        <Close onClose={this.onClose} />
        <TitleGreen>Success</TitleGreen>
        <StyledText>Your points are now ready to use</StyledText>
        <Line />
        <Point
          style={{ width: 40, height: 41 }}
          styleText={{ fontSize: 32 }}
          text={point}
        />
        <TrashList dataSource={trashes} />
        <Line />
        <Event />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  trashes: state.trashes
});

const mapDispatchToProps = dispatch => ({
  removeTrash: () => dispatch(removeTrash())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReceiveSuccess);