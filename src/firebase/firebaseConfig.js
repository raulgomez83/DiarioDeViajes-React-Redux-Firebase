import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC19kywpBSNFkvUD3GGwhr5cWEiRi58do0",
  authDomain: "diario-de-viaje.firebaseapp.com",
  projectId: "diario-de-viaje",
  storageBucket: "diario-de-viaje.appspot.com",
  messagingSenderId: "484784273841",
  appId: "1:484784273841:web:320570e63a4dfa62c82590",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
