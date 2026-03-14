import { db, collection, getDocs } from "./firebase-init.js";


const salonsList = document.getElementById('salonsList');


window.shareSalon = async (name, city) => {


    if (navigator.share) {


        try {


            await navigator.share({
                title: name,
                text: `اكتشف صالون ${name} في مدينة ${city} عبر BarberFlow-Pro`,
                url: window.location.href,
            });


        } catch (err) {


            console.log("Error sharing:", err);


        }


    } else {


        alert("ميزة المشاركة غير مدعومة في متصفحك، يمكنك نسخ الرابط.");


    }


};


async function loadSalons() {


    try {


        const querySnapshot = await getDocs(collection(db, "salons"));


        salonsList.innerHTML = ""; 


        if (querySnapshot.empty) {


            salonsList.innerHTML = "<p style='text-align:center;'>لا يوجد صالونات مسجلة حالياً.</p>";


            return;


        }


        querySnapshot.forEach((doc) => {


            const data = doc.data();


            const card = `
                <div class="salon-card section" style="padding:0; overflow:hidden; border: 1px solid var(--gold); margin-bottom:30px;">
                    
                    <div class="profile-header" style="background-image: url('${data.coverUrl || 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800'}'); height:150px; background-size:cover; position:relative; background-position:center;">
                        <img src="${data.profileUrl || 'https://cdn-icons-png.flaticon.com/512/147/147144.png'}" 
                             class="profile-pic" 
                             style="width:80px; height:80px; border-radius:50%; border:3px solid white; position:absolute; bottom:-40px; right:20px; background:#fff;">
                    </div>
                    
                    <div class="salon-info" style="padding: 50px 20px 20px;">
                        
                        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                            <div>
                                <h3 style="margin:0;">${data.shopName}</h3>
                                <p style="color:var(--gray); font-size:0.9rem; margin:5px 0;">📍 ${data.city} - ${data.address}</p>
                            </div>
                            <button onclick="shareSalon('${data.shopName}', '${data.city}')" style="background:none; border:none; cursor:pointer; font-size:1.2rem;">🔗</button>
                        </div>

                        <p style="margin:15px 0; font-size:0.9rem;">
                            ✂️ الخدمات ✂️: ${data.services && data.services.trim() !== "" ? data.services : 'لم تذكر أي خدمات بعد'}
                        </p>

                        <div class="salon-description" style="margin-top: 15px; border-top: 1px solid #eee; padding-top: 10px;">
                            <h4 style="color: var(--gold); font-size: 0.9rem; margin-bottom:5px;">وصف أعمالنا:</h4>
                            <p style="font-size: 0.85rem; color: #666; line-height: 1.6; margin:0;">
                                ${data.workDescription || 'هنا تجد لمحة عن أفضل الخدمات والقصات التي نقدمها لزبائننا الكرام بكل احترافية.'}
                            </p>
                        </div>

                        <div class="work-gallery-container" style="margin-top: 15px;">
                            <h4 style="color: var(--gold); font-size: 0.9rem; margin-bottom:5px;">معرض الصور:</h4>
                            <div class="work-gallery" style="display:grid; grid-template-columns: repeat(3, 1fr); gap:10px;">
                                ${data.workImages ? data.workImages.map(img => `
                                    <div class="gallery-item">
                                        <img src="${img}" style="width:100%; height:80px; object-fit:cover; border-radius:8px; cursor: pointer;">
                                    </div>
                                `).join('') : '<p style="font-size: 0.8rem; color: #999;">لا توجد صور متاحة حالياً</p>'}
                            </div>
                        </div>

                        <div style="display:flex; gap:10px; margin-top:20px;">
                            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.address + ' ' + data.city)}" 
                               target="_blank" class="btn btn-outline" style="flex:1; font-size:0.8rem; padding:10px; text-align:center;">📍 الموقع</a>
                            
                            <a href="https://wa.me/${data.phone}" 
                               class="btn btn-gold" style="flex:2; font-size:0.8rem; padding:10px; text-align:center;">💬 احجز عبر واتساب</a>
                        </div>

                    </div>
                </div>
            `;


            salonsList.innerHTML += card;


        });


    } catch (error) {


        console.error("Error loading salons:", error);


        salonsList.innerHTML = "<p style='text-align:center;'>حدث خطأ أثناء تحميل البيانات.</p>";


    }


}


loadSalons();
