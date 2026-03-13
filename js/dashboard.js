import { auth, db } from "./firebase-init.js";


import { doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// --- 1. التحقق من هوية المستخدم عند دخول الصفحة ---


onAuthStateChanged(auth, async (user) => {


    if (user) {


        await loadSalonData(user.uid);


    } else {


        window.location.href = "login.html";


    }


});


// --- 2. دالة جلب وعرض بيانات الصالون ---


async function loadSalonData(uid) {


    try {


        const docRef = doc(db, "salons", uid);


        const docSnap = await getDoc(docRef);


        if (docSnap.exists()) {


            const data = docSnap.data();


            document.getElementById('display-salon-name').innerText = data.shopName;


        }


    } catch (error) {


        console.error("خطأ في تحميل البيانات:", error);


    }


}


// --- 3. الدوال الوظيفية (تُستدعى من events.js) ---


export async function editSalonName() {


    const user = auth.currentUser;


    const newName = prompt("أدخل اسم الصالون الجديد:");


    if (newName && user) {


        try {


            await updateDoc(doc(db, "salons", user.uid), { shopName: newName });


            document.getElementById('display-salon-name').innerText = newName;


            alert("تم التحديث بنجاح!");


        } catch (error) {


            alert("حدث خطأ أثناء التحديث");


        }


    }


}
