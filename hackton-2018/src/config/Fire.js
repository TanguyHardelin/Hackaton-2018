
import firebase from 'firebase'
  // Initialize Firebase
var config = {
  apiKey: "AIzaSyBN7La9jq4dkEVHKkoWhyAGDdJ_7A-foB4",
  authDomain: "hackton-2018.firebaseapp.com",
  databaseURL: "https://hackton-2018.firebaseio.com",
  projectId: "hackton-2018",
  storageBucket: "hackton-2018.appspot.com",
  messagingSenderId: "216647074496"
};
const fire = firebase.initializeApp(config);
export default fire;
