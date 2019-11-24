import React, {Component} from 'react';
import { 
    Text,
    TextInput,
    Button,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from "react-native";


export default class HomePage extends Component{

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
        return(
          <View  style={styles.container} >
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      
      
    },
  
    titleText: {
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold',
    },
  
    input: {
      fontSize : 22,
      color: 'black',
      
    },
  
    inputButton: {
      fontSize : 22,
      color: 'black',
      
    },
  
    Textinput: {
      borderWidth :1,
      fontSize : 22,
      color: 'black',
      margin : 20 ,
      width: 250,
    },
  
    Button: {
      color: 'red', 
    }
    
  });