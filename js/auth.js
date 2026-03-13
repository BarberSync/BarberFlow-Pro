// استيراد قاعدة بيانات Firebase وخدمة المصادقة
import { auth, db } from "./firebase-init.js";


// استيراد وظائف Firebase للتعامل مع الحسابات (تسجيل، دخول، خروج)
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// استيراد وظائف Firestore لإنشاء وتحديث وثائق الصالونات
import { 
    doc, 
    setDoc 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


/**
 * دالة تسجيل صالون جديد:
 * تقوم بإنشاء مستخدم جديد في Firebase Auth،
 * ثم تخزن تفاصيل الصالون في Firestore.
 */
export const signUp = async (email, password, shopName, ownerName, phone, address) => {


    try {


        const userCredential = await createUserWithEmailAndPassword(auth, email, password);


        const user = userCredential.user;


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


};


/**
 * دالة تسجيل الدخول:
 * تقوم بالتحقق من بريد وكلمة مرور الحلاق،
 * وفي حال النجاح يتم توجيهه إلى لوحة التحكم.
 */
export const login = async (email, password) => {


    try {


        await signInWithEmailAndPassword(auth, email, password);


        alert("تم تسجيل الدخول بنجاح!");


        window.location.href = "dashboard.html";


    } catch (error) {


        console.error("خطأ في الدخول:", error.message);


        alert("خطأ في الدخول: تأكد من البريد وكلمة المرور");


    }


};


/**
 * دالة تسجيل الخروج:
 * تقوم بإنهاء جلسة المستخدم الحالية
 * وتوجهه إلى صفحة تسجيل الدخول.
 */
export const logout = async () => {


    try {


        await signOut(auth);


        window.location.href = "login.html";


    } catch (error) {


        console.error("خطأ في تسجيل الخروج:", error.message);


    }


};
