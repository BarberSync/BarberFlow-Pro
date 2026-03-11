import { db, storage, doc, getDoc, updateDoc, ref, uploadBytes, getDownloadURL } from "./firebase-init.js";


import { logout } from "./auth.js";


const barberUid = localStorage.getItem('barberUid');


// 1. دالة القائمة المنسدلة
window.toggleMenu = () => {


    const menu = document.getElementById('settingsMenu');


    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';


};


// 2. دالة تسجيل الخروج
window.logout = logout;


// 3. تحميل بيانات الصالون عند فتح الصفحة
window.addEventListener('load', async () => {


    if (!barberUid) return window.location.href = "login.html";


    const docSnap = await getDoc(doc(db, "salons", barberUid));


    if (docSnap.exists()) {


        const data = docSnap.data();


        document.getElementById('shopNameDisplay').innerText = data.shopName;


        document.getElementById('editShopName').value = data.shopName;


        document.getElementById('editServices').value = data.services || "";


        if (data.profileUrl) document.getElementById('profileImg').src = data.profileUrl;


    }


});


// 4. تفعيل زر حفظ التعديلات
const btnUpdate = document.getElementById('btnUpdate');


if (btnUpdate) {


    btnUpdate.addEventListener('click', async () => {


        const newShopName = document.getElementById('editShopName').value;


        const newServices = document.getElementById('editServices').value;


        try {


            const salonRef = doc(db, "salons", barberUid);


            await updateDoc(salonRef, {


                shopName: newShopName,


                services: newServices


            });


            alert("تم تحديث البيانات بنجاح!");


            document.getElementById('shopNameDisplay').innerText = newShopName;


            document.getElementById('editSection').style.display = 'none';


        } catch (error) {


            alert("حدث خطأ أثناء التحديث.");


        }


    });


}


// 5. تفعيل خاصية تغيير صور البروفايل
window.uploadImage = async (file) => {


    try {


        const storageRef = ref(storage, `profiles/${barberUid}`);


        await uploadBytes(storageRef, file);


        const url = await getDownloadURL(storageRef);


        await updateDoc(doc(db, "salons", barberUid), { profileUrl: url });


        document.getElementById('profileImg').src = url;


        alert("تم تحديث الصورة!");


    } catch (error) {


        alert("فشل رفع الصورة.");


    }


};
