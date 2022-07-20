import Firebase from 'firebase/compat/app';

import "firebase/compat/firestore";
import 'firebase/compat/auth';


import { seedDatabase } from "../seed";

const config = {  
apiKey: "AIzaSyBbgSWWemFAID-XCX6UBMw0BHzrYsGevXE",
  authDomain: "netflix2-e17c4.firebaseapp.com",
  projectId: "netflix2-e17c4",
  storageBucket: "netflix2-e17c4.appspot.com",
  messagingSenderId: "55946314391",
  appId: "1:55946314391:web:feadd4add311e734eb1fd2"
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase } ;