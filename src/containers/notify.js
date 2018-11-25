import React, {Component} from 'react';
import { View, ScrollView } from 'react-native';
import {Container} from '../components/utilities';
import NotifyList from '../components/notifyList';

import { theme } from '../../app.json';
import {
  Header,
  HeaderTitle
} from '../components/utilities';
/*
  [{
    type: 'transfer',
    receiver: 'ธนกิตติ์ สาชาติ',
    amount: 20.0,
    date: '2011-01-01T15:03:01.012345Z'
  }, {
    type: 'receiveTrash',
    amount: 20.0,
    date: '2011-01-01T15:03:01.012345Z'
  }, {
    type: 'receiveTransfer',
    sender: 'ธนกิตติ์ สาชาติ',
    amount: '20.0',
    date: '2011-01-01T15:03:01.012345Z'
  }]
*/

class Notify extends Component {
  onSuccess(e) {
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
  }

  render() {
    const items = [{
      type: 'transfer',
      receiver: 'ธนกิตติ์ สาชาติ',
      amount: 20.0,
      date: '2011-01-01T15:03:01.012346Z'
    }, {
      type: 'receiveTrash',
      amount: 20.0,
      date: '2011-01-01T15:03:01.012348Z'
    }, {
      type: 'receiveTransfer',
      sender: 'ธนกิตติ์ สาชาติ',
      amount: '20.0',
      date: '2011-01-01T15:03:01.012347Z'
    }];
    
    return (
      <View>
        <Header>
          <HeaderTitle>Notifications</HeaderTitle>
        </Header>
        <View style={{backgroundColor: '#FFF', height: '100%'}}>
          <ScrollView style={{padding: 20}}>
            {items.map(item => (
              <NotifyList key={item.date} data={item} />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Notify;