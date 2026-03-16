// js/salonCard.js


/* --- 1. دالة إنشاء هيكلية بطاقة الصالون (Component) --- */


export function createSalonCard(data) {


    /* --- 2. إرجاع قالب الـ HTML للبطاقة باستخدام Template Literals --- */


    return `


        <div class="salon-card">


            


            <div class="salon-info">


                


                <h3>${data.shopName || 'اسم الصالون غير متوفر'}</h3>


                


                <p>📍 ${data.address || 'العنوان غير متوفر'}</p>


                


                <p>👤 الحلاق: ${data.ownerName || 'غير متوفر'}</p>


                


                <div class="actions">


                    <a href="https://wa.me/${data.phone}" class="btn btn-gold">


                        💬 تواصل عبر واتساب


                    </a>


                </div>


            </div>


        </div>


    `;


}
