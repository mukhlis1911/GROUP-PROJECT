import * as firebase from 'firebase';

 let config = {
    apiKey: "AIzaSyDfB0lUHi1Irb_TPMe362NHcVIu7oVZOGA",
    authDomain: "project-f2593.firebaseapp.com",
    projectId: "project-f2593",
    storageBucket: "project-f2593.appspot.com",
    messagingSenderId: "380545339885",
    appId: "1:380545339885:web:35c7ae87324eac8ec9d7e4",
    measurementId: "G-2HYYWM8YJQ"
    };
    
let app = firebase.initializeApp(config);
export const db = app.database();