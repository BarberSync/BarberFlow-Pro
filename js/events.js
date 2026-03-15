//ملف يجعل الازرار تتبع الاوامر 



// js/events.js


import { logout } from "./modules/auth.js";


/**


 * الدوال العامة لفتح وإغلاق النوافذ (لتعمل مع أي عنصر مستقبلي)


 */


window.openModal = (id) => {


    const modal = document.getElementById(id);


    if (modal) {


        modal.style.display = "block";


    }


};


window.closeModal = (id) => {


    const modal = document.getElementById(id);


    if (modal) {


        modal.style.display = "none";


    }


};


/**


 * ربط الأزرار الموجودة في dashboard.html برمجياً


 */


document.addEventListener('DOMContentLoaded', () => {


    // 1. زر الإعدادات -> يفتح نافذة معلومات الصالون


    const btnSettings = document.getElementById('btn-settings');


    if (btnSettings) {


        btnSettings.addEventListener('click', () => openModal('salonModal'));


    }


    // 2. زر تعديل البيانات -> يفتح نافذة بيانات الدخول


    const btnEdit = document.getElementById('btn-edit');


    if (btnEdit) {


        btnEdit.addEventListener('click', () => openModal('loginModal'));


    }


    // 3. زر تغيير الصور -> يفتح نافذة الصور (أو يمكنك ربطه بنافذة محددة)


    const btnPhotos = document.getElementById('btn-photos');


    if (btnPhotos) {


        btnPhotos.addEventListener('click', () => alert("سيتم تفعيل معرض الصور قريباً"));


    }


    // 4. زر الخروج -> ينفذ عملية تسجيل الخروج


    const btnLogout = document.getElementById('btn-logout');


    if (btnLogout) {


        btnLogout.addEventListener('click', () => {


            if(confirm("هل أنت متأكد من تسجيل الخروج؟")) {


                logout();


            }


        });


    }


    // إغلاق النوافذ عند النقر خارج الإطار الأبيض


    window.onclick = (event) => {


        if (event.target.classList.contains('modal')) {


            event.target.style.display = "none";


        }


    };


});


