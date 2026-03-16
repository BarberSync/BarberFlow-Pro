// js/salons.js


// تصحيح مسار الاستيراد ليتوافق مع هيكلة ملفاتك
import { db } from './firebase-init.js';


import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


import { createSalonCard } from './saloncard.js';


async function loadSalons() {


    const salonsList = document.getElementById('salonsList');


    if (!salonsList) return;


    try {


        // جلب بيانات الصالونات من قاعدة البيانات
        const querySnapshot = await getDocs(collection(db, "salons"));


        salonsList.innerHTML = '';


        if (querySnapshot.empty) {


            salonsList.innerHTML = '<p style="text-align: center;">لا توجد صالونات مسجلة حالياً.</p>';


            return;


        }


        // عرض الصالونات في الصفحة
        querySnapshot.forEach((doc) => {


            const salonData = doc.data();


            // إنشاء البطاقة وإضافتها
            const salonElement = document.createElement('div');


            salonElement.innerHTML = createSalonCard(salonData);


            salonsList.appendChild(salonElement.firstElementChild);


        });


    } catch (error) {


        console.error("خطأ في جلب الصالونات: ", error);


        salonsList.innerHTML = '<p style="text-align: center; color: red;">حدث خطأ أثناء تحميل الصالونات.</p>';


    }


}


// تنفيذ الدالة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', loadSalons);
