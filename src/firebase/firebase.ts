
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDr6U-At7c05Bb8abjQeRzEHHr9a3jZxfI",
  authDomain: "guilherme-reviews.firebaseapp.com",
  projectId: "guilherme-reviews",
  storageBucket: "guilherme-reviews.appspot.com",
  messagingSenderId: "240685422162",
  appId: "1:240685422162:web:2f43926a46acbf8355318b"
};

export const fbConfig = initializeApp(firebaseConfig);