import { auth, db, storage } from './modules/firebase-init.js';


import { doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";


// --- منطق التحكم بالنوافذ (بدلاً من events.js) ---


const openModal = (id) => {


    const modal = document.getElementById(id);


    if (modal) modal.style.display = "block";


};


const closeModal = (id) => {


    const modal = document.getElementById(id);


    if (modal) modal.style.display = "none";


};


// --- ربط الأزرار ---


document.addEventListener('DOMContentLoaded', () => {


    const btnSettings = document.getElementById('btn-settings');


    if (btnSettings) btnSettings.addEventListener('click', () => openModal('salonModal'));


    const btnEdit = document.getElementById('btn-edit');


    if (btnEdit) btnEdit.addEventListener('click', () => openModal('loginModal'));


    // إغلاق النافذة عند النقر خارج المحتوى


    window.onclick = (event) => {


        if (event.target.classList.contains('modal')) {


            event.target.style.display = "none";


        }


    };


});


// --- جلب بيانات المستخدم ---


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
