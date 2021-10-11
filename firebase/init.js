import firebase from 'firebase'
import 'firebase/storage';

const config = {
    apiKey: process.env.FB_APIKEY,
    databaseURL: process.env.FB_DATABASE_URL,
    authDomain: process.env.FB_AUTH_DOMAIN,
    projectId: process.env.FB_PROJECT_ID,
    storageBucket: process.env.FB_STORAGE_BUCKET,
    messagingSenderId: process.env.FB_MSG_SENDER_ID,
    appId: process.env.FB_APP_ID
};

try {
    firebase.initializeApp(config);
  } catch(err){
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)}
  }


export const db = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
