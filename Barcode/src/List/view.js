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
import {app} from '../fbconfig';
import { Colors } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import Modal from 'react-native-modal'

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
      //Function to open URL, If scanned 
      Linking.openURL(link);
      //Linking used to open the URL in any browser that you have installed
    }
    
    toggleModal =()=> {
      this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    render() {
        return(
            
            <View>
              <StatusBar backgroundColor="#239b56" barStyle="light-content"/>
              <ScrollView>
                <View style={styles.title}>
                  <Text style={{color:'white', fontWeight: 'bold'}}>Barcode History</Text>
                </View>
                {this.state.content.map((y)=>{
                  // this.setState({Link: y.Link})
                return(
                 
                  <TouchableOpacity
                    onPress={y.Link.includes("http")? ()=>this.onOpenlink(y.Link):null}
                    onLongPress={this.toggleModal}
                    
                  >
                    <Modal isVisible={this.state.isModalVisible} backdropColor='white'>
                      <View style={styles.listItem2}>
                        <Text></Text>
                        <Text style={{marginBottom: 30}}>Delete feature still in progress</Text>
                        <Button title="Close" onPress={this.toggleModal} />
                      </View>
                    </Modal>
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