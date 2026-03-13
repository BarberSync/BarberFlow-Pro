// استيراد الدوال الوظيفية المتبقية فقط


import { login, logout } from "./auth.js";


import { editSalonName } from "./dashboard.js";


// هذا المنسق يضمن عدم تنفيذ أي كود إلا إذا وُجد العنصر فعلياً في الصفحة الحالية


document.addEventListener('DOMContentLoaded', () => {


    // --- 1. التعامل مع نموذج الدخول (خاص بـ login.html) ---


    const loginForm = document.getElementById('loginForm');


    if (loginForm) {


        loginForm.addEventListener('submit', (e) => {


            e.preventDefault();


            const email = document.getElementById('loginEmail').value;


            const password = document.getElementById('loginPassword').value;


            login(email, password); 


        });


    }


    // --- 2. التعامل مع أزرار لوحة التحكم (خاص بـ dashboard.html) ---


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
