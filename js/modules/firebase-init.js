// js/modules/firebase-init.js


/* --- 1. استيراد وظائف التهيئة من مكتبات Firebase الرسمية --- */


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";


import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";


/* --- 2. إعدادات مشروع Firebase الخاصة بك --- */


const firebaseConfig = {


    apiKey: "AIzaSyB8s5Qjcoo45cxloelyYP181l_TZWsXaCw",


    authDomain: "barberflow-v2-c90d8.firebaseapp.com",


    projectId: "barberflow-v2-c90d8",


    storageBucket: "barberflow-v2-c90d8.firebasestorage.app",


    messagingSenderId: "599133211849",


    appId: "1:599133211849:web:f9ec18973417432d439118"


};


/* --- 3. تهيئة التطبيق واستخراج الخدمات البرمجية --- */


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);


const auth = getAuth(app);


const storage = getStorage(app);


/* --- 4. تصدير الخدمات لاستخدامها في باقي الملفات --- */


export { db, auth, storage };
