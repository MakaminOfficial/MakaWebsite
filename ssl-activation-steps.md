# حل مشكلة SSL - makamin.com.sa (Failed)

## الوضع الحالي (من الصورة):
✅ النشر نجح - "ADEL deployed 5 minutes ago"  
✅ النطاق مربوط - https://makamin.com.sa  
❌ يظهر "(failed)" - مشكلة SSL  

## الحل الفوري:

### في Cloudflare Dashboard:

1. **SSL/TLS → Overview**
2. **غير SSL mode من "Full (strict)" إلى "Flexible"**
3. **انتظر 2-3 دقائق**

### لماذا سيعمل:
- Replit يرسل HTTP traffic
- Cloudflare يحول إلى HTTPS للزوار
- يحل مشكلة certificate mismatch

### إذا لم يعمل "Flexible":

1. **SSL/TLS → Origin Server**
2. **Create Certificate**
3. **أضف: makamin.com.sa و *.makamin.com.sa**
4. **Copy Certificate و Private Key**
5. **في Replit: Settings → Custom Domain → SSL Certificate**
6. **Paste Certificate و Private Key**

## النتيجة المتوقعة:
makamin.com.sa سيتحول من "(failed)" إلى "✅ Active"