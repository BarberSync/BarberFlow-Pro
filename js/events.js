// استيراد الدوال من ملف العمليات
import { login, signUp, logout } from "./auth.js";


import { editSalonName } from "./dashboard.js";


document.addEventListener('DOMContentLoaded', () => {


    // 1. ربط نموذج التسجيل (بناءً على id="registerForm" في register.html)
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


    // 2. ربط نموذج الدخول (بناءً على id="loginForm" في login.html)
    const loginForm = document.getElementById('loginForm');


    if (loginForm) {


        loginForm.addEventListener('submit', (e) => {


            e.preventDefault();


            const email = document.getElementById('loginEmail').value;


            const password = document.getElementById('loginPassword').value;


            login(email, password);


        });


    }


    // 3. ربط أزرار لوحة التحكم (بناءً على id="btn-edit" و id="btn-logout" في dashboard.html)
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
