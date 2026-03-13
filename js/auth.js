// --- 1. استيراد الأدوات الأساسية فقط من خوادم جوجل ---


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";


import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// --- 2. إعدادات مشروعك (لا تقم بتغيير القيم هنا) ---


const firebaseConfig = {


    apiKey: "AIzaSyB8s5Qjcoo45cxloelyYP181l_TZWsXaCw",


    authDomain: "barberflow-v2-c90d8.firebaseapp.com",


    projectId: "barberflow-v2-c90d8",


    storageBucket: "barberflow-v2-c90d8.firebasestorage.app",


    messagingSenderId: "599133211849",


    appId: "1:599133211849:web:f9ec18973417432d439118"


};


// --- 3. تشغيل الخدمات وتصديرها للاستخدام في الملفات الأخرى ---


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);


export const auth = getAuth(app);
