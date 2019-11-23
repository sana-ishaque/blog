import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyALjWJLA2sm5D_TcYT2kiIajpN0YUIxe68",
    authDomain: "inscribe-7b6e7.firebaseapp.com",
    databaseURL: "https://inscribe-7b6e7.firebaseio.com",
    projectId: "inscribe-7b6e7",
    storageBucket: "inscribe-7b6e7.appspot.com",
    messagingSenderId: "558707359925",
    appId: "1:558707359925:web:adddca03e02ca23ed8befc",
    measurementId: "G-M4Q8VDZ2HY"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore();
firebase.firestore().settings({ timestampsInSnapshots: true })
// firebase.analytics();



export default firebase;
