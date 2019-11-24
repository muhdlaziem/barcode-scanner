import React, {Component} from 'react';
import { Text,TextInput,Button,View,TouchableOpacity,StyleSheet,Image,StatusBar,Alert} from "react-native";
import { createAppContainer } from 'react-navigation';
import {createMaterialBottomTabNavigator,} from 'react-navigation-material-bottom-tabs';
import tabBarIcon from './shared/tabBarIcon'
import SplashScreen from 'react-native-splash-screen';

class HomeScreen extends Component {

  componentDidMount() {
    SplashScreen.hide()
  }

  constructor(){
    super();
    this.state = {
    weight: 0,
    height: 0,
    bmi: 0 }
  }

  calculateBMI = () => {
    this.setState({bmi: Number ((this.state.weight/Math.pow(this.state.height,2)) * 10000).toFixed(1)},
        () => {
          if(this.state.bmi < 18.5) {
            Alert.alert('Kering sangat ui');
          }
          else if(this.state.bmi >= 18.5 && this.state.bmi <= 24.9) {
            Alert.alert('Normal but not for long Haha');
          }
          else if(this.state.bmi >= 25 && this.state.bmi <= 29.9) {
            Alert.alert('Gemuk haha!');
          }
          else if(this.state.bmi >= 30) {
            Alert.alert('Go exercise lah!');
          }
        });
      }

  render() {
    return (
      <View style = {styles.container}>
      <StatusBar
            backgroundColor = "white"
            barStyle = "dark-content"
          />
      <Text></Text>
      <Image
          style={{width: 100, height: 100, marginBottom: 20} }
          source={require('../images/bmi.png')} // '.' dlm folder src '..' luar folder
        />
        <Text style={styles.titleText} >BMI Calculator</Text>
        <TextInput onChangeText={(weight) => this.setState({weight})} placeholder='Weight in KG 'style={styles.Textinput}/>
        <TextInput onChangeText={(height) => this.setState({height})} placeholder='Weight in cm 'style={styles.Textinput}/>
        <Button color="#3F51B5" onPress={this.calculateBMI} title='calculate'/>
        <Text></Text>
        <Text style={styles.input}>BMI : {this.state.bmi}</Text>
    </View>
    );
  }
}

class HistoryScreen extends Component {
  render() {
    return (
    <View style = {styles.container}>
      <Text style={styles.titleText}>History List</Text>
    </View>
    );
  }
}



const BottomTabMaterial = createMaterialBottomTabNavigator(
  {
    Home:{
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: tabBarIcon('search'),
      }
    },
    History:{
      screen: HistoryScreen,
      navigationOptions: {
        tabBarIcon: tabBarIcon('list'),
      }
    },

 
  },

  {
    shifting: false,
    labeled: false,
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

export default createAppContainer (BottomTabMaterial);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    
    
  },

  titleText: {
    fontSize: 30,
  },
  
  Textinput: {
    borderWidth :1,
    fontSize : 22,
    color: 'black',
    margin : 20 ,
    width: 250,
  },
});

