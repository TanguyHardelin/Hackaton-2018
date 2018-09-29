import firebase from 'firebase'
import fire from './Fire'

// Cloud Firestore

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

export default db;
