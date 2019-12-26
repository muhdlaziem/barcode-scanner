import React from 'react';
import { StyleSheet, Modal, View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from "prop-types";

export default class CustomAlertComponent extends React.Component {

  onNegativeButtonPress = () => {
    this.props.onPressNegativeButton();
  };

  onPositiveButtonPress = () => {
    this.props.onPressPositiveButton();
  };

  render() {
    return (
      <Modal
        visible={this.props.displayAlert}
        transparent={true}
        animationType={"fade"}>
        <View style={styles.mainOuterComponent}>
          <View style={styles.mainContainer}>
            {/* First ROw - Alert Icon and Title */}
            <View style={styles.topPart}>
              {
                this.props.displayAlertIcon
                &&
                <Image
                  source={require('../images/check.png')}
                  resizeMode={'contain'}
                  style={styles.alertIconStyle}
                />
              }
              <Text style={styles.alertTitleTextStyle}>
                {`${this.props.alertTitleText}`}
              </Text>
            </View>
            {/* Second Row - Alert Message Text */}
            <View style={styles.middlePart}>
              <Text style={styles.alertMessageTextStyle}>
                {`${this.props.alertMessageText}`}
              </Text>
            </View>
            {/* Third Row - Positive and Negative Button */}
            <View style={styles.bottomPart}>
              {
                this.props.displayPositiveButton
                &&
                <TouchableOpacity
                  onPress={this.onPositiveButtonPress}
                  style={styles.alertMessageButtonStyle} >
                  <Text style={styles.alertMessageButtonTextStyle}>{this.props.positiveButtonText}</Text>
                </TouchableOpacity>
              }
              {
                this.props.displayNegativeButton
                &&
                <TouchableOpacity
                  onPress={this.onNegativeButtonPress}
                  style={styles.alertMessageButtonStyle}>
                  <Text style={styles.alertMessageButtonTextStyle}>{this.props.negativeButtonText}</Text>
                </TouchableOpacity>
              }
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

CustomAlertComponent.propTypes = {
  displayAlert: PropTypes.bool,
  displayAlertIcon: PropTypes.bool,
  alertTitleText: PropTypes.string,
  alertMessageText: PropTypes.string,
  displayPositiveButton: PropTypes.bool,
  positiveButtonText: PropTypes.string,
  displayNegativeButton: PropTypes.bool,
  negativeButtonText: PropTypes.string,
  onPressPositiveButton : PropTypes.func,
  onPressNegativeButton : PropTypes.func,
}

// export default CustomAlertComponent;

const styles = StyleSheet.create({
  mainOuterComponent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000088'
  },
  mainContainer: {
    flexDirection: 'column',
    height: '25%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    // borderWidth: 2,
    // borderColor: '#FF0000',
    borderRadius: 10,
    padding: 4,
  },
  topPart: {
    flex: 0.5,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#00FF00',
    paddingHorizontal: 2,
    paddingVertical: 4
  },
  middlePart: {
    flex: 1,
    width: '100%',
    // borderWidth: 1,
    //borderColor: '#FF6600',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    color: '#FFFFFF',
    fontSize: 20,
    marginVertical: 2
  },
  bottomPart: {
    flex: 0.5,
    width: '100%',
    // borderWidth: 1,
    // borderColor: '#0066FF',
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-evenly'
  },
  alertIconStyle: {
    // borderWidth: 1,
    // borderColor: '#cc00cc',
    height: 35,
    width: 35,
  },
  alertTitleTextStyle: {
    flex: 1,
    textAlign: 'justify',
    color: "black",
    fontSize: 20,
    fontWeight: 'bold',
    // borderWidth: 1,
    // borderColor: '#660066',
    padding: 2,
    marginHorizontal: 2
  },
  alertMessageTextStyle: {
    color: 'black',
    textAlign: 'justify',
    fontSize: 18,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  alertMessageButtonStyle: {
    width: '40%',
    height:'150%',
    paddingHorizontal: 3,
    marginVertical: -4,
    
    backgroundColor: '#239b56',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertMessageButtonTextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },

});