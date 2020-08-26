import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: "https://e-commerce-clothes-9850c.firebaseio.com",
  projectId: "e-commerce-clothes-9850c",
  storageBucket: "e-commerce-clothes-9850c.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSENGER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
