import React, {Component} from 'react';
import { 
    Text,
    TextInput,
    Button,
    View,
    TouchableOpacity,
    StyleSheet,
} from "react-native";


export default class RegisterPage extends Component{
    render () {
        return(
            <View style = {styles.container}>
                <View style = {styles.registerform}>
                <TextInput style = {styles.input}
                  placeholder = "Enter Username"
                  returnKeyType = "next"
                  onSubmitEditing = {() => this.emailinput.focus()}
                />
                <TextInput style = {styles.input}
                  placeholder = "Enter your email"
                  returnKeyType = "next"
                  onSubmitEditing = {() => this.passwordInput.focus()}
                  keyboardType = "email-address"
                  autoCapitalize = "none"
                  autoCorrect = {false}
                  ref = {(input) => this.emailinput =input}
                />
              <TextInput style = {styles.input}
                  placeholder = "Enter Password"
                  returnKeyType = "go"
                  secureTextEntry
                  ref = {(input) => this.passwordInput =input}
                />
              <TouchableOpacity style = {styles.buttoncontainer} onPress = {() => this.props.navigation.navigate('Login')}>
                  <Text style = {styles.buttontext}> Sign Up </Text>
              </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
      padding : 20,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
      backgroundColor: '#ecf0f1',
    },
  
    input: {
      paddingLeft:20,
      borderRadius:50,
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
    }
    
  });