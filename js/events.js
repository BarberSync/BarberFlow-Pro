import { loginUser, registerUser, logoutUser } from './auth.js';


// معالجة حدث تسجيل الدخول
const loginForm = document.getElementById('loginForm');


if (loginForm) {


    loginForm.addEventListener('submit', async (e) => {


        e.preventDefault();


        const email = document.getElementById('loginEmail').value;


        const password = document.getElementById('loginPassword').value;


        try {


            await loginUser(email, password);


            alert('تم تسجيل الدخول بنجاح!');


            window.location.href = 'dashboard.html';


        } catch (error) {


            alert('خطأ في تسجيل الدخول: ' + error.message);


        }


    });


}


// معالجة حدث تسجيل الخروج (مثلاً في صفحة لوحة التحكم)
const btnLogout = document.getElementById('btn-logout');


if (btnLogout) {


    btnLogout.addEventListener('click', async () => {


        try {


            await logoutUser();


            window.location.href = 'login.html';


        } catch (error) {


            alert('خطأ أثناء الخروج: ' + error.message);


        }


    });


}
