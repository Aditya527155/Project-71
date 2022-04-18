import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAOIK0W9xpN2dGw4T8NNDcTzDzfu3AA25M",
    authDomain: "e-ride-12209.firebaseapp.com",
    projectId: "e-ride-12209",
    storageBucket: "e-ride-12209.appspot.com",
    messagingSenderId: "374649913488",
    appId: "1:374649913488:web:695fcba6a3377ebae15815"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
