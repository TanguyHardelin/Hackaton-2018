
import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAV0uhVQQ8nV5mlo6sxdukwO0bPlQdJnio",
    authDomain: "hackathon-2018-139b7.firebaseapp.com",
    databaseURL: "https://hackathon-2018-139b7.firebaseio.com",
    projectId: "hackathon-2018-139b7",
    storageBucket: "",
    messagingSenderId: "989551142970"
};
const fire = firebase.initializeApp(config);
export default fire;
