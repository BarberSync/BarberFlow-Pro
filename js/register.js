// js/register.js


/* --- 1. استيراد خدمات Firebase المطلوبة --- */


import { auth, db } from './modules/firebase-init.js';


import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


/* --- 2. الحصول على عنصر نموذج التسجيل --- */


const registerForm = document.getElementById('registerForm');


/* --- 3. إدارة حدث إرسال النموذج --- */


if (registerForm) {


    registerForm.addEventListener('submit', async (e) => {


        e.preventDefault();


        /* --- 4. جمع بيانات الحلاق والصالون من الحقول --- */


        const email = document.getElementById('email').value;


        const password = document.getElementById('password').value;


        const shopName = document.getElementById('shopName').value;


        const ownerName = document.getElementById('ownerName').value;


        const phone = document.getElementById('phone').value;


        const address = document.getElementById('address').value;


        try {


            /* --- 5. إنشاء حساب المستخدم في نظام المصادقة --- */


            const userCredential = await createUserWithEmailAndPassword(auth, email, password);


            const user = userCredential.user;


            /* --- 6. تخزين بيانات الصالون في قاعدة بيانات Firestore --- */


            await setDoc(doc(db, "salons", user.uid), {


                shopName: shopName,


                ownerName: ownerName,


                phone: phone,


                address: address,


                uid: user.uid,


                createdAt: new Date()


            });


            /* --- 7. تأكيد النجاح والتوجيه للوحة التحكم --- */


            alert("تم تسجيل صالونك بنجاح!");


            window.location.href = "dashboard.html";


        } catch (error) {


            /* --- 8. التعامل مع أخطاء التسجيل --- */


            console.error("خطأ في التسجيل:", error.message);


            alert("عذراً، حدث خطأ أثناء التسجيل: " + error.message);


        }


    });


}
