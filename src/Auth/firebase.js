import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACIEhMBrt315UPvgQfKtxIAjeu_ttRRpY",
  authDomain: "v2-48982.firebaseapp.com",
  projectId: "v2-48982",
  storageBucket: "v2-48982.appspot.com",
  messagingSenderId: "421501428918",
  appId: "1:421501428918:web:bbb134f00125df17b3b217"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.firestore();
