// js/salons.js


/* --- 1. استيراد الخدمات المطلوبة من Firebase --- */


import { db } from './modules/firebase-init.js';


import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


import { createSalonCard } from './salonCard.js';


/* --- 2. دالة جلب وعرض قائمة الصالونات من قاعدة البيانات --- */


async function loadSalons() {


    try {


        /* --- 3. جلب الوثائق من مجموعة الصالونات (Salons Collection) --- */


        const querySnapshot = await getDocs(collection(db, "salons"));


        const salonsList = document.getElementById('salonsList');


        


        /* --- 4. تنظيف القائمة قبل العرض --- */


        salonsList.innerHTML = ""; 


        


        /* --- 5. التحقق من وجود بيانات --- */


        if (querySnapshot.empty) {


            salonsList.innerHTML = "<p style='text-align:center;'>لا يوجد صالونات مسجلة حالياً.</p>";


            return;


        }


        


        /* --- 6. تكرار البيانات وإضافتها للقائمة --- */


        querySnapshot.forEach((doc) => {


            const data = doc.data();


            


            /* --- استخدام المكون المنفصل لعرض البطاقة --- */


            salonsList.innerHTML += createSalonCard(data);


        });


    } catch (error) {


        /* --- 7. معالجة الأخطاء أثناء الاتصال بقاعدة البيانات --- */


        console.error("Error loading salons:", error);


        document.getElementById('salonsList').innerHTML = "<p style='text-align:center;'>حدث خطأ أثناء تحميل البيانات.</p>";


    }


}


/* --- 8. استدعاء الدالة لبدء عملية التحميل --- */


loadSalons();
