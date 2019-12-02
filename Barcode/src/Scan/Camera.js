// Faiz BurujExclusive, [01.12.19 20:29]
//This is an example code to Scan QR code//
import React, { Component } from 'react';
//import react in our code.
import { Text, View, Linking, TouchableOpacity, PermissionsAndroid, Platform, StyleSheet, Image} from 'react-native';
// import all basic components
import SplashScreen from 'react-native-splash-screen';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';
import {app} from '../fbconfig';
//import CameraKitCameraScreen we are going to use.
export default class App extends Component {
    componentDidMount(){
        SplashScreen.hide()
      }
    
    constructor() {
    super();
    this.state = {
      //variable to hold the qr value
      qrvalue: '',
      opneScanner: false,
    };
  }

  addItem =(qrvalue) => {
    let newPostKey = app.database().ref().child('item').push().key;
    let updates = {};
    updates['/item/' + newPostKey] = {Link:qrvalue}
    app.database().ref().update(updates);
    // console.ignoredYellowBox = ['Setting a timer'];
    // db.ref('/items').push({
    //     desc : item
    // });
}

  onOpenlink() {
    //Function to open URL, If scanned 
    Linking.openURL(this.state.qrvalue);
    //Linking used to open the URL in any browser that you have installed
  }
  onBarcodeScan(qrvalue) {
    //called after te successful scanning of QRCode/Barcode
    this.setState({ qrvalue: qrvalue });
    this.setState({ opneScanner: false });
  }
  onOpneScanner() {
    var that =this;
    //To Start Scanning
    if(Platform.OS === 'android'){
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,{
              'title': 'CameraExample App Camera Permission',
              'message': 'CameraExample App needs access to your camera '
            }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //If CAMERA Permission is granted
            that.setState({ qrvalue: '' });
            that.setState({ opneScanner: true });
          } else {
            alert("CAMERA permission denied");
          }
        } catch (err) {
          alert("Camera permission err",err);
          console.warn(err);
        }
      }
      //Calling the camera permission function
      requestCameraPermission();
    }else{
      that.setState({ qrvalue: '' });
      that.setState({ opneScanner: true });
    }    
  }
  render() {
    let displayModal;
    //If qrvalue is set then return this view
    if (!this.state.opneScanner) {
      return (
        <View style={styles.container}>
            <Image source={require('./images/barcode.png')}
            style={{width: 150, height: 150}}/>

            <Text style={styles.simpleText}>{this.state.qrvalue ? 'Result: '+this.state.qrvalue : ''}</Text>
            
            <View style={{flexDirection: "row"}}>
            {this.state.qrvalue.includes("http") ?

              <TouchableOpacity
                onPress={() => this.onOpenlink()}
                style={styles.button}>
                  <Text style={{ color: '#FFFFFF', fontSize: 12 }}>Open Link</Text>
              </TouchableOpacity>
              : null
            }
            
            {this.state.qrvalue ?

            <TouchableOpacity
            onPress={() => this.addItem(this.state.qrvalue)}
            style={styles.button2}>
              <Text style={{ color: '#FFFFFF', fontSize: 12}}>Save</Text>
            </TouchableOpacity>
              : null
            }
              </View>
              <TouchableOpacity
              onPress={() => this.onOpneScanner()}
              style={styles.button3}>
                <Text style={{ color: '#FFFFFF', fontSize: 12 }}>
                Open QR Scanner
                </Text>
            </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <CameraKitCameraScreen
          showFrame={false}
          //Show/hide scan frame
          scanBarcode={true}
          //Can restrict for the QR Code only
          laserColor={'blue'}
          //Color can be of your choice
          frameColor={'yellow'}
          //If frame is visible then frame color
          colorForScannerFrame={'black'}
          //Scanner Frame color
          onReadCode={event =>
            this.onBarcodeScan(event.nativeEvent.codeStringValue)
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },
  webContainer: {
    width: '100%',
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2ecc71',
    padding: 10,
    marginHorizontal: 3,
    marginTop:16,
    width: 100,
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#2ecc71',
    padding: 10,
    marginHorizontal: 3,
    marginTop:16,
    width: 100,
  },
  button3: {
    alignItems: 'center',
    backgroundColor: '#2ecc71',
    padding: 10,
    width:200,
    marginTop:16
  },
  heading: { 
    color: 'black', 
    fontSize: 24, 
    alignSelf: 'center', 
    padding: 10, 
    marginTop: 30 
  },
  simpleText: { 
    color: 'black', 
    fontSize: 20, 
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10, 
    marginTop: 16
  }
});