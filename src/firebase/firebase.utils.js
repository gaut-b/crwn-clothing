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

export const createUserProfileDocument = async(userAuth, additionalData) => {
	
	if (!userAuth) return;

	const userRef =  firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (err) {
			console.log('Error creating user', err.message);
		}
	}

	return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;