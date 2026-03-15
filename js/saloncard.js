// js/salonCard.js


export function createSalonCard(data) {


    return `
        <div class="salon-card section" style="padding:0; overflow:hidden; border: 1px solid var(--gold); margin-bottom:30px;">
            
            <div class="salon-info" style="padding: 20px;">
                
                <h3 style="margin:0;">${data.shopName || 'اسم الصالون غير متوفر'}</h3>
                
                <p style="color:var(--gray); font-size:0.9rem; margin:5px 0;">📍 ${data.address || 'العنوان غير متوفر'}</p>
                
                <p style="margin:15px 0; font-size:0.9rem;">
                    👤 الحلاق: ${data.ownerName || 'غير متوفر'}
                </p>

                <div style="display:flex; gap:10px; margin-top:20px;">
                    <a href="https://wa.me/${data.phone}" 
                       class="btn btn-gold" style="flex:1; font-size:0.8rem; padding:10px; text-align:center;">💬 تواصل عبر واتساب</a>
                </div>

            </div>
        </div>
    `;


}
