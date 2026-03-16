// js/salonCard.js


/* --- 1. دالة إنشاء هيكلية بطاقة الصالون (Component) --- */


export function createSalonCard(data) {


    const shopName = data.shopName || 'صالون غير مسمى';


    const address = data.address || 'العنوان غير متوفر';


    const ownerName = data.ownerName || 'غير متوفر';


    const phone = data.phone ? `https://wa.me/${data.phone.replace(/[^0-9]/g, '')}` : '#';


    /* --- 2. إرجاع قالب الـ HTML للبطاقة مع تحسين عرض البيانات --- */


    return `


        <div class="salon-card">


            <div class="salon-info">


                <h3>${shopName}</h3>


                <p>📍 ${address}</p>


                <p>👤 الحلاق: ${ownerName}</p>


                <div class="actions">


                    <a href="${phone}" class="btn btn-gold" target="_blank" rel="noopener noreferrer">


                        💬 تواصل عبر واتساب


                    </a>


                </div>


            </div>


        </div>


    `;


}
