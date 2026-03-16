// js/dashboard.js


/* --- 1. استيراد المكتبات والخدمات اللازمة من Firebase --- */


import { auth, db, storage } from './modules/firebase-init.js';


import { doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";


/* --- 2. وظائف التحكم في النوافذ المنبثقة (Modals) --- */


const openModal = (id) => {


    const modal = document.getElementById(id);


    if (modal) modal.style.display = "block";


};


const closeModal = (id) => {


    const modal = document.getElementById(id);


    if (modal) modal.style.display = "none";


};


/* --- 3. تهيئة الأحداث بمجرد تحميل مستند الصفحة --- */


document.addEventListener('DOMContentLoaded', () => {


    /* --- 4. ربط أزرار فتح النوافذ المنبثقة --- */


    const btnSettings = document.getElementById('btn-settings');


    if (btnSettings) btnSettings.addEventListener('click', () => openModal('salonModal'));


    const btnEdit = document.getElementById('btn-edit');


    if (btnEdit) btnEdit.addEventListener('click', () => openModal('loginModal'));


    /* --- 5. ربط أزرار إغلاق النوافذ المنبثقة --- */


    const closeSalon = document.getElementById('closeSalonModal');


    if (closeSalon) closeSalon.addEventListener('click', () => closeModal('salonModal'));


    const closeLogin = document.getElementById('closeLoginModal');


    if (closeLogin) closeLogin.addEventListener('click', () => closeModal('loginModal'));


    /* --- 6. منطق تسجيل الخروج مع التأكيد --- */


    const btnLogout = document.getElementById('btn-logout');


    if (btnLogout) {


        btnLogout.addEventListener('click', async () => {


            if (confirm("هل أنت متأكد من تسجيل الخروج؟")) {


                await signOut(auth);


                window.location.href = "index.html";


            }


        });


    }


    /* --- 7. إغلاق النافذة عند النقر في أي مكان خارجها --- */


    window.onclick = (event) => {


        if (event.target.classList.contains('modal')) {


            event.target.style.display = "none";


        }


    };


});


/* --- 8. مراقبة حالة المستخدم وجلب بيانات الصالون --- */


onAuthStateChanged(auth, async (user) => {


    if (user) {


        /* --- 9. جلب وثيقة الصالون من Firestore باستخدام UID --- */


        const docRef = doc(db, "salons", user.uid);


        const docSnap = await getDoc(docRef);


        if (docSnap.exists()) {


            const data = docSnap.data();


            /* --- 10. عرض اسم الصالون في واجهة المستخدم --- */


            if (document.getElementById('displayShopName')) {


                document.getElementById('displayShopName').innerText = data.shopName;


            }


        }


    } else {


        /* --- 11. إعادة التوجيه لصفحة الدخول إذا لم يكن المستخدم مسجلاً --- */


        window.location.href = "login.html";


    }


});
