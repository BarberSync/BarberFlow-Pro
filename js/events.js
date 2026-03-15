 //ملف يجعل من الازرار تسمع الاوامر وتنفذها



 

// js/events.js


import { logout } from "./modules/auth.js";


// ربط الدوال بنطاق النافذة العام ليراها الـ HTML


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


document.addEventListener('DOMContentLoaded', () => {


    // إغلاق النوافذ عند النقر خارج المحتوى


    window.addEventListener('click', (event) => {


        if (event.target.classList.contains('modal')) {


            event.target.style.display = "none";


        }


    });


    // ربط زر تسجيل الخروج برمجياً


    const logoutBtn = document.querySelector('.logout-btn');


    if (logoutBtn) {


        logoutBtn.addEventListener('click', () => {


            logout();


        });


    }


});


