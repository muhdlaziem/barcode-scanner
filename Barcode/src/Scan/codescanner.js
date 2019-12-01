import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image
} from 'react-native'
import { RNCamera }from 'react-native-camera'
export default class BarcodeScan extends Component {
  constructor (props) {
    super(props)
    this.state = {
      link :''
    }
  }
  onBarCodeRead = e => {
    this.setState({link:e.data})
    Alert.alert('Barcode value is' + this.state.link, 'Barcode type is' + e.type)
 }

  render () {
    return (
      <View style={styles.container}>
        <RNCamera 
          style={styles.preview}
          onBarCodeRead={this.onBarCodeRead}
         >
        </RNCamera>
      </View>
    )
  }
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  preview: {
  
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

 
 

})
