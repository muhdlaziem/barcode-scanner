import React, {Component} from 'react';
import { Text,TextInput,Button,View,TouchableOpacity,StyleSheet,Image,StatusBar} from "react-native";
import { createAppContainer } from 'react-navigation';
import {createMaterialBottomTabNavigator,} from 'react-navigation-material-bottom-tabs';
import tabBarIcon from './shared/tabBarIcon';

import view from './List/view';
import qrcodegenerator from './QRGenerator/qrcodegenerator';
import add from './Scan/add';
import Camera from './Scan/Camera'


const BottomTabMaterial = createMaterialBottomTabNavigator(
  {
    History:{
      screen: view,
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

export default createAppContainer (BottomTabMaterial);

