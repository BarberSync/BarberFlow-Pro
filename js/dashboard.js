import { db, storage, doc, getDoc, updateDoc, collection, query, where, getDocs } from "./firebase-init.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { logout } from "./auth.js";

const barberUid = localStorage.getItem('barberUid');

// 1. تحميل بيانات الصالون الحالية عند فتح الصفحة
async function loadDashboard() {
    if (!barberUid) return window.location.href = "login.html";

    const docRef = doc(db, "salons", barberUid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        const shopNameInput = document.getElementById('editShopName');
        const servicesInput = document.getElementById('editServices');
        
        if (shopNameInput) shopNameInput.value = data.shopName || "";
        if (servicesInput) servicesInput.value = data.services || "";
        
        loadBookings();
    }
}

// 2. رفع الصور
async function handleUpload(type) {
    const fileInput = document.getElementById(type + 'Input');
    const file = fileInput.files[0];
    
    if (!file) return alert("الرجاء اختيار صورة أولاً!");

    try {
        const storageRef = ref(storage, `salons/${barberUid}/${type}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        
        await updateDoc(doc(db, "salons", barberUid), { [type + 'Url']: url });
        alert("تم رفع الصورة بنجاح!");
        location.reload();
    } catch (error) {
        alert("خطأ في الرفع: " + error.message);
    }
}

// 3. تحميل جدول الحجوزات
async function loadBookings() {
    const q = query(collection(db, "bookings"), where("salonId", "==", barberUid));
    const querySnapshot = await getDocs(q);
    const tbody = document.getElementById('bookingsBody');
    if (!tbody) return;
    
    tbody.innerHTML = "";

    if (querySnapshot.empty) {
        tbody.innerHTML = "<tr><td colspan='3'>لا توجد حجوزات حالياً</td></tr>";
        return;
    }

    querySnapshot.forEach((doc) => {
        const b = doc.data();
        tbody.innerHTML += `<tr><td>${b.customerName}</td><td>${b.date}</td><td>${b.status}</td></tr>`;
    });
}

// --- الربط البرمجي بعد تحميل الصفحة بالكامل ---
document.addEventListener('DOMContentLoaded', () => {
    
    // ربط زر الخروج
    document.getElementById('btnLogout')?.addEventListener('click', logout);

    // ربط زر تحديث البيانات
    document.getElementById('btnUpdate')?.addEventListener('click', async () => {
        try {
            await updateDoc(doc(db, "salons", barberUid), {
                shopName: document.getElementById('editShopName').value,
                services: document.getElementById('editServices').value
            });
            alert("تم حفظ التعديلات!");
        } catch (e) {
            alert("حدث خطأ: " + e.message);
        }
    });

    // ربط أزرار رفع الصور
    document.getElementById('btnUploadCover')?.addEventListener('click', () => handleUpload('cover'));
    document.getElementById('btnUploadProfile')?.addEventListener('click', () => handleUpload('profile'));

    // بدء تحميل البيانات
    loadDashboard();
});
