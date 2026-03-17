/* --- 1. استيراد وظائف التهيئة --- */


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";


/* --- 2. الإعدادات المحمية --- */


const firebaseConfig = {


    // قراءة المفتاح من ملف .env المخفي
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,


    authDomain: "barberflow-v2-c90d8.firebaseapp.com",


    projectId: "barberflow-v2-c90d8",


    storageBucket: "barberflow-v2-c90d8.firebasestorage.app",


    messagingSenderId: "599133211849",


    appId: "1:599133211849:web:f9ec18973417432d439118"


};


const app = initializeApp(firebaseConfig);
