import React, {Component} from 'react';
import { View,Text,StyleSheet,StatusBar,} from "react-native";
import SplashScreen from 'react-native-splash-screen';


export default class GeneratorTab extends Component{
    componentDidMount(){
      SplashScreen.hide()
    }
    render() {
      return(
        <View  style={styles.container} >
        <StatusBar backgroundColor = "#FFFFFF" barStyle = "dark-content"/>
          <Text style={styles.titleText} >QR Generator</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      
      
    },
  
    titleText: {
      color: 'black',
      fontSize: 22,
    },
  

    
  });
  