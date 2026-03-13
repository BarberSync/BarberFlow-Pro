// --- 1. استيراد خدمات Firebase ---
import { auth, db } from "./firebase-init.js";


import { 
    doc, 
    getDoc, 
    updateDoc 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// --- 2. التحقق من حالة تسجيل الدخول ---\
// يتم تنفيذ هذا الكود تلقائياً عند فتح الصفحة
onAuthStateChanged(auth, async (user) => {


    if (user) {


        // إذا كان المستخدم مسجلاً، نقوم بجلب بياناته
        await loadSalonData(user.uid);


    } else {


        // إذا لم يكن مسجلاً، نوجهه لصفحة الدخول
        window.location.href = "login.html";


    }


});


// --- 3. دالة جلب وعرض بيانات الصالون ---\
async function loadSalonData(uid) {


    try {


        const docRef = doc(db, "salons", uid);


        const docSnap = await getDoc(docRef);


        if (docSnap.exists()) {


            const data = docSnap.data();


            // تحديث اسم الصالون في الصفحة
            document.getElementById('display-salon-name').innerText = data.shopName;


        }


    } catch (error) {


        console.error("خطأ في تحميل البيانات:", error);


    }


}


// --- 4. دالة تعديل اسم الصالون ---\
// تُستدعى هذه الدالة من ملف events.js عند الضغط على زر التعديل
export async function editSalonName() {


    const user = auth.currentUser;


    const newName = prompt("أدخل اسم الصالون الجديد:");


    if (newName && user) {


        try {


            // تحديث الاسم في قاعدة بيانات Firestore
            await updateDoc(doc(db, "salons", user.uid), { shopName: newName });


            // تحديث العرض في الصفحة مباشرة
            document.getElementById('display-salon-name').innerText = newName;


            alert("تم تحديث اسم الصالون بنجاح!");


        } catch (error) {


            console.error("خطأ في التعديل:", error);


            alert("حدث خطأ أثناء التعديل.");


        }


    }


}
