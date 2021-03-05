import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDcV3SlVc3f20jEPCkcMuZpEf48mC2xg3Q",
  authDomain: "e-clone-26a52.firebaseapp.com",
  databaseURL: "https://e-clone-26a52.firebaseio.com",
  projectId: "e-clone-26a52",
  storageBucket: "e-clone-26a52.appspot.com",
  messagingSenderId: "658058452873",
  appId: "1:658058452873:web:913ab20a3b6379daa20b58",
  measurementId: "G-Y6C3KXYVXF",
});

const auth = firebaseApp.auth();

export { auth };
