# إصلاح DNS Records - makamin.com.sa

## المشكلة المكتشفة:
❌ A record لـ makamin.com.sa يشير إلى 34.111.179.208
❌ A record لـ www يشير إلى 34.117.33.233
❌ عنوانين مختلفين يسببان تضارب في التوجيه

## الحل الفوري:

### الخطوة 1: توحيد IP Address
1. في DNS Records
2. غير www A record من 34.117.33.233 إلى **34.111.179.208**
3. أو غير makamin.com.sa من 34.111.179.208 إلى **34.117.33.233**

### الخطوة 2: تأكد من Proxy Status
- ✅ makamin.com.sa: Proxied (Orange Cloud)
- ✅ www: Proxied (Orange Cloud)

### الخطوة 3: إضافة CNAME (البديل الأفضل)
بدلاً من A record للـ www:
- احذف A record للـ www
- أضف CNAME record:
  - Name: www
  - Content: makamin.com.sa
  - Proxy status: Proxied

## سبب المشكلة:
عندما يزور شخص makamin.com.sa يذهب لـ IP واحد
وعندما يزور www.makamin.com.sa يذهب لـ IP مختلف
هذا يسبب تضارب وعدم عمل الموقع

## النتيجة المتوقعة:
- جميع الزيارات ستذهب لنفس الخادم
- الموقع سيعمل على makamin.com.sa و www.makamin.com.sa
- SSL سيعمل مثالياً