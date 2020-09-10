import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDYWjcUH4_3rp68TBX6j10Aq-y7ObRvSwo",
    authDomain: "publicidad-walmart.firebaseapp.com",
    databaseURL: "https://publicidad-walmart.firebaseio.com",
    projectId: "publicidad-walmart",
    storageBucket: "publicidad-walmart.appspot.com",
    messagingSenderId: "928295205288",
    appId: "1:928295205288:web:720f16992cd5b8e2af859d",
    measurementId: "G-5X31QXVEPF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export  {firebase}
  export const db = firebase.firestore();
  
