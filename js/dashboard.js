// js/dashboard.js


/* --- 1. استيراد المكتبات والخدمات --- */


import { auth, db } from './modules/firebase-init.js';


import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


/* --- 2. دالة إدارة النوافذ المنبثقة (Reusable Modal Handler) --- */


const toggleModal = (id, display) => {


    const modal = document.getElementById(id);


    if (modal) modal.style.display = display;


};


/* --- 3. دالة جلب بيانات الصالون وتحديث الواجهة --- */


const loadSalonData = async (uid) => {


    try {


        const docRef = doc(db, "salons", uid);


        const docSnap = await getDoc(docRef);


        if (docSnap.exists()) {


            const data = docSnap.data();


            const nameEl = document.getElementById('displayShopName');


            const addrEl = document.getElementById('displayAddress');


            if (nameEl) nameEl.innerText = data.shopName;


            if (addrEl) addrEl.innerText = data.address;


        }


    } catch (error) {


        console.error("خطأ في جلب البيانات:", error);


    }


};


/* --- 4. تهيئة الأحداث (Event Listeners) --- */


document.addEventListener('DOMContentLoaded', () => {


    const btnSettings = document.getElementById('btn-settings');


    const btnLogout = document.getElementById('btn-logout');


    if (btnSettings) btnSettings.addEventListener('click', () => toggleModal('salonModal', 'block'));


    if (btnLogout) {


        btnLogout.addEventListener('click', async () => {


            if (confirm("هل أنت متأكد من تسجيل الخروج؟")) {


                await signOut(auth);


                window.location.href = "index.html";


            }


        });


    }


});


/* --- 5. مراقبة حالة المستخدم (Auth State) --- */


onAuthStateChanged(auth, (user) => {


    if (user) {


        loadSalonData(user.uid);


    } else {


        window.location.href = "login.html";


    }


});
