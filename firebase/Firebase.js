import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    signInWithEmailAndPassword,
} from "firebase/auth";
import database from '@react-native-firebase/database';
import { 
    getDatabase, 
    ref as firebaseDatabaseRef, 
    set as firebaseSet
} from "firebase/database"
var firebaseConfig = {
    apiKey: "AIzaSyAwaIaZMkNXhwxPRDOSaifDI0GbPtbMQbw",
    authDomain: "gotravel-f5137.firebaseapp.com",
    databaseURL: "https://gotravel-f5137-default-rtdb.firebaseio.com",
    projectId: "gotravel-f5137",
    storageBucket: "gotravel-f5137.appspot.com",
    messagingSenderId: "811053328343",
    appId: "1:337520964128:android:b15aacae47184772668245",
    messagingSenderId: "337520964128"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const firebaseDatabase = getDatabase()
export {
    auth,
    firebaseDatabase,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    firebaseDatabaseRef,
    firebaseSet,
    sendEmailVerification,
    signInWithEmailAndPassword,
    database
}