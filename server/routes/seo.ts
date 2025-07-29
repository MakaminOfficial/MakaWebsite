import { Router } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

// Serve sitemap.xml
router.get('/sitemap.xml', (req, res) => {
  res.set('Content-Type', 'application/xml');
  res.sendFile(path.join(__dirname, '../../client/public/sitemap.xml'));
});

// Serve robots.txt
router.get('/robots.txt', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.sendFile(path.join(__dirname, '../../client/public/robots.txt'));
});

// SEO-optimized API endpoints for dynamic content
router.get('/api/seo/personnel', (req, res) => {
  const personnel = [
    {
      name: 'عادل عايض النوب',
      nameEn: 'Adel Ayed ALNOOB',
      position: 'الرئيس التنفيذي',
      positionEn: 'Chief Executive Officer',
      keywords: ['عادل النوب', 'Adel ALNOOB', 'CEO مكامن', 'Makamin CEO'],
      bio: 'الرئيس التنفيذي لشركة مكامن السعودية القابضة، معين بموجب قرار الجمعية العمومية 2025',
      bioEn: 'Chief Executive Officer of Saudi Makamin Holding Company, appointed by General Assembly Decision 2025'
    },
    {
      name: 'علي البريدي',
      nameEn: 'Ali Al-Braidi',
      position: 'مدير العمليات البحرية',
      positionEn: 'Offshore Operations Manager',
      keywords: ['علي البريدي', 'Ali Al-Bureidi', 'مدير بحري', 'Offshore Manager'],
      bio: 'مدير العمليات البحرية لشركة مكامن أوف شور السعودية، مسؤول منذ التأسيس',
      bioEn: 'Offshore Operations Manager for Makamin Offshore Saudi Ltd, responsible since establishment'
    },
    {
      name: 'أحمد الفالح',
      nameEn: 'Ahmed Al-Faleh',
      position: 'مدير العمليات البحرية',
      positionEn: 'Offshore Operations Manager',
      keywords: ['أحمد الفالح', 'Ahmed Al-Faleh', 'مدير بحري', 'Offshore Manager'],
      bio: 'مدير العمليات البحرية لشركة مكامن أوف شور السعودية، مسؤول منذ التأسيس',
      bioEn: 'Offshore Operations Manager for Makamin Offshore Saudi Ltd, responsible since establishment'
    },
    {
      name: 'عثمان فاضل الموسى',
      nameEn: 'Othman Fadel Al-Mousa',
      position: 'رئيس مجلس الإدارة',
      positionEn: 'Chairman of the Board',
      keywords: ['عثمان الموسى', 'Othman Al-Mousa', 'رئيس مجلس الإدارة', 'Chairman'],
      bio: 'رئيس مجلس إدارة شركة مكامن السعودية القابضة، منتخب للفترة 2025-2029',
      bioEn: 'Chairman of the Board of Saudi Makamin Holding Company, elected for 2025-2029 term'
    }
  ];
  
  res.json({
    personnel,
    meta: {
      title: 'فريق القيادة - مكامن السعودية القابضة | Leadership Team - Saudi Makamin Holding',
      description: 'تعرف على فريق القيادة في مكامن السعودية القابضة: عادل عايض النوب، علي البريدي، أحمد الفالح، عثمان فاضل الموسى',
      keywords: personnel.flatMap(p => p.keywords).join(', ')
    }
  });
});

