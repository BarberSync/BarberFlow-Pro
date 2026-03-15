 //ملف يجعل من الازرار تسمع الاوامر وتنفذها




// js/events.js


import { logout } from "./modules/auth.js";


/**


 * جعل الدوال متاحة عالمياً (window) لتعمل مع onclick الموجود في HTML


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


// دالة الخروج التي طلبتها في HTML باسم goToHome


window.goToHome = () => {


    logout();


};


/**


 * معالجة إغلاق النوافذ عند النقر خارجها


 */


window.onclick = (event) => {


    if (event.target.classList.contains('modal')) {


        event.target.style.display = "none";


    }


};


