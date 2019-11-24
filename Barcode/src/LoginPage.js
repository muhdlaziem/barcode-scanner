import React, {Component} from 'react';
import { 
    Text,
    TextInput,
    Button,
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
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
          <Image
          style={{width: 100, height: 100, marginBottom: 20, alignItems: 'center'} }
          source={require('../images/user.png')} // '.' dlm folder src '..' luar folder
            />
          <View style = {styles.textfield}>
              <TextInput style = {styles.input}
                  placeholder = "username"
                  returnKeyType = "next"
                  onSubmitEditing = {() => this.passwordInput.focus()}
                  keyboardType = "email-address"
                  autoCapitalize = "none"
                  autoCorrect = {false}
              />
              <TextInput style = {styles.input}
                  placeholder = "password"
                  returnKeyType = "go"
                  secureTextEntry
                  ref = {(input) => this.passwordInput =input}
              />
              <TouchableOpacity style = {styles.buttoncontainer} onPress = {() => this.props.navigation.navigate('Home')} >
                  <Text style = {styles.buttontext}> Login </Text>
              </TouchableOpacity>
              <Text></Text>
              <Button 
                title = "Register Here"
                color = "#6f2da8"
                onPress = {() => this.props.navigation.navigate('Register')}
               /> 
               <Text style = {styles.text} onPress = {() => this.props.navigation.navigate('Main')}> Skip to Homepage</Text>
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
    padding : 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },

  input: {
    paddingLeft:20,
    alignItems: 'stretch',
    borderRadius:50,
    width: 350,
    height: 50,
    fontSize: 25,
    backgroundColor:'white',
    borderColor: '#6f2da8',
    borderWidth: 1,
    marginBottom: 20,
    color: '#34495e'
  },

  buttoncontainer: {
    height: 50,
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
    fontSize : 20,
    justifyContent: 'center',
    color: 'grey',
    marginLeft: 85,
    marginTop: 100,

  },
  
});