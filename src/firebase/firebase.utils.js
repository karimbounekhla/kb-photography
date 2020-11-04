import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC-WBRqF2T7iLupCxy6fBFCO5oz0ta_Ohg",
    authDomain: "kb-photography.firebaseapp.com",
    databaseURL: "https://kb-photography.firebaseio.com",
    projectId: "kb-photography",
    storageBucket: "kb-photography.appspot.com",
    messagingSenderId: "694999928771",
    appId: "1:694999928771:web:c5f69b16bb56982dcaf776",
    measurementId: "G-F8DN0ZCXRE"
  };

/**
 * Create a User profile in FireStore when a user logs in for the first time (i.e. sign up)
 * @param {Firebase Auth Object} userAuth 
 */
export const createUser = async (userAuth, otherData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherData
      })
    } catch (err) {
      console.log('ERROR adding user to database: ' + err);
    }
  }

  return userRef;
} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;