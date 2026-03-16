// js/salonCard.js


/* --- دالة إنشاء بطاقة الصالون - الهيكل المحدث --- */


export function createSalonCard(data) {


    /* --- 1. البيانات الإجبارية (موجودة دائماً) --- */


    const shopName = data.shopName;


    const address = data.address;


    const ownerName = data.ownerName;


    const phoneLink = `https://wa.me/${data.phone.replace(/[^0-9]/g, '')}`;


    /* --- 2. البيانات الاختيارية (تظهر فقط إذا توفرت) --- */


    const headerImg = data.headerImage || 'images/background.jpg.PNG';


    const profileImg = data.profilePic || 'images/avatar.jpg.PNG';


    const description = data.description ? `<div class="salon-description"><p>${data.description}</p></div>` : '';


    const services = data.services ? `<div class="salon-services"><p>الخدمات: ${data.services}</p></div>` : '';


    /* --- 3. بناء هيكل البطاقة HTML --- */


    return `


        <div class="salon-card">


            <div class="profile-header" style="background-image: url('${headerImg}');">


                <img src="${profileImg}" class="profile-pic" alt="صورة الصالون">


            </div>


            <div class="salon-info">


                <h3>${shopName}</h3>


                <p>📍 ${address}</p>


                <p>👤 الحلاق: ${ownerName}</p>


                ${description}


                ${services}


                <div class="actions">


                    <a href="${phoneLink}" class="btn btn-gold" target="_blank">💬 واتساب</a>


                    <button class="btn btn-outline" onclick="alert('قريباً: نظام الحجز المباشر')">📅 احجز الآن</button>


                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}" 


                       class="btn btn-outline" target="_blank">📍 الخريطة</a>


                </div>


            </div>


        </div>


    `;


}
