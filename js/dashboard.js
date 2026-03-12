

// استيراد الأدوات اللازمة من ملف الـ Firebase الخاص بك


import { auth, db, doc, updateDoc, onAuthStateChanged, signOut } from "./firebase-init.js";


import { getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// --- حزمة التحقق من الهوية واسترجاع البيانات ---


onAuthStateChanged(auth, async (user) => {


    if (user) {


        console.log("تم تسجيل الدخول:", user.email);


        await loadSalonData(user.uid);


    } else {


        window.location.href = "login.html";


    }


});


async function loadSalonData(uid) {


    try {


        const docRef = doc(db, "salons", uid);


        const docSnap = await getDoc(docRef);


        if (docSnap.exists()) {


            const data = docSnap.data();


            document.getElementById('display-salon-name').innerText = data.name || "اسم الصالون";


        } else {


            console.log("لا توجد بيانات لهذا الصالون في Firestore");


        }


    } catch (error) {


        console.error("خطأ في جلب البيانات:", error);


    }


}


// --- حزمة الأزرار والوظائف (تعريفها كأحداث Window لتعمل مع HTML) ---


window.editData = async function() {


    const user = auth.currentUser;


    if (!user) return;


    const newName = prompt("أدخل اسم الصالون الجديد:");


    if (newName && newName.trim() !== "") {


        try {


            const salonRef = doc(db, "salons", user.uid);


            await updateDoc(salonRef, { name: newName });


            document.getElementById('display-salon-name').innerText = newName;


            alert("تم تحديث الاسم بنجاح!");


        } catch (error) {


            alert("خطأ في التحديث: " + error.message);


        }


    }


};


window.logout = function() {


    if (confirm("هل تريد تسجيل الخروج؟")) {


        signOut(auth).then(() => {


            window.location.href = "login.html";


        });


    }


};


window.changePhotos = function() {


    alert("هذه الميزة ستستخدم Firebase Storage قريباً.");


};


window.openSettings = function() {


    alert("جاري فتح الإعدادات...");


};


