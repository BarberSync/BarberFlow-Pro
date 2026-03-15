import { db } from './modules/firebase-init.js';


import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


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


            const card = `
                <div class="salon-card section" style="padding:0; overflow:hidden; border: 1px solid var(--gold); margin-bottom:30px;">
                    
                    <div class="salon-info" style="padding: 20px;">
                        
                        <h3 style="margin:0;">${data.shopName || 'اسم الصالون غير متوفر'}</h3>
                        
                        <p style="color:var(--gray); font-size:0.9rem; margin:5px 0;">📍 ${data.address || 'العنوان غير متوفر'}</p>
                        
                        <p style="margin:15px 0; font-size:0.9rem;">
                            📞 هاتف: ${data.phone || 'غير متوفر'}
                        </p>

                        <div style="display:flex; gap:10px; margin-top:20px;">
                            <a href="https://wa.me/${data.phone}" 
                               class="btn btn-gold" style="flex:1; font-size:0.8rem; padding:10px; text-align:center;">💬 تواصل عبر واتساب</a>
                        </div>

                    </div>
                </div>
            `;


            salonsList.innerHTML += card;


        });


    } catch (error) {


        console.error("Error loading salons:", error);


        document.getElementById('salonsList').innerHTML = "<p style='text-align:center;'>حدث خطأ أثناء تحميل البيانات.</p>";


    }


}


loadSalons();
