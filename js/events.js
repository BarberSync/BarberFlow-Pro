// --- 1. استيراد الدوال من ملف العمليات ---


import { signUp, login, logout } from "./auth.js";


document.addEventListener('DOMContentLoaded', () => {


    // --- 2. معالج نموذج التسجيل ---


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


    // --- 3. معالج نموذج تسجيل الدخول ---


    const loginForm = document.getElementById('loginForm');


    if (loginForm) {


        loginForm.addEventListener('submit', (e) => {


            e.preventDefault();


            const email = document.getElementById('loginEmail').value;


            const password = document.getElementById('loginPassword').value;


            login(email, password);


        });


    }


    // --- 4. معالج زر تسجيل الخروج ---


    const logoutBtn = document.getElementById('btn-logout');


    if (logoutBtn) {


        logoutBtn.addEventListener('click', () => {


            logout();


        });


    }


});
