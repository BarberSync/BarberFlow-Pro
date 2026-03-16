//هذا الملف مخصص لتنظيم دوال تسجيل الدخول، الخروج، وإنشاء الحسابات بشكل مستقل.

// js/auth.js


/* --- 1. استيراد الخدمات من ملف التهيئة المركزي --- */


import { auth, db } from "./modules/firebase-init.js";


/* --- 2. استيراد وظائف Firebase المطلوبة للمصادقة وقاعدة البيانات --- */


import { 


    createUserWithEmailAndPassword, 


    signInWithEmailAndPassword, 


    signOut 


} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


import { 


    doc, 


    setDoc 


} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


/* --- 3. دالة تسجيل صالون جديد (SignUp) --- */


export const signUp = async (email, password, shopName, ownerName, phone, address) => {


    try {


        /* --- 4. إنشاء حساب المستخدم في نظام Firebase Auth --- */


        const userCredential = await createUserWithEmailAndPassword(auth, email, password);


        const user = userCredential.user;


        /* --- 5. تخزين بيانات الصالون في Firestore وربطها بـ UID المستخدم --- */


        await setDoc(doc(db, "salons", user.uid), {


            shopName: shopName,


            ownerName: ownerName,


            phone: phone,


            address: address,


            uid: user.uid,


            createdAt: new Date()


        });


        /* --- 6. إشعار النجاح والتوجيه للوحة التحكم --- */


        alert("تم تسجيل صالونك بنجاح!");


        window.location.href = "dashboard.html";


    } catch (error) {


        /* --- 7. التعامل مع أخطاء التسجيل وعرضها --- */


        console.error("خطأ في التسجيل:", error.message);


        alert("عذراً، حدث خطأ أثناء التسجيل: " + error.message);


    }


};


/* --- 8. دالة تسجيل الدخول (Login) --- */


export const login = async (email, password) => {


    try {


        /* --- 9. تنفيذ محاولة تسجيل الدخول --- */


        await signInWithEmailAndPassword(auth, email, password);


        /* --- 10. التوجيه لصفحة الإدارة عند النجاح --- */


        window.location.href = "dashboard.html";


    } catch (error) {


        /* --- 11. التعامل مع خطأ بيانات الدخول --- */


        console.error("خطأ في الدخول:", error.message);


        alert("خطأ في الدخول: تأكد من البريد وكلمة المرور");


    }


};
