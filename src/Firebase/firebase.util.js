import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAMuXdp2xwKf2xUM5142YntbaURviYI94M",
    authDomain: "crown-db-89314.firebaseapp.com",
    databaseURL: "https://crown-db-89314.firebaseio.com",
    projectId: "crown-db-89314",
    storageBucket: "crown-db-89314.appspot.com",
    messagingSenderId: "678773240617",
    appId: "1:678773240617:web:bf0b356ac43e475344fd38",
    measurementId: "G-MZ46ZR4XRC"
  };

  // INITIALISE FIREBASE
  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = auth.signInWithPopup(provider);

  export default firebase;