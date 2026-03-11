// --- 1. استيراد الأدوات من خوادم جوجل ---


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";


import { getFirestore, collection, addDoc, getDocs, query, where, updateDoc, doc, arrayUnion, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";


// --- 2. إعدادات مشروع Barber Flow الخاصة بك ---


// هذه الإعدادات سليمة وتعمل مع قاعدة بياناتك الحالية
const firebaseConfig = {


    apiKey: "AIzaSyB8s5Qjcoo45cxloelyYP181l_TZWsXaCw",


    authDomain: "barberflow-v2-c90d8.firebaseapp.com",


    projectId: "barberflow-v2-c90d8",


    storageBucket: "barberflow-v2-c90d8.firebasestorage.app",


    messagingSenderId: "599133211849",


    appId: "1:599133211849:web:f9ec18973417432d439118"


};


// --- 3. تشغيل الخدمات الأساسية ---


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);      


const auth = getAuth(app);         


const storage = getStorage(app);   


// --- 4. تصدير الأدوات (Export) ---


// تأكد من استخدام هذه الأدوات في ملفات js الأخرى مثل auth.js
export { 


    db, auth, storage, collection, addDoc, getDocs, query, where, 


    updateDoc, doc, arrayUnion, setDoc, createUserWithEmailAndPassword, 


    signInWithEmailAndPassword, onAuthStateChanged, signOut,


    ref, uploadBytes, getDownloadURL


};
