import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCxu3TQN7wwlSlCR4-u0f2kMrOlRblFHfI",
    authDomain: "clone-80eee.firebaseapp.com",
    databaseURL: "https://clone-80eee.firebaseio.com",
    projectId: "clone-80eee",
    storageBucket: "clone-80eee.appspot.com",
    messagingSenderId: "196485919948",
    appId: "1:196485919948:web:e471b0fad74560722cfe69",
    measurementId: "G-LSEC76CVHQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };