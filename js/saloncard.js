// js/salonCard.js


/* --- 1. دالة إنشاء هيكلية بطاقة الصالون (Component) --- */


export function createSalonCard(data) {


    const shopName = data.shopName || 'صالون غير مسمى';


    const address = data.address || 'العنوان غير متوفر';


    const ownerName = data.ownerName || 'غير متوفر';


    const phone = data.phone ? `https://wa.me/${data.phone.replace(/[^0-9]/g, '')}` : '#';


    /* --- 2. إرجاع قالب الـ HTML للبطاقة متوافقاً مع card.css --- */


    return `


        <div class="salon-card">


            <div class="profile-header" style="background-image: url('images/default-salon.jpg');">


                <img src="images/default-avatar.png" class="profile-pic" alt="صورة الصالون">


            </div>


            <div class="salon-info">


                <h3>${shopName}</h3>


                <p>📍 ${address}</p>


                <p>👤 الحلاق: ${ownerName}</p>


                <div class="salon-description">


                    <p>صالون احترافي يقدم أفضل خدمات الحلاقة والعناية بالشعر.</p>


                </div>


                <div class="actions" style="margin-top: 15px;">


                    <a href="${phone}" class="btn btn-gold" target="_blank" rel="noopener noreferrer">


                        💬 تواصل عبر واتساب


                    </a>


                </div>


            </div>


        </div>


    `;


}
