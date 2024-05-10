import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5k5wZi3L5TuKFuHIeIQgaagPvhyv53ss",
  authDomain: "filerush-a7f21.firebaseapp.com",
  projectId: "filerush-a7f21",
  storageBucket: "filerush-a7f21.appspot.com",
  messagingSenderId: "415004860627",
  appId: "1:415004860627:web:26d861202fc45e6c3ef426",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, app };
