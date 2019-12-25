import {app} from './fbconfig';
import {CurrentUser} from '../Login/Login';
import * as firebase from "firebase";


export const addLink = (qrvalue)=>{
    let newPostKey = app.database().ref().child('item').push().key;
    let updates = {};
    updates['/item/' + newPostKey] = {Link:qrvalue,User:CurrentUser}
    app.database().ref().update(updates);
    console.log(updates)
}

export const deleteLink = (id) =>{
    app.database().ref('/item').child(id).remove();
}

export const changePassword = (currentPassword, newPassword) => {
    this.reauthenticate(currentPassword).then(() => {
      var user = firebase.auth().currentUser;
      user.updatePassword(newPassword).then(() => {
        console.log("Password updated!");
      }).catch((error) => { console.log(error); });
    }).catch((error) => { console.log(error); });
  }
  
export const changeEmail = (currentPassword, newEmail) => {
    this.reauthenticate(currentPassword).then(() => {
      var user = firebase.auth().currentUser;
      user.updateEmail(newEmail).then(() => {
        console.log("Email updated!");
      }).catch((error) => { console.log(error); });
    }).catch((error) => { console.log(error); });
  }
