// js/auth.js


/* --- دالة تسجيل صالون جديد (SignUp) --- */


export const signUp = async (email, password, shopName, ownerName, phone, address) => {


    if (!email || !password || !shopName) {


        alert("يرجى ملء جميع الحقول المطلوبة.");


        return;


    }


    try {


        const userCredential = await createUserWithEmailAndPassword(auth, email, password);


        const user = userCredential.user;


        await setDoc(doc(db, "salons", user.uid), {


            shopName: shopName,


            ownerName: ownerName,


            phone: phone,


            address: address,


            uid: user.uid,


            createdAt: new Date()


        });


        alert("تم تسجيل صالونك بنجاح!");


        window.location.href = "dashboard.html";


    } catch (error) {


        console.error("خطأ في التسجيل:", error.message);


        alert("عذراً، حدث خطأ أثناء التسجيل: " + error.message);


    }


};
