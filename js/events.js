// استيراد الدوال الوظيفية
import { login, signUp, logout } from "./auth.js";


document.addEventListener('DOMContentLoaded', () => {


    // 1. التعامل مع نموذج التسجيل
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // جمع البيانات من الحقول
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const shopName = document.getElementById('shopName').value;
            const ownerName = document.getElementById('ownerName').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            
            // إرسال البيانات للدالة
            signUp(email, password, shopName, ownerName, phone, address); 
        });
    }


    // 2. التعامل مع نموذج الدخول
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // جمع البيانات من الحقول
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // إرسال البيانات للدالة
            login(email, password); 
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
