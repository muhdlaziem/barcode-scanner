import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Alert,
    Platform,
    PermissionsAndroid
} from "react-native";

import CustomAlert from '../Login/Component/CustomAlert';
import QRCode from 'react-native-qrcode-svg';
import fetch_blob from 'react-native-fetch-blob';
import RNFS from 'react-native-fs';
import { ThemeConsumer } from "react-native-elements";
class qrcodegenerator extends Component {
    svg;
    constructor(){
        super();
        this.state = {
            inputValue:'',
            valueForQRCode:null,
            Files:null,
            name :"MyQRCODE.png",
            granted:null,
            condNoUp:false, //Nothing to Update
            condSave:false, // Save QR Image
            filePath :null, // Path Directory
            perDenied: false, // Storage Permission
        }

    }
   
    SaveImage = () => {
        this.setState({condSave: false ,},
        
          );
          }
    NothingtoUpdate = () => {
        this.setState({condNoUp: false ,}
            
          );
          }
    PermisDenied = () => {
        this.setState({perDenied: false ,}
            
          );
          }

    contShareQR =()=>{
        if(!this.state.valueForQRCode && this.state.granted==='granted'){
            console.log('Nothing to Save');
            this.setState({condNoUp:true});
        }
        else{
            const fs = fetch_blob.fs
            const dirs = fs.dirs 
            // let name = "MyQRCODE.png"
            RNFS.readDir(dirs.DCIMDir)
            .then((result) => {
                let data = [];
                result.map(y=>{
                    data.push(y.name)
                })
                this.setState({Files:data})
                console.log(this.state.Files.includes(this.statename))
                let incr=0
                while(this.state.Files.includes(this.state.name)){
                    incr = incr+1;
                    this.setState({name:'MyQRCODE' + incr + '.png'})
                    // console.log(name)
                }
            })
            .then(()=>{
                let file_path = dirs.DCIMDir + '/'+this.state.name
                console.log(file_path)

                this.svg.toDataURL((data) => {
                    let shareImageBase64 = data
                    
                RNFS.writeFile(file_path, shareImageBase64, 'base64')
                .then(()=>{
                    this.setState({condSave:true})
                    this.setState({filePath:file_path})
                    console.log('Image Saved in Gallery')})
                    
                .catch((error) => {
                    alert(JSON.stringify(error));
                });
                });
            })
            .catch((err) => {
            console.log(err.message, err.code);
            });
            this.textInput.clear()
            this.setState({valueForQRCode:null})
        }
        
    }
    shareQR=() =>{
        
        let that=this;
        if(Platform.OS === 'android'){
            async function reqeustStoragePermission(){
                try{
                    const granted = await PermissionsAndroid.requestMultiple(
                        [PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
                        ]
                    )
                    
                    if (granted['android.permission.READ_EXTERNAL_STORAGE']===PermissionsAndroid.RESULTS.GRANTED) {
                        that.setState({granted:'granted'})
                        //If CAMERA Permission is granted
                        console.log(granted)
                        console.log(PermissionsAndroid.RESULTS.GRANTED)
                        that.contShareQR()
                    } else {
                        that.setState({perDenied:true})
                        console.log('Storage Permission Denied')
                    }
                }
                catch(err){
                    Alert.alert("Storage permssion err",err)
                    console.warn(err);
                }
            }
            reqeustStoragePermission();
            
        }
        else{
            that.contShareQR()

        }
    }

    render() {
        return (
            <View style={styles.screen}>
                 <StatusBar backgroundColor="#239b56" barStyle="light-content"/>
                 <View style={styles.title}>
                    <Text style={{color:'white', fontWeight: 'bold'}}>QR Code Generator</Text>
                 </View>
                 <View style={styles.MainContainer}>
                 <QRCode
                    
                    //QR code value
                    value={this.state.valueForQRCode ? this.state.valueForQRCode:'NA'}
                    //size of QR Code
                    size={250}
                    //Color of the QR Code (Optional)
                    color="black"
                    //Background Color of the QR Code (Optional)
                    backgroundColor="white"
                    //Logo of in the center of QR Code (Optional)
                    logo={{
                        uri:
                        'https://raw.githubusercontent.com/muhdlaziem/barcode-scanner/master/Barcode/images/icon.png',
                    }}
                    //Center Logo size  (Optional)
                    logoSize={60}
                    //Center Logo margin (Optional)
                    logoMargin={2}
                    //Center Logo radius (Optional)
                    logoBorderRadius={15}
                    //Center Logo background (Optional)
                    // logoBackgroundColor="yellow"
                    getRef={(c) =>{this.svg=c}}
                />
                <TextInput
                    // Input to get the value to set on QRCode
                    ref={input =>{this.textInput =input}}
                    style={styles.TextInputStyle}
                    onChangeText={text => this.setState({ valueForQRCode: text })}
                    underlineColorAndroid="transparent"
                    placeholder="Enter Your Website"
                />
                
                <TouchableOpacity
                    onPress={this.shareQR}
                    activeOpacity={0.7}
                    style={styles.button}>
                    <Text style={styles.TextStyle}>SAVE QR CODE</Text>
                </TouchableOpacity>
                </View>

                {/* Saved Images */}
                <CustomAlert
                    displayAlert={this.state.condSave}
                    //displayAlertIcon={true} //untuk show icon
                    alertTitleText={' '}
                    alertMessageText={'\t\t\t\t\t\t\t\tImage Saved in Gallery\n\n'+'Path:\t'+this.state.filePath + '\n'}
                    displayPositiveButton={true}
                    positiveButtonText={'OK'}
                    onPressPositiveButton={this.SaveImage}
                />

                {/* Nothing To Update */}
                <CustomAlert
                    displayAlert={this.state.condNoUp}
                    //displayAlertIcon={true} //untuk show icon
                    alertTitleText={' '}
                    alertMessageText={'Nothing to Update'}
                    displayPositiveButton={true}
                    positiveButtonText={'OK'}
                    onPressPositiveButton={this.NothingtoUpdate}
                />

                {/* Storage Permission Denied*/}
                <CustomAlert
                    displayAlert={this.state.perDenied}
                    //displayAlertIcon={true} //untuk show icon
                    alertTitleText={' '}
                    alertMessageText={'Storage Permission Denied'}
                    displayPositiveButton={true}
                    positiveButtonText={'OK'}
                    onPressPositiveButton={this.PermisDenied}
                />
                
            </View>
        );
    }
}
export default qrcodegenerator;

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 40,
      width: "100%"
    },
    MainContainer: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
        width: "70%"
      },
    title: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#239b56',
        width: '100%',
        marginTop: -40
    },
    TextInputStyle: {
        width: '100%',
        height: 40,
        marginTop: 20,
        borderWidth: 1,
        textAlign: 'center',
      },
      button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        backgroundColor: '#239b56',
        padding: 7,
        width: '65%',
        borderRadius: 3
      },
      TextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
        fontWeight:'bold',
      }
  });