router.get('/api/seo/projects', (req, res) => {
  const projects = [
    {
      name: 'مشروع الإغلاق الضخم RTR 2012',
      nameEn: 'RTR Mega Shutdown Project 2012',
      client: 'أرامكو السعودية - مصفاة رأس تنورة',
      clientEn: 'Saudi Aramco - Ras Tanura Refinery',
      keywords: ['RTR', 'رأس تنورة', 'Ras Tanura', 'أرامكو', 'Aramco', 'إغلاق ضخم', 'Mega Shutdown'],
      description: 'مشروع الإغلاق الضخم لمصفاة رأس تنورة، توريد مفتشين API ذوي خبرة',
      descriptionEn: 'RTR Mega Shutdown project, supplying experienced API inspectors'
    },
    {
      name: 'مشروع محطة شدقم GOSP-4',
      nameEn: 'SHEDGUM GOSP-4 Project',
      client: 'أرامكو السعودية',
      clientEn: 'Saudi Aramco',
      keywords: ['شدقم', 'SHEDGUM', 'GOSP-4', 'T&I Shutdown', 'أنابيب', 'Pipeline'],
      description: 'إنجاز 7 نقاط ربط جديدة في محطة شدقم لمعالجة الغاز',
      descriptionEn: 'Completion of 7 new tie-in points at SHEDGUM gas processing facility'
    },
    {
      name: 'مشروع محطة التوربينات الغازية - الخفجي',
      nameEn: 'Gas Turbine Generator Plant Project - Khafji',
      client: 'العمليات المشتركة بالخفجي',
      clientEn: 'Khafji Joint Operation',
      keywords: ['الخفجي', 'Khafji', 'توربينات غازية', 'Gas Turbine', 'NDT', 'الفحص غير المدمر'],
      description: 'مشروع محطة مولدات التوربينات الغازية الرابعة بالخفجي - خدمات الفحص غير المدمر',
      descriptionEn: '4th Gas Turbine Generator Plant Project in Khafji - Non-Destructive Testing services'
    }
  ];
  
  res.json({
    projects,
    meta: {
      title: 'مشاريع مكامن - أرامكو والخفجي | Makamin Projects - Aramco & Khafji',
      description: 'مشاريع مكامن السعودية مع أرامكو: RTR رأس تنورة، شدقم GOSP-4، الخفجي للتوربينات الغازية',
      keywords: projects.flatMap(p => p.keywords).join(', ')
    }
  });
});

router.get('/api/seo/certifications', (req, res) => {
  const certifications = [
    {
      name: 'شهادة توف نورد آيزو 9001:2008',
      nameEn: 'TÜV NORD ISO 9001:2008 Certificate',
      authority: 'TÜV NORD CERT GmbH',
      number: '44 100 1957 6040',
      keywords: ['آيزو 9001', 'ISO 9001', 'توف نورد', 'TÜV NORD', 'إدارة الجودة', 'Quality Management'],
      description: 'شهادة نظام إدارة الجودة آيزو 9001:2008 من توف نورد سيرت',
      descriptionEn: 'ISO 9001:2008 Quality Management System Certificate from TÜV NORD CERT'
    },
    {
      name: 'شهادة تقدير أرامكو السعودية',
      nameEn: 'Saudi Aramco Certificate of Appreciation',
      authority: 'Saudi Aramco',
      keywords: ['أرامكو', 'Aramco', 'تقدير', 'Appreciation', 'مقاول معتمد', 'Approved Contractor'],
      description: 'شهادات تقدير متعددة من أرامكو السعودية للأداء المتميز',
      descriptionEn: 'Multiple appreciation certificates from Saudi Aramco for outstanding performance'
    },
    {
      name: 'سجل السلامة - 1980 يوم صفر حوادث',
      nameEn: '1980 Days Zero Lost Time Accident Record',
      authority: 'Internal HSE Department',
      keywords: ['1980 يوم', '1980 days', 'صفر حوادث', 'zero accident', 'LTA', 'السلامة', 'Safety'],
      description: 'سجل معتمد لـ 1980 يوماً متتالياً بدون حوادث وقت مفقود',
      descriptionEn: 'Certified record of 1980 consecutive days without lost time accidents'
    }
  ];
  
  res.json({
    certifications,
    meta: {
      title: 'شهادات مكامن - آيزو وأرامكو والسلامة | Makamin Certificates - ISO, Aramco & Safety',
      description: 'شهادات مكامن السعودية: آيزو 9001 توف نورد، تقدير أرامكو، 1980 يوم صفر حوادث',
      keywords: certifications.flatMap(c => c.keywords).join(', ')
    }
  });
});

export default router;