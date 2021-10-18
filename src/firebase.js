import firebase from "firebase/app";	

import "firebase/firestore";

const config = {	
    apiKey: "AIzaSyCo4fySFqN0Q9zh1i11bzQp9UE-FaL703Q",
    authDomain: "react-ecommerce-adb66.firebaseapp.com",
    projectId: "react-ecommerce-adb66",
    storageBucket: "react-ecommerce-adb66.appspot.com",
    messagingSenderId: "82093760030",
    appId: "1:82093760030:web:cdca63e1b8c4c29563d80f",
    measurementId: "G-KXEW1NNLP5"
};	

const app = firebase.initializeApp(config);	

export const getFirestore = () => {	
    return firebase.firestore(app)	
} 
