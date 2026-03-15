import { auth, db, storage } from './modules/firebase-init.js';


import { doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";


// --- دالة التحكم بفتح وإغلاق النوافذ ---


const openModal = (id) => {


    const modal = document.getElementById(id);


    if (modal) modal.style.display = "block";


};


const closeModal = (id) => {


    const modal = document.getElementById(id);


    if (modal) modal.style.display = "none";


};


// --- تهيئة الأحداث بعد تحميل الصفحة ---


document.addEventListener('DOMContentLoaded', () => {


    // ربط أزرار فتح النوافذ


    const btnSettings = document.getElementById('btn-settings');


    if (btnSettings) btnSettings.addEventListener('click', () => openModal('salonModal'));


    const btnEdit = document.getElementById('btn-edit');


    if (btnEdit) btnEdit.addEventListener('click', () => openModal('loginModal'));


    // ربط أزرار إغلاق النوافذ


    const closeSalon = document.getElementById('closeSalonModal');


    if (closeSalon) closeSalon.addEventListener('click', () => closeModal('salonModal'));


    const closeLogin = document.getElementById('closeLoginModal');


    if (closeLogin) closeLogin.addEventListener('click', () => closeModal('loginModal'));


    // ربط زر تسجيل الخروج


    const btnLogout = document.getElementById('btn-logout');


    if (btnLogout) {


        btnLogout.addEventListener('click', async () => {


            if (confirm("هل أنت متأكد من تسجيل الخروج؟")) {


                await signOut(auth);


                window.location.href = "index.html";


            }


        });


    }


    // إغلاق النوافذ عند النقر خارج المحتوى


    window.onclick = (event) => {


        if (event.target.classList.contains('modal')) {


            event.target.style.display = "none";


        }


    };


});


// --- جلب بيانات المستخدم وعرضها ---


onAuthStateChanged(auth, async (user) => {


    if (user) {


        const docRef = doc(db, "salons", user.uid);


        const docSnap = await getDoc(docRef);


        if (docSnap.exists()) {


            const data = docSnap.data();


            if (document.getElementById('displayShopName')) document.getElementById('displayShopName').innerText = data.shopName;


        }


    } else {


        window.location.href = "login.html";


    }


});
