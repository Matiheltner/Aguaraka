import firebase from "firebase"
import 'firebase/firestore'
 
const firebaseConfig = {
    apiKey: "AIzaSyA2hy3bKnXZCjo5pv48D28v5ItctZKOjYY",
    authDomain: "ashlank-te-amo.firebaseapp.com",
    projectId: "ashlank-te-amo",
    storageBucket: "ashlank-te-amo.appspot.com",
    messagingSenderId: "409660517638",
    appId: "1:409660517638:web:47548e9c34e4c9877ec287",
    measurementId: "G-DRWK333W0J"
  };
const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){
    return firebase.firestore(app)
}