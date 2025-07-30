# خطوات إعادة إضافة النطاق في Replit

## الخطوات الصحيحة:

### 1. إضافة النطاق الجديد
في Replit Domains:
- اضغط "+ Buy a new domain" أو "Add domain"
- اكتب: **makamin.com.sa**
- اختر "I already own this domain"

### 2. تأكيد الملكية
Replit سيطلب التحقق من ملكية النطاق:
- سيعطيك TXT record للإضافة في Cloudflare
- انسخ القيمة المعطاة

### 3. إضافة TXT Record في Cloudflare
1. اذهب إلى Cloudflare DNS
2. اضغط "Add record"
3. Type: **TXT**
4. Name: **makamin.com.sa** (أو @ إذا طلب)
5. Content: **[القيمة من Replit]**
6. Proxy status: **DNS only** (رمادي)
7. احفظ

### 4. العودة إلى Replit
- اضغط "Verify" أو "Check verification"
- انتظر 2-5 دقائق

### 5. تكوين DNS في Replit
بعد التحقق، سيطلب منك:
- A record pointing to: **[IP address من Replit]**

### 6. تحديث A Record في Cloudflare
غير A record في Cloudflare إلى IP الجديد من Replit

## النتيجة المتوقعة:
✅ makamin.com.sa سيظهر "Active" مع SSL تلقائي
✅ الموقع سيعمل خلال 10 دقائق

ابدأ بالخطوة الأولى!