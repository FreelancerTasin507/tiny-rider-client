// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC17yN6XxmYVfJSjG-U-ze4ifjC1zMEIXo",
  authDomain: "toy-shop-client.firebaseapp.com",
  projectId: "toy-shop-client",
  storageBucket: "toy-shop-client.appspot.com",
  messagingSenderId: "271191353395",
  appId: "1:271191353395:web:58bf0e193841a3e1d35b46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
