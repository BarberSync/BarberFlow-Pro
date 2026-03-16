// js/salons.js


import { db } from './firebase-init.js';


import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


import { createSalonCard } from './saloncard.js';


async function loadSalons() {


    const salonsList = document.getElementById('salonsList');


    if (!salonsList) return;


    try {


        // جلب البيانات من مجموعة "salons"
        const querySnapshot = await getDocs(collection(db, "salons"));


        salonsList.innerHTML = ""; 


        if (querySnapshot.empty) {


            salonsList.innerHTML = "<p style='text-align:center;'>لا يوجد صالونات مسجلة حالياً.</p>";


            return;


        }


        querySnapshot.forEach((doc) => {


            const data = doc.data();


            // إضافة البطاقة
            salonsList.innerHTML += createSalonCard(data);


        });


    } catch (error) {


        console.error("خطأ في جلب الصالونات:", error);


        salonsList.innerHTML = "<p style='text-align:center;'>حدث خطأ أثناء تحميل البيانات.</p>";


    }


}


// تنفيذ الدالة
document.addEventListener('DOMContentLoaded', loadSalons);
