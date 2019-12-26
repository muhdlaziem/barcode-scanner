import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Image, TouchableOpacity, Alert} from 'react-native';
import * as firebase from "firebase";
import CustomAlert from './Component/CustomAlert';

import {app} from '../CRUD/fbconfig';

export default class SignUp extends Component {
    
    //Change Header 
    

    constructor(props) {
      super(props);
      this.onPressAlertPositiveButton = this.onPressAlertPositiveButton.bind(this);
      this.onPressAlertNegativeButton = this.onPressAlertNegativeButton.bind(this);
      this.onPressExistingUserButton = this.onPressExistingUserButton.bind(this);

      this.state = {
        email: "",
        password: "",
        condSucc: false, // Alert for Success
        condInval: false, //Alert for invalid
        condInvalExist: false, //Alert for invalid
        status: true, //status either error or successful sign up
        error:null,
        hide: true
      };
    }

    onInputLabelPressed = () => {
      this.setState({ hide: !this.state.hide });
    };
 
    onPressAlertPositiveButton = () => {
      this.setState({condSucc: false ,},
      
        );
        }
    onPressAlertNegativeButton = () => {
      this.setState({condInval: false ,}
          
        );
        }
    onPressExistingUserButton = () => {
      this.setState({condInvalExist: false ,}
              
        );
        }
  
    onPressOkButton = () => {
      this.props.navigation.navigate('Login')
        }

    SignUp = () =>{
    try {
       if(this.state.email && this.state.password){
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(user => { 
                   console.log(user);
                   addEmail(this.state.email);
                   this.setState({condSucc: true},); //Successfully sign up
             })
            .catch(error => {
             //Alert.alert('Status',error.toString(error)); //Checking if username already existed
             console.log(error)
             this.setState({condInvalExist: true, error:error.message},);
            });
       } else {
          this.setState({condInval: true},); //Invalid username and password
         }
        } catch (error) {
          Alert.alert({ errorMessage: error.message });
        }
        
    };


  render(){
    return(
      <View style={styles.screen}>
      
      <Image source={require('./images/signup.png')}
             style={{width: 100, height: 100, margin: 25}} />
      <Text style={styles.textTitle}>Sign Up </Text>
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
      <TouchableOpacity onPress={this.SignUp}
       style={{backgroundColor:'#239b56', padding:10, alignItems: 'center',borderRadius:3}}
       >
         <Text style={{color:'white', fontWeight: 'bold',}}>SIGN UP</Text>
       </TouchableOpacity>
      </View>
      
      {/* sucessfuly sign up username or password */}
      <CustomAlert
          displayAlert={this.state.condSucc}
          //displayAlertIcon={true} //untuk show icon
          alertTitleText={' '}
          alertMessageText={'Successfully Sign Up'}
          displayPositiveButton={true}
          positiveButtonText={'OK'}
          onPressPositiveButton={this.onPressAlertPositiveButton, this.onPressOkButton}
        />

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

        {/* If user key in existing username or password */}
        <CustomAlert
          displayAlert={this.state.condInvalExist}
          //displayAlertIcon={true} //untuk show icon
          alertTitleText={' '}
          alertMessageText={this.state.error}
          displayPositiveButton={true}
          positiveButtonText={'OK'}
          onPressPositiveButton={this.onPressExistingUserButton}
        />


      <TouchableOpacity style={styles.TouchAble} onPress={() => this.props.navigation.goBack()} >
        <Text style={styles.textGuest}>Back to Login </Text>
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