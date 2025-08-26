 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here. Other Firebase libraries
 // are not available in the service worker.
 importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
 importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

 // Initialize the Firebase app in the service worker by passing in
 // your app's Firebase config object.
 // https://firebase.google.com/docs/web/setup#config-object
 firebase.initializeApp({
    apiKey: "AIzaSyBKRGb4IlonwqivSij4na_YwCTwvEKtAZc",
    authDomain: "friendlychat-9d809.firebaseapp.com",
    projectId: "friendlychat-9d809",
    storageBucket: "friendlychat-9d809.firebasestorage.app",
    messagingSenderId: "249928011007",
    appId: "1:249928011007:web:c7a7665d610b2dfe0150ca"
 });

 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();