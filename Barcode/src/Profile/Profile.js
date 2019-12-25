import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView
} from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import {CurrentUser} from '../Login/Login'
import {changeEmail,changePassword} from '../CRUD/CRUD';

export default class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:null,
      currentPass: null,
      newPass: null
    }
  }

  update = () =>{
    if()
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
                    Muhammad Laziem
                  </Text>

                  <View style={styles.textContainer}>
                  <Text style={styles.titleNew}>
                    YOUR NEW EMAIL
                  </Text>
                  <TextInput 
                  placeholder={CurrentUser} 
                  style={{borderBottomColor:'#bdc3c7', borderBottomWidth: 1, padding: 5}}
                  onChangeText={email=> this.setState({email:email})}>
            
                  </TextInput>
                  <Text style={styles.titleNew}>
                    YOUR CURRENT PASSWORD
                  </Text>
                  <TextInput
                  placeholder={'Password'}
                  style={{borderBottomColor:'#bdc3c7', borderBottomWidth: 1, padding: 5}}
                  secureTextEntry={true}
                  onChangeText={currPass=> this.setState({currentPass:currPass})}>
                  </TextInput>
                  <Text style={styles.titleNew}>
                    YOUR NEW PASSWORD
                  </Text>
                  <TextInput
                  placeholder={'Password'}
                  style={{borderBottomColor:'#bdc3c7', borderBottomWidth: 1, padding: 5}}
                  secureTextEntry={true}
                  onChangeText={newPass=> this.setState({newPass:newPass})}>
                    
                  </TextInput>
                  <View style={{alignItems:'center'}}>
                  <TouchableOpacity 
                  style={styles.button}
                  onPress={this.update}>
                    <Text style={{color:'white', fontWeight:'bold'}}>UPDATE</Text>
                  </TouchableOpacity>
                  </View>
                  </View>
                  <TouchableOpacity style={{alignItems: 'center', marginTop: 50}}
                   onPress={() => this.props.navigation.navigate('Login')}>
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
      width: '50%',
      borderRadius: 3
    },
    textContainer: {
      marginHorizontal: 70,
      marginTop: 15
    },
    titleNew: {
      marginTop: 20,
      color: '#bdc3c7',
      fontSize: 10
    }
  });