import { auth, db } from "./firebase-init.js";
import { doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// --- ربط الأزرار عند تحميل الصفحة ---
document.addEventListener('DOMContentLoaded', () => {
    // ربط الأزرار بالوظائف برمجياً
    document.getElementById('btn-settings').addEventListener('click', openSettings);
    document.getElementById('btn-edit').addEventListener('click', editData);
    document.getElementById('btn-photos').addEventListener('click', changePhotos);
    document.getElementById('btn-logout').addEventListener('click', logout);
});


// التحقق من حالة المستخدم
onAuthStateChanged(auth, async (user) => {
    if (user) {
        await loadSalonData(user.uid);
    } else {
        window.location.href = "login.html";
    }
});


// --- الوظائف ---
async function loadSalonData(uid) {


    const docRef = doc(db, "salons", uid);


    const docSnap = await getDoc(docRef);


    if (docSnap.exists()) {


        document.getElementById('display-salon-name').innerText = docSnap.data().shopName;


    }


}



function editData() {


    const user = auth.currentUser;


    const newName = prompt("أدخل اسم الصالون الجديد:");


    if (newName) {


        updateDoc(doc(db, "salons", user.uid), { shopName: newName })


        .then(() => {


            document.getElementById('display-salon-name').innerText = newName;


            alert("تم التحديث!");


        });


    }


}



function logout() {
    signOut(auth).then(() => window.location.href = "login.html");
}


function openSettings() { alert("جاري فتح الإعدادات..."); }
function changePhotos() { alert("ميزة رفع الصور قيد التطوير..."); }
