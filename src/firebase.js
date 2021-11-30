import { initializeApp } from "firebase/app"
import '@firebase/auth';
import 'firebase/compat/firestore';

const firebase = initializeApp({
    apiKey: "AIzaSyCTEUhgogNyRBO7qogHhgofrw58dcNVmi0",
    authDomain: "expert-in-332810.firebaseapp.com",
    projectId: "expert-in-332810",
    storageBucket: "expert-in-332810.appspot.com",
    messagingSenderId: "814398517460",
    appId: "1:814398517460:web:3c8ad04262d5776767cb41",
    measurementId: "G-RNLBPMT6C4"
});

export default firebase;