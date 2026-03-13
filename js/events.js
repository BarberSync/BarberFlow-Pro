// استيراد الدوال الوظيفية المشتركة فقط


import { logout } from "./auth.js";


import { editSalonName } from "./dashboard.js";


// هذا المنسق يضمن عدم تنفيذ أي كود إلا إذا وُجد العنصر فعلياً في الصفحة الحالية


document.addEventListener('DOMContentLoaded', () => {


    // --- 1. التعامل مع زر الخروج (متاح في لوحة التحكم) ---


    const logoutBtn = document.getElementById('btn-logout');


    if (logoutBtn) {


        logoutBtn.addEventListener('click', () => {


            logout(); 


        });


    }


    // --- 2. التعامل مع زر تعديل البيانات (متاح في لوحة التحكم) ---


    const btnEdit = document.getElementById('btn-edit');


    if (btnEdit) {


        btnEdit.addEventListener('click', () => {


            editSalonName(); 


        });


    }


});
