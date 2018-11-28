import React, { Component } from 'react';
import {
  View,
  Image,
  NativeEventEmitter,
  NativeModules,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import Permissions from 'react-native-permissions'
import BleManager from 'react-native-ble-manager';
import { bytesToString } from 'convert-string';

import {
  addTrash,
  removeTrash,
  updatePointUser
} from '../actions/trash';

import {
  Container,
  Title,
  StyledText,
  StyledButton,
  Line,
  StyledButtonText,
} from '../components/utilities';
import Close from '../components/close';
import Point from '../components/point';
import TrashList from '../components/trashList';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

class ReceiveTrash extends Component {

  componentDidMount() {
    const { navigation } = this.props;

    const peripheral = navigation.getParam('binId');
    this.connectAndPrepare(peripheral, 'FFE0', 'FFE1');
  }

  connectAndPrepare = async (peripheral, service, characteristic) => {
    // Connect to device
    await BleManager.connect(peripheral)
    // Before startNotification you need to call retrieveServices
    await BleManager.retrieveServices(peripheral)
    // To enable BleManagerDidUpdateValueForCharacteristic listener
    await BleManager.startNotification(peripheral, service, characteristic)
    // Add event listener
    this.handleUpdate = bleManagerEmitter.addListener(
      'BleManagerDidUpdateValueForCharacteristic',
      this.receiveTrashFromBluethooth
    );
  }

  receiveTrashFromBluethooth = ({ value }) => {
    const preventValue = [10, 116, 78];

    if (!preventValue.includes(value[0])) {
      const code = parseInt(bytesToString(value));
      this.props.addTrash(code);
    }
  }

  onClose = () => {
    // Close bluethooth connection
    this.closeBlE();

    setTimeout(() => {
      this.props.removeTrash();
    }, 1000)

    this.props.navigation.navigate('Bin');
  }

  onConfirm = () => {
    // Close bluethooth connection
    this.closeBlE();

    this.props.updatePointUser();
    this.props.navigation.push('ReceiveSuccess');
  }

  closeBlE = () => {
    const { navigation } = this.props;
    const peripheral = navigation.getParam('binId');

    BleManager.disconnect(peripheral);
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
        <Title>BIN IS READY</Title>
        <StyledText>Please put in the recyclable trash</StyledText>
        <Line />
        {(trashes.length == 0) ?
          <Image source={require('../../assets/logo.png')} /> :
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Point
              style={{ width: 40, height: 41 }}
              styleText={{ fontSize: 32 }}
              text={point.toFixed(2)}
            />
            <TrashList dataSource={trashes} />
            <Line />
            <StyledButton
              onPress={this.onConfirm}
            >
              <StyledButtonText>
                Confirm
              </StyledButtonText>
            </StyledButton>
          </View>
        }
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  trashes: state.trashes
});

const mapDispatchToProps = dispatch => ({
  addTrash: (code) => dispatch(addTrash(code)),
  removeTrash: () => dispatch(removeTrash()),
  updatePointUser: () => dispatch(updatePointUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReceiveTrash);