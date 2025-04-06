# 📚 پروژه تمرینی Git - آموزش مقدماتی  

این یک پروژه تمرینی برای یادگیری **Git و GitHub** است. در این مخزن، میتوانید با مفاهیم پایهٔ گیت مثل commit، branch، merge و... آشنا شوید و آن‌ها را تمرین کنید.  

---

## 🛠️ نحوه شروع  

### پیش‌نیازها  
- نصب [Git](https://git-scm.com/)  
- یک حساب [GitHub](https://github.com/)  

### راه‌اندازی پروژه  
1. مخزن را کلون کنید:  
   ```bash
   git clone https://github.com/username/git-practice-project.git
   ```
2. وارد پوشهٔ پروژه شوید:  
   ```bash
   cd git-practice-project
   ```

---

## 🧪 تمرین‌های پیشنهادی  

### ۱. اولین commit خود را ایجاد کنید  
- یک فایل جدید بسازید (مثلاً `hello.txt`).  
- آن را به staged تغییرات اضافه کنید:  
  ```bash
  git add hello.txt
  ```
- commit کنید:  
  ```bash
  git commit -m "اضافه کردن فایل hello"
  ```

### ۲. کار با شاخه‌ها (branch)  
- یک branch جدید بسازید و به آن سوییچ کنید:  
  ```bash
  git checkout -b feature/new-feature
  ```
- تغییرات را commit کنید و به main برگردید:  
  ```bash
  git checkout main
  ```
- branch را merge کنید:  
  ```bash
  git merge feature/new-feature
  ```

### ۳. همگام‌سازی با GitHub  
- تغییرات را به GitHub push کنید:  
  ```bash
  git push origin main
  ```

---

## ⁉️ کمک و مشارکت  
اگر سوالی دارید یا می‌خواهید مشارکت کنید:  
1. یک **Issue** در گیتهاب باز کنید.  
2. یا یک **Pull Request** ارسال کنید.  

---

## 📜 مجوز  
این پروژه تحت مجوز **MIT** است.  

--- 

**🎉 حالا شما با Git آشنا شدید!**  
می‌توانید این پروژه را توسعه دهید یا از آن به عنوان پایهٔ یادگیری استفاده کنید.