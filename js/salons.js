// js/salons.js


import { db } from './modules/firebase-init.js';


import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


import { createSalonCard } from './salonCard.js';


async function loadSalons() {


    try {


        const querySnapshot = await getDocs(collection(db, "salons"));


        const salonsList = document.getElementById('salonsList');


        salonsList.innerHTML = ""; 


        if (querySnapshot.empty) {


            salonsList.innerHTML = "<p style='text-align:center;'>لا يوجد صالونات مسجلة حالياً.</p>";


            return;


        }


        querySnapshot.forEach((doc) => {


            const data = doc.data();


            // استخدام المكون المنفصل لعرض البطاقة


            salonsList.innerHTML += createSalonCard(data);


        });


    } catch (error) {


        console.error("Error loading salons:", error);


        document.getElementById('salonsList').innerHTML = "<p style='text-align:center;'>حدث خطأ أثناء تحميل البيانات.</p>";


    }


}


loadSalons();
