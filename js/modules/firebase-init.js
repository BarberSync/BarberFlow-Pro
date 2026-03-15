// ملف ربط موقع barberflow-pro مع قاعدة بيانات firebase


// js/modules/firebase-init.js


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";


import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";


const firebaseConfig = {


    apiKey: "AIzaSyB8s5Qjcoo45cxloelyYP181l_TZWsXaCw",


    authDomain: "barberflow-v2-c90d8.firebaseapp.com",


    projectId: "barberflow-v2-c90d8",


    storageBucket: "barberflow-v2-c90d8.firebasestorage.app",


    messagingSenderId: "599133211849",


    appId: "1:599133211849:web:f9ec18973417432d439118"


};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);


const auth = getAuth(app);


const storage = getStorage(app);


// إضافة التصدير لتصبح الخدمات متاحة في بقية الملفات


export { db, auth, storage };
