import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Alert
} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import {CurrentUser} from '../Login/Login'
import {changePassword} from '../CRUD/CRUD';
import * as firebase from "firebase";


export default class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPass: null,
      newPass: null,
      hidden1: true,
      hidden2: true
    }
  }


  onInputLabelPressedCurr = () => {
    this.setState({ hidden1: !this.state.hidden1 });
  };
  onInputLabelPressedNew = () => {
    this.setState({ hidden2: !this.state.hidden2 });
  };

  update = () =>{
    console.log(firebase.auth().currentUser.email)
    
    if(this.state.currentPass){
      if(this.state.newPass){
        changePassword(this.state.currentPass,this.state.newPass);
      }
      else{
        Alert.alert(
          'Alert',
          'Nothing to update!',
          [
            {text:'OK',style:'cancel'}
          ]
        )
      }
    }
    else{
      Alert.alert(
        'Alert',
        'Require current password to update!',
        [
          {text:'OK',style:'cancel'}
        ]
      )
    }
  }

  SignOut = () => {
    firebase
        .auth()
        .signOut()
        .then(function() {
          console.log(firebase.auth().currentUser)
          console.log('Sign Out Success!');
         })
        .catch(function(error) {
          console.log(error)
          Alert.alert('Status', error.toString(error));
        });
  }
  
    render() {
        return(
            
            <View>
              <StatusBar backgroundColor="#239b56" barStyle="light-content"/>
              <ScrollView>
                <View style={styles.title}>
                  <Text style={{color:'white', fontWeight: 'bold'}}>User Profile</Text>
                </View>
                <View style={styles.screen}>
                  <View style={styles.container}>
                    <View style={styles.imageContainer}>
                    <Image source={require('./images/businessman.png')}
                   style={{width: 128, height: 128}}/>
                    </View>
                  </View>
                  <Text style={styles.name}>
                    {firebase.auth().currentUser.email}
                  </Text>

                  <View style={styles.textContainer}>
                  
                  <Text style={styles.titleNew}>
                    YOUR CURRENT PASSWORD
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TextInput
                  placeholder={'Password'}
                  style={{borderBottomColor:'#bdc3c7', borderBottomWidth: 1, padding: 5, width:'100%'}}
                  secureTextEntry={this.state.hidden1}
                  {...this.props}
                  onChangeText={currPass=> this.setState({currentPass:currPass})}>
                  </TextInput>
                  <TouchableOpacity onPress={this.onInputLabelPressedCurr} style={{marginLeft:-28}}>
                  <Text style={{textAlign:'right', fontSize:12, color: '#909497'}}>
                    {this.state.hidden1 ? 'Show' : 'Hide'}
                  </Text>
                  </TouchableOpacity>
                  </View>
                  <Text style={styles.titleNew}>
                    YOUR NEW PASSWORD
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TextInput
                  placeholder={'Password'}
                  style={{borderBottomColor:'#bdc3c7', borderBottomWidth: 1, padding: 5, width:'100%'}}
                  secureTextEntry={this.state.hidden2}
                  {...this.props}
                  onChangeText={newPass=> this.setState({newPass:newPass})}>
                  </TextInput>
                  <TouchableOpacity onPress={this.onInputLabelPressedNew} style={{marginLeft:-28}}>
                  <Text style={{textAlign:'right', fontSize:12, color: '#909497'}}>
                    {this.state.hidden2 ? 'Show' : 'Hide'}
                  </Text>
                  </TouchableOpacity>
                  </View>
                  
                  <View style={{alignItems:'center'}}>
                  <TouchableOpacity 
                  style={styles.button}
                  onPress={this.update}>
                    <Text style={{color:'white', fontWeight:'bold'}}>UPDATE</Text>
                  </TouchableOpacity>
                  </View>
                  </View>
                  <TouchableOpacity style={{alignItems: 'center', marginTop: 110}}
                    onPressIn ={this.SignOut}
                    onPress={()=> {this.props.navigation.navigate('Login')}}>
                    <Text style={{color:'#239b56', fontWeight:'bold', letterSpacing: 1}}>SIGN OUT</Text>
                  </TouchableOpacity>
                </View>
                </ScrollView>
           </View>
           
        )
    }
}


const styles = StyleSheet.create({
    screen: {
      justifyContent: 'center',
    },
    container: {
      alignItems: 'center',
      backgroundColor: '#239b56',
      height: 100,
      marginBottom: 70
    },
    imageContainer: {
      marginTop: 30
    },
    title: {
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#239b56',
    },
    name: {
      fontSize: 25,
      textAlign: 'center',
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 25,
      backgroundColor: '#239b56',
      padding: 7,
      width: '40%',
      borderRadius: 3
    },
    textContainer: {
      marginHorizontal: 60,
      marginTop: 25
    },
    titleNew: {
      marginTop: 20,
      color: '#bdc3c7',
      fontSize: 10
    }
  });