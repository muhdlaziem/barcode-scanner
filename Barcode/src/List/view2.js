import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Linking,
    Alert,Image
} from "react-native";
import SplashScreen from 'react-native-splash-screen';
import {app} from '../CRUD/fbconfig';
import {deleteLink} from '../CRUD/CRUD'
import { Colors } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import {ListItem,Icon} from 'react-native-elements';
import * as firebase from "firebase";
import {CurrentUser} from '../Login/Login'
import Clipboard from "@react-native-community/react-native-clipboard";


export default class view extends Component {
    constructor(props){
        super(props);
        this.state = {
            content:[],
            clipboardContent:null
        }
    }
    componentDidMount(){
        SplashScreen.hide()
        if(firebase.auth().currentUser){
          app.database().ref('item/').on('value', snapshot => {
            console.log(snapshot.val())
            let data = [];
            snapshot.forEach(child =>{
              if(child.val().User===firebase.auth().currentUser.email){
                data.push({
                  Link: child.val().Link,
                  key: child.key,
                  User: child.val().User
                });
              }
             
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
        
    }
    writeToClipboard = async () => {
      Clipboard.setString(this.state.clipboardContent)
         alert('Copied to clipboard')
    }
    setClipContent = (id)=>{
      this.setState({clipboardContent:id},this.writeToClipboard)
      
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
      if(!firebase.auth().currentUser){
        return(
            
            <View style={styles.screen}>
              <StatusBar backgroundColor="#239b56" barStyle="light-content"/>
                <View style={styles.title}>
                  <Text style={{color:'white', fontWeight: 'bold'}}>Barcode History</Text>
                </View>
                <View style={styles.container}> 
                <Text style={{ fontSize: 22, color:'#bdc3c7',}}>Login to Save History</Text>
                </View>
           </View>
           
        )
    }
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
              rightTitle={<TouchableOpacity
                onPress={()=>{this.setClipContent(y.Link)}}>
                  <Image source={require('./images/copypaste.png')}
                style={{width: 40, height: 40}}/>
                </TouchableOpacity>}
              bottomDivider
              >
                <Icon ></Icon>
              </ListItem>
            );
          })}
        </ScrollView>
     </View>
     
  )
    }
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'white'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    title: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#239b56',
    },
    button2: {
      alignItems: 'center',
      backgroundColor: '#239b56',
      padding: 10,
      marginHorizontal: 3,
      marginTop:16,
      width: 100,
      borderRadius: 3,
    }
  });