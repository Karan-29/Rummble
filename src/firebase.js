import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyALbus7K3ZvzrWPGqi3zlK1Wj6jvtsyQp4",
    authDomain: "slack-clone-ac88a.firebaseapp.com",
    projectId: "slack-clone-ac88a",
    storageBucket: "slack-clone-ac88a.appspot.com",
    messagingSenderId: "1081084506008",
    appId: "1:1081084506008:web:4998bdc1e5f602085345ed",
    measurementId: "G-W23049QHV9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;