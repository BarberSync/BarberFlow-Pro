// استيراد التهيئة الموحدة لقاعدة البيانات والمصادقة


import { auth, db } from './modules/firebase-init.js';


import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// الحصول على عنصر النموذج من الصفحة


const registerForm = document.getElementById('registerForm');


// التحقق من وجود النموذج في الصفحة قبل إضافة مستمع الحدث


if (registerForm) {


    registerForm.addEventListener('submit', async (e) => {


        e.preventDefault();


        // جمع البيانات من حقول register.html


        const email = document.getElementById('email').value;


        const password = document.getElementById('password').value;


        const shopName = document.getElementById('shopName').value;


        const ownerName = document.getElementById('ownerName').value;


        const phone = document.getElementById('phone').value;


        const address = document.getElementById('address').value;


        try {


            // 1. إنشاء الحساب في Firebase Auth


            const userCredential = await createUserWithEmailAndPassword(auth, email, password);


            const user = userCredential.user;


            // 2. تخزين بيانات الصالون الإضافية في Firestore


            await setDoc(doc(db, "salons", user.uid), {


                shopName: shopName,


                ownerName: ownerName,


                phone: phone,


                address: address,


                uid: user.uid,


                createdAt: new Date()


            });


            alert("تم تسجيل صالونك بنجاح!");


            window.location.href = "dashboard.html";


        } catch (error) {


            console.error("خطأ في التسجيل:", error.message);


            alert("عذراً، حدث خطأ أثناء التسجيل: " + error.message);


        }


    });


}
