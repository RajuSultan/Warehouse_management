// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnYsbnCVx6WXqi6fu0GMy5w7lh4o1AafI",
    authDomain: "fir-second-82f70.firebaseapp.com",
    projectId: "fir-second-82f70",
    storageBucket: "fir-second-82f70.appspot.com",
    messagingSenderId: "89826520167",
    appId: "1:89826520167:web:be5f65d1e8983164f878c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
