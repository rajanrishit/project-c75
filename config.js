import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCaD9FSda3Ww41n4uDJA9i08oIAdWbMqF8",
  authDomain: "project-75-9fa9f.firebaseapp.com",
  projectId: "project-75-9fa9f",
  storageBucket: "project-75-9fa9f.appspot.com",
  messagingSenderId: "705830332665",
  appId: "1:705830332665:web:5c8f7a4945a70c4b0a1a28"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
