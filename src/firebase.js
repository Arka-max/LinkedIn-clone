import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyDX4XH6SA_fXHXlpAGNYr-hQKW1qiXZEjA",
    authDomain: "link-clone-a95ec.firebaseapp.com",
    projectId: "link-clone-a95ec",
    storageBucket: "link-clone-a95ec.appspot.com",
    messagingSenderId: "1083786914909",
    appId: "1:1083786914909:web:ae486c1855f5f50c91f1b4"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth}
