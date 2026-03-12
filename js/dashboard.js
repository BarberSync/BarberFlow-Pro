

// الانتظار حتى تحميل الصفحة بالكامل قبل البدء


document.addEventListener('DOMContentLoaded', () => {


    console.log("تم تفعيل لوحة التحكم - BarberFlow-Pro");


    checkAuthState();


});


// --- حزمة التحقق من الهوية (Authentication) ---


function checkAuthState() {


    firebase.auth().onAuthStateChanged((user) => {


        if (user) {


            console.log("مرحباً بك، المستخدم متصل:", user.email);


            loadSalonData(user.uid);


        } else {


            console.warn("لا يوجد مستخدم متصل، جاري التحويل لصفحة الدخول...");


            window.location.href = "login.html";


        }


    });


}


// --- حزمة جلب البيانات من Firebase Database ---


function loadSalonData(uid) {


    const salonRef = firebase.database().ref('salons/' + uid);


    // استخدام 'on' يجعل البيانات تتحدث فوراً عند تغييرها في Firebase


    salonRef.on('value', (snapshot) => {


        const data = snapshot.val();


        const nameDisplay = document.getElementById('display-salon-name');


        if (data && data.name) {


            nameDisplay.innerText = data.name;


        } else {


            nameDisplay.innerText = "اسم الصالون غير محدد";


        }


    }, (error) => {


        console.error("خطأ في جلب البيانات من Firebase:", error);


    });


}


// --- حزمة أزرار التحكم والوظائف ---


function editData() {


    const user = firebase.auth().currentUser;


    if (!user) return;


    const newName = prompt("أدخل اسم الصالون الجديد:");


    if (newName && newName.trim() !== "") {


        firebase.database().ref('salons/' + user.uid).update({


            name: newName


        }).then(() => {


            alert("تم تحديث البيانات بنجاح!");


        }).catch((error) => {


            alert("حدث خطأ أثناء الحفظ: " + error.message);


        });


    }


}


function changePhotos() {


    // وظيفة لاختيار ملف من الجهاز


    const fileInput = document.createElement('input');


    fileInput.type = 'file';


    fileInput.accept = 'image/*';


    fileInput.onchange = (e) => {


        const file = e.target.files[0];


        if (file) {


            alert("تم اختيار الصورة: " + file.name + "\n(سيتم تفعيل الرفع لـ Firebase Storage في التحديث القادم)");


        }


    };


    fileInput.click();


}


function openSettings() {


    alert("جاري فتح الإعدادات المتقدمة...");


}


function logout() {


    if (confirm("هل أنت متأكد من رغبتك في تسجيل الخروج؟")) {


        firebase.auth().signOut().then(() => {


            window.location.href = "login.html";


        }).catch((error) => {


            console.error("خطأ أثناء تسجيل الخروج:", error);


        });


    }


}


