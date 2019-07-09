import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBwhYYEdiK8YEavdC31xGN2ktMOtqYdCWw",
    authDomain: "crwn-db-94b20.firebaseapp.com",
    databaseURL: "https://crwn-db-94b20.firebaseio.com",
    projectId: "crwn-db-94b20",
    storageBucket: "",
    messagingSenderId: "346465963114",
    appId: "1:346465963114:web:5ff57650eb95d57a"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;