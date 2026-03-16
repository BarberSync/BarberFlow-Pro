// js/salons.js


/* --- 1. استيراد الخدمات المطلوبة --- */


import { db } from './modules/firebase-init.js';


import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// تم تصحيح اسم الملف هنا ليتطابق مع اسم الملف الفعلي لديك
import { createSalonCard } from './saloncard.js';


/* --- 2. دالة جلب وعرض الصالونات --- */


export const fetchAndDisplaySalons = async () => {


    const salonsList = document.getElementById('salonsList');


    if (!salonsList) return;


    try {


        const querySnapshot = await getDocs(collection(db, "salons"));


        salonsList.innerHTML = "";


        querySnapshot.forEach((doc) => {


            const salonData = doc.data();


            salonsList.innerHTML += createSalonCard(salonData);


        });


    } catch (error) {


        console.error("خطأ في جلب الصالونات:", error);


    }


};


/* --- 3. استدعاء الدالة --- */


document.addEventListener('DOMContentLoaded', fetchAndDisplaySalons);
