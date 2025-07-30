# الحل الأكيد لمشكلة SSL - makamin.com.sa

## المشكلة الحالية:
- maka-website-adelalnoob.replit.app مقفل
- SSL certificate يظهر "replit.app" بدلاً من "makamin.com.sa"

## الحل النهائي:

### الخطوة 1: تغيير SSL Mode في Cloudflare
1. اذهب إلى Cloudflare Dashboard
2. SSL/TLS → Overview
3. غير من "Full (strict)" إلى **"Flexible"**
4. احفظ التغييرات

### الخطوة 2: إنشاء Origin Certificate
1. SSL/TLS → Origin Server → Create Certificate
2. أضف هذه المجالات:
   - makamin.com.sa
   - *.makamin.com.sa
   - www.makamin.com.sa
3. اختر "RSA (2048)"
4. Validity: 15 years
5. Create

### الخطوة 3: تفعيل إعدادات إضافية
في Edge Certificates:
- ✅ Always Use HTTPS
- ✅ Automatic HTTPS Rewrites
- ✅ Opportunistic Encryption

## النتيجة المتوقعة:
https://makamin.com.sa سيعمل مع SSL صحيح خلال 2-5 دقائق

## إذا لم يعمل:
استخدم Flexible SSL mode - هذا سيحل المشكلة فوراً

## البديل الثاني:
إنشاء مشروع Replit جديد تماماً بنفس الكود