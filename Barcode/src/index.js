import React, {Component} from 'react';
import { Text,TextInput,Button,View,TouchableOpacity,StyleSheet,Image,StatusBar} from "react-native";
import { createAppContainer } from 'react-navigation';
import {createMaterialBottomTabNavigator,} from 'react-navigation-material-bottom-tabs';
import tabBarIcon from './shared/tabBarIcon';

import ListTab from './List';
import GeneratorTab from './QRGenerator';
import ScannerTab from './Scan';


const BottomTabMaterial = createMaterialBottomTabNavigator(
  {
    List:{
      screen: ListTab,
      navigationOptions: {
        tabBarIcon: tabBarIcon('list'),
      }
    },
    Scanner:{
      screen: ScannerTab,
      navigationOptions: {
        tabBarIcon: tabBarIcon('search'),
      }
    },
    Generator:{
      screen: GeneratorTab,
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

