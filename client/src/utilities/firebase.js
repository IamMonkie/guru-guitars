import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";

const config = {
  apiKey: "AIzaSyDqHwvxv97BGl9jedYghb6YDbmvkuy1deY",
  authDomain: "guru-guitars.firebaseapp.com",
  databaseURL: "https://guru-guitars.firebaseio.com",
  projectId: "guru-guitars",
  storageBucket: "guru-guitars.appspot.com",
  messagingSenderId: "398857297324",
  appId: "1:398857297324:web:1b83331653fcae3c3d6e09",
  measurementId: "G-CEDMT51K0P"
};

firebase.initializeApp(config);
firebase.analytics();
export default firebase.auth();
