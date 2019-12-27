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
      hide: true
    };
  }
  onInputLabelPressed = () => {
    this.setState({ hide: !this.state.hide });
  };

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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>

          <TextInput
            placeholder='Password'
            style={styles.input}
            secureTextEntry={this.state.hide}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={password => this.setState({ password })}
          />
          <TouchableOpacity onPress={this.onInputLabelPressed} style={{marginLeft:-40}}>
            <Text style={{textAlign:'right', fontSize:12, color: '#909497'}}>
              {this.state.hide ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style = {styles.buttonContainer}>
        {/*
        <Button color="#65a171"
       onPress={() => this.Login(this.state.email, this.state.password)}
       title='LOG IN'/>
        
        */}
       <TouchableOpacity onPress={this.Login}
       style={{backgroundColor:'#239b56', padding:10, alignItems: 'center',borderRadius:3,marginBottom: 5}}
       >
         <Text style={{color:'white', fontWeight: 'bold',}}>LOG IN</Text>
       </TouchableOpacity>

       <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}
       style={{backgroundColor:'#239b56', padding:10, alignItems: 'center',borderRadius:3,}}
       >
         <Text style={{color:'white', fontWeight: 'bold',}}>LOG IN AS GUEST</Text>
       </TouchableOpacity>
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
      {/* <TouchableOpacity style={styles.TouchAble}>
        <Text style={styles.textGuest}> Log in As Guest</Text>
      </TouchableOpacity> */}
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