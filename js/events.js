// استيراد الدوال الوظيفية من ملف المصادقة
import { login, signUp, logout } from "./auth.js";


// عند تحميل الصفحة، نقوم بتهيئة المستمعين للأحداث
document.addEventListener('DOMContentLoaded', () => {


    // 1. التعامل مع نموذج التسجيل
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            signUp(); 
        });
    }


    // 2. التعامل مع نموذج الدخول
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            login(); 
        });
    }


    // 3. التعامل مع زر الخروج
    const logoutBtn = document.getElementById('btn-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            logout();
        });
    }
});
