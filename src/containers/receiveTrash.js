import React, { Component } from 'react';
import {
  View,
  Image,
  NativeEventEmitter,
  NativeModules,
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
    BleManager.start({ showAlert: true });

    const peripheral = navigation.getParam('binId');

    BleManager.connect(peripheral).then(() => {
      console.log('Connected');
      this.connectAndPrepare(peripheral, 'FFE0', 'FFE1');
    });
  }

  connectAndPrepare = async (peripheral, service, characteristic) => {
    // Connect to device
    await BleManager.connect(peripheral);
    // Before startNotification you need to call retrieveServices
    await BleManager.retrieveServices(peripheral)
    // To enable BleManagerDidUpdateValueForCharacteristic listener
    await BleManager.startNotification(peripheral, service, characteristic)
    // Add event listener
    bleManagerEmitter.addListener(
      'BleManagerDidUpdateValueForCharacteristic',
      this.receiveTrashFromBluethooth
    );
  }

  receiveTrashFromBluethooth = ({ value, peripheral, characteristic, service }) => {
    if (value[0] != 10) {
      const code = parseInt(bytesToString(value));
      this.props.addTrash(code);
    }
  }

  addToBin = () => {
    this.props.addTrash(1); 
  }

  onClose = () => {
    // Close bluethooth connection
    this.props.removeTrash();
    this.props.navigation.navigate('Bin');
  }

  onConfirm = () => {
    // Close bluethooth connection
    this.props.updatePointUser();
    this.props.navigation.push('ReceiveSuccess');
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
        {/* <TouchableHighlight onPress={this.addToBin}>
          <Title>ADD TRASH</Title>
        </TouchableHighlight> */}
        {(trashes.length == 0) ?
          <Image source={require('../../assets/logo.png')} /> :
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Point
              style={{ width: 40, height: 41 }}
              styleText={{ fontSize: 32 }}
              text={point.toPrecision(2)}
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