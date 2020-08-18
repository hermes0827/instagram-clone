import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyARULydvlQJm4YNGGd1oOm_jaVakpRlO5A",
    authDomain: "instagram-clone-react-c8086.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-c8086.firebaseio.com",
    projectId: "instagram-clone-react-c8086",
    storageBucket: "instagram-clone-react-c8086.appspot.com",
    messagingSenderId: "42496359038",
    appId: "1:42496359038:web:d83a4232c4f684584bf62f",
    measurementId: "G-S69R69393T",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
