import React, {Component} from 'react';
import { 
    Text,
    TextInput,
    Button,
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    StatusBar,
} from "react-native";
import { 
    createAppContainer 
} from 'react-navigation';
import {
    createStackNavigator
} from 'react-navigation-stack';
import Homepage from './HomePage';
import RegisterPage from './RegisterPage';
import Mainpage from './MainPage';



export class LoginPage extends Component{

  render() {
    return(
      <View style = {styles.container}>
        <StatusBar
          backgroundColor = "white"
          barStyle = "dark-content"
        />
          <Image
          style={{width: 100, height: 100, marginBottom: 20, alignItems: 'center'} }
          source={require('../images/barcode.png')} // '.' dlm folder src '..' luar folder
            />
          <View >
              <Text style = {styles.text}>Barcode Scanner</Text>
              <TouchableOpacity style = {styles.buttoncontainer} onPress = {() => this.props.navigation.navigate('Main')} >
                  <Text style = {styles.buttontext}> Enter </Text>
              </TouchableOpacity> 
          </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator ({
    Login : LoginPage,
    Register : RegisterPage,
    Home : Homepage,
    Main : Mainpage,
});

export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({

  container: {
    marginTop: -90,
    padding : 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },


  buttoncontainer: {
    height: 50,
    width: 250,
    borderRadius: 50,
    backgroundColor: '#6f2da8',
    paddingVertical: 10,
    justifyContent: 'center',

  },

  buttontext: {
      textAlign: 'center',
      color: '#ecf0f1',
      fontSize: 20,
  },

  text: {
    fontSize : 30,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black',
    marginBottom: 45,
    marginTop: 20,

  },
  
});