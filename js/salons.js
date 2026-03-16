// js/salons.js


import { db } from './modules/firebase-init.js';


import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// تأكد من مطابقة اسم الملف تماماً (إذا كان ملفك saloncard.js استخدم هذا السطر)
import { createSalonCard } from './saloncard.js';


/* --- دالة عرض البيانات --- */


export const fetchAndDisplaySalons = async () => {


    const salonsList = document.getElementById('salonsList');


    if (!salonsList) return;


    try {


        const querySnapshot = await getDocs(collection(db, "salons"));


        salonsList.innerHTML = ""; // مسح النص السابق


        querySnapshot.forEach((doc) => {


            const salonData = doc.data();


            console.log("جاري معالجة بيانات:", salonData); // للتحقق من وصول البيانات


            salonsList.innerHTML += createSalonCard(salonData);


        });


    } catch (error) {


        console.error("خطأ في جلب الصالونات:", error);


    }


};
