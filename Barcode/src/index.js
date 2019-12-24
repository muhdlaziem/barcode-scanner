import React, {Component} from 'react';
import { Text,TextInput,Button,View,TouchableOpacity,StyleSheet,Image,StatusBar} from "react-native";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator,} from 'react-navigation-material-bottom-tabs';
import tabBarIcon from './shared/tabBarIcon';

import view from './List/view';
import view2 from './List/view2';
import qrcodegenerator from './QRGenerator/qrcodegenerator';
import Camera from './Scan/Camera'
import LoginScreen from './Login/Login';
import SignUpScreen from './Login/SignUp';


const BottomTabMaterial = createMaterialBottomTabNavigator(
  {
    History:{
      screen: view2,
      navigationOptions: {
        tabBarIcon: tabBarIcon('list'),
      }
    },
    Scanner:{
      screen: Camera,
      navigationOptions: {
        tabBarIcon: tabBarIcon('search'),
      }
    },
    Generator:{
      screen: qrcodegenerator,
      navigationOptions: {
        tabBarIcon: tabBarIcon('qrcode'),
      }
    },
 
  },

  {
    shifting: false,
    initialRouteName: 'Scanner',
    //labeled: false,
    activeColor: '#83CF8E',
    inactiveColor: '#828792',
    barStyle: {
      backgroundColor: '#f8f7f9',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderStyle: 'solid',
      borderColor: '#d0cfd0',
    },
  }
);

const MainStack = createStackNavigator({

  Login : LoginScreen,
  SignUp : SignUpScreen,
  
  },
  {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
}
  );

  export default createAppContainer(createSwitchNavigator(
    {
      
      Login: MainStack,
      Home: BottomTabMaterial,
    },
    {
      initialRouteName: 'Login',
    }
  ));

