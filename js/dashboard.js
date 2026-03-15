ملف لتعديل محتوى بطاقات الصلونات المسجلة




// js/dashboard.js


import { auth, db } from './modules/firebase-init.js';


import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// التأكد من هوية المستخدم عند تحميل الصفحة


onAuthStateChanged(auth, async (user) => {


    if (user) {


        const docRef = doc(db, "salons", user.uid);


        const docSnap = await getDoc(docRef);


        if (docSnap.exists()) {


            const data = docSnap.data();


            document.getElementById('displayShopName').innerText = data.shopName || "اسم الصالون";


            document.getElementById('displayAddress').innerText = data.address || "العنوان غير محدد";


        }


    } else {


        // إذا لم يكن مسجلاً، العودة لصفحة الدخول


        window.location.href = "login.html";


    }


});


