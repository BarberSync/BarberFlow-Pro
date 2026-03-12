// js/salons.jsايات
import { db, collection, getDocs } from "./firebase-init.js";


const salonsList = document.getElementById('salonsList');


// دالة مشاركة الصالون (الوظيفة التي فقدتها)
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


// دالة جلب الصالونات وتنسيق البطاقات
async function loadSalons() {
    try {
        const querySnapshot = await getDocs(collection(db, "salons"));
        salonsList.innerHTML = '';


        querySnapshot.forEach((doc) => {
            const data = doc.data();
            
            // هنا التصميم الكامل للبطاقة كما كان في ملفك الأصلي
            const card = `
                <div class="salon-card" style="background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 20px rgba(0,0,0,0.1); margin-bottom: 30px; padding: 20px;">
                    <h3>${data.shopName}</h3>
                    <p>العنوان: ${data.address} - ${data.city || ''}</p>
                    
                    <div class="work-gallery" style="display:grid; grid-template-columns: repeat(3, 1fr); gap:10px; margin:15px 0;">
                        ${data.workImages ? data.workImages.map(img => `<img src="${img}" style="width:100%; height:70px; object-fit:cover; border-radius:8px;">`).join('') : ''}
                    </div>

                    <div style="display:flex; gap:10px; margin-top:20px;">
                        <a href="https://maps.google.com/?q=${encodeURIComponent(data.address + ' ' + (data.city || ''))}" 
                           target="_blank" class="btn btn-outline" style="flex:1; text-align:center; padding:10px; border:1px solid #ccc; text-decoration:none; color:black;">📍 الموقع</a>
                        
                        <a href="https://wa.me/${data.phone}" 
                           class="btn btn-gold" style="flex:2; text-align:center; padding:10px; background:#d4af37; color:white; text-decoration:none;">💬 احجز عبر واتساب</a>
                    </div>
                </div>
            `;
            salonsList.innerHTML += card;
        });
    } catch (error) {
        console.error("خطأ أثناء التحميل:", error);
        salonsList.innerHTML = "<p style='text-align:center;'>حدث خطأ أثناء تحميل البيانات.</p>";
    }
}


// تشغيل الدالة
loadSalons();
