// استيراد الدوال الوظيفية من الملفات الأخرى
import { login, signUp, logout } from "./auth.js";


// عند تحميل الصفحة، نقوم بربط الأحداث
document.addEventListener('DOMContentLoaded', () => {


    // 1. التعامل مع نموذج التسجيل (Register)
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            signUp(); // استدعاء دالة التسجيل
        });
    }


    // 2. التعامل مع نموذج الدخول (Login)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            login(); // استدعاء دالة الدخول
        });
    }


    // 3. التعامل مع زر الخروج (Logout)
    const logoutBtn = document.getElementById('btn-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            logout();
        });
    }
});
