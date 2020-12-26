// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCKq4GIcUmyxF5Dabaz1qwQabGTQ7td_Z8",
    authDomain: "instagram-native-be1a7.firebaseapp.com",
    projectId: "instagram-native-be1a7",
    storageBucket: "instagram-native-be1a7.appspot.com",
    messagingSenderId: "636601099697",
    appId: "1:636601099697:web:b7ea1d16635114c9690990",
    measurementId: "G-CZ6XWPM921"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()


  export {db, auth};
   