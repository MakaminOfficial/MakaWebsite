# استكشاف أخطاء التحقق من النطاق

## الوضع الحالي:
- Status: "Verifying" لأكثر من 5 دقائق
- التحقق يستغرق وقتاً أطول من المتوقع

## الحلول المتدرجة:

### 1. التحقق من DNS Propagation
```bash
nslookup -type=TXT makamin.com.sa
```
يجب أن يظهر TXT record

### 2. تحديث الصفحة في Replit
- أعد تحميل صفحة Domains في Replit
- أحياناً لا يحدث refresh تلقائي

### 3. حذف وإعادة إضافة TXT Record
في Cloudflare:
- احذف TXT record الحالي
- انتظر 30 ثانية
- أضفه مرة أخرى بنفس القيم

### 4. جرب Name مختلف
غير Name في TXT record إلى:
- فارغ (blank)
- makamin.com.sa (بدون @)
- makamin.com.sa. (بنقطة في النهاية)

### 5. البديل المؤقت
إذا لم يعمل التحقق:
- استخدم subdomain مؤقت
- أو استخدم www.makamin.com.sa بدلاً من makamin.com.sa

## الأوقات المعتادة:
- التحقق العادي: 2-5 دقائق
- في حالات الزحام: 10-15 دقيقة
- DNS Propagation: حتى 24 ساعة (نادر)

## التحقق اليدوي:
تأكد من أن TXT record موجود فعلاً في DNS