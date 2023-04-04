// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx0oPdkxDhSPB9ioP-bKklGIqr6ekVK-w",
  authDomain: "junctionx-e23b6.firebaseapp.com",
  databaseURL: "https://junctionx-e23b6-default-rtdb.firebaseio.com",
  projectId: "junctionx-e23b6",
  storageBucket: "junctionx-e23b6.appspot.com",
  messagingSenderId: "303864340857",
  appId: "1:303864340857:web:772666994a23749a500fa8",
  databaseURL: "https://junctionx-e23b6-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
var database = getDatabase(app);


database.ref("thetest").set("cauth")



// creating a starting path in our database
const ref = database.ref('server/saving-data/fireblog');

// create a child node of the above path and write the following data to it
const usersRef = ref.child('users');
usersRef.set({
  alanisawesome: {
    date_of_birth: 'June 23, 1912',
    full_name: 'Alan Turing',
  },
  gracehop: {
    date_of_birth: 'December 9, 1906',
    full_name: 'Grace Hopper',
  },
});


var fb= require('firebase')
var apiInit=fb.initializeApp({
    apiKey: "AIzaSyCx0oPdkxDhSPB9ioP-bKklGIqr6ekVK-w",
    authDomain: "junctionx-e23b6.firebaseapp.com",
    databaseURL: "https://junctionx-e23b6-default-rtdb.firebaseio.com",
    projectId: "junctionx-e23b6",
    storageBucket: "junctionx-e23b6.appspot.com",
    messagingSenderId: "303864340857",
    appId: "1:303864340857:web:772666994a23749a500fa8",
    databaseURL: "https://junctionx-e23b6-default-rtdb.firebaseio.com",

})

var firebaseDb = fb.database()
firebaseDb.ref("thetest").set("cauth")
