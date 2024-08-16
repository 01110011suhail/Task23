// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider, signInWithPopup,sendPasswordResetEmail as firebaseSendPasswordResetEmail,
//   createUserWithEmailAndPassword as firebaseCreateUserWithEmailAndPassword, } from 'firebase/auth';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCyM_fqejhfGfM1diXby9XHNfI46JnqJlg",
//   authDomain: "stemsy-md.firebaseapp.com",
//   projectId: "stemsy-md",
//   storageBucket: "stemsy-md.appspot.com",
//   messagingSenderId: "499826232028",
//   appId: "1:499826232028:web:ba33f729f66b9da6570219",
//   measurementId: "G-2ZQ6FXVXBH"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   return signInWithPopup(auth, provider);
// };

// export const sendPasswordResetEmail = (email) => {
//   return firebaseSendPasswordResetEmail(auth, email);
// };

// export const createUserWithEmailAndPassword = (email, password) => {
//   return firebaseCreateUserWithEmailAndPassword(auth, email, password);
// };