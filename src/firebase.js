// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1C131cUnbo1bR5bNpQG9wT17qyuTrpx4",
  authDomain: "ep-chat-tool.firebaseapp.com",
  projectId: "ep-chat-tool",
  storageBucket: "ep-chat-tool.appspot.com",
  messagingSenderId: "543709486012",
  appId: "1:543709486012:web:f0c4d6a47c606d9608a9b9",
  measurementId: "G-XEE1B58GSW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
