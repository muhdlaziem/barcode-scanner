import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Image, StatusBar,TouchableOpacity,Alert} from 'react-native';
import * as firebase from "firebase";
import CustomAlert from './Component/CustomAlert';
import SplashScreen from 'react-native-splash-screen';

import {app} from '../CRUD/fbconfig'
export let CurrentUser = null;
export default class App extends Component {

  //Change Header 
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    SplashScreen.hide()
  }

  constructor(props) {
    super(props);
    this.onPressAlertNegativeButton = this.onPressAlertNegativeButton.bind(this);
    this.state = {
      email: null,
      password: null,
      condInval: false, //Alert for invalid
      status: true, //status either error or successful sign up
    };
  }
  

  onPressAlertNegativeButton = () => {
    this.setState({condInval: false ,},
      );
      }
  
  Login = () => {
    console.log(this.state.email,this.state.password)
  try {
    if(this.state.email && this.state.password){
    firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
        this.props.navigation.navigate('Home'); //Successfully Login
        CurrentUser = firebase.auth().currentUser.email
        console.log(firebase.auth().currentUser.email);
        })
        .catch(error => {
          this.setState({condInval: true},);
        });
    } else {
      this.setState({condInval: true},);
    }
    } catch (error) {
      console.log(error.toString(error));
  }
};



  render(){

    return(
      <View style={styles.screen}>
      <StatusBar backgroundColor = "white" barStyle = "dark-content"/>
      <Image source={require('./images/boy.png')}
             style={{width: 100, height: 100, margin: 25}} />
      <Text style={styles.textTitle}>Login</Text>
      <View style = {styles.inputContainer}>
      <TextInput
        placeholder='Email'
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={email => this.setState({ email })}
      />

      <TextInput
        placeholder='Password'
        style={styles.input}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={password => this.setState({ password })}
      />
      </View>

      <View style = {styles.buttonContainer}>
        {/*
        <Button color="#65a171"
       onPress={() => this.Login(this.state.email, this.state.password)}
       title='LOG IN'/>
        
        */}
       <Button color="#239b56"
       onPress={this.Login}
       title='LOG IN'/>
      </View>


        {/* If user key in wrong username or password */}
        <CustomAlert
          displayAlert={this.state.condInval}
          //displayAlertIcon={true} //untuk show icon
          alertTitleText={' '}
          alertMessageText={'Invalid Username or Password'}
          displayPositiveButton={true}
          positiveButtonText={'OK'}
          onPressPositiveButton={this.onPressAlertNegativeButton}
        />

      <TouchableOpacity style={styles.TouchAble} onPress={() => this.props.navigation.navigate('SignUp')} >
        <Text style={styles.textGuest}> Sign Up Here </Text>
      </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
      marginTop: 10,
      marginBottom: 10
  },
  buttonContainer: {
      margin: 3,
      width: 250
  },
  input: {
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 6,
      padding: 10,
      margin: 3,
      width: 250
  },
  textTitle: {
    margin: 5,
    color: "#404040",
    fontSize: 22,
  },
  textGuest: {
      marginTop: 20,
      color: "lightgrey",
      fontSize: 16,
  },
  TouchAble:{
    width :"50%",
    height:"8%",
    justifyContent: 'center',
    alignItems: 'center',
  }
});