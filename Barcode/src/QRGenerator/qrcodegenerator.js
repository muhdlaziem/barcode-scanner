import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    StatusBar
} from "react-native";

import QRCode from 'react-native-qrcode-svg';

class qrcodegenerator extends Component {
    svg;
    constructor(){
        super();
        this.state = {
            inputValue:'',
            valueForQRCode:'',
        }

    }
    getTextInputValue = () =>{
        this.setState({valueForQRCode:this.state.inputValue})
        console.log(this.state.valueForQRCode)
        this.getDataURL
    }
    
    shareQR=() =>{
        this.svg.toDataURL((data) => {
          const shareImageBase64 = {
            title: "QR",
            message: "Ehi, this is my QR code",
            url: `data:image/png;base64,${data}`
          };
          console.log(shareImageBase64)
        //   Share.open(shareImageBase64);
        });
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
                    style={styles.TextInputStyle}
                    onChangeText={text => this.setState({ inputValue: text })}
                    underlineColorAndroid="transparent"
                    placeholder="Enter Your Website"
                />
                <TouchableOpacity
                    onPress={this.getTextInputValue}
                    onLongPress={this.shareQR}
                    activeOpacity={0.7}
                    style={styles.button}>
                    <Text style={styles.TextStyle}>Generate QR Code</Text>
                </TouchableOpacity></View>
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
        width: '100%',
        paddingTop: 8,
        marginTop: 10,
        paddingBottom: 8,
        backgroundColor: '#2ecc71',
        marginBottom: 20,
      },
      TextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
      }
  });