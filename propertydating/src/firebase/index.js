import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCWq00djqzK2Dgq5EivddrCAvhlcnVvCfU",
  authDomain: "propertypicsuploads.firebaseapp.com",
  projectId: "propertypicsuploads",
  storageBucket: "propertypicsuploads.appspot.com",
  messagingSenderId: "357042696647",
  appId: "1:357042696647:web:dd70e82f5a173c9f8269e2",
  measurementId: "G-4CQX1F4PYY",
};

export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
