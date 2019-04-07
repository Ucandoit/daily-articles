import * as firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.FIREBASE_APP_API_KEY,
  authDomain: process.env.FIREBASE_APP_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_APP_DATABASE_URL,
  projectId: process.env.FIREBASE_APP_PROJECT_ID,
  storageBucket: process.env.FIREBASE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_APP_MESSAGING_SENDER_ID
};

class Firebase {
  private auth: firebase.auth.Auth;

  public constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
  }

  public doCreateUserWithEmailAndPassword = (email, password): Promise<firebase.auth.UserCredential> =>
    this.auth.createUserWithEmailAndPassword(email, password);

  public doSignInWithEmailAndPassword = (email, password): Promise<firebase.auth.UserCredential> =>
    this.auth.signInWithEmailAndPassword(email, password);

  public doSignOut = (): Promise<void> => this.auth.signOut();
}

export default Firebase;
