import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCKThHtl_QQiY99FlCDK-cfNVn_NlSYCD4",
    authDomain: "spotifyclone-3286c.firebaseapp.com",
    projectId: "spotifyclone-3286c",
    storageBucket: "spotifyclone-3286c.appspot.com",
    messagingSenderId: "453493033134",
    appId: "1:453493033134:web:1083fa0f7857b96231453f",
    measurementId: "G-5CJE2FSN0G"
  };
  

  export const initFirebase = initializeApp(firebaseConfig);