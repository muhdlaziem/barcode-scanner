import * as firebase from "firebase";
const config = {
    apiKey: "AIzaSyD7EOsq7M1ReqquROk64jCErDfArWDd8I8",
    authDomain: "barcodescanner-ce566.firebaseapp.com",
    databaseURL: "https://barcodescanner-ce566.firebaseio.com",
    projectId: "barcodescanner-ce566",
    storageBucket: "barcodescanner-ce566.appspot.com",
    messagingSenderId: "156152347048",
    appId: "1:156152347048:web:07d2cb4fbf44200010859d",
    measurementId: "G-KM9WMYC466"

  };
export const app = firebase.initializeApp(config);