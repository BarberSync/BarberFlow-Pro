// استيراد الدوال الوظيفية من ملف المصادقة واللوحة
import { login, signUp, logout } from "./auth.js";


import { editSalonName } from "./dashboard.js";


// هذا المنسق يضمن عدم تنفيذ أي كود إلا إذا وُجد العنصر فعلياً في الصفحة الحالية
document.addEventListener('DOMContentLoaded', () => {


    // --- 1. التعامل مع نموذج التسجيل (خاص بـ register.html) ---
    const registerForm = document.getElementById('registerForm');


    if (registerForm) {


        registerForm.addEventListener('submit', (e) => {


            e.preventDefault();


            const email = document.getElementById('email').value;


            const password = document.getElementById('password').value;


            const shopName = document.getElementById('shopName').value;


            const ownerName = document.getElementById('ownerName').value;


            const phone = document.getElementById('phone').value;


            const address = document.getElementById('address').value;


            signUp(email, password, shopName, ownerName, phone, address); 
        });


    }


    // --- 2. التعامل مع نموذج الدخول (خاص بـ login.html) ---
    const loginForm = document.getElementById('loginForm');


    if (loginForm) {


        loginForm.addEventListener('submit', (e) => {


            e.preventDefault();


            const email = document.getElementById('loginEmail').value;


            const password = document.getElementById('loginPassword').value;


            login(email, password); 
        });


    }


    // --- 3. التعامل مع أزرار لوحة التحكم (خاص بـ dashboard.html) ---
    const btnEdit = document.getElementById('btn-edit');


    if (btnEdit) {


        btnEdit.addEventListener('click', () => {


            editSalonName(); 
        });


    }


    const logoutBtn = document.getElementById('btn-logout');


    if (logoutBtn) {


        logoutBtn.addEventListener('click', () => {


            logout(); 
        });


    }


});
