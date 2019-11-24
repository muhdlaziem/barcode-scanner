import React, {Component} from 'react';
import { Text,TextInput,Button,View,TouchableOpacity,StyleSheet,Image,StatusBar,} from "react-native";
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator,NavigationBottomTabOptions,} from 'react-navigation-tabs';
import tabBarIcon from './shared/tabBarIcon'

class HomeScreen extends Component {
  render() {
    return (
      <View style = {styles.container}>
      <StatusBar
            backgroundColor = "white"
            barStyle = "dark-content"
          />
      <Text></Text>
          <Text style={styles.titleText} >Barcode Scanner</Text>
    </View>
    );
  }
}

class SearchScreen extends Component {
  render() {
    return (
    <View style = {styles.container}>
      <Text style={styles.titleText}>Search</Text>
    </View>
    );
  }
}

class SettingsScreen extends Component {
  render() {
    return (
    <View style = {styles.container}>
      <Text style={styles.titleText}>Setting</Text>
    </View>
    );
  }
}



const BottomTab = createBottomTabNavigator(
  {
    Home:{
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: tabBarIcon('home'),
      }
    },
    Search:{
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: tabBarIcon('search'),
      }
    },
    Settings:{
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: tabBarIcon('more-vert'),
      }
    },
 
  },

  {
    shifting: false,
    //labeled: false,
    activeColor: '#6200ee',
    inactiveColor: '#828792',
    barStyle: {
      backgroundColor: '#f8f7f9',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderStyle: 'solid',
      borderColor: '#d0cfd0',
    },
  }
);

export default createAppContainer (BottomTab);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    
    
  },

  titleText: {
    fontSize: 30,
  }
  
});