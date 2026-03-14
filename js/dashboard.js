// --- 1. استيراد الخدمات الأساسية ---


import { auth, db } from "./firebase-init.js";


import { 
    doc, 
    getDoc, 
    updateDoc,
    arrayUnion 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// --- 2. التحقق من حالة تسجيل الدخول وجلب البيانات ---


onAuthStateChanged(auth, async (user) => {


    if (user) {


        await loadSalonData(user.uid);


    } else {


        window.location.href = "login.html";


    }


});


// --- 3. دالة جلب وعرض بيانات الصالون ---


async function loadSalonData(uid) {


    try {


        const docRef = doc(db, "salons", uid);


        const docSnap = await getDoc(docRef);


        if (docSnap.exists()) {


            const data = docSnap.data();


            const salonNameElement = document.getElementById('display-salon-name');


            if (salonNameElement) {


                salonNameElement.innerText = data.shopName;


            }


        }


    } catch (error) {


        console.error("خطأ في تحميل البيانات:", error);


    }


}


// --- 4. تفعيل أزرار لوحة التحكم (الوظائف الجديدة) ---


// دالة تعديل البيانات (الاسم، العنوان، الوصف)
export async function editSalonData() {


    const user = auth.currentUser;


    if (!user) return;


    const newDescription = prompt("أدخل وصفاً جديداً لأعمال الصالون:");


    if (newDescription !== null) {


        try {


            await updateDoc(doc(db, "salons", user.uid), { 
                workDescription: newDescription 
            });


            alert("تم تحديث وصف الأعمال بنجاح!");


        } catch (error) {


            console.error("خطأ في التحديث:", error);


        }


    }


}


// دالة إضافة صور للمعرض (بشكل مؤقت عبر روابط حتى نبرمج الرفع الكامل)
export async function addWorkImages() {


    const user = auth.currentUser;


    if (!user) return;


    const imageUrl = prompt("أدخل رابط صورة لعملك (URL):");


    if (imageUrl && imageUrl.trim() !== "") {


        try {


            await updateDoc(doc(db, "salons", user.uid), {


                workImages: arrayUnion(imageUrl)


            });


            alert("تم إضافة الصورة للمعرض بنجاح!");


        } catch (error) {


            console.error("خطأ في إضافة الصورة:", error);


        }


    }


}


// ربط الأزرار بالوظائف (لأننا نستخدم type="module")
document.getElementById('btn-edit')?.addEventListener('click', editSalonData);


document.getElementById('btn-photos')?.addEventListener('click', addWorkImages);
