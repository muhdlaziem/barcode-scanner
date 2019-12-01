import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
} from "react-native";

import SplashScreen from 'react-native-splash-screen';

import {app} from '../fbconfig';


export default class view extends Component {
    constructor(props){
        super(props);
        this.state = {
            content:[]
        }
    }
    componentDidMount(){
        SplashScreen.hide()
        app.database().ref('item/').on('value', snapshot => {
            console.log(snapshot.val())
            let data = [];
            snapshot.forEach(child =>{
              data.push({
                Link: child.val().Link,
                key: child.key
              });
            });
            this.setState({
              content:data
            })
            // console.log(snapshot.val())
            // // let data = snapshot.val()
            // console.log(`Data: ${snapshot.val().key.Link}`)
            console.log((this.state.content))
            
        });
    }
    render() {
        return(
            <View>
                {this.state.content.map((y)=>{
                return(<Text>{y.Link}</Text>);
                })}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ebebeb'
    }
  });