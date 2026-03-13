import { auth } from './firebase-init.js';


import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";


// وظيفة إنشاء حساب جديد
export const registerUser = async (email, password) => {


    return await createUserWithEmailAndPassword(auth, email, password);


};


// وظيفة تسجيل الدخول
export const loginUser = async (email, password) => {


    return await signInWithEmailAndPassword(auth, email, password);


};


// وظيفة تسجيل الخروج
export const logoutUser = async () => {


    return await signOut(auth);


};


// مراقبة حالة المستخدم (للتأكد من تسجيل الدخول في أي صفحة)
export const checkAuthState = (callback) => {


    onAuthStateChanged(auth, callback);


};
