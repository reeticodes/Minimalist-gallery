import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB5aeMzzwNNMoa4cx8_wUzpOwPZQlcsSGY",
    authDomain: "minimalistic-gallery.firebaseapp.com",
    projectId: "minimalistic-gallery",
    storageBucket: "minimalistic-gallery.appspot.com",
    messagingSenderId: "260442205297",
    appId: "1:260442205297:web:afbfca30fc86ef927f3fd0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export {projectStorage, projectFirestore,timestamp};