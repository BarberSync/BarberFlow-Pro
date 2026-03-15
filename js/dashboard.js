ملف لتعديل محتوى بطاقات الصلونات المسجلة




// js/dashboard.js


import { auth, db, storage } from './modules/firebase-init.js';


import { doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";


/**


 * 1. مراقبة حالة المستخدم وتحديث بيانات الواجهة


 */


onAuthStateChanged(auth, async (user) => {


    if (user) {


        try {


            const docRef = doc(db, "salons", user.uid);


            const docSnap = await getDoc(docRef);


            if (docSnap.exists()) {


                const data = docSnap.data();


                // تحديث النصوص في لوحة التحكم بناءً على الـ IDs الموجودة في HTML


                if (document.getElementById('displayShopName')) {


                    document.getElementById('displayShopName').innerText = data.shopName || "اسم الصالون";


                }


                if (document.getElementById('displayAddress')) {


                    document.getElementById('displayAddress').innerText = data.address || "العنوان غير محدد";


                }


                // تحديث الصور إذا كانت موجودة


                if (data.profileUrl && document.getElementById('profileImg')) {


                    document.getElementById('profileImg').src = data.profileUrl;


                }


            }


        } catch (error) {


            console.error("خطأ في جلب بيانات الصالون:", error);


        }


    } else {


        // توجيه المستخدم لصفحة الدخول إذا لم يكن مسجلاً


        window.location.href = "login.html";


    }


});


/**


 * 2. دالة تشغيل اختيار الملفات (triggerUpload)


 * مرتبطة بـ onclick في HTML الخاص بك


 */


window.triggerUpload = (id) => {


    const fileInput = document.getElementById(id);


    if (fileInput) {


        fileInput.click();


    }


};


/**


 * 3. دالة معالجة رفع الملفات (handleFileUpload)


 * مرتبطة بـ onchange في HTML الخاص بك


 */


window.handleFileUpload = async (input, type) => {


    const file = input.files[0];


    const user = auth.currentUser;


    if (!file || !user) return;


    try {


        alert("جاري رفع الصورة، يرجى الانتظار...");


        // تحديد مسار الرفع في Firebase Storage


        const storageRef = ref(storage, `salons/${user.uid}/${type}_${Date.now()}`);


        // رفع الملف


        const snapshot = await uploadBytes(storageRef, file);


        const downloadURL = await getDownloadURL(snapshot.ref);


        // تحديث الرابط في قاعدة بيانات Firestore


        const docRef = doc(db, "salons", user.uid);


        const updateData = {};


        if (type === 'profile') updateData.profileUrl = downloadURL;


        if (type === 'cover') updateData.coverUrl = downloadURL;


        await updateDoc(docRef, updateData);


        alert("تم تحديث الصورة بنجاح!");


        location.reload(); // إعادة تحميل الصفحة لرؤية التغييرات


    } catch (error) {


        console.error("خطأ في رفع الصورة:", error);


        alert("عذراً، حدث خطأ أثناء الرفع.");


    }


};


