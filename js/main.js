//هذا الملف مسؤول عن المؤثرات البسيطة وسلوك الموقع العام.

// js/main.js


/* --- 1. انتظار تحميل كامل عناصر الصفحة (DOM) --- */


document.addEventListener('DOMContentLoaded', () => {


    console.log("تم تحميل BarberFlow-Pro بنجاح!");


    /* --- 2. التحكم في مظهر شريط التنقل عند التمرير (Sticky Effect) --- */


    const nav = document.querySelector('nav');


    window.addEventListener('scroll', () => {


        if (window.scrollY > 50) {


            /* --- إضافة ظل عند النزول للأسفل --- */


            nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";


        } else {


            /* --- إزالة الظل عند العودة للأعلى --- */


            nav.style.boxShadow = "none";


        }


    });


    /* --- 3. دالة إخفاء الرسائل التنبيهية تلقائياً --- */


    const alertBox = document.querySelector('.alert');


    if (alertBox) {


        setTimeout(() => {


            /* --- تلاشي الرسالة بعد 5 ثوانٍ --- */


            alertBox.style.display = 'none';


        }, 5000);


    }


});
