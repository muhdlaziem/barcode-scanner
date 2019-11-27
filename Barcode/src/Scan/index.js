import React, {Component} from 'react';
import { View,Text,StyleSheet,StatusBar,} from "react-native";

export default class ScannerTab extends Component{
      
    render() {
      return(
        <View  style={styles.container} >
        <StatusBar backgroundColor = "#FFFFFF" barStyle = "dark-content"/>
          <Text style={styles.titleText} >QR Scanner</Text>
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
  