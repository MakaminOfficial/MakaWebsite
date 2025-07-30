# الحل النهائي - Invalid SSL certificate Error 526

## الوضع الحالي:
✅ Cloudflare يعمل ويتصل بالموقع
❌ SSL certificate غير صحيح - Error 526
❌ Host: makamin.com.sa يظهر "Error"

## الحل الفوري في Cloudflare:

### الخطوة 1: تغيير SSL Mode
1. اذهب إلى dashboard.cloudflare.com
2. اختر makamin.com.sa
3. SSL/TLS → Overview
4. غير من "Full (strict)" إلى **"Flexible"**
5. احفظ التغييرات

### الخطوة 2: تأكد من الإعدادات
في Edge Certificates:
- ✅ Always Use HTTPS
- ✅ Automatic HTTPS Rewrites

### سبب المشكلة:
- Cloudflare يحاول التحقق من SSL certificate في الخادم
- Replit لا يملك شهادة صالحة لـ makamin.com.sa
- "Flexible" يحل هذه المشكلة

### النتيجة المتوقعة:
- Host: makamin.com.sa سيتحول إلى "Working"
- الموقع سيعمل خلال 1-2 دقيقة
- SSL سيعمل مثالياً

## إذا لم يعمل "Flexible":
استخدم "Off (not secure)" مؤقتاً حتى نحل المشكلة