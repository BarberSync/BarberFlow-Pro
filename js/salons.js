// js/salons.js
import { db, collection, getDocs } from "./firebase-init.js";


const salonsList = document.getElementById('salonsList');


// دالة مشاركة الصالون
window.shareSalon = async (name, city) => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: name,
                text: `اكتشف صالون ${name} في مدينة ${city}`
            });
        } catch (err) { console.log("خطأ في المشاركة", err); }
    }
};


// دالة جلب الصالونات
async function loadSalons() {
    try {
        const querySnapshot = await getDocs(collection(db, "salons"));
        salonsList.innerHTML = ''; // تفريغ القائمة قبل التحميل


        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const card = `
                <div class="salon-card">
                    <h3>${data.shopName}</h3>
                    <p>العنوان: ${data.address}</p>
                    <button onclick="shareSalon('${data.shopName}', '${data.city || 'غير محددة'}')">مشاركة</button>
                </div>
            `;
            salonsList.innerHTML += card;
        });
    } catch (error) {
        console.error("خطأ أثناء التحميل:", error);
    }
}


// تشغيل الدالة عند تحميل الصفحة
loadSalons();
