// js/login.js


/* --- 1. استيراد الخدمات الأساسية من ملف التهيئة --- */


import { auth } from './modules/firebase-init.js';


import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


/* --- 2. الحصول على عنصر نموذج تسجيل الدخول --- */


const loginForm = document.getElementById('loginForm');


/* --- 3. التحقق من وجود النموذج قبل إضافة الحدث --- */


if (loginForm) {


    loginForm.addEventListener('submit', async (e) => {


        /* --- 4. منع السلوك الافتراضي لإعادة تحميل الصفحة --- */


        e.preventDefault();


        /* --- 5. استخراج البيانات من حقول الإدخال --- */


        const email = document.getElementById('loginEmail').value;


        const password = document.getElementById('loginPassword').value;


        try {


            /* --- 6. محاولة تسجيل الدخول عبر Firebase Auth --- */


            await signInWithEmailAndPassword(auth, email, password);


            /* --- 7. التوجيه إلى لوحة التحكم عند النجاح --- */


            window.location.href = "dashboard.html";


        } catch (error) {


            /* --- 8. معالجة أخطاء تسجيل الدخول وعرض تنبيه --- */


            console.error("خطأ في تسجيل الدخول:", error.message);


            alert("خطأ في الدخول: تأكد من البريد الإلكتروني وكلمة المرور.");


        }


    });


}
