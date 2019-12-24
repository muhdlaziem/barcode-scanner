import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Linking,
    Alert,Button
} from "react-native";
import SplashScreen from 'react-native-splash-screen';
import {app} from '../CRUD/fbconfig';
import {deleteLink} from '../CRUD/CRUD'
import { Colors } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import {ListItem} from 'react-native-elements';

export default class view extends Component {
    constructor(props){
        super(props);
        this.state = {
            content:[],
            isModalVisible:false
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
    onOpenlink(link){

      if(link.includes('http')){
        Linking.openURL(link);
      }
      else if(link.includes('exp')){
        Linking.openURL(link);
      }
      else if(link.includes('www'))
        Linking.openURL('https://'+link);
    }
    

    deleteConfirmation = (id) => {
      Alert.alert(
        'Status', 
        'Are you sure you want to delete this student?',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => deleteLink(id)}
        ],
        { cancelable: false }
        );
    }
    render() {
        return(
            
            <View>
              <StatusBar backgroundColor="#239b56" barStyle="light-content"/>
              <ScrollView>
                <View style={styles.title}>
                  <Text style={{color:'white', fontWeight: 'bold'}}>Barcode History</Text>
                </View>
                {this.state.content.map((y,index)=>{
                  // this.setState({Link: y.Link})
                  return(
                    <ListItem
                    key={index}
                    title={y.Link}
                    onPress = {()=>this.onOpenlink(y.Link)}
                    onLongPress={() => {this.deleteConfirmation(y.key)}}
                    bottomDivider/>
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
        borderBottomColor: '#bdc3c7',
        // backgroundColor: '#2ecc71',
        // marginTop: 10,
        // marginHorizontal: 50
    },
    listItem2: {
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center'
      // backgroundColor: '#2ecc71',
      // marginTop: 10,
      // marginHorizontal: 50
  }
  });