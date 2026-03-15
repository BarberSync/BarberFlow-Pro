

// js/events.js


import { logout } from "./modules/auth.js";


// دالة لفتح النوافذ المنبثقة نضعها في نطاق النافذة ليراها الـ HTML


window.openModal = (id) => {


    const modal = document.getElementById(id);


    if (modal) modal.style.display = "block";


};


// دالة لإغلاق النوافذ المنبثقة


window.closeModal = (id) => {


    const modal = document.getElementById(id);


    if (modal) modal.style.display = "none";


};


document.addEventListener('DOMContentLoaded', () => {


    // ربط زر تسجيل الخروج


    const logoutBtn = document.querySelector('.logout-btn');


    if (logoutBtn) {


        logoutBtn.addEventListener('click', () => {


            logout();


        });


    }


    // إغلاق النوافذ عند النقر خارجها


    window.addEventListener('click', (event) => {


        if (event.target.classList.contains('modal')) {


            event.target.style.display = "none";


        }


    });


});


