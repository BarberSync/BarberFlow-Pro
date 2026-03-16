// js/main.js


/* --- 1. دالة موحدة لعرض التنبيهات (Toast Notification) --- */


export const showToast = (message, type = 'success') => {


    const toast = document.createElement('div');


    toast.className = `toast toast-${type}`;


    toast.innerText = message;


    document.body.appendChild(toast);


    setTimeout(() => { toast.remove(); }, 3000);


};


/* --- 2. تحسين أداء تأثير التمرير (Scroll Throttling) --- */


const handleScroll = () => {


    const nav = document.querySelector('nav');


    if (!nav) return;


    if (window.scrollY > 50) {


        nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";


    } else {


        nav.style.boxShadow = "none";


    }


};


/* --- 3. ربط الأحداث العامة --- */


document.addEventListener('DOMContentLoaded', () => {


    // تحسين الأداء باستخدام requestAnimationFrame للتمرير


    window.addEventListener('scroll', () => {


        window.requestAnimationFrame(handleScroll);


    });


    console.log("BarberFlow-Pro: تم تفعيل النظام بنجاح.");


});
