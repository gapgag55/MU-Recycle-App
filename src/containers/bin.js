import React, { Component } from 'react';
import {
  NativeEventEmitter,
  NativeModules,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import BleManager from 'react-native-ble-manager';
import Scanner from '../components/scanner';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

class Bin extends Component {
  constructor(props) {
    super(props);

    this.handleDiscoverPeripheral = this.handleDiscoverPeripheral.bind(this);
  }

  componentDidMount() {
    BleManager.start({showAlert: false})
    this.handlerDiscover = bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', this.handleDiscoverPeripheral );

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
    BleManager.connect(peripheral.id).then(() => {
      console.log('Connected to ' + peripheral.id);
      
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
    });


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

  handleDiscoverPeripheral(peripheral){
    console.log('Got ble peripheral', peripheral);
  }

  startScan = () => {
    BleManager.scan([], 10, true).then((results) => {
      console.log('Scanning...', results);
      // this.setState({scanning:true});
    });
  }

  onRead = () => { }

  render() {
    return (
      <Scanner onRead={this.onRead} />
      // <View>
      //  <TouchableHighlight style={{marginTop: 40,margin: 20, padding:20, backgroundColor:'#ccc'}} onPress={() => this.startScan() }>
      //     <Text>Scan Bluetooth</Text>
      //   </TouchableHighlight>
      // </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     fontFamily: 'Prompt-Medium'
//   },
// });

export default Bin;