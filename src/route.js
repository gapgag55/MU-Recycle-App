import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo';
import { theme } from '../app.json';
import language from './language';

import Map from './containers/map.js';
import Notify from './containers/notify.js';

import Bin from './containers/bin.js';
import ReceiveTrash from './containers/receiveTrash.js';
import ReceiveSuccess from './containers/receiveSuccess.js';

import News from './containers/news.js';
import Account from './containers/account.js';
import Transfer from './containers/transfer.js';
import TransferInput from './containers/transferInput.js';
import TransferSuccess from './containers/transferSuccess.js';

import AuthLoading from './containers/authLoading';
import Login from './containers/login.js';
import Register from './containers/register.js';

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Register: {
    screen: Register,
    navigationOptions: () => ({
      header: null,
    }),
  },
}, {
  initialRouteName: 'Login',
});

const MapStack = createStackNavigator({
  Map,
  Transfer,
  TransferInput,
  TransferSuccess,
}, {
  initialRouteName: 'Map',
  headerMode: 'none',
});

const BinStack = createStackNavigator({
  Bin: {
    screen: Bin,
    navigationOptions: () => ({
      tabBarLabel: () => { },
    })
  },
  ReceiveTrash: {
    screen: ReceiveTrash,
    navigationOptions: () => ({
      tabBarLabel: () => { },
    })
  },
  ReceiveSuccess: {
    screen: ReceiveSuccess,
    navigationOptions: () => ({
      tabBarLabel: () => { },
    })
  },
}, {
  initialRouteName: 'ReceiveTrash',
  headerMode: 'none',
});

const TabNavigator = createBottomTabNavigator({
  [language["menu.map"]]: MapStack,
  [language["menu.news"]]: News,
  Bin: {
    screen: BinStack,
    navigationOptions: () => ({
      tabBarLabel: () => { },
    })
  },
  [language["menu.notify"]]: Notify,
  [language["menu.account"]]: Account,
}, {
    initialRouteName: 'Bin',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === language["menu.map"]) {
          iconName = "map";
        } else if (routeName === language["menu.news"]) {
          iconName = "globe";
        } else if (routeName === 'Bin') {
          return <Image
            source={require('../assets/scan.png')}
            style={{ width: '80%', height: '100%', borderRadius: 3, marginBottom: 10 }}
          />
        } else if (routeName === language["menu.notify"]) {
          iconName = "bell";
        } else if (routeName === language["menu.account"]) {
          iconName = "user"
        }

        return <Icon name={iconName} size={25} color={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: theme.primaryColor,
      inactiveTintColor: theme.secondColor,
      animationEnabled: true,
      labelStyle: {
        fontSize: 12,
        fontFamily: 'Prompt-regular',
      },
      style: {
        height: 50,
        marginTop: 10,
        borderTopColor: 'transparent',
      }
    }
  }
);


export default createAppContainer(createSwitchNavigator({
  AuthLoading,
  AuthStack,
  TabNavigator
}, {
  initialRouteName: 'TabNavigator'
}));