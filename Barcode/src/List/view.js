import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar
} from "react-native";
import SplashScreen from 'react-native-splash-screen';
import {app} from '../fbconfig';
import { Colors } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

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
              <StatusBar backgroundColor="#239b56" barStyle="light-content"/>
              <ScrollView>
                <View style={styles.title}>
                  <Text style={{color:'white', fontWeight: 'bold'}}>Barcode List</Text>
                </View>
                {this.state.content.map((y)=>{
                return(
                <TouchableOpacity>
                    <View style={styles.listItem}>
                      <Text style={{color:'black'}}>{y.Link}</Text>
                    </View>
                </TouchableOpacity>
                  );
                })}
              </ScrollView>
           </View>
           
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ebebeb'
    },
    title: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#239b56',
    },
    listItem: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#239b56',
        // backgroundColor: '#2ecc71',
        // marginTop: 10,
        // marginHorizontal: 50
    }
  });