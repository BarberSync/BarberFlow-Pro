import { db, storage, doc, getDoc, updateDoc } from "./firebase-init.js";
import { logout } from "./auth.js";

const barberUid = localStorage.getItem('barberUid');

// دالة القائمة المنسدلة
window.toggleMenu = () => {
    const menu = document.getElementById('settingsMenu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
};

// دالة تسجيل الخروج
window.logout = logout;

// تحميل بيانات الصالون
window.addEventListener('load', async () => {
    if (!barberUid) return window.location.href = "login.html";

    const docSnap = await getDoc(doc(db, "salons", barberUid));
    if (docSnap.exists()) {
        const data = docSnap.data();
        document.getElementById('shopNameDisplay').innerText = data.shopName;
        document.getElementById('editShopName').value = data.shopName;
    }
});
