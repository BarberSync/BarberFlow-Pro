import { auth, db } from "./firebase-init.js";


import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


import { 
    doc, 
    setDoc 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// دالة تسجيل صالون جديد
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


// دالة تسجيل الدخول
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


// دالة تسجيل الخروج
export const logout = async () => {


    try {


        await signOut(auth);


        window.location.href = "login.html";


    } catch (error) {


        console.error("خطأ أثناء الخروج:", error);


    }


};
