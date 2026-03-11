// main.js - التفاعل العام للموقع

document.addEventListener('DOMContentLoaded', () => {
    console.log("تم تحميل BarberFlow-Pro بنجاح!");

    // 1. إضافة تأثير بسيط عند تمرير الصفحة (Sticky Nav Effect)
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
        } else {
            nav.style.boxShadow = "none";
        }
    });

    // 2. إغلاق الرسائل التنبيهية (Alerts) تلقائياً إذا وجدت
    const alertBox = document.querySelector('.alert');
    if (alertBox) {
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 5000);
    }
});
