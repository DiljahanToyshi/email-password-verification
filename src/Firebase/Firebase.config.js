// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB25kXDQfFsoI5D1MRTqbePDYJz17bxwRE",
    authDomain: "auth-firebase-tailwind-bff17.firebaseapp.com",
    projectId: "auth-firebase-tailwind-bff17",
    storageBucket: "auth-firebase-tailwind-bff17.appspot.com",
    messagingSenderId: "20280998654",
    appId: "1:20280998654:web:e86cdddfd352cb706103af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;