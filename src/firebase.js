import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA_jQLDhGxSshiAHAvhYuKJyp0c6QiqYtI",
    authDomain: "netflixprojectdemo.firebaseapp.com",
    projectId: "netflixprojectdemo",
    storageBucket: "netflixprojectdemo.appspot.com",
    messagingSenderId: "972487824633",
    appId: "1:972487824633:web:fe2ac417d74330c62b7e28",
    measurementId: "G-1GJHK28LSW"
  };

  //Use this to initialize the firebase App
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  // Use these for db & auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth, db };