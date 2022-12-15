import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBzGmYT6YDgUo5Vr7-uEZ2XsGs7ep98wFU",
  authDomain: "gappatappa-d03e3.firebaseapp.com",
  projectId: "gappatappa-d03e3",
  storageBucket: "gappatappa-d03e3.appspot.com",
  messagingSenderId: "854212998507",
  appId: "1:854212998507:web:85b0164809a014badf082e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
