import firebase from "firebase";
import credentials from "../serviceAccountKey.json";

firebase.initializeApp(credentials);
export default firebase;
