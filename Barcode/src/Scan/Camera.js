// Faiz BurujExclusive, [01.12.19 20:29]
//This is an example code to Scan QR code//
import React, { Component } from 'react';
//import react in our code.
import {Text,
        View,
        Linking,
        TouchableOpacity,
        PermissionsAndroid,
        Platform,
        StyleSheet,
        Image,
        StatusBar,
        BackHandler} from 'react-native';
// import all basic components
import SplashScreen from 'react-native-splash-screen';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';
import {addLink} from '../CRUD/CRUD';
//import CameraKitCameraScreen we are going to use.

// import {CurrentUser} from '../Login/Login';
export default class App extends Component {
    componentDidMount(){
        SplashScreen.hide()
      }
    
    constructor(props) {
    super(props);
    this.state = {
      //variable to hold the qr value
      qrvalue: '',
      opneScanner: false,
      isLink: false
    };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
      this.props.navigation.goBack(null);
      this.setState({opneScanner:false,isLink:false})

      return true;
  }

  onOpenlink=()=> {
    if(this.state.qrvalue.includes('http')){
      Linking.openURL(this.state.qrvalue);
    }
    else if(this.state.qrvalue.includes('exp')){
      Linking.openURL(this.state.qrvalue);
    }
    else if(this.state.qrvalue.includes('www'))
      Linking.openURL('https://'+this.state.qrvalue);
  }
  onBarcodeScan(qrvalue) {
    //called after te successful scanning of QRCode/Barcode
    this.setState({ qrvalue: qrvalue });
    this.setState({ opneScanner: false });
    // this.setState({isLink: true});
    if(qrvalue.includes('http')){
    this.setState({isLink: true}, ()=>console.log(`isLink: ${this.state.isLink}`));
    }
    else if(qrvalue.includes('exp')){
      this.setState({isLink: true}, ()=>console.log(`isLink: ${this.state.isLink}`));
    }
    else if(qrvalue.includes('www'))
      this.setState({isLink: true}, ()=>console.log(`isLink: ${this.state.isLink}`));
    else{
      this.setState({isLink: false}, ()=>console.log(`isLink: ${this.state.isLink}`));

    }
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
        <View style={styles.screen}>
          <StatusBar backgroundColor="#239b56" barStyle="light-content"/>
          <View style={styles.title}>
                  <Text style={{color:'white', fontWeight: 'bold'}}>Scan Code</Text>
                </View>
          <View style={styles.container}>
            <Image source={require('./images/barcode.png')}
            style={{width: 150, height: 150}}/>

            <Text style={styles.simpleText}>{this.state.qrvalue ? 'Result: '+this.state.qrvalue : ''}</Text>
            
            <View style={{flexDirection: "row"}}>
            { 
            this.state.isLink ?

              <TouchableOpacity
                onPress={() => this.onOpenlink()}
                style={styles.button}>
                  <Text style={{ color: '#FFFFFF', fontSize: 12 }}>Open Link</Text>
              </TouchableOpacity>
              : null
            }
            
            {this.state.qrvalue ?

            <TouchableOpacity
            onPress={() => addLink(this.state.qrvalue)}
            style={styles.button2}>
              <Text style={{ color: '#FFFFFF', fontSize: 12}}>Save</Text>
            </TouchableOpacity>
              : null
            }
              </View>
              <TouchableOpacity
              onPress={() => this.onOpneScanner()}
              style={styles.button3}>
                <Text style={{ color: '#FFFFFF', fontSize: 14 ,fontWeight: 'bold'}}>
                OPEN QR SCANNER
                </Text>
            </TouchableOpacity>
            </View></View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <CameraKitCameraScreen
          actions={{leftButtonText: 'Cancel' }}
          cameraOptions={{
            flashMode: 'auto',             // on/off/auto(default)
            focusMode: 'on',               // off/on(default)
            zoomMode: 'on',                // off/on(default)
            ratioOverlay:'1:1',            // optional, ratio overlay on the camera and crop the image seamlessly
            ratioOverlayColor: '#00000077' // optional
          }}
          onBottomButtonPressed={(event) => this.setState({opneScanner:event.captureRetakeMode,isLink:false})}
          showFrame={true}
          //Show/hide scan frame
          scanBarcode={true}
          //Can restrict for the QR Code only
          laserColor={'red'}
          //Color can be of your choice
          frameColor={'green'}
          //If frame is visible then frame color
          colorForScannerFrame={'black'}
          //Scanner Frame color
          onReadCode={event =>
            this.onBarcodeScan(event.nativeEvent.codeStringValue)
          }
          
        />
        {/* <TouchableOpacity onPress={this.setState({opneScanner:false})}><Text>X</Text></TouchableOpacity> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
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
    width: '100%'
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
    backgroundColor: '#239b56',
    padding: 10,
    marginHorizontal: 3,
    marginTop:16,
    width: 100,
    borderRadius: 3,
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#239b56',
    padding: 10,
    marginHorizontal: 3,
    marginTop:16,
    width: 100,
    borderRadius: 3,
  },
  button3: {
    alignItems: 'center',
    backgroundColor: '#239b56',
    padding: 10,
    width:200,
    marginTop:16,
    borderRadius: 3,
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