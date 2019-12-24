import {app} from './fbconfig';

export const addLink = (qrvalue)=>{
    let newPostKey = app.database().ref().child('item').push().key;
    let updates = {};
    updates['/item/' + newPostKey] = {Link:qrvalue}
    app.database().ref().update(updates);
    console.log(updates)
}

export const deleteLink = (id) =>{
    app.database().ref('/item').child(id).remove();
}