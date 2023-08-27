// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARYSY8SIhT6cg_W9Icn7d98NLaxLaG638",
  authDomain: "watch-store-994e7.firebaseapp.com",
  projectId: "watch-store-994e7",
  storageBucket: "watch-store-994e7.appspot.com",
  messagingSenderId: "390080277545",
  appId: "1:390080277545:web:bff020182ca7b452484038",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
