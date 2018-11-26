import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';

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

class ReceiveTrash extends Component {
  componentDidMount() {
    // BleManager.start({showAlert: false})
    // this.handlerDiscover = bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', this.handleDiscoverPeripheral );

    // 764449C8-63C7-B3A8-22BF-B716116A248C - Mang
    // 68800E93-5087-38AB-F6E6-3B82FF101C64 - MAC Kopkap
    // FC-A8-9A-00-2C-01 -

    var peripheral = {
      id: '68800E93-5087-38AB-F6E6-3B82FF101C64'
    };

    // BleManager.getDiscoveredPeripherals([])
    // .then((peripheralsArray) => {
    //   // Success code
    //   console.log('Discovered peripherals: ' + peripheralsArray.length);
    // });

    // BleManager.connect(peripheral.id).then(() => {
    //   console.log('Connected to ' + peripheral.id);
      
    //   BleManager.retrieveServices(peripheral.id)
    //   .then((peripheralInfo) => {
    //     // Success code
    //     console.log('Peripheral info:', peripheralInfo);

    //     BleManager.read(peripheral.id, "180A", "2A24")
    //     .then((readData) => {
    //       // Success code
    //       console.log('Read: ' + readData);
    //     });
    //   });
    // });

    // BleManager.isPeripheralConnected(peripheral.id, [])
    // .then((isConnected) => {
    //   if (isConnected) {
    //     console.log('Peripheral is connected!');
    //   } else {
    //     console.log('Peripheral is NOT connected!');
    //   }
    // });

    // Check Permission Bluethooth
  }

  // handleDiscoverPeripheral(peripheral){
  //   console.log('Got ble peripheral', peripheral);
  // }

  // startScan = () => {
  //   BleManager.scan([], 10, true).then((results) => {
  //     console.log('Scanning...', results);
  //     // this.setState({scanning:true});
  //   });
  // }

  onClose = () => {
    // Close bluethooth connection

    this.props.navigation.navigate('Bin');
  }

  onConfirm = () => {
    // Close bluethooth connection

    this.props.navigation.push('ReceiveSuccess', {items: this.state.items});
  }

  render() {
    const { trashes } = this.props;
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
              text="20"
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
  addTrash: (trash) => dispatch(addTrash(trash))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReceiveTrash);