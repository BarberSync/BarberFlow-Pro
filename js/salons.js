// js/salons.js


/* --- 1. استيراد الخدمات المطلوبة --- */


import { db } from './modules/firebase-init.js';


import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


import { createSaloncard } from './saloncard.js';


/* --- 2. دالة جلب وعرض الصالونات من Firestore --- */


export const fetchAndDisplaySalons = async () => {


    const salonsList = document.getElementById('salonsList');


    if (!salonsList) return;


    try {


        salonsList.innerHTML = "<p>جاري جلب الصالونات...</p>";


        const querySnapshot = await getDocs(collection(db, "salons"));


        salonsList.innerHTML = "";


        querySnapshot.forEach((doc) => {


            const salonData = doc.data();


            salonsList.innerHTML += createSalonCard(salonData);


        });


    } catch (error) {


        console.error("خطأ في جلب الصالونات:", error);


        salonsList.innerHTML = "<p>حدث خطأ أثناء تحميل البيانات، يرجى المحاولة لاحقاً.</p>";


    }


};


/* --- 3. استدعاء الدالة عند تحميل الصفحة --- */


document.addEventListener('DOMContentLoaded', fetchAndDisplaySalons);
