// --- 1. استيراد الدوال الوظيفية ---
import { login, signUp, logout } from "./auth.js";


import { editSalonName } from "./dashboard.js";


// --- 2. مهيئ الأحداث الذكي ---
document.addEventListener('DOMContentLoaded', () => {


    // --- 3. ربط أزرار صفحة التسجيل (register.html) ---
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


    // --- 4. ربط أزرار صفحة الدخول (login.html) ---
    const loginForm = document.getElementById('loginForm');


    if (loginForm) {


        loginForm.addEventListener('submit', (e) => {


            e.preventDefault();


            const email = document.getElementById('loginEmail').value;


            const password = document.getElementById('loginPassword').value;


            login(email, password); 


        });


    }


    // --- 5. ربط أزرار لوحة التحكم (dashboard.html) ---
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
