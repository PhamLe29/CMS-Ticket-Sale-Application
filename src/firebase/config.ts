import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyBr74gUQWS7eJaud0G83u3qs6KRc-9yOd8",
  authDomain: "react-firebase-auth-crud-37bed.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-crud-37bed-default-rtdb.firebaseio.com",
  projectId: "react-firebase-auth-crud-37bed",
  storageBucket: "react-firebase-auth-crud-37bed.appspot.com",
  messagingSenderId: "105773279610",
  appId: "1:105773279610:web:57bbbc6a2bec855aaa4ec3"
};
firebase.initializeApp(config);
export default firebase.firestore();


