// --- 1. استيراد الدوال الوظيفية من ملفات العمليات ---
import { login, signUp, logout } from "./auth.js";


import { editSalonName } from "./dashboard.js";


// --- 2. انتظار تحميل كامل عناصر الصفحة لضمان وجود الأزرار في الذاكرة ---
document.addEventListener('DOMContentLoaded', () => {


    // --- 3. التعامل مع نموذج التسجيل (register.html) ---
    const registerForm = document.getElementById('registerForm');


    if (registerForm) {


        registerForm.addEventListener('submit', (e) => {


            e.preventDefault(); // منع إعادة تحميل الصفحة


            // جمع البيانات من الحقول
            const email = document.getElementById('email').value;


            const password = document.getElementById('password').value;


            const shopName = document.getElementById('shopName').value;


            const ownerName = document.getElementById('ownerName').value;


            const phone = document.getElementById('phone').value;


            const address = document.getElementById('address').value;


            // استدعاء دالة التسجيل
            signUp(email, password, shopName, ownerName, phone, address); 


        });


    }


    // --- 4. التعامل مع نموذج الدخول (login.html) ---
    const loginForm = document.getElementById('loginForm');


    if (loginForm) {


        loginForm.addEventListener('submit', (e) => {


            e.preventDefault(); // منع الإرسال التقليدي


            const email = document.getElementById('loginEmail').value;


            const password = document.getElementById('loginPassword').value;


            // تنفيذ عملية الدخول
            login(email, password); 


        });


    }


    // --- 5. التعامل مع زر تعديل البيانات (داخل dashboard.html) ---
    const btnEdit = document.getElementById('btn-edit');


    if (btnEdit) {


        btnEdit.addEventListener('click', () => {


            editSalonName(); // تشغيل دالة تعديل الاسم


        });


    }


    // --- 6. التعامل مع زر تسجيل الخروج (موجود في عدة صفحات) ---
    const logoutBtn = document.getElementById('btn-logout');


    if (logoutBtn) {


        logoutBtn.addEventListener('click', () => {


            logout(); // تنفيذ عملية الخروج من النظام


        });


    }


});
