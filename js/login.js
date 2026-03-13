// استيراد الخدمات الأساسية والمصادقة


import { auth } from './firebase-init.js';


import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// الحصول على عنصر النموذج من الصفحة


const loginForm = document.getElementById('loginForm');


// التحقق من وجود النموذج قبل إضافة مستمع الحدث لمنع أي تداخل


if (loginForm) {


    loginForm.addEventListener('submit', async (e) => {


        e.preventDefault();


        // الحصول على قيم المدخلات


        const email = document.getElementById('loginEmail').value;


        const password = document.getElementById('loginPassword').value;


        try {


            // تنفيذ عملية تسجيل الدخول


            await signInWithEmailAndPassword(auth, email, password);


            // التوجيه إلى لوحة التحكم عند النجاح


            window.location.href = "dashboard.html";


        } catch (error) {


            console.error("خطأ في تسجيل الدخول:", error.message);


            alert("خطأ في الدخول: تأكد من البريد الإلكتروني وكلمة المرور.");


        }


    });


}
