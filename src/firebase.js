import firebase from 'firebase'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCzF3o2pLUZqYazwaQfm6X4bmMrXp47Ykg",
    authDomain: "pwa-app-d40b4.firebaseapp.com",
    projectId: "pwa-app-d40b4",
    storageBucket: "pwa-app-d40b4.appspot.com",
    messagingSenderId: "912953627327",
    appId: "1:912953627327:web:3bc16a4f07d65f113a2c0a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase