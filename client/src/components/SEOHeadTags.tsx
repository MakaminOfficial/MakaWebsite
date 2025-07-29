import { useEffect } from 'react';

interface SEOHeadTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

export default function SEOHeadTags({
  title = 'مكامن السعودية القابضة - عادل عايض النوب، علي البريدي، أحمد الفالح - شركة خدمات النفط والغاز',
  description = 'شركة مكامن السعودية القابضة برأس مال 1.2 مليار ريال. يقودها الرئيس التنفيذي عادل عايض النوب، مدراء العمليات البحرية علي البريدي وأحمد الفالح، رئيس مجلس الإدارة عثمان فاضل الموسى. شراكات مع أرامكو السعودية، مصفاة رأس تنورة، محطة شدقم. شهادات آيزو 9001:2015 من توف نورد، 1980 يوم صفر حوادث.',
  keywords = 'عادل عايض النوب, Adel Ayed ALNOOB, علي البريدي, Ali Al-Braidi, أحمد الفالح, Ahmed Al-Faleh, عثمان فاضل الموسى, Othman Fadel Al-Mousa, إبراهيم أحمد الغامدي, Ibrahim Ahmed Al-Ghamdi, خالد حمدان السيف, Khaled Hamdan Alsaif, حمد القحطاني, Hamad Al-Qahtani, محمد جاسم الفواز, Mohammad Jassim Ibrahim Alfawaz, مكامن السعودية القابضة, Saudi Makamin Holding Company, مكامن أوف شور, Makamin Offshore Saudi, أرامكو السعودية, Saudi Aramco, مصفاة رأس تنورة, Ras Tanura Refinery, محطة شدقم, SHEDGUM GOSP-4, آيزو 9001:2015, ISO 9001:2015, توف نورد, TÜV NORD CERT, 1980 يوم صفر حوادث, 1980 days zero accident, 1.2 مليار ريال, SAR 1.2 billion, السجل التجاري, Commercial Registration, CR-1010251168, الفحص غير المدمر, NDT, RT, MT, PT, UT, API Inspector, T&I Shutdown, Pipeline Services',
  canonicalUrl
}: SEOHeadTagsProps) {
  
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Core SEO meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('author', 'Saudi Makamin Holding Company');

    // Open Graph tags for social media
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', 'Saudi Makamin Holding Company', true);
    updateMetaTag('og:locale', 'ar_SA', true);
    updateMetaTag('og:locale:alternate', 'en_SA', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:site', '@MakaminSaudi');

    // Language and region
    updateMetaTag('language', 'Arabic, English');
    document.documentElement.lang = 'ar-SA';

    // Canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }

    // Enhanced structured data for maximum SEO impact
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://makamin.com.sa/#organization",
          "name": "Saudi Makamin Holding Company",
          "alternateName": ["مكامن السعودية القابضة", "Makamin Saudi", "مكامن"],
          "url": "https://makamin.com.sa",
          "logo": "https://makamin.com.sa/images/makamin-logo.png",
          "description": description,
          "foundingDate": "2008",
          "industry": "Oil and Gas Services",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "SA",
            "addressLocality": "Riyadh",
            "streetAddress": "Riyadh, Kingdom of Saudi Arabia"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+966 13 8055966",
            "email": "info@makamin.com.sa",
            "contactType": "customer service"
          },
          "employee": [
            {
              "@type": "Person",
              "name": "Adel Ayed ALNOOB",
              "alternateName": ["عادل عايض النوب", "Adel Ayed Al-Noub"],
              "jobTitle": "Chief Executive Officer",
              "worksFor": { "@id": "https://makamin.com.sa/#organization" }
            },
            {
              "@type": "Person",
              "name": "Ali Al-Braidi",
              "alternateName": ["علي البريدي", "Ali Al-Bureidi"],
              "jobTitle": "Offshore Operations Manager",
              "worksFor": { "@id": "https://makamin.com.sa/#organization" }
            },
            {
              "@type": "Person",
              "name": "Ahmed Al-Faleh",
              "alternateName": ["أحمد الفالح"],
              "jobTitle": "Offshore Operations Manager",
              "worksFor": { "@id": "https://makamin.com.sa/#organization" }
            },
            {
              "@type": "Person",
              "name": "Othman Fadel Al-Mousa",
              "alternateName": ["عثمان فاضل الموسى"],
              "jobTitle": "Chairman of the Board",
              "worksFor": { "@id": "https://makamin.com.sa/#organization" }
            }
          ],
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "name": "TÜV NORD ISO 9001:2008 Certificate",
              "credentialCategory": "Quality Management"
            },
            {
              "@type": "EducationalOccupationalCredential", 
              "name": "1980 Days Zero Lost Time Accident Record",
              "credentialCategory": "Safety Excellence"
            }
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://makamin.com.sa/#website",
          "url": "https://makamin.com.sa",
          "name": "Saudi Makamin Holding Company",
          "description": description,
          "publisher": { "@id": "https://makamin.com.sa/#organization" },
          "inLanguage": ["ar-SA", "en-SA"],
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://makamin.com.sa/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        }
      ]
    };

    // Insert or update JSON-LD
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData, null, 2);

  }, [title, description, keywords, canonicalUrl]);

  return null;
}