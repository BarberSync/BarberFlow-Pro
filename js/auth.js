 // --- حزمة إدارة المصادقة (Authentication) ---


import { auth, db } from "./firebase-init.js";


import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// 1. مراقبة حالة المستخدم (هل هو متصل؟)


onAuthStateChanged(auth, (user) => {


    if (user) {


        localStorage.setItem('barberUid', user.uid);


        console.log("المستخدم متصل حالياً:", user.email);


    } else {


        const currentPage = window.location.pathname;


        if (currentPage.includes("dashboard.html")) {


            window.location.href = "login.html"; // توجيه للمكان الصحيح


        }


    }


});


// 2. دالة تسجيل صالون جديد (التي كانت في register.js سابقاً)


const registerForm = document.getElementById('registerForm');


if (registerForm) {


    registerForm.addEventListener('submit', async (e) => {


        e.preventDefault();


        const email = document.getElementById('email').value;


        const password = document.getElementById('password').value;


        const shopName = document.getElementById('shopName').value;


        try {


            // إنشاء الحساب في Firebase Auth
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);


            const user = userCredential.user;


            // حفظ بيانات الصالون الإضافية في Firestore
            await setDoc(doc(db, "salons", user.uid), {


                shopName: shopName,


                ownerName: document.getElementById('ownerName').value,


                phone: document.getElementById('phone').value,


                address: document.getElementById('address').value,


                city: document.getElementById('city').value,


                uid: user.uid


            });


            alert("تم تسجيل صالونك بنجاح!");


            window.location.href = "dashboard.html";


        } catch (error) {


            console.error("خطأ في التسجيل:", error.message);


            alert("عذراً، حدث خطأ أثناء التسجيل: " + error.message);


        }


    });


}


// 3. دالة تسجيل الخروج


export const logout = () => {


    signOut(auth).then(() => {


        localStorage.clear();


        window.location.href = "index.html";


    });


};
