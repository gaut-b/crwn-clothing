import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyAmq8RY1PTnHG694gQQ-6vH6SccL57vY3w",
	authDomain: "crwn-db-bd77b.firebaseapp.com",
	databaseURL: "https://crwn-db-bd77b.firebaseio.com",
	projectId: "crwn-db-bd77b",
	storageBucket: "",
	messagingSenderId: "1024677309820",
	appId: "1:1024677309820:web:b20a7fa519caf581"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;