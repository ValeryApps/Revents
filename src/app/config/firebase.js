import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCYG8YWN57KzSYJ8rLW6NvAWBY46WiriQo",
  authDomain: "revents-b3259.firebaseapp.com",
  projectId: "revents-b3259",
  storageBucket: "revents-b3259.appspot.com",
  messagingSenderId: "680318282286",
  appId: "1:680318282286:web:6994fb8c78ad02c62ecdbf",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;
