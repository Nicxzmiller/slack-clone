import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDJCiLEfwLCtPqgWobQq_MunQYTnI98ubg",
    authDomain: "slack-clone-yt-18918.firebaseapp.com",
    projectId: "slack-clone-yt-18918",
    storageBucket: "slack-clone-yt-18918.appspot.com",
    messagingSenderId: "373252479157",
    appId: "1:373252479157:web:a4431e046f76ead14046fc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
