# إصلاح Replit SSL Certificate - makamin.com.sa

## المشكلة:
❌ في Replit: makamin.com.sa يظهر "Failed"
❌ Replit يحتاج SSL certificate مخصص للنطاق

## الحل النهائي:

### الخطوة 1: إنشاء Origin Certificate في Cloudflare
1. اذهب إلى Cloudflare → SSL/TLS → Origin Server
2. اضغط "Create Certificate" 
3. في Hostnames أضف:
   - makamin.com.sa
   - *.makamin.com.sa
4. اختر "RSA (2048)"
5. Validity: 15 years
6. اضغط "Create"

### الخطوة 2: نسخ Certificate و Private Key
1. انسخ "Origin Certificate" (النص الطويل)
2. انسخ "Private Key" (النص الطويل)

### الخطوة 3: رفع Certificate إلى Replit
1. في Replit → Domains → makamin.com.sa
2. اضغط على الإعدادات أو "Configure SSL"
3. الصق Origin Certificate في حقل "Certificate"
4. الصق Private Key في حقل "Private Key"
5. احفظ التغييرات

### الخطوة 4: انتظار التفعيل
- انتظر 2-5 دقائق
- Status سيتغير من "Failed" إلى "Active"

## البديل إذا لم تجد إعدادات SSL:
1. احذف النطاق makamin.com.sa من Replit
2. أضفه مرة أخرى
3. سيطلب منك SSL certificate
4. الصق Certificate و Private Key

## النتيجة المتوقعة:
✅ makamin.com.sa سيظهر "Active" بدلاً من "Failed"
✅ الموقع سيعمل مثالياً على https://makamin.com.sa