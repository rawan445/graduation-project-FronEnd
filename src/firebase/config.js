import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyByfx86xFpyNKwJ8B1uV5mj1fTeH_eKFAI",
  authDomain: "rawan0.firebaseapp.com",
  projectId: "rawan0",
  storageBucket: "rawan0.appspot.com",
  messagingSenderId: "474537040182",
  appId: "1:474537040182:web:8f358106f05c61e801bb97"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };