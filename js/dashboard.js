<div class="dropdown">


  <button class="dropbtn">⚙️ الإعدادات</button>


  <div class="dropdown-content">


    <a href="#" onclick="openModal('loginModal')">تعديل بيانات الدخول</a>


    <a href="#" onclick="openModal('salonModal')">معلومات الصالون</a>


  </div>


</div>


<div class="dropdown">


  <button class="dropbtn">📊 إدارة العرض</button>


  <div class="dropdown-content">


    <a href="#" onclick="openModal('servicesModal')">تعديل الخدمات</a>


    <a href="#" onclick="openModal('descriptionModal')">تعديل الوصف</a>


  </div>


</div>


<div class="dropdown">


  <button class="dropbtn">🖼️ معرض الصور</button>


  <div class="dropdown-content">


    <a href="#" onclick="triggerUpload('profilePic')">تغيير صورة البروفايل</a>


    <a href="#" onclick="triggerUpload('coverPic')">تغيير صورة الغلاف</a>


    <a href="#" onclick="triggerUpload('galleryPics')">إضافة لصور المعرض</a>


  </div>


</div>


<button class="logout-btn" onclick="goToHome()">🚪 خروج</button>


<input type="file" id="profilePic" style="display:none" accept="image/*" onchange="handleFileUpload(this, 'profile')">


<input type="file" id="coverPic" style="display:none" accept="image/*" onchange="handleFileUpload(this, 'cover')">


<input type="file" id="galleryPics" style="display:none" accept="image/*" multiple onchange="handleFileUpload(this, 'gallery')">
