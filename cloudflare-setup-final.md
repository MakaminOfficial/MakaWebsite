# إعداد Cloudflare النهائي لمكامن

## ما تحتاج فعله الآن في Cloudflare:

### 1. إضافة DNS Records:
```
Type: A
Name: @
Content: 34.117.33.233
Proxy status: Proxied (☁️)

Type: A  
Name: www
Content: 34.117.33.233
Proxy status: Proxied (☁️)

Type: CNAME
Name: replit-verify
Content: 6059f2cf-dc7a-4ba2-8489-b86d9b7880c4
Proxy status: DNS only (⚫)
```

### 2. SSL/TLS Settings:
- اذهب إلى SSL/TLS
- اختر "Full (strict)"
- فعل "Always Use HTTPS"

### 3. Page Rules (اختياري):
```
URL: makamin.com.sa/*
Settings: Always Use HTTPS
```

### 4. Security Settings:
- Security Level: Medium
- Bot Fight Mode: On
- Browser Integrity Check: On

### 5. Speed Settings:
- Auto Minify: CSS, JavaScript, HTML
- Brotli: On
- Rocket Loader: On

## النتيجة النهائية:
- https://makamin.com.sa ← يعمل مع SSL صحيح
- https://www.makamin.com.sa ← يعمل مع SSL صحيح
- جميع الصفحات تعمل بسرعة عالية
- حماية DDoS تلقائية

## للتحقق:
انتظر 5 دقائق ثم ادخل على:
https://makamin.com.sa

يجب أن ترى قفل أخضر في المتصفح ✅