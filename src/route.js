import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo';
import { theme } from '../app.json';
import language from './language';

import Map from './containers/map.js';
import Notify from './containers/notify.js';
import Bin from './containers/bin.js';
import News from './containers/news.js';
import Account from './containers/account.js';
import Transfer from './containers/transfer.js';

import AuthLoading from './containers/authLoading';
import Login from './containers/login.js';
import Register from './containers/register.js';
import SuccessBin from './containers/successBin.js';

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
}, {
  mode: 'modal',
  headerMode: 'none',
});

const BinStack = createStackNavigator({
  Bin: {
    screen: Bin,
    navigationOptions: () => ({
      tabBarLabel: () => { },
      header: null
    })
  },
  SuccessBin: {
    screen: SuccessBin,
    navigationOptions: () => ({
      tabBarLabel: () => { },
    })
  },
}, {
  mode: 'modal',
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
    initialRouteName: language["menu.account"],
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
  initialRouteName: 'AuthLoading'
}));