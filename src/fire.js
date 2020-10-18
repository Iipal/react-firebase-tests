import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDI-llYQnoi4BXy6S5CMxN91C59TElxuqg",
  authDomain: "reactfirebase-login-form.firebaseapp.com",
  databaseURL: "https://reactfirebase-login-form.firebaseio.com",
  projectId: "reactfirebase-login-form",
  storageBucket: "reactfirebase-login-form.appspot.com",
  messagingSenderId: "840912565416",
  appId: "1:840912565416:web:12d62ededd1b96df123e9d",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
