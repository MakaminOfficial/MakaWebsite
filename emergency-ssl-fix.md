# حل طارئ لمشكلة SSL - NET::ERR_CERT_COMMON_NAME_INVALID

## المشكلة:
SSL certificate لا يطابق makamin.com.sa

## الحل الفوري:

### في Cloudflare:

1. **اذهب إلى SSL/TLS → Origin Server**
2. **اضغط "Create Certificate"**
3. **أضف هذه Hostnames:**
   ```
   makamin.com.sa
   *.makamin.com.sa
   www.makamin.com.sa
   ```
4. **اختر "RSA (2048)"**
5. **Validity: 15 years**
6. **اضغط "Create"**

### أو حل أسرع:

1. **SSL/TLS → Edge Certificates**
2. **اضغط "Order SSL Certificate"**
3. **اختر "Dedicated Certificate"**
4. **أضف makamin.com.sa**

### الحل البديل الفوري:
غير SSL mode إلى **"Flexible"** بدلاً من "Full (strict)"

هذا سيحل المشكلة خلال دقائق.